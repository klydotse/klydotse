/* Dummy-only build (no APIs). Replace with real data later. */
const $ = (id) => document.getElementById(id);

document.getElementById("yearNow").textContent = new Date().getFullYear();

document.getElementById("btnRefresh").addEventListener("click", () => {
  document.getElementById("nowTime").textContent =
    new Date().toLocaleTimeString("sv-SE", {hour:"2-digit", minute:"2-digit"});
});

const season = {
  "Al": "Feb–maj",
  "Hassel": "Feb–jun",
  "Alm": "Mar–jun",
  "Björk": "Mar–jul",
  "Bok": "Maj–jun",
  "Ek": "Maj–jul",
  "Gräs": "Maj–okt",
  "Gråbo": "Jul–okt",
  "Malörtsambrosia": "Sep–nov",
  "Sälg/vide": "Apr–jul"
};

const pollenAll = [
  { plant:"Al", d0:"L", d1:"L", d2:"M" },
  { plant:"Hassel", d0:"L", d1:"L", d2:"L" },
  { plant:"Alm", d0:"L", d1:"L", d2:"L" },
  { plant:"Björk", d0:"M", d1:"M", d2:"H" },
  { plant:"Bok", d0:"L", d1:"L", d2:"L" },
  { plant:"Ek", d0:"L", d1:"M", d2:"M" },
  { plant:"Gräs", d0:"N", d1:"L", d2:"L" },
  { plant:"Gråbo", d0:"N", d1:"N", d2:"L" },
  { plant:"Malörtsambrosia", d0:"N", d1:"N", d2:"N" },
  { plant:"Sälg/vide", d0:"L", d1:"L", d2:"L" }
];

function pill(level){
  if(level==="L") return '<span class="pollen-pill pL">L</span>';
  if(level==="M") return '<span class="pollen-pill pM">M</span>';
  if(level==="H") return '<span class="pollen-pill pH">H</span>';
  return '<span class="pollen-pill pN">–</span>';
}
function scoreRow(r){
  const v = {N:0, L:1, M:2, H:3};
  return Math.max(v[r.d0]??0, v[r.d1]??0, v[r.d2]??0);
}

function renderPollen(expanded){
  const rows = document.getElementById("pollenRows");
  rows.innerHTML = "";
  const v = {N:0, L:1, M:2, H:3};
  const sorted = [...pollenAll].sort((a,b) => {
    const sa = scoreRow(a), sb = scoreRow(b);
    if(sb!==sa) return sb-sa;
    return (v[b.d0]??0) - (v[a.d0]??0);
  });

  const show = expanded ? sorted : sorted.slice(0,3);
  document.getElementById("pollenHint").textContent = expanded ? "Visar 10 av 10" : "Visar 3 av 10";

  for(const r of show){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.plant}</td>
      <td>${pill(r.d0)}</td>
      <td>${pill(r.d1)}</td>
      <td>${pill(r.d2)}</td>
      <td>${season[r.plant] || "—"}</td>
    `;
    rows.appendChild(tr);
  }

  if(!expanded){
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td colspan="5" style="color: rgba(255,255,255,.72); font-weight:800;">
        … +7 fler (öppna för alla)
      </td>
    `;
    rows.appendChild(tr);
  }
}

let pollenOpen = false;
renderPollen(false);

const toggle = document.getElementById("pollenToggle");
const body = document.getElementById("pollenBody");

toggle.addEventListener("click", () => {
  pollenOpen = !pollenOpen;
  toggle.setAttribute("aria-expanded", pollenOpen ? "true" : "false");
  body.classList.toggle("open", pollenOpen);
  document.querySelector(".chev").textContent = pollenOpen ? "▴" : "▾";
  renderPollen(pollenOpen);
});

function mkHourly(){
  const strip = document.getElementById("hourlyStrip");
  strip.innerHTML = "";
  const hours = [9,10,11,12,13,14,15,16,17,18];
  const temps = [11,12,12,13,13,14,13,13,12,11];
  const pop =  [0,0,10,10,20,40,60,50,20,10];
  const mm  =  [0,0,0.0,0.0,0.1,0.2,0.6,0.4,0.1,0.0];

  for(let i=0;i<hours.length;i++){
    const div = document.createElement("div");
    div.className = "hour-item";
    div.setAttribute("role","listitem");
    div.innerHTML = `
      <div class="hour-time">${String(hours[i]).padStart(2,"0")}:00</div>
      <div class="hour-temp">${temps[i]}°</div>
      <div class="hour-precip">${pop[i]}% risk</div>
      <div class="hour-mm">${mm[i].toFixed(1)} mm</div>
    `;
    strip.appendChild(div);
  }
}

function mkTenDays(){
  const list = document.getElementById("tenDayList");
  list.innerHTML = "";
  const days = ["Tis","Ons","Tor","Fre","Lör","Sön","Mån","Tis","Ons","Tor"];
  const desc = ["Mulet","Mulet","Regn","Moln","Sol","Regn","Sol","Mulet","Mulet","Moln"];
  const hi =   [13,12,10,11,14,9,11,12,12,10];
  const lo =   [7,6,5,6,8,4,6,7,7,5];
  const p =    [10,20,70,25,5,60,10,15,20,35];
  const mm =   [0.0,0.2,3.1,0.4,0.0,2.2,0.1,0.0,0.1,0.8];

  for(let i=0;i<10;i++){
    const row = document.createElement("div");
    row.className = "ten-row";
    row.setAttribute("role","listitem");
    row.innerHTML = `
      <div class="ten-day">${days[i]}</div>
      <div class="ten-desc">${desc[i]}</div>
      <div class="ten-temps">${hi[i]}° / ${lo[i]}°</div>
      <div class="ten-precip">${p[i]}% · ${mm[i].toFixed(1)}mm</div>
    `;
    list.appendChild(row);
  }
}

mkHourly();
mkTenDays();
