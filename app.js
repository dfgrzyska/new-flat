// --- Ikony -------------------------------------------------------------------
const ICON = {
  chev: '<svg width="8" height="14" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  back: '<svg width="12" height="20" viewBox="0 0 12 20"><path d="M10 2L2 10l8 8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  minus: '<svg width="12" height="12" viewBox="0 0 24 24"><path d="M6 12h12" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>',
  plus: '<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 7.5v9M7.5 12h9" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M15.5 15.5L20 20" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  bulb: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0012 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  note: '<svg width="13" height="13" viewBox="0 0 24 24"><path d="M5 4h14v16H5zM8.5 9h7M8.5 13h7M8.5 17h4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  link: '<svg width="13" height="13" viewBox="0 0 24 24"><path d="M10 14a4.5 4.5 0 006.4 0l3-3a4.5 4.5 0 00-6.4-6.4l-1 1M14 10a4.5 4.5 0 00-6.4 0l-3 3a4.5 4.5 0 006.4 6.4l1-1" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  external: '<svg width="15" height="15" viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  export: '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 15V3M7.5 7.5L12 3l4.5 4.5M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  import: '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 3v12M7.5 10.5L12 15l4.5-4.5M5 15v4a2 2 0 002 2h10a2 2 0 002-2v-4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  restore: '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 12a8 8 0 102.3-5.7M4 4v4.5h4.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  plan: '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M3.5 4.5h17v15h-17zM3.5 11h7v8.5M10.5 4.5V8M14 11h6.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  book: '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M5 4.5A1.5 1.5 0 016.5 3H19v15H6.5A1.5 1.5 0 005 19.5zM5 19.5A1.5 1.5 0 006.5 21H19v-3M9 7.5h6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  close: '<svg width="10" height="10" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>',
};

// Ikony kart na dole (kontur, kolor z currentColor).
const TAB_ICON = {
  start: '<svg viewBox="0 0 28 28"><path d="M4.5 12.8L14 4.8l9.5 8M7.2 10.8V23h5.3v-6.2h3V23h5.3V10.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  terminy: '<svg viewBox="0 0 28 28"><rect x="4.5" y="6.2" width="19" height="17.3" rx="3.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4.5 11.3h19M9.5 3.8v4.4M18.5 3.8v4.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="9.6" cy="15.6" r="1.3" fill="currentColor"/><circle cx="14" cy="15.6" r="1.3" fill="currentColor"/><circle cx="18.4" cy="15.6" r="1.3" fill="currentColor"/><circle cx="9.6" cy="19.6" r="1.3" fill="currentColor"/><circle cx="14" cy="19.6" r="1.3" fill="currentColor"/></svg>',
  budzet: '<svg viewBox="0 0 28 28"><rect x="4" y="7.5" width="20" height="15.5" rx="3.4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 7.5l9.5-3.2a1.6 1.6 0 012 1.1l.6 2.1M18 13.3h6v5h-6a2.5 2.5 0 010-5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="18.6" cy="15.8" r="1.2" fill="currentColor"/></svg>',
  wiecej: '<svg viewBox="0 0 28 28"><circle cx="14" cy="14" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9.4" cy="14" r="1.5" fill="currentColor"/><circle cx="14" cy="14" r="1.5" fill="currentColor"/><circle cx="18.6" cy="14" r="1.5" fill="currentColor"/></svg>',
};

// Ikony kategorii – białe kontury na kolorowym kwadracie (jak w Ustawieniach iOS).
const CAT_ICONS = {
  bank: '<path d="M3.5 9.2L12 4.5l8.5 4.7M5.5 10.5v7M9.8 10.5v7M14.2 10.5v7M18.5 10.5v7M3.5 20h17"/>',
  doc: '<path d="M14 3.5H7.5a2 2 0 00-2 2v13a2 2 0 002 2h9a2 2 0 002-2V8zM14 3.5V8h4.5M9 12.5h6M9 16h4"/>',
  key: '<circle cx="8" cy="15.5" r="4"/><path d="M10.9 12.6L19 4.5M15.5 8l2.5 2.5M13.2 10.3l1.8 1.8"/>',
  roller: '<rect x="4" y="3.5" width="13" height="5.5" rx="1.5"/><path d="M17 6.2h2.5v5.3H12v3"/><rect x="10.5" y="14.5" width="3" height="6" rx="1"/>',
  pot: '<path d="M4.5 10.5h15v5.5a4 4 0 01-4 4h-7a4 4 0 01-4-4zM2.5 10.5h2M19.5 10.5h2M9 7.5c0-1.2 1-1.6 1-2.8M13.5 7.5c0-1.2 1-1.6 1-2.8"/>',
  sofa: '<path d="M5.5 11V8.5a2 2 0 012-2h9a2 2 0 012 2V11"/><path d="M3.5 13a1.8 1.8 0 013.6 0v1.5h9.8V13a1.8 1.8 0 013.6 0v4.5a1 1 0 01-1 1h-15a1 1 0 01-1-1zM6 18.5v2M18 18.5v2"/>',
  washer: '<rect x="5" y="3" width="14" height="18" rx="2.2"/><circle cx="12" cy="13.5" r="4"/><path d="M8.2 6.5h1.3M11.2 6.5h1.3"/>',
  sparkles: '<path d="M10.5 4l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4L4.5 10l4.4-1.6zM17.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  box: '<path d="M3.5 7.5L12 3.5l8.5 4v9L12 20.5l-8.5-4zM3.5 7.5L12 11.5l8.5-4M12 11.5v9M7.8 5.5l8.4 4"/>',
  house: '<path d="M3.5 11L12 4l8.5 7M6 9v11h12V9M10 20v-5.5h4V20"/>',
  cart: '<circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/><path d="M2.5 3.5h2.8l2.3 11a1.5 1.5 0 001.5 1.2h8.1a1.5 1.5 0 001.5-1.2l1.3-7.5H6"/>',
  bolt: '<path d="M13 3L5.5 13.5h6L10.5 21 18.5 10h-6z"/>',
  leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15M5 19c3-4 6-6.5 10-8.5"/>',
  car: '<path d="M4.5 16.5V12l2-5h11l2 5v4.5M3.5 12h17M4.5 16.5h15M6 16.5v2.5M18 16.5v2.5"/><circle cx="8" cy="14.2" r=".6"/><circle cx="16" cy="14.2" r=".6"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7a4.3 4.3 0 017.5 2.8C19.5 15.4 12 20 12 20z"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
};
const CAT_COLORS = ['#007aff', '#5856d6', '#af52de', '#ff2d55', '#ff3b30', '#ff9500', '#e6a700', '#34c759', '#00c7be', '#30b0c7', '#a2845e', '#8e8e93'];

// --- Stan w localStorage -----------------------------------------------------
const STORAGE_KEY = 'mieszkanie:v1';
const UI_KEY = 'mieszkanie:ui';
const HINT_KEY = 'mieszkanie:hint';
const STATUSES = ['todo', 'doing', 'done', 'skip'];

function loadJSON(key) {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch { alert('Nie udało się zapisać danych w przeglądarce.'); }
}
// Stan widoku – tylko wygoda (rozwinięte „Zrobione”, wyszukiwanie, przewinięcie).
const ui = { showDone: loadJSON(UI_KEY).showDone || {}, query: '', scroll: {} };
function saveUI() {
  try { localStorage.setItem(UI_KEY, JSON.stringify({ showDone: ui.showDone })); } catch {}
}
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});

// Podpowiedzi z domyślnej listy – czytane z data.js, więc aktualizują się razem z apką.
const HINTS = {};
for (const c of DEFAULT_CATS) for (const i of c.items) if (i.hint) HINTS[i.id] = i.hint;

// Porządkuje dane (także z importu) i dopisuje nowe pozycje domyślne.
function normalize(s) {
  s = s && typeof s === 'object' && !Array.isArray(s) ? s : {};
  s.cats = Array.isArray(s.cats) ? s.cats.filter(c => c && typeof c === 'object' && c.id) : [];
  for (const c of s.cats) {
    c.id = String(c.id);
    c.name = String(c.name || 'Bez nazwy');
    if (!CAT_ICONS[c.icon]) c.icon = 'star';
    if (!/^#[0-9a-f]{6}$/i.test(c.color)) c.color = '#8e8e93';
    if (c.phase !== 'buy') c.phase = 'setup';
    c.buy = !!c.buy;
    c.noBudget = !!c.noBudget;
    c.items = Array.isArray(c.items) ? c.items.filter(i => i && typeof i === 'object' && i.id) : [];
    for (const it of c.items) {
      it.id = String(it.id);
      it.title = String(it.title || '');
      if (!STATUSES.includes(it.status)) it.status = 'todo';
      it.buy = !!it.buy;
      for (const k of ['plan', 'spent']) {
        const v = Number(it[k]);
        if (v > 0 && isFinite(v)) it[k] = v; else delete it[k];
      }
      if (it.due && !/^\d{4}-\d{2}-\d{2}$/.test(it.due)) delete it.due;
      for (const k of ['note', 'link', 'doneAt']) if (it[k] != null && typeof it[k] !== 'string') delete it[k];
    }
  }
  s.seeded = Array.isArray(s.seeded) ? s.seeded.map(String) : [];
  const st = s.settings && typeof s.settings === 'object' ? s.settings : {};
  s.settings = { title: String(st.title || ''), budget: Number(st.budget) > 0 ? Number(st.budget) : 0 };
  seedDefaults(s);
  return s;
}

// Dopisuje domyślne kategorie i pozycje, których jeszcze nie było (raz – usunięte nie wracają).
function seedDefaults(s) {
  const seeded = new Set(s.seeded);
  const prevIndex = (list, before, key) => {
    for (let i = before.length - 1; i >= 0; i--) {
      const idx = list.findIndex(x => x.id === before[i][key]);
      if (idx >= 0) return idx + 1;
    }
    return 0;
  };
  DEFAULT_CATS.forEach((dc, ci) => {
    let cat = s.cats.find(c => c.id === dc.id);
    if (!cat && !seeded.has('c:' + dc.id)) {
      cat = { id: dc.id, name: dc.name, icon: dc.icon, color: dc.color, phase: dc.phase, buy: !!dc.buy, noBudget: false, items: [] };
      s.cats.splice(prevIndex(s.cats, DEFAULT_CATS.slice(0, ci), 'id'), 0, cat);
    }
    seeded.add('c:' + dc.id);
    dc.items.forEach((di, ii) => {
      const key = 'i:' + di.id;
      if (seeded.has(key)) return;
      seeded.add(key);
      if (!cat || s.cats.some(c => c.items.some(x => x.id === di.id))) return;
      const item = { id: di.id, title: di.title, status: 'todo', buy: di.buy ?? !!dc.buy };
      if (di.link) item.link = di.link;
      cat.items.splice(prevIndex(cat.items, dc.items.slice(0, ii), 'id'), 0, item);
    });
  });
  s.seeded = [...seeded];
}

let state = normalize(loadJSON(STORAGE_KEY));
saveState();

// --- Daty, liczby, tekst -----------------------------------------------------
const pad = n => String(n).padStart(2, '0');
const isoDate = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseDate = iso => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const todayISO = () => isoDate(new Date());
const dayDiff = iso => Math.round((parseDate(iso) - parseDate(todayISO())) / 864e5);
function fmtDate(iso, { year = 'auto', weekday = false } = {}) {
  const d = parseDate(iso);
  const opts = { day: 'numeric', month: 'short' };
  if (year === true || (year === 'auto' && d.getFullYear() !== new Date().getFullYear())) opts.year = 'numeric';
  if (weekday) opts.weekday = 'short';
  return d.toLocaleDateString('pl-PL', opts).replace(/\.$/, '');
}
function relDay(iso) {
  const d = dayDiff(iso);
  if (d === 0) return 'dziś';
  if (d === 1) return 'jutro';
  if (d === -1) return 'wczoraj';
  if (d > 1) return d <= 60 ? `za ${d} dni` : fmtDate(iso);
  return -d <= 60 ? `${-d} dni temu` : fmtDate(iso);
}
const monthTitle = iso => cap(parseDate(iso).toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' }));
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (n === 1) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}
const fmtMoney = n => `${Math.round(n).toLocaleString('pl-PL')} zł`;
const fmtInput = n => (n ? String(n).replace('.', ',') : '');
function parseAmount(s) {
  const v = parseFloat(String(s).replace(/[\s zł]/gi, '').replace(',', '.'));
  return isFinite(v) && v > 0 ? Math.round(v * 100) / 100 : 0;
}
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const safeUrl = u => (/^https?:\/\/\S+$/i.test(u || '') ? u : '');
const fold = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l');
const uid = () => 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

// --- Pozycje, postęp, pieniądze ----------------------------------------------
const STATUS_LABEL = {
  todo: ['Do zrobienia', 'Do kupienia'],
  doing: ['W trakcie', 'Zamówione'],
  done: ['Zrobione', 'Kupione'],
  skip: ['Nie dotyczy', 'Nie dotyczy'],
};
const statusLabel = (it, st = it.status) => STATUS_LABEL[st][it.buy ? 1 : 0];
const isOpen = it => it.status === 'todo' || it.status === 'doing';

function findItem(id) {
  for (const cat of state.cats) {
    const item = cat.items.find(i => i.id === id);
    if (item) return { item, cat };
  }
  return null;
}
const allRows = () => state.cats.flatMap(cat => cat.items.map(item => ({ item, cat })));

function progress(items) {
  let done = 0, total = 0, doing = 0;
  for (const i of items) {
    if (i.status === 'skip') continue;
    total++;
    if (i.status === 'done') done++;
    if (i.status === 'doing') doing++;
  }
  return { done, total, doing, left: total - done, pct: total ? done / total : 0, complete: total > 0 && done === total };
}

// Prognoza: za zrobione liczymy to, co wydane, za resztę plan (albo więcej, jeśli już tyle poszło).
function money(items) {
  let plan = 0, spent = 0, forecast = 0;
  for (const i of items) {
    if (i.status === 'skip') continue;
    plan += i.plan || 0;
    spent += i.spent || 0;
    forecast += i.status === 'done' && i.spent ? i.spent : Math.max(i.plan || 0, i.spent || 0);
  }
  return { plan, spent, forecast };
}
const budgetItems = () => state.cats.filter(c => !c.noBudget).flatMap(c => c.items);

// --- Elementy wspólne --------------------------------------------------------
const app = document.getElementById('app');

function ring(pct, { size = 44, stroke = 4.5, label = '', animate = false, color = '' } = {}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(1, pct)));
  const mid = size / 2;
  return `
    <span class="ring ${animate ? 'animate' : ''}" style="width:${size}px;height:${size}px;--c:${c.toFixed(1)}${color ? `;--ring:${color}` : ''}">
      <svg viewBox="0 0 ${size} ${size}" aria-hidden="true">
        <circle class="track" cx="${mid}" cy="${mid}" r="${r}" stroke-width="${stroke}"/>
        <circle class="prog" cx="${mid}" cy="${mid}" r="${r}" stroke-width="${stroke}"
          stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" transform="rotate(-90 ${mid} ${mid})"/>
      </svg>
      <span class="ring-label">${label}</span>
    </span>`;
}
const pctLabel = p => `${Math.round(p * 100)}%`;

function catIcon(cat, cls = '') {
  return `<span class="cat-icon ${cls}" style="--c:${cat.color}" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${CAT_ICONS[cat.icon]}</svg></span>`;
}

function navbar(title, { back = '', right = '' } = {}) {
  return `
    <nav class="navbar">
      <div class="nav-inner">
        ${back ? `<a class="nav-back" href="#/">${ICON.back}<span>${esc(back)}</span></a>` : '<span></span>'}
        <span class="nav-title">${esc(title)}</span>
        <span class="nav-right">${right}</span>
      </div>
    </nav>`;
}

const TABS = [
  { id: 'start', label: 'Start', hash: '#/' },
  { id: 'terminy', label: 'Terminy', hash: '#/terminy' },
  { id: 'budzet', label: 'Budżet', hash: '#/budzet' },
  { id: 'wiecej', label: 'Więcej', hash: '#/wiecej' },
];
function tabbar(active) {
  return `
    <nav class="tabbar" aria-label="Karty">
      <div class="tabbar-inner">
        ${TABS.map(t => `
          <a class="tab-item ${t.id === active ? 'active' : ''}" href="${t.hash}" data-tab="${t.id}" ${t.id === active ? 'aria-current="page"' : ''}>
            ${TAB_ICON[t.id]}<span>${t.label}</span>
          </a>`).join('')}
      </div>
    </nav>`;
}

function dueChip(it) {
  if (!it.due || it.status === 'skip') return '';
  const d = dayDiff(it.due);
  const open = isOpen(it);
  const cls = !open ? '' : d < 0 ? 'late' : d <= 7 ? 'soon' : '';
  const text = open && d >= -1 && d <= 1 ? relDay(it.due) : fmtDate(it.due);
  return `<span class="due ${cls}">${text}</span>`;
}

let justToggled = '';
let lingering = '';
let lingerTimer;

function itemRow({ item: it, cat }, { showCat = false } = {}) {
  const st = it.status;
  const meta = [];
  if (st === 'doing') meta.push(`<span class="st-doing">${statusLabel(it)}</span>`);
  if (showCat) meta.push(`<span class="cat-tag"><i class="dot" style="--c:${cat.color}"></i><span class="n">${esc(cat.name)}</span></span>`);
  meta.push(dueChip(it));
  if (it.spent) meta.push(`<span class="amt">${fmtMoney(it.spent)}</span>`);
  else if (it.plan) meta.push(`<span class="amt">≈ ${fmtMoney(it.plan)}</span>`);
  if (it.note) meta.push(`<span class="mini-icon">${ICON.note}</span>`);
  if (safeUrl(it.link)) meta.push(`<span class="mini-icon">${ICON.link}</span>`);
  const sub = meta.filter(Boolean);
  const mark = st === 'done' ? ICON.check : st === 'skip' ? ICON.minus : '';
  return `
    <div class="task ${st}" data-open="${esc(it.id)}" role="button" tabindex="0">
      <button class="check ${st} ${justToggled === it.id ? 'pop' : ''}" data-action="toggle" data-id="${esc(it.id)}"
        aria-label="${esc(statusLabel(it))} – zmień">${mark}</button>
      <div class="task-text">
        <div class="t">${esc(it.title || 'Bez nazwy')}</div>
        ${sub.length ? `<div class="s">${sub.join('')}</div>` : ''}
      </div>
      <span class="chev">${ICON.chev}</span>
    </div>`;
}

// --- Start -------------------------------------------------------------------
function isStandalone() {
  return navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;
}
function hintHidden() {
  try { return localStorage.getItem(HINT_KEY) === '1'; } catch { return false; }
}

function renderStart(opts) {
  const title = state.settings.title || 'Nowe mieszkanie';
  document.title = title;
  const rows = allRows();
  const p = progress(rows.map(r => r.item));
  const m = money(budgetItems());
  const showHint = !isStandalone() && !hintHidden();
  return `
    ${navbar(title)}
    <main class="page">
      <h1 class="large-title" data-title-marker>${esc(title)}</h1>
      <p class="subtitle">${p.total ? `Zrobione ${p.done} z ${p.total}` : 'Lista jest pusta'}</p>
      ${showHint ? `
        <div class="hint">
          <p><b>Dodaj do ekranu początkowego</b><br>Safari → Udostępnij → „Do ekranu początkowego”. Otwieraj potem apkę z ikony – dane w Safari i w apce z ikony są osobne.</p>
          <button data-action="hide-hint">OK</button>
        </div>` : ''}
      <section class="hero home-hero">
        ${ring(p.pct, { size: 92, stroke: 9, label: pctLabel(p.pct), animate: opts.animate })}
        <div class="hero-stats">
          <div><b class="num">${p.done}</b><span>zrobione</span></div>
          <div><b class="num">${p.doing}</b><span>w trakcie</span></div>
          <div><b class="num">${p.left - p.doing}</b><span>czeka</span></div>
          ${m.spent || m.plan ? `<div class="wide"><b class="num">${fmtMoney(m.spent)}</b><span>wydane${m.forecast ? ` z ~${fmtMoney(m.forecast)}` : ''}</span></div>` : ''}
        </div>
      </section>
      <label class="search">
        ${ICON.search}
        <input type="search" id="search" placeholder="Szukaj" value="${esc(ui.query)}" enterkeyhint="search" autocomplete="off">
      </label>
      <div id="home-body">${homeBody()}</div>
    </main>`;
}

function homeBody() {
  if (ui.query.trim()) return searchResults(ui.query);
  return nowSection() + PHASES.map(phaseSection).join('') + addCatRow();
}

function searchResults(q) {
  const f = fold(q.trim());
  const rows = allRows().filter(({ item, cat }) => fold(`${item.title} ${item.note || ''} ${cat.name}`).includes(f));
  if (!rows.length) return `<div class="empty-state">Brak wyników dla „${esc(q.trim())}”</div>`;
  return `
    <h2 class="group-label">${rows.length} ${plural(rows.length, 'wynik', 'wyniki', 'wyników')}</h2>
    <div class="group">${rows.map(r => itemRow(r, { showCat: true })).join('')}</div>`;
}

// „Na teraz”: w trakcie + terminy w ciągu 14 dni i po terminie. Gdy pusto – następne kroki.
function nowSection() {
  const rows = allRows().filter(({ item }) =>
    (isOpen(item) && (item.status === 'doing' || (item.due && dayDiff(item.due) <= 14))) || lingering === item.id);
  rows.sort((a, b) => (a.item.due || '9999').localeCompare(b.item.due || '9999'));
  if (rows.length) {
    const shown = rows.slice(0, 6);
    return `
      <h2 class="section-title">Na teraz <small>${rows.length > shown.length ? `${shown.length} z ${rows.length}` : ''}</small></h2>
      <div class="group">
        ${shown.map(r => itemRow(r, { showCat: true })).join('')}
        ${rows.length > shown.length ? `<a class="link-row" href="#/terminy"><span>Wszystkie terminy</span><span class="chev">${ICON.chev}</span></a>` : ''}
      </div>`;
  }
  const next = state.cats.map(cat => ({ cat, item: cat.items.find(isOpen) })).filter(r => r.item).slice(0, 3);
  if (!next.length) return '';
  return `
    <h2 class="section-title">Następne kroki</h2>
    <div class="group">${next.map(r => itemRow(r, { showCat: true })).join('')}</div>
    <p class="footnote">Oznacz coś jako „W trakcie” albo ustaw termin – pojawi się tu w „Na teraz”.</p>`;
}

function phaseSection(phase) {
  const cats = state.cats.filter(c => c.phase === phase.id);
  if (!cats.length) return '';
  const p = progress(cats.flatMap(c => c.items));
  return `
    <h2 class="section-title">${phase.name} <small class="num">${pctLabel(p.pct)}</small></h2>
    <div class="group cats">${cats.map(catRow).join('')}</div>`;
}

function catRow(cat) {
  const p = progress(cat.items);
  const next = cat.items.find(i => i.status === 'doing') || cat.items.find(isOpen);
  const sub = !p.total ? (cat.items.length ? 'Nic do zrobienia' : 'Pusta')
    : p.complete ? 'Wszystko zrobione'
    : `${p.done}/${p.total}${next ? ` · ${esc(next.title)}` : ''}`;
  return `
    <a class="cat-row" href="#/k/${encodeURIComponent(cat.id)}">
      ${catIcon(cat)}
      <div class="cat-text"><div class="t">${esc(cat.name)}</div><div class="s">${sub}</div></div>
      ${p.complete ? `<span class="done-badge" style="--c:${cat.color}">${ICON.check}</span>` : ring(p.pct, { size: 30, stroke: 3.6, color: cat.color })}
      <span class="chev">${ICON.chev}</span>
    </a>`;
}

function addCatRow() {
  return `
    <div class="group add-cat">
      <button class="link-row" data-action="new-cat"><span class="label"><span class="icon">${ICON.plus}</span>Nowa kategoria</span></button>
    </div>`;
}

// --- Kategoria ---------------------------------------------------------------
function renderCat(cat, opts) {
  document.title = cat.name;
  const p = progress(cat.items);
  const m = money(cat.items);
  const active = cat.items.filter(i => isOpen(i) || lingering === i.id);
  const closed = cat.items.filter(i => !isOpen(i) && lingering !== i.id);
  const show = !!ui.showDone[cat.id];
  const phase = PHASES.find(ph => ph.id === cat.phase);
  return `
    ${navbar(cat.name, { back: 'Start', right: '<button class="nav-btn" data-action="edit-cat">Edytuj</button>' })}
    <main class="page">
      <section class="hero cat-hero" style="--brand:${cat.color}">
        <div class="hero-main">
          ${catIcon(cat, 'on-hero')}
          <div class="eyebrow">${esc(phase ? phase.name : '')}</div>
          <h1 class="hero-title" data-title-marker>${esc(cat.name)}</h1>
          <div class="meta">${p.total ? `${p.done} z ${p.total} zrobione${p.doing ? ` · ${p.doing} w trakcie` : ''}` : 'Brak pozycji'}</div>
          ${m.plan || m.spent ? `<div class="meta">Wydane ${fmtMoney(m.spent)}${m.plan ? ` · plan ${fmtMoney(m.plan)}` : ''}${cat.noBudget ? ' · poza budżetem' : ''}</div>` : ''}
        </div>
        ${ring(p.pct, { size: 78, stroke: 7, label: pctLabel(p.pct), animate: opts.animate })}
      </section>

      <div class="group list">
        ${p.complete && !active.length ? `<div class="all-done">${ICON.check}<span>Wszystko zrobione</span></div>` : ''}
        ${active.map(item => itemRow({ item, cat })).join('')}
        <form class="add-row" data-cat="${esc(cat.id)}" autocomplete="off">
          <span class="plus-ic">${ICON.plus}</span>
          <input name="title" placeholder="Nowa pozycja" enterkeyhint="done" aria-label="Nowa pozycja">
        </form>
      </div>

      ${closed.length ? `
        <div class="group closed">
          <div class="done-toggle ${show ? 'open' : ''}" data-action="toggle-done" role="button" tabindex="0">
            <span>Zrobione i pominięte (${closed.length})</span><span class="chev">${ICON.chev}</span>
          </div>
          ${show ? closed.map(item => itemRow({ item, cat })).join('') : ''}
        </div>` : ''}
      <p class="footnote">Stuknij kółko, żeby odhaczyć. Stuknij pozycję – status, termin, kwoty, link i notatka.</p>
    </main>`;
}

// --- Terminy -----------------------------------------------------------------
function renderTerminy() {
  document.title = 'Terminy';
  const rows = allRows().filter(({ item }) => item.due && item.status !== 'skip');
  rows.sort((a, b) => a.item.due.localeCompare(b.item.due));
  const today = todayISO();
  const late = rows.filter(r => isOpen(r.item) && r.item.due < today);
  const showDone = !!ui.showDone.terminy;
  const rest = rows.filter(r => !late.includes(r) && (showDone || isOpen(r.item) || lingering === r.item.id)
    && (showDone || r.item.due >= today || lingering === r.item.id));
  const upcoming = rows.filter(r => isOpen(r.item) && r.item.due >= today).length;
  const doneCount = rows.filter(r => r.item.status === 'done').length;

  const months = [];
  for (const r of rest) {
    const key = r.item.due.slice(0, 7);
    if (!months.length || months[months.length - 1].key !== key) months.push({ key, rows: [] });
    months[months.length - 1].rows.push(r);
  }
  const sub = [upcoming ? `${upcoming} ${plural(upcoming, 'nadchodzący', 'nadchodzące', 'nadchodzących')}` : 'Brak nadchodzących',
    late.length ? `${late.length} po terminie` : ''].filter(Boolean).join(' · ');

  return `
    ${navbar('Terminy')}
    <main class="page">
      <h1 class="large-title" data-title-marker>Terminy</h1>
      <p class="subtitle">${sub}</p>
      ${late.length ? `
        <h2 class="group-label late-label">Po terminie</h2>
        <div class="group">${late.map(agendaRow).join('')}</div>` : ''}
      ${months.map(mo => `
        <h2 class="group-label">${monthTitle(mo.key + '-01')}</h2>
        <div class="group">${mo.rows.map(agendaRow).join('')}</div>`).join('')}
      ${!rows.length ? `<div class="empty-state">Nie ma jeszcze terminów.<br>Ustaw termin w szczegółach pozycji – np. dzień podpisania umowy, odbioru albo dostawy kanapy.</div>` : ''}
      ${rows.length && !late.length && !months.length ? '<div class="empty-state">Wszystko z terminem jest już zrobione.</div>' : ''}
      ${doneCount ? `
        <div class="group" style="margin-top:20px">
          <button class="link-row" data-action="toggle-done-terminy"><span>${showDone ? 'Ukryj minione i zrobione' : `Pokaż minione i zrobione (${doneCount})`}</span></button>
        </div>` : ''}
    </main>`;
}

function agendaRow({ item: it, cat }) {
  const d = parseDate(it.due);
  const diff = dayDiff(it.due);
  const open = isOpen(it);
  const relCls = !open ? '' : diff < 0 ? 'late' : diff <= 7 ? 'soon' : '';
  const status = it.status === 'done' ? `<span class="st-done">${statusLabel(it)}</span>`
    : it.status === 'doing' ? `<span class="st-doing">${statusLabel(it)}</span>` : '';
  return `
    <div class="agenda-row ${open ? '' : 'past'}" data-open="${esc(it.id)}" role="button" tabindex="0">
      <div class="date-block ${diff === 0 ? 'today' : ''}">
        <b class="num">${d.getDate()}</b>
        <span>${d.toLocaleDateString('pl-PL', { weekday: 'short' }).replace(/\.$/, '')}</span>
      </div>
      <div class="agenda-text">
        <div class="t">${esc(it.title || 'Bez nazwy')}</div>
        <div class="s"><i class="dot" style="--c:${cat.color}"></i><span class="n">${esc(cat.name)}</span>${status}</div>
      </div>
      <span class="rel ${relCls}">${open ? relDay(it.due) : ICON.check}</span>
    </div>`;
}

// --- Budżet ------------------------------------------------------------------
function renderBudzet() {
  document.title = 'Budżet';
  const m = money(budgetItems());
  const budget = state.settings.budget;
  const base = budget || m.forecast;
  const pct = base ? Math.min(1, m.spent / base) : 0;
  const fpct = budget ? Math.min(1, m.forecast / budget) : 0;
  const over = budget && m.forecast > budget;
  const third = budget
    ? { label: over ? 'ponad budżet' : 'zapas', value: Math.abs(budget - m.forecast), cls: over ? 'bad' : 'ok' }
    : { label: 'do wydania', value: Math.max(0, m.forecast - m.spent), cls: '' };

  const cats = state.cats.map(cat => ({ cat, m: money(cat.items) }));
  const counted = cats.filter(c => !c.cat.noBudget);
  const excluded = cats.filter(c => c.cat.noBudget);
  const unpriced = allRows().filter(({ item, cat }) => !cat.noBudget && item.buy && isOpen(item) && !item.plan && !item.spent).length;
  const top = allRows().filter(({ item, cat }) => !cat.noBudget && item.status !== 'skip' && (item.spent || item.plan))
    .sort((a, b) => Math.max(b.item.spent || 0, b.item.plan || 0) - Math.max(a.item.spent || 0, a.item.plan || 0))
    .slice(0, 5);

  const catLine = ({ cat, m: cm }) => `
    <a class="budget-row" href="#/k/${encodeURIComponent(cat.id)}">
      ${catIcon(cat, 'small')}
      <div class="budget-text">
        <div class="t"><span class="n">${esc(cat.name)}</span><b class="num">${cm.forecast ? fmtMoney(cm.forecast) : ''}</b></div>
        ${cm.forecast ? `
          <div class="bar"><i style="width:${Math.min(100, cm.spent / cm.forecast * 100)}%;background:${cat.color}"></i></div>
          <div class="s">wydane ${fmtMoney(cm.spent)}${cm.plan ? ` · plan ${fmtMoney(cm.plan)}` : ''}</div>`
        : '<div class="s">brak kwot</div>'}
      </div>
    </a>`;

  return `
    ${navbar('Budżet')}
    <main class="page">
      <h1 class="large-title" data-title-marker>Budżet</h1>
      <p class="subtitle">${budget ? `Limit ${fmtMoney(budget)}` : 'Kwoty wpisujesz w szczegółach pozycji'}</p>
      <section class="hero money-hero">
        <div class="eyebrow">Wydane</div>
        <div class="metric num">${fmtMoney(m.spent)}</div>
        <div class="meta">${budget ? `z budżetu ${fmtMoney(budget)}` : m.forecast ? `z prognozowanych ${fmtMoney(m.forecast)}` : 'Brak kwot – wpisz plan lub wydatki przy pozycjach'}</div>
        <div class="hero-bar">${budget ? `<i class="fc ${over ? 'over' : ''}" style="width:${fpct * 100}%"></i>` : ''}<i style="width:${pct * 100}%"></i></div>
      </section>
      <div class="summary">
        <div class="stat"><b class="num">${fmtMoney(m.plan)}</b><span>plan</span></div>
        <div class="stat"><b class="num">${fmtMoney(m.forecast)}</b><span>prognoza</span></div>
        <div class="stat ${third.cls}"><b class="num">${fmtMoney(third.value)}</b><span>${third.label}</span></div>
      </div>
      <p class="footnote">Prognoza: za zrobione pozycje – ile wydane, za resztę – plan (albo więcej, jeśli już tyle wydano).${unpriced ? ` ${unpriced} ${plural(unpriced, 'zakup nie ma', 'zakupy nie mają', 'zakupów nie ma')} jeszcze kwoty.` : ''}</p>

      <h2 class="group-label">Limit budżetu</h2>
      <div class="group">
        <label class="setting-row">
          <span>Budżet łącznie</span>
          <input class="control num money-input" inputmode="decimal" data-setting="budget" placeholder="brak" value="${budget ? fmtMoney(budget).replace(' zł', '') : ''}">
        </label>
      </div>

      <h2 class="group-label">Kategorie</h2>
      <div class="group">${counted.map(catLine).join('') || '<div class="empty">Brak kategorii</div>'}</div>
      ${excluded.length ? `
        <h2 class="group-label">Poza budżetem</h2>
        <div class="group">${excluded.map(catLine).join('')}</div>
        <p class="footnote">Te kategorie nie wliczają się do sum (zmienisz to w Edytuj w kategorii).</p>` : ''}

      ${top.length ? `
        <h2 class="group-label">Największe pozycje</h2>
        <div class="group">${top.map(r => itemRow(r, { showCat: true })).join('')}</div>` : ''}
    </main>`;
}

// --- Więcej ------------------------------------------------------------------
function renderWiecej() {
  document.title = 'Więcej';
  const total = allRows().length;
  return `
    ${navbar('Więcej')}
    <main class="page">
      <h1 class="large-title" data-title-marker>Więcej</h1>
      <p class="subtitle">${state.cats.length} ${plural(state.cats.length, 'kategoria', 'kategorie', 'kategorii')} · ${total} ${plural(total, 'pozycja', 'pozycje', 'pozycji')}</p>

      <h2 class="group-label">Mieszkanie</h2>
      <div class="group">
        <label class="setting-row">
          <span>Nazwa</span>
          <input class="control" data-setting="title" placeholder="Nowe mieszkanie" value="${esc(state.settings.title)}" maxlength="40">
        </label>
      </div>

      <h2 class="group-label">Przydatne</h2>
      <div class="group">
        <a class="link-row" href="${PLANNER_URL}" target="_blank" rel="noopener"><span class="label"><span class="icon">${ICON.plan}</span>Planer mieszkania</span>${ICON.external}</a>
        <a class="link-row" href="https://ekw.ms.gov.pl/" target="_blank" rel="noopener"><span class="label"><span class="icon">${ICON.book}</span>Księgi wieczyste (EKW)</span>${ICON.external}</a>
      </div>

      <h2 class="group-label">Kopia zapasowa</h2>
      <div class="group">
        <button class="link-row" data-action="export"><span class="label"><span class="icon">${ICON.export}</span>Eksportuj kopię</span></button>
        <button class="link-row" data-action="import"><span class="label"><span class="icon">${ICON.import}</span>Importuj kopię</span></button>
      </div>
      <p class="footnote">Dane są tylko na tym urządzeniu. Apka z ekranu początkowego ma inne dane niż Safari – kopią przeniesiesz je między nimi albo na nowy telefon.</p>

      <h2 class="group-label">Lista</h2>
      <div class="group">
        <button class="link-row" data-action="restore"><span class="label"><span class="icon">${ICON.restore}</span>Przywróć usunięte pozycje domyślne</span></button>
        <button class="link-row danger" data-action="reset">Wyczyść wszystkie dane</button>
      </div>
    </main>`;
}

// --- Routing i rysowanie -----------------------------------------------------
function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  if (parts[0] === 'k') {
    const cat = state.cats.find(c => c.id === decodeURIComponent(parts[1] || ''));
    if (cat) return { tab: 'start', cat, key: 'k/' + cat.id };
  }
  const tab = TABS.some(t => t.id === parts[0]) ? parts[0] : 'start';
  return { tab, cat: null, key: tab };
}
const depth = r => (r.cat ? 1 : 0);

function render(opts = {}) {
  const r = route();
  let html;
  if (r.cat) html = renderCat(r.cat, opts);
  else if (r.tab === 'terminy') html = renderTerminy();
  else if (r.tab === 'budzet') html = renderBudzet();
  else if (r.tab === 'wiecej') html = renderWiecej();
  else html = renderStart(opts);
  app.innerHTML = html + tabbar(r.tab);
  justToggled = '';
  updateNavbar();
}

// Przerysowanie bez gubienia przewinięcia (po odhaczeniu itp.).
function rerender(opts) {
  const y = window.scrollY;
  render(opts);
  window.scrollTo(0, y);
}

function updateNavbar() {
  const nav = app.querySelector('.navbar');
  const marker = app.querySelector('[data-title-marker]');
  if (!nav) return;
  nav.classList.toggle('solid', window.scrollY > 4);
  nav.classList.toggle('scrolled', !!marker && marker.getBoundingClientRect().bottom < nav.offsetHeight + 4);
}
window.addEventListener('scroll', updateNavbar, { passive: true });

let lastRoute = route();
window.addEventListener('hashchange', () => {
  const r = route();
  if (r.key === lastRoute.key) return rerender();
  ui.scroll[lastRoute.key] = window.scrollY;
  const dir = depth(r) > depth(lastRoute) ? 'forward' : depth(r) < depth(lastRoute) ? 'back' : '';
  lastRoute = r;
  const go = () => { render({ animate: true }); window.scrollTo(0, dir === 'forward' ? 0 : ui.scroll[r.key] || 0); };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (dir && document.startViewTransition && !reduce) {
    document.documentElement.dataset.dir = dir;
    document.startViewTransition(go);
  } else go();
});

// --- Toast -------------------------------------------------------------------
let toastTimer;
function toast(text, action) {
  let el = document.querySelector('.toast');
  if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.innerHTML = `<span>${esc(text)}</span>${action ? `<button>${esc(action.label)}</button>` : ''}`;
  el.classList.toggle('has-action', !!action);
  if (action) el.querySelector('button').onclick = () => { el.classList.remove('show'); action.run(); };
  requestAnimationFrame(() => el.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), action ? 4000 : 2200);
}

// --- Zmiany stanu ------------------------------------------------------------
// Wykonuje zmianę, zapisuje i przerysowuje; świętuje ukończenie kategorii.
function mutate(fn, cat) {
  const beforeCat = cat ? progress(cat.items).complete : false;
  const beforeAll = progress(allRows().map(r => r.item)).complete;
  fn();
  saveState();
  rerender();
  if (!beforeAll && progress(allRows().map(r => r.item)).complete) toast('🎉 Wszystko gotowe – witaj w domu!');
  else if (cat && !beforeCat && progress(cat.items).complete) toast(`🎉 ${cat.name} – wszystko zrobione`);
}

function toggleItem(id) {
  const f = findItem(id);
  if (!f) return;
  const { item, cat } = f;
  mutate(() => {
    if (item.status === 'done' || item.status === 'skip') {
      item.status = 'todo';
      delete item.doneAt;
    } else {
      item.status = 'done';
      item.doneAt = todayISO();
      justToggled = lingering = id;
    }
  }, cat);
  clearTimeout(lingerTimer);
  if (lingering) lingerTimer = setTimeout(() => { lingering = ''; rerender(); }, 900);
}

function setStatus(item, cat, st) {
  if (item.status === st) return;
  mutate(() => {
    item.status = st;
    if (st === 'done') item.doneAt = todayISO(); else delete item.doneAt;
  }, cat);
}

function addItem(cat, title) {
  const item = { id: uid(), title, status: 'todo', buy: cat.buy };
  mutate(() => cat.items.push(item), null);
  return item;
}

function deleteItem(id) {
  const f = findItem(id);
  if (!f) return;
  const idx = f.cat.items.indexOf(f.item);
  mutate(() => f.cat.items.splice(idx, 1), null);
  toast('Usunięto pozycję', {
    label: 'Cofnij',
    run: () => { if (state.cats.includes(f.cat)) mutate(() => f.cat.items.splice(Math.min(idx, f.cat.items.length), 0, f.item), null); },
  });
}

// --- Panele od dołu ----------------------------------------------------------
function openSheet(html, { onClick, onInput, onChange, onClose, cls = '' } = {}) {
  const el = document.createElement('div');
  el.className = 'sheet-backdrop';
  el.innerHTML = `<div class="sheet ${cls}" role="dialog" aria-modal="true"><div class="handle"></div>${html}</div>`;
  document.body.appendChild(el);
  document.body.classList.add('sheet-open');
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('open')));
  const sheet = el.querySelector('.sheet');

  let closed = false;
  const close = () => {
    if (closed) return;
    closed = true;
    if (document.activeElement && el.contains(document.activeElement)) document.activeElement.blur();
    el.classList.remove('open');
    sheet.style.transform = '';
    document.body.classList.remove('sheet-open');
    document.removeEventListener('keydown', onKey);
    setTimeout(() => el.remove(), 300);
    if (onClose) onClose();
  };
  const onKey = e => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);
  el.addEventListener('click', e => {
    if (e.target === el) return close();
    const b = e.target.closest('[data-sheet]');
    if (b && b.dataset.sheet === 'close') return close();
    if (onClick) onClick(e, b, close);
  });
  if (onInput) el.addEventListener('input', onInput);
  if (onChange) el.addEventListener('change', onChange);

  // Zamykanie przeciągnięciem w dół (za uchwyt / nagłówek albo gdy treść jest na górze).
  let startY = null, dy = 0;
  sheet.addEventListener('touchstart', e => {
    const onHead = e.target.closest('.handle, .sheet-head');
    if (!onHead && (sheet.scrollTop > 0 || e.target.closest('input, textarea, select, .status-grid, .picker'))) return;
    startY = e.touches[0].clientY; dy = 0;
  }, { passive: true });
  sheet.addEventListener('touchmove', e => {
    if (startY === null) return;
    dy = Math.max(0, e.touches[0].clientY - startY);
    if (dy > 0) { sheet.style.transition = 'none'; sheet.style.transform = `translateY(${dy}px)`; }
  }, { passive: true });
  sheet.addEventListener('touchend', () => {
    if (startY === null) return;
    startY = null;
    sheet.style.transition = '';
    if (dy > 110) close(); else sheet.style.transform = '';
  });
  return { el, sheet, close };
}

function statusGrid(it) {
  const icon = st => st === 'done' ? ICON.check : st === 'skip' ? ICON.minus : '';
  return STATUSES.map(st => `
    <button class="status-btn ${st} ${it.status === st ? 'on' : ''}" data-status="${st}" aria-pressed="${it.status === st}">
      <span class="check ${st}">${icon(st)}</span><span>${statusLabel(it, st)}</span>
    </button>`).join('');
}

function itemSheetHtml(it, cat) {
  const hint = HINTS[it.id];
  const link = safeUrl(it.link);
  return `
    <div class="sheet-head">
      <span class="cat-tag big">${catIcon(cat, 'tiny')}<span class="n">${esc(cat.name)}</span></span>
      <button class="sheet-done" data-sheet="close">Gotowe</button>
    </div>
    <textarea class="title-input" data-f="title" rows="1" placeholder="Nazwa pozycji" enterkeyhint="done">${esc(it.title)}</textarea>
    <div class="status-grid">${statusGrid(it)}</div>
    ${hint ? `<div class="hint-card">${ICON.bulb}<p>${esc(hint)}</p></div>` : ''}

    <div class="group form">
      <div class="field">
        <span>Termin</span>
        <span class="date-wrap">
          <span class="date-val ${it.due ? '' : 'empty'}">${it.due ? esc(fmtDate(it.due, { year: true, weekday: true })) : 'Dodaj'}</span>
          <input type="date" data-f="due" value="${esc(it.due || '')}" aria-label="Termin">
        </span>
        ${it.due ? `<button class="clear-btn" data-clear="due" aria-label="Usuń termin">${ICON.close}</button>` : ''}
      </div>
      <label class="field"><span>Plan</span><input class="money-input" inputmode="decimal" data-f="plan" placeholder="0" value="${esc(fmtInput(it.plan))}"><i class="unit">zł</i></label>
      <label class="field"><span>Wydane</span><input class="money-input" inputmode="decimal" data-f="spent" placeholder="0" value="${esc(fmtInput(it.spent))}"><i class="unit">zł</i></label>
    </div>

    <div class="group form">
      <div class="field">
        <span>Link</span>
        <input type="url" inputmode="url" data-f="link" placeholder="https://" value="${esc(it.link || '')}" autocapitalize="off" autocorrect="off" spellcheck="false">
        ${link ? `<a class="open-link" href="${esc(link)}" target="_blank" rel="noopener" aria-label="Otwórz link">${ICON.external}</a>` : ''}
      </div>
      <label class="field col"><span>Notatka</span><textarea data-f="note" rows="3" placeholder="Model, wymiary, kontakt, numer zamówienia…">${esc(it.note || '')}</textarea></label>
    </div>

    <div class="group form">
      <div class="field">
        <span>Rodzaj</span>
        <div class="segmented" role="group">
          <button class="${it.buy ? '' : 'on'}" data-buy="0">Zadanie</button>
          <button class="${it.buy ? 'on' : ''}" data-buy="1">Zakup</button>
        </div>
      </div>
      <label class="field">
        <span>Kategoria</span>
        <select class="select" data-f="cat">
          ${state.cats.map(c => `<option value="${esc(c.id)}" ${c === cat ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}
        </select>
      </label>
    </div>
    ${it.doneAt && it.status === 'done' ? `<p class="footnote">${esc(statusLabel(it))}: ${esc(fmtDate(it.doneAt, { year: true }))}</p>` : ''}
    <button class="btn-danger" data-sheet="delete">Usuń pozycję</button>`;
}

function openItem(id) {
  let f = findItem(id);
  if (!f) return;
  const { item } = f;
  let s;
  const refresh = () => {
    f = findItem(id);
    if (!f) return s.close();
    const y = s.sheet.scrollTop;
    const active = document.activeElement && s.sheet.contains(document.activeElement) ? document.activeElement.dataset.f : '';
    s.sheet.innerHTML = '<div class="handle"></div>' + itemSheetHtml(f.item, f.cat);
    autoGrow(s.sheet.querySelector('.title-input'));
    s.sheet.scrollTop = y;
    if (active === 'title') s.sheet.querySelector('.title-input').focus();
  };
  const save = () => { saveState(); rerender(); };

  s = openSheet(itemSheetHtml(item, f.cat), {
    cls: 'item-sheet',
    onClick(e, b) {
      const st = e.target.closest('[data-status]');
      if (st) { setStatus(item, f.cat, st.dataset.status); return refresh(); }
      const buy = e.target.closest('[data-buy]');
      if (buy) { item.buy = buy.dataset.buy === '1'; save(); return refresh(); }
      const clr = e.target.closest('[data-clear]');
      if (clr) { delete item[clr.dataset.clear]; save(); return refresh(); }
      // Na iPhonie stuknięcie w (niewidoczne) pole daty samo otwiera wybór daty; na komputerze trzeba pomóc.
      const dw = e.target.closest('.date-wrap');
      if (dw && window.matchMedia('(pointer: fine)').matches) { try { dw.querySelector('input').showPicker(); } catch {} }
      if (b && b.dataset.sheet === 'delete') { s.close(); deleteItem(id); }
    },
    onInput(e) {
      const k = e.target.dataset.f;
      if (k === 'title') { item.title = e.target.value.replace(/\n/g, ' '); autoGrow(e.target); saveState(); }
      else if (k === 'note') { item.note = e.target.value; if (!item.note) delete item.note; saveState(); }
    },
    onChange(e) {
      const k = e.target.dataset.f;
      if (!k) return;
      if (k === 'title') { item.title = e.target.value.replace(/\n/g, ' ').trim(); save(); }
      else if (k === 'note') { item.note = e.target.value.trim(); if (!item.note) delete item.note; save(); }
      else if (k === 'due') { if (e.target.value) item.due = e.target.value; else delete item.due; save(); refresh(); }
      else if (k === 'plan' || k === 'spent') {
        const v = parseAmount(e.target.value);
        if (v) item[k] = v; else delete item[k];
        e.target.value = fmtInput(v);
        save();
      } else if (k === 'link') {
        let v = e.target.value.trim();
        if (v && !/^[a-z][a-z0-9+.-]*:/i.test(v)) v = 'https://' + v;
        if (v) item.link = v; else delete item.link;
        save(); refresh();
      } else if (k === 'cat') {
        const to = state.cats.find(c => c.id === e.target.value);
        if (to && to !== f.cat) {
          f.cat.items.splice(f.cat.items.indexOf(item), 1);
          to.items.push(item);
          save(); refresh();
          toast(`Przeniesiono do: ${to.name}`);
        }
      }
    },
    onClose() {
      if (!item.title.trim() && findItem(id)) {
        const c = findItem(id).cat;
        c.items.splice(c.items.indexOf(item), 1);
      }
      saveState();
      rerender();
    },
  });
  const title = s.sheet.querySelector('.title-input');
  autoGrow(title);
  title.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); title.blur(); } });
}

function autoGrow(t) {
  if (!t) return;
  t.style.height = 'auto';
  t.style.height = t.scrollHeight + 'px';
}

// Kategoria: nowa lub edycja.
function openCatSheet(cat) {
  const draft = cat
    ? { name: cat.name, icon: cat.icon, color: cat.color, phase: cat.phase, buy: cat.buy, noBudget: cat.noBudget }
    : { name: '', icon: 'star', color: CAT_COLORS[0], phase: 'setup', buy: false, noBudget: false };
  const html = () => `
    <div class="sheet-head">
      <button class="sheet-cancel" data-sheet="close">Anuluj</button>
      <b>${cat ? 'Edytuj kategorię' : 'Nowa kategoria'}</b>
      <button class="sheet-done" data-sheet="save">${cat ? 'Gotowe' : 'Dodaj'}</button>
    </div>
    <div class="cat-preview">${catIcon(draft, 'big')}</div>
    <div class="group form">
      <label class="field"><input class="name-input" data-d="name" placeholder="Nazwa kategorii" value="${esc(draft.name)}" maxlength="40"></label>
    </div>
    <div class="picker colors">
      ${CAT_COLORS.map(c => `<button class="swatch ${c === draft.color ? 'on' : ''}" data-color="${c}" style="--c:${c}" aria-label="Kolor ${c}"></button>`).join('')}
    </div>
    <div class="picker icons">
      ${Object.keys(CAT_ICONS).map(k => `<button class="icon-pick ${k === draft.icon ? 'on' : ''}" data-icon="${k}" aria-label="Ikona ${k}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${CAT_ICONS[k]}</svg></button>`).join('')}
    </div>
    <div class="group form">
      <div class="field">
        <span>Sekcja</span>
        <div class="segmented" role="group">
          ${PHASES.map(ph => `<button class="${draft.phase === ph.id ? 'on' : ''}" data-phase="${ph.id}">${ph.id === 'buy' ? 'Zakup' : 'Urządzanie'}</button>`).join('')}
        </div>
      </div>
      <div class="field">
        <span>Nowe pozycje</span>
        <div class="segmented" role="group">
          <button class="${draft.buy ? '' : 'on'}" data-dbuy="0">Zadania</button>
          <button class="${draft.buy ? 'on' : ''}" data-dbuy="1">Zakupy</button>
        </div>
      </div>
      <label class="field">
        <span>Licz w budżecie</span>
        <input type="checkbox" class="switch" data-d="budget" ${draft.noBudget ? '' : 'checked'}>
      </label>
    </div>
    ${cat ? '<button class="btn-danger" data-sheet="delete">Usuń kategorię</button>' : ''}`;

  let s;
  const redraw = () => {
    const name = s.sheet.querySelector('.name-input');
    draft.name = name.value;
    s.sheet.innerHTML = '<div class="handle"></div>' + html();
  };
  s = openSheet(html(), {
    cls: 'cat-sheet',
    onClick(e, b, close) {
      const t = e.target.closest('[data-color], [data-icon], [data-phase], [data-dbuy]');
      if (t) {
        if (t.dataset.color) draft.color = t.dataset.color;
        if (t.dataset.icon) draft.icon = t.dataset.icon;
        if (t.dataset.phase) draft.phase = t.dataset.phase;
        if (t.dataset.dbuy) draft.buy = t.dataset.dbuy === '1';
        return redraw();
      }
      if (!b) return;
      if (b.dataset.sheet === 'save') {
        const name = s.sheet.querySelector('.name-input').value.trim();
        if (!name) { s.sheet.querySelector('.name-input').focus(); return; }
        draft.name = name;
        if (cat) {
          mutate(() => Object.assign(cat, draft), null);
          close();
        } else {
          const nc = { id: uid(), ...draft, items: [] };
          state.cats.push(nc);
          saveState();
          close();
          location.hash = `#/k/${nc.id}`;
        }
      } else if (b.dataset.sheet === 'delete') {
        const n = cat.items.length;
        if (!confirm(`Usunąć kategorię „${cat.name}”${n ? ` razem z ${n} ${plural(n, 'pozycją', 'pozycjami', 'pozycjami')}` : ''}?`)) return;
        state.cats.splice(state.cats.indexOf(cat), 1);
        saveState();
        close();
        location.hash = '#/';
      }
    },
    onChange(e) {
      if (e.target.dataset.d === 'budget') draft.noBudget = !e.target.checked;
    },
  });
  if (!cat) setTimeout(() => s.sheet.querySelector('.name-input').focus(), 50);
}

// --- Zdarzenia ---------------------------------------------------------------
app.addEventListener('click', e => {
  const tab = e.target.closest('.tab-item');
  if (tab) {
    // Ponowne stuknięcie aktywnej karty: powrót do początku (jak w iOS).
    const r = route();
    if (tab.dataset.tab === r.tab && !r.cat) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }
  const a = e.target.closest('[data-action]');
  if (a) {
    const act = a.dataset.action;
    if (act === 'toggle') { e.stopPropagation(); return toggleItem(a.dataset.id); }
    if (act === 'toggle-done') {
      const cat = route().cat;
      if (cat) { ui.showDone[cat.id] = !ui.showDone[cat.id]; saveUI(); rerender(); }
      return;
    }
    if (act === 'toggle-done-terminy') { ui.showDone.terminy = !ui.showDone.terminy; saveUI(); return rerender(); }
    if (act === 'edit-cat') return openCatSheet(route().cat);
    if (act === 'new-cat') return openCatSheet(null);
    if (act === 'hide-hint') { try { localStorage.setItem(HINT_KEY, '1'); } catch {} return rerender(); }
    if (act === 'export') return exportData();
    if (act === 'import') return document.getElementById('importFile').click();
    if (act === 'restore') return restoreDefaults();
    if (act === 'reset') return resetAll();
    return;
  }
  const row = e.target.closest('[data-open]');
  if (row) openItem(row.dataset.open);
});

app.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-open], .done-toggle')) {
    e.preventDefault();
    e.target.click();
  }
});

app.addEventListener('input', e => {
  if (e.target.id === 'search') {
    ui.query = e.target.value;
    document.getElementById('home-body').innerHTML = homeBody();
  }
});
app.addEventListener('keydown', e => {
  if (e.target.id === 'search' && e.key === 'Enter') e.target.blur();
});

app.addEventListener('change', e => {
  const k = e.target.dataset.setting;
  if (k === 'title') {
    state.settings.title = e.target.value.trim();
    saveState(); rerender();
  } else if (k === 'budget') {
    state.settings.budget = parseAmount(e.target.value);
    saveState(); rerender();
  }
});

app.addEventListener('submit', e => {
  const form = e.target.closest('.add-row');
  if (!form) return;
  e.preventDefault();
  const input = form.querySelector('input');
  const title = input.value.trim();
  input.value = '';
  const cat = state.cats.find(c => c.id === form.dataset.cat);
  if (!title || !cat) return;
  addItem(cat, title);
  const again = app.querySelector('.add-row input');
  if (again) { again.focus(); again.scrollIntoView({ block: 'nearest' }); }
});
// Wpisany tekst nie ginie, gdy ktoś zamiast „Gotowe” stuknie gdzie indziej.
app.addEventListener('focusout', e => {
  const form = e.target.closest && e.target.closest('.add-row');
  if (form && e.target.value.trim()) form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
});

// --- Kopia zapasowa i porządki -----------------------------------------------
async function exportData() {
  const name = `mieszkanie-${todayISO()}.json`;
  const file = new File([JSON.stringify(state, null, 2)], name, { type: 'application/json' });
  // Na telefonie arkusz udostępniania („Zachowaj w Plikach”) – zwykłe pobieranie
  // w aplikacji z ekranu początkowego na iOS bywa zawodne.
  const touch = window.matchMedia('(pointer: coarse)').matches;
  if (touch && navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file] }); return; }
    catch (e) { if (e.name === 'AbortError') return; }
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

document.getElementById('importFile').addEventListener('change', async e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!data || typeof data !== 'object' || !Array.isArray(data.cats)) throw new Error();
    if (!confirm('Zastąpić obecne dane danymi z pliku?')) return;
    state = normalize(data);
    saveState();
    location.hash = '#/';
    rerender();
    toast('Kopia wczytana');
  } catch {
    alert('Niepoprawny plik kopii.');
  }
});

function restoreDefaults() {
  const before = allRows().length + state.cats.length;
  state.seeded = state.seeded.filter(k =>
    k.startsWith('c:') ? state.cats.some(c => c.id === k.slice(2)) : !!findItem(k.slice(2)));
  seedDefaults(state);
  const added = allRows().length + state.cats.length - before;
  saveState();
  rerender();
  toast(added ? `Przywrócono: ${added}` : 'Nic do przywrócenia');
}

function resetAll() {
  if (!confirm('Usunąć wszystkie dane (statusy, kwoty, notatki, własne pozycje) i zacząć od domyślnej listy?')) return;
  state = normalize({});
  saveState();
  ui.query = '';
  location.hash = '#/';
  rerender();
  toast('Wyczyszczono');
}

// Odśwież po powrocie do aplikacji (np. gdy zmienił się dzień).
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && !document.querySelector('.sheet-backdrop') && !app.contains(document.activeElement)) rerender();
});
render({ animate: true });

// Działanie offline (np. słaby zasięg przy otwieraniu z ekranu początkowego).
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
