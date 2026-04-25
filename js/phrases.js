// ════════════════════════════════════════
//  phrases.js — 片語學習系統
//  分類篩選 / SRS複習 / 朗讀 / 新增自訂
// ════════════════════════════════════════

const PHRASE_CATS = [
  { id:'part1',   label:'Part 1 圖片題',  icon:'🖼️',  color:'#9b7fe8', part:'Part 1' },
  { id:'office',  label:'辦公室商務',     icon:'🏢',  color:'#e8b86d', part:'Part 2/3/4' },
  { id:'travel',  label:'差旅物流客服',   icon:'✈️',  color:'#5b8fd4', part:'Part 3/4/7' },
  { id:'finance', label:'財務科技設施',   icon:'💰',  color:'#4caf82', part:'Part 5/6/7' },
  { id:'grammar', label:'介系詞職場動作', icon:'📝',  color:'#e05c5c', part:'Part 5/6' },
  { id:'custom',  label:'自訂片語',       icon:'⭐',  color:'#e8840a', part:'自行新增' },
];

// ── SRS helpers (reuse same logic as vocab) ──
function phraseIsDue(p) {
  if (!p.nextReview) return true;
  return p.nextReview <= new Date().toISOString().slice(0,10);
}

// ── 篩選狀態 ──
let phraseCatFilter = 'all';
let phraseSrsFilter = 'all';
let phraseSearch    = '';
let phraseViewMode  = 'list'; // list | card
let phraseCardIdx   = 0;
let phraseCardList  = [];
let phraseCardFlipped = false;

// ── 資料來源（內建 + 使用者自訂合併）──
function getAllPhrases() {
  const custom = (window.appState?.phrases || []);
  const builtin = (window.PHRASES_DATA || []).map(p => {
    // Merge with saved SRS state if user has reviewed it
    const saved = custom.find(c => c.id === p.id);
    return saved ? { ...p, ...saved } : p;
  });
  // Add user-created custom phrases (id starts with 'uph_')
  const userOnly = custom.filter(c => c.id.startsWith('uph_'));
  return [...builtin, ...userOnly];
}

// ── 篩選 ──
function getFilteredPhrases() {
  const all = getAllPhrases();
  return all.filter(p => {
    if (phraseCatFilter !== 'all' && p.cat !== phraseCatFilter) return false;
    if (phraseSrsFilter === 'due'  && !phraseIsDue(p)) return false;
    if (phraseSrsFilter === '0'    && (p.level||0) !== 0) return false;
    if (phraseSrsFilter === '1'    && (p.level||0) !== 1) return false;
    if (phraseSrsFilter === '2'    && (p.level||0) !== 2) return false;
    if (phraseSrsFilter === '3'    && (p.level||0) < 3) return false;
    if (phraseSearch) {
      const q = phraseSearch.toLowerCase();
      if (!p.phrase.toLowerCase().includes(q) && !p.meaning.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

// ════════════════════════════════════════
//  主渲染入口
// ════════════════════════════════════════
function renderPhrases() {
  renderPhraseCatBar();
  renderPhraseStats();
  if (phraseViewMode === 'card') {
    renderPhraseCardMode();
  } else {
    renderPhraseList();
  }
}

// ── 分類按鈕列 ──
function renderPhraseCatBar() {
  const bar = document.getElementById('phraseCatBar');
  if (!bar) return;
  const all = getAllPhrases();

  // Count per cat
  const counts = {};
  all.forEach(p => { counts[p.cat] = (counts[p.cat]||0)+1; });
  const total = all.length;

  const allActive = phraseCatFilter === 'all';
  let html = `<button class="vtf-btn ${allActive?'active':''}" onclick="setPhraseCat('all')"
    style="${allActive?'border-color:var(--gold);color:var(--gold)':''}">
    <span class="vtf-icon">📚</span>
    <span class="vtf-name">全部</span>
    <span class="vtf-count">${total}</span>
  </button>`;

  PHRASE_CATS.forEach(cat => {
    const cnt = counts[cat.id] || 0;
    if (cnt === 0 && cat.id !== 'custom') return;
    const act = phraseCatFilter === cat.id;
    const s = act ? `border-color:${cat.color};color:${cat.color}` : '';
    html += `<button class="vtf-btn ${act?'active':''}" onclick="setPhraseCat('${cat.id}')" style="${s}">
      <span class="vtf-icon">${cat.icon}</span>
      <span class="vtf-name">${cat.label.split(' ')[0]}</span>
      <span class="vtf-count">${cnt}</span>
    </button>`;
  });

  bar.innerHTML = html;
}

// ── 統計面板 ──
function renderPhraseStats() {
  const panel = document.getElementById('phraseStatsPanel');
  if (!panel) return;
  const all = getAllPhrases();
  const filtered = phraseCatFilter === 'all' ? all : all.filter(p => p.cat === phraseCatFilter);
  const due     = filtered.filter(phraseIsDue).length;
  const learned = filtered.filter(p => (p.level||0) >= 3).length;
  const total   = filtered.length;
  const pct     = total ? Math.round((learned/total)*100) : 0;
  const catInfo = PHRASE_CATS.find(c => c.id === phraseCatFilter);
  const label   = phraseCatFilter === 'all' ? '全部片語' : (catInfo?.label||'');

  panel.innerHTML = `
    <div class="vstats-row">
      <div class="vstats-item">
        <div class="vstats-num">${total}</div>
        <div class="vstats-lbl">總片語數</div>
      </div>
      <div class="vstats-item">
        <div class="vstats-num" style="color:var(--red)">${due}</div>
        <div class="vstats-lbl">今日待複習</div>
      </div>
      <div class="vstats-item">
        <div class="vstats-num" style="color:var(--green)">${learned}</div>
        <div class="vstats-lbl">已熟練</div>
      </div>
      <div class="vstats-item" style="flex:2">
        <div class="vstats-bar-label">${label} 熟練度 ${pct}%</div>
        <div class="vstats-bar"><div class="vstats-fill" style="width:${pct}%"></div></div>
      </div>
    </div>`;
}

// ── 列表模式 ──
function renderPhraseList() {
  const list    = document.getElementById('phraseList');
  const empty   = document.getElementById('phraseEmpty');
  const cardWrap= document.getElementById('phraseCardWrap');
  if (list) list.style.display = 'flex';
  if (cardWrap) cardWrap.style.display = 'none';

  const filtered = getFilteredPhrases();
  if (!filtered.length) {
    if (list) list.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  // Group by sub-category within current cat filter
  if (phraseCatFilter !== 'all') {
    const subs = [...new Set(filtered.map(p => p.sub))].filter(Boolean);
    if (subs.length > 1) {
      list.innerHTML = subs.map(sub => {
        const items = filtered.filter(p => p.sub === sub);
        return `<div class="phrase-sub-group">
          <div class="phrase-sub-label">${esc(sub)}</div>
          ${items.map(p => phraseCardHTML(p)).join('')}
        </div>`;
      }).join('');
      return;
    }
  }

  list.innerHTML = filtered.map(p => phraseCardHTML(p)).join('');
}

// ── 單張片語卡 HTML ──
function phraseCardHTML(p) {
  const lvl      = p.level || 0;
  const lvlLabel = ['待學習','初學','熟悉中','已熟練','精通'][Math.min(lvl,4)];
  const lvlCls   = ['srs-0','srs-0','srs-1','srs-2','srs-3'][Math.min(lvl,4)];
  const due      = phraseIsDue(p) ? '<span class="tag tag-red" style="font-size:.55rem">今日複習</span>' : '';
  const catInfo  = PHRASE_CATS.find(c => c.id === p.cat);
  const color    = catInfo?.color || 'var(--gold)';
  const isCustom = p.id.startsWith('uph_');

  return `
  <div class="phrase-card" id="phc-${p.id}">
    <div class="phrase-card-left" style="border-left-color:${color}">
      <div class="phrase-phrase">${esc(p.phrase)}</div>
      <div class="phrase-meaning">${esc(p.meaning)}</div>
      <div class="phrase-cat-chip" style="border-color:${color};color:${color}">${catInfo?.icon||''} ${esc(p.catLabel||'')}</div>
    </div>
    <div class="phrase-card-body">
      <div class="phrase-example">${esc(p.example)}</div>
      ${p.note ? `<div class="phrase-note">💡 ${esc(p.note)}</div>` : ''}
    </div>
    <div class="phrase-card-meta">
      <div class="srs-badge ${lvlCls}">Lv.${lvl} ${lvlLabel}</div>
      ${due}
      <div class="card-actions">
        <button class="icon-btn speak" onclick="learnSpeak(this)" data-text="${esc(p.phrase)}">🔊</button>
        <button class="icon-btn speak" onclick="learnSpeak(this)" data-text="${esc(p.example)}" title="朗讀例句">📢</button>
        ${isCustom ? `<button class="icon-btn del" onclick="deletePhrase('${p.id}')">🗑</button>` : ''}
      </div>
      <div class="phrase-srs-row">
        <button class="ph-srs-btn bad"  onclick="updatePhraseSrs('${p.id}',false)" title="不熟">✗</button>
        <button class="ph-srs-btn good" onclick="updatePhraseSrs('${p.id}',true)"  title="熟了">✓</button>
      </div>
    </div>
  </div>`;
}

// ── 卡片翻轉模式 ──
function renderPhraseCardMode() {
  const list    = document.getElementById('phraseList');
  const cardWrap= document.getElementById('phraseCardWrap');
  if (list) list.style.display = 'none';
  if (!cardWrap) return;
  cardWrap.style.display = 'block';

  phraseCardList = getFilteredPhrases();
  if (!phraseCardList.length) {
    cardWrap.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div>沒有符合條件的片語</div>';
    return;
  }
  if (phraseCardIdx >= phraseCardList.length) phraseCardIdx = 0;
  phraseCardFlipped = false;
  renderPhraseCard();
}

function renderPhraseCard() {
  const cardWrap = document.getElementById('phraseCardWrap');
  if (!cardWrap || !phraseCardList.length) return;
  const p = phraseCardList[phraseCardIdx];
  if (!p) return;
  const catInfo = PHRASE_CATS.find(c => c.id === p.cat);
  const color   = catInfo?.color || 'var(--gold)';
  const tot     = phraseCardList.length;

  cardWrap.innerHTML = `
    <div class="rfc-progress"><div class="rfc-bar" style="width:${((phraseCardIdx+1)/tot)*100}%"></div></div>
    <div class="ph-card-flip" onclick="flipPhraseCard()" title="點擊翻面">
      <div class="ph-card-inner ${phraseCardFlipped?'flipped':''}">
        <div class="rfc-front" style="border-left-color:${color}">
          <div class="rfc-hint">點擊翻面看意思</div>
          <div class="rfc-root" style="color:${color}">${esc(p.phrase)}</div>
          <div class="rfc-origin">${catInfo?.icon||''} ${esc(p.catLabel||'')}</div>
          <button class="speak-btn-sm" onclick="event.stopPropagation();learnSpeak(this)" data-text="${esc(p.phrase)}" style="margin-top:12px">🔊 朗讀</button>
        </div>
        <div class="rfc-back">
          <div class="rfc-meaning-big">${esc(p.meaning)}</div>
          <div class="phrase-example" style="font-size:var(--text-sm);color:var(--text2);text-align:center;font-style:italic;line-height:1.7;max-width:320px">${esc(p.example)}</div>
          <button class="speak-btn-sm" onclick="event.stopPropagation();learnSpeak(this)" data-text="${esc(p.example)}" style="margin-top:10px">📢 朗讀例句</button>
        </div>
      </div>
    </div>
    <div class="rfc-nav">
      <button class="rfc-nav-btn" onclick="prevPhraseCard()" ${phraseCardIdx===0?'disabled':''}>◀ 上一個</button>
      <span class="rfc-counter">${phraseCardIdx+1} / ${tot}</span>
      <button class="rfc-nav-btn" onclick="nextPhraseCard()" ${phraseCardIdx>=tot-1?'disabled':''}>下一個 ▶</button>
    </div>
    <div class="rfc-tools">
      <button class="ph-srs-btn bad"  onclick="updatePhraseSrs('${p.id}',false);nextPhraseCard()">✗ 不熟</button>
      <button class="ph-srs-btn good" onclick="updatePhraseSrs('${p.id}',true);nextPhraseCard()">✓ 熟了</button>
    </div>`;
}

function flipPhraseCard()   { phraseCardFlipped = !phraseCardFlipped; renderPhraseCard(); }
function nextPhraseCard()   { if (phraseCardIdx < phraseCardList.length-1) { phraseCardIdx++; phraseCardFlipped=false; renderPhraseCard(); } }
function prevPhraseCard()   { if (phraseCardIdx > 0) { phraseCardIdx--; phraseCardFlipped=false; renderPhraseCard(); } }

// ── 模式切換 ──
function setPhraseViewMode(mode) {
  phraseViewMode = mode;
  document.querySelectorAll('.ph-mode-btn').forEach(b => b.classList.toggle('on', b.dataset.mode===mode));
  renderPhrases();
}
function setPhraseCat(id) { phraseCatFilter=id; phraseCardIdx=0; renderPhraseCatBar(); renderPhraseStats(); if(phraseViewMode==='card'){renderPhraseCardMode();}else{renderPhraseList();} }
function setPhraseSrs(srs) { phraseSrsFilter=srs; phraseCardIdx=0; document.querySelectorAll('.phsrs-btn').forEach(b=>b.classList.toggle('active',b.dataset.srs===srs)); renderPhraseStats(); if(phraseViewMode==='card'){renderPhraseCardMode();}else{renderPhraseList();} }

// ── SRS 更新 ──
const PHRASE_SRS_DAYS = [1,3,7,14,30];
function updatePhraseSrs(id, correct) {
  if (!window.appState) window.appState = {};
  if (!window.appState.phrases) window.appState.phrases = [];

  const all = getAllPhrases();
  const p   = all.find(x => x.id === id);
  if (!p) return;

  const newLevel  = correct ? Math.min((p.level||0)+1, 4) : Math.max((p.level||0)-1, 0);
  const daysUntil = PHRASE_SRS_DAYS[newLevel] || 30;
  const nextDate  = new Date();
  nextDate.setDate(nextDate.getDate() + daysUntil);
  const nextReview = nextDate.toISOString().slice(0,10);

  // Save to appState.phrases
  const saved = window.appState.phrases.find(c => c.id === id);
  if (saved) { saved.level=newLevel; saved.nextReview=nextReview; }
  else { window.appState.phrases.push({ id, level:newLevel, nextReview }); }

  persist();
  showToast(correct ? `✓ Lv.${newLevel} — ${PHRASE_SRS_DAYS[newLevel]}天後複習` : `↓ Lv.${newLevel} — 明天再來`);

  // Update card display
  const card = document.getElementById(`phc-${id}`);
  if (card) {
    const lvlLabel = ['待學習','初學','熟悉中','已熟練','精通'][Math.min(newLevel,4)];
    const lvlCls   = ['srs-0','srs-0','srs-1','srs-2','srs-3'][Math.min(newLevel,4)];
    const badge    = card.querySelector('.srs-badge');
    if (badge) { badge.className=`srs-badge ${lvlCls}`; badge.textContent=`Lv.${newLevel} ${lvlLabel}`; }
  }

  renderPhraseStats();
}

// ── 新增自訂片語 ──
let editPhraseId = null;

function openPhraseModal(id=null) {
  editPhraseId = id;
  if (id) {
    const p = getAllPhrases().find(x=>x.id===id);
    if (!p) return;
    document.getElementById('ph-phrase').value  = p.phrase;
    document.getElementById('ph-meaning').value = p.meaning;
    document.getElementById('ph-example').value = p.example||'';
    document.getElementById('ph-note').value    = p.note||'';
    document.getElementById('ph-cat').value     = p.cat;
    document.getElementById('phraseModalTitle').textContent = '編輯片語';
  } else {
    ['ph-phrase','ph-meaning','ph-example','ph-note'].forEach(i=>document.getElementById(i).value='');
    document.getElementById('ph-cat').value = phraseCatFilter!=='all' ? phraseCatFilter : 'custom';
    document.getElementById('phraseModalTitle').textContent = '新增片語';
  }
  document.getElementById('ovPhrase').classList.add('show');
}

function savePhrase() {
  const phrase  = document.getElementById('ph-phrase').value.trim();
  const meaning = document.getElementById('ph-meaning').value.trim();
  if (!phrase||!meaning) { alert('請填寫片語和中文意思！'); return; }

  if (!window.appState) window.appState = {};
  if (!window.appState.phrases) window.appState.phrases = [];

  const cat   = document.getElementById('ph-cat').value || 'custom';
  const catInfo = PHRASE_CATS.find(c=>c.id===cat) || PHRASE_CATS.find(c=>c.id==='custom');

  if (editPhraseId && editPhraseId.startsWith('uph_')) {
    const idx = window.appState.phrases.findIndex(p=>p.id===editPhraseId);
    if (idx>=0) Object.assign(window.appState.phrases[idx], {phrase,meaning,
      example:document.getElementById('ph-example').value.trim(),
      note:document.getElementById('ph-note').value.trim(), cat,
      catLabel:catInfo.label, catIcon:catInfo.icon, part:catInfo.part });
  } else {
    window.appState.phrases.push({
      id:'uph_'+Date.now(), phrase, meaning,
      example:document.getElementById('ph-example').value.trim(),
      note:document.getElementById('ph-note').value.trim(),
      cat, catLabel:catInfo.label, catIcon:catInfo.icon, part:catInfo.part,
      level:0, nextReview:''
    });
  }

  persist();
  closeOv('ovPhrase');
  renderPhrases();
  showToast('✓ 片語已儲存');
}

function deletePhrase(id) {
  if (!confirm('確定刪除此片語？')) return;
  if (!window.appState?.phrases) return;
  window.appState.phrases = window.appState.phrases.filter(p=>p.id!==id);
  persist();
  renderPhrases();
}

// Keyboard nav in card mode
document.addEventListener('keydown', e => {
  if (phraseViewMode !== 'card' || document.getElementById('page-phrases')?.style.display==='none') return;
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if (e.key==='ArrowRight') nextPhraseCard();
  else if (e.key==='ArrowLeft') prevPhraseCard();
  else if (e.key===' ') { e.preventDefault(); flipPhraseCard(); }
});
