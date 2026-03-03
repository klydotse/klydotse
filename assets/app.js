const KLY = (() => {
  const CITIES = [{"name": "Stockholm", "slug": "stockholm", "lat": 59.3293, "lon": 18.0686}, {"name": "Göteborg", "slug": "goteborg", "lat": 57.7089, "lon": 11.9746}, {"name": "Malmö", "slug": "malmo", "lat": 55.605, "lon": 13.0038}, {"name": "Uppsala", "slug": "uppsala", "lat": 59.8586, "lon": 17.6389}, {"name": "Västerås", "slug": "vasteras", "lat": 59.6099, "lon": 16.5448}, {"name": "Örebro", "slug": "orebro", "lat": 59.2753, "lon": 15.2134}, {"name": "Linköping", "slug": "linkoping", "lat": 58.4109, "lon": 15.6216}, {"name": "Helsingborg", "slug": "helsingborg", "lat": 56.0465, "lon": 12.6945}, {"name": "Jönköping", "slug": "jonkoping", "lat": 57.7826, "lon": 14.1618}, {"name": "Norrköping", "slug": "norrkoping", "lat": 58.5877, "lon": 16.1924}, {"name": "Lund", "slug": "lund", "lat": 55.7047, "lon": 13.191}, {"name": "Umeå", "slug": "umea", "lat": 63.8258, "lon": 20.263}, {"name": "Gävle", "slug": "gavle", "lat": 60.6745, "lon": 17.1417}, {"name": "Borås", "slug": "boras", "lat": 57.721, "lon": 12.9401}, {"name": "Södertälje", "slug": "sodertalje", "lat": 59.1955, "lon": 17.6253}, {"name": "Eskilstuna", "slug": "eskilstuna", "lat": 59.3713, "lon": 16.5097}, {"name": "Halmstad", "slug": "halmstad", "lat": 56.6745, "lon": 12.8578}, {"name": "Växjö", "slug": "vaxjo", "lat": 56.8777, "lon": 14.8091}, {"name": "Karlstad", "slug": "karlstad", "lat": 59.3791, "lon": 13.5036}, {"name": "Sundsvall", "slug": "sundsvall", "lat": 62.3908, "lon": 17.3069}, {"name": "Östersund", "slug": "ostersund", "lat": 63.1792, "lon": 14.6357}, {"name": "Luleå", "slug": "lulea", "lat": 65.5848, "lon": 22.1547}, {"name": "Trelleborg", "slug": "trelleborg", "lat": 55.3751, "lon": 13.1569}, {"name": "Kristianstad", "slug": "kristianstad", "lat": 56.0294, "lon": 14.1567}, {"name": "Skövde", "slug": "skovde", "lat": 58.3912, "lon": 13.8451}, {"name": "Falun", "slug": "falun", "lat": 60.6065, "lon": 15.6355}, {"name": "Karlskrona", "slug": "karlskrona", "lat": 56.1612, "lon": 15.5869}, {"name": "Kalmar", "slug": "kalmar", "lat": 56.6634, "lon": 16.3568}, {"name": "Trollhättan", "slug": "trollhattan", "lat": 58.2835, "lon": 12.2886}, {"name": "Uddevalla", "slug": "uddevalla", "lat": 58.3498, "lon": 11.9389}, {"name": "Skellefteå", "slug": "skelleftea", "lat": 64.7507, "lon": 20.95}, {"name": "Piteå", "slug": "pitea", "lat": 65.3172, "lon": 21.4793}, {"name": "Nyköping", "slug": "nykoping", "lat": 58.753, "lon": 17.0079}, {"name": "Karlskoga", "slug": "karlskoga", "lat": 59.3275, "lon": 14.5239}, {"name": "Lidköping", "slug": "lidkoping", "lat": 58.5052, "lon": 13.1577}, {"name": "Alingsås", "slug": "alingsas", "lat": 57.9303, "lon": 12.533}, {"name": "Sandviken", "slug": "sandviken", "lat": 60.6167, "lon": 16.77}, {"name": "Visby", "slug": "visby", "lat": 57.6348, "lon": 18.2948}, {"name": "Varberg", "slug": "varberg", "lat": 57.107, "lon": 12.248}, {"name": "Nässjö", "slug": "nassjo", "lat": 57.6537, "lon": 14.6975}, {"name": "Katrineholm", "slug": "katrineholm", "lat": 58.9959, "lon": 16.2072}, {"name": "Vänersborg", "slug": "vanersborg", "lat": 58.3808, "lon": 12.3234}, {"name": "Härnösand", "slug": "harnosand", "lat": 62.6323, "lon": 17.9379}, {"name": "Borlänge", "slug": "borlange", "lat": 60.4858, "lon": 15.4371}, {"name": "Motala", "slug": "motala", "lat": 58.537, "lon": 15.0366}, {"name": "Kungsbacka", "slug": "kungsbacka", "lat": 57.4872, "lon": 12.0761}, {"name": "Eslöv", "slug": "eslov", "lat": 55.838, "lon": 13.303}, {"name": "Ystad", "slug": "ystad", "lat": 55.4292, "lon": 13.8204}, {"name": "Kiruna", "slug": "kiruna", "lat": 67.8558, "lon": 20.2253}, {"name": "Enköping", "slug": "enkoping", "lat": 59.636, "lon": 17.0777}];
  const bySlug = new Map(CITIES.map(c => [c.slug, c]));
  const byName = new Map(CITIES.map(c => [c.name.toLowerCase(), c]));

  function haversineKm(lat1, lon1, lat2, lon2){
    const R = 6371;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2-lat1);
    const dLon = toRad(lon2-lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
    return 2*R*Math.asin(Math.sqrt(a));
  }

  function nearestCity(lat, lon){
    let best = CITIES[0];
    let bestD = Infinity;
    for (const c of CITIES){
      const d = haversineKm(lat, lon, c.lat, c.lon);
      if (d < bestD){ bestD = d; best = c; }
    }
    return best;
  }

  function cityUrl(slug){ return `/stad/${slug}/`; }

  function setLastCity(slug){
    try{ localStorage.setItem("kly_last_city", slug); }catch(e){}
  }
  function getLastCity(){
    try{ return localStorage.getItem("kly_last_city"); }catch(e){ return null; }
  }

  function wireSearch(inputId){
    const input = document.getElementById(inputId);
    if (!input) return;

    const dl = document.createElement("datalist");
    dl.id = "klyCityList";
    for (const c of CITIES){
      const opt = document.createElement("option");
      opt.value = c.name;
      dl.appendChild(opt);
    }
    document.body.appendChild(dl);
    input.setAttribute("list", dl.id);

    function goToTyped(){
      const raw = (input.value || "").trim();
      if (!raw) return;
      const key = raw.toLowerCase();
      const exact = byName.get(key);
      if (exact){
        setLastCity(exact.slug);
        window.location.href = cityUrl(exact.slug);
        return;
      }
      const hit = CITIES.find(c => c.name.toLowerCase().includes(key));
      if (hit){
        setLastCity(hit.slug);
        window.location.href = cityUrl(hit.slug);
      }
    }

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter"){
        e.preventDefault();
        goToTyped();
      }
    });

    const locBtn = document.getElementById("klyLocateBtn");
    if (locBtn){
      locBtn.addEventListener("click", () => autoRoute({force:true}));
    }
  }

  function autoRoute({force=false}={}){
    const last = getLastCity();
    const defaultSlug = "stockholm";

    // Only run auto-route on home page
    if (document.body.dataset.klyPage !== "home") return;

    if (last && !force){
      window.location.replace(cityUrl(last));
      return;
    }

    if (!navigator.geolocation){
      window.location.replace(cityUrl(defaultSlug));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        const c = nearestCity(latitude, longitude);
        setLastCity(c.slug);
        window.location.replace(cityUrl(c.slug));
      },
      () => {
        window.location.replace(cityUrl(defaultSlug));
      },
      {enableHighAccuracy: false, timeout: 4500, maximumAge: 3600000}
    );
  }

  function wireCityLinks(){
    document.querySelectorAll("[data-city-slug]").forEach(a => {
      a.addEventListener("click", () => setLastCity(a.dataset.citySlug));
    });
  }

  function init(){
    wireSearch("klySearch");
    wireCityLinks();
    setTimeout(() => autoRoute(), 50);
  }

  return { CITIES, bySlug, cityUrl, setLastCity, getLastCity, init, autoRoute };
})();
document.addEventListener("DOMContentLoaded", () => KLY.init());
