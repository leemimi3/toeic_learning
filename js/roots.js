// ════════════════════════════════════════
//  roots.js — 字根字首：列表 + 卡片模式
// ════════════════════════════════════════

const ROOT_CATEGORIES = {
  'A': { label:'字首 Prefixes', desc:'方向、位置、數量', color:'var(--gold)' },
  'B': { label:'動作字根',      desc:'行為、動作類',     color:'var(--blue)' },
  'C': { label:'感知字根',      desc:'看、聽、說、感覺', color:'var(--purple)' },
  'D': { label:'數量時間',      desc:'數字、時間、順序', color:'var(--green)' },
  'E': { label:'品質評價',      desc:'好壞、真假、新舊', color:'var(--red)' },
  'F': { label:'商務職場',      desc:'多益高頻商務字根', color:'#e8a44a' },
  'G': { label:'字尾 Suffixes', desc:'名詞、形容詞、副詞字尾', color:'var(--muted)' },
};

let selectedRoot = null;
let rootMode     = 'list';
let rfcOrder     = [], rfcIdx = 0;
let rfcCategory  = 'all';

// ── 模式切換 ──
function setRootMode(mode) {
  rootMode = mode;
  document.getElementById('btnListMode').classList.toggle('on', mode === 'list');
  document.getElementById('btnCardMode').classList.toggle('on', mode === 'card');
  document.getElementById('rootsListWrap').classList.toggle('hidden', mode === 'card');
  document.getElementById('rootsCardWrap').classList.toggle('show',   mode === 'card');
  if (mode === 'card') { rfcBuildOrder(); rfcShow(); }
}

// ── 列表模式渲染 ──
function renderRoots() {
  const ROOTS = window.ROOTS || [];
  const listEl = document.getElementById('rootsList');
  if (!listEl) return;

  // 依分類分組渲染
  const cats = Object.entries(ROOT_CATEGORIES);
  listEl.innerHTML = cats.map(([catId, cat]) => {
    const items = ROOTS.filter(r => r.category === catId);
    if (!items.length) return '';
    return `
      <div class="roots-cat-header" style="color:${cat.color}">
        ${cat.label}
        <span class="roots-cat-count">${items.length}</span>
      </div>
      ${items.map(r => `
        <div class="root-item ${selectedRoot === r.id ? 'selected' : ''}"
             onclick="showRoot('${r.id}')"
             style="${selectedRoot === r.id ? `border-left-color:${cat.color}` : ''}">
          <div class="root-item-left">
            <div class="root-name" style="color:${cat.color}">${r.name}</div>
            <div class="root-mean">${r.meaning}</div>
          </div>
          <span class="root-count">${r.words.length}</span>
        </div>`).join('')}`;
  }).join('');

  if (selectedRoot) showRoot(selectedRoot);
}

// ── 顯示右欄詳細 ──
function showRoot(id) {
  const ROOTS = window.ROOTS || [];
  selectedRoot = id;
  const r = ROOTS.find(x => x.id === id);
  if (!r) return;
  const cat = ROOT_CATEGORIES[r.category] || { color: 'var(--gold)' };

  // 更新左欄 selected
  document.querySelectorAll('.root-item').forEach(el => {
    const isThis = el.querySelector('.root-name')?.textContent.trim() === r.name;
    el.classList.toggle('selected', isThis);
    if (isThis) el.style.borderLeftColor = cat.color;
    else el.style.borderLeftColor = '';
  });

  document.getElementById('rootDetail').innerHTML = `
    <div class="root-detail-name" style="color:${cat.color}">${r.name}</div>
    <div class="root-detail-meaning">意義：${r.meaning}</div>
    <div class="root-detail-origin">來源：${r.origin}</div>
    <div class="root-words">
      ${r.words.map(w => `
        <div class="root-word-row">
          <div class="rw-word">
            ${hlWord(w.w, w.hl, cat.color)}
            <button class="speak-btn-sm" onclick="speak('${w.w}')">🔊</button>
          </div>
          <div class="rw-meaning">${esc(w.meaning)}</div>
        </div>`).join('')}
    </div>`;
}

function hlWord(word, hl, color) {
  const i = word.toLowerCase().indexOf(hl.toLowerCase());
  if (i < 0) return esc(word);
  return esc(word.slice(0, i))
    + `<span style="color:${color || 'var(--gold)'};font-weight:700">${esc(word.slice(i, i + hl.length))}</span>`
    + esc(word.slice(i + hl.length));
}

// ── 卡片模式 ──
function rfcBuildOrder() {
  const ROOTS = window.ROOTS || [];
  const pool = rfcCategory === 'all'
    ? ROOTS
    : ROOTS.filter(r => r.category === rfcCategory);
  rfcOrder = pool.map((_, i) => ROOTS.indexOf(pool[i]));
  rfcIdx = 0;
}

function rfcSetCategory(cat) {
  rfcCategory = cat;
  document.querySelectorAll('.rfc-cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  rfcBuildOrder();
  rfcShow();
}

function rfcShuffle() {
  for (let i = rfcOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rfcOrder[i], rfcOrder[j]] = [rfcOrder[j], rfcOrder[i]];
  }
  rfcIdx = 0; rfcShow();
}
function rfcReset()  { rfcBuildOrder(); rfcShow(); }
function rfcFlip()   { document.getElementById('rfcInner').classList.toggle('flipped'); }
function rfcNext()   { if (rfcIdx < rfcOrder.length - 1) { rfcIdx++; rfcShow(); } }
function rfcPrev()   { if (rfcIdx > 0) { rfcIdx--; rfcShow(); } }

function rfcShow() {
  const ROOTS = window.ROOTS || [];
  document.getElementById('rfcInner').classList.remove('flipped');
  const tot = rfcOrder.length;
  document.getElementById('rfcCounter').textContent = tot ? `${rfcIdx + 1} / ${tot}` : '0 / 0';
  document.getElementById('rfcBar').style.width = tot ? `${((rfcIdx + 1) / tot) * 100}%` : '0%';
  document.getElementById('rfcPrev').disabled = rfcIdx === 0;
  document.getElementById('rfcNext').disabled = rfcIdx >= tot - 1;
  if (!tot) {
    document.getElementById('rfcRoot').textContent = '—';
    document.getElementById('rfcOrigin').textContent = '';
    document.getElementById('rfcMeaning').textContent = '此分類無資料';
    document.getElementById('rfcWordsPreview').innerHTML = '';
    document.getElementById('rfcWordlistBody').innerHTML = '';
    return;
  }
  const r = ROOTS[rfcOrder[rfcIdx]];
  if (!r) return;
  const cat = ROOT_CATEGORIES[r.category] || { color: 'var(--gold)' };

  document.getElementById('rfcRoot').textContent    = r.name;
  document.getElementById('rfcRoot').style.color    = cat.color;
  document.getElementById('rfcOrigin').textContent  = r.origin;
  document.getElementById('rfcMeaning').textContent = r.meaning;
  document.getElementById('rfcWordsPreview').innerHTML = r.words.slice(0, 3)
    .map(w => `<span class="rfc-word-chip" style="color:${cat.color};border-color:${cat.color}40;background:${cat.color}12">${w.w}</span>`).join('');

  document.getElementById('rfcWordlistBody').innerHTML = r.words.map(w => `
    <div class="rfc-wordlist-row">
      <span class="rfc-wl-word">
        ${hlWord(w.w, w.hl, cat.color)}
        <button class="speak-btn-sm" onclick="speak('${w.w}')">🔊</button>
      </span>
      <span class="rfc-wl-meaning">${esc(w.meaning)}</span>
    </div>`).join('');
}

// ── 鍵盤快捷鍵 ──
document.addEventListener('keydown', e => {
  if (rootMode !== 'card') return;
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if (e.key === 'ArrowRight') rfcNext();
  else if (e.key === 'ArrowLeft') rfcPrev();
  else if (e.key === ' ') { e.preventDefault(); rfcFlip(); }
});
