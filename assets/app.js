const KLY=(()=>{const CITIES=[{"name": "Stockholm", "slug": "stockholm", "lat": 59.3293, "lon": 18.0686}, {"name": "Göteborg", "slug": "goteborg", "lat": 57.7089, "lon": 11.9746}, {"name": "Malmö", "slug": "malmo", "lat": 55.605, "lon": 13.0038}, {"name": "Uppsala", "slug": "uppsala", "lat": 59.8586, "lon": 17.6389}, {"name": "Västerås", "slug": "vasteras", "lat": 59.6099, "lon": 16.5448}, {"name": "Örebro", "slug": "orebro", "lat": 59.2753, "lon": 15.2134}, {"name": "Linköping", "slug": "linkoping", "lat": 58.4109, "lon": 15.6216}, {"name": "Helsingborg", "slug": "helsingborg", "lat": 56.0465, "lon": 12.6945}, {"name": "Jönköping", "slug": "jonkoping", "lat": 57.7826, "lon": 14.1618}, {"name": "Norrköping", "slug": "norrkoping", "lat": 58.5877, "lon": 16.1924}, {"name": "Lund", "slug": "lund", "lat": 55.7047, "lon": 13.191}, {"name": "Umeå", "slug": "umea", "lat": 63.8258, "lon": 20.263}, {"name": "Gävle", "slug": "gavle", "lat": 60.6745, "lon": 17.1417}, {"name": "Borås", "slug": "boras", "lat": 57.721, "lon": 12.9401}, {"name": "Södertälje", "slug": "sodertalje", "lat": 59.1955, "lon": 17.6253}, {"name": "Eskilstuna", "slug": "eskilstuna", "lat": 59.3713, "lon": 16.5097}, {"name": "Halmstad", "slug": "halmstad", "lat": 56.6745, "lon": 12.8578}, {"name": "Växjö", "slug": "vaxjo", "lat": 56.8777, "lon": 14.8091}, {"name": "Karlstad", "slug": "karlstad", "lat": 59.3791, "lon": 13.5036}, {"name": "Sundsvall", "slug": "sundsvall", "lat": 62.3908, "lon": 17.3069}, {"name": "Östersund", "slug": "ostersund", "lat": 63.1792, "lon": 14.6357}, {"name": "Luleå", "slug": "lulea", "lat": 65.5848, "lon": 22.1547}, {"name": "Trelleborg", "slug": "trelleborg", "lat": 55.3751, "lon": 13.1569}, {"name": "Kristianstad", "slug": "kristianstad", "lat": 56.0294, "lon": 14.1567}, {"name": "Skövde", "slug": "skovde", "lat": 58.3912, "lon": 13.8451}, {"name": "Falun", "slug": "falun", "lat": 60.6065, "lon": 15.6355}, {"name": "Karlskrona", "slug": "karlskrona", "lat": 56.1612, "lon": 15.5869}, {"name": "Kalmar", "slug": "kalmar", "lat": 56.6634, "lon": 16.3568}, {"name": "Trollhättan", "slug": "trollhattan", "lat": 58.2835, "lon": 12.2886}, {"name": "Uddevalla", "slug": "uddevalla", "lat": 58.3498, "lon": 11.9389}, {"name": "Skellefteå", "slug": "skelleftea", "lat": 64.7507, "lon": 20.95}, {"name": "Piteå", "slug": "pitea", "lat": 65.3172, "lon": 21.4793}, {"name": "Nyköping", "slug": "nykoping", "lat": 58.753, "lon": 17.0079}, {"name": "Karlskoga", "slug": "karlskoga", "lat": 59.3275, "lon": 14.5239}, {"name": "Lidköping", "slug": "lidkoping", "lat": 58.5052, "lon": 13.1577}, {"name": "Alingsås", "slug": "alingsas", "lat": 57.9303, "lon": 12.533}, {"name": "Sandviken", "slug": "sandviken", "lat": 60.6167, "lon": 16.77}, {"name": "Visby", "slug": "visby", "lat": 57.6348, "lon": 18.2948}, {"name": "Varberg", "slug": "varberg", "lat": 57.107, "lon": 12.248}, {"name": "Nässjö", "slug": "nassjo", "lat": 57.6537, "lon": 14.6975}, {"name": "Katrineholm", "slug": "katrineholm", "lat": 58.9959, "lon": 16.2072}, {"name": "Vänersborg", "slug": "vanersborg", "lat": 58.3808, "lon": 12.3234}, {"name": "Härnösand", "slug": "harnosand", "lat": 62.6323, "lon": 17.9379}, {"name": "Borlänge", "slug": "borlange", "lat": 60.4858, "lon": 15.4371}, {"name": "Motala", "slug": "motala", "lat": 58.537, "lon": 15.0366}, {"name": "Kungsbacka", "slug": "kungsbacka", "lat": 57.4872, "lon": 12.0761}, {"name": "Eslöv", "slug": "eslov", "lat": 55.838, "lon": 13.303}, {"name": "Ystad", "slug": "ystad", "lat": 55.4292, "lon": 13.8204}, {"name": "Kiruna", "slug": "kiruna", "lat": 67.8558, "lon": 20.2253}, {"name": "Enköping", "slug": "enkoping", "lat": 59.636, "lon": 17.0777}],bySlug=new Map(CITIES.map(c=>[c.slug,c])),byName=new Map(CITIES.map(c=>[c.name.toLowerCase(),c]));function haversineKm(a,b,c,d){const e=6371,f=g=>g*Math.PI/180,h=f(c-a),i=f(d-b),j=Math.sin(h/2)**2+Math.cos(f(a))*Math.cos(f(c))*Math.sin(i/2)**2;return 2*e*Math.asin(Math.sqrt(j))}function nearestCity(a,b){let c=CITIES[0],d=1/0;for(const e of CITIES){const f=haversineKm(a,b,e.lat,e.lon);f<d&&(d=f,c=e)}return c}function cityUrl(a){return`/stad/${a}/`}function setLastCity(a){try{localStorage.setItem("kly_last_city",a)}catch{}}function getLastCity(){try{return localStorage.getItem("kly_last_city")}catch{return null}}function wireSearch(a){const b=document.getElementById(a);if(!b)return;const c=document.createElement("datalist");c.id="klyCityList";for(const d of CITIES){const e=document.createElement("option");e.value=d.name,c.appendChild(e)}document.body.appendChild(c),b.setAttribute("list",c.id);function d(){const a=(b.value||"").trim();if(!a)return;const c=a.toLowerCase(),d=byName.get(c);if(d)return setLastCity(d.slug),void(window.location.href=cityUrl(d.slug));const e=CITIES.find(a=>a.name.toLowerCase().includes(c));e&&(setLastCity(e.slug),window.location.href=cityUrl(e.slug))}b.addEventListener("keydown",a=>{"Enter"===a.key&&(a.preventDefault(),d())});const e=document.getElementById("klyLocateBtn");e&&e.addEventListener("click",()=>autoRoute({force:!0}))}function autoRoute({force:a=!1}={}){const b=getLastCity(),c="stockholm";if("home"!==document.body.dataset.klyPage)return;b&&!a?window.location.replace(cityUrl(b)):navigator.geolocation?navigator.geolocation.getCurrentPosition(a=>{const{latitude:b,longitude:d}=a.coords,e=nearestCity(b,d);setLastCity(e.slug),window.location.replace(cityUrl(e.slug))},()=>{window.location.replace(cityUrl(c))},{enableHighAccuracy:!1,timeout:4500,maximumAge:36e5}):window.location.replace(cityUrl(c))}function wireCityLinks(){document.querySelectorAll("[data-city-slug]").forEach(a=>{a.addEventListener("click",()=>setLastCity(a.dataset.citySlug))})}function wmoToEmoji(a){return null==a?"⛅":0===a?"☀️":1===a?"🌤":2===a?"⛅":3===a?"☁️":[45,48].includes(a)?"🌫":[51,53,55].includes(a)?"🌦":[61,63,65,80,81,82].includes(a)?"🌧":[66,67].includes(a)?"🌧":[71,73,75,77,85,86].includes(a)?"🌨":[95,96,99].includes(a)?"⛈":"⛅"}function wmoToText(a){const b={0:"Klart",1:"Mest klart",2:"Delvis molnigt",3:"Mulet",45:"Dimma",48:"Dimma",51:"Duggregn",53:"Duggregn",55:"Duggregn",61:"Regn",63:"Regn",65:"Regn",66:"Underkylt regn",67:"Underkylt regn",71:"Snö",73:"Snö",75:"Snö",77:"Snökorn",80:"Regnskurar",81:"Regnskurar",82:"Regnskurar",85:"Snöbyar",86:"Snöbyar",95:"Åska",96:"Åska",99:"Åska"};return b[a]??"Väder"}function fmtTimeHH(a){return new Date(a).toLocaleTimeString("sv-SE",{hour:"2-digit"})}function fmtTimeHHMM(a){return new Date(a).toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})}function fmtDay(a){return new Date(a).toLocaleDateString("sv-SE",{weekday:"short"})}function pickNowIndex(a){const b=Date.now();let c=0,d=1/0;for(let e=0;e<a.length;e++){const f=Math.abs(new Date(a[e]).getTime()-b);f<d&&(d=f,c=e)}return c}function degToCompass(a){if(null==a||isNaN(a))return"—";const b=["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSV","SV","VSV","V","VNV","NV","NNV"];return b[Math.round(a/22.5)%16]}function mm(a){return null==a||isNaN(a)?"—":`${Number(a).toFixed(1).replace(".",",")} mm`}function pollenLevel(a){return null==a||isNaN(a)?{label:"—"}:a<1?{label:"Ingen"}:a<10?{label:"Låg"}:a<50?{label:"Måttlig"}:a<200?{label:"Hög"}:{label:"Mycket hög"}}function setText(a,b){const c=document.getElementById(a);c&&(c.textContent=b)}async function loadWeather(a){const b=bySlug.get(a);if(!b)return;const c=new URL("https://api.open-meteo.com/v1/forecast");c.searchParams.set("latitude",b.lat),c.searchParams.set("longitude",b.lon),c.searchParams.set("timezone","auto"),c.searchParams.set("current","temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m"),c.searchParams.set("hourly","temperature_2m,precipitation,weather_code"),c.searchParams.set("daily","temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code,sunrise,sunset,uv_index_max"),c.searchParams.set("forecast_days","10");const d=await fetch(c.toString(),{cache:"no-store"});if(!d.ok)throw new Error("weather_fetch_failed");const e=await d.json(),f=document.getElementById("klyCityLabel");f&&(f.textContent=b.name);const g=e.current||{},h=g.temperature_2m,i=g.apparent_temperature,j=g.weather_code,k=g.wind_speed_10m,l=g.wind_gusts_10m,m=g.wind_direction_10m,n=g.precipitation;setText("nowTemp",null==h?"—":Math.round(h)),setText("nowEmoji",wmoToEmoji(j)),setText("nowText",wmoToText(j)),setText("nowFeels",null==i?"—":`Känns som ${Math.round(i)}°`),setText("nowWind",(null==k?"—":`${Math.round(k)} km/h`)+` ${degToCompass(m)}`+(null==l?"":` (byar ${Math.round(l)} )`)),setText("nowRain",mm(n));const o=e.daily||{},p=o.temperature_2m_max?.[0],q=o.temperature_2m_min?.[0],r=o.precipitation_sum?.[0],s=o.weather_code?.[0],t=o.sunrise?.[0],u=o.sunset?.[0];setText("todayTemp",null==p||null==q?"—":`${Math.round(p)}° / ${Math.round(q)}°`),setText("todayRain",null==r?"—":`${Number(r).toFixed(1).replace(".",",")} mm (${wmoToText(s)})`),setText("sunrise",t?fmtTimeHHMM(t):"—"),setText("sunset",u?fmtTimeHHMM(u):"—");const v=e.hourly?.time||[],w=e.hourly?.temperature_2m||[],x=e.hourly?.precipitation||[],y=e.hourly?.weather_code||[],z=pickNowIndex(v),A=document.getElementById("hourStrip");if(A){A.innerHTML="";const b=Math.min(z+12,v.length);for(let c=z;c<b;c++){const b=document.createElement("div");b.className="hour",b.innerHTML=`<div class="t">${fmtTimeHH(v[c])}</div><div class="i">${wmoToEmoji(y[c])}</div><div class="v">${null==w[c]?"—":Math.round(w[c])}°</div><div class="p">${null==x[c]?"":`${Number(x[c]).toFixed(1).replace(".",",")}mm`}</div>`,A.appendChild(b)}const b=document.getElementById("hourNext");b&&(b.onclick=()=>A.scrollBy({left:280,behavior:"smooth"}))}const B=document.getElementById("dayList");if(B){B.innerHTML="";const a=o.time||[],b=o.temperature_2m_max||[],c=o.temperature_2m_min||[],d=o.precipitation_sum||[],e=o.weather_code||[];for(let f=0;f<Math.min(10,a.length);f++){const g=document.createElement("div");g.className="day",g.innerHTML=`<div class="l">${fmtDay(a[f])}</div><div class="r">${wmoToEmoji(e[f])} ${Math.round(b[f])}° / ${Math.round(c[f])}° · ${Number(d[f]||0).toFixed(1).replace(".",",")} mm</div>`,B.appendChild(g)}}const C=o.uv_index_max?.[0];setText("uvMax",null==C?"—":C.toFixed(1));const D=new Date;let E=null;null!=C&&(E=D.getHours()>=10&&D.getHours()<=16?Math.max(0,.6*C):D.getHours()>=7&&D.getHours()<=19?Math.max(0,.25*C):0),setText("uvNow",null==E?"—":E.toFixed(1));const F=a=>null==a?"—":a<3?"Låg":a<6?"Måttlig":a<8?"Hög":a<11?"Mycket hög":"Extrem",G=F(E);setText("uvRisk",G);const H=document.getElementById("uvAdvice");H&&(H.textContent="Låg"===G?"Låg UV. Solglasögon om det är ljust, solskydd behövs oftast inte.":"Måttlig"===G?"Måttlig UV. Skydda ansikte och nacke om du är ute länge.":"Hög UV. Använd solskydd och sök skugga mitt på dagen.")}async function loadPollen(a){
  const b=bySlug.get(a);if(!b)return;
  const norm=s=>(s||"").toString().toLowerCase().replace(/[åä]/g,"a").replace(/ö/g,"o").replace(/[^a-z0-9]+/g,"").trim();
  window.__KLY_POLLEN_CACHE=window.__KLY_POLLEN_CACHE||{regions:null,types:null,levels:null};
  const cache=window.__KLY_POLLEN_CACHE,BASE="https://api.pollenrapporten.se/v1";
  async function fetchJson(url){const r=await fetch(url,{cache:"no-store"});if(!r.ok)throw new Error("http_"+r.status);return await r.json();}

  if(!cache.regions){
    try{const p=await fetchJson(`${BASE}/regions`);cache.regions=Array.isArray(p)?p:(p.data||p.regions||[]);}catch(e){cache.regions=[];}
  }

  const cityKey=norm(b.name);let region=null;
  for(const r of cache.regions){
    const rn=norm(r.name||r.region_name||r.title),rs=norm(r.slug||r.code||r.short_name);
    if(rn===cityKey||rs===cityKey){region=r;break;}
  }
  if(!region){
    for(const r of cache.regions){
      const rn=norm(r.name||r.region_name||r.title),rs=norm(r.slug||r.code||r.short_name);
      if((rn&&rn.includes(cityKey))||(rs&&rs.includes(cityKey))){region=r;break;}
    }
  }
  if(!region&&cache.regions.length)region=cache.regions[0];

  const headline=document.getElementById("pollenHeadline");
  const l=document.getElementById("pollenList"),m=document.getElementById("pollenMore"),n=document.getElementById("pollenMoreBtn");

  function render(items,showAll){
    if(!l)return;l.innerHTML="";
    const subset=showAll?items:items.slice(0,2);
    for(const it of subset){
      const d=document.createElement("div");
      d.className="item";
      d.innerHTML=`<div class="k">${it.label}</div><div class="v">${it.level}</div>`;
      l.appendChild(d);
    }
    m&&m.classList.toggle("hidden",showAll||items.length<=2);
  }

  if(!region){
    headline&&(headline.textContent="Pollen: —");
    render([],!1);
    return;
  }

  const regionId=region.id||region.region_id||region.uuid;

  let fp;try{fp=await fetchJson(`${BASE}/forecasts?region_id=${encodeURIComponent(regionId)}&current=true&offset=0&limit=10`);}catch(e){
    headline&&(headline.textContent="Pollen: —");
    render([],!1);
    return;
  }

  // best-effort metadata (labels)
  if(!cache.types){
    try{const tp=await fetchJson(`${BASE}/pollen-types`);cache.types=Array.isArray(tp)?tp:(tp.data||tp.types||[]);}catch(e){cache.types=[];}
  }
  if(!cache.levels){
    try{const lp=await fetchJson(`${BASE}/pollen-level-definitions`);cache.levels=Array.isArray(lp)?lp:(lp.data||lp.levels||[]);}catch(e){cache.levels=[];}
  }

  const typesById=new Map(cache.types.map(t=>[t.id||t.pollen_type_id||t.uuid,t]));
  const levelsById=new Map(cache.levels.map(lv=>[lv.id||lv.pollen_level_definition_id||lv.uuid,lv]));
  const dataRoot=fp.data??fp;
  const list=Array.isArray(dataRoot)?dataRoot:(dataRoot.items||dataRoot.forecasts||dataRoot.results||[]);
  const first=list&&list.length?list[0]:dataRoot;

  const entriesRaw=first?.pollen||first?.pollen_forecast||first?.pollenForecast||first?.pollen_levels||first?.data?.pollen||[];
  const entriesArr=Array.isArray(entriesRaw)?entriesRaw:[];

  const FALLBACK={"alder":"Al","birch":"Björk","grass":"Gräs","mugwort":"Gråbo","hazel":"Hassel","elm":"Alm","oak":"Ek","beech":"Bok","willow":"Sälg/Vide","ragweed":"Ambrosia"};
  function typeLabel(it){
    const tId=it.pollen_type_id||it.pollenTypeId||it.type_id||it.typeId;
    const t=tId?typesById.get(tId):null;
    const lbl=it.display_name||it.displayName||t?.display_name||t?.displayName||t?.name||t?.title;
    if(lbl)return lbl;
    const code=(it.code||it.pollen_type_code||t?.code||t?.name||t?.slug||"").toString(),ncode=norm(code);
    for(const k in FALLBACK)if(ncode.includes(k))return FALLBACK[k];
    return code||"—";
  }
  function levelLabel(it){
    const lId=it.pollen_level_definition_id||it.pollenLevelDefinitionId||it.level_definition_id||it.levelId;
    const lv=lId?levelsById.get(lId):null;
    const lbl=it.level_label||it.levelLabel||it.level||lv?.label||lv?.name||lv?.title;
    if(lbl)return lbl;
    const v=it.value??it.level_value??it.levelValue;
    if(v==null||isNaN(v))return"—";
    const num=Number(v);return num<=0?"Ingen":num<=1?"Låg":num<=2?"Måttlig":num<=3?"Hög":"Mycket hög";
  }

  const items=entriesArr.map(it=>({label:typeLabel(it),level:levelLabel(it)})).filter(x=>x.label&&x.label!=="—");
  const PRIOR=["Al","Björk","Gräs","Gråbo"];
  items.sort((x,y)=>{const xi=PRIOR.indexOf(x.label),yi=PRIOR.indexOf(y.label);if(xi!==-1||yi!==-1)return(xi===-1?99:xi)-(yi===-1?99:yi);return x.label.localeCompare(y.label,"sv");});

  const anyActive=items.some(x=>x.level&&x.level!=="Ingen"&&x.level!=="—");
  headline&&(headline.textContent=anyActive?"Aktiva pollen nu":"Inga aktiva pollen idag");

  n&&(n.onclick=()=>{render(items,!0),n.blur()}),render(items,!1);
}function init(){wireSearch("klySearch"),wireCityLinks(),"city"===document.body.dataset.klyPage&&(loadWeather(document.body.dataset.citySlug).catch(()=>{const a=document.getElementById("dataError");a&&a.classList.remove("hidden")}),loadPollen(document.body.dataset.citySlug).catch(()=>{const a=document.getElementById("pollenError");a&&a.classList.remove("hidden")}),(()=>{try{localStorage.setItem("kly_last_city",document.body.dataset.citySlug)}catch{}})()),"home"===document.body.dataset.klyPage&&setTimeout(()=>autoRoute(),50)}return{init,autoRoute}})();document.addEventListener("DOMContentLoaded",()=>KLY.init());
