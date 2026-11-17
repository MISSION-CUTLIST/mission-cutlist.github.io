/* ---------- podatki ---------- */
/* ---------- jezik: SI / EN ---------- */
const LANG_KEY = 'kosovnica.lang';
function detectLang(){
  try { const v = localStorage.getItem(LANG_KEY); if (v==='sl'||v==='en') return v; } catch(_){}
  const ls = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language||''];
  if (ls.some(l=>/^sl\b/i.test(l))) return 'sl';
  try { if (Intl.DateTimeFormat().resolvedOptions().timeZone==='Europe/Ljubljana') return 'sl'; } catch(_){}
  return 'en';
}
let LANG = detectLang();
const EN = () => LANG==='en';
const sheetLab = i => (LANG==='en'?'S':'P') + (i+1);
const L = (sl, en) => EN() ? en : sl;
const DICT = {
 'Počisti kosovnico':'Clear cut list','Namesti kot aplikacijo':'Install as app','Razveljavi zadnjo spremembo kosov':'Undo last change to parts',
 'Ime kosovnice…':'Cut list name…','Ime kosovnice':'Cut list name','Izvozi':'Export','Kupi mi pepsi':'Buy me a pepsi',
 'Pošlji':'Send','Kosi':'Parts','Kosi (mm)':'Parts (mm)','Plošče (mm)':'Sheets (mm)','Uredi kose':'Edit parts','Naziv':'Name','Dolž.':'Len.','Šir.':'Wid.','Kol.':'Qty','Vrt.':'Rot.','Rob':'Edge',
 '+ Kos':'+ Part','Prilepi seznam':'Paste list','+ Nov material':'+ New material','Opombe':'Notes','+ Skupina':'+ Group','Enakomerno razporejeno':'Evenly spaced','Vsak kos na svoji poziciji':'Each piece at its own position','od dna':'from the bottom','od leve':'from the left','distančnik maske':'filler spacer','Zavrtim element?':'Rotate the unit?','Zavrti':'Rotate','Širina maske':'Filler width','Maska do stene':'Filler to the wall','Elementi':'Units','v redu':'OK','Zamenjaj':'Change','Odstranim element?':'Remove the unit?','Zapri stran do tal':'Close side to floor','Police in pregrade so samo v delih z vrati in odprtih delih, v predalih jih ni.':'Shelves and dividers only in door and open parts, never in drawers.','Levo':'Left','Desno':'Right','Urejanje elementa':'Edit unit','Končano':'Done','Rezerva stropa in dna':'Top and bottom allowance','Razmik med stenama':'Gap between walls','Prehod med prvo in vzporedno steno':'Walkway between the first and the parallel wall','Izvoz .obj':'Export .obj','Izvoz kosov':'Export parts','Izvozi kose':'Export parts','Preveri listo. Kosi se dodajo v kosovnico kot novi materiali šele, ko potrdiš.':'Check the list. Parts are added to the cut list as new materials only after you confirm.','Potrdi in dodaj':'Confirm and add','Odstrani pult':'Remove the worktop','Doda pult na vse strani':'Adds a worktop on all sides','+ Pult':'+ Worktop','ni dodan':'not added','Dodaj fronto':'Add a front','Število vrat':'Number of doors','Povleci gor ali dol za premik':'Drag up or down to move','klik zamenja':'click to switch','Ime produkta':'Product name','+ Fronta':'+ Front','Predal':'Drawer','Odprto':'Open','Višina fronte':'Front height','Fronte':'Fronts','Hitri model':'Quick model','Model se shrani samodejno.':'The model saves automatically.','Hitri 3D model elementa z izometrijo':'Quick 3D model of a unit with an isometric view','Vrata':'Door','odpira se levo':'opens left','odpira se desno':'opens right','Hrbet med stranicama':'Back between sides','Hrbet čez stranici':'Back over sides','Pult':'Worktop','Debelina pulta':'Worktop thickness','Previs pulta':'Worktop overhang','Odmik od pulta':'Gap above worktop','Strop med stranicama':'Top between sides','Strop čez stranici':'Top over sides','Število vrat':'Number of doors','Police':'Shelves','Pregrade':'Dividers','Širina':'Width','Globina':'Depth','Višina':'Height','Količina':'Quantity','Vidnost':'Visibility','Odstrani':'Remove','Ime modela…':'Model name…','Vpiši ime modela, da začneš.':'Enter a model name to start.','Ponastavi vse':'Reset all','Ponastavi':'Reset','Letve (mm)':'Battens (mm)','+ Letev':'+ Batten','Pošlji skico':'Send sketch','Fronta ožja od omarice':'Front narrower than unit','Ime modela':'Model name','Najprej izberi postavitev.':'Choose a layout first.','Debelina plošč':'Panel thickness','Debelina front':'Front thickness','Višina cokla':'Plinth height','Odmik cokla od fronte':'Plinth setback','+ Letev':'+ Bar','Deli':'Share','Naziv je enak kot pri prvi plošči':'Name matches the first sheet','Letve (mm)':'Bars (mm)','+ Letev':'+ Bar','za kosovnico':'for the cut list','Letve':'Bars','Na sredini':'Centred','Razveljavi zadnjo spremembo':'Undo last change','Razveljavi':'Undo','Kopiraj':'Copy','Deli povezavo':'Share link','Razrez':'Cutting','Izvoz':'Export','Naprej':'Next','Namesti kot aplikacijo':'Install as app','Robni trak':'Edge band','Zapri':'Close','Meni':'Menu','O aplikaciji · MISSION:CUTLIST':'About · MISSION:CUTLIST','MISSION:CUTLIST je brezplačno orodje za načrtovanje in optimizacijo razreza plošč, namenjeno uporabnikom: mizarjem, izdelovalcem pohištva in vsem, ki sami krojijo plošče. Iz seznama kosov izračuna razrez iverala, MDF, vezanih in drugih plošč z najmanj odpada, ob upoštevanju debeline reza, obreza robov in smeri vlaken, ter prikaže risbo vsake plošče.':'MISSION:CUTLIST is a free tool for planning and optimizing panel cutting, made for its users: woodworkers, furniture makers and anyone who cuts sheets themselves. From a list of parts it calculates the cutting layout for chipboard, MDF, plywood and other sheet materials with minimal waste, taking saw kerf, edge trim and grain direction into account, and shows a drawing of every sheet.','V eni kosovnici je mogoče imeti več materialov in plošč, skupine kosov, približno ceno in Hitri model enote s 3D prikazom. Rezultate je mogoče izvoziti v PDF, XLSX, CSV in DXF ali deliti s povezavo. Aplikacija je brez licenc, naročnin, registracije in omejitev uporabe. Deluje v brskalniku, podatki ostanejo na uporabnikovi napravi, osebnih podatkov ne zbira. Izračuni so informativni, zato je pred razrezom priporočljivo preveriti mere in količine; avtor ne odgovarja za morebitne napake ali stroške materiala.':'One cut list can hold several materials and sheets, groups of parts, an approximate cost and a Quick model of a unit with a 3D view. Results can be exported to PDF, XLSX, CSV and DXF or shared with a link. The app has no licences, subscriptions, sign-up or usage limits. It runs in the browser, data stays on the user\'s device and no personal data is collected. Calculations are indicative, so check dimensions and quantities before cutting; the author is not liable for any errors or material costs.','Da':'Yes','Ne':'No','Vse':'All','Povleci za premik':'Drag to move','izbrana':'selected','Obd.':'Mach.','Robni trak':'Edge band','Dodaj v':'Add to','Elementi':'Units','Zapri':'Close','Prilepi':'Paste','Deb.':'Thk.','Stolpci':'Columns','Predogled':'Preview','Debelina (mm)':'Thickness (mm)','Dodaj kose':'Add parts','Prekliči':'Cancel','Plošče':'Sheets','+ Plošča':'+ Sheet',
 'Nastavitve':'Settings','Debelina reza':'Saw kerf','Obrez robov':'Edge trim','Uporaben ostanek':'Usable offcut','Vzdolžno':'Rip','Prečno':'Cross','vzdolžno':'rip','prečno':'cross','Smer vlaken':'Grain',
 'Upoštevaj':'Respect','Prezri':'Ignore','Izkoristek – %':'Yield – %','Izkoristek':'Yield','Ostanki':'Offcuts','Odpad':'Waste','Plošča':'Sheet','Mera':'Size',
 'Seznam kosov':'Parts list','Kos':'Part','Zaporedje rezov':'Cut sequence','Rez':'Cut','Prislon':'Fence','Dobiš':'Gives','Knjižnica plošč':'Sheet library',
 'Dodaj ploščo':'Add sheet','Prilepi seznam iz Excela ali naloži CSV. Ena plošča na vrstico: naziv, dolžina, širina in po želji cena. Tvoje plošče so v izbirniku vedno na vrhu.':'Paste a list from Excel or upload a CSV. One sheet per line: name, length, width and an optional price. Your sheets always appear at the top of the picker.',
 'Naloži datoteko':'Upload file','Zamenjaj obstoječi seznam':'Replace existing list','Počisti knjižnico':'Clear library','Zapri':'Close','Uvozi':'Import',
 'Razrez':'Layout','Potrditev':'Confirm','Izbriši':'Delete','Odpri kosovnico':'Open cut list','Razveljavi':'Undo','Vrtenje – ali se kos sme zasukati':'Rotation – whether the part may be turned',
 'Kos se sme zasukati':'Part may rotate','Vrtenje dovoljeno':'Rotation allowed','Brez vrtenja':'No rotation','Odstrani':'Remove',
 'En kos na vrstico – iz Excela ali besedila:\nnaziv ⇥ dolžina ⇥ širina ⇥ količina ⇥ robovi\nStranica; 720; 560; 2; 1010':'One part per line – from Excel or text:\nname ⇥ length ⇥ width ⇥ qty ⇥ edges\nSide panel; 720; 560; 2; 1010',
 'Izberi ploščo':'Choose sheet','Več nastavitev':'More settings',
 'Tvoje ime (neobvezno)':'Your name (optional)','Skrij':'Hide','Robni trak':'Edge band','Odstrani material':'Remove material',
 '+ Moja plošča':'+ My sheet','Tipske':'Standard','Moje plošče':'My sheets','Knjižnica je prazna':'Library is empty','Ni razporejeno':'Not placed',
 'Dodaj ploščo in nekaj kosov – razrez se prikaže tukaj.':'Add a sheet and some parts – the layout appears here.','Ni uporabnih ostankov.':'No usable offcuts.',
 'Najprej dodaj ploščo in kose.':'Add a sheet and parts first.',
 'Za izvoz v Excel je potrebna internetna povezava. Uporabi CSV.':'Excel export needs an internet connection. Use CSV.',
 'Odstranim material?':'Remove material?',
 'Počistim knjižnico?':'Clear library?','Vse tvoje plošče bodo odstranjene iz izbirnika.':'All your sheets will be removed from the picker.','Počisti':'Clear',
 'Nalagam orodja …':'Loading tools …','Pakiram ZIP …':'Packing ZIP …','Deli':'Share','Ni prepoznanih plošč – preveri obliko vrstic.':'No sheets recognised – check the line format.',
 'Brez imena':'Untitled','Cena':'Price','Material':'Material','Excel':'Excel',
 'Povezava za plačilo še ni nastavljena.':'Payment link is not set up yet.','Prenesi vse':'Download all','Končano':'Done','Deli povezavo':'Share link','V redu':'OK','Odpri':'Open','Za izvoz PDF je potrebna internetna povezava.':'PDF export needs an internet connection.','Obd.':'Ops','Obdelave':'Machining','Končano':'Done','Št.':'No.','Dolžina (mm)':'Length (mm)','Širina (mm)':'Width (mm)','Količina':'Quantity','Vrtenje':'Rotation','Trak (m)':'Band (m)','Površina (m²)':'Area (m²)','Izkoristek (%)':'Yield (%)','Cena (€)':'Price (€)','Št. kosa':'Part no.','Zasukan':'Rotated','Kos (mm)':'Piece (mm)','Prislon (mm)':'Fence (mm)','Kosovnica':'Cut list','Datum':'Date','Rez (mm)':'Kerf (mm)','Obrez (mm)':'Trim (mm)','Robni trak (m)':'Edge band (m)','Cena plošč (€)':'Sheet cost (€)','Cena traku (€)':'Band cost (€)','Povzetek':'Summary','Rezi':'Cuts'
};
const PATTERNS = [
 [/^(\d+) razporeditev · (\d+) ms · rez (.+) mm$/, '$1 layouts · $2 ms · kerf $3 mm'],
 [/^Kosi (.+) m²$/, 'Parts $1 m²'], [/^Ostanki (.+) m²$/, 'Offcuts $1 m²'], [/^Odpad (.+) m²$/, 'Waste $1 m²'],
 [/^Plošče · razporejeno (.+)$/, 'Sheets · placed $1'],
 [/^Ostanki m² · (\d+) (kos|kosa|kosi|kosov)$/, 'Offcuts m² · $1 pcs'],
 [/^Približna cena · EUR · trak (.+) m$/, 'Approx. price · EUR · band $1 m'], [/^Približna cena · EUR$/, 'Approx. price · EUR'],
 [/^kosi (\d+) \/ ploščo · rezi (\d+)$/, 'parts $1 / sheet · cuts $2'], [/^kosi (\d+) · rezi (\d+)$/, 'parts $1 · cuts $2'],

 [/^(\d+) rezov · (.+) m$/, '$1 cuts · $2 m'],
 [/^(.+) · ponovi (\d+)× · rezi (\d+)$/, '$1 · repeat $2× · cuts $3'], [/^(.+) · rezi (\d+)$/, '$1 · cuts $2'],
 [/^trak (.+)$/, 'strip $1'],
 [/^Plošča (\d+) · (.+) %$/, 'Sheet $1 · $2 %'], [/^Plošča (\d+) – nadaljevanje$/, 'Sheet $1 – continued'], [/^Plošča (\d+)$/, 'Sheet $1'],
 [/^Kos (\d+)(.*)$/, 'Part $1$2'],
 [/^V knjižnici: (\d+)$/, 'In library: $1'],
 [/^Uvoženih (\d+)\. Najdeš jih v izbirniku pri nazivu plošče\.$/, 'Imported $1. You will find them in the sheet picker.'],
 [/^Razrez – stran (\d+) od (\d+)$/, 'Layout – page $1 of $2'],
 [/^Pripravljeno · (.+) MB$/, 'Ready · $1 MB'],
 [/^»(.*)« bo izbrisana\. Tega ni mogoče razveljaviti\.$/, '“$1” will be deleted. This cannot be undone.'],
 [/^Material (\d+) z vsemi ploščami in kosi \((\d+)\) bo odstranjen\.$/, 'Material $1 with all its sheets and parts ($2) will be removed.'],
 [/^(.*) – prevelik za plošče\.$/, '$1 – too large for the sheets.'],
 [/^Robni trak: (.+)$/, 'Edge band: $1']
];
function tr(str){
  if (!EN() || str==null) return str;
  const raw = String(str), t = raw.trim(); if (!t) return raw;
  let out = DICT[t];
  if (out===undefined){ for (const [re,rp] of PATTERNS){ if (re.test(t)){ out = t.replace(re, rp); break; } } }
  if (out===undefined) return raw;
  return raw.replace(t, out);
}
const ORIG_T = new WeakMap(), ORIG_A = new WeakMap(), TATTR = ['placeholder','title','aria-label','data-tip'];
function trNode(n){
  if (n.nodeType===3){
    const p=n.parentElement; if (!p || p.closest('script,style,textarea')) return;
    const v=n.nodeValue, t=tr(v); if (t!==v){ if(!ORIG_T.has(n)) ORIG_T.set(n,v); n.nodeValue=t; }
  } else if (n.nodeType===1){
    for (const a of TATTR){ if (n.hasAttribute(a)){ const v=n.getAttribute(a), t=tr(v); if (t!==v){ const o=ORIG_A.get(n)||{}; if(!(a in o)) o[a]=v; ORIG_A.set(n,o); n.setAttribute(a,t); } } }
    if (n.tagName==='SCRIPT'||n.tagName==='STYLE') return;
    for (const c of n.childNodes) trNode(c);
  }
}
const i18nObs = new MutationObserver(ms=>{ if (!EN()) return; for (const m of ms){ if (m.type==='childList') m.addedNodes.forEach(trNode); else if (m.type==='characterData') trNode(m.target); else if (m.type==='attributes') trNode(m.target); } });
function applyLang(){
  document.documentElement.lang = LANG;
  document.title = EN() ? 'MISSION:CUTLIST – free cut list and panel cutting optimizer' : 'MISSION:CUTLIST – brezplačen program za razrez plošč in kosovnico';
  if (EN()){ trNode(document.body); i18nObs.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:TATTR}); }
  else {
    i18nObs.disconnect();
    const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n; while(n=tw.nextNode()){ if (ORIG_T.has(n)) n.nodeValue=ORIG_T.get(n); }
    document.querySelectorAll('*').forEach(e=>{ const o=ORIG_A.get(e); if(o) for (const a in o) e.setAttribute(a,o[a]); });
  }
}
const _alert = window.alert.bind(window); window.alert = m => _alert(tr(m));

const KEY = 'cut.v1';

function seed(){   // nov uporabnik: prazna kosovnica, material 01 razširjen, prazna plošča in prazna prva vrstica kosa (kot po »Počisti kosovnico«)
  return {
    name:'', kerf:5, trim:0, minOff:100, openParts:[0],
    mats:[{band:null}],
    stock:[{name:'', l:'', w:'', t:'', price:'', m:0}],
    parts:[{name:'', l:'', w:'', qty:1, rot:true, m:0}]
  };
}
function blank(){ return {name:'', kerf:4, trim:0, minOff:100, mats:[], stock:[], parts:[]}; }

let db;
try { db = JSON.parse(localStorage.getItem(KEY)); } catch(e) {}
if (!db || !db.projects || !Object.keys(db.projects).length){
  const id = uid(); db = {cur:id, projects:{[id]:seed()}};
}
try { const last = localStorage.getItem('kosovnica.last'); if (last && db.projects[last]) db.cur = last; } catch(_){}
if (!db.projects[db.cur]) db.cur = Object.keys(db.projects)[0];
Object.values(db.projects).forEach(p=>{ if(p.name==='Kitchen'||p.name==='Kuhinja'||p.name==='Brez imena') p.name=''; });
function migrate(p){
  if (!Array.isArray(p.mats)) p.mats=[];
  if (!p.mats.length && ((p.parts||[]).length || (p.stock||[]).length)) p.mats=[{band:null}];
  const old = Array.isArray(p.bands) ? p.bands : [];
  p.mats.forEach(m=>{ if (typeof m.band==='number') m.band = old[m.band] ? Object.assign({}, old[m.band]) : null; if (m.band===undefined) m.band=null; });
  if (+p.bandPrice) p.mats.forEach(m=>{ if(!m.band) m.band={name:'Robni trak', price:+p.bandPrice}; });
  delete p.bands;
  delete p.bandPrice;
  (p.stock||[]).forEach(s=>{ if(!(s.m>=0)) s.m=0; if(s.t===undefined && /egger|iveral|kronospan|mdf 18|osb 18|breza 18/i.test(s.name||'')) s.t=18; });
  (p.parts||[]).forEach(q=>{ if(!(q.m>=0)) q.m=0; });
  if (!Array.isArray(p.groups)) p.groups=[];
  return p;
}
Object.values(db.projects).forEach(migrate);
let P = db.projects[db.cur];

function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
let askedPersist = false;
let saveWarned = false;
function save(){ try { localStorage.setItem(KEY, JSON.stringify(db)); localStorage.setItem('kosovnica.last', db.cur); saveWarned = false; } catch(e) { if (!saveWarned){ saveWarned = true; try { ask(L('Shranjevanje ni uspelo','Saving failed'), L('Brskalnik ne dovoli shranjevanja (prostor je poln ali je shranjevanje blokirano). Zadnje spremembe lahko izgubiš. Izvozi kosovnico (PDF, Excel ali povezava), da je ne izgubiš.','The browser is not allowing saving (storage is full or blocked). Your latest changes may be lost. Export the cut list (PDF, Excel or link) so you do not lose it.'), L('V redu','OK'), true); } catch(_){} } } if (!askedPersist && navigator.storage && navigator.storage.persist){ askedPersist = true; navigator.storage.persist().catch(()=>{}); } }

/* ---------- optimizacija (giljotinski rezi) ---------- */
const SORTS = {
  area:(a,b)=>b.l*b.w-a.l*a.w || Math.max(b.l,b.w)-Math.max(a.l,a.w),
  long:(a,b)=>Math.max(b.l,b.w)-Math.max(a.l,a.w) || b.l*b.w-a.l*a.w,
  short:(a,b)=>Math.min(b.l,b.w)-Math.min(a.l,a.w) || b.l*b.w-a.l*a.w,
  perim:(a,b)=>(b.l+b.w)-(a.l+a.w),
  len:(a,b)=>b.l-a.l || b.w-a.w,
  wid:(a,b)=>b.w-a.w || b.l-a.l,
};
const FITS = {
  baf:(F,l,w)=>F.w*F.h-l*w,
  bssf:(F,l,w)=>Math.min(F.w-l,F.h-w),
  blsf:(F,l,w)=>Math.max(F.w-l,F.h-w),
};
// true = prvi rez je vzdolžni (čez celo prosto polje)
const SPLITS = {
  slas:(F,l,w)=>(F.w-l)<=(F.h-w),
  llas:(F,l,w)=>(F.w-l)>(F.h-w),
  minas:(F,l,w)=>l*(F.h-w)>(F.w-l)*w,
  maxas:(F,l,w)=>l*(F.h-w)<=(F.w-l)*w,
  rip:()=>true,
  cross:()=>false,
};

function optimizeOne(p){
  const k = Math.max(0, +p.kerf||0), t = Math.max(0, +p.trim||0);
  const stocks = p.stock.map((s,i)=>({si:i, name:s.name||('Plošča '+(i+1)), L:+s.l, W:+s.w, T:+s.t||0,
      qty: +s.qty>0 ? +s.qty : Infinity, price: Math.max(0, +s.price||0)}))
    .filter(s=>s.L>2*t && s.W>2*t);
  const items = [];
  p.parts.forEach((q,pi)=>{
    const l=+q.l, w=+q.w, n=Math.floor(+q.qty||0);
    if (l>0 && w>0) for (let j=0;j<n;j++) items.push({pi, k:j, l, w, rot: p.grain==='off' ? true : !!q.rot});
  });
  if (!stocks.length || !items.length) return null;

  const picks = stocks.length>1 ? (stocks.some(s=>s.price>0) ? ['small','big','cheap'] : ['small','big']) : ['small'];
  // vedno vse smeri prvega reza; stari podatki p.dir in p.goal ostanejo shranjeni, optimizator jih ne bere več
  const splits = Object.keys(SPLITS);
  let best = null, runs = 0;
  for (const s in SORTS){
    const sorted = items.slice().sort(SORTS[s]);
    for (const f in FITS) for (const sp of splits) for (const pk of picks){
      const r = run(sorted, stocks, k, t, FITS[f], SPLITS[sp], pk); runs++;
      if (better(r,best)) best = r;
    }
  }
  best.runs = runs; best.total = items.length; best.k = k;
  return best;
}

function optimize(p){
  const M = (p.mats||[{}]).length;
  let out = null;
  for (let m=0; m<M; m++){
    const sub = Object.assign({}, p, {
      stock: p.stock.filter(s=>(s.m||0)===m),
      parts: p.parts.map(q=>(q.m||0)===m ? q : Object.assign({}, q, {qty:0}))
    });
    let r = optimizeOne(sub);
    if (!r){
      const items=[]; sub.parts.forEach((q,pi)=>{ const n=Math.floor(+q.qty||0); if(+q.l>0&&+q.w>0) for(let j=0;j<n;j++) items.push({pi,l:+q.l,w:+q.w}); });
      if (!items.length) continue;
      r = {sheets:[], unplaced:items, placed:0, partA:0, sheetA:0, conc:0, cost:0, cuts:0, runs:0, total:items.length, k:Math.max(0,+p.kerf||0)};
    }
    r.sheets.forEach(sh=>{ sh.stock.m = m; });
    if (!out) out = Object.assign({}, r, {sheets:r.sheets.slice(), unplaced:r.unplaced.slice()});
    else { out.sheets.push(...r.sheets); out.unplaced.push(...r.unplaced); ['placed','partA','sheetA','cost','cuts','runs','total','conc'].forEach(k=>{ out[k]=(out[k]||0)+(r[k]||0); }); }
  }
  if (!out || !out.sheets.length) return null;
  return out;
}

function orients(it){ return it.rot && it.l!==it.w ? [[it.l,it.w],[it.w,it.l]] : [[it.l,it.w]]; }

function run(items, stocks, k, t, fit, split, pick){
  const sheets = [], used = stocks.map(()=>0), unplaced = [];
  for (const it of items){
    let c = null;
    for (const sh of sheets) for (const F of sh.free) for (const [l,w] of orients(it)){
      if (l<=F.w && w<=F.h){ const sc = fit(F,l,w); if (!c || sc<c.sc) c={sh,F,l,w,sc}; }
    }
    if (!c){
      const cands = stocks.filter((s,i)=>used[i]<s.qty &&
        orients(it).some(([l,w])=>l<=s.L-2*t && w<=s.W-2*t));
      if (!cands.length){ unplaced.push(it); continue; }
      cands.sort((a,b)=> pick==='small' ? a.L*a.W-b.L*b.W : pick==='big' ? b.L*b.W-a.L*a.W : (a.price/(a.L*a.W))-(b.price/(b.L*b.W)) || a.L*a.W-b.L*b.W);
      const st = cands[0]; used[stocks.indexOf(st)]++;
      const root = {x:t, y:t, w:st.L-2*t, h:st.W-2*t};
      const sh = {stock:st, root, free:[root], parts:[]};
      sheets.push(sh);
      for (const [l,w] of orients(it)) if (l<=root.w && w<=root.h){ const sc=fit(root,l,w); if(!c||sc<c.sc) c={sh,F:root,l,w,sc}; }
    }
    place(c, it, k, split);
  }
  let partA=0, sheetA=0, conc=0, cost=0, cuts=0;
  for (const sh of sheets){
    sheetA += sh.stock.L*sh.stock.W; cost += sh.stock.price; cuts += sh.cuts||0;
    for (const pp of sh.parts) partA += pp.w*pp.h;
    for (const F of sh.free) conc += (F.w*F.h)**2;
  }
  return {sheets, unplaced, placed:items.length-unplaced.length, partA, sheetA, conc, cost, cuts};
}

function place(c, it, k, split){
  const {sh, F, l, w} = c;
  sh.free.splice(sh.free.indexOf(F), 1);
  const rw = F.w - l, bh = F.h - w;
  const horiz = split(F,l,w);
  const add = n => { if (n.w>0 && n.h>0) sh.free.push(n); };
  const part = {x:F.x, y:F.y, w:l, h:w, part:it};
  sh.parts.push(part);

  if (horiz){
    let top = F;
    if (bh>0){
      const T={x:F.x,y:F.y,w:F.w,h:w}, B={x:F.x,y:F.y+w+k,w:F.w,h:bh-k};
      F.cut={d:'H', pos:F.y+w}; sh.cuts=(sh.cuts||0)+1; F.kids=[T,B]; add(B); top=T;
    }
    if (rw>0){
      const R={x:F.x+l+k,y:F.y,w:rw-k,h:w};
      top.cut={d:'V', pos:F.x+l}; sh.cuts=(sh.cuts||0)+1; top.kids=[part,R]; add(R);
    } else top.part=it;
  } else {
    let left = F;
    if (rw>0){
      const Lf={x:F.x,y:F.y,w:l,h:F.h}, R={x:F.x+l+k,y:F.y,w:rw-k,h:F.h};
      F.cut={d:'V', pos:F.x+l}; sh.cuts=(sh.cuts||0)+1; F.kids=[Lf,R]; add(R); left=Lf;
    }
    if (bh>0){
      const B={x:F.x,y:F.y+w+k,w:l,h:bh-k};
      left.cut={d:'H', pos:F.y+w}; sh.cuts=(sh.cuts||0)+1; left.kids=[part,B]; add(B);
    } else left.part=it;
  }
}

function better(a,b){
  if (!b) return true;
  if (a.placed!==b.placed) return a.placed>b.placed;
  if (a.cost!==b.cost) return a.cost<b.cost;
  if (a.sheetA!==b.sheetA) return a.sheetA<b.sheetA;
  return a.conc>b.conc;
}

function cutSeq(node, out=[]){
  if (node.cut){
    const len = node.cut.d==='H' ? node.w : node.h;
    const at = node.cut.d==='H' ? node.cut.pos-node.y : node.cut.pos-node.x;
    out.push({node, d:node.cut.d, pos:node.cut.pos, at, len, first:node.kids[0]});
    node.kids.forEach(n=>cutSeq(n,out));
  }
  return out;
}

/* ---------- vnos ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s??'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dec = n => EN() ? String(n) : String(n).replace('.',',');

function syncName(){ $('#projName').closest('.pname').classList.toggle('filled', !!$('#projName').value); }
$('#projName').addEventListener('focus',()=>$('.pname').classList.add('focus'));
$('#projName').addEventListener('blur',()=>$('.pname').classList.remove('focus'));
function renderProjects(){
  $('#projName').value = P.name; syncName();
  // izbirnika kosovnic ni več (odločitev lastnika 2026-11-12): starejše kosovnice ostanejo v db.projects nespremenjene, odprta je db.cur
}
const SETDEF = {grain:'on'};
function renderSettings(){
  $('#kerf').value=P.kerf; $('#trim').value=P.trim; $('#minOff').value=P.minOff;
  document.querySelectorAll('.seg[data-set]').forEach(g=>{ const v=P[g.dataset.set]||SETDEF[g.dataset.set]; g.querySelectorAll('button').forEach(b=>b.classList.toggle('on', b.dataset.v===v)); });
}
document.addEventListener('click', e=>{
  const b = e.target.closest('.seg[data-set] button'); if (!b) return;
  e.preventDefault(); P[b.closest('.seg').dataset.set] = b.dataset.v; renderSettings(); changed();
});
const SMALL = matchMedia('(max-width:1020px)');
function forceSetOpen(){ if (!SMALL.matches) return; $('.extra').classList.add('open'); $('.tiles').classList.add('more'); $('.setpanel .card').classList.add('open'); }
SMALL.addEventListener('change', ()=>{ if (SMALL.matches) forceSetOpen(); else { const o=!!db.setOpen; $('.extra').classList.toggle('open',o); $('.tiles').classList.toggle('more',o); $('.setpanel .card').classList.toggle('open',o); } });
setTimeout(forceSetOpen, 0);
$('.setpanel .card .head').addEventListener('click', e=>{ if (SMALL.matches) return; if (!e.target.closest('#setMore')) $('#setMore').click(); });
$('#setMore').onclick = ()=>{ const ex=$('.extra'), o=!ex.classList.contains('open'); ex.classList.toggle('open',o); $('.tiles').classList.toggle('more',o); $('.setpanel .card').classList.toggle('open',o); $('#setMore').setAttribute('aria-expanded',o); db.setOpen=o; save(); };
if (db.setOpen) $('#setMore').click();
/* tipske plošče: samo splošne vrste plošč, brez blagovnih znamk */
const PRESETS = [
  {name:'Iveral', l:2790, w:2060, t:18},
  {name:'MDF 18', l:2800, w:2070, t:18},
  {name:'HDF 3', l:2800, w:2070, t:3},
  {name:'Vezana breza 18', l:2500, w:1250, t:18},
  {name:'OSB 18', l:2500, w:1250, t:18},
];
if (!Array.isArray(db.lib)) db.lib = [];
const skey = p => (p.name+'|'+p.l+'|'+p.w).toLowerCase();
let menuItems = [];
function openPicker(i, btn){
  closePicker();
  menuItems = [];
  const sec = (list, title, tag)=>{
    if (!list.length) return '';
    return `<div class="lbl mh">${title}</div>` + list.map((p,j)=>{ const k=menuItems.push(p)-1;
      return `<button class="opt" data-k="${k}"><span>${esc(p.name)}</span>${tag==='lib'?`<span class="mono"><span class="rm" data-rm="${j}" title="Odstrani iz knjižnice">×</span></span>`:''}</button>`; }).join('');
  };
  const m = document.createElement('div');
  m.className='menu'; m.dataset.for=i;
  m.innerHTML = `<button class="more" data-lib>+ Moja plošča</button>` + sec(db.lib,'Moje plošče','lib') + sec(PRESETS,'Tipske');
  btn.closest('td').appendChild(m);
}
function closePicker(){ document.querySelectorAll('.menu').forEach(m=>m.remove()); }
document.addEventListener('click', e=>{
  const pk = e.target.closest('[data-pick]');
  if (pk){ e.stopPropagation(); const open = pk.closest('td').querySelector('.menu'); open ? closePicker() : openPicker(+pk.dataset.pick, pk); return; }
  const rm = e.target.closest('[data-rm]');
  if (rm){ e.stopPropagation(); db.lib.splice(+rm.dataset.rm,1); save(); const m=rm.closest('.menu'); const i=+m.dataset.for; openPicker(i, m.closest('td').querySelector('.pick')); return; }
  if (e.target.closest('[data-lib]')){ closePicker(); openLib(); return; }
  const op = e.target.closest('.opt');
  if (op){
    const i = +op.closest('.menu').dataset.for, p = menuItems[+op.dataset.k], s = P.stock[i];
    pushUndo('stock'); s.name=p.name; s.l=p.l; s.w=p.w; if (+p.t>0) s.t=+p.t; if (+p.price>0) s.price=+p.price;
    closePicker(); renderStock(); changed(); return;
  }
  if (!e.target.closest('.menu')) closePicker();
});
document.addEventListener('keydown', e=>{ if (e.key==='Escape') closePicker(); });
/* ---------- obdelave: utori in luknje ---------- */
const isBarMat = m => (P.mats[m]||{}).kind==='bar';
const opsOn = m => !isBarMat(m);
/* ===== FUNKCIJE =====
   MISSION:CUTLIST je v celoti brezplačen: brez licenc, brez plačljivih funkcij, brez registracije. Vse aktivne funkcije so 'free'.
   Tabela in can() ne zaklepata ničesar (nevtralen vmesnik).
   Licenčna koda je arhivirana izven projekta (zasebni arhiv, glej CLAUDE.md). */
const FEATURE_ACCESS = {
  edgeBand:'free', notes:'free', machining:'free', pdf:'free', xlsx:'free', csv:'free', dxf:'free',
  shareLink:'free', zipAll:'free', construction3D:'free', obj:'free'
};
/* DEV_OPEN ostane true (odločitev lastnika). Ker ni zaklenjenih funkcij, nima učinka. */
const DEV_OPEN = true;
const can = f => FEATURE_ACCESS[f]==='free' || DEV_OPEN;
const partOps = p => (opsOn(p.m||0) && Array.isArray(p.ops)) ? p.ops : [];
/* globine obdelav. Stari projekti nimajo o.dep: privzetek se samo IZRAČUNA (nič se ne zapiše v podatke).
   Utor ima globino od vedno v o.d. Izrez in okrogel izrez sta skoznja (globina = debelina materiala, se ne vnaša). */
const opAlong = (p,side) => side<2 ? +p.l : +p.w;
// obdelava na vseh enakih kosih (cnt prazno) ali na cnt kosih od k0 naprej
const opQty = p => Math.max(1, Math.floor(+p.qty||1));
const opInstN = (p,o) => (o.cnt==null || o.cnt==='' || +o.cnt >= opQty(p)) ? opQty(p) : Math.max(0, Math.floor(+o.cnt));
const opOn = (p,o,k) => { const q = opQty(p); if (opInstN(p,o) >= q) return true; return ((k - (+o.k0||0)) % q + q) % q < opInstN(p,o); };
const opsAt = (p,k) => (k==null) ? p : Object.assign({}, p, {ops:(p.ops||[]).filter(o=>opOn(p,o,k))});
function opPt(p, side, a, off){ if (side===0) return [a, off]; if (side===1) return [a, +p.w-off]; if (side===2) return [off, a]; return [+p.l-off, a]; }
function opHoles(p, o){
  const len = opAlong(p, o.side), out = [];
  if (o.t==='luknje'){ if (o.pitch>0) for (let a=o.from; a<=len-o.from+0.01; a+=o.pitch) out.push(a); }
  else if (o.t==='tecaji'){ const n=Math.max(1,Math.round(o.n||1)); if (n===1) out.push(len/2); else for (let i=0;i<n;i++) out.push(o.from + (len-2*o.from)*i/(n-1)); }
  else if (o.t==='mozniki'){ out.push(o.from); if (o.pitch>0) for (let a=o.from+o.pitch; a<len-o.from-o.pitch/2; a+=o.pitch) out.push(a); if (len-o.from>o.from) out.push(len-o.from); }
  return out.map(a=>opPt(p,o.side,a,o.off));
}
const cutSize = o => o.t==='krog' ? [2*(+o.r||0), 2*(+o.r||0)] : [+o.l||0, +o.w||0];
const isCut = o => o.t==='izrez' || o.t==='krog';
function syncCut(p, o){ const len = opAlong(p,o.side), across = o.side<2 ? +p.w : +p.l, [cl, cw] = cutSize(o);
  if (o.ca!==false) o.from = Math.round((len - cl)/2*2)/2;
  if (o.cx===true) o.off = Math.round((across - cw)/2*2)/2; }
function opCut(p, o){ // izrez za korito ali kuhalno ploščo: [x,y,w,h] v koordinatah kosa
  syncCut(p, o);
  const [l, w] = cutSize(o), off=+o.off||0, a=+o.from||0;
  if (o.side===0) return [a, off, l, w]; if (o.side===1) return [a, +p.w-off-w, l, w];
  if (o.side===2) return [off, a, w, l]; return [+p.l-off-w, a, w, l];
}
function opGroove(p, o){ // [x,y,w,h] v koordinatah kosa
  const len = opAlong(p,o.side), w=+o.w||0;
  if (o.side===0) return [0, o.off, len, w]; if (o.side===1) return [0, +p.w-o.off-w, len, w];
  if (o.side===2) return [o.off, 0, w, len]; return [+p.l-o.off-w, 0, w, len];
}
// map: (x,y) kosa -> (X,Y) risbe; trans = zasukan (dolžina navpično)
function opsDraw(p, ox, oy, trans, small, minR){
  let s=''; const M=(x,y)=> trans ? [ox+y, oy+x] : [ox+x, oy+y];
  for (const o of partOps(p)){
    if (o.t==='krog'){ const g=opCut(p,o), c=M(g[0]+g[2]/2, g[1]+g[3]/2); s += `<circle class="opc" cx="${c[0]}" cy="${c[1]}" r="${+o.r||0}"/>`; continue; }
    if (o.t==='izrez'){ const g=opCut(p,o), a=M(g[0],g[1]), b=M(g[0]+g[2],g[1]+g[3]);
      const offc = Math.min(+o.l||0, +o.w||0) >= (+P.minOff||0) && (+P.minOff||0) > 0;
      s += `<rect class="opc${offc?' off':''}" x="${Math.min(a[0],b[0])}" y="${Math.min(a[1],b[1])}" width="${Math.abs(b[0]-a[0])}" height="${Math.abs(b[1]-a[1])}" rx="${+o.r||0}"/>`; continue; }
    if (o.t==='utor'){ const g=opGroove(p,o), a=M(g[0],g[1]), b=M(g[0]+g[2],g[1]+g[3]);
      s += `<rect class="opg" x="${Math.min(a[0],b[0])}" y="${Math.min(a[1],b[1])}" width="${Math.abs(b[0]-a[0])}" height="${Math.abs(b[1]-a[1])}" stroke-dasharray="${small?'2 2':'5 4'}"/>`; }
    else for (const [x,y] of opHoles(p,o)){ const [X,Y]=M(x,y); s += `<circle class="${o.t==='tecaji'?'oph':'opd'}" cx="${X}" cy="${Y}" r="${Math.max((+o.dia||1)/2, minR||0)}"/>`; }
  }
  return s;
}
function opsCount(p, total){ const c={groove:0, holes:0, hinges:0, dowels:0, cutouts:0}; for (const o of partOps(p)){ const f = total ? opInstN(p,o) : 1; if (isCut(o)) c.cutouts+=f; else if (o.t==='utor') c.groove += opAlong(p,o.side)*f; else { const n=opHoles(p,o).length*f; if (o.t==='luknje') c.holes+=n; else if (o.t==='tecaji') c.hinges+=n; else c.dowels+=n; } } return c; }
function opsCode(p){
  const c=opsCount(p), out=[], g=partOps(p).filter(o=>o.t==='utor').length;
  if (g) out.push(L(`utor ${g}×`,`groove ${g}×`)); if (c.holes) out.push(`Ø5 ${c.holes}×`); if (c.hinges) out.push(`Ø35 ${c.hinges}×`); if (c.dowels) out.push(L(`moznik ${c.dowels}×`,`dowel ${c.dowels}×`)); if (c.cutouts) out.push(L(`izrez ${c.cutouts}×`,`cutout ${c.cutouts}×`));
  return out.join(' · ') || '–';
}
function opPr(m){ const x=P.mats[m]||{}; const pr = x.opPrice = x.opPrice||{}; if (pr.hole!==undefined){ ['holes','hinges','dowels'].forEach(k=>{ if (pr[k]===undefined) pr[k]=pr.hole; }); delete pr.hole; } return pr; }
function opsCost(){ let t=0; P.parts.forEach(p=>{ const pr=opPr(p.m||0), c=opsCount(p, true), q=(Math.floor(+p.qty)||0) ? 1 : 0; t += q*(c.holes*(+pr.holes||0) + c.hinges*(+pr.hinges||0) + c.dowels*(+pr.dowels||0) + c.cutouts*(+pr.cutouts||0) + c.groove/1000*(+pr.groove||0)); }); return t; }

/* robni trak: e = [D1, D2, Š1, Š2] (robovi ob dolžini in ob širini) */
const edges = p => Array.isArray(p.e) ? p.e.map(v=>v?1:0) : [0,0,0,0];
const bandMM = p => { if (!bandOf(p.m||0)) return 0; const e=edges(p); return ((e[0]+e[1])*(+p.l||0) + (e[2]+e[3])*(+p.w||0)) * (Math.floor(+p.qty)||0); };
const edgeCode = p => { const e=edges(p), d=e[0]+e[1], w=e[2]+e[3]; return [d?d+L('D','L'):'', w?w+L('Š','W'):''].filter(Boolean).join(' + ') || '–'; };
function edgeSVG(p, i, still){
  const e=edges(p), S=[[5,5,19,5],[5,19,19,19],[5,5,5,19],[19,5,19,19]];
  const base = `<rect class="eo" x="5" y="5" width="14" height="14"/>`;
  const on = S.map((g,k)=>e[k]?`<line class="es on" x1="${g[0]}" y1="${g[1]}" x2="${g[2]}" y2="${g[3]}"/>`:'').join('');
  const hits = still ? '' : S.map((g,k)=>`<line class="hit" data-edge="${i}-${k}" data-tip="${(k<2?p.l:p.w)||'–'} mm" x1="${g[0]}" y1="${g[1]}" x2="${g[2]}" y2="${g[3]}"/>`).join('');
  return `<svg class="edge${still?' still':''}" viewBox="0 0 24 24" aria-label="Robni trak: ${edgeCode(p)}">${base}${on}${hits}</svg>`;
}
const nn2 = i => String(i+1).padStart(2,'0');
const bandOf = m => { const x=P.mats[m]; if (!x) return null; if (!x.band || typeof x.band!=='object') x.band = {name:'', price:''}; return x.band; };
const matHasBand = m => P.parts.some(p=>(p.m||0)===m && edges(p).some(Boolean));
const matT = m => { const st=P.stock.find(x=>(x.m||0)===m && +x.t>0); return st ? +st.t : ''; };
const matName = m => { const st=P.stock.find(s=>(s.m||0)===m && s.name); return st ? st.name : 'Material '+nn2(m); };
let openParts = new Set(), openPid = null;
/* ===== razveljavi: dva neodvisna sistema =====
   'parts' = kosi in skupine (mere, količine, imena, robni trak, vrtenje, obdelave, opombe);
   'stock' = plošče in materiali (plošče, robni trak in cene materiala).
   Sklad hrani posnetke samo svojega dela trenutne kosovnice, zato razveljavitev v enem delu ne spremeni drugega.
   Spremembe, ki posežejo v oba dela hkrati (nov, odstranjen ali razdeljen material, kosi iz 3D, odstranitev obdelave ali
   traku z vseh kosov materiala), izpraznijo oba sklada (undoReset). 3D konstruiranje ima svojo zgodovino (HIST). */
const UNDO_KEYS = {parts:['parts','groups'], stock:['stock','mats']};
const UNDO = {parts:[], stock:[]}, undoTyping = {parts:null, stock:null};
const UNDO_INPUT = {parts:'[data-t="parts"],[data-gname]', stock:'[data-t="stock"],[data-bandm]'};
const undoSnap = d => JSON.stringify(UNDO_KEYS[d].map(k=>P[k]||[]), (k,v)=>k==='closed'?undefined:v);   // odprtost skupin ni del zgodovine
function pushUndo(d){
  const st = UNDO[d], sn = undoSnap(d); if (st.length && st[st.length-1].sn===sn) return;
  st.push({sn, t:Date.now()}); if (st.length>60) st.shift(); syncUndo();
}
function undoReset(){ UNDO.parts = []; UNDO.stock = []; undoTyping.parts = undoTyping.stock = null; syncUndo(); }
function syncUndo(){ document.querySelectorAll('[data-undo]').forEach(b=>{ b.disabled = !(UNDO[b.dataset.undo]||[]).length; }); }
function undo(d){
  const st = UNDO[d], cur = undoSnap(d);
  while (st.length && st[st.length-1].sn===cur) st.pop();
  if (!st.length){ syncUndo(); return; }
  const o = JSON.parse(st.pop().sn);
  if (d==='parts'){ const shut = new Set((P.groups||[]).filter(g=>g.closed).map(g=>g.id)); P.parts = o[0]; P.groups = o[1]; P.groups.forEach(g=>{ if (shut.has(g.id)) g.closed = true; }); }
  else { P.stock = o[0]; P.mats = o[1]; }
  undoTyping[d] = null; renderMats(); changed(); syncUndo();
}
// pred prvo spremembo v polju shrani stanje (zajem teče pred posodobitvijo podatkov); tipkanje v istem polju je en korak
document.addEventListener('input', e=>{ const t = e.target; if (!t.matches) return; for (const d in UNDO_INPUT) if (t.matches(UNDO_INPUT[d]) && undoTyping[d]!==t){ pushUndo(d); undoTyping[d] = t; } }, true);
document.addEventListener('focusout', e=>{ for (const d in undoTyping) if (undoTyping[d]===e.target) undoTyping[d] = null; });
// Ctrl/Cmd+Z: v 3D njegova zgodovina, v oknu Obdelava kosi, sicer del z zadnjo spremembo
document.addEventListener('keydown', e=>{
  if (!((e.metaKey||e.ctrlKey) && !e.shiftKey && e.key.toLowerCase()==='z')) return;
  const t = e.target; if (t.matches && t.matches('input,textarea')) return;
  e.preventDefault();
  if ($('#conDlg').open){ if (window.conUndo) window.conUndo(); return; }
  const a = UNDO.parts[UNDO.parts.length-1], b = UNDO.stock[UNDO.stock.length-1];
  if (a || b) undo(!b || (a && a.t >= b.t) ? 'parts' : 'stock');
});
document.addEventListener('click', e=>{ const b = e.target.closest('[data-undo]'); if (b && !b.disabled) undo(b.dataset.undo); });
const UNDO_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 13.5A7.5 7.5 0 1 0 13 6" fill="none" stroke="currentColor" stroke-width="2.6"/><path d="M13 1.5v9L7.5 6z" fill="currentColor"/></svg>';
const undoBtn = (d, tip) => `<button class="ghost2 opsundo cardundo" data-undo="${d}" data-tip="${tip}" aria-label="${tip}"${(UNDO[d]||[]).length?'':' disabled'}>${UNDO_SVG}</button>`;
document.querySelectorAll('.opsundo').forEach(u=>u.innerHTML = UNDO_SVG);
const COL_UP = '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 9L7 4.5 11.5 9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>', COL_DOWN = '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2.5 5L7 9.5 11.5 5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CHEV = '<svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
document.addEventListener('input', e=>{ if (!(e.target.dataset && e.target.dataset.gate!==undefined)) return; const row = e.target.closest('tr,.barrow'); if (!row) return; const on = !!e.target.value.trim(); row.querySelectorAll('.ng').forEach(x=>x.disabled = !on); });
function stockRow(s,i,lock){ const nn = !String(s.name||'').trim(); return `<tr>
    <td class="namecell">${lock ? `<input type="text" value="${esc(s.name)}" disabled class="tlock" data-tip="${L('Naziv je enak kot pri prvi plošči','Name matches the first sheet')}">` : `<input type="text" data-t="stock" data-i="${i}" data-k="name" data-gate value="${esc(s.name)}" placeholder="${L('Naziv','Name')}"><button class="pick" data-pick="${i}" title="Izberi ploščo" aria-label="Izberi ploščo">${CHEV}</button>`}</td>
    <td style="width:50px"><input type="number" data-t="stock" data-i="${i}" data-k="l" value="${esc(s.l)}"${nn?' disabled':''} class="ng"></td>
    <td style="width:50px"><input type="number" data-t="stock" data-i="${i}" data-k="w" value="${esc(s.w)}"${nn?' disabled':''} class="ng"></td>
    <td style="width:34px"><input type="number" data-t="stock" data-i="${i}" data-k="t" value="${esc(s.t??'')}" placeholder="–" min="0" step="0.5"${lock?` disabled class="tlock" data-tip="${L('Debelina je enaka kot pri prvi plošči','Thickness matches the first sheet')}"`:(nn?' disabled class="ng"':' class="ng"')}></td>
    <td style="width:48px"><input type="number" data-t="stock" data-i="${i}" data-k="price" value="${esc(s.price??'')}" placeholder="–" min="0" step="0.01"${nn?' disabled':''} class="ng"></td>
    <td style="width:24px"><button class="x" data-del="stock" data-i="${i}" data-tip="Odstrani">×</button></td></tr>`; }
/* skupine kosov: P.groups = [{id, name, m}], kos.g = id */
const grpName = p => { const g=(P.groups||[]).find(x=>x.id===p.g); return g ? g.name : ''; };
const actIn = m => { const g=(P.groups||[]).find(x=>x.id===actGrp); return g && (g.m||0)===m ? g : null; };
const grpsOf = m => (P.groups||[]).filter(g=>(g.m||0)===m);
function sortParts(){
  if (!P.groups) P.groups = [];
  const ids = new Set(P.groups.map(g=>g.id));
  P.parts.forEach(p=>{ if (p.g!=null && !ids.has(p.g)) delete p.g; });
  const ord = id => id==null ? -1 : P.groups.findIndex(g=>g.id===id);
  P.parts = P.parts.map((p,i)=>[p,i]).sort((a,b)=>ord(a[0].g)-ord(b[0].g) || a[1]-b[1]).map(x=>x[0]);
}
let dragI = null, actGrp = null, dragG = null;
document.addEventListener('mousedown', e=>{ const tr = e.target.closest && e.target.closest('tr.grow'); if (tr) tr.draggable = !e.target.closest('input,button'); });
document.addEventListener('mouseup', ()=>{ document.querySelectorAll('.ptable tr.grow').forEach(t=>t.draggable=true); });
/* klik drugam: skupina ni več izbrana (ostane odprta) */
document.addEventListener('click', e=>{
  if (actGrp==null) return;
  if (e.target.closest('tr.grow,[data-addpart],[data-paste],[data-pastego],.pastebox,[data-undo],dialog')) return;
  actGrp = null; document.querySelectorAll('.ptable tr.grow.act').forEach(t=>t.classList.remove('act')); syncAddBtn();
});
function dropTarget(e){
  if (dragI==null) return null;
  const tr = e.target.closest && e.target.closest('.ptable tr'); if (!tr) return null;
  const pm = tr.closest('.matpanel'); if (!pm || +pm.dataset.m !== (P.parts[dragI].m||0)) return null;
  return tr;
}
function clearDrop(){ document.querySelectorAll('.ptable .dropb,.ptable .dropa,.ptable .dropin').forEach(x=>x.classList.remove('dropb','dropa','dropin')); }
document.addEventListener('dragstart', e=>{
  const gr = e.target.closest && e.target.closest('tr.grow[data-gdrag]');
  if (gr && !e.target.closest('[data-drag]')){ dragG = +gr.dataset.gdrag; e.dataTransfer.effectAllowed='move'; try{ e.dataTransfer.setData('text/plain','g'+dragG); }catch(_){} setTimeout(()=>gr.classList.add('dragging'),0); return; }
  const h = e.target.closest && e.target.closest('[data-drag]'); if (!h) return;
  dragI = +h.dataset.drag; e.dataTransfer.effectAllowed='move'; try{ e.dataTransfer.setData('text/plain', String(dragI)); }catch(_){}
  const tr = h.closest('tr'); try{ e.dataTransfer.setDragImage(tr, 16, 16); }catch(_){}
  setTimeout(()=>tr.classList.add('dragging'),0);
});
function grpTarget(e){
  if (dragG==null) return null;
  const tr = e.target.closest && e.target.closest('.ptable tbody tr'); if (!tr) return null;
  const g = P.groups.find(x=>x.id===dragG), pm = tr.closest('.matpanel'); if (!g || !pm || +pm.dataset.m!==(g.m||0)) return null;
  let gid = tr.dataset.gid!==undefined ? +tr.dataset.gid : (tr.dataset.pi!==undefined ? P.parts[+tr.dataset.pi].g : undefined);
  if (gid==null || gid===dragG) return null;
  return pm.querySelector(`tr.grow[data-gid="${gid}"]`);
}
document.addEventListener('dragover', e=>{
  if (dragG!=null){ const t = grpTarget(e); if (!t) return; e.preventDefault(); clearDrop();
    const r=t.getBoundingClientRect(); t.classList.add(e.clientY < r.top+r.height/2 ? 'dropb' : 'dropa'); return; }
  const tr = dropTarget(e); if (!tr) return;
  e.preventDefault(); e.dataTransfer.dropEffect='move'; clearDrop();
  if (tr.dataset.pi!==undefined){ const r=tr.getBoundingClientRect(); tr.classList.add(e.clientY < r.top+r.height/2 ? 'dropb' : 'dropa'); }
  else tr.classList.add('dropin');
});
document.addEventListener('drop', e=>{
  if (dragG!=null){ const t = grpTarget(e); if (!t) return; e.preventDefault(); const after = t.classList.contains('dropa'), tid = +t.dataset.gid;
    pushUndo('parts'); const me = P.groups.find(x=>x.id===dragG), tg = P.groups.find(x=>x.id===tid);
    P.groups.splice(P.groups.indexOf(me),1); P.groups.splice(P.groups.indexOf(tg)+(after?1:0),0,me);
    dragG=null; clearDrop(); renderMats(); changed(); return; }
  const tr = dropTarget(e); if (!tr) return; e.preventDefault(); if (tr.dataset.pi!==undefined && +tr.dataset.pi===dragI){ dragI=null; clearDrop(); return; }
  const p = P.parts[dragI]; let g, at;
  pushUndo('parts');
  P.parts.splice(dragI,1);
  if (tr.dataset.pi!==undefined){
    const tp = P.parts.find((x,k)=>k===(+tr.dataset.pi > dragI ? +tr.dataset.pi-1 : +tr.dataset.pi));
    g = tp.g; at = P.parts.indexOf(tp) + (tr.classList.contains('dropa') ? 1 : 0);
  } else if (tr.dataset.gid!==undefined){
    g = +tr.dataset.gid; let last=-1; P.parts.forEach((x,k)=>{ if (x.g===g) last=k; }); at = last>=0 ? last+1 : P.parts.length;
  } else {
    g = undefined; const f = P.parts.findIndex(x=>(x.m||0)===(p.m||0)); at = f<0 ? P.parts.length : f;
  }
  if (g==null) delete p.g; else p.g = g;
  P.parts.splice(at,0,p);
  dragI = null; clearDrop(); renderMats(); changed();
});
document.addEventListener('dragend', ()=>{ dragI=null; dragG=null; clearDrop(); document.querySelectorAll('.ptable tr.dragging').forEach(x=>x.classList.remove('dragging')); });
function syncAddBtn(){ document.querySelectorAll('.matpanel').forEach(pm=>{ const m=+pm.dataset.m, b=pm.querySelector(`.pbody > .add [data-addpart="${m}"]`), g=actIn(m); if (b){ b.classList.toggle('ing',!!g); b.textContent = g ? `+ ${L('Kos','Part')} · ${cut(g.name||L('Skupina','Group'),16)}` : '+ Kos'; } }); }
function grpHead(g, rows){ const n = rows.reduce((a,[p])=>a+(Math.floor(+p.qty)||0),0); return `<tr class="grow${actGrp===g.id?' act':''}" data-gid="${esc(g.id)}" data-gsel="${esc(g.id)}" data-gdrag="${esc(g.id)}" draggable="true"><td colspan="6"><div class="gh"><input type="text" class="gname" data-gname="${esc(g.id)}" value="${esc(g.name)}" placeholder="${L('Ime skupine','Group name')}"><span class="lbl">${n} ${L(kosov(n),'pcs')}</span></div></td><td class="gx"><div class="ghx"><button class="x" data-delgrp="${esc(g.id)}" data-tip="${L('Odstrani skupino','Remove group')}">×</button></div></td></tr>`; }
function partsBody(m, pt){
  let h = pt.filter(([p])=>p.g==null).map(([p,i])=>partRow(p,i)).join('');
  for (const g of grpsOf(m)){
    const rows = pt.filter(([p])=>p.g===g.id);
    h += grpHead(g, rows);
    if (!g.closed) h += rows.map(([p,i])=>partRow(p,i,g.id)).join('');
  }
  return h;
}
function partRow(p,i,gid){ return `<tr data-pi="${i}"${gid!=null?' class="ing"':''}>
    <td style="width:22px"><span class="sw" draggable="true" data-drag="${i}" data-tip="${L('Povleci za premik','Drag to move')}">${i+1}</span></td>
    <td class="nm"><input type="text" data-t="parts" data-i="${i}" data-k="name" data-gate value="${esc(p.name)}" placeholder="${L('Naziv','Name')}"></td>
    <td style="width:46px"><input type="number" data-t="parts" data-i="${i}" data-k="l" value="${esc(p.l)}" placeholder="–"${String(p.name||'').trim()?'':' disabled'} class="ng"></td>
    <td style="width:46px"><input type="number" data-t="parts" data-i="${i}" data-k="w" value="${esc(p.w)}" placeholder="–"${String(p.name||'').trim()?'':' disabled'} class="ng"></td>
    <td style="width:30px"><input type="number" data-t="parts" data-i="${i}" data-k="qty" value="${esc(p.qty)}"></td>
    <td style="width:26px"><button class="rot ${p.rot?'on':''}" data-rot="${i}" data-tip="${p.rot?'Vrtenje dovoljeno':'Brez vrtenja'}" aria-label="${p.rot?'Kos se sme zasukati':'Smer vlaken zaklenjena'}" aria-pressed="${!!p.rot}"></button></td>
    <td style="width:22px"><button class="x" data-del="parts" data-i="${i}" data-tip="Odstrani">×</button></td></tr>`; }
function renderMats(){
  if (openPid!==db.cur){ openPid=db.cur; openParts=new Set(P.openParts||[]); }
  sortParts();
  const M = P.mats.length;
  let h = '';
  for (let m=0; m<M; m++){
    const st = P.stock.map((s,i)=>[s,i]).filter(([s])=>(s.m||0)===m);
    const pt = P.parts.map((p,i)=>[p,i]).filter(([p])=>(p.m||0)===m);
    const open = openParts.has(m) || !pt.length;
    const band = bandOf(m), ops = opsOn(m), opp = (P.mats[m].opPrice||{});
    h += `<aside class="matpanel" data-m="${m}">
      <div class="mhead"><span class="mname">Material ${nn2(m)}${M>1?`<span>${esc(matName(m))}</span>`:''}</span><span class="sp"></span><button class="x" data-delmat="${m}" data-tip="Odstrani" aria-label="Odstrani material">×</button></div>
      <div class="card pcard ${open?'':'collapsed'} ${pt.length||grpsOf(m).length?'':'noparts'}" data-m="${m}">
        <div class="head"><h2>Kosi (mm)</h2><span class="sp"></span>${pt.length?`<button class="tgl colbtn" ${open?`data-phide="${m}"`:`data-pedit="${m}"`} aria-expanded="${open}" data-tip="${open?L('Strni kose','Collapse parts'):L('Razširi kose','Expand parts')}" aria-label="${open?L('Strni kose','Collapse parts'):L('Razširi kose','Expand parts')}">${open?COL_UP:COL_DOWN}</button>`:''}${undoBtn('parts', L('Razveljavi zadnjo spremembo kosov','Undo last change to parts'))}</div>
        <div class="psum" data-pedit="${m}">${pt.filter(([p])=>+p.qty>0).map(([p,i])=>`<b class="sw" data-pi="${i}" title="${esc(p.name||'Kos '+(i+1))} × ${p.qty}">${i+1}</b>`).join('')}</div>
        <div class="add pedit">${pt.length ? `<button data-pedit="${m}">Uredi kose</button>` : `<button data-addpart="${m}">+ Kos</button>`}</div>
        <div class="pbody">
          <table class="ptable"><thead><tr><th></th><th>Naziv</th><th class="r">Dolž.</th><th class="r">Šir.</th><th class="r">Kol.</th><th title="Vrtenje – ali se kos sme zasukati">Vrt.</th><th></th></tr></thead>
          <tbody>${partsBody(m, pt)}</tbody></table>
          <div class="add"><button data-addpart="${m}" class="${actIn(m)?'ing':''}">${actIn(m)?`+ Kos · ${esc(cut(actIn(m).name||L('Skupina','Group'),16))}`:'+ Kos'}</button><button data-paste="${m}">Prilepi</button></div>
          <div class="pastebox" data-pastebox="${m}">
            <textarea placeholder="En kos na vrstico – iz Excela ali besedila:&#10;naziv ⇥ dolžina ⇥ širina ⇥ količina ⇥ robovi&#10;Stranica; 720; 560; 2; 1010"></textarea>
            <div class="add"><button data-pastego="${m}">Dodaj kose</button><button data-pastecancel="${m}">Prekliči</button></div>
          </div>
          <div class="add"><button class="ghost" data-addgrp="${m}">+ Skupina</button></div>
        </div>
      </div>
      <div class="card scard">
        <div class="head"><h2>${P.mats[m].kind==='bar'?'Letve (mm)':'Plošče (mm)'}</h2><span class="sp"></span>${undoBtn('stock', L('Razveljavi zadnjo spremembo plošč in materiala','Undo last change to sheets and material'))}</div>
        ${st.length ? `<table><thead><tr><th>Naziv</th><th class="r">Dolž.</th><th class="r">Šir.</th><th class="r">Deb.</th><th class="r">€</th><th></th></tr></thead>
        <tbody>${(st.forEach(([x],k)=>{ if (k>0){ x.t = st[0][0].t; x.name = st[0][0].name; } }), st.map(([s,i],k)=>stockRow(s,i,k>0)).join(''))}</tbody></table>` : ''}
        <div class="add"><button data-addstock="${m}">${P.mats[m].kind==='bar'?'+ Letev':'+ Plošča'}</button></div>
      </div>
    </aside>`;
  }
  $('#matsHost').innerHTML = h;
  P.openParts = [...openParts]; save();
  renderSteps();
  syncUndo();
}
const renderStock = renderMats, renderParts = renderMats;
document.addEventListener('input', e=>{ const d = e.target.dataset||{}; if (d.t!=='stock' || d.k!=='t') return;
  setTimeout(()=>{ const s0 = P.stock[+d.i]; if (!s0) return; const m = s0.m||0, rows = P.stock.filter(x=>(x.m||0)===m); if (rows[0]!==s0) return;
    rows.slice(1).forEach(x=>{ x.t = s0.t; const k = P.stock.indexOf(x), el = document.querySelector(`input[data-t="stock"][data-i="${k}"][data-k="t"]`); if (el) el.value = s0.t??''; }); save(); }, 0); });
document.addEventListener('input', e=>{ const d = e.target.dataset||{}; if (d.t!=='stock' || d.k!=='name') return;
  const s0 = P.stock[+d.i]; if (!s0) return; const m = s0.m||0, rows = P.stock.filter(x=>(x.m||0)===m); if (rows[0]!==s0) return;
  rows.slice(1).forEach(x=>{ x.name = s0.name; const tr = document.querySelector(`input[data-t="stock"][data-i="${P.stock.indexOf(x)}"][data-k="l"]`); const nm = tr && tr.closest('tr').querySelector('.namecell input'); if (nm) nm.value = s0.name; tr && tr.closest('tr').querySelectorAll('.ng').forEach(x=>x.disabled = !String(s0.name||'').trim()); }); });
function focusLastIn(m, cls){ const ins=document.querySelectorAll(`.matpanel[data-m="${m}"] ${cls} tbody tr:last-child input[type=text]`); if(ins[0]) ins[0].focus(); }
document.addEventListener('click', e=>{
  const b = e.target.closest('[data-gsel],[data-addgrp],[data-delgrp],[data-addstock],[data-addpart],[data-pedit],[data-phide],[data-paste],[data-pastego],[data-pastecancel],[data-delmat]');
  if (!b) return;
  const d = b.dataset;
  if (d.addstock!==undefined){ const m=+d.addstock, l=[...P.stock].reverse().find(s=>(s.m||0)===m), bar=isBarMat(m); pushUndo('stock'); P.stock.push(bar && !l ? {name:'', l:'', w:'', t:'', price:'', m} : {name:l?'':'Iveral', l:l?l.l:2790, w:l?l.w:2060, t:l?(l.t??18):18, price:l?(l.price??''):'', m}); renderMats(); changed(); focusLastIn(m,'.scard'); }
  else if (d.addpart!==undefined){ pushUndo('parts'); const m=+d.addpart, np={name:'', l:'', w:'', qty:1, rot:true, m}; const ag=actIn(m); if (ag){ np.g=ag.id; ag.closed=false; } openParts.add(m); P.parts.push(np); renderMats(); changed();
    const ni=P.parts.indexOf(np), inp=document.querySelector(`.ptable input[data-i="${ni}"][data-k="name"]`); if (inp) inp.focus(); }
  else if (d.gsel!==undefined){ const id=+d.gsel, g=P.groups.find(x=>x.id===id); if (!g) return;
    if (e.target.closest('input')){ if (actGrp!==id){ actGrp=id; g.closed=false; save(); renderMats(); const gi=document.querySelector(`[data-gname="${id}"]`); if (gi) gi.focus(); } return; }
    if (actGrp===id){ actGrp=null; g.closed=true; } else { actGrp=id; g.closed=false; }
    save(); renderMats(); }
  else if (d.addgrp!==undefined){ pushUndo('parts'); const m=+d.addgrp; if (!P.groups) P.groups=[]; const id=(P.groups.reduce((a,g)=>Math.max(a,g.id),0))+1;
    P.groups.push({id, name:L('Skupina','Group')+' '+(grpsOf(m).length+1), m}); actGrp=id; openParts.add(m); renderMats(); changed();
    const gi=document.querySelector(`[data-gname="${id}"]`); if (gi){ gi.focus(); gi.select(); } }
  else if (d.delgrp!==undefined){ const id=+d.delgrp, n=P.parts.filter(p=>p.g===id).length;
    const go=del=>{ pushUndo('parts'); if (actGrp===id) actGrp=null; if (del) P.parts=P.parts.filter(p=>p.g!==id); P.groups=P.groups.filter(g=>g.id!==id); renderMats(); changed(); };
    if (n) ask(L('Odstranim skupino?','Remove group?'), L(`Skupina ima ${n} ${kosov(n)}. Kosi bodo odstranjeni skupaj s skupino.`,`The group has ${n} parts. They will be removed together with the group.`), L('Odstrani','Remove')).then(ok=>{ if(ok) go(true); });
    else go(false); }
  else if (d.pedit!==undefined){ openParts.add(+d.pedit); renderMats(); }
  else if (d.phide!==undefined){ openParts.delete(+d.phide); renderMats(); }
  else if (d.paste!==undefined){ const box=document.querySelector(`[data-pastebox="${d.paste}"]`); box.classList.add('open'); box.querySelector('textarea').focus(); }
  else if (d.pastecancel!==undefined){ const box=document.querySelector(`[data-pastebox="${d.pastecancel}"]`); box.classList.remove('open'); box.querySelector('textarea').value=''; }
  else if (d.pastego!==undefined){
    pushUndo('parts'); const m=+d.pastego, box=document.querySelector(`[data-pastebox="${m}"]`);
    for (const ln of box.querySelector('textarea').value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean)){
      const sep = ln.includes('\t') ? '\t' : ln.includes(';') ? ';' : ',';
      const f = ln.split(sep).map(x=>x.trim());
      let name=''; if (isNaN(parseFloat(f[0]))) name=f.shift();
      const [l,w,q] = f.map(x=>parseFloat(String(x).replace(',','.')));
      const ef=(f[3]||'').replace(/\s/g,''); const ed=/^[01]{4}$/.test(ef)?ef.split('').map(Number):undefined;
      if (l>0 && w>0) P.parts.push(Object.assign({name, l, w, qty:q>0?Math.floor(q):1, rot:true, e:ed, m}, actIn(m)?{g:actIn(m).id}:{}));
    }
    openParts.add(m); renderMats(); changed();
  }
  else if (d.delmat!==undefined){
    const m=+d.delmat, n=P.parts.filter(p=>(p.m||0)===m).length;
    if (n){ ask('Odstranim material?', `Material ${nn2(m)} z vsemi ploščami in kosi (${n}) bo odstranjen.`, 'Odstrani').then(ok=>{ if(ok) delMat(m); }); return; }
    delMat(m); return;
  }
});
function delMat(m){
    undoReset();
    P.stock=P.stock.filter(s=>(s.m||0)!==m); P.parts=P.parts.filter(p=>(p.m||0)!==m);
    P.stock.forEach(s=>{ if(s.m>m) s.m--; }); P.parts.forEach(p=>{ if(p.m>m) p.m--; }); P.groups=(P.groups||[]).filter(g=>(g.m||0)!==m); P.groups.forEach(g=>{ if(g.m>m) g.m--; });
    P.mats.splice(m,1); openParts=new Set([...openParts].filter(x=>x!==m).map(x=>x>m?x-1:x));
    renderMats(); changed();
}
$('#addMat').onclick = ()=>{
  undoReset(); const m=P.mats.length; mstep = 'm'+m; P.mats.push({band:null});
  P.stock.push(m > 0 ? {name:'Iveral', l:2790, w:2060, t:18, price:'', m} : {name:'', l:'', w:'', t:'', price:'', m}); openParts.add(m);   // prva (nova) kosovnica: prazna, nedefinirana plošča pripravljena za vnos
  P.parts.push({name:'', l:'', w:'', qty:1, rot:true, m});
  renderMats(); changed();
  const t=document.querySelector(`.matpanel[data-m="${m}"]`); if (t){ t.scrollIntoView({behavior:'smooth', block:'center'}); const i=t.querySelector('.ptable tbody tr:last-child input[type=text]'); if(i) setTimeout(()=>i.focus(),300); }
};
function kosov(n){ const m=n%100; return m===1?'kos':m===2?'kosa':(m===3||m===4)?'kosi':'kosov'; }
function renderAll(){ migrate(P); openParts=new Set(); renderProjects(); renderSettings(); renderMats(); compute(); }

document.addEventListener('input', e=>{
  const el = e.target, t = el.dataset.t;
  if (t){
    const v = el.type==='number' ? (el.value===''?'':+el.value) : el.value;
    P[t][+el.dataset.i][el.dataset.k] = v;
    changed();
  } else if (el.dataset.bandm!==undefined){
    const b=bandOf(+el.dataset.bandm); if (b){ b[el.dataset.k] = el.type==='number' ? (el.value===''?'':+el.value) : el.value; changed(); }
  } else if (['kerf','trim','minOff'].includes(el.id)){
    P[el.id] = el.value===''?0:+el.value; changed();
  } else if (el.id==='projName'){
    P.name = el.value.trim(); save(); syncName();
  }
});
document.addEventListener('click', e=>{
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.del){ const t=b.dataset.del, i=+b.dataset.i; pushUndo(t==='parts' ? 'parts' : 'stock'); P[t].splice(i,1); renderMats(); changed(); }
  else if (b.dataset.rot!==undefined){ pushUndo('parts'); const p=P.parts[+b.dataset.rot]; p.rot=!p.rot; b.classList.toggle('on',p.rot); b.setAttribute('aria-pressed',p.rot); b.dataset.tip=p.rot?'Vrtenje dovoljeno':'Brez vrtenja'; showTip(b); changed(); }
});


/* počisti kosovnico: izbriše kose, plošče, materiale, skupine in 3D model trenutne kosovnice; nastavitve razreza ostanejo */
$('#clearProj').onclick = async ()=>{
  if (!await ask(L('Počistim kosovnico?','Clear the cut list?'), L(`Iz »${P.name||'Ime kosovnice…'}« bodo izbrisani vsi kosi, plošče, materiali, skupine in 3D model. Nastavitve razreza ostanejo. Tega ni mogoče razveljaviti.`,`All parts, sheets, materials, groups and the 3D model of “${P.name||'Untitled'}” will be deleted. Cutting settings stay. This cannot be undone.`), L('Počisti','Clear'))) return;
  const keep = {kerf:P.kerf, trim:P.trim, minOff:P.minOff, grain:P.grain};
  db.projects[db.cur] = P = Object.assign(blank(), keep);
  undoReset(); save(); renderAll();
  $('#addMat').onclick();   // nova (prazna) kosovnica: material 01 je takoj dodan in odprt, prva vrstica kosa ima fokus
};

let timer;
function changed(){ save(); clearTimeout(timer); timer=setTimeout(compute, 250); }

/* ---------- rezultati ---------- */
const m2 = a => dec((a/1e6).toFixed(2));
const pct = x => dec((x*100).toFixed(1));
const fmt = n => dec(Math.round(n*10)/10);
const eur = v => v.toLocaleString(EN()?'en-IE':'sl-SI',{style:'currency',currency:'EUR'});
const pname = pi => P.parts[pi].name || ('Kos '+(+pi+1));

let LAST = null;
function compute(){
  const t0 = performance.now();
  const r = optimize(P);
  LAST = r;
  renderResults(r, performance.now()-t0);
}

/* 5×7 pikčasta pisava */
const GLYPH = {
  '0':['01110','10001','10011','10101','11001','10001','01110'],
  '1':['00100','01100','00100','00100','00100','00100','01110'],
  '2':['01110','10001','00001','00010','00100','01000','11111'],
  '3':['11111','00010','00100','00010','00001','10001','01110'],
  '4':['00010','00110','01010','10010','11111','00010','00010'],
  '5':['11111','10000','11110','00001','00001','10001','01110'],
  '6':['00110','01000','10000','11110','10001','10001','01110'],
  '7':['11111','00001','00010','00100','01000','01000','01000'],
  '8':['01110','10001','10001','01110','10001','10001','01110'],
  '9':['01110','10001','10001','01111','00001','00010','01100'],
  ',':['0','0','0','0','0','1','1'],
};
// parts: [[text, color], ...]
function dotText(parts, cell=19){
  const cols=[]; // array of {bits:[7], color}
  parts.forEach(([txt,color],pi)=>{
    [...txt].forEach((ch,ci)=>{
      const g = GLYPH[ch]; if(!g) return;
      if (cols.length) cols.push(null);
      for (let x=0;x<g[0].length;x++) cols.push({color, bits:g.map(r=>r[x]==='1')});
    });
  });
  const W=cols.length*cell, H=7*cell, r=cell*0.33;
  let s=`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img">`;
  cols.forEach((c,x)=>{ for(let y=0;y<7;y++){
    const cx=x*cell+cell/2, cy=y*cell+cell/2;
    if (c && c.bits[y]) s+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c.color}"/>`;
    else s+=`<circle cx="${cx}" cy="${cy}" r="1.1" fill="#4A4A46"/>`;
  }});
  return s+'</svg>';
}

function renderResults(r, ms){
  const el = $('#results');
  if (!r){ el.innerHTML = '<div class="card empty">Dodaj ploščo in nekaj kosov – razrez se prikaže tukaj.</div>'; return; }
  const minOff = +P.minOff||0;
  let cutsN=0, cutLen=0; const offcuts=[];
  r.sheets.forEach((sh,si)=>{
    sh.seq = cutSeq(sh.root);
    cutsN += sh.seq.length; cutLen += sh.seq.reduce((s,c)=>s+c.len,0);
    sh.offs = isBarMat(sh.stock.m||0) ? sh.free.filter(F=>F.h >= sh.stock.W - 0.5 && F.w >= minOff).sort((a,b)=>b.w-a.w) : sh.free.filter(F=>Math.min(F.w,F.h)>=minOff).sort((a,b)=>b.w*b.h-a.w*a.h);
    sh.offs.forEach(F=>offcuts.push({si, w:F.w, h:F.h}));
  });
  const yieldR = r.partA/r.sheetA;
  const bandM = P.parts.reduce((t,p)=>t+bandMM(p),0)/1000, bandCost = P.parts.reduce((t,p)=>t+bandMM(p)/1000*(+(bandOf(p.m||0)||{}).price||0),0), opCost = opsCost(), total = r.cost + bandCost + opCost;
  const offA = offcuts.reduce((s,o)=>s+o.w*o.h,0);
  const [yi, yd] = (yieldR*100).toFixed(1).split('.');
  const filled = Math.round(yieldR*100), offDots = Math.min(100-filled, Math.round(offA/r.sheetA*100));

  const tb = `<div class="toolbar"><span class="lbl">${r.runs} razporeditev · ${ms.toFixed(0)} ms · rez ${fmt(r.k)} mm</span></div>`;

  let h = `<div class="summary"><div class="card hero">${tb}
    <div><div class="lbl" style="line-height:12px">Izkoristek – %</div>${dotText([[yi,'#F2F2EF'],[','+yd,'#77776F']])}</div>
    <div>
      <div class="legend lbl"><span><i class="f"></i>Kosi ${m2(r.partA)} m²</span><span><i class="a"></i>Ostanki ${m2(offA)} m²</span><span><i class="w"></i>Odpad ${m2(r.sheetA-r.partA-offA)} m²</span></div>
      <div class="matrix">${Array.from({length:100},(_,i)=>`<i class="${i<filled?'f':i<filled+offDots?'a':''}"></i>`).join('')}</div>
    </div>
  </div>
  <div class="stats">
    <div class="card stat y" data-jump="0" role="link" tabindex="0"><div class="lbl">Plošče · razporejeno ${r.placed}/${r.total}</div><b>${r.sheets.length}</b></div>
    <div class="card stat" data-tooffs role="link" tabindex="0"><div class="lbl">Ostanki m² · ${offcuts.length} ${kosov(offcuts.length)}</div><b>${m2(offA)}</b></div>
    <div class="card stat dim"><div class="lbl">Približna cena · EUR</div><b>${total>0?eur(total).replace(/\s?€/,''):'<span class="of" style="margin:0">–</span>'}</b></div>
  </div></div>`;

  if (r.unplaced.length){
    const g = group(r.unplaced.map(it=>it.pi));
    h += `<div class="warn"><div class="lbl">Ni razporejeno</div>${Object.entries(g).map(([pi,n])=>`${esc(pname(pi))} × ${n}`).join(', ')} – prevelik za plošče.</div>`;
  }

  // združi plošče po materialu, enake razporeditve skupaj
  const mats = new Map();
  r.sheets.forEach((sh,si)=>{
    sh.si = si;
    sh.sig = JSON.stringify(sh.parts.map(p=>[p.x,p.y,p.w,p.h,p.part.pi]));
    const key = (sh.stock.m||0)+'|'+sh.stock.name+'|'+sh.stock.L+'|'+sh.stock.W;
    if (!mats.has(key)) mats.set(key, {st:sh.stock, groups:[]});
    const m = mats.get(key), last = m.groups[m.groups.length-1];
    if (last && last.sig===sh.sig) last.list.push(sh); else m.groups.push({sig:sh.sig, list:[sh]});
  });
  const nn = i => sheetLab(i);
  const seqs = [];
  for (const {st, groups} of mats.values()){
    const all = groups.flatMap(g=>g.list);
    const pA = all.reduce((s,sh)=>s+sh.parts.reduce((t,p)=>t+p.w*p.h,0),0);
    const cnt = all.reduce((s,sh)=>s+sh.parts.length,0);
    h += `<article class="card mat">
      <div class="mat-head">
        <div><div class="lbl">Material ${String((st.m||0)+1).padStart(2,"0")}</div><h2>${esc(st.name)}</h2></div>
        <div class="mat-meta">
          ${mats.size>1?`<div><div class="lbl">${isBarMat(st.m||0)?'Letve':'Plošče'}</div><b class="mono">${all.length}</b></div>
          <div><div class="lbl">Kosi</div><b class="mono">${cnt}</b></div>
          <div><div class="lbl">Izkoristek</div><b class="mono">${pct(pA/(all.length*st.L*st.W))} %</b></div>
          ${st.price>0?`<div><div class="lbl">Cena</div><b class="mono">${eur(all.length*st.price)}</b></div>`:''}`:''}
        </div>
      </div>
      ${(groups.forEach(g=>g.list.forEach(x=>x.gid=g.list[0].si)),'')}<div class="mat-strip"${isBarMat(st.m||0)?' hidden':''}>${all.map(sh=>{ const u=sh.parts.reduce((t,p)=>t+p.w*p.h,0)/(st.L*st.W); return `<a href="#sheet-${sh.gid}" data-jump="${sh.gid}" title="${nn(sh.si)} · ${pct(u)} %"><span class="b"><i style="height:${Math.round(u*100)}%"></i></span><span class="lbl">${nn(sh.si)} · ${pct(u)} %</span></a>`; }).join('')}</div>`;
    if (isBarMat(st.m||0)){ h += barStripsHTML(st, groups, nn, seqs) + `</article>`; continue; }
    for (const grp of groups){
      const sh = grp.list[0], si = sh.si, rep = grp.list.length;
      const used = sh.parts.reduce((t,p)=>t+p.w*p.h,0)/(st.L*st.W);
      const g = group(sh.parts.map(p=>p.part.pi));
      const label = rep>1 ? `${nn(si)}–${nn(grp.list[rep-1].si)}` : nn(si);
      if (sh.seq.length) seqs.push({sh, si, rep, label, mat:st.name});
      h += `<section class="sheet" id="sheet-${si}">
        <div class="sheet-row">
          <div class="sheet-side">
            <div class="n">${label}</div>
            <div class="tags">${rep>1?`<span class="pill acc">× ${rep}</span>`:''}<span class="pill">${pct(used)} %</span></div>
            <div class="dim mono">${st.L} × ${st.W}${st.T?` × ${st.T}`:''} <span>mm</span></div>
            <div class="lbl">kosi ${sh.parts.length}${rep>1?' / ploščo':''} · rezi ${sh.seq.length}</div>
            <div class="plist">${Object.entries(g).map(([pi,n])=>`<span data-pi="${pi}"><b class="sw">${+pi+1}</b><em>${esc(pname(pi))}</em><span class="mono">× ${n*rep}</span></span>`).join('')}</div>
          </div>
          <div class="sh-svg">${sheetSVG(sh,si)}</div>
        </div>
      </section>`;
    }
    h += `</article>`;
  }

  h += `<div class="cols">`;
  offcuts.forEach(o=>{ o.key = `${o.si}:${Math.round(o.w)}x${Math.round(o.h)}`; });
  h += `<div class="card offcard"><div class="head"><h2>Ostanki</h2><span class="lbl">≥ ${minOff} mm</span></div>${offcuts.length?`<table class="off"><thead><tr><th>Plošča</th><th class="r">Mera</th><th class="r">Deb.</th><th class="r">m²</th></tr></thead><tbody>
    ${offcuts.map(o=>`<tr><td class="m">${sheetLab(o.si)}</td><td class="r m">${fmt(o.w)} × ${fmt(o.h)}</td><td class="r m">${r.sheets[o.si].stock.T||'–'}</td><td class="r m">${m2(o.w*o.h)}</td></tr>`).join('')}
    </tbody></table>`:'<p class="hint">Ni uporabnih ostankov.</p>'}</div>`;
  h += `<div class="card"><div class="head"><h2>Seznam kosov</h2></div><table class="off"><thead><tr><th></th><th>Kos</th><th class="r">Mera</th><th class="r">Deb.</th><th class="r">Kol.</th></tr></thead><tbody>
    ${P.parts.map((p,i)=>(+p.l>0&&+p.w>0&&+p.qty>0)?`<tr data-pi="${i}"><td style="width:30px"><span class="sw">${i+1}</span></td><td>${esc(p.name)}</td><td class="r m">${p.l} × ${p.w}</td><td class="r m">${matT(p.m||0)||'–'}</td><td class="r m">${p.qty}</td></tr>`:'').join('')}
    </tbody></table></div>`;
  h += `</div>`;
  if (seqs.length){
    h += `<details class="card seqcard"><summary><span class="t">Zaporedje rezov</span><span class="lbl">${L('ocena','est.')} ${fmtTime(cutTimeMin(r))} · ${cutsN} ${L('rezov','cuts')} · ${fmt(cutLen/1000)} m</span><span class="tog"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 1v10M1 6h10"/></svg></span></summary><div class="seqbody">
      ${seqs.map(({sh,si,rep,label,mat})=>`<div class="seqblk"><div class="seqh"><span class="n">${label}</span><span class="lbl">${esc(mat)}${rep>1?` · ponovi ${rep}×`:''} · rezi ${sh.seq.length}</span></div>
        <table class="seq"><thead><tr><th>#</th><th>Kos</th><th>Rez</th><th class="r">Prislon</th><th>Dobiš</th></tr></thead><tbody>
        ${sh.seq.map((c,ci)=>{ const f=c.first; const gives=f.part?`<b class="sw" style="margin-right:8px">${f.part.pi+1}</b>${esc(pname(f.part.pi))}`:`<span style="color:var(--mute)">trak ${fmt(f.w)} × ${fmt(f.h)}</span>`;
          return `<tr data-cut="${si}-${ci}"><td class="c m">${ci+1}</td><td class="m">${fmt(c.node.w)} × ${fmt(c.node.h)}</td><td>${c.d==='H'?'Vzdolžno':'Prečno'}</td><td class="r m"><b>${fmt(c.at)}</b></td><td>${gives}</td></tr>`;}).join('')}
        </tbody></table></div>`).join('')}
    </div></details>`;
  }

  el.innerHTML = h;
}

function group(arr){ const g={}; arr.forEach(x=>g[x]=(g[x]||0)+1); return g; }
/* palice: razrez kot trakovi */
function barStripsHTML(st, groups, nn, seqs){
  const maxL = Math.max(...groups.map(g=>g.list[0].stock.L)), W = 1000, sc = W / maxL, H = 44;
  const mono = 'font-family="IBM Plex Mono, ui-monospace, monospace"';
  const all = groups.flatMap(g=>g.list), g0 = group(all.flatMap(sh=>sh.parts.map(p=>p.part.pi)));
  let rows = '';
  for (const grp of groups){
    const sh = grp.list[0], si = sh.si, rep = grp.list.length, bw = sh.stock.L*sc;
    const label = rep>1 ? `${nn(si)}–${nn(grp.list[rep-1].si)}` : nn(si);
    if (sh.seq.length) seqs.push({sh, si, rep, label, mat:st.name});
    const pc = v => (v/maxL*100).toFixed(3) + '%';
    let svg = `<div class="bstrip" style="width:${pc(sh.stock.L)};aspect-ratio:${sh.stock.L}/${sh.stock.W}">`;
    sh.offs.forEach(F=>{ svg += `<span class="bo" style="left:${(F.x/sh.stock.L*100).toFixed(3)}%;width:${(F.w/sh.stock.L*100).toFixed(3)}%"><i>${fmt(F.w)}</i></span>`; });
    sh.parts.forEach(p=>{ const vert = Math.abs(p.w - p.part.l) > 0.5 && Math.abs(p.h - p.part.l) < 0.5, x = vert ? p.y : p.x, w = vert ? p.h : p.w, pi = p.part.pi;
      svg += `<span class="p" data-pi="${pi}" data-pk="${p.part.k??''}" style="left:${(x/sh.stock.L*100).toFixed(3)}%;width:${(w/sh.stock.L*100).toFixed(3)}%" title="${esc(pname(pi))} · ${fmt(p.part.l)} mm"><i>${fmt(p.part.l)}</i></span>`; });
    svg += `</div>`;
    rows += `<div class="barline" id="sheet-${si}"><div class="bn"><span class="n">${label}</span>${rep>1?`<span class="pill acc">× ${rep}</span>`:''}<span class="bm mono">${fmt(sh.stock.L)}</span></div><div class="bsvg">${svg}</div></div>`;
  }
  return `<section class="sheet barsec"><div class="sheet-row">
      <div class="sheet-side">
        <div class="dim mono">${fmt(st.L)} × ${fmt(st.W)}${st.T?` × ${st.T}`:''} <span>mm</span></div>
        <div class="lbl">${L('letev','bars')} ${all.length} · ${L('kosi','parts')} ${all.reduce((a,sh)=>a+sh.parts.length,0)}</div>
        <div class="plist">${Object.entries(g0).map(([pi,n])=>`<span data-pi="${pi}"><b class="sw">${+pi+1}</b><em>${esc(pname(pi))}</em><span class="mono">× ${n}</span></span>`).join('')}</div>
      </div>
      <div class="barrows">${rows}</div>
    </div></section>`;
}

/* tehnična risba plošče */
function sheetSVG(sh, si){
  const L=sh.stock.L, W=sh.stock.W, fs=36, pad=8;
  let s = `<svg viewBox="${-pad} ${-pad} ${L+2*pad} ${W+2*pad}" xmlns="http://www.w3.org/2000/svg">`;
  // plošča (odpad)
  s += `<rect x="0" y="0" width="${L}" height="${W}" fill="#E4E4E1" stroke="#161616" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
  // ostanki
  for (const F of sh.offs){
    s += `<rect x="${F.x}" y="${F.y}" width="${F.w}" height="${F.h}" fill="#FFF2A8" stroke="#B38F00" stroke-dasharray="6 5" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
    s += label(F.x,F.y,F.w,F.h,[[`${fmt(F.w)} × ${fmt(F.h)}`]],'#6E5700',true);
  }
  // kosi
  for (const p of sh.parts){
    const pi=p.part.pi, n=pi+1, nm=P.parts[pi].name||'', dims=`${fmt(p.part.l)} × ${fmt(p.part.w)}`;
    s += `<g class="p" data-pi="${pi}" data-pk="${p.part.k??''}"><rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}"/>`;
    { const e=edges(P.parts[pi]); if (e.some(Boolean)){ const rot = p.w!==p.part.l && p.part.l!==p.part.w, t=Math.min(12, p.w/8, p.h/8);
      const top=[p.x,p.y,p.w,t], bot=[p.x,p.y+p.h-t,p.w,t], lef=[p.x,p.y,t,p.h], rig=[p.x+p.w-t,p.y,t,p.h];
      const sides = rot ? [lef,rig,top,bot] : [top,bot,lef,rig];
      sides.forEach((c,k)=>{ if (e[k]) s += `<rect class="band" x="${c[0]}" y="${c[1]}" width="${c[2]}" height="${c[3]}"/>`; });
      } }
    s += opsDraw(opsAt(P.parts[pi], p.part.k), p.x, p.y, p.w!==p.part.l && p.part.l!==p.part.w, false);
    { // številka v krogu na sredini, pred mero
      const f = Math.min(46, p.h/2.4, (p.w*0.88)/(1.5+0.5+dims.length*0.56)), rot = f<16 && p.h>p.w;
      const W2 = rot ? p.h : p.w, H2 = rot ? p.w : p.h, f2 = rot ? Math.min(46, H2/2.4, (W2*0.88)/(1.5+0.5+dims.length*0.56)) : f;
      if (f2 >= 16){
        const r=f2*0.75, gap=f2*0.45, tw=dims.length*f2*0.56, tot=2*r+gap+tw, cx0=p.x+p.w/2, cy0=p.y+p.h/2;
        const tr = rot ? ` transform="rotate(-90 ${cx0} ${cy0})"` : '';
        const ccx = cx0 - tot/2 + r;
        s += `<g${tr}><circle cx="${ccx}" cy="${cy0}" r="${r}" stroke-width="1" vector-effect="non-scaling-stroke"/><text class="mono" x="${ccx}" y="${cy0}" font-size="${f2*0.8}" text-anchor="middle" dy=".36em">${n}</text>`;
        s += `<text x="${ccx+r+gap}" y="${cy0}" font-size="${f2}" font-weight="500" dominant-baseline="central">${esc(dims)}</text></g>`;
      } else {
        s += label(p.x,p.y,p.w,p.h,[[`${n} · ${dims}`],[String(n)]],null,false);
      }
    }
    s += `</g>`;
  }
  // rezi: ena črta na sredini reza namesto dveh robov kosov
  { const k = (LAST&&LAST.k)||0;
    sh.seq.forEach(c=>{ const n=c.node, m=c.pos+k/2;
      s += c.d==='H' ? `<line class="cl" x1="${n.x}" y1="${m}" x2="${n.x+n.w}" y2="${m}"/>` : `<line class="cl" x1="${m}" y1="${n.y}" x2="${m}" y2="${n.y+n.h}"/>`; });
    // pri obrezu robov še obris uporabne površine
    const R=sh.root; if (R.x>0) s += `<rect x="${R.x}" y="${R.y}" width="${R.w}" height="${R.h}" fill="none" class="cl"/>`;
  }
  // rezi (vidni ob prehodu čez zaporedje)
  sh.seq.forEach((c,ci)=>{
    const n=c.node;
    const [x1,y1,x2,y2] = c.d==='H' ? [n.x,c.pos,n.x+n.w,c.pos] : [c.pos,n.y,c.pos,n.y+n.h];
    s += `<line class="cut" data-cut="${si}-${ci}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
    s += `<text class="cutn mono" data-cut="${si}-${ci}" x="${(x1+x2)/2}" y="${(y1+y2)/2}" font-size="${fs*1.4}" text-anchor="middle" dy=".36em" stroke="#fff" stroke-width="10" paint-order="stroke">${ci+1}</text>`;
  });
  return s + `</svg>`;
}

// besedilo v pravokotnik; cands = seznam variant vrstic (prva, ki se prilega)
function label(x,y,w,h,cands,fill,mono){
  const fit = (W,H,ls)=>Math.min(48, H/(ls.length*1.35+0.2), W*0.88/(Math.max(...ls.map(t=>t.length))*(mono?0.62:0.56)));
  const mins = [20,17,14];
  for (let i=0;i<cands.length;i++){
    const ls=cands[i];
    for (const rot of [false,true]){
      const W=rot?h:w, H=rot?w:h, f=fit(W,H,ls);
      if (f>=mins[Math.min(i,2)]){
        const cx=x+w/2, cy=y+h/2, tr=rot?` transform="rotate(-90 ${cx} ${cy})"`:'';
        const fl = fill?` fill="${fill}"`:'', cl = mono?' class="mono"':'';
        if (ls.length===1) return `<text${cl} x="${cx}" y="${cy}" font-size="${f}" text-anchor="middle" dy=".36em" font-weight="500"${fl}${tr}>${esc(ls[0])}</text>`;
        return `<text x="${cx}" y="${cy}" font-size="${f}" text-anchor="middle"${fl}${tr}><tspan x="${cx}" dy="-0.15em" font-weight="500">${esc(ls[0])}</tspan><tspan class="d mono" x="${cx}" dy="1.35em" font-size="${f*0.78}">${esc(ls[1])}</tspan></text>`;
      }
    }
  }
  return '';
}

// poudarki ob prehodu z miško
document.addEventListener('mouseover', e=>{
  document.querySelectorAll('svg .hl, .hi').forEach(n=>n.classList.remove('hl','hi'));
  const tr = e.target.closest('tr[data-cut]');
  if (tr) document.querySelectorAll(`svg [data-cut="${tr.dataset.cut}"]`).forEach(n=>n.classList.add('hl'));
  const pe = e.target.closest('[data-pi]');
  if (pe){ document.querySelectorAll(`[data-pi="${pe.dataset.pi}"]`).forEach(n=>n.classList.add('hi'));
    const p = P.parts[+pe.dataset.pi]; if (p && p.g!=null && !document.querySelector(`.ptable tr[data-pi="${pe.dataset.pi}"]`)) document.querySelectorAll(`.ptable tr.grow[data-gid="${p.g}"]`).forEach(n=>n.classList.add('hi')); }
});
let openedForPrint=[];
window.addEventListener('beforeprint',()=>{ openedForPrint=[...document.querySelectorAll('details:not([open])')]; openedForPrint.forEach(d=>d.open=true); });
window.addEventListener('afterprint',()=>{ openedForPrint.forEach(d=>d.open=false); });

/* plavajoči gumbi: rezerviraj prostor v glavi */
$('#burger').onclick = e=>{ e.stopPropagation(); expMenu().classList.remove('open'); const o=!document.body.classList.contains('navopen'); document.body.classList.toggle('navopen',o); $('#burger').setAttribute('aria-expanded',o); };
document.addEventListener('click', e=>{ if (document.body.classList.contains('navopen') && !e.target.closest('.proj,#burger')){ document.body.classList.remove('navopen'); $('#burger').setAttribute('aria-expanded',false); } });
['#clearProj','#installBtn'].forEach(id=>$(id).addEventListener('click',()=>document.body.classList.remove('navopen')));
function fitFloat(){ const f=$('#floatbar'); if(f) document.documentElement.style.setProperty('--fbw', (f.offsetWidth+8)+'px');
  const c=$('#clearProj'), a=(c && c.offsetWidth) ? c : $('#floatbar'), x=$('#expBtn'); if (a && x && a.offsetWidth){ const w=x.getBoundingClientRect().right - a.getBoundingClientRect().left; document.documentElement.style.setProperty('--expw', Math.max(216,Math.round(w))+'px'); } else document.documentElement.style.removeProperty('--expw'); }
fitFloat(); window.addEventListener('resize', fitFloat); if (document.fonts) document.fonts.ready.then(fitFloat);

/* sendvič */

/* levi stolpec: lepljiv, a brez lastnega drsenja */
function fitLeft(){ const l=document.querySelector('.leftcol'); if(!l) return; const t=Math.min(24, innerHeight - l.offsetHeight - 24); document.documentElement.style.setProperty('--lt', t+'px'); }
window.addEventListener('resize', fitLeft); new ResizeObserver(fitLeft).observe(document.querySelector('.leftcol'));

/* potrditev */
function ask(title, text, yes='Izbriši', info=false){
  return new Promise(res=>{
    const d=$('#askDlg'); $('#askTitle').textContent=title; $('#askText').textContent=text||''; $('#askYes').textContent=yes; $('#askNo').hidden=!!info;
    const done=v=>{ d.close(); res(v); };
    $('#askYes').onclick=()=>done(true); $('#askNo').onclick=()=>done(false); d.oncancel=e=>{ e.preventDefault(); done(false); };
    d.showModal(); $('#askNo').focus();
  });
}

/* hitri opisi */
const tipEl = document.createElement('div'); tipEl.className='qtip'; document.body.appendChild(tipEl);
function showTip(el){
  const host = el.closest('dialog[open]') || document.body; if (tipEl.parentNode!==host) host.appendChild(tipEl);
  tipEl.textContent = el.dataset.tip; tipEl.classList.add('on');
  const r = el.getBoundingClientRect(), w = tipEl.offsetWidth;
  if (el.dataset.tipPos === 'left'){ tipEl.style.left = Math.max(8, r.left - w - 10) + 'px'; tipEl.style.top = (r.top + r.height/2 - tipEl.offsetHeight/2) + 'px'; return; }
  tipEl.style.left = Math.max(8, Math.min(innerWidth-w-8, r.left + r.width/2 - w/2)) + 'px';
  tipEl.style.top = (r.bottom + 8) + 'px';
}
document.addEventListener('mouseover', e=>{ const el=e.target.closest && e.target.closest('[data-tip]'); if (el) showTip(el); else tipEl.classList.remove('on'); });
document.addEventListener('scroll', ()=>tipEl.classList.remove('on'), true);


/* knjižnice s spleta (samo ob pošiljanju) */
const libs = {};
function loadLib(url, check, sri){
  if (check()) return Promise.resolve();
  if (!libs[url]) libs[url] = new Promise((res,rej)=>{ const sc=document.createElement('script'); sc.src=url; if (sri){ sc.integrity=sri; sc.crossOrigin='anonymous'; } sc.onload=()=>res(); sc.onerror=()=>{ delete libs[url]; rej(new Error('net')); }; document.head.appendChild(sc); });
  return libs[url];
}
const loadPDF = ()=>loadLib('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', ()=>window.jspdf, 'sha384-JcnsjUPPylna1s1fvi1u12X5qjY5OL56iySh75FdtrwhO/SWXgMjoVqcKyIIWOLk');
const loadZIP = ()=>loadLib('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js', ()=>window.JSZip, 'sha384-+mbV2IY1Zk/X1p/nWllGySJSUN8uMs+gUAN10Or95UBH0fpj6GfKgPmgC5EXieXG');

/* PDF: strani narišemo kot SVG (mm) in jih zapečemo v sliko – šumniki ostanejo pravilni */
const PDFCSS = `text{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;fill:#161616}.mono{font-family:"IBM Plex Mono",Menlo,monospace}.up{letter-spacing:.08em}[vector-effect=non-scaling-stroke]{stroke-width:2.2px}.cl{stroke-width:2.2px !important}
.p rect{fill:#fff;stroke:none}.cl{stroke:#161616;stroke-width:1;vector-effect:non-scaling-stroke}.p text{fill:#161616}.p .d{fill:#8C8C87}.p circle{fill:none;stroke:#161616}.p rect.band{fill:#E2E2DE;stroke:none}.p rect.ol{fill:none}.p rect.opg{fill:#DADAD5;stroke:#161616;stroke-width:1;vector-effect:non-scaling-stroke}.p circle.opd{fill:#161616;stroke:none}.p circle.oph{fill:#fff;stroke:#161616;stroke-width:1;vector-effect:non-scaling-stroke}.cut,.cutn{display:none}`;
const PX_W = 2480, PX_H = 3508; // 300 dpi
const pg = body => `<svg xmlns="http://www.w3.org/2000/svg" width="${PX_W}" height="${PX_H}" viewBox="0 0 210 297"><style>${PDFCSS}</style><rect width="210" height="297" fill="#fff"/>${body}</svg>`;
const tx = (x,y,str,o={}) => (str=tr(str), o.u&&(str=String(str).toUpperCase()), `<text${o.u?' class="mono up"':''} x="${x}" y="${y}" font-size="${o.s||3.2}"${o.w?` font-weight="${o.w}"`:''}${o.a?` text-anchor="${o.a}"`:''}${o.c?` style="fill:${o.c}"`:''}${o.m?' class="mono"':''}>${esc(str)}</text>`);
const cut = (str,n) => { str=String(str??''); return str.length>n ? str.slice(0,n-1)+'…' : str; };
/* pisava IBM Plex Mono vgrajena v strani PDF (latin + latin-ext za šumnike) */
let FONTCSS = '';
async function loadPdfFonts(){
  if (FONTCSS) return;
  try {
    const css = await (await fetch('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap')).text();
    const blocks = css.split('/*').filter(b=>/^\s*latin(-ext)? \*\//.test(b)).map(b=>'/*'+b);
    const out = [];
    for (const b of blocks){
      const m = b.match(/url\((https:[^)]+)\)/); if (!m) continue;
      const buf = await (await fetch(m[1])).arrayBuffer(); let bin=''; const u=new Uint8Array(buf); for (let i=0;i<u.length;i++) bin+=String.fromCharCode(u[i]);
      out.push(b.replace(m[1], 'data:font/woff2;base64,'+btoa(bin)).replace(/^\/\*[^*]*\*\//,''));
    }
    FONTCSS = out.join('\n');
  } catch(_){ FONTCSS = ''; }
}
function svgToJpeg(svg){
  return new Promise((res,rej)=>{
    const url = URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
    const img = new Image();
    img.onload = ()=>{ const c=document.createElement('canvas'); c.width=PX_W; c.height=PX_H; const g=c.getContext('2d'); g.fillStyle='#fff'; g.fillRect(0,0,PX_W,PX_H); g.drawImage(img,0,0,PX_W,PX_H); URL.revokeObjectURL(url); try { res(c.toDataURL('image/png')); } catch(e){ rej(e); } };
    img.onerror = e=>{ URL.revokeObjectURL(url); rej(e); };
    img.src = url;
  });
}
async function pagesToPDF(pages, tick, title){
  await loadPDF(); await loadPdfFonts();
  pages = pages.map(p=>p.replace('<style>', '<style>'+FONTCSS));
  const doc = new window.jspdf.jsPDF({unit:'mm', format:'a4', compress:true});
  doc.setProperties({title: title || P.name || L('Kosovnica','Cut list'), creator:'MISSION:CUTLIST'});
  for (let i=0;i<pages.length;i++){ if (i) doc.addPage(); doc.addImage(await svgToJpeg(pages[i]), 'PNG', 0, 0, 210, 297, undefined, 'FAST'); if (tick) await tick(i+1, pages.length); }
  return doc.output('arraybuffer');
}
function head(y, title, sub){ return tx(15,y,'MISSION:CUTLIST',{s:2.6,m:1,c:'#8C8C87'}) + tx(195,y,new Date().toLocaleDateString(EN()?'en-GB':'sl-SI'),{s:2.6,m:1,c:'#8C8C87',a:'end'}) + tx(15,y+11,title,{s:8,w:600}) + (sub?tx(15,y+18,sub,{s:3,m:1,c:'#5E5E5A'}):''); }
function table(x, y, cols, rows, rh=5.2){
  let o = cols.map(c=>tx(c.x, y, c.h, {s:2.2,u:1,c:'#8C8C87',a:c.a})).join('') + `<line x1="${x}" y1="${y+1.8}" x2="${cols[cols.length-1].end}" y2="${y+1.8}" stroke="#CFCFCA" stroke-width=".2"/>`;
  rows.forEach((r,i)=>{ const yy=y+1.8+rh*(i+1)-1.6; o += cols.map((c,k)=>tx(c.x, yy, r[k], {s:c.s||3, m:c.m, a:c.a, w:c.w})).join('') + `<line x1="${x}" y1="${yy+1.6}" x2="${cols[cols.length-1].end}" y2="${yy+1.6}" stroke="#E4E4E1" stroke-width=".2"/>`; });
  return o;
}
/* okvirni čas rezanja: nastavitev prislona in rokovanje na rez, pomik žage in menjava plošče */
function cutTimeMin(r){ let cuts=0, len=0; r.sheets.forEach(sh=>{ const q=sh.seq||cutSeq(sh.root); cuts+=q.length; len+=q.reduce((t,c)=>t+c.len,0); }); return cuts*40/60 + (len/1000)/6 + r.sheets.length*3; }
function fmtTime(min){ min=Math.max(5, Math.round(min/5)*5); if (min<100) return `${min} min`; const h=Math.floor(min/60), m=min%60; return m ? `${h} h ${m} min` : `${h} h`; }

/* PDF poročilo: samo podatki od materiala navzdol (brez kartic in povzetka) */
function buildReportPages(r){
  const pages = [], date = new Date().toLocaleDateString(EN()?'en-GB':'sl-SI'), proj = P.name || L('Kosovnica','Cut list');
  let body = '', y = 0;
  const top = () => tx(15,12,'MISSION:CUTLIST',{s:2.6,u:1,c:'#161616'}) + tx(195,12,`${proj} · ${date}`,{s:2.4,u:1,c:'#8C8C87',a:'end'}) + `<line x1="15" y1="15" x2="195" y2="15" stroke="#161616" stroke-width=".25"/>`;
  const newPage = () => { if (body) pages.push(pg(body)); body = top(); y = 26; };
  const need = h => { if (y + h > 284) newPage(); };
  const section = title => { need(24); body += tx(15, y+6, title, {s:5.2, w:600}); y += 14; };
  const flowTable = (cols, rows, rh=5.2) => {
    let i = 0;
    while (i < rows.length){
      need(rh*2 + 4);
      const fit = Math.max(1, Math.floor((284 - y - 2) / rh) - 1), chunk = rows.slice(i, i+fit);
      body += table(15, y, cols, chunk, rh); y += 1.8 + rh*(chunk.length) + 6; i += chunk.length;
    }
  };
  newPage();

  // plošče po materialih
  r.sheets.forEach((sh, si) => {
    const st = sh.stock, used = sh.parts.reduce((t,p)=>t+p.w*p.h,0)/(st.L*st.W);
    if (si) newPage();
    const m = (st.m||0);
    body += tx(15, y, `${L('Material','Material')} ${String(m+1).padStart(2,'0')} · ${st.name}`, {s:2.4, u:1, c:'#8C8C87'});
    body += tx(15, y+12, sheetLab(si), {s:11, w:600});
    body += tx(15, y+19, `${st.L} × ${st.W}${st.T?' × '+st.T:''} mm  ·  ${L('izkoristek','yield')} ${pct(used)} %  ·  ${L('kosi','parts')} ${sh.parts.length}  ·  ${L('rezi','cuts')} ${(sh.seq||cutSeq(sh.root)).length}`, {s:2.4, u:1, c:'#5E5E5A'});
    y += 26;
    const dw = 180, dh = Math.min(150, dw*(st.W+16)/(st.L+16)), dws = dh*(st.L+16)/(st.W+16);
    body += sheetSVG(sh, si).replace('<svg ', `<svg x="15" y="${y}" width="${dws}" height="${dh}" preserveAspectRatio="xMinYMin meet" `);
    y += dh + 8;
    const g = {}; sh.parts.forEach(p=>{ g[p.part.pi] = (g[p.part.pi]||0) + 1; });
    const rows = Object.entries(g).map(([pi,n]) => [String(+pi+1), cut(P.parts[pi].name||L('Kos','Part')+' '+(+pi+1), 34), `${P.parts[pi].l} × ${P.parts[pi].w}`, `× ${n}`]);
    flowTable([{x:15,h:'#',m:1},{x:24,h:L('KOS','PART')},{x:130,h:L('MERA (MM)','SIZE (MM)'),a:'end',m:1},{x:150,h:L('KOL.','QTY'),a:'end',m:1,end:195}], rows);
  });

  // ostanki
  newPage();
  const m0 = +P.minOff||0, offs = [];
  r.sheets.forEach((sh,si)=> sh.free.filter(F=>Math.min(F.w,F.h)>=m0).forEach(F=>offs.push([sheetLab(si), `${fmt(F.w)} × ${fmt(F.h)}`, String(sh.stock.T||'–'), m2(F.w*F.h)])));
  section(`${L('Ostanki','Offcuts')} ≥ ${m0} mm`);
  if (offs.length) flowTable([{x:15,h:L('PLOŠČA','SHEET'),m:1},{x:80,h:L('MERA (MM)','SIZE (MM)'),a:'end',m:1},{x:100,h:L('DEB.','THK.'),a:'end',m:1},{x:125,h:'M²',a:'end',m:1,end:195}], offs);
  else { body += tx(15, y, L('Ni uporabnih ostankov.','No usable offcuts.'), {s:3, c:'#8C8C87'}); y += 10; }

  // seznam kosov
  y += 4; section(L('Seznam kosov','Parts list'));
  const anyOps = P.mats.some(mt=>mt.ops), anyBand = P.mats.some(mt=>mt.band);
  const pcols = [{x:15,h:'#',m:1},{x:24,h:L('KOS','PART')},{x:96,h:L('MERA (MM)','SIZE (MM)'),a:'end',m:1},{x:108,h:L('DEB.','THK.'),a:'end',m:1},{x:120,h:L('KOL.','QTY'),a:'end',m:1}];
  if (anyBand) pcols.push({x:126,h:L('ROB','EDGE'),m:1});
  if (anyOps) pcols.push({x:anyBand?142:126,h:L('OBD.','OPS'),m:1,s:2.6});
  pcols.push({x:178,h:'MATERIAL',m:1}); pcols[pcols.length-1].end = 195;
  const prow = P.parts.map((p,i)=>[p,i]).filter(([p])=>+p.l>0&&+p.w>0&&+p.qty>0).map(([p,i])=>{
    const r2 = [String(i+1), cut(p.name||L('Kos','Part')+' '+(i+1), 26), `${p.l} × ${p.w}`, String(matT(p.m||0)||'–'), String(p.qty)];
    if (anyBand) r2.push(edgeCode(p)); if (anyOps) r2.push(cut(opsCode(p), 18)); r2.push(cut(matName(p.m||0), 10)); return r2; });
  flowTable(pcols, prow);

  // zaporedje rezov
  newPage(); section(L('Zaporedje rezov','Cut sequence'));
  { let cn=0, cl=0; r.sheets.forEach(sh=>{ const q=sh.seq||cutSeq(sh.root); cn+=q.length; cl+=q.reduce((t,c)=>t+c.len,0); });
    body += tx(15, y-4, `${L('ocena','est.')} ${fmtTime(cutTimeMin(r))} · ${cn} ${L('rezov','cuts')} · ${fmt(cl/1000)} m`, {s:2.4, u:1, c:'#5E5E5A'}); y += 6; }
  const ccols = [{x:15,h:'#',m:1},{x:25,h:L('KOS (MM)','PIECE (MM)'),m:1},{x:65,h:L('REZ','CUT')},{x:110,h:L('PRISLON','FENCE'),a:'end',m:1,w:600},{x:118,h:L('DOBIŠ','GIVES'),end:195}];
  r.sheets.forEach((sh,si)=>{
    const seq = (sh.seq||cutSeq(sh.root)); if (!seq.length) return;
    need(20); body += tx(15, y+2, `${sheetLab(si)} · ${sh.stock.name}`, {s:3.4, w:600}); y += 8;
    flowTable(ccols, seq.map((c,ci)=>{ const f=c.first; return [String(ci+1), `${fmt(c.node.w)} × ${fmt(c.node.h)}`, c.d==='H'?L('vzdolžno','rip'):L('prečno','cross'), fmt(c.at), f.part ? cut(((f.part.pi+1)+' '+(P.parts[f.part.pi].name||'')).trim(), 30) : L('trak','strip')+` ${fmt(f.w)} × ${fmt(f.h)}`]; }));
    y += 2;
  });
  if (body) pages.push(pg(body));
  return pages;
}
async function exportReportPDF(r){
  try { const bytes = await pagesToPDF(buildReportPages(r)); download(bytes, fname('pdf'), 'application/pdf'); }
  catch(e){ alert(L('Za izvoz PDF je potrebna internetna povezava.','PDF export needs an internet connection.')); }
}


/* urejevalnik obdelav */
document.addEventListener('focusout', e=>{ if (e.target.dataset && e.target.dataset.gname!==undefined) changed(); });

/* prenesi vse: en ZIP z vsemi datotekami */
let busyT;
function busy(txt, frac){ const b=$('#busy'); clearTimeout(busyT); b.classList.add('on'); $('#busyTxt').textContent=txt; if (frac!=null) $('#busyBar').style.width=Math.round(frac*100)+'%'; }
function busyDone(txt, ms=2500){ busy(txt, 1); busyT=setTimeout(()=>$('#busy').classList.remove('on'), ms); }
/* Prenesi vse (ZIP): PDF razrez, Excel, CSV in DXF. .obj NIKOLI ni v ZIP-u: ima svoj gumb v 3D konstruiranju.
   Če katera datoteka odpove, ZIP ni ustvarjen in sporočilo pove katera. */
async function downloadAll(){
  if (!LAST){ alert('Najprej dodaj ploščo in kose.'); return; }
  const r = LAST, frame = ()=>new Promise(res=>requestAnimationFrame(()=>setTimeout(res,0)));
  let cur = 'ZIP', files = [];   // cur = datoteka, ki se trenutno pripravlja (za jasno sporočilo o napaki)
  try {
    busy(L('Nalagam orodja …','Loading tools …'), 0); await frame();
    cur = 'ZIP'; await loadZIP(); cur = 'PDF'; await loadPDF();
    const base = fname('x').slice(0,-2);
    const lay = buildReportPages(r);
    const total = lay.length + 3; let done = 0;
    const step = async t => { done++; busy(t, Math.min(1, done/total)); await frame(); };
    const add = (name, data) => {
      const n = data && (data.length!=null ? data.length : data.byteLength!=null ? data.byteLength : data.size);
      if (!(n > 0)) throw new Error('empty');
      files.push({name, data});
    };
    cur = `${base} – ${L('razrez','layout')}.pdf`;
    add(cur, await pagesToPDF(lay, async (i,n)=>step(L(`Razrez – stran ${i} od ${n}`,`Layout – page ${i} of ${n}`))));
    cur = `${base}.xlsx`; add(cur, await buildXLSX(r, true)); await step('Excel');
    cur = `${base}.csv`; add(cur, toCSV(rowsParts())); await step('CSV');
    cur = `${base}.dxf`; add(cur, buildDXF(r));
    await step('DXF');
    cur = 'ZIP'; busy(L('Pakiram ZIP …','Packing ZIP …')); await frame();
    const zip = new window.JSZip(); files.forEach(f=>zip.file(f.name, f.data));
    const blob = await zip.generateAsync({type:'blob', compression:'DEFLATE'});
    download(blob, fname('zip'), 'application/zip');
    busyDone(`${fname('zip')} · ${files.length} ${L('datotek','files')} · ${dec((blob.size/1048576).toFixed(1))} MB`);
  } catch(e){
    const net = e && e.message==='net';
    busyDone(net ? L(`Za pripravo ZIP-a je potrebna internetna povezava (${cur}). ZIP ni ustvarjen.`,`Preparing the ZIP needs an internet connection (${cur}). No ZIP was created.`)
                 : L(`Datoteke ni bilo mogoče pripraviti: ${cur}. ZIP ni ustvarjen.`,`This file could not be prepared: ${cur}. No ZIP was created.`), 6000);
  } finally { files = []; }
}

/* deli povezavo: kosovnica stisnjena v povezavi (brez strežnika) */
const b64u = bytes => { let bin=''; for (let i=0;i<bytes.length;i++) bin+=String.fromCharCode(bytes[i]); return btoa(bin).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); };
const unb64u = str => { str=str.replace(/-/g,'+').replace(/_/g,'/'); while (str.length%4) str+='='; const bin=atob(str), u=new Uint8Array(bin.length); for (let i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i); return u; };
async function packProject(p){
  const data = new TextEncoder().encode(JSON.stringify({v:1, p}));
  if (window.CompressionStream){ const cs = new Blob([data]).stream().pipeThrough(new CompressionStream('deflate-raw')); return 'z'+b64u(new Uint8Array(await new Response(cs).arrayBuffer())); }
  return 'j'+b64u(data);
}
/* nezaupanje do tujih podatkov: ključ __proto__ se zavrže, razpakirana velikost je omejena (zaščita pred »bombo«) */
const noProto = (k,v) => k==='__proto__' ? undefined : v;
const SHARE_MAX = 8*1024*1024;
async function unpackProject(code){
  if (code.length > 4*1024*1024) throw new Error('big');
  let bytes = unb64u(code.slice(1));
  if (code[0]==='z'){
    const rd = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw')).getReader(), parts = []; let n = 0;
    for (;;){ const {done, value} = await rd.read(); if (done) break; n += value.length; if (n > SHARE_MAX){ try { await rd.cancel(); } catch(_){} throw new Error('big'); } parts.push(value); }
    bytes = new Uint8Array(n); let at = 0; parts.forEach(u=>{ bytes.set(u, at); at += u.length; });
  } else if (bytes.length > SHARE_MAX) throw new Error('big');
  const o = JSON.parse(new TextDecoder().decode(bytes), noProto); return o.p || o;
}
async function shareLink(){
  try {
    const code = await packProject(P), url = location.href.split('#')[0] + '#k=' + code;
    let copied = false; try { await navigator.clipboard.writeText(url); copied = true; } catch(_){}
    if (location.protocol === 'file:'){
      ask(L('Povezava je pripravljena','Link is ready'), L('Aplikacija je odprta kot datoteka na tem računalniku, zato bo povezava delovala šele, ko bo aplikacija objavljena na spletnem naslovu.','The app is open as a file on this computer, so the link will only work once the app is published at a web address.') + (copied ? L(' Povezava je kopirana.',' The link is copied.') : ''), L('V redu','OK'), true);
    } else if (copied) busyDone(L(`Povezava kopirana · ${url.length} znakov`,`Link copied · ${url.length} characters`));
    else prompt(L('Kopiraj povezavo:','Copy the link:'), url);
  } catch(e){ alert(L('Povezave ni bilo mogoče pripraviti.','The link could not be created.')); }
}
async function openFromLink(){
  const h = location.hash; if (!h.startsWith('#k=')) return;
  try {
    const p = await unpackProject(h.slice(3));
    if (!p || !Array.isArray(p.parts) || !Array.isArray(p.stock)) throw 0;
    const ok = await ask(L('Odprem deljeno kosovnico?','Open shared cut list?'), L(`»${p.name||'Ime kosovnice…'}« · ${p.parts.length} vrst kosov. Zamenja trenutno odprto kosovnico »${P.name||'Ime kosovnice…'}«, ki bo izbrisana.`,`“${p.name||'Untitled'}” · ${p.parts.length} part rows. It replaces the open cut list “${P.name||'Untitled'}”, which will be deleted.`), L('Zamenjaj','Replace'));
    history.replaceState(null, '', location.href.split('#')[0]);
    if (!ok) return;
    db.projects[db.cur] = P = migrate(Object.assign(blank(), p)); undoReset(); save(); renderAll();
  } catch(_){ history.replaceState(null, '', location.href.split('#')[0]); alert(L('Povezava ni veljavna ali je poškodovana.','The link is invalid or damaged.')); }
}

/* izvoz */
const fname = ext => ((P.name||L('kosovnica','cutlist')).replace(/[\\/:*?"<>|]+/g,'').trim()||L('kosovnica','cutlist')) + '.' + ext;
function download(data, name, type){
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([data],{type})); a.download=name;
  document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();}, 500);
}
const num = n => String(Math.round(n*10)/10).replace('.',',');
function rowsParts(){
  const out=[];
  P.parts.forEach((p,i)=>{ if(+p.l>0&&+p.w>0&&+p.qty>0) out.push({'Št.':i+1,'Material':matName(p.m||0),'Skupina':grpName(p),'Naziv':p.name||'','Dolžina (mm)':+p.l,'Širina (mm)':+p.w,'Debelina (mm)':matT(p.m||0),'Količina':+p.qty,'Vrtenje':(P.grain==='off'||p.rot)?'da':'ne','Robni trak':edgeCode(p),'Opombe':p.note||'','Obdelave':opsCode(p),'Trak (m)':+(bandMM(p)/1000).toFixed(2),'Površina (m²)':+(p.l*p.w*p.qty/1e6).toFixed(3)}); });
  return out;
}
function rowsSheets(r){ return r.sheets.map((sh,i)=>({'Plošča':sheetLab(i),'Material':sh.stock.name,'Dolžina (mm)':sh.stock.L,'Širina (mm)':sh.stock.W,'Debelina (mm)':sh.stock.T||'','Kosi':sh.parts.length,'Rezi':(sh.seq||cutSeq(sh.root)).length,'Izkoristek (%)':+(sh.parts.reduce((t,p)=>t+p.w*p.h,0)/(sh.stock.L*sh.stock.W)*100).toFixed(1),'Cena (€)':sh.stock.price||''})); }
function rowsLayout(r){ const out=[]; r.sheets.forEach((sh,i)=>sh.parts.forEach(p=>out.push({'Plošča':sheetLab(i),'Št. kosa':p.part.pi+1,'Naziv':P.parts[p.part.pi].name||'','X (mm)':+p.x.toFixed(1),'Y (mm)':+p.y.toFixed(1),'Dolžina (mm)':p.part.l,'Širina (mm)':p.part.w,'Zasukan':p.w!==p.part.l?'da':'ne'}))); return out; }
function rowsCuts(r){ const out=[]; r.sheets.forEach((sh,i)=>(sh.seq||cutSeq(sh.root)).forEach((c,ci)=>{ const f=c.first; out.push({'Plošča':sheetLab(i),'#':ci+1,'Kos (mm)':num(c.node.w)+' × '+num(c.node.h),'Rez':c.d==='H'?'vzdolžno':'prečno','Prislon (mm)':+c.at.toFixed(1),'Dobiš':f.part?((f.part.pi+1)+' '+(P.parts[f.part.pi].name||'')).trim():'trak '+num(f.w)+' × '+num(f.h)}); })); return out; }
function rowsOff(r){ const m=+P.minOff||0, out=[]; r.sheets.forEach((sh,i)=>sh.free.filter(F=>Math.min(F.w,F.h)>=m).forEach(F=>out.push({'Plošča':sheetLab(i),'Dolžina (mm)':+F.w.toFixed(1),'Širina (mm)':+F.h.toFixed(1),'Debelina (mm)':sh.stock.T||'','Površina (m²)':+(F.w*F.h/1e6).toFixed(3)}))); return out; }

function trRows(rows){ if (!EN()) return rows; return rows.map(r=>{ const o={}; for (const k in r){ let v=r[k]; if (v==='da') v='yes'; else if (v==='ne') v='no'; else if (typeof v==='string') v=tr(v); o[tr(k)]=v; } return o; }); }
function toCSV(rows){ rows = trRows(rows);
  if (!rows.length) return '';
  const cols=Object.keys(rows[0]);
  const cell=v=>{ let t=typeof v==='number'?String(v).replace('.',','):String(v??''); return /[;"\n]/.test(t)?'"'+t.replace(/"/g,'""')+'"':t; };
  return '﻿'+[cols.join(';')].concat(rows.map(r=>cols.map(c=>cell(r[c])).join(';'))).join('\r\n');
}
function loadXLSX(){
  if (window.XLSX) return Promise.resolve(window.XLSX);
  return new Promise((res,rej)=>{ const sc=document.createElement('script'); sc.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'; sc.integrity='sha384-vtjasyidUo0kW94K5MXDXntzOJpQgBKXmE7e2Ga4LG0skTTLeBi97eFAXsqewJjw'; sc.crossOrigin='anonymous'; sc.onload=()=>res(window.XLSX); sc.onerror=()=>rej(); document.head.appendChild(sc); });
}
async function buildXLSX(r, silent){
  let X; try { X = await loadXLSX(); } catch(_){ if (silent) throw new Error('net'); alert('Za izvoz v Excel je potrebna internetna povezava. Uporabi CSV.'); return null; }
  const wb=X.utils.book_new();
  const add=(rows,name,w)=>{ rows=trRows(rows); name=tr(name); const ws=X.utils.json_to_sheet(rows.length?rows:[{'':'–'}]); if(w) ws['!cols']=w.map(x=>({wch:x})); X.utils.book_append_sheet(wb,ws,name); };
  const yieldR=r.partA/r.sheetA;
  add([{'Kosovnica':P.name||'Brez imena','Datum':new Date().toLocaleDateString(EN()?'en-GB':'sl-SI'),'Plošče':r.sheets.length,'Kosi':r.placed+'/'+r.total,'Izkoristek (%)':+(yieldR*100).toFixed(1),'Rez (mm)':+P.kerf||0,'Obrez (mm)':+P.trim||0,'Robni trak (m)':+(P.parts.reduce((t,p)=>t+bandMM(p),0)/1000).toFixed(2),'Cena plošč (€)':r.cost||'','Cena traku (€)':+(P.parts.reduce((t,p)=>t+bandMM(p)/1000*(+(bandOf(p.m||0)||{}).price||0),0)).toFixed(2)||''}],'Povzetek',[24,12,8,8,14,10,10,14,14,14]);
  add(rowsParts(),'Kosovnica',[6,20,28,14,14,10,9,12,20,10,14]);
  add(rowsSheets(r),'Plošče',[8,24,14,14,8,8,14,10]);
  add(rowsLayout(r),'Razrez',[8,10,28,10,10,14,14,9]);
  add(rowsCuts(r),'Zaporedje rezov',[8,5,18,10,14,28]);
  add(rowsOff(r),'Ostanki',[8,14,14,14]);
  return X.write(wb, {type:'array', bookType:'xlsx'});
}
async function exportXLSX(r){ const b = await buildXLSX(r); if (b) download(b, fname('xlsx'), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); }
function buildDXF(r){
  const out=[], gap=300;
  const g=(c,v)=>{ out.push(c); out.push(v); };
  g(0,'SECTION'); g(2,'HEADER'); g(9,'$INSUNITS'); g(70,4); g(0,'ENDSEC');
  g(0,'SECTION'); g(2,'TABLES'); g(0,'TABLE'); g(2,'LAYER'); g(70,7);   // število slojev (IZREZI je bil uporabljen, a ni bil naveden)
  [['PLOSCA',8],['KOSI',7],['OSTANKI',2],['TEKST',3],['UTORI',5],['LUKNJE',1],['IZREZI',6]].forEach(([n,c])=>{ g(0,'LAYER'); g(2,n); g(70,0); g(62,c); g(6,'CONTINUOUS'); });
  g(0,'ENDTAB'); g(0,'ENDSEC');
  g(0,'SECTION'); g(2,'ENTITIES');
  const rect=(x,y,w,h,layer)=>{ const pts=[[x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]]; for(let i=0;i<4;i++){ g(0,'LINE'); g(8,layer); g(10,pts[i][0].toFixed(2)); g(20,pts[i][1].toFixed(2)); g(30,0); g(11,pts[i+1][0].toFixed(2)); g(21,pts[i+1][1].toFixed(2)); g(31,0); } };
  const MAP={'č':'c','š':'s','ž':'z','Č':'C','Š':'S','Ž':'Z','×':'x','ć':'c','đ':'d'};
  const text=(x,y,h,t)=>{ g(0,'TEXT'); g(8,'TEKST'); g(10,x.toFixed(2)); g(20,y.toFixed(2)); g(30,0); g(40,h.toFixed(1)); g(1,t.replace(/[^\x20-\x7E]/g,c=>MAP[c]||'?')); };
  let ox=0; const m=+P.minOff||0;
  r.sheets.forEach((sh,i)=>{
    const L=sh.stock.L, W=sh.stock.W, Y=v=>W-v;
    rect(ox,0,L,W,'PLOSCA');
    text(ox, W+40, 40, sheetLab(i)+' '+sh.stock.name+' '+L+'x'+W);
    sh.parts.forEach(p=>{ const pr=opsAt(P.parts[p.part.pi], p.part.k), tr2 = p.w!==p.part.l && p.part.l!==p.part.w, M2=(x,y)=> tr2 ? [p.x+y, p.y+x] : [p.x+x, p.y+y];
      for (const o of partOps(pr)){
        if (o.t==='krog'){ const gg=opCut(pr,o), cc=M2(gg[0]+gg[2]/2, gg[1]+gg[3]/2); g(0,'CIRCLE'); g(8,'IZREZI'); g(10,(ox+cc[0]).toFixed(2)); g(20,Y(cc[1]).toFixed(2)); g(30,0); g(40,(+o.r||0).toFixed(2)); continue; }
        if (o.t==='izrez'){ const gg=opCut(pr,o), a=M2(gg[0],gg[1]), b2=M2(gg[0]+gg[2],gg[1]+gg[3]); const x0=Math.min(a[0],b2[0]), y0=Math.min(a[1],b2[1]), ww=Math.abs(b2[0]-a[0]), hh=Math.abs(b2[1]-a[1]); rect(ox+x0, Y(y0+hh), ww, hh, 'IZREZI'); continue; }
        if (o.t==='utor'){ const gg=opGroove(pr,o), a=M2(gg[0],gg[1]), b2=M2(gg[0]+gg[2],gg[1]+gg[3]); const x0=Math.min(a[0],b2[0]), y0=Math.min(a[1],b2[1]), ww=Math.abs(b2[0]-a[0]), hh=Math.abs(b2[1]-a[1]); rect(ox+x0, Y(y0+hh), ww, hh, 'UTORI'); }
        else for (const [hx,hy] of opHoles(pr,o)){ const [X,YY]=M2(hx,hy); g(0,'CIRCLE'); g(8,'LUKNJE'); g(10,(ox+X).toFixed(2)); g(20,Y(YY).toFixed(2)); g(30,0); g(40,((+o.dia||1)/2).toFixed(2)); }
      }
    });
    sh.parts.forEach(p=>{ rect(ox+p.x, Y(p.y+p.h), p.w, p.h, 'KOSI'); const nm=((p.part.pi+1)+' '+(P.parts[p.part.pi].name||'')).trim(); const th=Math.min(30, p.h/3, p.w/(nm.length*0.7+1)); if (th>=6) text(ox+p.x+th*0.6, Y(p.y+p.h)+p.h/2-th/2, th, nm); });
    sh.free.filter(F=>Math.min(F.w,F.h)>=m).forEach(F=>rect(ox+F.x, Y(F.y+F.h), F.w, F.h, 'OSTANKI'));
    ox += L + gap;
  });
  g(0,'ENDSEC'); g(0,'EOF');
  return out.join('\r\n');
}
function exportDXF(r){ download(buildDXF(r), fname('dxf'), 'application/dxf'); }
const expMenu = ()=>$('#expMenu');
$('#expBtn').onclick = e=>{ e.stopPropagation(); fitFloat(); const o=!expMenu().classList.contains('open'); expMenu().classList.toggle('open',o); $('#expBtn').setAttribute('aria-expanded',o); };
document.addEventListener('click', e=>{ if (!e.target.closest('.expwrap,#expHost')) { expMenu().classList.remove('open'); $('#expBtn').setAttribute('aria-expanded','false'); } });
document.addEventListener('keydown', e=>{ if (e.key==='Escape') expMenu().classList.remove('open'); });
expMenu().addEventListener('click', e=>{
  const b=e.target.closest('[data-exp]'); if(!b) return;
  expMenu().classList.remove('open');
  const t=b.dataset.exp;
  if (t==='pdf') { if (!LAST){ alert('Najprej dodaj ploščo in kose.'); return; } exportReportPDF(LAST); return; }
  if (t==='csv') { download(toCSV(rowsParts()), fname('csv'), 'text/csv;charset=utf-8'); return; }
  if (!LAST){ alert('Najprej dodaj ploščo in kose.'); return; }
  if (t==='xlsx') exportXLSX(LAST);
  if (t==='dxf') exportDXF(LAST);
  if (t==='all') downloadAll();
  if (t==='link') shareLink();
});

/* skok na ostanke */
document.addEventListener('click', e=>{ if (!e.target.closest('[data-tooffs]')) return; const t=document.querySelector('.offcard'); if (t){ t.scrollIntoView({behavior:'smooth', block:'center'}); t.classList.add('flash'); setTimeout(()=>t.classList.remove('flash'),1400); } });
/* skok na ploščo */
document.addEventListener('click', e=>{
  const a = e.target.closest('[data-jump]'); if (!a) return;
  e.preventDefault();
  const t = document.getElementById('sheet-'+a.dataset.jump); if (!t) return;
  t.scrollIntoView({behavior:'smooth', block:'start'});
  t.classList.add('flash'); setTimeout(()=>t.classList.remove('flash'), 1400);
});

/* knjižnica plošč */
function libCount(){ const n=db.lib.length; $('#libCount').textContent = n ? `V knjižnici: ${n}` : 'Knjižnica je prazna'; $('#libClear').style.visibility = n?'visible':'hidden'; }
function openLib(){ $('#libNote').textContent=''; libCount(); $('#libDlg').showModal(); $('#libText').focus(); }
function parseSheets(txt){
  const out=[];
  for (const ln of txt.split(/\r?\n/).map(x=>x.trim()).filter(Boolean)){
    const sep = ln.includes('\t') ? '\t' : ln.includes(';') ? ';' : ',';
    const f = ln.split(sep).map(x=>x.trim().replace(/^"|"$/g,''));
    let name=''; if (isNaN(parseFloat(f[0].replace(',','.')))) name=f.shift();
    const nums = f.map(x=>parseFloat(String(x).replace(/\s|€/g,'').replace(',','.'))); const [l,w] = nums; let t='', price='';
    if (nums.length>=4){ t=nums[2]; price=nums[3]; } else if (nums.length===3){ if (nums[2]<=60 && Number.isInteger(nums[2])) t=nums[2]; else price=nums[2]; }
    if (l>0 && w>0) out.push({name: name || `${l} × ${w}`, l, w, t: t>0?t:'', price: price>0?price:''});
  }
  return out;
}
$('#libCancel').onclick = ()=>$('#libDlg').close();
$('#libFileBtn').onclick = ()=>$('#libFile').click();
$('#libFile').onchange = async e=>{ const f=e.target.files[0]; if(f){ $('#libText').value = await f.text(); $('#libNote').textContent = f.name; } e.target.value=''; };
$('#libClear').onclick = async ()=>{ $('#libDlg').close(); if (await ask('Počistim knjižnico?', 'Vse tvoje plošče bodo odstranjene iz izbirnika.', 'Počisti')){ db.lib=[]; save(); } openLib(); };
$('#libGo').onclick = ()=>{
  const list = parseSheets($('#libText').value);
  if (!list.length){ $('#libNote').textContent='Ni prepoznanih plošč – preveri obliko vrstic.'; return; }
  if ($('#libReplace').checked) db.lib = [];
  for (const p of list){ const i=db.lib.findIndex(x=>skey(x)===skey(p)); if (i>=0) db.lib[i]=p; else db.lib.push(p); }
  save(); libCount(); $('#libText').value=''; $('#libReplace').checked=false;
  $('#libNote').textContent = `Uvoženih ${list.length}. Najdeš jih v izbirniku pri nazivu plošče.`;
};


/* vodila predalov (uporablja jih 3D konstruiranje) */
const DR_RUN = {
  ball:  {name:()=>L('Kroglična','Ball bearing'), side:12.5, lenCut:0,  top:30, bottom:0},
  under: {name:()=>L('Skrita','Undermount'),     side:5,    lenCut:10, top:20, bottom:13},
  roll:  {name:()=>L('Valjčna','Roller'),        side:12.5, lenCut:0,  top:30, bottom:0}
};


/* konstrukcija: postavitev elementov v prostoru, izometrija */
(function(){

const dlg = document.getElementById('conDlg'), $ = s => dlg.querySelector(s);
const DEF = {pt:18, ft:18, fgap:3, plinth:100, plinthIn:50, topT:18, topOver:0, upGap:550, gap:1000, res:10, igap:1000, mask:30};
const hPh = e => isFree() ? 400 : e.t==='up' ? 720 : 900;
const isTall = e => e.t!=='up' && rawH(e) >= 1200;   // visoki elementi (od 120 cm) nikoli ne dobijo pulta
const isFree = () => false;   // postavitev ni več: vse je prostor z dvema stenama
const doorsOf = (e, fw) => +e.dn > 0 ? Math.max(1, Math.round(+e.dn)) : ((fw ?? e.w) > 600 ? 2 : 1);
const rawH = e => +e.h > 0 ? +e.h : hPh(e);
// višina korpusa: če je pult v višini elementa, se korpus skrajša za debelino pulta
const hgt = e => rawH(e) - (S && S.topIn && !(rawH(e) >= 1200) && onFloor(e) && anyTop() ? V('topT') : 0);
// smer odpiranja posameznih vrat: privzeto pri enih vratih levo, pri več vratih leva polovica levo, desna desno
const ZK = {door:'Vrata', drawer:'Predal', open:'Odprto'};
const ORDR = {back:0, left:1, right:2, front:3, free:0, island:4, loose:5};
// številke front tečejo naprej čez vse elemente v vrstnem redu seznama
// oznaka dela: odprt in prazen (brez polic in pregrad) ima samo krogec, ostali tečejo po številkah
const zFill = e => Math.round(+e.sh||0) > 0 || Math.round(+e.dv||0) > 0;
const zLab = (e, z) => true;   // vsak del ima številko, tudi odprt
function zLabels(e, off){ let n = off; return zonesOf(e, hgt(e)).map(z=>zLab(e, z) ? String(++n) : ''); }
// po spremembi polic ali pregrad osveži oznake front v urejevalniku (polje obdrži fokus)
// svetla mera med policami (v najvišjem delu brez predalov) in med pregradami
function gapTxt(e, k){ const t = Math.max(1, V('pt')), n = Math.max(0, Math.round(+e[k]||0)); if (!n || (k==='sh' ? e.shM : e.dvM)) return '';
  if (k==='dv'){ const g = (wid(e) - 2*t - n*t)/(n + 1); return g > 0 ? `${L('razmak','gap')} ${Math.round(g)} mm` : ''; }
  const zs = zonesOf(e, hgt(e)); let best = 0; zs.forEach((z, j)=>{ if (z.k==='drawer') return; const zb = zoneBox(zs, j, 0, hgt(e), t); best = Math.max(best, zb.i1 - zb.i0); });
  const g = (best - n*t)/(n + 1); return g > 0 ? `${L('razmak','gap')} ${Math.round(g)} mm` : ''; }
// enoten krogec s črko ali številko (kartica, fronte, skica): ista pisava, debelina in centriranje
// položaji: pregrade = levi rob od notranje leve stranice, police = spodnji rob od dna korpusa
function divOffs(e, t){ const n = Math.max(0, Math.round(+e.dv||0)), inW = wid(e) - 2*t; if (!n) return [];
  return Array.from({length:n}, (_, j)=>{ const a = inW*(j+1)/(n+1) - t/2, v = e.dvM && Array.isArray(e.dvP) && +e.dvP[j] >= 0 && e.dvP[j]!=='' ? +e.dvP[j] : a; return Math.max(0, Math.min(inW - t, v)); }); }
function shelfYs(e, zb, t){ const n = Math.max(0, Math.round(+e.sh||0)); if (!n) return [];
  if (e.shM && Array.isArray(e.shP)) return e.shP.slice(0, n).map(Number).filter(y=>y >= zb.i0 - .5 && y + t <= zb.i1 + .5);
  const ih = zb.i1 - zb.i0; return Array.from({length:n}, (_, j)=>zb.i0 + ih*(j+1)/(n+1) - t/2); }
function autoShelves(e){ const t = Math.max(1, V('pt')), H = hgt(e), zs = zonesOf(e, H); let out = [];
  zs.forEach((z, k)=>{ if (z.k==='drawer' || out.length) return; const zb = zoneBox(zs, k, 0, H, t), n = Math.max(0, Math.round(+e.sh||0)), ih = zb.i1 - zb.i0; out = Array.from({length:n}, (_, j)=>Math.round(zb.i0 + ih*(j+1)/(n+1) - t/2)); });
  return out; }
function posList(e, i, kind){ const on = kind==='sh' ? e.shM : e.dvM, n = Math.max(0, Math.round(+(kind==='sh' ? e.sh : e.dv)||0)); if (!on || !n) return `<div class="posl" data-for="${kind}"></div>`;
  const t = Math.max(1, V('pt')), arr = kind==='sh' ? (e.shP || []) : (e.dvP || []), def = kind==='sh' ? autoShelves(e) : divOffs(Object.assign({}, e, {dvM:false}), t).map(Math.round);
  return `<div class="posl" data-for="${kind}">${Array.from({length:n}, (_, j)=>`<div class="edrow pos"><span>${kind==='sh' ? L('Polica','Shelf') : L('Pregrada','Divider')} ${j+1}<small class="edpos">${kind==='sh' ? L('od dna','from the bottom') : L('od leve','from the left')}</small></span><span class="dim"><i class="ax">mm</i><input type="number" min="0" data-cpos="${i}" data-pk="${kind}" data-pj="${j}" value="${arr[j]!==undefined && arr[j]!=='' ? arr[j] : def[j]}"></span></div>`).join('')}</div>`; }
const modeSeg = (e, i, kind) => `<span class="seg pm" data-pmk="${kind}"${+(kind==='sh' ? e.sh : e.dv) > 0 ? '' : ' hidden'}><button data-cpm="${i}" data-pk="${kind}" data-pv="0" class="${!(kind==='sh' ? e.shM : e.dvM) ? 'on' : ''}" data-tip="${L('Enakomerno razporejeno','Evenly spaced')}">${I.pAuto}</button><button data-cpm="${i}" data-pk="${kind}" data-pv="1" class="${(kind==='sh' ? e.shM : e.dvM) ? 'on' : ''}" data-tip="${L('Vsak kos na svoji poziciji','Each piece at its own position')}">${I.pMan}</button></span>`;
// notranjost dela: kosi polic in pregrad (a od notranje leve stranice, y od dna korpusa)
// shThru: polica gre čez, pregrade so med policami v kosih; sicer gre pregrada skozi in razdeli polico na kose
function interiorOf(e, zb, t){ const inW = wid(e) - 2*t, offs = divOffs(e, t), ys = shelfYs(e, zb, t).slice().sort((a, b)=>a - b), sh = [], dv = [];
  if (e.shThru && offs.length && ys.length){ ys.forEach(y=>sh.push({a0:0, a1:inW, y}));
    const lv = [zb.i0, ...ys.flatMap(y=>[y, y + t]), zb.i1]; offs.forEach(o=>{ for (let c=0;c<lv.length;c+=2) if (lv[c+1] - lv[c] > 1) dv.push({a:o, y0:lv[c], y1:lv[c+1]}); }); }
  else { const ed = [0, ...offs.flatMap(o=>[o, o + t]), inW]; for (let c=0;c<ed.length;c+=2) if (ed[c+1] - ed[c] > 1) ys.forEach(y=>sh.push({a0:ed[c], a1:ed[c+1], y})); offs.forEach(o=>dv.push({a:o, y0:zb.i0, y1:zb.i1})); }
  return {sh, dv}; }
// predal v 3D: vodila (vrsta, dolžina) in višina škatle; brez vnosa vse samodejno
const drRun = (e, z) => z && DR_RUN[z.run] ? z.run : 'ball';
function drBoxOf(e, z, t){ const run = drRun(e, z), R = DR_RUN[run], D = dep(e), nlV = z ? z.nl : '', hbV = z ? z.hb : ''; let NLa = 0; for (let x = 250; x <= 700; x += 50) if (x <= D - t - 10) NLa = x;
  const NL = +nlV > 0 ? Math.min(+nlV, D - t) : NLa, hf = (+z.h || 0) - V('fgap'), hbMax = Math.max(0, Math.floor((hf - R.top - R.bottom)/10)*10), hb = +hbV > 0 ? Math.min(+hbV, hbMax) : hbMax;
  const boxW = wid(e) - 2*t - 2*R.side, inW = boxW - 2*t, boxL = Math.max(0, NL - R.lenCut);
  return {R, NL, NLa, hf, hb, hbMax, boxW, inW, boxL, backH: run==='under' ? Math.max(0, hb - R.bottom - 8) : hb}; }
function drInfo(e){ const t = Math.max(1, V('pt')), zs = zonesOf(e, hgt(e)); let k = 0;
  return zs.map(z=>{ if (z.k!=='drawer') return ''; k++; const b = drBoxOf(e, z, t);
    return `<div class="drl"><b>${L('Predal','Drawer')} ${k}</b><span>${L('čelo','front')} ${Math.round(b.hf)} · ${L('škatla','box')} ${b.hb} × ${Math.round(b.boxL)} × ${Math.round(b.boxW)}${b.hb < 60 ? ` · <em>${L('prenizko','too low')}</em>` : ''}</span></div>`; }).join(''); }
function refreshPos(i){ ['sh','dv'].forEach(k=>{ const pl = dlg.querySelector(`#conEdSide .posl[data-for="${k}"]`); if (pl) pl.outerHTML = posList(S.els[i], i, k); const sg = dlg.querySelector(`#conEdSide .seg.pm[data-pmk="${k}"]`); if (sg) sg.hidden = !(+S.els[i][k] > 0); }); const tr = dlg.querySelector('#conEdSide .thrurow'); if (tr) tr.hidden = !(+S.els[i].sh > 0 && +S.els[i].dv > 0); }
function relabel(i){ dlg.querySelectorAll('#conEdSide .edgap').forEach(x=>{ x.textContent = gapTxt(S.els[i], x.dataset.gap); }); const zl = zLabels(S.els[i], zOff(i)); dlg.querySelectorAll('#conEdSide .zn').forEach((b,k)=>{ b.textContent = zl[k] || ''; }); }
// črka elementa po vrsti seznama (A, B, … Z, AA …)
function elOrder(){ const ws = wallsOf().slice().sort((a,b)=>ORDR[role(a)] - ORDR[role(b)]), o = []; ws.forEach(w=>S.els.forEach((x,j)=>{ if (x.wall===w) o.push(j); })); return o; }
const letterOf = i => { const k = elOrder().indexOf(i); if (k < 0) return ''; let n = k, t = ''; do { t = String.fromCharCode(65 + n % 26) + t; n = Math.floor(n/26) - 1; } while (n >= 0); return t; };
function zOff(i){ const ws = wallsOf().slice().sort((a,b)=>ORDR[role(a)] - ORDR[role(b)]); let n = 0;
  for (const w of ws) for (let j=0;j<S.els.length;j++){ const x = S.els[j]; if (x.wall!==w) continue; if (j===i) return n; n += (x.z || []).length ? zonesOf(x, hgt(x)).filter(z=>zLab(x, z)).length : 0; }
  return n; }
const zDoorO = (e, z, j, n) => (z && z.os && (z.os[j]==='L' || z.os[j]==='R')) ? z.os[j] : doorO(e, j, n);
// višine front od zgoraj navzdol; brez front je element odprt
function zonesOf(e, H){ const z = (e.z && e.z.length) ? e.z : [{k:'open', h:''}];
  const fix = z.reduce((a,x)=>a + (+x.h > 0 ? +x.h : 0), 0), na = z.filter(x=>!(+x.h > 0)).length, au = na ? Math.max(0, (H - fix)/na) : 0;
  return z.map(x=>({k:x.k || 'door', h:+x.h > 0 ? +x.h : au, n:+x.n > 0 ? Math.round(+x.n) : 0, run:x.run, nl:x.nl, hb:x.hb})); }
const zN = (e, z) => (z && +z.n > 0) ? Math.round(+z.n) : doorsOf(e);
// notranja višina dela: na robovih omarice odšteje dno/strop, med deli pol fiksne police (med dvema predaloma police ni)
function zoneBox(zs, k, y0, y1, t){ let top = y1; for (let j=0;j<k;j++) top -= zs[j].h; const bot = Math.max(y0, top - zs[k].h), last = k===zs.length-1;
  const pAbove = k>0 && !(zs[k].k==='drawer' && zs[k-1].k==='drawer'), pBelow = !last && !(zs[k].k==='drawer' && zs[k+1].k==='drawer');
  return {y0:bot, y1:top, i0: last ? y0 + t : bot + (pBelow ? t/2 : 0), i1: k===0 ? y1 - t : top - (pAbove ? t/2 : 0), pBelow}; }
const doorO = (e, i, n) => (e.os && (e.os[i]==='L' || e.os[i]==='R')) ? e.os[i] : n===1 ? (e.o||'L') : (i < n/2 ? 'L' : 'R');
let S = null;
// razveljavi: zgodovina stanj modela; tipkanje v isto polje je en korak, vsak klik svoj
let HIST = [], lastJ = null, lastT = 0, CUR_SRC = null, lastSrc = null;
const syncCU = () => { const b = document.getElementById('conUndo'), r = document.getElementById('conReset'); if (b) b.disabled = !HIST.length; if (r && S) r.disabled = modelPristine(); };
// »Ponastavi vse« je mogoče samo, če se model razlikuje od novega (prikazne nastavitve mode / fronts / setOpen se ne štejejo)
const canon = o => Array.isArray(o) ? o.map(canon) : (o && typeof o==='object') ? Object.keys(o).sort().reduce((a,k)=>{ a[k] = canon(o[k]); return a; }, {}) : o;
function modelPristine(){ if (!S) return true; const f = freshS(), keep = S; S = f; try { f.els.push(newEl()); } finally { S = keep; } const strip = o => { const c = canon(JSON.parse(JSON.stringify(o))); ['mode','fronts','setOpen'].forEach(k=>delete c[k]); (c.els||[]).forEach(e=>delete e.wall); return JSON.stringify(c); }; return strip(S)===strip(f); }
let FLASH = false;
// nova fronta: najprej pokaže novo notranjost, nato pridejo fronte s številkami in ostanejo vidne
function flashFronts(){ FLASH = true; const set = v => { S.fronts = v; EDF = v; draw(); };
  set(false); setTimeout(()=>{ set(true); FLASH = false; lastJ = JSON.stringify(S); }, 550); }
function track(){ if (FLASH){ lastJ = JSON.stringify(S); syncCU(); return; } const j = JSON.stringify(S); if (lastJ!=null && j!==lastJ){ const grp = CUR_SRC && CUR_SRC===lastSrc && Date.now() - lastT < 1500; if (!grp) HIST.push(lastJ); lastSrc = CUR_SRC; if (HIST.length > 100) HIST.shift(); lastT = Date.now(); } lastJ = j; syncCU(); }
window.conUndo = () => { if (!HIST.length) return; const j = HIST.pop(), o = JSON.parse(j); Object.keys(S).forEach(k=>delete S[k]); Object.assign(S, o); lastJ = j; lastT = 0;
  renderInputs(); syncSet(); draw(); };
const newEl = () => ({n:'', t:'base', w:'', d:'', h:'', z:[], lift:'', rot:0, px:0, pz:0});   // MISSION:CUTLIST: model ima en element; dodajanje novih ni mogoče
const freshS = () => ({ geo:2, wallsOn:{}, zv:1, name:'', layout:'X', corner:'L', mode:'solid', fronts:false, top:false, walls:{A:'', B:'', C:'', P:''}, els:[], pt:'', ft:'', plinth:'', plinthIn:'', baseH:'', topT:'', topOver:'', upH:'', upGap:'', tallH:'', gap:'' });
const V = k => (S[k]==='' || S[k]==null || isNaN(+S[k])) ? DEF[k] : +S[k];
const wallsOf = () => ['A'];
const wid = e => +e.w > 0 ? +e.w : 600;
const dep = e => +e.d > 0 ? +e.d : (e.t==='up' ? 350 : 600);
const dPh = e => e.t==='up' ? 350 : 600;

/* ---------- ikone ---------- */
const SV = (w,h,body,sw=1.4) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
const DOT = (x,y,r=1) => `<circle cx="${x}" cy="${y}" r="${r}" fill="currentColor" stroke="none"/>`;
const I = {
  base: SV(16,16,'<rect x="4.5" y="1.5" width="7" height="13" rx="1.6" stroke-opacity=".3"/><rect x="4.5" y="9" width="7" height="5.5" rx="1.6" fill="currentColor" stroke="none"/>', 1.25),
  up:   SV(16,16,'<rect x="4.5" y="1.5" width="7" height="13" rx="1.6" stroke-opacity=".3"/><rect x="4.5" y="1.5" width="7" height="5" rx="1.6" fill="currentColor" stroke="none"/>', 1.25),
  tall: SV(16,16,'<rect x="4.5" y="1.5" width="7" height="13" rx="1.6" fill="currentColor"/>', 1.25),
  w:    SV(16,12,'<path d="M2 6h12M4.5 3.5L2 6l2.5 2.5M11.5 3.5L14 6l-2.5 2.5"/>', 1.25),
  g:    SV(12,16,'<path d="M6 4.5v9M3.5 7L6 4.5 8.5 7M2.5 2h7"/>', 1.25),
  q:    SV(12,12,'<path d="M3 3l6 6M9 3L3 9"/>', 1.25),
  h:    SV(12,16,'<path d="M6 2.5v11M3 2.5h6M3 13.5h6"/>', 1.25),
  d:    SV(14,14,'<path d="M3 11L11 3M3 11V7.5M3 11h3.5M11 3H7.5M11 3v3.5"/>', 1.25),
  fronts: SV(18,16,'<rect x="3.5" y="1.5" width="11" height="13" rx="2"/>' + DOT(11.5,8,1.1), 1.25),
  top:  SV(18,16,'<rect x="1.5" y="2.5" width="15" height="3" rx="1.5"/><rect x="3.5" y="7.5" width="11" height="7" rx="1.8"/>', 1.25),
  eye:  SV(18,14,'<path d="M1.5 7C3.7 3.3 6.2 1.8 9 1.8s5.3 1.5 7.5 5.2C14.3 10.7 11.8 12.2 9 12.2S3.7 10.7 1.5 7z"/><circle cx="9" cy="7" r="2.4"/>', 1.5),
  eyeoff: SV(18,14,'<path d="M1.5 7C3.7 3.3 6.2 1.8 9 1.8s5.3 1.5 7.5 5.2C14.3 10.7 11.8 12.2 9 12.2S3.7 10.7 1.5 7z" stroke-opacity=".35"/><path d="M3.5 12.5L14.5 1.5"/>', 1.5),
  tin:  SV(16,16,'<path d="M3 14.5v-12M13 14.5v-12M3.6 4h8.8" stroke-width="1.25"/><path d="M3 14.5h10" stroke-opacity=".4"/>', 1.25),
  ton:  SV(16,16,'<path d="M3 14.5V5M13 14.5V5M2 3h12" stroke-width="1.25"/><path d="M3 14.5h10" stroke-opacity=".4"/>', 1.25),
  dn:   SV(16,14,'<rect x="1" y="1.5" width="6.3" height="11" rx="1.4"/><rect x="8.7" y="1.5" width="6.3" height="11" rx="1.4"/>', 1.25),
  sh:   SV(14,14,'<rect x="1.5" y="1.5" width="11" height="11" rx="1.6"/><path d="M1.5 5.2h11M1.5 8.8h11"/>', 1.25),
  dv:   SV(14,14,'<rect x="1.5" y="1.5" width="11" height="11" rx="1.6"/><path d="M7 1.5v11"/>', 1.25),
  hl:   SV(16,16,'<rect x="3" y="1.5" width="10" height="13" rx="1.6"/><path d="M13 3L3 8l10 5" stroke-opacity=".55"/>', 1.25),
  bin:  SV(16,16,'<path d="M2 2.5h12M2 13.5h12" stroke-width="1.25"/><path d="M12.5 4.6v6.8" stroke-width="2.2"/>', 1.25),
  bover:SV(16,16,'<path d="M2 4h9M2 12h9" stroke-width="1.25"/><path d="M13.4 2v12" stroke-width="2.2"/>', 1.25),
  zdoor:  SV(16,16,'<rect x="3" y="1.5" width="10" height="13" rx="1.6"/><path d="M10.5 7v2"/>', 1.25),
  zdrawer:SV(16,16,'<rect x="1.5" y="4" width="13" height="8" rx="1.6"/><path d="M6 6.5h4"/>', 1.25),
  zopen:  SV(16,16,'<path d="M2.5 2v12M13.5 2v12M2.5 8h11M2.5 14h11"/>', 1.25),
  zeq:    SV(16,16,'<rect x="2.5" y="1.5" width="11" height="13" rx="1.6"/><path d="M2.5 5.8h11M2.5 10.2h11"/>', 1.25),
  zgrad:  SV(16,16,'<rect x="2.5" y="1.5" width="11" height="13" rx="1.6"/><path d="M2.5 4.5h11M2.5 8.5h11"/>', 1.25),
  copy: SV(16,16,'<rect x="5.5" y="5.5" width="9" height="9" rx="1.6"/><path d="M10.5 3.5v-.4a1.6 1.6 0 0 0-1.6-1.6H3.1a1.6 1.6 0 0 0-1.6 1.6v5.8a1.6 1.6 0 0 0 1.6 1.6h.4"/>', 1.25),
  epR:  SV(16,16,'<rect x="2.5" y="3.5" width="8" height="9" rx="1.2" stroke-opacity=".4"/><path d="M13 1.5v13" stroke-width="2.4"/>', 1.25),
  off:  SV(16,12,'<path d="M2 2v8M5 6h9M11.5 3.5L14 6l-2.5 2.5"/>', 1.25),
  sbOwn:    SV(20,16,'<rect x="2" y="5" width="7" height="9" rx="1" stroke-opacity=".45"/><rect x="11" y="5" width="7" height="9" rx="1" stroke-opacity=".45"/><path d="M2 3h7M11 3h7" stroke-width="1.8"/>', 1.25),
  sbShared: SV(20,16,'<rect x="2" y="5" width="7" height="9" rx="1" stroke-opacity=".45"/><rect x="11" y="5" width="7" height="9" rx="1" stroke-opacity=".45"/><path d="M2 3h16" stroke-width="1.8"/>', 1.25),
  mkL:  SV(16,16,'<rect x="6" y="3" width="8" height="10" rx="1" stroke-opacity=".45"/><path d="M3.5 3v10" stroke-width="2.4"/><path d="M1 1.5v13" stroke-opacity=".5"/>', 1.25),
  mkR:  SV(16,16,'<rect x="2" y="3" width="8" height="10" rx="1" stroke-opacity=".45"/><path d="M12.5 3v10" stroke-width="2.4"/><path d="M15 1.5v13" stroke-opacity=".5"/>', 1.25),
  tAdd: SV(18,16,'<rect x="3" y="6" width="12" height="8" rx="1" stroke-opacity=".45"/><path d="M2 3.5h14" stroke-width="2"/><path d="M15.5 6v8" stroke-opacity=".4" stroke-dasharray="1 1.5"/>', 1.25),
  tIn:  SV(18,16,'<rect x="3" y="3" width="12" height="11" rx="1" stroke-opacity=".45"/><path d="M3 4h12" stroke-width="2"/>', 1.25),
  camera: SV(18,16,'<rect x="2.5" y="2" width="13" height="12" rx="2"/><path d="M3 11.5l4-4 3 3 2-2 3 3"/>', 1.25),
  share: SV(16,16,'<path d="M8 10V1.8M5 4.6L8 1.6l3 3"/><path d="M5.5 6.5H4a1.5 1.5 0 0 0-1.5 1.5v5.5A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 12 6.5h-1.5"/>', 1.25),
  s_pt: SV(16,16,'<rect x="1.5" y="6" width="13" height="4" rx=".8"/><path d="M8 1.5v3M8 14.5v-3" stroke-opacity=".5"/>', 1.25),
  s_ft: SV(16,16,'<rect x="2" y="2" width="8.5" height="12" rx="1" stroke-opacity=".4"/><path d="M13.2 2v12" stroke-width="2.4"/>', 1.25),
  s_fgap: SV(16,16,'<rect x="1.5" y="2" width="5.5" height="12" rx="1"/><rect x="9" y="2" width="5.5" height="12" rx="1"/>', 1.25),
  s_res: SV(16,16,'<rect x="4" y="4" width="8" height="8" rx="1"/><rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke-dasharray="1.6 1.6" stroke-opacity=".5"/>', 1.25),
  plF: SV(16,16,'<rect x="3" y="2.5" width="10" height="10" rx="1" stroke-opacity=".4"/><path d="M3 14h10" stroke-width="2.4"/>', 1.25),
  plB: SV(16,16,'<rect x="3" y="3.5" width="10" height="10" rx="1" stroke-opacity=".4"/><path d="M3 2h10" stroke-width="2.4"/>', 1.25),
  plL: SV(16,16,'<rect x="3.5" y="3" width="10" height="10" rx="1" stroke-opacity=".4"/><path d="M2 3v10" stroke-width="2.4"/>', 1.25),
  plR: SV(16,16,'<rect x="2.5" y="3" width="10" height="10" rx="1" stroke-opacity=".4"/><path d="M14 3v10" stroke-width="2.4"/>', 1.25),
  s_plinth: SV(16,16,'<rect x="2" y="1.5" width="12" height="9" rx="1" stroke-opacity=".4"/><path d="M3.5 13.5h9" stroke-width="2.4"/>', 1.25),
  s_plinthIn: SV(16,16,'<rect x="2" y="1.5" width="12" height="9" rx="1" stroke-opacity=".4"/><path d="M6 13.5h8" stroke-width="2.4"/><path d="M2 13.5h1.6" stroke-opacity=".5"/>', 1.25),
  rBall: SV(16,16,'<path d="M1.5 4.5h13M1.5 11.5h13" stroke-opacity=".45"/><circle cx="4.5" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="11.5" cy="8" r="1.5"/>', 1.25),
  rUnder: SV(16,16,'<rect x="2" y="2.5" width="12" height="7.5" rx="1" stroke-opacity=".45"/><path d="M2 13h12" stroke-width="2.2"/>', 1.25),
  rRoll: SV(16,16,'<path d="M1.5 13h13" stroke-opacity=".45"/><circle cx="8" cy="8" r="3.6"/><circle cx="8" cy="8" r=".9" fill="currentColor" stroke="none"/>', 1.25),
  jDv: SV(16,16,'<rect x="2" y="2" width="12" height="12" rx="1" stroke-opacity=".45"/><path d="M8 2v12M2 8h4.6M11.4 8H14"/>', 1.25),
  jSh: SV(16,16,'<rect x="2" y="2" width="12" height="12" rx="1" stroke-opacity=".45"/><path d="M2 8h12M8 2v4.6M8 11.4V14"/>', 1.25),
  pAuto: SV(16,16,'<rect x="2.5" y="2" width="11" height="12" rx="1" stroke-opacity=".45"/><path d="M2.5 6h11M2.5 10h11"/>', 1.25),
  pMan:  SV(16,16,'<rect x="2.5" y="2" width="11" height="12" rx="1" stroke-opacity=".45"/><path d="M2.5 5h11M2.5 11.5h11"/><path d="M14.8 5v6.5" stroke-dasharray="1 1.4" stroke-opacity=".6"/>', 1.25),
  rot:  SV(16,16,'<path d="M13.2 8.6A5.3 5.3 0 1 1 11.6 4.2"/><path d="M12.2 1.6l-.4 2.9 2.9.4"/>', 1.25),
  ep:   SV(16,16,'<rect x="5.5" y="3.5" width="8" height="9" rx="1.2" stroke-opacity=".4"/><path d="M3 1.5v13" stroke-width="2.4"/>', 1.25),
  hr:   SV(16,16,'<rect x="3" y="1.5" width="10" height="13" rx="1.6"/><path d="M3 3l10 5L3 13" stroke-opacity=".55"/>', 1.25)
};
function topIcon(){ return wallIcon(wallsOf()[0], true); }
const WBLK = {back:[[10.6,4.5],[16,4.5]], left:[[4,4.5],[4,9.9]], right:[[23.4,4.5],[23.4,9.9]], front:[[10.6,15.5],[16,15.5]], free:[[12,7]], loose:[[11,9],[16.4,9]]};   // kotni element je del stranske stene
const WLN = {back:'M4 3h24', left:'M2 3v17', right:'M30 3v17', front:'M4 21.5h24', free:'', loose:''};
// ikona stene: enote kot kvadratki ob tanki črti stene; izbrana stena polna, ostale bledo
function wallIcon(w, all, solo){ const rw = role(w); if (solo){ const r = ({A:'back', B:'left', C:'right', P:'front'})[w]; return SV(32,22, `<path d="${WLN[r]}" stroke-width="1.6"/>` + (WBLK[r]||[]).map(([x,y])=>`<rect x="${x}" y="${y}" width="4.6" height="4.6" rx="1" fill="currentColor" stroke="none"/>`).join(''), 1.1); }
  const g = wallsOf().map(k=>{ const r = role(k), on = all || k===w, sz = r==='free' ? 8 : 4.6;
    return (WLN[r] ? `<path d="${WLN[r]}" stroke-opacity="${on ? .45 : .2}"/>` : '') + (WBLK[r]||[]).map(([x,y])=>`<rect x="${x}" y="${y}" width="${sz}" height="${sz}" rx="1" fill="currentColor" fill-opacity="${on ? 1 : .22}" stroke="none"/>`).join(''); }).join('');
  return SV(32,22, g, 1.1);
}

/* ---------- vnos ---------- */
function row(k, lab){ return `<span class="dim" data-tip="${lab} · mm">${I['s_' + k] || ''}<input type="number" min="0" data-ck="${k}" value="${S[k]}" placeholder="${DEF[k]}" aria-label="${lab}"></span>`; }
const gPh = 550, gap = e => +e.g > 0 ? +e.g : gPh;
const qty = e => 1;
const lA0f = rl => !(rl==='left' || rl==='front' || rl==='island');
const topExt = (e, k) => e ? ((k ? e.open1 : e.open0) ? (epOn(e, k) ? FT() : 0) + ((k ? e.mk1 : e.mk0) ? mkW(e) : 0) : 0) : 0;   // podaljšek pulta čez zaključni kos in masko
// cokel po stranicah elementa (f spredaj, b zadaj, l levo, r desno); brez izbire samo spredaj
const plSel = e => e.pls && typeof e.pls==='object' ? e.pls : {f:true, b:false, l:false, r:false};
const plOn = (e, k) => !!plSel(e)[k];
const mkW = e => +e.mkw > 0 ? +e.mkw : 30;   // širina zaključne maske (privzeto 30 mm)
const epOn = (e, k) => { const v = k ? e.ep1 : e.ep0; return v===undefined ? !!e.ep : !!v; };   // količine ni več: vsak element je svoj (kopiraj)
// privzeta možnost je vedno levo: v prostoru strop med stranicama in hrbet čez, pri samostoječem obratno
const ord = (roomDef, other) => isFree() ? other + roomDef : roomDef + other;
function elRow(e, i, prod){
  const dims = [`<span class="dim" data-tip="Širina">${I.w}<input type="number" min="0" data-cw="${i}" value="${e.w}" placeholder="600"></span>`,
    `<span class="dim" data-tip="Globina">${I.d}<input type="number" min="0" data-cd="${i}" value="${e.d}" placeholder="${dPh(e)}"></span>`,
    `<span class="dim" data-tip="Višina">${I.h}<input type="number" min="0" data-ch="${i}" value="${e.h||''}" placeholder="${hPh(e)}"></span>`];
  if (false) dims.push(`<span class="dim" data-tip="Odmik od pulta">${I.g}<input type="number" min="0" data-cg="${i}" value="${e.g||''}" placeholder="${gPh}"></span>`);
  const nz = (e.z||[]).length;
  // Hitri model: urejanje je v istem oknu; pri starih večelementnih modelih gumb samo izbere, kateri element se ureja spodaj
  const edBtn = S.els.length > 1 ? `<button class="edbtn${i===ED ? ' on' : ''}" data-ced="${i}" data-tip="${L('Uredi ta element spodaj','Edit this unit below')}">${i===ED ? L('Urejaš','Editing') : L('Uredi','Edit')}${nz ? ` · ${nz} ${L(nz===1?'fronta':nz===2?'fronti':nz<5?'fronte':'front', nz===1?'front':'fronts')}` : ''}</button>` : '';
  if (false) dims.push(`<span class="dim" data-tip="Police">${I.sh}<input type="number" min="0" step="1" data-csh="${i}" value="${e.sh||''}" placeholder="0"></span>`);
  const drw = (e.z||[]).some(z=>z.k==='drawer'), allDrw = (e.z||[]).length && (e.z||[]).every(z=>z.k==='drawer');
  if (false) dims.push(`<span class="dim" data-tip="Pregrade">${I.dv}<input type="number" min="0" step="1" data-cdv="${i}" value="${e.dv||''}" placeholder="0"></span>`);
  if (false) dims.push(`<span class="dim dseg"><span class="seg">${ord(`<button data-ctop="${i}" data-ctv="in" class="${e.tp!=='on'?'on':''}" data-tip="Strop med stranicama">${I.tin}</button>`, `<button data-ctop="${i}" data-ctv="on" class="${e.tp==='on'?'on':''}" data-tip="Strop čez stranici">${I.ton}</button>`)}</span></span>`);
  if (false) dims.push(`<span class="dim dseg"><span class="seg"><button data-cbk="${i}" data-cbv="in" class="${e.bk!=='over'?'on':''}" data-tip="Hrbet med stranicama">${I.bin}</button><button data-cbk="${i}" data-cbv="over" class="${e.bk==='over'?'on':''}" data-tip="Hrbet čez stranici">${I.bover}</button></span></span>`);
  return `<div class="el${e.hide?' off':''}">
    ${S.els.length > 1 ? `<span class="nmrow"><span class="sp"></span><button class="x" data-cdel="${i}" data-tip="${L('Odstrani','Remove')}">×</button></span>` : ''}
    ${edBtn ? `<span class="optrow">${edBtn}</span>` : ''}
    <span class="dims" style="grid-template-columns:repeat(3,minmax(0,1fr))">${dims.join('')}</span></div>`;
}
// ob spremembi širine ali števila vrat osveži samo vrstico z gumbi, da polje ne izgubi fokusa
function refreshOpt(i, inp){ const el = inp.closest('.el'), tmp = document.createElement('div'); tmp.innerHTML = elRow(S.els[i], i); if (el){ const o0 = el.querySelector('.optrow'), o1 = tmp.querySelector('.optrow'); if (o0 && o1) o0.replaceWith(o1); const zo = el.querySelector('.zones'); const z1 = tmp.querySelector('.zones'); if (zo && z1) zo.replaceWith(z1); } }
// fronte po višini: vrata, predal ali odprto; prazna višina si razdeli ostanek
function zonesHTML(e, i){
  const z = e.z || [], zo = zOff(i), zl = zLabels(e, zo), zs = zonesOf(e, hgt(e)), nDr = z.filter(x=>x.k==='drawer').length, lock = '';
  const dirs = (x, k) => { const n = zN(e, x); return Array.from({length:n}, (_, j)=>{ const o = zDoorO(e, x, j, n);
    return `<button class="zo" data-czo="${i}" data-czi="${k}" data-czd="${j}" data-tip="${n > 1 ? `${L('Vrata','Door')} ${j+1} · ` : ''}${L(o==='L'?'odpira se levo':'odpira se desno', o==='L'?'opens left':'opens right')} · ${L('klik zamenja','click to switch')}">${o==='L' ? I.hl : I.hr}</button>`; }).join(''); };
  const sub = (x, k) => x.k==='drawer' ? '' : x.k!=='door' ? '' : `<div class="zsub"><span class="dim zcnt" data-tip="Število vrat">${I.dn}<input type="number" min="1" max="4" step="1" data-czn="${i}" data-czi="${k}" value="${+x.n > 0 ? x.n : ''}" placeholder="${doorsOf(e)}"></span><span class="zdir">${dirs(x, k)}</span></div>`;
  return `<div class="zones">${z.map((x,k)=>`<div class="zone"><span class="sw zn" data-ei="${i}" data-zi="${k}" data-tip="Povleci gor ali dol za premik">${zl[k]}</span><span class="seg">${Object.keys(ZK).map(kk=>`<button data-czk="${i}" data-czi="${k}" data-czv="${kk}" class="${(x.k||'door')===kk?'on':''}" data-tip="${ZK[kk]}">${I['z'+kk]}</button>`).join('')}</span>
      <span class="dim" data-tip="Višina fronte">${I.h}<input type="number" min="0" data-czh="${i}" data-czi="${k}" value="${x.h||''}" placeholder="${Math.round(zs[k].h)}"${lock}></span><button class="x" data-czdel="${i}" data-czi="${k}" data-tip="Odstrani">×</button>${sub(x, k)}</div>`).join('')}
    </div>`;
}
function zph(i, el){ const zs = zonesOf(S.els[i], hgt(S.els[i])); el.querySelectorAll('[data-czh]').forEach(x=>{ x.placeholder = Math.round(zs[+x.dataset.czi].h); }); }
// sprememba položaja lahko element premakne k drugi steni: seznam osveži, ko polje zapustiš
dlg.addEventListener('change', ev=>{ const d = ev.target.dataset || {}; if (d.cwl!==undefined){ renderInputs(); draw(); }
  else if ((d.cw!==undefined || d.cd!==undefined || d.ch!==undefined) && +(d.cw ?? d.cd ?? d.ch)===ED) renderEditor(); });   // urejevalnik je v istem oknu: po spremembi mer osveži razmike in privzete vrednosti
dlg.addEventListener('pointerdown', ev=>{
  const h = ev.target.closest('.zn'); if (!h) return; ev.preventDefault();
  const row = h.closest('.zone'), rows = [...row.parentElement.querySelectorAll(':scope > .zone')], i = +h.dataset.ei, from = +h.dataset.zi, y0 = ev.clientY;
  let to = from; row.classList.add('drag'); try { h.setPointerCapture(ev.pointerId); } catch(_){}
  const mv = e2 => { row.style.transform = `translateY(${e2.clientY - y0}px)`;
    to = rows.filter(r=>r!==row && (()=>{ const b = r.getBoundingClientRect(); return b.top + b.height/2 < e2.clientY; })()).length; };
  const up = () => { h.removeEventListener('pointermove', mv); h.removeEventListener('pointerup', up); h.removeEventListener('pointercancel', up); row.style.transform = ''; row.classList.remove('drag');
    if (to!==from){ const z = S.els[i].z, [it] = z.splice(from, 1); z.splice(to, 0, it); CUR_SRC = null; renderInputs(); draw(); } };
  h.addEventListener('pointermove', mv); h.addEventListener('pointerup', up); h.addEventListener('pointercancel', up);
});
// nov element šele, ko so vsi na tej steni poimenovani
// višina prostora na strani omeji višino elementov (spodnji: s coklom in pultom, zgornji: nad pultom z odmikom)
function maxH(e){ const H = 0; if (!(H > 0)) return Infinity; const pl = isFree() ? 0 : V('plinth'), tt = anyTop() ? V('topT') : 0;
  if (e.t!=='up') return H - pl - (hgt(e) > 1400 ? 0 : tt);
  const base = Math.max(720, ...S.els.filter(x=>x.wall===e.wall && x.t!=='up' && hgt(x) <= 1400).map(hgt)); return H - pl - base - V('topT') - gap(e); }
function clampH(i){ const e = S.els[i], m = Math.floor(maxH(e)); if (m > 0 && hgt(e) > m){ e.h = m; return true; } return false; }
// urejevalnik elementa: korpus, notranjost in fronte, levo pogled od spredaj
let VBL = null, LASTVB = null, SEL = null, EDM = null, ED = null, EDF = true, NUMS = 1, EDA = 45, EDB = false, EDLA0 = true;
function markSel(){ dlg.querySelectorAll('.sw.elb').forEach(x=>x.classList.toggle('sel', +x.dataset.elb===SEL)); dlg.querySelectorAll('#conStage g.u, #conStage g.ul').forEach(g=>g.classList.toggle('sel', +(g.dataset.ui ?? g.dataset.ul)===SEL)); }
// Hitri model: urejevalnik elementa (korpus, notranjost, fronte) je v istem oknu, brez dodatnega pojavnega okna.
// ED = element, ki se ureja; pri enem elementu vedno 0, pri starih večelementnih modelih ga izbere klik na skici ali gumb »Uredi«.
function openEd(i){ if (!S.els[i]) return; const ch = ED!==i; ED = i; if (ch){ renderInputs(); } const sd = $('#conEdSide'), box = dlg.querySelector('.wrap .left'); if (ch && sd && box && S.els.length > 1) box.scrollTo({top: sd.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop - 8, behavior:'smooth'}); }
function renderEditor(){
  if (ED===null || !S.els[ED]) ED = S.els.length ? 0 : null;
  if (ED===null){ $('#conEdSide').innerHTML = ''; return; } const e = S.els[ED], i = ED;
  const drw = (e.z||[]).some(z=>z.k==='drawer'), allDrw = (e.z||[]).length && (e.z||[]).every(z=>z.k==='drawer');
  const seg = (a, b) => `<span class="seg">${a}${b}</span>`, row = (lab, ctl) => `<div class="edrow"><span>${lab}</span>${ctl}</div>`;
  const inOn = isFree() ? ['on','in'] : ['in','on'];
  $('#conEdSide').innerHTML =
      `<div class="edsec"><div class="edh">${L('Korpus','Carcass')}${S.els.length > 1 ? `<span class="edhn">${L('element','unit')} ${letterOf(i)}${String(e.n||'').trim() ? ' · ' + esc(String(e.n).trim()) : ''}</span>` : ''}</div>`
    + row(L('Strop','Top'), `<span class="seg">${inOn.map(v=>`<button data-ctop="${i}" data-ctv="${v}" class="${(e.tp==='on') === (v==='on') ? 'on' : ''}" data-tip="${v==='on' ? L('Strop čez stranici','Top over sides') : L('Strop med stranicama','Top between sides')}">${v==='on' ? I.ton : I.tin}</button>`).join('')}</span>`)
    + row(L('Hrbet','Back'), seg(`<button data-cbk="${i}" data-cbv="in" class="${e.bk!=='over'?'on':''}" data-tip="${L('Hrbet med stranicama','Back between sides')}">${I.bin}</button>`, `<button data-cbk="${i}" data-cbv="over" class="${e.bk==='over'?'on':''}" data-tip="${L('Hrbet čez stranici','Back over sides')}">${I.bover}</button>`))
    + (e.t!=='up' && onFloor(e) && !isFree() ? row(L('Cokel','Plinth'), `<span class="seg">${[['f',L('Spredaj','Front'),I.plF],['l',L('Levo','Left'),I.plL],['r',L('Desno','Right'),I.plR]].map(([k, lb, ic])=>`<button data-cpl="${i}" data-cplk="${k}" class="${plOn(e, k)?'on':''}" data-tip="${L('Cokel','Plinth')}: ${lb}">${ic}</button>`).join('')}</span>`) : '')
    + `</div><div class="edsec"><div class="edh">${L('Notranjost','Interior')}</div>`
    + (allDrw ? `<p class="ednote">${L('Element ima samo predale: brez polic in pregrad.','Drawers only: no shelves or dividers.')}</p>`
      : row(`${L('Police','Shelves')}<small class="edgap" data-gap="sh">${gapTxt(e, 'sh')}</small>`, `<span class="pmwrap">${modeSeg(e, i, 'sh')}<span class="dim">${I.sh}<input type="number" min="0" step="1" data-csh="${i}" value="${e.sh||''}" placeholder="0"></span></span>`) + posList(e, i, 'sh')
      + row(`${L('Pregrade','Dividers')}<small class="edgap" data-gap="dv">${gapTxt(e, 'dv')}</small>`, `<span class="pmwrap">${modeSeg(e, i, 'dv')}<span class="dim">${I.dv}<input type="number" min="0" step="1" data-cdv="${i}" value="${e.dv||''}" placeholder="0"></span></span>`) + posList(e, i, 'dv')
      + `<div class="edrow thrurow"${+e.sh > 0 && +e.dv > 0 ? '' : ' hidden'}><span>${L('Stik polic in pregrad','Shelf and divider joint')}<small class="edpos">${e.shThru ? L('polica čez, pregrada v kosih','shelf through, divider in pieces') : L('pregrada čez, polica v kosih','divider through, shelf in pieces')}</small></span><span class="seg"><button data-cthru="${i}" data-cthruv="0" class="${!e.shThru ? 'on' : ''}" data-tip="${L('Pregrada gre skozi, polica je razdeljena na 2 kosa','Divider runs through, the shelf is cut into 2 pieces')}">${I.jDv}</button><button data-cthru="${i}" data-cthruv="1" class="${e.shThru ? 'on' : ''}" data-tip="${L('Polica gre skozi, pregrada je razdeljena na kose','Shelf runs through, the divider is cut into pieces')}">${I.jSh}</button></span></div>`
      + (drw ? `<p class="ednote">${L('Police in pregrade so samo v delih z vrati in odprtih delih, v predalih jih ni.','Shelves and dividers only in door and open parts, never in drawers.')}</p>` : ''))
    + `</div><div class="edsec"><div class="edh">${L('Fronte','Fronts')}</div>${zonesHTML(e, i)}</div><button class="addz out" data-czadd="${i}" data-tip="Dodaj fronto">+ Fronta</button>`
    ;
}
const setOn = () => S.setOpen===true;   // nastavitve so privzeto zložene (odprte le, če jih je uporabnik odprl)
function syncSet(){ $('#conBuild').hidden = !setOn(); $('#conSetT').setAttribute('aria-expanded', setOn()); }
dlg.addEventListener('click', e=>{ if (e.target.closest('.conset') && !e.target.closest('#conSetT')) $('#conSetT').click(); });
let OPEN = {}, NAT = {};   // NAT: najbližja možna pozicija elementa od začetka stene
function renderInputs(){
  if (ED===null || !S.els[ED]) ED = S.els.length ? 0 : null;
  OPEN = {}; NAT = {}; if (S.els.length){ const RR = layoutRuns(); RR.list.forEach(rn=>rn.lower.forEach(x=>{ if (onFloor(x) && (x.open0 || x.open1)) OPEN[x._i] = {o0:!!x.open0, o1:!!x.open1, lA0:lA0f(rn.role)}; })); }
  const ORD = ORDR;
  const w = wallsOf().slice().sort((a,b)=>ORD[role(a)] - ORD[role(b)]);
  $('#conWalls').innerHTML = !w.length ? '<p class="hint">Najprej izberi postavitev.</p>' : isFree()
    ? S.els.map((e,i)=>e.wall==='A' ? `<div class="wall prod">${elRow(e, i, true)}</div>` : '').join('')
    : `<div class="wall">${S.els.map((e,i)=>elRow(e,i)).join('')}</div>`
      + (false ? `<div class="wall tcard"><div class="whead">${topIcon()}<b>Razmik med stenama</b><span class="u">mm</span><input type="number" min="0" data-ck="gap" value="${S.gap}" placeholder="${DEF.gap}" data-tip="Prehod med prvo in vzporedno steno"></div></div>` : '');
  // pult velja za ves model: v oknu Hitri model je pod urejevalnikom elementa
  // pult velja za ves model; skupni hrbet se v vmesniku ne ureja več (podatki ostanejo)
  $('#conTop').innerHTML = !w.length || isFree() ? '' : (anyTop() ? `<div class="wall tcard"><div class="whead"><b>${L('Pult','Worktop')}</b><button class="x wx" data-ctop2="1" data-tip="${L('Odstrani pult','Remove worktop')}">×</button></div>
        <div class="el"><span class="dims" style="grid-template-columns:repeat(4,minmax(0,1fr))"><span class="dim" data-tip="${L('Debelina pulta','Worktop thickness')}">${I.h}<input type="number" min="0" data-ck="topT" value="${S.topT}" placeholder="${DEF.topT}"></span><span class="dim" data-tip="${L('Previs pulta','Worktop overhang')}">${I.d}<input type="number" min="0" data-ck="topOver" value="${S.topOver}" placeholder="${DEF.topOver}"></span><span class="dim dseg" style="grid-column:span 2"><span class="seg"><button data-ctin="0" class="${!S.topIn?'on':''}" data-tip="${L('Pult doda višino nad element','The worktop adds height on top of the unit')}">${I.tAdd}</button><button data-ctin="1" class="${S.topIn?'on':''}" data-tip="${L('Pult je v višini elementa','The worktop is within the unit height')}">${I.tIn}</button></span></span></span></div></div>`
        : `<button class="addtop" data-ctop2="1" data-tip="${L('Doda pult na vse strani','Adds a worktop on all sides')}">+ ${L('Pult','Worktop')}</button>`);
  markSel();
  renderEditor();
  $('#conBuild').innerHTML = `<div class="el"><span class="dims setdims">${row('pt','Debelina plošč') + row('ft','Debelina front') + row('fgap','Fronta ožja od omarice') + (isFree() ? '' : row('plinth','Višina cokla') + row('plinthIn','Odmik cokla od fronte'))}</span></div>`;
}
dlg.addEventListener('input', e=>{
  const d = e.target.dataset, v = e.target.value; CUR_SRC = e.target.id || JSON.stringify(d); VBL = null;
  if (d.ck) S[d.ck] = v===''?'':+v;
  else if (d.cw!==undefined){ S.els[+d.cw].w = v===''?'':+v; refreshOpt(+d.cw, e.target); }
  else if (d.cd!==undefined) S.els[+d.cd].d = v===''?'':+v;
  else if (d.ch!==undefined){S.els[+d.ch].h = v===''?'':+v; if (clampH(+d.ch)) e.target.value = S.els[+d.ch].h; if (+d.ch===ED) zph(ED, $('#conEdSide')); }
  else if (d.cg!==undefined) S.els[+d.cg].g = v===''?'':+v;
  else if (d.czn!==undefined){ const x = S.els[+d.czn], z = x.z[+d.czi], c = Math.round(+v); z.n = v==='' || !(c > 0) ? '' : Math.min(4, c); if (+v > 4) e.target.value = 4; if (z.os) z.os = z.os.slice(0, zN(x, z));
    const zr = e.target.closest('.zone'), tmp = document.createElement('div'); tmp.innerHTML = zonesHTML(x, +d.czn); const nz = tmp.querySelectorAll('.zone')[+d.czi]; if (zr && nz) zr.querySelector('.zdir').replaceWith(nz.querySelector('.zdir')); }
  else if (d.czh!==undefined){ S.els[+d.czh].z[+d.czi].h = v===''?'':+v; zph(+d.czh, e.target.closest('.el')); }
  // X in Y sta odmika najbližje stranice tlorisa od osi, ne glede na rotacijo
  else if (d.csh!==undefined){ S.els[+d.csh].sh = v===''?'':+v; relabel(+d.csh); refreshPos(+d.csh); }
  else if (d.cdv!==undefined){ S.els[+d.cdv].dv = v===''?'':+v; relabel(+d.cdv); refreshPos(+d.cdv); }
  else if (d.cpos!==undefined){ const x = S.els[+d.cpos], k = d.pk==='sh' ? 'shP' : 'dvP'; x[k] = Array.isArray(x[k]) ? x[k] : []; x[k][+d.pj] = v==='' ? '' : Math.max(0, +v); }
  else if (d.cn!==undefined){ S.els[+d.cn].n = v; const elx = e.target.closest('.el'); elx.querySelectorAll('.dims input').forEach(x=>{ x.disabled = false; }); track(); save(); return; }
  else return;
  draw();
});
dlg.addEventListener('click', e=>{
  const b = e.target.closest('button'); if (!b) return; const d = b.dataset; if (b.id!=='conUndo') CUR_SRC = null; VBL = null;
  if (d.cpl!==undefined){ const x = S.els[+d.cpl]; x.pls = Object.assign({}, plSel(x)); x.pls[d.cplk] = !x.pls[d.cplk];
    // brez cokla višina skoči na 0; ko je 0 in se cokel spet izbere, se vrne privzeta vrednost
    const anyPl = S.els.some(y=>ok(y) && y.t!=='up' && onFloor(y) && ['f','l','r'].some(k=>plOn(y, k)));
    if (!anyPl) S.plinth = 0; else if (V('plinth') === 0) S.plinth = DEF.plinth;
    renderInputs(); draw(); }
  else if (d.ctin!==undefined){ S.topIn = d.ctin==='1'; renderInputs(); draw(); }
  else if (d.cshare!==undefined){ $('#conShare').onclick(); return; }
  else if (d.cthru!==undefined){ S.els[+d.cthru].shThru = d.cthruv==='1'; renderInputs(); draw(); }
  else if (d.cpm!==undefined){ const x = S.els[+d.cpm], man = d.pv==='1', t = Math.max(1, V('pt'));
    if (d.pk==='sh'){ x.shM = man; if (man && !Array.isArray(x.shP)) x.shP = autoShelves(x); } else { x.dvM = man; if (man && !Array.isArray(x.dvP)) x.dvP = divOffs(Object.assign({}, x, {dvM:false}), t).map(Math.round); }
    renderInputs(); draw(); }
  else if (d.ctop2){ const on = !anyTop(); S.tops = {}; S.topOn = on; if (on) S.top = true; renderInputs(); draw(); }
  else if (d.cdel!==undefined){ const x = S.els[+d.cdel], nm = String(x && x.n || '').trim();
    ask(L('Odstranim element?','Remove the unit?'), nm ? L(`Element »${nm}« bo izbrisan.`, `The unit “${nm}” will be deleted.`) : '', L('Odstrani','Remove')).then(ok=>{ if (!ok) return; const j = S.els.indexOf(x); if (j >= 0){ S.els.splice(j, 1); if (ED!==null && j < ED) ED--; else if (j===ED) ED = 0; if (SEL===j) SEL = null; else if (SEL!==null && j < SEL) SEL--; } renderInputs(); draw(); }); }
  else if (d.ced!==undefined) openEd(+d.ced);
  else if (d.edfr!==undefined){ EDF = !EDF; draw(); }
  else if (d.edm){ EDM = d.edm; draw(); }
    else if (d.ctop!==undefined){ S.els[+d.ctop].tp = d.ctv; renderInputs(); draw(); }
  else if (d.cbk!==undefined){ S.els[+d.cbk].bk = d.cbv; renderInputs(); draw(); }
  else if (d.czk!==undefined){ S.els[+d.czk].z[+d.czi].k = d.czv; renderInputs(); draw(); }
  else if (d.czdel!==undefined){ const x = S.els[+d.czdel]; x.z.splice(+d.czi, 1); renderInputs(); draw(); }
  else if (d.czadd!==undefined){ const x = S.els[+d.czadd]; if (!x.z) x.z = []; x.z.unshift({k:'door', h:'', n:1}); renderInputs(); draw(); flashFronts(); }   // ena fronta z enimi vrati
  else if (d.czo!==undefined){ const x = S.els[+d.czo], z = x.z[+d.czi], n = zN(x, z); z.os = Array.from({length:n}, (_, j)=>zDoorO(x, z, j, n)); z.os[+d.czd] = z.os[+d.czd]==='L' ? 'R' : 'L'; renderInputs(); draw(); }
  else if (b.id==='conSetT'){ S.setOpen = !setOn(); syncSet(); save(); }
  else if (d.cfr!==undefined){ S.fronts = !S.fronts; draw(); }
  else if (d.ctp!==undefined){ S.top = !S.top; draw(); }
});

/* ---------- postavitev ---------- */
// stranice si sledijo okoli prostora: vsaka naslednja se začne za zadnjim elementom prejšnje.
// L in U: stranica 1 je leva (od spredaj proti kotu), stranica 2 zadnja (od leve proti desni), stranica 3 desna (od kota naprej).
// a = vzdolž stranice, d = globina od stranice; fronta je pred korpusom (d od D do D + debelina fronte)
const ok = e => !!e.t;
const FT = () => V('ft');                      // prostor za fronto je vedno upoštevan, da se plošča in kot ne premikata
const ROLES = {I:{A:'back'}, L:{A:'left', B:'back'}, R:{A:'back', B:'right'}, U:{A:'left', B:'back', C:'right'}, P:{A:'back', P:'front'}, S:{A:'free'}};
const role = w => { if (typeof w==='string' && /^R\d+@/.test(w)){ const r = +w.slice(1, w.indexOf('@')); return isFree() && r===0 ? 'free' : ROT_ROLE[r]; } return ({A:isFree() ? 'free' : 'back', B:'left', C:'right', P:'front', F:'loose', O:'island'})[w]; };
const hasTop = w => !isFree() && (!!S.topOn || !!(S.tops && Object.values(S.tops).some(Boolean)));   // pult je eden za vse strani
const anyTop = () => wallsOf().some(hasTop);
// ---- prostor kot koordinatni sistem: prva stena je os X (z = 0), leva stena os Y (x = 0); element ima položaj, dvig in rotacijo
const ROT_ROLE = {0:'back', 90:'left', 270:'right', 180:'front'};
const rotOf = e => [0,90,180,270].includes(+e.rot) ? +e.rot : 0;
const liftOf = e => Math.max(0, +e.lift || 0), onFloor = e => !(liftOf(e) > 0);
const wallsOn = () => ({});   // sten ni: prostor je samo izhodišče z osema X in Y
// tloris elementa (s prostorom za fronto); px/pz je zadnji vogal na začetku osi
function footOf(e){ const r = rotOf(e), w = wid(e), D = dep(e) + FT(), x = +e.px || 0, z = +e.pz || 0;
  if (r===0) return {x0:x, x1:x + w, z0:z, z1:z + D};
  if (r===90) return {x0:x, x1:x + D, z0:z, z1:z + w};
  if (r===270) return {x0:x - D, x1:x, z0:z, z1:z + w};
  return {x0:x, x1:x + w, z0:z - D, z1:z}; }
function wallPos(){ const f = S.els.filter(ok).map(footOf);
  return {XC: +S.walls.A > 0 ? +S.walls.A : Math.max(600, ...f.map(q=>q.x1)), ZP: +S.walls.B > 0 ? +S.walls.B : Math.max(600, ...f.map(q=>q.z1))}; }
// skupina v seznamu: ob kateri steni element stoji (ali prosto)
function groupOf(e, WP){ return 'A'; const r = rotOf(e), on = wallsOn(), x = +e.px || 0, z = +e.pz || 0;
  if (r===0 && Math.abs(z) < 1) return 'A';
  if (r===90 && on.B && Math.abs(x) < 1) return 'B';
  if (r===270 && on.C && Math.abs(x - WP.XC) < 1) return 'C';
  if (r===180 && on.P && Math.abs(z - WP.ZP) < 1) return 'P';
  return 'F'; }
function layoutRuns(){
  const runs = {list:[]}, WP = wallPos(), on = wallsOn(), ft = FT();
  runs.XC = WP.XC; runs.ZP = WP.ZP; runs.on = on;
  S.els.forEach(e=>{ e.wall = groupOf(e, WP); });
  S.els.forEach((e, i)=>{ if (!ok(e)) return; const r = rotOf(e), B = (r===0 || r===180) ? +e.pz || 0 : +e.px || 0, p = (r===0 || r===180) ? +e.px || 0 : +e.pz || 0, key = `R${r}@${Math.round(B)}`;
    let run = runs[key]; if (!run){ run = runs[key] = {wall:key, role:isFree() && r===0 ? 'free' : ROT_ROLE[r], r, B, lower:[], upper:[], len:0}; runs.list.push(run); }
    run.lower.push(Object.assign({}, e, {p, w:wid(e), D:dep(e), _i:i, rk:key, r})); });
  runs.list.forEach(r=>{ r.lower.sort((a,b)=>a.p - b.p); r.start = Math.min(...r.lower.map(x=>x.p)); r.used = Math.max(...r.lower.map(x=>x.p + x.w)); });
  const place = placeF(runs), all = runs.list.flatMap(r=>r.lower), pl = isFree() ? 0 : V('plinth');
  const yr = c => { const y0 = onFloor(c) ? 0 : liftOf(c), y1 = (onFloor(c) ? pl : liftOf(c)) + hgt(c); return [y0, y1]; };
  const ov = (a, b) => a.x0 < b.x1 - .5 && a.x1 > b.x0 + .5 && a.z0 < b.z1 - .5 && a.z1 > b.z0 + .5;
  const vy = (a, b) => { const [a0, a1] = yr(a), [b0, b1] = yr(b); return a0 < b1 - 1 && a1 > b0 + 1; };
  const FB = c => place(c.rk, c.p, c.p + c.w, 0, c.D + ft), axis = (c, b) => (c.r===0 || c.r===180) ? [b.x0, b.x1] : [b.z0, b.z1];
  const hasFr = c => (c.z || []).some(z=>z.k!=='open');
  const wallAt = (c, a) => (c.r===0 || c.r===180) ? ((on.B && Math.abs(a) < 1) || (on.C && Math.abs(a - WP.XC) < 1)) : ((on.A && Math.abs(a) < 1) || (on.P && Math.abs(a - WP.ZP) < 1));
  all.forEach(c=>{ c.block = 0; c.blockEnd = 0;
    // kot: sosed tik pred fronto zakrije del fronte (slepi kot)
    const fr = place(c.rk, c.p, c.p + c.w, c.D + ft + .5, c.D + ft + 40);
    all.forEach(o=>{ if (o===c || !vy(c, o)) return; const ob = FB(o); if (!ov(fr, ob)) return;
      const [i0, i1] = axis(c, {x0:Math.max(fr.x0, ob.x0), x1:Math.min(fr.x1, ob.x1), z0:Math.max(fr.z0, ob.z0), z1:Math.min(fr.z1, ob.z1)});
      if (i0 <= c.p + 1){ c.block = Math.max(c.block, Math.min(c.w, i1 - c.p)); c.blockFr = hasFr(o); }
      else if (i1 >= c.p + c.w - 1){ c.blockEnd = Math.max(c.blockEnd, Math.min(c.w, c.p + c.w - i0)); c.blockFr = hasFr(o); } });
    // stranici: prosta, ob sosedu ali ob steni
    const s0 = place(c.rk, c.p - 40, c.p - .5, 0, c.D), s1 = place(c.rk, c.p + c.w + .5, c.p + c.w + 40, 0, c.D);
    const h0 = all.filter(o=>o!==c && vy(c, o) && ov(s0, FB(o))), h1 = all.filter(o=>o!==c && vy(c, o) && ov(s1, FB(o)));
    c.open0 = !h0.length && !wallAt(c, c.p); c.open1 = !h1.length && !wallAt(c, c.p + c.w);
    c.c0perp = h0.some(o=>o.r!==c.r); c.c1perp = h1.some(o=>o.r!==c.r); });
  // skupni hrbet velja le za skupine vsaj dveh sosednjih elementov; sam element ima svoj hrbet
  runs.list.forEach(r=>{ let g = []; const flush = ()=>{ g.forEach(c=>{ c.sbOn = g.length > 1; }); g = []; };
    r.lower.forEach(c=>{ const last = g[g.length-1]; if (c.sb && last && Math.abs(last.p + last.w - c.p) < 1 && hgt(last)===hgt(c) && liftOf(last)===liftOf(c)) g.push(c); else { flush(); if (c.sb) g.push(c); else c.sbOn = false; } }); flush(); });
  runs.byRole = {};
  return runs;
}
// lokalne koordinate vrste (a vzdolž, d v globino od hrbta) v prostor
// cokel na koncu, ko geometrija stoji: deska spredaj čez sosednje elemente na tleh, v kotih se stakne, na prostih koncih zavije nazaj
function plinthPieces(R){ const out = [], t = Math.max(1, V('pt')), ft = FT(), pin = V('plinthIn');
  if (isFree() || !(V('plinth') > 0)) return out;
  R.list.forEach(r=>{ let cur = null; const segs = [];
    r.lower.forEach(e=>{ if (e.hide || !onFloor(e)){ cur = null; return; } if (cur && Math.abs(cur.a1 - e.p) < 1){ cur.a1 = e.p + e.w; cur.els.push(e); cur.last = e; } else { cur = {a0:e.p, a1:e.p + e.w, first:e, last:e, els:[e]}; segs.push(cur); } });
    segs.forEach(g=>{
      // cokel je po stranicah elementa (spredaj, zadaj, levo, desno); levo in desno veljata za zunanja konca skupine
      const ret0 = !g.first.block && plOn(g.first, 'l'), ret1 = !g.last.blockEnd && plOn(g.last, 'r');
      let a0 = g.a0, a1 = g.a1;
      if (g.first.block) a0 = g.first.p + g.first.block - pin - t; else if (g.first.c0perp) a0 -= pin; else if (ret0) a0 += pin;
      if (g.last.blockEnd) a1 = g.last.p + g.last.w - g.last.blockEnd + pin + t; else if (g.last.c1perp) a1 += pin; else if (ret1) a1 -= pin;
      const dF = e => Math.max(t, e.D + ft - pin);   // sprednja ploskev cokla elementa
      // zaporedja sosednjih elementov z isto stranico: ena deska
      const runsOf = k => { const rs = []; let c = null; g.els.forEach(e=>{ if (plOn(e, k)){ if (c) { c.e1 = e; c.els.push(e); } else { c = {e0:e, e1:e, els:[e]}; rs.push(c); } } else c = null; }); return rs; };
      const lim = c => ({a0:c.e0===g.first ? a0 : c.e0.p, a1:c.e1===g.last ? a1 : c.e1.p + c.e1.w});
      runsOf('f').forEach(c=>{ const d1 = Math.max(...c.els.map(dF)), d0 = d1 - t, x = lim(c); out.push({wall:r.wall, a0:x.a0, a1:x.a1, d0, d1, r}); });
      const ff = e => plOn(e, 'f');
      if (ret0){ const e = g.first, dEnd = ff(e) ? dF(e) - t : e.D + ft - pin; out.push({wall:r.wall, a0, a1:a0 + t, d0:t, d1:Math.max(dEnd, t + 1), r, ret:true}); }
      if (ret1){ const e = g.last, dEnd = ff(e) ? dF(e) - t : e.D + ft - pin; out.push({wall:r.wall, a0:a1 - t, a1, d0:t, d1:Math.max(dEnd, t + 1), r, ret:true}); } }); });
  return out; }
function placeF(R){ return (wall, a0, a1, d0, d1) => { const run = R[wall]; if (!run) return {x0:a0, x1:a1, z0:d0, z1:d1}; const B = run.B;
  if (run.r===90)  return {x0:B + d0, x1:B + d1, z0:a0, z1:a1};
  if (run.r===270) return {x0:B - d1, x1:B - d0, z0:a0, z1:a1};
  if (run.r===180) return {x0:a0, x1:a1, z0:B - d1, z1:B - d0};
  return {x0:a0, x1:a1, z0:B + d0, z1:B + d1};
}; }
// prenos starih modelov (elementi po stenah) v položaje
function migrateGeo(){
  if (S.geo===2) return; const OR = ROLES[S.layout] || {}, ft = FT(), dOf = e => e ? dep(e) + ft : 0, by = {};
  Object.keys(OR).forEach(k=>{ by[OR[k]] = k; });
  const of = (rl, up) => S.els.filter(e=>e.wall===by[rl] && ok(e) && (up ? e.t==='up' : e.t!=='up'));
  const put = (e, r, B, p) => { e.rot = r; if (r===0 || r===180){ e.px = Math.round(p); e.pz = Math.round(B); } else { e.px = Math.round(B); e.pz = Math.round(p); } };
  const lay = (list, start, r, B) => { let p = start; list.forEach(e=>{ p = Math.max(p, +e.off || 0); put(e, r, B, p); p += wid(e); }); return p; };
  const pl = S.layout==='S' ? 0 : V('plinth'), baseTop = rl => Math.max(720, ...of(rl).filter(e=>hgt(e) < 1200).map(hgt));
  const upLift = (rl, e) => pl + baseTop(rl) + V('topT') + (+e.g > 0 ? +e.g : 550);
  const lL = of('left'), lU = of('left', true), bL = of('back'), bU = of('back', true);
  lay(lL, 0, 90, 0); lay(lU, 0, 90, 0);
  const bEnd = Math.max(lay(bL, lL.length ? dOf(lL[0]) : 0, 0, 0), lay(bU, lU.length ? dOf(lU[0]) : 0, 0, 0));
  const rL = of('right'), rU = of('right', true), W = Math.max(+S.walls[by.back] || 0, bEnd + (rL.length ? dOf(rL[0]) : rU.length ? dOf(rU[0]) : 0));
  lay(rL, 0, 270, W); lay(rU, 0, 270, W);
  const fL = of('front'), fU = of('front', true);
  if (fL.length || fU.length){ const Z = Math.max(0, ...bL.map(dep)) + ft + V('gap') + Math.max(0, ...fL.map(dep)) + ft; lay(fL, 0, 180, Z); lay(fU, 0, 180, Z); }
  lay(of('free'), 0, 0, 0); lay(of('free', true), 0, 0, 0);
  ['left','back','right','front','free'].forEach(rl=>of(rl, true).forEach(e=>{ e.lift = Math.round(upLift(rl==='free' ? 'back' : rl, e)); e.t = 'base'; }));
  S.wallsOn = {B:!!by.left, C:!!by.right, P:!!by.front};
  S.walls = {A:+S.walls[by.back] || '', B:+S.walls[by.left] || ''};
  if (S.layout==='R') S.layout = 'L';
  S.geo = 2;
}
// prosto mesto vzdolž osi: premakni naprej, dokler se ne prekriva z drugim elementom
// pripni: rob elementa k osi (0) ali k robu drugega elementa, če je bližje od 50 mm
function snapEl(e){ const T = 50, f = footOf(e), others = S.els.filter(o=>o!==e && ok(o)).map(footOf), r = rotOf(e);
  const best = (a0, a1, cands) => { let d = null; cands.forEach(c=>[c - a0, c - a1].forEach(v=>{ if (Math.abs(v) < T && (d===null || Math.abs(v) < Math.abs(d))) d = v; })); return d || 0; };
  const dx = best(f.x0, f.x1, [0, ...others.flatMap(g=>[g.x0, g.x1])]), dz = best(f.z0, f.z1, [0, ...others.flatMap(g=>[g.z0, g.z1])]);
  e.px = Math.round((+e.px || 0) + dx); e.pz = Math.round((+e.pz || 0) + dz);
  for (let k=0;k<6;k++){ const g0 = footOf(e); let moved = false;   // majhno prekrivanje (do 50 mm) odrine element ven
    S.els.forEach(o=>{ if (o===e || !ok(o) || Math.abs(liftOf(o) - liftOf(e)) > 1 || moved) return; const g = footOf(o), ox = Math.min(g0.x1, g.x1) - Math.max(g0.x0, g.x0), oz = Math.min(g0.z1, g.z1) - Math.max(g0.z0, g.z0);
      if (ox > .5 && oz > .5 && Math.min(ox, oz) < T){ if (ox <= oz){ const sgn = (g0.x0 + g0.x1) >= (g.x0 + g.x1) ? 1 : -1; e.px = Math.round((+e.px||0) + sgn*ox); } else { const sgn = (g0.z0 + g0.z1) >= (g.z0 + g.z1) ? 1 : -1; e.pz = Math.round((+e.pz||0) + sgn*oz); } moved = true; } });
    if (!moved) break; } }
/* ---------- izometrija ---------- */
const C = Math.cos(Math.PI/6), Sn = Math.sin(Math.PI/6);
// pogled: privzeto izometrija (45°, 35,26°); vlečenje po skici ga zavrti, dvoklik ponastavi
const VIEW = {a:45, p:35.264}, VK = Math.sqrt(1.5);
let vca, vsa, vcp, vsp; const setView = () => { const a = VIEW.a*Math.PI/180, p = VIEW.p*Math.PI/180; vca = Math.cos(a); vsa = Math.sin(a); vcp = Math.cos(p); vsp = Math.sin(p); }; setView();
const PJ = (x,y,z) => [ (x*vca - z*vsa)*VK, (x*vsa + z*vca)*vsp*VK - y*vcp*VK ];
// je fronta stene obrnjena proti gledalcu
const faceVis = rl => rl==='left' ? vsa > 0 : rl==='right' ? vsa < 0 : (rl==='front' || rl==='island') ? vca < 0 : vca > 0;
let OBJN = '', OBJB = [], BOUNDS = [], STROKE = '#161616', F = ['#fff','#fff','#fff'], FTOP = F;
const pts = a => { BOUNDS.push(...a); return a.map(p=>p[0].toFixed(1)+','+p[1].toFixed(1)).join(' '); };
function poly(a, fill, sw=1, stroke=STROKE){ return `<polygon points="${pts(a)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`; }
function ln(a, b, sw=1, col=STROKE){ return `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`; }
function box(b, y0, y1, f=F){
  const {x0,x1,z0,z1} = b; OBJB.push([x0,x1,y0,y1,z0,z1,OBJN]);
  const top = [PJ(x0,y1,z0),PJ(x1,y1,z0),PJ(x1,y1,z1),PJ(x0,y1,z1)];
  const xf = vsa >= 0 ? x1 : x0, zf = vca >= 0 ? z1 : z0;   // vidni ploskvi glede na smer pogleda
  const front = [PJ(x0,y0,zf),PJ(x1,y0,zf),PJ(x1,y1,zf),PJ(x0,y1,zf)];
  const side = [PJ(xf,y0,z0),PJ(xf,y0,z1),PJ(xf,y1,z1),PJ(xf,y1,z0)];
  const dm = [x1-x0, y1-y0, z1-z0].map(v=>Math.round(v*10)/10).sort((a,b)=>b-a).join(' × ');
  return `<g class="pc" data-dm="${dm}">` + poly(side, f[2]) + poly(front, f[1]) + poly(top, f[0]) + `</g>`;   // en kos; ob prehodu miške se obarvajo njegovi robovi, prikažejo se mere
}
// slikarjev vrstni red za škatle brez prekrivanj: gledalec je pri +x, +y, +z
function sortBoxes(L){
  const ep = .01, before = (A, Bx) => (vsa >= 0 ? A.b.x1 <= Bx.b.x0 + ep : A.b.x0 >= Bx.b.x1 - ep) || (vca >= 0 ? A.b.z1 <= Bx.b.z0 + ep : A.b.z0 >= Bx.b.z1 - ep) || A.y1 <= Bx.y0 + ep;
  const n = L.length, inc = new Array(n).fill(0), out = L.map(()=>[]);
  for (let i=0;i<n;i++) for (let j=0;j<n;j++) if (i!==j && before(L[i], L[j]) && !before(L[j], L[i])){ out[i].push(j); inc[j]++; }
  const res = [], done = new Array(n).fill(false);
  while (res.length < n){ let k = -1; for (let i=0;i<n;i++) if (!done[i] && !inc[i]){ k = i; break; } if (k < 0) k = done.indexOf(false);
    done[k] = true; res.push(L[k]); out[k].forEach(j=>inc[j]--); }
  return res;
}
// nič v minus: če gre kateri element v negativno os, se premakne cela postavitev (razmerja ostanejo)
// tloris z zaključnimi kosi in maskami (za preverjanje negativnih osi)
function footFull(e){ const f = Object.assign({}, footOf(e)), r = rotOf(e), e0 = (epOn(e, 0) ? FT() : 0) + (e.mk0 ? mkW(e) : 0), e1 = (epOn(e, 1) ? FT() : 0) + (e.mk1 ? mkW(e) : 0);
  if (r===0 || r===180){ f.x0 -= e0; f.x1 += e1; } else { f.z0 -= e0; f.z1 += e1; } return f; }
function normalizeEls(){ const f = S.els.filter(ok).map(footFull); if (!f.length) return false; const mx = Math.min(...f.map(q=>q.x0)), mz = Math.min(...f.map(q=>q.z0)); let ch = false;
  if (mx < -.5){ S.els.forEach(e=>{ e.px = Math.round((+e.px||0) - mx); }); ch = true; } if (mz < -.5){ S.els.forEach(e=>{ e.pz = Math.round((+e.pz||0) - mz); }); ch = true; } return ch; }
function draw(){
  normalizeEls();
  track(); save(); syncExport();
  const walls = wallsOf();
  if (!walls.length || !S.els.some(ok)){
    $('#conStage').innerHTML = `<div class="empty">${!walls.length ? 'Izberi postavitev' : 'Dodaj element'}</div>`;
    renderRes(null); return;
  }
  const R = layoutRuns(), runs = R.list; let place = placeF(R);
  const solid = true; const t = Math.max(1, V('pt')), ft = FT();
  STROKE = solid ? '#EDEDEA' : '#161616';
  F = solid ? ['#1B1B1A','#161616','#232322'] : ['#fff','#fff','#fff'];
  FTOP = F;
  const pl = isFree() ? 0 : V('plinth'), tt = V('topT'), over = V('topOver');
  const baseTop = r => Math.max(720, ...r.lower.filter(e=>!isTall(e)).map(hgt));
  BOUNDS = []; OBJB = []; const G3 = []; let svg = '';
  // tloris na tleh
  // stene se v skici ne rišejo; njihove mere so samo omejitev za elemente
  const HID = [];
  const edges = (b, y0, y1) => { const {x0,x1,z0,z1} = b, c = [[x0,z0],[x1,z0],[x1,z1],[x0,z1]], out = [];
    for (let k=0;k<4;k++){ const [ax,az] = c[k], [bx,bz] = c[(k+1)%4]; out.push([PJ(ax,y0,az),PJ(bx,y0,bz)],[PJ(ax,y1,az),PJ(bx,y1,bz)],[PJ(ax,y0,az),PJ(ax,y1,az)]); }
    return out; };
  const pb = (wall, a0,a1,d0,d1,y0,y1,f=F) => box(place(wall, a0, a1, d0, d1), y0, y1, f);
  // zaključni kos do tal, maska in njen distančnik: ločeni kosi [a0, a1, d0, d1, y0, y1]
  const extras = (e, y0, y1) => { const a0 = e.p, a1 = e.p + e.w, D = e.D, yb = onFloor(e) ? 0 : y0, mw = mkW(e), e0 = epOn(e, 0) && e.open0, e1 = epOn(e, 1) && e.open1, o = [];
    if (e0) o.push([a0 - ft, a0, 0, D + ft, yb, y1]); if (e1) o.push([a1, a1 + ft, 0, D + ft, yb, y1]);
    if (e.mk0 && e.open0 && mw > 0){ o.push([a0 - mw, a0, D, D + ft, yb, y1], [a0 - t, a0, D - 80, D, yb, y1]); }
    if (e.mk1 && e.open1 && mw > 0){ o.push([a1, a1 + mw, D, D + ft, yb, y1], [a1, a1 + t, D - 80, D, yb, y1]); }
    return o; };
  const unit = (wall, e, y0, y1, topVisible) => {
    const a0 = e.p, a1 = e.p + e.w, D = e.D;
    if (!solid) HID.push(...edges(place(wall, a0, a1, 0, D), y0, y1), ...edges(place(wall, a0+t, a1-t, t, D), y0+t, y1-t));
    const on = e.tp==='on', bin = e.bk!=='over' && !e.sbOn, B = [], add = (a,b,d0,d1,ya,yb,f=F,tag) => B.push({b:place(wall, a, b, d0, d1), y0:ya, y1:yb, f, d1, tag, nm:OBJN}), U = `${L('Element','Unit')} ${letterOf(e._i)}`, nm = x => { OBJN = `${U} · ${x}`; };
    const ys1 = on ? y1 - t : y1, dS = bin ? 0 : t;                       // stranici: pod stropom, če je strop čez; od zadaj, če je hrbet med njima
    nm(L('hrbet','back')); if (e.sbOn){} else if (bin) add(a0+t, a1-t, 0, t, y0+t, y1-t); else add(a0, a1, 0, t, y0, on ? y1-t : y1);   // hrbet: med stranicama stoji na dnu; skupni hrbet nariše vrsta
    nm(L('stranica','side')); add(a0, a0+t, dS, D, y0, ys1); add(a1-t, a1, dS, D, y0, ys1);         // stranici
    nm(L('dno','bottom')); add(a0+t, a1-t, bin ? 0 : t, D, y0, y0+t);                             // dno: pri hrbtu med stranicama čez celo globino
    nm(L('strop','top')); if (on) add(a0, a1, 0, D, y1-t, y1); else add(a0+t, a1-t, bin ? 0 : t, D, y1-t, y1);   // strop ima prednost: pokrije tudi hrbet
    const inW = e.w - 2*t, zs = zonesOf(e, y1 - y0);   // s predali ni pregrad
    zs.forEach((z, k)=>{ const zb = zoneBox(zs, k, y0, y1, t);
      nm(L('fiksna polica','fixed shelf')); if (zb.pBelow && zb.y0 > y0 + t) add(a0+t, a1-t, t, D, zb.y0 - t/2, zb.y0 + t/2);                         // fiksna polica med deli
      if (z.k==='drawer'){                                                                                     // predal: odprta škatla za fronto
        const db = drBoxOf(e, z, t), bt = t, bx0 = a0 + t + db.R.side, bx1 = a1 - t - db.R.side, dB = D - 2, dA = Math.max(t + 2, dB - db.boxL), by0 = zb.i0 + Math.max(5, db.R.bottom), by1 = Math.min(zb.i1 - 5, by0 + Math.max(40, db.hb));
        nm(`${L('predal','drawer')} ${k+1}`); if (bx1 - bx0 > 3*bt && dB - dA > 3*bt){ add(bx0, bx0+bt, dA, dB, by0, by1, F, 'n'); add(bx1-bt, bx1, dA, dB, by0, by1, F, 'n'); add(bx0+bt, bx1-bt, dA, dA+bt, by0, by1, F, 'n'); add(bx0+bt, bx1-bt, dB-bt, dB, by0, by1, F, 'n'); add(bx0+bt, bx1-bt, dA+bt, dB-bt, by0, by0+8, F, 'n'); }
        return; }
      const io = interiorOf(e, zoneBox(zs, k, 0, y1 - y0, t), t);   // pregrade in police: enakomerno ali na svoji poziciji, stik po izbiri
      nm(L('pregrada','divider')); io.dv.forEach(q=>{ const a = a0 + t + q.a; add(a, a + t, t, D - 20, y0 + q.y0, y0 + q.y1); });
      nm(L('polica','shelf')); io.sh.forEach(q=>{ add(a0 + t + q.a0, a0 + t + q.a1, t, D - 20, y0 + q.y, y0 + q.y + t); });   // police med pregradami
    });
    // zaključni kosi in maske so ločeni kosi v risanju (extras), da jih cokel pravilno prekriva
    let s = '';
    // kotno polnilo: del pred kotnim elementom, ki ga zapira sosednji element
    const ownFr = (e.z||[]).some(z=>z.k!=='open');   // kotno polnilo samo, če ima element fronte
    nm(L('kotno polnilo','corner filler')); if (e.block) add(a0, a0 + e.block - (ownFr && S.fronts && e.blockFr ? 0 : ft), D, D + ft, y0, y1);   // kotno polnilo vedno zapre režo med kotnim in sosednjim elementom          // kotno polnilo je v ravnini front: brez front ga ni, sicer štrli in podvoji robove
    if (e.blockEnd) add(a1 - e.blockEnd + (S.fronts ? 0 : ft), a1, D, D + ft, y0, y1);
    if (S.fronts){
      const f0 = a0 + (e.block||0), fw = a1 - (e.blockEnd||0) - f0;            // del fronte, ki ga zapira sosednji element, ostane brez fronte
      if (fw > 20){ const nA = doorsOf(e, fw), gp = V('fgap'), fg = gp/2, rl = role(wall), vis = faceVis(rl), leftIsA0 = wall==='ED' ? EDLA0 : lA0f(rl);
        const pt = (a, y) => { const b = place(wall, a, a, D + ft, D + ft); return PJ(b.x0, y, b.z0); };
        zs.forEach((z, k)=>{ const zb = zoneBox(zs, k, y0, y1, t), zy0 = zb.y0 + fg, zy1 = zb.y1 - fg;
          if (z.k==='open' || zy1 - zy0 < 10) return;
          const n = z.n || nA;
          if (z.k==='drawer'){ nm(`${L('čelo predala','drawer front')} ${k+1}`); add(f0 + fg, f0 + fw - fg, D, D + ft, zy0, zy1);
            return; }
          for (let i=0;i<n;i++){
            const hingeL = zDoorO(e, (e.z||[])[k], i, n)==='L', atA0 = hingeL===leftIsA0;
            let fa0 = f0 + fw*i/n, fa1 = f0 + fw*(i+1)/n;
            if (n===1){ if (atA0) fa1 -= gp; else fa0 += gp; }                     // fronta je krajša na strani odpiranja, tečaji ostanejo poravnani
            else { fa0 += fg; fa1 -= fg; }
            nm(`${L('vrata','door')} ${k+1}${n > 1 ? '.' + (i+1) : ''}`); add(fa0, fa1, D, D + ft, zy0, zy1);
            if (vis){                                                                  // smer odpiranja: vrh trikotnika je na strani tečajev
              const ha = atA0 ? fa0 : fa1, oa = atA0 ? fa1 : fa0, ym = (zy0 + zy1)/2, ins = Math.min(20, (zy1 - zy0)/4);
              const oc = 'rgba(237,237,234,.38)'; s += ln(pt(oa, zy1 - ins), pt(ha, ym), .6, oc) + ln(pt(oa, zy0 + ins), pt(ha, ym), .6, oc); } }
        }); }
    }
    if (e.z && e.z.length && faceVis(role(wall))){                 // številka fronte kot v seznamu
      const zs2 = zonesOf(e, y1 - y0);
      const lA0 = wall==='ED' ? EDLA0 : lA0f(role(wall)), f0 = a0 + (e.block||0), f1 = a1 - (e.blockEnd||0), zo2 = zOff(e._i), zl2 = zLabels(e, zo2);
      zs2.forEach((z, k)=>{ const zb = zoneBox(zs2, k, y0, y1, t), r = Math.max(17*NUMS, Math.min(32*NUMS, (zb.y1 - zb.y0)/5)), off = r + 24*NUMS, ac = lA0 ? f0 + off : f1 - off;
        const b = place(wall, ac, ac, D + ft, D + ft), q = PJ(b.x0, zb.y1 - off, b.z0), cx = q[0].toFixed(1), cy = q[1].toFixed(1);
        s += `<circle cx="${cx}" cy="${cy}" r="${r.toFixed(1)}" fill="#fff" stroke="#161616" stroke-width="1.5" vector-effect="non-scaling-stroke"/>`
          + `<text x="${cx}" y="${cy}" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="${(r*.95).toFixed(1)}" font-weight="500" text-anchor="middle" dy=".35em" fill="#161616">${zl2[k]}</text>`; }); }
    // v urejevalniku je robni trak označen na čelih (korpus spredaj, fronte vsi robovi)
    const bandC = (e.eb||'front')!=='none', bandF = (e.fb||'all')!=='none';
    const band = x => { if (!EDB || x.tag==='n' || vca <= 0) return ''; const isF = x.tag==='f' || x.d1 >= D + ft - .5; if (isF ? !bandF : !(bandC && x.d1 >= D - 20.5)) return '';
      const {x0,x1} = x.b, z = x.b.z1; return `<polygon points="${[PJ(x0,x.y0,z),PJ(x1,x.y0,z),PJ(x1,x.y1,z),PJ(x0,x.y1,z)].map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' ')}" fill="none" stroke="#F5C400" stroke-width="1.6" vector-effect="non-scaling-stroke"/>`; };
    return sortBoxes(B).map(x=>{ OBJN = x.nm; return box(x.b, x.y0, x.y1, x.f); }).join('') + s;   // od daljnega do bližnjega, puščice odpiranja na vrhu
  };
  // cokli: neprekinjen kos pod sosednjimi elementi, v kotu se stakne s coklom naslednje stene
  // vse (cokli, elementi, pult) gre v en seznam, ki se uredi od daljnega do bližnjega za vsak zasuk pogleda
  const DL = [], dl = (wall, a0, a1, d0, d1, y0, y1, html) => DL.push({b:place(wall, a0, a1, d0, d1), y0, y1, html});
  // tla: stene kot črte in tloris elementov, da ne lebdijo (ne vpliva na okvir pogleda)
  const fl = (a, b, col, w) => `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`;
  const WLc = solid ? 'rgba(22,22,22,.55)' : 'rgba(22,22,22,.35)', FPc = 'rgba(22,22,22,.18)';
  // stene: prva (z = 0) in leva (x = 0) sta koordinatni osi; desna in vzporedna ju omejita; brez vpisane širine gredo do roba skice
  const BIG = 60000, ON = R.on, XC = R.XC, ZP = R.ZP;
  if (ON.A) svg += fl(PJ(ON.B ? 0 : -BIG, 0, 0), PJ(ON.C ? XC : (+S.walls.A > 0 ? +S.walls.A : BIG), 0, 0), WLc, 1.2);
  if (ON.B) svg += fl(PJ(0, 0, 0), PJ(0, 0, ON.P ? ZP : (+S.walls.B > 0 ? +S.walls.B : BIG)), WLc, 1.2);
  if (ON.C) svg += fl(PJ(XC, 0, 0), PJ(XC, 0, ON.P ? ZP : (+S.walls.B > 0 ? +S.walls.B : BIG)), WLc, 1.2);
  if (ON.P) svg += fl(PJ(ON.B ? 0 : -BIG, 0, ZP), PJ(ON.C ? XC : BIG, 0, ZP), WLc, 1.2);
  const y0of = e => onFloor(e) ? pl : liftOf(e);
  runs.forEach(r=>r.lower.filter(e=>!e.hide && onFloor(e)).forEach(e=>{ const b = place(r.wall, e.p, e.p + e.w, 0, e.D + (S.fronts ? ft : 0));   // tloris sledi vidnemu: fronte le, ko so prikazane
    svg += `<polygon points="${[[b.x0,b.z0],[b.x1,b.z0],[b.x1,b.z1],[b.x0,b.z1]].map(([x,z])=>PJ(x,0,z)).map(q=>q[0].toFixed(1)+','+q[1].toFixed(1)).join(' ')}" fill="none" stroke="${FPc}" stroke-width=".5" vector-effect="non-scaling-stroke"/>`; }));
  plinthPieces(R).forEach(q=>dl(q.wall, q.a0, q.a1, q.d0, q.d1, 0, pl, ()=>{ OBJN = L('Cokel','Plinth'); return pb(q.wall, q.a0, q.a1, q.d0, q.d1, 0, pl, FTOP); }));
  // črka elementa nad njim; je del skupine elementa, zato jo bližnji elementi prekrijejo
  const underTop = (r, e) => S.top && tt > 0 && SEL===null && onFloor(e) && hasTop(r.wall) && !isTall(e);
  const letterSvg = (r, e) => { const rr = 32, b = place(r.wall, e.p, e.p + e.w, 0, e.D), yt = y0of(e) + hgt(e) + (onFloor(e) && hasTop(r.wall) && !isTall(e) ? tt : 0), lt = ''; if (!lt) return '';
    const q = PJ((b.x0+b.x1)/2, yt + rr*1.15/(vcp*VK), (b.z0+b.z1)/2);
    return `<g class="ul${e._i===SEL ? ' sel' : ''}" data-ul="${e._i}"><circle cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="${rr}" fill="#fff" stroke="#161616" stroke-width="1" vector-effect="non-scaling-stroke"/><text x="${q[0].toFixed(1)}" y="${q[1].toFixed(1)}" font-size="${rr}" font-weight="600" text-anchor="middle" dy=".35em" fill="#161616">${lt}</text></g>`; };
  const items = [];
  runs.forEach(r=>{ r.lower.filter(e=>!e.hide).forEach(e=>items.push({e, r})); });
  for (const {e, r} of items){
    const x0 = 0, x1 = 0, y0 = y0of(e);
    extras(e, y0, y0 + hgt(e)).forEach(q=>dl(r.wall, q[0], q[1], q[2], q[3], q[4], q[5], ()=>{ OBJN = `${L('Element','Unit')} ${letterOf(e._i)} · ${q[3] - q[2] > 100 && q[1] - q[0] <= ft + .5 ? L('zaključni kos','end panel') : q[3] - q[2] <= 80.5 && q[2] > 0 && q[3] - q[2] > ft + .5 ? L('distančnik maske','filler spacer') : L('zaključna maska','filler')}`; return pb(r.wall, q[0], q[1], q[2], q[3], q[4], q[5]); }));
    dl(r.wall, e.p - x0, e.p + e.w + x1, e.sbOn ? t : 0, e.D + ft, y0, y0 + hgt(e), ()=>`<g class="u${e._i===SEL ? ' sel' : ''}" data-ui="${e._i}">${unit(r.wall, e, y0, y0 + hgt(e), isTall(e))}${underTop(r, e) ? '' : letterSvg(r, e)}</g>`);
  }
  // zgornja plošča v enem kosu, previs vedno od fronte
  if (S.top && tt > 0 && SEL===null) runs.forEach(r=>{ if (!hasTop(r.wall)) return;   // pult se skrije, ko je izbran element
    const segs = []; let cur = null;
    r.lower.forEach(e=>{ if (isTall(e) || e.hide || !onFloor(e)){ cur = null; return; } if (cur && Math.abs(cur.a1 - e.p) < 1){ cur.a1 = e.p + e.w; cur.D = Math.max(cur.D, e.D); cur.H = Math.max(cur.H, hgt(e)); } else { cur = {a0:e.p, a1:e.p + e.w, D:e.D, H:hgt(e), first:e}; segs.push(cur); } cur.last = e; });
    segs.forEach(g=>{
      let a0 = g.a0 - topExt(g.first, 0), a1 = g.a1 + topExt(g.last, 1);   // pult čez zaključni kos in masko
      if (a1 > a0) dl(r.wall, a0, a1, 0, g.D + ft + over, pl + g.H, pl + g.H + tt, ()=>(OBJN = L('Pult','Worktop'), pb(r.wall, a0, a1, 0, g.D + ft + over, pl + g.H, pl + g.H + tt, FTOP)) + r.lower.filter(x=>!x.hide && underTop(r, x) && x.p >= g.a0 - .5 && x.p + x.w <= g.a1 + .5).map(x=>letterSvg(r, x)).join(''));   // črke nad pultom
    });
  });
  // skupni hrbet: sosednji elementi v vrsti z isto višino in dvigom dobijo en hrbet čez vse
  runs.forEach(r=>{ let g = null; const gs = []; r.lower.forEach(e=>{ if (e.hide || !e.sbOn){ g = null; return; } if (g && Math.abs(g.a1 - e.p) < 1 && hgt(e)===g.H && y0of(e)===g.y0){ g.a1 = e.p + e.w; } else { g = {a0:e.p, a1:e.p + e.w, H:hgt(e), y0:y0of(e)}; gs.push(g); } });
    gs.forEach(g=>dl(r.wall, g.a0, g.a1, 0, t, g.y0, g.y0 + g.H, ()=>{ OBJN = L('Skupni hrbet','Shared back'); return pb(r.wall, g.a0, g.a1, 0, t, g.y0, g.y0 + g.H); })); });
  svg += sortBoxes(DL).map(x=>x.html()).join('');
  // črke elementov nad njimi (vedno na vrhu, ne prekrivajo jih drugi elementi)
  if (!solid) svg += HID.map(([a,b])=>`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="rgba(22,22,22,.3)" stroke-width=".6" stroke-dasharray="4 4" vector-effect="non-scaling-stroke"/>`).join('');
  // okvir pogleda vedno upošteva fronte in pult, da se model ob vklopu ne premakne
  runs.forEach(r=>{ const ghost = (e, ya, yb, dd) => { const b = place(r.wall, e.p, e.p + e.w, 0, dd); [b.x0,b.x1].forEach(x=>[b.z0,b.z1].forEach(z=>{ BOUNDS.push(PJ(x, ya, z), PJ(x, yb, z)); G3.push([x, ya, z], [x, yb, z]); })); };
    r.lower.filter(e=>!e.hide).forEach(e=>{ const tp = onFloor(e) && hasTop(r.wall) && !isTall(e); ghost(e, onFloor(e) ? 0 : liftOf(e), (onFloor(e) ? Math.max(pl, DEF.plinth) : y0of(e)) + hgt(e) + (tp ? tt : 0), e.D + ft + (tp ? over : 0)); }); });
  // okvir pogleda je neodvisen od zasuka: krog okoli tlorisa in višina, zato model pri vrtenju ohrani velikost
  OBJB.forEach(([x0,x1,y0,y1,z0,z1])=>G3.push([x0,y0,z0],[x1,y1,z1]));
  const mn = k => Math.min(...G3.map(q=>q[k])), mx = k => Math.max(...G3.map(q=>q[k])), pad = 140;
  const cx = (mn(0)+mx(0))/2, cy = (mn(1)+mx(1))/2, cz = (mn(2)+mx(2))/2, Rh = Math.hypot(mx(0)-mn(0), mx(2)-mn(2))/2, Hh = (mx(1)-mn(1))/2;
  const c0 = PJ(cx, cy, cz), hw = Rh*VK*1.12, hh = (Rh*vsp + Hh*vcp)*VK*1.12;   // malo zraka okoli modela
  const vb = VBL && VBL.a===VIEW.a ? VBL.vb : [c0[0]-hw-pad, c0[1]-hh-pad, 2*(hw+pad), 2*(hh+pad)];   // med premikanjem elementa se skica ne poveča ali zmanjša
  LASTVB = vb;
  const shown = S.els.filter(ok).length;
  $('#conStage').innerHTML = `<span class="stools l">${!anyTop() ? '' : `<button data-ctp="1" class="rbtn${S.top?' on':''}" data-tip="Pult">${I.top}</button>`}</span><span class="stools b"><button data-cfr="1" class="rbtn${S.fronts?' on':''}" data-tip="${L('Fronte','Fronts')}" aria-label="${L('Pokaži ali skrij fronte','Show or hide fronts')}">${I.fronts}</button><button class="rbtn" data-cshare="1" data-tip="${L('Deli skico','Share the sketch')}" aria-label="${L('Deli skico','Share the sketch')}">${I.camera}</button></span><svg viewBox="${vb.map(v=>v.toFixed(0)).join(' ')}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
  renderRes(R);
  // Hitri model: ločene skice elementa (nekdanje dodatno okno) ni več; urejanje je ob glavni skici v istem oknu
}

/* ---------- povzetek ---------- */
function renderRes(R){
  const r = (k, v, cls='') => `<div class="r ${cls}"><span>${k}</span><b>${v}</b></div>`;
  const runs = R ? R.list : [];
  const lower = runs.flatMap(x=>x.lower), upper = runs.flatMap(x=>x.upper);
  if (!lower.length && !upper.length){ $('#conRes').innerHTML = ''; return; }
  const all = lower.concat(upper), fps = all.map(e=>R.list.length ? placeF(R)(e.rk, e.p, e.p + e.w, 0, e.D + FT()) : null).filter(Boolean);
  const bx0 = Math.min(...fps.map(f=>f.x0)), bx1 = Math.max(...fps.map(f=>f.x1)), bz0 = Math.min(...fps.map(f=>f.z0)), bz1 = Math.max(...fps.map(f=>f.z1));
  const ov = V('topOver'), cm = v => Math.round(v/10), m = v => (v/1000).toFixed(2).replace('.',',') + ' m';
  const floorEls = all.filter(onFloor), topLen = anyTop() ? floorEls.filter(e=>!isTall(e)).reduce((a,e)=>a+e.w,0) : 0, plinthLen = floorEls.reduce((a,e)=>a+e.w,0);
  let hinges = 0, slides = 0; const tooHigh = [];
  all.forEach(e=>{ const H = hgt(e), zs = zonesOf(e, H); zs.forEach(z=>{ if (z.k==='door') hinges += (z.n || doorsOf(e))*(z.h > 1400 ? 4 : 2); if (z.k==='drawer') slides++; });
    if (zs.reduce((a,z)=>a + z.h, 0) > H + 1) tooHigh.push(e.n || 'element'); });
  const pl0 = isFree() ? 0 : V('plinth'), topOn = anyTop();
  const hTot = Math.max(0, ...all.map(e=>(onFloor(e) ? pl0 : liftOf(e)) + hgt(e) + (onFloor(e) && topOn && !isTall(e) ? V('topT') : 0)));
  const lenA = +S.walls.A || 0, lenB = +S.walls.B || 0, freeA = lenA ? lenA - bx1 : null, freeB = lenB ? lenB - bz1 : null;
  const lifted = all.filter(e=>!onFloor(e)).length;
  // status: nič ne sme v negativno (za steno) in elementi se ne smejo prekrivati
  const yr = e => { const y0 = onFloor(e) ? 0 : liftOf(e); return [y0, (onFloor(e) ? pl0 : liftOf(e)) + hgt(e)]; }, PF = placeF(R);
  const fp = all.map(e=>({e, f:PF(e.rk, e.p, e.p + e.w, 0, e.D + FT()), y:yr(e)})), bad = new Set(), msgs = [];
  fp.forEach(a=>{ if (a.f.x0 < -.5 || a.f.z0 < -.5){ bad.add(a.e._i); msgs.push(`${letterOf(a.e._i)} ${L('v negativni osi','in the negative axis')}`); } });
  fp.forEach((a, k)=>fp.slice(k + 1).forEach(b=>{ const ovl = a.f.x0 < b.f.x1 - .5 && a.f.x1 > b.f.x0 + .5 && a.f.z0 < b.f.z1 - .5 && a.f.z1 > b.f.z0 + .5 && a.y[0] < b.y[1] - .5 && a.y[1] > b.y[0] + .5;
    if (ovl){ bad.add(a.e._i); bad.add(b.e._i); msgs.push(`${letterOf(a.e._i)}–${letterOf(b.e._i)} ${L('se prekrivata','overlap')}`); } }));
  dlg.querySelectorAll('.elb').forEach(x=>x.classList.toggle('err', bad.has(+x.dataset.elb)));
  // podatkov pod skico ni več; ostanejo le opozorila
  $('#conRes').innerHTML = (msgs.length ? r('Status', msgs.join(' · '), 'bad') : '')
    + (S.els.some(x=>!x.hide && hgt(x) > maxH(x) + .5) ? r('Višina', `višje od prostora: ${S.els.filter(x=>!x.hide && hgt(x) > maxH(x) + .5).map(x=>x.n || 'element').join(', ')}`, 'bad') : '')
    + (tooHigh.length ? r('Fronte', `višje od elementa: ${tooHigh.join(', ')}`, 'bad') : '');
}
window.openCon = ()=>{ ED = 0; SEL = null; if (!P.con) P.con = freshS(); S = P.con; (S.els||[]).forEach(e=>{ if (e.hide) e.hide = false; }); if (S.layout && S.geo!==2) migrateGeo(); S.geo = 2; S.layout = 'X'; if (!S.zv){ S.els.forEach(e=>{ if (!e.z || !e.z.length) e.z = [{k:'door', h:''}]; }); S.zv = 1; } HIST = []; lastJ = JSON.stringify(S); syncCU(); S.els.forEach(e=>{ if (e.t==='tall'){ e.t = 'base'; if (!(+e.h > 0)) e.h = 2100; } }); if (!S.els.length) S.els.push(newEl()); lastJ = JSON.stringify(S); renderInputs(); syncSet(); draw(); HIST = []; lastJ = JSON.stringify(S); syncCU(); dlg.showModal(); };   // vse možnosti so takoj vidne, ime ni obvezno
$('#conDone').onclick = ()=>dlg.close();
$('#conUndo').onclick = ()=>window.conUndo();
{ const st = $('#conStage'); let drag = null;
  // skica se samo vrti; elementov ni mogoče premikati, klik na kos ne sproži ničesar (kos se ob prehodu miške obarva s CSS)
  st.addEventListener('pointerdown', ev=>{ if (ev.button!==0 || ev.target.closest('button') || !st.querySelector(':scope > svg')) return;
    drag = {x:ev.clientX, y:ev.clientY, a:VIEW.a, p:VIEW.p}; try { st.setPointerCapture(ev.pointerId); } catch(_){} st.classList.add('rot'); });
  st.addEventListener('pointermove', ev=>{ if (!drag) return; let na = drag.a - (ev.clientX - drag.x)*.4; na = Math.round(na/9)*9;   // koraki po 9° (45° je večkratnik, zato so standardni pogledi vedno dosegljivi)
    na = (na % 360 + 360) % 360; if (na!==VIEW.a){ VIEW.a = na; setView(); draw(); } });
  // swipe levo/desno na sledilni ploščici vrti skico enako kot vlečenje (navpično drsenje ostane brez učinka)
  let wa = null, wl = null;
  st.addEventListener('wheel', ev=>{ if (!st.querySelector(':scope > svg') || Math.abs(ev.deltaX) <= Math.abs(ev.deltaY)) return; ev.preventDefault();
    if (wa===null || wl!==VIEW.a) wa = VIEW.a; wa += ev.deltaX*.4; const na = ((Math.round(wa/9)*9) % 360 + 360) % 360; if (na!==VIEW.a){ VIEW.a = na; wl = na; setView(); draw(); } }, {passive:false});
  const end = ()=>{ drag = null; st.classList.remove('rot'); };
  st.addEventListener('pointerup', end); st.addEventListener('pointercancel', end);
  st.addEventListener('dblclick', ev=>{ if (ev.target.closest('button')) return; VIEW.a = 45; VIEW.p = 35.264; setView(); draw(); }); }
// prehod čez element na skici označi njegovo kartico na levi
{ const st = $('#conStage'); let cur = null;
  const mark = i => { st.querySelectorAll('g.ul.hov').forEach(x=>x.classList.remove('hov')); if (i!==null){ const u = st.querySelector(`g.ul[data-ul="${i}"]`); if (u) u.classList.add('hov'); }
    if (cur!==null){ const c = dlg.querySelector(`#conWalls [data-cn="${cur}"]`); if (c && c.closest('.el')) c.closest('.el').classList.remove('hl'); }
    cur = i; if (i!==null){ const c = dlg.querySelector(`#conWalls [data-cn="${i}"]`); if (c && c.closest('.el')) c.closest('.el').classList.add('hl'); } };
  st.addEventListener('mouseover', ev=>{ const g = ev.target.closest && (ev.target.closest('g.u') || ev.target.closest('g.ul')); mark(g ? +(g.dataset.ui ?? g.dataset.ul) : null); });
  st.addEventListener('mouseleave', ()=>{ mark(null); pcOff(); });
  // kos pod miško: vsi robovi enake debeline (kopija nad skico) in mere kosa ob kazalcu
  const pcOff = ()=>{ const o = st.querySelector('#pcov'); if (o) o.remove(); const t = st.querySelector('.pcdim'); if (t) t.remove(); cp = null; };
  let cp = null;
  st.addEventListener('mouseover', ev=>{ const pc = ev.target.closest && ev.target.closest('g.pc'); if (pc===cp) return; pcOff(); if (!pc || st.classList.contains('rot')) return; cp = pc;
    const sv = pc.ownerSVGElement, ov = document.createElementNS('http://www.w3.org/2000/svg', 'g'); ov.id = 'pcov'; ov.setAttribute('pointer-events', 'none');
    pc.querySelectorAll('polygon').forEach(p=>{ const q = document.createElementNS('http://www.w3.org/2000/svg', 'polygon'); q.setAttribute('points', p.getAttribute('points')); q.setAttribute('fill', 'none'); q.setAttribute('stroke', '#F5C400'); q.setAttribute('stroke-width', '2.6'); q.setAttribute('stroke-linejoin', 'round'); q.setAttribute('vector-effect', 'non-scaling-stroke'); ov.appendChild(q); });
    sv.appendChild(ov);
    const t = document.createElement('span'); t.className = 'mvpos pcdim'; t.textContent = pc.dataset.dm + ' mm'; st.appendChild(t); mvTip(ev); });
  const mvTip = ev=>{ const t = st.querySelector('.pcdim'); if (!t) return; const r = st.getBoundingClientRect(); t.style.left = (ev.clientX - r.left + 14) + 'px'; t.style.top = (ev.clientY - r.top + 14) + 'px'; };
  st.addEventListener('mousemove', mvTip);
  const wl = $('#conWalls'); let cg = null;
  wl.addEventListener('mouseover', ev=>{ const el = ev.target.closest && ev.target.closest('.el'), c = el && el.querySelector('[data-cn]'), i = c ? c.dataset.cn : null;
    if (cg) cg.classList.remove('hov'); st.querySelectorAll('g.ul.hov').forEach(x=>x.classList.remove('hov')); cg = i!==null ? st.querySelector(`g.u[data-ui="${i}"]`) : null; if (cg) cg.classList.add('hov'); const ug = i!==null ? st.querySelector(`g.ul[data-ul="${i}"]`) : null; if (ug) ug.classList.add('hov'); if (el) el.classList.add('hl'); dlg.querySelectorAll('#conWalls .el.hl').forEach(x=>{ if (x!==el) x.classList.remove('hl'); }); });
  wl.addEventListener('mouseleave', ()=>{ if (cg) cg.classList.remove('hov'); cg = null; st.querySelectorAll('g.ul.hov').forEach(x=>x.classList.remove('hov')); dlg.querySelectorAll('#conWalls .el.hl').forEach(x=>x.classList.remove('hl')); }); }
// 3D model kot .obj (mere v mm, y navzgor): vsaka plošča je kvader
$('#conObj').onclick = ()=>{ if (!S.els.some(ok)) return; draw();
  const base = (S.name || 'model').replace(/[^\w\-čšžČŠŽ ]+/g,'').trim() || 'model';
  const asc = x => String(x).replace(/[čČ]/g, c=>c==='č'?'c':'C').replace(/[šŠ]/g, c=>c==='š'?'s':'S').replace(/[žŽ]/g, c=>c==='ž'?'z':'Z').replace(/[^\w.\-]+/g, '_').replace(/^_+|_+$/g, '');
  // vrsta kosa iz imena: barva v .mtl, da se kosi v 3D programu ločijo
  const MT = [['fronta', /vrata|door|čelo|front|maska|filler|zaključni|end panel|kotno|corner/i, '0.94 0.94 0.92'], ['predal', /predal|drawer/i, '0.80 0.72 0.58'], ['hrbet', /hrbet|back/i, '0.62 0.58 0.52'],
    ['pult', /pult|worktop/i, '0.36 0.36 0.35'], ['cokel', /cokel|plinth/i, '0.15 0.15 0.15'], ['korpus', /./, '0.86 0.79 0.66']];
  const kind = n => MT.find(m=>m[1].test(n || ''))[0];
  const out = [`# ${S.name || 'model'} · MISSION:CUTLIST · mm`, `mtllib ${asc(base)}.mtl`], F6 = [[1,4,3,2],[5,6,7,8],[1,2,6,5],[2,3,7,6],[3,4,8,7],[4,1,5,8]], cnt = {};
  let grp = null;
  OBJB.forEach(([x0,x1,y0,y1,z0,z1,nm], i)=>{ const n = nm || L('kos','part'), g = n.includes(' · ') ? n.split(' · ')[0] : n; cnt[n] = (cnt[n] || 0) + 1;
    if (g!==grp){ out.push(`g ${asc(g)}`); grp = g; }
    out.push(`o ${asc(n)}_${String(cnt[n]).padStart(2,'0')}`, `usemtl ${kind(n)}`);
    [[x0,y0,z0],[x1,y0,z0],[x1,y1,z0],[x0,y1,z0],[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]].forEach(v=>out.push('v ' + v.map(c=>c.toFixed(1)).join(' ')));
    F6.forEach(f=>out.push('f ' + f.map(k=>k + i*8).join(' '))); });
  const mtl = MT.map(([k,,c])=>`newmtl ${k}\nKd ${c}\nKa 0 0 0\nKs 0.05 0.05 0.05\nd 1\nillum 1\n`).join('\n');
  download(out.join('\n') + '\n', `${asc(base)}.obj`, 'text/plain');
  setTimeout(()=>download(mtl, `${asc(base)}.mtl`, 'text/plain'), 400); };
$('#conShare').onclick = async ()=>{
  const sv = $('#conStage > svg'); if (!sv){ busyDone(L('Na skici še ni ničesar.','The sketch is empty.')); return; }
  const vb = sv.viewBox.baseVal, Wpx = 2400, Hpx = Math.round(Wpx * vb.height / vb.width);
  const clone = sv.cloneNode(true); clone.setAttribute('width', Wpx); clone.setAttribute('height', Hpx);
  clone.querySelectorAll('[vector-effect]').forEach(n=>{ n.removeAttribute('vector-effect'); const w = +n.getAttribute('stroke-width')||1; n.setAttribute('stroke-width', (w * vb.width / Wpx * 1.6).toFixed(2)); });
  const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(clone)], {type:'image/svg+xml'}));
  const img = new Image(); img.src = url; await img.decode().catch(()=>{});
  const cv = document.createElement('canvas'); cv.width = Wpx; cv.height = Hpx; const cx = cv.getContext('2d');
  cx.fillStyle = '#fff'; cx.fillRect(0,0,Wpx,Hpx); cx.drawImage(img, 0, 0, Wpx, Hpx); URL.revokeObjectURL(url);
  const blob = await new Promise(r=>cv.toBlob(r, 'image/jpeg', .92)); if (!blob) return;
  const name = ((S.name || P.name || L('skica','sketch')).replace(/[\\/:*?"<>|]+/g,'').trim() || L('skica','sketch')) + '.jpg';
  const file = new File([blob], name, {type:'image/jpeg'});
  if (navigator.canShare && navigator.canShare({files:[file]})){ try { await navigator.share({files:[file], title:name}); } catch(_){} return; }
  download(blob, name, 'image/jpeg'); busyDone(L('Ta brskalnik nima deljenja, skica je prenesena.','This browser cannot share, the sketch was downloaded.'), 3500);
};
function syncExport(){ const has = !!S && S.els.some(ok) && S.els.some(e=>ok(e) && !e.hide); const b = $('#conExport'); if (b) b.disabled = !S || !S.els.some(ok); const sh = $('#conShare'); if (sh) sh.disabled = !has; }
$('#conReset').onclick = ()=>{ ask(L('Ponastavim vse?','Reset everything?'), L('Element in nastavitve bodo izbrisani. Kosov, ki so že v kosovnici, to ne spremeni.','The unit and settings will be removed. Parts already in the cut list stay.'), L('Ponastavi vse','Reset all')).then(yes=>{ if (!yes) return; P.con = freshS(); S = P.con; S.els.push(newEl()); ED = 0; SEL = null; renderInputs(); syncSet(); draw(); syncCU(); }); };
$('#conExport').onclick = ()=>{
  if (!S.els.some(ok)) return;
  const R = layoutRuns(), runs = R.list, t = V('pt'), ft = V('ft');
  const out = {kon:new Map(), fr:new Map(), pult:new Map(), hrb:new Map()};
  // ime elementa: vpisan naziv ali tip s številko stranice in zaporedno številko na njej
  const lab = e => { if (e.n) return e.n; const same = S.els.filter(x=>x.wall===e.wall); return `${L('Element','Unit')} ${letterOf(e._i)}`; };
  // enaki kosi (tudi iz večkratnikov) se seštejejo v eno vrstico
  // robni trak: korpus spredaj (rob ob dolžini) ali vsi robovi, fronte vsi robovi; hrbet, cokel in pult brez
  let CE = null, FE = null; const KC = ['stranica','vidna stranica','dno','strop','fiksna polica','polica','pregrada','stranica predala','sprednja stranica predala','zadnja stranica predala','dno predala'], KF = ['fronta','fronta predala','zaključni kos','kotno polnilo'];
  const add = (g, name, l, w, qty, rot=true) => { l = Math.round(l); w = Math.round(w); if (!(l > 0 && w > 0 && qty > 0)) return; const kind = String(name).split(' · ').pop(), e = KC.includes(kind) ? CE : KF.includes(kind) ? FE : null;
    const k = [name,l,w,rot,e ? e.join('') : ''].join('|'); const o = out[g].get(k); if (o) o.qty += qty; else out[g].set(k, {name, l, w, qty, rot, e}); };
  runs.forEach(r=>{
    // stranice brez soseda so vidne in gredo k frontam (prosto stranico pove pogon postavitve)
    r.lower.forEach(e=>{ const H = hgt(e), D = e.D, L0 = lab(e);
      CE = null; FE = null;   // robnega traku v modeliranju ni
      const epN = onFloor(e) ? (epOn(e, 0) && e.open0 ? 1 : 0) + (epOn(e, 1) && e.open1 ? 1 : 0) : 0, vis = Math.max(0, (e.open0 ? 1 : 0) + (e.open1 ? 1 : 0) - epN - (e.mk0 && e.open0 ? 1 : 0) - (e.mk1 && e.open1 ? 1 : 0));
      if (epN) add('fr', `${L0} · zaključni kos`, (onFloor(e) ? V('plinth') : 0) + H, D + ft, epN, false);
      { const mkN = (e.mk0 && e.open0 ? 1 : 0) + (e.mk1 && e.open1 ? 1 : 0); if (mkN && mkW(e) > 0) add('fr', `${L0} · zaključna maska`, (onFloor(e) ? V('plinth') : 0) + H, Math.max(50, mkW(e)), mkN, false); if (mkN) add('fr', `${L0} · distančnik maske`, (onFloor(e) ? V('plinth') : 0) + H, 80, mkN, false); }
      const on = e.tp==='on', bin = e.bk!=='over' && !e.sbOn, Hs = on ? H - t : H, Ds = bin ? D : D - t;
      if (2 - vis > 0) add('kon', `${L0} · stranica`, Hs, Ds, 2 - vis);
      if (vis > 0) add('fr', `${L0} · vidna stranica`, Hs, Ds, vis, false);
      const rs = V('res');   // rezerva v dolžini in širini, debelina ostane
      add('kon', `${L0} · dno`, e.w - 2*t + rs, (bin ? D : D - t) + rs, 1);
      add('kon', `${L0} · strop`, (on ? e.w : e.w - 2*t) + rs, (on || bin ? D : D - t) + rs, 1);
      if (e.sbOn){} else if (bin) add('kon', `${L0} · hrbet`, e.w - 2*t, H - 2*t, 1); else add('kon', `${L0} · hrbet`, e.w, on ? H - t : H, 1);
      const zs = zonesOf(e, H), nd = Math.max(0, Math.round(+e.dv||0)), ns = Math.max(0, Math.round(+e.sh||0));
      zs.forEach((z, k)=>{ const zb = zoneBox(zs, k, 0, H, t);
        if (zb.pBelow) add('kon', `${L0} · fiksna polica`, e.w - 2*t, D - t, 1);
        if (z.k==='drawer'){ const b = drBoxOf(e, z, t); if (b.hb >= 40 && b.boxL > 0 && b.inW > 0){   // škatla predala iz plošče
            add('kon', `${L0} · stranica predala`, b.boxL, b.hb, 2); add('kon', `${L0} · sprednja stranica predala`, b.inW, b.hb, 1); add('kon', `${L0} · zadnja stranica predala`, b.inW, b.backH, 1); add('kon', `${L0} · dno predala`, b.boxL - 2*t + 14, b.inW + 14, 1); }
          return; }
        const io = interiorOf(e, zb, t);   // vsak kos posebej: razdeljena polica ali pregrada da več kosov
        io.sh.forEach(q=>add('kon', `${L0} · polica`, q.a1 - q.a0, D - t - 20, 1));
        io.dv.forEach(q=>add('kon', `${L0} · pregrada`, q.y1 - q.y0, D - t - 20, 1)); });
      if (e.block) add('fr', `${L0} · kotno polnilo`, H, e.block - ((e.z||[]).some(z=>z.k!=='open') ? 0 : ft), 1, false);
      if (e.blockEnd) add('fr', `${L0} · kotno polnilo`, H, e.blockEnd, 1, false);
      { const fw = e.w - (e.block||0) - (e.blockEnd||0), n = doorsOf(e, fw), gp = V('fgap'); if (fw > 20) zs.forEach(z=>{ const nz = z.n || n; if (z.k==='door') add('fr', `${L0} · fronta`, Math.round(z.h - gp), Math.round(fw/nz - gp), nz, false); else if (z.k==='drawer') add('fr', `${L0} · fronta predala`, Math.round(z.h - gp), Math.round(fw - gp), 1, false); }); }
    });
    { let g = null; const gs = []; r.lower.forEach(e=>{ if (!e.sbOn){ g = null; return; } if (g && Math.abs(g.a1 - e.p) < 1 && hgt(e)===g.H && liftOf(e)===g.z){ g.a1 = e.p + e.w; } else { g = {a0:e.p, a1:e.p + e.w, H:hgt(e), z:liftOf(e)}; gs.push(g); } });
      gs.forEach((g, k)=>add('kon', `${L('Skupni hrbet','Shared back')} · ${L('vrsta','run')} ${runs.indexOf(r) + 1}${gs.length > 1 ? ` · ${k+1}` : ''}`, g.a1 - g.a0, g.H, 1)); }
    plinthPieces(R).filter(q=>q.r===r).forEach(q=>add('fr', `Cokel · ${L('vrsta','run')} ${runs.indexOf(r) + 1}${q.ret ? ` · ${L('stranski','side')}` : q.back ? ` · ${L('zadaj','back')}` : ''}`, Math.round(q.ret ? q.d1 - q.d0 : q.a1 - q.a0), V('plinth'), 1, false));
    if (hasTop(r.wall)){ let cur = null; const segs = [];
      r.lower.forEach(e=>{ if (isTall(e) || !onFloor(e)){ cur = null; return; } if (cur && Math.abs(cur.a1 - e.p) < 1){ cur.a1 = e.p + e.w; cur.D = Math.max(cur.D, e.D); } else { cur = {a0:e.p, a1:e.p + e.w, D:e.D, first:e}; segs.push(cur); } cur.last = e; });
      segs.forEach((g,k)=>{ let len = g.a1 - g.a0 + topExt(g.first, 0) + topExt(g.last, 1);
        add('pult', `Pult · ${L('vrsta','run')} ${runs.indexOf(r) + 1}${segs.length>1?` · ${k+1}`:''}`, len, g.D + ft + V('topOver'), 1, false); }); }
  });
  const nm = S.name ? `${S.name} · ` : '';
  const groups = [['kon', `${nm}konstrukcija ${t} mm`, t, 2800, 2070], ['fr', `${nm}fronte in vidne stranice ${ft} mm`, ft, 2800, 2070], ['pult', `${nm}pult ${V('topT')} mm`, V('topT'), 4100, 900]];
  // pregled celotne liste pred izvozom: šele potrditev doda kose v kosovnico
  const xd = document.getElementById('conExpDlg'), esc2 = v => String(v).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
  let total = 0;
  xd.querySelector('.xlist').innerHTML = groups.filter(([g])=>out[g].size).map(([g, name])=>{ const rows = [...out[g].values()]; total += rows.reduce((a,p)=>a + p.qty, 0);
    return `<div class="xgrp"><div class="xh"><b>${esc2(name)}</b><span>${rows.reduce((a,p)=>a + p.qty, 0)} ${L('kosov','parts')}</span></div><table><thead><tr><th>${L('Naziv','Name')}</th><th>${L('Dolž.','Len.')}</th><th>${L('Šir.','Wid.')}</th><th>${L('Kol.','Qty')}</th></tr></thead><tbody>${rows.map(p=>`<tr><td>${esc2(p.name)}</td><td>${p.l}</td><td>${p.w}</td><td>${p.qty}</td></tr>`).join('')}</tbody></table></div>`; }).join('');
  xd.querySelector('.xsum').textContent = `${total} ${L('kosov skupaj','parts in total')}`;
  xd.querySelector('#conExpNo').onclick = ()=>xd.close();
  xd.querySelector('#conExpYes').onclick = ()=>{ xd.close(); commit(); };
  xd.showModal();
  function commit(){
  undoReset();
  let first = null;
  groups.forEach(([g, name, th, sl, sw])=>{ if (!out[g].size) return; const m = P.mats.length; if (first===null) first = m;
    P.mats.push({band:[...out[g].values()].some(p=>p.e) ? {name:'Robni trak', price:''} : null}); P.stock.push({name, l:sl, w:sw, t:th, price:'', m});
    out[g].forEach(p=>P.parts.push(Object.assign({name:p.name, l:p.l, w:p.w, qty:p.qty, rot:p.rot, m}, p.e ? {e:p.e.slice()} : {}))); openParts.add(m); });
  dlg.close(); renderMats(); changed();
  busyDone(L('Kosi modela so dodani kot novi materiali.','Model parts added as new materials.'));
  const t2 = document.querySelector(`.matpanel[data-m="${first}"]`); if (t2) t2.scrollIntoView({behavior:'smooth', block:'center'});
  }
};

})();
document.getElementById('conBtn').onclick = ()=>window.openCon();
/* ozadje se ne premika, ko je odprto okno */
{ const lock = ()=>{ document.documentElement.style.overflow = document.querySelector('dialog[open]') ? 'hidden' : ''; }; new MutationObserver(lock).observe(document.body, {subtree:true, attributes:true, attributeFilter:['open']}); }
/* telefon in tablica: material, nastavitve in rezultati kot koraki */
let mstep = 'm0';
function renderSteps(){
  const bar = $('#stepbar'); if (!bar) return;
  const M = P.mats.length; if (mstep.startsWith('m') && +mstep.slice(1) >= M) mstep = 'm0';
  const steps = [...Array.from({length:Math.max(1,M)}, (_,m)=>['m'+m, M>1 ? `${L('Material','Material')} ${String(m+1).padStart(2,'0')}` : L('Material','Material')]), ['set', L('Nastavitve','Settings')], ['res', L('Razrez','Cutting')], ['exp', L('Izvoz','Export')]];
  bar.innerHTML = steps.map(([k,t],i)=>`<button data-step="${k}" class="${mstep===k?'on':''}"><i>${i+1}</i>${t}</button>`).join('');
  const cur = steps.findIndex(x=>x[0]===mstep), nx = steps[cur+1], nb = $('#stepNext');
  const ready = P.parts.some(p=>+p.l>0 && +p.w>0) && P.stock.some(x=>+x.l>0 && +x.w>0);
  if (nb){ nb.hidden = !nx; if (nx){ nb.dataset.step = nx[0]; nb.innerHTML = `<span class="nxw">${L('Naprej','Next')}: </span>${nx[1]}<svg class="nxa" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 5h12M9 1l4 4-4 4"/></svg>`; nb.disabled = !ready && mstep.startsWith('m'); nb.dataset.tip = nb.disabled ? L('Najprej dodaj vsaj en kos in ploščo.','Add at least one part and a sheet first.') : ''; if (!nb.disabled) delete nb.dataset.tip; } }
  bar.querySelectorAll('button').forEach(b=>{ if (!b.dataset.step.startsWith('m')) b.disabled = !ready; });
  requestAnimationFrame(()=>{ const w = nb && !nb.hidden ? nb.offsetWidth : 0; document.documentElement.style.setProperty('--nbw', w+'px'); });
  document.body.dataset.step = mstep.startsWith('m') ? 'mat' : mstep;
  const em = $('#expMenu'), host = $('#expHost'), small = matchMedia('(max-width:1020px)').matches;
  if (em && host){ if (mstep==='exp' && small){ if (em.parentNode!==host) host.appendChild(em); } else if (em.parentNode===host) $('.expwrap').appendChild(em); }
  document.querySelectorAll('#matsHost .matpanel').forEach(el=>el.classList.toggle('cur', mstep==='m'+el.dataset.m));
}
document.addEventListener('input', ()=>setTimeout(renderSteps, 0));
document.addEventListener('click', e=>{ const b = e.target.closest && e.target.closest('#stepbar [data-step],#stepNext'); if (!b || b.disabled) return; mstep = b.dataset.step; renderSteps(); window.scrollTo({top:0, behavior:'smooth'}); });
matchMedia('(max-width:1020px)').addEventListener('change', ()=>renderSteps());




/* namestitev kot aplikacija (PWA): samostojen gumb v glavi; skrit, ko je aplikacija že nameščena */
const isPWA = () => (window.matchMedia && ['standalone','fullscreen','minimal-ui','window-controls-overlay'].some(m=>matchMedia(`(display-mode: ${m})`).matches)) || navigator.standalone === true;
const isSafari = () => /^((?!chrome|chromium|crios|fxios|edg|android).)*safari/i.test(navigator.userAgent);
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
const INSTALL_SVG = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1.5" y="1.5" width="11" height="11" rx="3"/><path d="M7 3.9V9M5 7l2 2 2-2"/></svg>';
let installEvt = null;
// Donation link for the "Kupi mi pepsi" button. Owner fills this in; while empty the button is dimmed and inert.
const DONATE_URL = 'https://ko-fi.com/jureeruj';
{ const b=$('#pepsiBtn'); if (b && DONATE_URL) b.href = DONATE_URL; else if (b) b.setAttribute('data-tip', L('Povezava za donacijo še ni nastavljena','Donation link not set yet')); }
function syncInstall(){ const b = $('#installBtn'); b.hidden = isPWA(); const t = L('Namesti kot aplikacijo','Install as app'); b.dataset.tip = t; b.setAttribute('aria-label', t); }
$('#installBtn').innerHTML = INSTALL_SVG;
window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); installEvt = e; });
window.addEventListener('appinstalled', ()=>{ installEvt = null; syncInstall(); });
$('#installBtn').onclick = async ()=>{
  if (installEvt){ installEvt.prompt(); try { await installEvt.userChoice; } catch(_){} installEvt = null; syncInstall(); return; }
  if (location.protocol === 'file:'){ ask(L('Namesti kot aplikacijo','Install as app'), L('Namestitev bo mogoča, ko bo stran objavljena na spletnem naslovu.','Installing will be possible once the page is published at a web address.'), L('V redu','OK'), true); return; }
  ask(L('Namesti kot aplikacijo','Install as app'),
    (isSafari() ? (isIOS() ? L('Tapni Deli in nato Dodaj na začetni zaslon.','Tap Share, then Add to Home Screen.') : L('V meniju Datoteka izberi Dodaj v Dock.','In the File menu choose Add to Dock.'))
                : L('Klikni ikono Namesti v naslovni vrstici ali v meniju brskalnika izberi Namesti aplikacijo.','Click the Install icon in the address bar, or choose Install app in the browser menu.'))
    + L(' Nameščena aplikacija se odpre v svojem oknu, podatki pa ostanejo shranjeni trajno.',' The installed app opens in its own window and your data stays saved permanently.'),
    L('V redu','OK'), true);
};
syncInstall();
/* Safari: enkratno navodilo za namestitev, da se podatki ne brišejo */
function safariHint(){
  if (!isSafari() || isPWA() || db.safariTold || !P.parts.some(q => +q.l>0 && +q.w>0)) return;
  db.safariTold = true; save();
  ask(L('Namesti aplikacijo, da ne izgubiš podatkov','Install the app so you do not lose your data'),
      L('Safari izbriše podatke strani, ki je ne odpreš 7 dni. ','Safari deletes data of sites you do not open for 7 days. ')
      + (isIOS() ? L('Tapni Deli in nato Dodaj na začetni zaslon. ','Tap Share, then Add to Home Screen. ') : L('V meniju Datoteka izberi Dodaj v Dock. ','In the File menu choose Add to Dock. '))
      + L('Tako ostanejo tvoji podatki shranjeni trajno.','Your data then stays saved permanently.'),
      L('V redu','OK'), true);
}
setTimeout(safariHint, 4000);
/* service worker: aplikacija deluje tudi brez povezave */
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) window.addEventListener('load', ()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));

/* ura */
(function tick(){ const c=document.getElementById('clock'); if (c){ const d=new Date(), z=n=>String(n).padStart(2,'0'); c.textContent=`${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`; } setTimeout(tick, 1000 - Date.now()%1000); })();

/* klik na kos v razrezu ne odpira več obdelave kosa (obdelave in trak sta v vmesniku odstranjena; podatki ostanejo) */


// en gumb: prikaže jezik, v katerega bo preklopil
function syncLangBtn(){ const b = $('#langBtn'); if (!b) return; const to = EN() ? 'sl' : 'en'; b.textContent = EN() ? 'EN' : 'SI'; const t = to==='sl' ? 'Preklopi v slovenščino' : 'Switch to English'; b.setAttribute('aria-label', t); b.setAttribute('data-tip', t); b.lang = to; }
$('#langBtn').onclick = ()=>{
  LANG = EN() ? 'sl' : 'en'; try { localStorage.setItem(LANG_KEY, LANG); } catch(_){}
  applyLang(); renderAll(); fitFloat(); syncInstall(); syncLangBtn();
};
applyLang();
syncLangBtn();
renderAll();
openFromLink();
window.addEventListener('hashchange', openFromLink);
