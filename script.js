const products = [
  { id:1, name:"Acqua Panna Still Water", cat:"Beverages", pack:"24 × 500ml", img:"https://picsum.photos/seed/panna/500/375" },
  { id:2, name:"San Pellegrino Sparkling", cat:"Beverages", pack:"24 × 500ml", img:"https://picsum.photos/seed/sanpellegrino/500/375" },
  { id:3, name:"Lavazza Espresso Classico", cat:"Beverages", pack:"6 × 1kg", img:"https://picsum.photos/seed/lavazza/500/375" },
  { id:4, name:"Illy Arabica Whole Bean", cat:"Beverages", pack:"6 × 250g", img:"https://picsum.photos/seed/illy/500/375" },
  { id:5, name:"Barilla Spaghetti No. 5", cat:"Pasta & Flour", pack:"20 × 500g", img:"https://picsum.photos/seed/barilla/500/375" },
  { id:6, name:"De Cecco Rigatoni", cat:"Pasta & Flour", pack:"20 × 500g", img:"https://picsum.photos/seed/dececco/500/375" },
  { id:7, name:"Caputo Farina 00", cat:"Pasta & Flour", pack:"10 × 1kg", img:"https://picsum.photos/seed/caputo/500/375" },
  { id:8, name:"Garofalo Fusilli", cat:"Pasta & Flour", pack:"24 × 400g", img:"https://picsum.photos/seed/garofalo/500/375" },
  { id:9, name:"Parmigiano Reggiano DOP", cat:"Cheese & Dairy", pack:"Whole wheel ~36kg", img:"https://picsum.photos/seed/parmigiano/500/375" },
  { id:10, name:"Buffalo Mozzarella", cat:"Cheese & Dairy", pack:"12 × 125g", img:"https://picsum.photos/seed/mozzarella/500/375" },
  { id:11, name:"Grana Padano DOP", cat:"Cheese & Dairy", pack:"Wedge 1kg", img:"https://picsum.photos/seed/granapadano/500/375" },
  { id:12, name:"Mascarpone Cremoso", cat:"Cheese & Dairy", pack:"6 × 250g", img:"https://picsum.photos/seed/mascarpone/500/375" },
  { id:13, name:"Prosciutto di Parma DOP", cat:"Meat & Cold Cuts", pack:"Whole leg ~8kg", img:"https://picsum.photos/seed/prosciutto/500/375" },
  { id:14, name:"Mortadella Bologna", cat:"Meat & Cold Cuts", pack:"1 × 5kg piece", img:"https://picsum.photos/seed/mortadella/500/375" },
  { id:15, name:"Bresaola della Valtellina", cat:"Meat & Cold Cuts", pack:"Sliced 500g × 10", img:"https://picsum.photos/seed/bresaola/500/375" },
  { id:16, name:"Salame Milano", cat:"Meat & Cold Cuts", pack:"Whole 1.5kg", img:"https://picsum.photos/seed/salame/500/375" },
  { id:17, name:"Pomodori Pelati San Marzano", cat:"Vegetables & Preserved", pack:"24 × 400g", img:"https://picsum.photos/seed/pomodori/500/375" },
  { id:18, name:"Artichoke Hearts in Oil", cat:"Vegetables & Preserved", pack:"12 × 290g", img:"https://picsum.photos/seed/artichoke/500/375" },
  { id:19, name:"Sundried Tomatoes", cat:"Vegetables & Preserved", pack:"6 × 500g", img:"https://picsum.photos/seed/sundried/500/375" },
  { id:20, name:"Giardiniera Mista", cat:"Vegetables & Preserved", pack:"12 × 580g", img:"https://picsum.photos/seed/giardiniera/500/375" },
  { id:21, name:"Panettone Classico", cat:"Desserts", pack:"6 × 1kg", img:"https://picsum.photos/seed/panettone/500/375" },
  { id:22, name:"Amaretti di Saronno", cat:"Desserts", pack:"12 × 200g", img:"https://picsum.photos/seed/amaretti/500/375" },
  { id:23, name:"Torrone Nougat", cat:"Desserts", pack:"10 × 150g", img:"https://picsum.photos/seed/torrone/500/375" },
  { id:24, name:"Baci Perugina Chocolates", cat:"Desserts", pack:"6 × 200g", img:"https://picsum.photos/seed/baci/500/375" },
  { id:25, name:"Gelato Pistacchio", cat:"Ice Cream", pack:"4 × 2.5L tubs", img:"https://picsum.photos/seed/pistacchio/500/375" },
  { id:26, name:"Stracciatella Gelato", cat:"Ice Cream", pack:"4 × 2.5L tubs", img:"https://picsum.photos/seed/stracciatella/500/375" },
  { id:27, name:"Sorbetto al Limone", cat:"Ice Cream", pack:"4 × 2L tubs", img:"https://picsum.photos/seed/sorbetto/500/375" },
  { id:28, name:"Nocciola Gelato", cat:"Ice Cream", pack:"4 × 2.5L tubs", img:"https://picsum.photos/seed/nocciola/500/375" },
  { id:29, name:"Frantoio Extra Virgin Olive Oil", cat:"Oils & Condiments", pack:"6 × 1L", img:"https://picsum.photos/seed/frantoio/500/375" },
  { id:30, name:"Aceto Balsamico di Modena", cat:"Oils & Condiments", pack:"12 × 250ml", img:"https://picsum.photos/seed/balsamico/500/375" },
  { id:31, name:"Truffle Oil Bianco", cat:"Oils & Condiments", pack:"12 × 100ml", img:"https://picsum.photos/seed/truffle/500/375" },
  { id:32, name:"Capers in Sea Salt", cat:"Oils & Condiments", pack:"12 × 200g", img:"https://picsum.photos/seed/capers/500/375" }
];

const CATEGORIES = ["All","Beverages","Pasta & Flour","Cheese & Dairy","Meat & Cold Cuts","Vegetables & Preserved","Desserts","Ice Cream","Oils & Condiments"];

let activeFilter = "All";
let searchVal = "";
let sortVal = "default";

function countFor(cat) {
  return cat === "All" ? products.length : products.filter(p => p.cat === cat).length;
}

function buildFilters() {
  const container = document.getElementById("filters");
  container.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeFilter ? " active" : "");
    btn.dataset.cat = cat;
    const c = countFor(cat);
    btn.innerHTML = `${cat} <span class="count">${c}</span>`;
    btn.onclick = () => { activeFilter = cat; buildFilters(); renderGrid(); };
    container.appendChild(btn);
  });
}

function getFiltered() {
  let list = products.filter(p => {
    const matchCat = activeFilter === "All" || p.cat === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(searchVal.toLowerCase());
    return matchCat && matchSearch;
  });
  if (sortVal === "az") list = [...list].sort((a,b) => a.name.localeCompare(b.name));
  else if (sortVal === "za") list = [...list].sort((a,b) => b.name.localeCompare(a.name));
  else if (sortVal === "category") list = [...list].sort((a,b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name));
  return list;
}

function renderGrid() {
  const grid = document.getElementById("grid");
  const meta = document.getElementById("resultsMeta");
  const list = getFiltered();
  meta.innerHTML = `Showing <span>${list.length}</span> of ${products.length} products${activeFilter !== "All" ? ` in <span>${activeFilter}</span>` : ""}${searchVal ? ` matching "<span>${searchVal}</span>"` : ""}`;

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><div class="big-char">∅</div><p>No products found. Try a different search.</p></div>`;
    return;
  }

  grid.innerHTML = "";
  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${Math.min(i * 40, 300)}ms`;
    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="card-badge">${p.cat.split(" ")[0]}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-pack">${p.pack}</div>
        <span class="card-cat-tag">${p.cat}</span>
      </div>`;
    grid.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", e => {
  searchVal = e.target.value;
  renderGrid();
});
document.getElementById("sortSelect").addEventListener("change", e => {
  sortVal = e.target.value;
  renderGrid();
});

buildFilters();
renderGrid();
