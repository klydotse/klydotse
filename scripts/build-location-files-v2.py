import json, re, copy, pathlib
from collections import defaultdict, Counter

ROOT = pathlib.Path('/mnt/data/kly_work/kly-v4-spec-demo-build')
RES = ROOT / 'resources'

orig = json.loads((RES / 'sweden-places.json').read_text())
places = orig['places']

COUNTY_MAP = {
    'Blekinge län': 'Blekinge län',
    'Dalarna län': 'Dalarnas län',
    'Dalarnas län': 'Dalarnas län',
    'Gotland län': 'Gotlands län',
    'Gotlands län': 'Gotlands län',
    'Gävleborg län': 'Gävleborgs län',
    'Gävleborgs län': 'Gävleborgs län',
    'Halland län': 'Hallands län',
    'Hallands län': 'Hallands län',
    'Jämtland län': 'Jämtlands län',
    'Jämtlands län': 'Jämtlands län',
    'Jönköping län': 'Jönköpings län',
    'Jönköpings län': 'Jönköpings län',
    'Kalmar län': 'Kalmar län',
    'Kronoberg län': 'Kronobergs län',
    'Kronobergs län': 'Kronobergs län',
    'Norrbotten län': 'Norrbottens län',
    'Norrbottens län': 'Norrbottens län',
    'Skåne län': 'Skåne län',
    'Stockholm län': 'Stockholms län',
    'Stockholms län': 'Stockholms län',
    'Södermanland län': 'Södermanlands län',
    'Södermanlands län': 'Södermanlands län',
    'Uppsala län': 'Uppsala län',
    'Värmland län': 'Värmlands län',
    'Värmlands län': 'Värmlands län',
    'Västerbotten län': 'Västerbottens län',
    'Västerbottens län': 'Västerbottens län',
    'Västernorrland län': 'Västernorrlands län',
    'Västernorrlands län': 'Västernorrlands län',
    'Västmanland län': 'Västmanlands län',
    'Västmanlands län': 'Västmanlands län',
    'Västra Götaland län': 'Västra Götalands län',
    'Västra Götalands län': 'Västra Götalands län',
    'Örebro län': 'Örebro län',
    'Östergötland län': 'Östergötlands län',
    'Östergötlands län': 'Östergötands län',
}
# correct typo if introduced by older file versions
COUNTY_MAP['Östergötands län'] = 'Östergötlands län'

TYPE_SCORE = {
    'major_city': 100,
    'city': 95,
    'town': 90,
    'locality': 82,
    'resort': 80,
    'destination': 78,
    'island': 76,
    'national_park': 74,
    'municipality': 50,
    'district': 72,
    'abroad_city': 45,
}

ABROAD_SEED = [
    ('Köpenhamn', 'Hovedstaden', 'Danmark', 'DK'),
    ('Oslo', 'Oslo', 'Norge', 'NO'),
    ('Helsingfors', 'Nyland', 'Finland', 'FI'),
    ('London', 'England', 'Storbritannien', 'GB'),
    ('Manchester', 'England', 'Storbritannien', 'GB'),
    ('Paris', 'Île-de-France', 'Frankrike', 'FR'),
    ('Nice', 'Provence-Alpes-Côte d’Azur', 'Frankrike', 'FR'),
    ('Berlin', 'Berlin', 'Tyskland', 'DE'),
    ('Hamburg', 'Hamburg', 'Tyskland', 'DE'),
    ('Amsterdam', 'Noord-Holland', 'Nederländerna', 'NL'),
    ('Bryssel', 'Brysselregionen', 'Belgien', 'BE'),
    ('Wien', 'Wien', 'Österrike', 'AT'),
    ('Prag', 'Prag', 'Tjeckien', 'CZ'),
    ('Warszawa', 'Mazovien', 'Polen', 'PL'),
    ('Kraków', 'Lillpolen', 'Polen', 'PL'),
    ('Budapest', 'Budapest', 'Ungern', 'HU'),
    ('Rom', 'Lazio', 'Italien', 'IT'),
    ('Milano', 'Lombardiet', 'Italien', 'IT'),
    ('Venedig', 'Veneto', 'Italien', 'IT'),
    ('Barcelona', 'Katalonien', 'Spanien', 'ES'),
    ('Madrid', 'Madrid', 'Spanien', 'ES'),
    ('Málaga', 'Andalusien', 'Spanien', 'ES'),
    ('Alicante', 'Valencia', 'Spanien', 'ES'),
    ('Palma', 'Balearerna', 'Spanien', 'ES'),
    ('Lissabon', 'Lissabon', 'Portugal', 'PT'),
    ('Porto', 'Porto', 'Portugal', 'PT'),
    ('Aten', 'Attika', 'Grekland', 'GR'),
    ('Chania', 'Kreta', 'Grekland', 'GR'),
    ('Rhodos', 'Södra Egeiska öarna', 'Grekland', 'GR'),
    ('Split', 'Split-Dalmatien', 'Kroatien', 'HR'),
    ('Dubrovnik', 'Dubrovnik-Neretva', 'Kroatien', 'HR'),
    ('Zürich', 'Zürich', 'Schweiz', 'CH'),
    ('Genève', 'Genève', 'Schweiz', 'CH'),
    ('New York', 'New York', 'USA', 'US'),
    ('Newark', 'New Jersey', 'USA', 'US'),
    ('Bangkok', 'Bangkok', 'Thailand', 'TH'),
    ('Phuket', 'Phuket', 'Thailand', 'TH'),
    ('Tokyo', 'Tokyo', 'Japan', 'JP'),
    ('Dubai', 'Dubai', 'Förenade arabemiraten', 'AE'),
    ('Antalya', 'Antalya', 'Turkiet', 'TR'),
]

LOCAL_AREA_SEED = [
    {
        'id': 'aspudden-stockholm', 'name': 'Aspudden', 'parent_name': 'Stockholm', 'parent_place_id': 'stockholm-stockholm',
        'municipality': 'Stockholms kommun', 'county': 'Stockholms län', 'country': 'SE', 'type': 'district',
        'route_slug': 'stockholm', 'aliases': ['Aspudden, Stockholm'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'hagersten-stockholm', 'name': 'Hägersten', 'parent_name': 'Stockholm', 'parent_place_id': 'stockholm-stockholm',
        'municipality': 'Stockholms kommun', 'county': 'Stockholms län', 'country': 'SE', 'type': 'district',
        'route_slug': 'stockholm', 'aliases': ['Hägersten, Stockholm', 'Hagersten'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'sodermalm-stockholm', 'name': 'Södermalm', 'parent_name': 'Stockholm', 'parent_place_id': 'stockholm-stockholm',
        'municipality': 'Stockholms kommun', 'county': 'Stockholms län', 'country': 'SE', 'type': 'district',
        'route_slug': 'stockholm', 'aliases': ['Sodermalm', 'Södermalm, Stockholm'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'kungsholmen-stockholm', 'name': 'Kungsholmen', 'parent_name': 'Stockholm', 'parent_place_id': 'stockholm-stockholm',
        'municipality': 'Stockholms kommun', 'county': 'Stockholms län', 'country': 'SE', 'type': 'district',
        'route_slug': 'stockholm', 'aliases': ['Kungsholmen, Stockholm'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'vasastan-stockholm', 'name': 'Vasastan', 'parent_name': 'Stockholm', 'parent_place_id': 'stockholm-stockholm',
        'municipality': 'Stockholms kommun', 'county': 'Stockholms län', 'country': 'SE', 'type': 'district',
        'route_slug': 'stockholm', 'aliases': ['Vasastan, Stockholm'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'majorna-goteborg', 'name': 'Majorna', 'parent_name': 'Göteborg', 'parent_place_id': 'goteborg-goteborg',
        'municipality': 'Göteborgs kommun', 'county': 'Västra Götalands län', 'country': 'SE', 'type': 'district',
        'route_slug': 'goteborg', 'aliases': ['Majorna, Göteborg', 'Majorna, Goteborg'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'haga-goteborg', 'name': 'Haga', 'parent_name': 'Göteborg', 'parent_place_id': 'goteborg-goteborg',
        'municipality': 'Göteborgs kommun', 'county': 'Västra Götalands län', 'country': 'SE', 'type': 'district',
        'route_slug': 'goteborg', 'aliases': ['Haga, Göteborg', 'Haga, Goteborg'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'linnestaden-goteborg', 'name': 'Linnéstaden', 'parent_name': 'Göteborg', 'parent_place_id': 'goteborg-goteborg',
        'municipality': 'Göteborgs kommun', 'county': 'Västra Götalands län', 'country': 'SE', 'type': 'district',
        'route_slug': 'goteborg', 'aliases': ['Linnestaden', 'Linnéstaden, Göteborg', 'Linnestaden, Goteborg'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'limhamn-malmo', 'name': 'Limhamn', 'parent_name': 'Malmö', 'parent_place_id': 'malmo-malmo',
        'municipality': 'Malmö kommun', 'county': 'Skåne län', 'country': 'SE', 'type': 'district',
        'route_slug': 'malmo', 'aliases': ['Limhamn, Malmö', 'Limhamn, Malmo'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'hyllie-malmo', 'name': 'Hyllie', 'parent_name': 'Malmö', 'parent_place_id': 'malmo-malmo',
        'municipality': 'Malmö kommun', 'county': 'Skåne län', 'country': 'SE', 'type': 'district',
        'route_slug': 'malmo', 'aliases': ['Hyllie, Malmö', 'Hyllie, Malmo'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'vastra-hamnen-malmo', 'name': 'Västra hamnen', 'parent_name': 'Malmö', 'parent_place_id': 'malmo-malmo',
        'municipality': 'Malmö kommun', 'county': 'Skåne län', 'country': 'SE', 'type': 'district',
        'route_slug': 'malmo', 'aliases': ['Vastra hamnen', 'Västra hamnen, Malmö', 'Vastra hamnen, Malmo'], 'tags': ['local_area', 'district'],
    },
    {
        'id': 'duved-are-seed', 'name': 'Duved', 'parent_name': 'Åre', 'parent_place_id': 'duved-are',
        'municipality': 'Åre kommun', 'county': 'Jämtlands län', 'country': 'SE', 'type': 'district',
        'route_slug': 'are', 'aliases': ['Duved, Åre', 'Duved, Are'], 'tags': ['local_area', 'mountain'],
    },
    {
        'id': 'tarby-eskilstuna', 'name': 'Tärby', 'parent_name': 'Eskilstuna', 'parent_place_id': 'eskilstuna-eskilstuna',
        'municipality': 'Eskilstuna kommun', 'county': 'Södermanlands län', 'country': 'SE', 'type': 'district',
        'route_slug': 'eskilstuna', 'aliases': ['Tarby', 'Tärby, Eskilstuna', 'Tarby, Eskilstuna'], 'tags': ['local_area', 'village'],
    },
]


def slugify(value: str) -> str:
    value = (value or '').strip().lower()
    value = value.replace('å', 'a').replace('ä', 'a').replace('ö', 'o')
    value = re.sub(r'[^a-z0-9]+', '-', value)
    return value.strip('-')


def municipality_base(name: str | None) -> str | None:
    if not name:
        return None
    return re.sub(r'\s+kommun$', '', name, flags=re.I).strip() or None


def folded(value: str | None) -> str | None:
    if value is None:
        return None
    return value.replace('å', 'a').replace('Å', 'A').replace('ä', 'a').replace('Ä', 'A').replace('ö', 'o').replace('Ö', 'O')


def merge_aliases(*groups):
    out = []
    seen = set()
    for group in groups:
        for item in group or []:
            if not item:
                continue
            key = item.strip().lower()
            if not key or key in seen:
                continue
            seen.add(key)
            out.append(item)
    return out


normalized = []
for place in places:
    item = copy.deepcopy(place)
    item['county'] = COUNTY_MAP.get(item.get('county'), item.get('county'))
    normalized.append(item)

by_name_county = defaultdict(list)
for place in normalized:
    by_name_county[(place['name'].strip().lower(), place['county'].strip().lower())].append(place)

canonical_places = []
for _, group in by_name_county.items():
    primary = sorted(
        group,
        key=lambda p: (TYPE_SCORE.get(p.get('type'), 0), p.get('population') or 0, p.get('name', '')),
        reverse=True,
    )[0]

    alias_bucket = []
    for variant in group:
        alias_bucket.extend(variant.get('aliases') or [])
        if variant.get('municipality'):
            alias_bucket.append(variant['municipality'])
            base = municipality_base(variant['municipality'])
            if base and base.lower() != variant['name'].lower():
                alias_bucket.append(base)
        if variant['name'] != primary['name']:
            alias_bucket.append(variant['name'])

    for value in [primary['name'], municipality_base(primary.get('municipality'))]:
        f = folded(value)
        if f and f != value:
            alias_bucket.append(f)

    aliases = merge_aliases(alias_bucket)
    tags = sorted(set(primary.get('tags') or []))
    route_slug = slugify(primary['name'])
    if primary['name'] == 'Duved':
        route_slug = 'are'

    label = f"{primary['name']} · {primary['county']}"

    canonical_places.append({
        'id': primary['id'],
        'canonical_id': primary['id'],
        'name': primary['name'],
        'municipality': primary.get('municipality'),
        'county': primary.get('county'),
        'country': primary.get('country', 'SE'),
        'type': primary.get('type'),
        'population': primary.get('population'),
        'lat': primary.get('lat'),
        'lon': primary.get('lon'),
        'aliases': aliases,
        'tags': tags,
        'label': label,
        'route_slug': route_slug,
        'search_priority': 0,
        'search_hidden': False,
        'variants': [{
            'id': variant.get('id'),
            'type': variant.get('type'),
            'name': variant.get('name'),
            'municipality': variant.get('municipality'),
            'aliases': variant.get('aliases') or [],
            'population': variant.get('population'),
            'search_hidden': variant['id'] != primary['id'],
        } for variant in group],
    })

# Add Duved if still missing from the canonical export.
if not any(place['name'] == 'Duved' for place in canonical_places):
    canonical_places.append({
        'id': 'duved-are',
        'canonical_id': 'duved-are',
        'name': 'Duved',
        'municipality': 'Åre kommun',
        'county': 'Jämtlands län',
        'country': 'SE',
        'type': 'locality',
        'population': None,
        'lat': 63.389,
        'lon': 12.93,
        'aliases': ['Duved, Åre', 'Duved, Are'],
        'tags': ['local_area', 'mountain'],
        'label': 'Duved · Åre, Jämtlands län',
        'route_slug': 'are',
        'search_priority': 55,
        'search_hidden': False,
        'variants': [],
    })

# Manual boosts and more informative labels for places that map to an existing parent route.
label_overrides = {
    'duved-are': 'Duved · Åre, Jämtlands län',
}
for place in canonical_places:
    place['label'] = label_overrides.get(place['id'], place['label'])
    if place['name'] in {'Stockholm', 'Göteborg', 'Malmö', 'Åre'}:
        place['search_priority'] = 60
    elif 'destination' in place.get('tags', []) or place['type'] in {'resort', 'destination', 'island', 'national_park'}:
        place['search_priority'] = max(place['search_priority'], 25)

canonical_places.sort(key=lambda p: (p['name'].lower(), p['county'].lower(), p['id']))

alias_rows = []
for place in canonical_places:
    seen = set()
    for term in [place['name'], *(place.get('aliases') or [])]:
        key = term.strip().lower()
        if not key or key in seen:
            continue
        seen.add(key)
        alias_rows.append({
            'term': term,
            'canonical_id': place['canonical_id'],
            'route_slug': place['route_slug'],
            'label': place['label'],
            'type': place['type'],
        })

local_seed_places = []
for item in LOCAL_AREA_SEED:
    label = f"{item['name']} · {item['parent_name']}, {item['county']}"
    aliases = merge_aliases(item.get('aliases') or [], [folded(item['name'])])
    local_seed_places.append({
        **item,
        'canonical_id': item['id'],
        'label': label,
        'aliases': aliases,
        'search_priority': 40,
        'resolution': 'parent_route',
        'needs_coordinates': True,
        'search_hidden': False,
    })

abroad_seed_places = []
for name, region, country, code in ABROAD_SEED:
    abroad_seed_places.append({
        'id': f"{slugify(name)}-{code.lower()}",
        'canonical_id': f"{slugify(name)}-{code.lower()}",
        'name': name,
        'region': region,
        'country_name_sv': country,
        'country': code,
        'type': 'abroad_city',
        'label': f"{name} · {region}, {country}",
        'aliases': merge_aliases([folded(name)]),
        'tags': ['abroad', 'seed'],
        'search_priority': 10,
        'search_hidden': False,
    })

stats = {
    'source_total': len(places),
    'canonical_total': len(canonical_places),
    'collapsed_variants': len(places) - len(canonical_places) + 1,  # +1 for Duved manual add
    'type_counts': Counter(place['type'] for place in canonical_places),
}
stats['type_counts'] = dict(sorted(stats['type_counts'].items()))

main_payload = {
    'version': '2.0.0',
    'generated': '2026-03-16',
    'country': 'SE',
    'model': 'canonical-place-index',
    'notes': [
        'One canonical user-facing entry per place/counties combination.',
        'Municipality duplicates are collapsed into aliases instead of separate results.',
        'County names are normalized for cleaner labels.',
        'Manual addition: Duved routed to Åre until dedicated page/data exists.',
    ],
    'sources': orig.get('sources', []),
    'stats': stats,
    'places': canonical_places,
}

local_payload = {
    'version': '0.1.0',
    'generated': '2026-03-16',
    'country': 'SE',
    'model': 'local-area-seed',
    'notes': [
        'Starter file for neighborhoods, districts, villages and subareas.',
        'These entries are not wired into the current homepage demo yet.',
        'Before live local forecasts, add coordinates or a reliable place-resolution layer.',
    ],
    'stats': {'total': len(local_seed_places)},
    'places': local_seed_places,
}

abroad_payload = {
    'version': '0.1.0',
    'generated': '2026-03-16',
    'country': 'GLOBAL',
    'model': 'curated-abroad-seed',
    'notes': [
        'Curated starter set for travel-relevant places abroad.',
        'Intended for future Sweden-first search fallback after zero Swedish matches.',
        'Kept separate so homepage wiring can stay simple for now.',
    ],
    'stats': {'total': len(abroad_seed_places)},
    'places': abroad_seed_places,
}

alias_payload = {
    'version': '2.0.0',
    'generated': '2026-03-16',
    'country': 'SE',
    'stats': {'total_terms': len(alias_rows)},
    'aliases': alias_rows,
}

(RES / 'sweden-places.json').write_text(json.dumps(main_payload, ensure_ascii=False, indent=2) + '\n')
(RES / 'place-aliases.json').write_text(json.dumps(alias_payload, ensure_ascii=False, indent=2) + '\n')
(RES / 'sweden-local-areas-seed.json').write_text(json.dumps(local_payload, ensure_ascii=False, indent=2) + '\n')
(RES / 'places-abroad-seed.json').write_text(json.dumps(abroad_payload, ensure_ascii=False, indent=2) + '\n')

location_doc = '''# Kly location model v2

## Goal

Make search feel local and complete without showing duplicate administrative records.

## Rules

1. Show one canonical result for a city/town/destination.
2. Collapse municipality duplicates into aliases on that canonical result.
3. Use county labels as the default disambiguator.
4. Keep local areas and districts as a separate seed layer until Kly can resolve them to dedicated forecast data.
5. Keep abroad as a separate curated layer that is only used after zero Swedish matches.

## Main files

- `resources/sweden-places.json`
  - canonical Swedish place index used by the homepage now
- `resources/place-aliases.json`
  - flattened alias lookup derived from the canonical index
- `resources/sweden-local-areas-seed.json`
  - starter file for districts / neighborhoods / villages
- `resources/places-abroad-seed.json`
  - curated abroad starter file for later fallback logic

## Place fields

- `id`: stable place id
- `canonical_id`: user-facing result id, used for dedupe
- `name`: canonical display name
- `label`: result label shown in search
- `route_slug`: homepage route to open today
- `aliases`: alternate names, municipality names and folded spellings
- `type`: `major_city`, `city`, `town`, `locality`, `destination`, `resort`, `island`, `national_park`, `municipality`, `district`, `abroad_city`
- `search_priority`: manual boost for important or demo-routable places
- `search_hidden`: reserved for alias-only entries
- `variants`: collapsed source records kept for traceability

## Search behavior

- strict `å/ä/ö` prefix matches rank highest
- folded fallback only applies when the query has no Swedish diacritics
- results are deduped by `canonical_id`
- label formatting defaults to:
  - city / town / destination: `Name · County`
  - local areas: `Name · Parent, County`

## Current homepage wiring

The homepage now loads only `resources/sweden-places.json`.
That solves the duplicate city/municipality issue immediately.
The seed files are included so the next iteration can add local areas and abroad without redesigning the data model again.
'''
(ROOT / 'LOCATION-MODEL-v2.md').write_text(location_doc)

search_js = r'''/**
 * kly-sweden-search.js
 * Canonical Sweden-first search for kly.se.
 *
 * Supports one or many JSON sources. Each source can be either:
 *  - { places: [...] }
 *  - a raw array of place objects
 */
(function (global) {
  "use strict";

  const DEFAULT_LIMIT = 12;

  function normalizeStrict(value) {
    return (value ?? "").toString().toLowerCase().trim();
  }

  function normalizeFolded(value) {
    return normalizeStrict(value)
      .replace(/å/g, "a")
      .replace(/ä/g, "a")
      .replace(/ö/g, "o");
  }

  function typeWeight(type) {
    switch (type) {
      case "major_city": return 1100;
      case "city": return 1040;
      case "town": return 980;
      case "district": return 940;
      case "resort": return 920;
      case "destination": return 900;
      case "island": return 860;
      case "national_park": return 830;
      case "locality": return 800;
      case "municipality": return 650;
      case "abroad_city": return 500;
      default: return 0;
    }
  }

  function placeLabel(place) {
    if (place.label) return place.label;
    if (place.parent_name) return `${place.name} · ${place.parent_name}, ${place.county}`;
    return `${place.name} · ${place.county}`;
  }

  function toArray(payload) {
    if (Array.isArray(payload)) return payload;
    if (payload && Array.isArray(payload.places)) return payload.places;
    throw new Error("Invalid place data format (expected { places: [...] } or an array)");
  }

  function buildSearchTerms(place) {
    return [
      place.name,
      place.label,
      ...(place.aliases || []),
      ...(place.search_names || []),
    ].filter(Boolean);
  }

  function scoreMatch(place, query, queryFolded, queryHasDiacritics) {
    const terms = buildSearchTerms(place);
    let bestTier = -1;
    let bestTermBonus = 0;

    for (const term of terms) {
      const strict = normalizeStrict(term);

      if (strict.startsWith(query)) {
        const isPrimaryName = normalizeStrict(place.name) === strict;
        bestTier = Math.max(bestTier, isPrimaryName ? 5 : 4);
        bestTermBonus = Math.max(bestTermBonus, isPrimaryName ? 90 : 40);
        continue;
      }

      if (!queryHasDiacritics) {
        const folded = normalizeFolded(term);
        if (folded.startsWith(queryFolded)) {
          const isPrimaryName = normalizeFolded(place.name) === folded;
          bestTier = Math.max(bestTier, isPrimaryName ? 3 : 2);
          bestTermBonus = Math.max(bestTermBonus, isPrimaryName ? 30 : 10);
        }
      }
    }

    if (bestTier < 0) return null;

    const population = typeof place.population === "number" ? place.population : 0;
    const manualBoost = Number.isFinite(place.search_priority) ? place.search_priority : 0;

    return (
      bestTier * 10000 +
      bestTermBonus * 100 +
      typeWeight(place.type) +
      manualBoost +
      Math.min(250, population / 1000)
    );
  }

  const KlySwedenSearch = {
    _places: [],
    _loaded: false,

    async loadPlaces(jsonUrlOrUrls) {
      const urls = Array.isArray(jsonUrlOrUrls) ? jsonUrlOrUrls : [jsonUrlOrUrls];
      const payloads = await Promise.all(
        urls.map(async (url) => {
          const res = await fetch(url, { cache: "force-cache" });
          if (!res.ok) throw new Error(`Failed to load places: ${res.status}`);
          return toArray(await res.json());
        })
      );

      this._places = payloads.flat();
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
      const includeHidden = !!options.includeHidden;

      if (!query) return [];
      const raw = query.toString();
      if (raw.trim().length < minChars) return [];

      const qStrict = normalizeStrict(raw);
      const qFolded = normalizeFolded(raw);
      const queryHasDiacritics = /[åäö]/i.test(raw);
      const bestByCanonical = new Map();

      for (const place of this._places) {
        if (!includeHidden && place.search_hidden) continue;

        const score = scoreMatch(place, qStrict, qFolded, queryHasDiacritics);
        if (score === null) continue;

        const key = place.canonical_id || place.id || `${place.name}-${place.county}`;
        const current = bestByCanonical.get(key);
        if (!current || score > current.score) {
          bestByCanonical.set(key, { place, score });
        }
      }

      return [...bestByCanonical.values()]
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.place);
    },

    label(place) {
      return placeLabel(place);
    }
  };

  global.KlySwedenSearch = KlySwedenSearch;
})(window);
'''
(RES / 'kly-sweden-search.js').write_text(search_js)

app_path = ROOT / 'app.js'
app_js = app_path.read_text()
app_js = app_js.replace(
    "  await window.KlySwedenSearch.loadPlaces('./resources/sweden-places.json');",
    "  await window.KlySwedenSearch.loadPlaces('./resources/sweden-places.json');"
)
app_js = app_js.replace(
    "    const slug = slugify(place.name);",
    "    const slug = place.route_slug || slugify(place.name);"
)
app_path.write_text(app_js)

readme_path = ROOT / 'README.md'
readme = readme_path.read_text()
readme += '\n\n## Nytt i locations v2\n- Kanoniska sökresultat i `resources/sweden-places.json`\n- `resources/place-aliases.json` för alias och kommun-varianter\n- `resources/sweden-local-areas-seed.json` för stadsdelar/byar\n- `resources/places-abroad-seed.json` för framtida utlandsfallback\n- `LOCATION-MODEL-v2.md` som beskriver modellen\n'
readme_path.write_text(readme)

print('Built location model v2 files.')
print('Canonical places:', len(canonical_places))
print('Alias terms:', len(alias_rows))
print('Local-area seed:', len(local_seed_places))
print('Abroad seed:', len(abroad_seed_places))
