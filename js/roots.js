// ════════════════════════════════════════
//  roots.js — 字根字首：首頁 / 列表 / 卡片
// ════════════════════════════════════════

const ROOT_CATEGORIES = {
  'A':{ label:'否定字首',    desc:'un- / dis- / mis- / non-',       color:'#e05c5c', icon:'✗' },
  'B':{ label:'時間順序字首',desc:'pre- / post- / re- / fore-',     color:'#e8b86d', icon:'⏱' },
  'C':{ label:'數量程度字首',desc:'over- / under- / semi- / hyper-',color:'#9b7fe8', icon:'📊' },
  'D':{ label:'方位空間字首',desc:'sub- / trans- / inter- / pro-',  color:'#5b8fd4', icon:'🧭' },
  'E':{ label:'商業溝通字根',desc:'dict / voc / scrib / graph',     color:'#4caf82', icon:'💬' },
  'F':{ label:'感官移動字根',desc:'spec / vis / aud / port / mit',  color:'#e8840a', icon:'👁' },
  'G':{ label:'製作力量字根',desc:'fac / struct / form / ten / rupt',color:'#9b7fe8',icon:'⚙' },
  'H':{ label:'生命特質字根',desc:'gen / bene / nov / fin / val',   color:'#4caf82', icon:'🌱' },
  'I':{ label:'字尾 Suffixes',desc:'-tion / -ment / -able / -ness', color:'#6b7280', icon:'尾' },
};

let selectedRoot    = null;
let rootMode        = 'home';   // home | list | card
let rfcOrder        = [];
let rfcIdx          = 0;
let rfcCategory     = 'all';
const expandedCats  = new Set(); // 預設全部收合

// ════════════════════════════════════════
//  首頁 (Home)
// ════════════════════════════════════════
function renderRootsHome() {
  const ROOTS = window.ROOTS || [];
  const wrap = document.getElementById('rootsListWrap');
  if (!wrap) return;

  const total = ROOTS.length;
  const catCounts = {};
  ROOTS.forEach(r => { catCounts[r.category] = (catCounts[r.category]||0)+1; });

  wrap.innerHTML = `
    <!-- 積木圖 -->
    <div class="roots-hero">
      <img src="img/word-building.png" alt="單字的積木結構 Word Building System"
           class="roots-hero-img" onerror="this.style.display='none'">
      <div class="roots-hero-caption">字根 × 字首 × 字尾 = 單字積木系統</div>
    </div>

    <!-- 統計列 -->
    <div class="roots-home-stats">
      <div class="rhs-item">
        <div class="rhs-num">${total}</div>
        <div class="rhs-lbl">字根字首總數</div>
      </div>
      ${Object.entries(ROOT_CATEGORIES).map(([k,cat])=>`
        <div class="rhs-item">
          <div class="rhs-num" style="color:${cat.color}">${catCounts[k]||0}</div>
          <div class="rhs-lbl">${cat.label}</div>
        </div>`).join('')}
    </div>

    <!-- 分類卡片 -->
    <div class="roots-home-grid">
      ${Object.entries(ROOT_CATEGORIES).map(([k,cat])=>`
        <div class="rhg-card" onclick="switchToListMode('${k}')"
             style="border-color:${cat.color}">
          <div class="rhg-icon" style="color:${cat.color}">${cat.icon}</div>
          <div class="rhg-label" style="color:${cat.color}">${cat.label}</div>
          <div class="rhg-desc">${cat.desc}</div>
          <div class="rhg-count">${catCounts[k]||0} 個</div>
        </div>`).join('')}
    </div>`;
}

function switchToListMode(catId) {
  rootMode = 'list';
  // Show only selected category expanded
  expandedCats.clear();
  if (catId) expandedCats.add(catId);
  setRootMode('list');
}

// ════════════════════════════════════════
//  模式切換
// ════════════════════════════════════════
function setRootMode(mode) {
  rootMode = mode;
  document.querySelectorAll('.root-mode-btn').forEach(b =>
    b.classList.toggle('on', b.dataset.mode === mode));

  const homeWrap = document.getElementById('rootsHomeWrap');
  const listWrap = document.getElementById('rootsListWrap');
  const cardWrap = document.getElementById('rootsCardWrap');

  if (homeWrap) homeWrap.style.display = mode === 'home' ? 'block' : 'none';
  if (listWrap) listWrap.style.display = mode === 'list' ? 'block' : 'none';
  if (cardWrap) cardWrap.classList.toggle('show', mode === 'card');

  if (mode === 'home') renderRootsHome();
  if (mode === 'list') renderRoots();
  if (mode === 'card') { rfcBuildOrder(); rfcShow(); }
}

// ════════════════════════════════════════
//  列表模式
// ════════════════════════════════════════
function toggleRootCat(catId) {
  if (expandedCats.has(catId)) expandedCats.delete(catId);
  else expandedCats.add(catId);
  renderRoots();
}

function renderRoots() {
  const ROOTS  = window.ROOTS || [];
  const listEl = document.getElementById('rootsList');
  if (!listEl) return;

  listEl.innerHTML = Object.entries(ROOT_CATEGORIES).map(([catId, cat]) => {
    const items = ROOTS.filter(r => r.category === catId);
    if (!items.length) return '';
    const isOpen = expandedCats.has(catId);
    return `
      <div class="roots-cat-header" onclick="toggleRootCat('${catId}')"
           style="border-left:4px solid ${cat.color}">
        <div class="roots-cat-left">
          <span class="roots-cat-arrow">${isOpen ? '▾' : '▸'}</span>
          <span class="roots-cat-icon" style="color:${cat.color}">${cat.icon}</span>
          <span class="roots-cat-label" style="color:${cat.color}">${cat.label}</span>
          <span class="roots-cat-desc">${cat.desc}</span>
        </div>
        <span class="roots-cat-count">${items.length}</span>
      </div>
      <div class="roots-cat-items ${isOpen ? 'open' : ''}">
        ${items.map(r => `
          <div class="root-item ${selectedRoot===r.id?'selected':''}"
               onclick="showRoot('${r.id}')"
               style="${selectedRoot===r.id?`border-left-color:${cat.color};background:${cat.color}12`:''}">
            <div class="root-item-left">
              <div class="root-name" style="color:${cat.color}">${r.name}</div>
              <div class="root-mean">${r.meaning}</div>
            </div>
            <span class="root-count">${r.words.length}</span>
          </div>`).join('')}
      </div>`;
  }).join('');

  if (selectedRoot) showRoot(selectedRoot);
}

// ── 右欄詳細 ──
function showRoot(id) {
  const ROOTS = window.ROOTS || [];
  selectedRoot = id;
  const r = ROOTS.find(x => x.id === id);
  if (!r) return;
  const cat = ROOT_CATEGORIES[r.category] || { color:'var(--gold)', label:'' };

  document.querySelectorAll('.root-item').forEach(el => {
    const nm = el.querySelector('.root-name');
    const isThis = nm && nm.textContent.trim() === r.name;
    el.classList.toggle('selected', isThis);
    if (isThis) { el.style.borderLeftColor=cat.color; el.style.background=cat.color+'12'; }
    else if (!el.classList.contains('selected')) { el.style.borderLeftColor=''; el.style.background=''; }
  });

  const det = document.getElementById('rootDetail');
  if (!det) return;
  det.innerHTML = `
    <div class="root-detail-badge" style="border-color:${cat.color};color:${cat.color}">${cat.icon} ${cat.label}</div>
    <div class="root-detail-name" style="color:${cat.color}">${r.name}</div>
    <div class="root-detail-meaning">意義：${esc(r.meaning)}</div>
    <div class="root-detail-origin">來源：${esc(r.origin)}</div>
    <div class="root-words">
      ${r.words.map(w => `
        <div class="root-word-row">
          <div class="rw-word">
            ${hlWord(w.w, w.hl, cat.color)}
            <button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${w.w}">🔊</button>
          </div>
          <div class="rw-meaning">${esc(w.meaning)}</div>
        </div>`).join('')}
    </div>`;
}

function hlWord(word, hl, color) {
  const i = word.toLowerCase().indexOf(hl.toLowerCase());
  if (i < 0) return esc(word);
  return esc(word.slice(0,i))
    + `<span style="color:${color||'var(--gold)'};font-weight:700">${esc(word.slice(i,i+hl.length))}</span>`
    + esc(word.slice(i+hl.length));
}

// ════════════════════════════════════════
//  卡片模式
// ════════════════════════════════════════
function rfcBuildOrder() {
  const ROOTS = window.ROOTS || [];
  const pool  = rfcCategory==='all' ? ROOTS : ROOTS.filter(r=>r.category===rfcCategory);
  rfcOrder    = pool.map((_, i) => ROOTS.indexOf(pool[i]));
  rfcIdx      = 0;
}
function rfcSetCategory(cat) {
  rfcCategory = cat;
  document.querySelectorAll('.rfc-cat-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.cat===cat));
  rfcBuildOrder(); rfcShow();
}
function rfcShuffle() {
  for (let i=rfcOrder.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [rfcOrder[i],rfcOrder[j]]=[rfcOrder[j],rfcOrder[i]];
  }
  rfcIdx=0; rfcShow();
}
function rfcFlip()   { document.getElementById('rfcInner').classList.toggle('flipped'); }
function rfcNext()   { if(rfcIdx<rfcOrder.length-1){rfcIdx++;rfcShow();} }
function rfcPrev()   { if(rfcIdx>0){rfcIdx--;rfcShow();} }

function rfcShow() {
  const ROOTS = window.ROOTS || [];
  document.getElementById('rfcInner')?.classList.remove('flipped');
  const tot = rfcOrder.length;
  document.getElementById('rfcCounter').textContent = tot ? `${rfcIdx+1} / ${tot}` : '0 / 0';
  document.getElementById('rfcBar').style.width = tot ? `${((rfcIdx+1)/tot)*100}%` : '0%';
  document.getElementById('rfcPrev').disabled = rfcIdx===0;
  document.getElementById('rfcNext').disabled = rfcIdx>=tot-1;
  if (!tot) return;
  const r   = ROOTS[rfcOrder[rfcIdx]];
  if (!r) return;
  const cat = ROOT_CATEGORIES[r.category] || { color:'var(--gold)', icon:'', label:'' };
  const rootEl = document.getElementById('rfcRoot');
  if (rootEl) { rootEl.textContent=r.name; rootEl.style.color=cat.color; }
  const originEl = document.getElementById('rfcOrigin');
  if (originEl) originEl.textContent = r.origin;
  const meanEl = document.getElementById('rfcMeaning');
  if (meanEl) meanEl.textContent = r.meaning;
  const previewEl = document.getElementById('rfcWordsPreview');
  if (previewEl) previewEl.innerHTML = r.words.slice(0,3).map(w=>
    `<span class="rfc-word-chip" style="color:${cat.color};border-color:${cat.color}40;background:${cat.color}15">${w.w}</span>`
  ).join('');
  const bodyEl = document.getElementById('rfcWordlistBody');
  if (bodyEl) bodyEl.innerHTML = r.words.map(w=>`
    <div class="rfc-wordlist-row">
      <span class="rfc-wl-word">${hlWord(w.w,w.hl,cat.color)}
        <button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${w.w}">🔊</button>
      </span>
      <span class="rfc-wl-meaning">${esc(w.meaning)}</span>
    </div>`).join('');
}

document.addEventListener('keydown', e => {
  if (rootMode!=='card') return;
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if (e.key==='ArrowRight') rfcNext();
  else if (e.key==='ArrowLeft') rfcPrev();
  else if (e.key===' ') { e.preventDefault(); rfcFlip(); }
});
