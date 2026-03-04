/**
 * kly-sweden-search.js
 * Sweden-first, åäö-sensitive search for kly.se using /resources/sweden-places.json
 *
 * Usage:
 *  1) Load places once: await KlySwedenSearch.loadPlaces('/resources/sweden-places.json')
 *  2) Call: KlySwedenSearch.search(query, { limit: 12 })
 *
 * Notes:
 *  - Strict matching respects ä/å/ö.
 *  - Folded matching (ä/å/ö -> a/a/o) is only used when query has no diacritics.
 *  - Matches are prefix-based (startsWith) to avoid noisy results.
 */

(function (global) {
  "use strict";

  const DEFAULT_LIMIT = 12;

  function normalizeStrict(s) {
    return (s ?? "").toString().toLowerCase().trim();
  }

  // Fold Swedish diacritics only (keeps other chars intact)
  function normalizeFolded(s) {
    return normalizeStrict(s)
      .replace(/å/g, "a")
      .replace(/ä/g, "a")
      .replace(/ö/g, "o");
  }

  function typeWeight(type) {
    switch (type) {
      case "major_city": return 1000;
      case "city": return 900;
      case "town": return 800;
      case "resort": return 720;
      case "destination": return 680;
      case "locality": return 600;
      case "municipality": return 500;
      case "island": return 650;
      case "national_park": return 640;
      default: return 0;
    }
  }

  function placeLabel(p) {
    // Example: "Säfsen — Dalarnas län (resort)"
    const type = p.type ? ` (${p.type.replace(/_/g, " ")})` : "";
    return `${p.name} — ${p.county}${type}`;
  }

  const KlySwedenSearch = {
    _places: [],
    _loaded: false,

    async loadPlaces(jsonUrl) {
      const res = await fetch(jsonUrl, { cache: "force-cache" });
      if (!res.ok) throw new Error(`Failed to load places: ${res.status}`);
      const data = await res.json();
      if (!data || !Array.isArray(data.places)) {
        throw new Error("Invalid sweden-places.json format (expected { places: [...] })");
      }
      this._places = data.places;
      this._loaded = true;
      return this._places.length;
    },

    isLoaded() {
      return this._loaded;
    },

    getPlaces() {
      return this._places;
    },

    search(query, options = {}) {
      const limit = Number.isFinite(options.limit) ? options.limit : DEFAULT_LIMIT;
      const minChars = Number.isFinite(options.minChars) ? options.minChars : 2;

      if (!query) return [];
      const qRaw = query.toString();
      if (qRaw.trim().length < minChars) return [];

      const qStrict = normalizeStrict(qRaw);
      const qFold = normalizeFolded(qRaw);
      const queryHasDiacritics = /[åäö]/i.test(qRaw);

      const results = [];

      for (const p of this._places) {
        const searchable = [p.name, ...(p.aliases || [])].filter(Boolean);

        let matchTier = -1; // 3=best, 2=fallback

        for (const str of searchable) {
          const sStrict = normalizeStrict(str);

          // Best: strict prefix (ä/å/ö preserved)
          if (sStrict.startsWith(qStrict)) {
            matchTier = 3;
            break;
          }

          // Fallback: folded prefix only if query has no diacritics
          if (!queryHasDiacritics) {
            const sFold = normalizeFolded(str);
            if (sFold.startsWith(qFold)) {
              matchTier = Math.max(matchTier, 2);
            }
          }
        }

        if (matchTier >= 0) {
          const pop = typeof p.population === "number" ? p.population : 0;

          const score =
            matchTier * 10000 +
            typeWeight(p.type) +
            Math.min(200, pop / 1000);

          results.push({ place: p, score });
        }
      }

      results.sort((a, b) => b.score - a.score);
      return results.slice(0, limit).map(r => r.place);
    },

    label(place) {
      return placeLabel(place);
    }
  };

  global.KlySwedenSearch = KlySwedenSearch;
})(window);
