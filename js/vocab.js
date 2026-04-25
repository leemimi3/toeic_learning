// ════════════════════════════════════════
//  vocab.js — 單字庫：分類、篩選、統計、CRUD
// ════════════════════════════════════════

// ── 13 大主題清單 ──
const VOCAB_TOPICS = [
  { id:'travel',       label:'✈️ Travel',       color:'#5b8fd4' },
  { id:'dining',       label:'🍽️ Dining',        color:'#e8a44a' },
  { id:'entertainment',label:'🎭 Entertainment', color:'#9b7fe8' },
  { id:'housing',      label:'🏠 Housing',       color:'#4caf82' },
  { id:'purchasing',   label:'🛒 Purchasing',    color:'#e05c5c' },
  { id:'personnel',    label:'👥 Personnel',     color:'#5b8fd4' },
  { id:'offices',      label:'🏢 Offices',       color:'#e8b86d' },
  { id:'health',       label:'🏥 Health',        color:'#4caf82' },
  { id:'general_biz',  label:'💼 General Biz',   color:'#5b8fd4' },
  { id:'manufacturing',label:'🏭 Manufacturing', color:'#9b7fe8' },
  { id:'corporate',    label:'📈 Corporate',     color:'#e8b86d' },
  { id:'technical',    label:'💻 Technical',     color:'#5b8fd4' },
  { id:'financing',    label:'💰 Financing',     color:'#4caf82' },
  { id:'other',        label:'📌 其他',           color:'#6b7280' },
];

// ── 目前篩選狀態 ──
let vocabTopicFilter = 'all';
let vocabPosFilter   = 'all';
let vocabSrsFilter   = 'all';

// ════════════════════
//  字根比對
// ════════════════════
function detectRoots(word) {
  if (!word || !window.ROOTS) return [];
  const w = word.toLowerCase();
  const found = [];
  for (const root of ROOTS) {
    const variants = root.name.replace(/-/g,'').split('/').map(s=>s.trim().toLowerCase()).filter(s=>s.length>=2);
    for (const v of variants) {
      if (w.includes(v)) { found.push({ name:root.name, meaning:root.meaning, matched:v, id:root.id }); break; }
    }
  }
  return found;
}

function onWordInput() { showRootHints(document.getElementById('v-word').value.trim()); }

function showRootHints(word) {
  const box = document.getElementById('rootHintBox');
  if (!box) return;
  if (!word || word.length < 2) { box.style.display='none'; return; }
  const hits = detectRoots(word);
  if (!hits.length) { box.style.display='none'; return; }
  box.style.display = 'block';
  box.innerHTML = hits.map(h=>`
    <div class="root-hint-item">
      <span class="root-hint-badge">${esc(h.name)}</span>
      <span class="root-hint-meaning">${esc(h.meaning)}</span>
      <button class="root-hint-use" onclick="applyRootTip('${esc(h.name)}','${esc(h.meaning)}')">填入口訣欄</button>
    </div>`).join('');
}

function applyRootTip(name, meaning) {
  const tipEl = document.getElementById('v-tip');
  const s = `${name}（${meaning}）`;
  tipEl.value = tipEl.value.trim() ? tipEl.value.trim()+'｜'+s : s;
  tipEl.focus();
}

// ════════════════════
//  主題統計
// ════════════════════
function getVocabStats() {
  const stats = {};
  VOCAB_TOPICS.forEach(t => { stats[t.id] = { total:0, due:0, learned:0 }; });
  stats['all'] = { total:0, due:0, learned:0 };
  vocab.forEach(v => {
    const tid = v.topic || 'other';
    if (!stats[tid]) stats[tid] = { total:0, due:0, learned:0 };
    stats[tid].total++;
    stats['all'].total++;
    if (isDue(v)) { stats[tid].due++; stats['all'].due++; }
    if ((v.level||0) >= 3) { stats[tid].learned++; stats['all'].learned++; }
  });
  return stats;
}

// ════════════════════
//  篩選列渲染
// ════════════════════
function renderVocabFilters() {
  const stats = getVocabStats();
  const topicBar = document.getElementById('vocabTopicBar');
  if (!topicBar) return;

  // 主題篩選
  const allCount = stats['all'].total;
  topicBar.innerHTML = `
    <button class="vtf-btn ${vocabTopicFilter==='all'?'active':''}"
      onclick="setVocabTopic('all')" style="${vocabTopicFilter==='all'?'border-color:var(--gold);color:var(--gold)':''}">
      全部 <span class="vtf-count">${allCount}</span>
    </button>
    ${VOCAB_TOPICS.filter(t => (stats[t.id]?.total||0)>0).map(t=>`
      <button class="vtf-btn ${vocabTopicFilter===t.id?'active':''}"
        onclick="setVocabTopic('${t.id}')"
        style="${vocabTopicFilter===t.id?`border-color:${t.color};color:${t.color}`:''}">
        ${t.label} <span class="vtf-count">${stats[t.id]?.total||0}</span>
      </button>`).join('')}`;
}

function setVocabTopic(id) {
  vocabTopicFilter = id;
  renderVocabFilters();
  renderVocab();
}

function setVocabPos(pos) {
  vocabPosFilter = pos;
  document.querySelectorAll('.vpos-btn').forEach(b=>b.classList.toggle('active',b.dataset.pos===pos));
  renderVocab();
}

function setVocabSrs(srs) {
  vocabSrsFilter = srs;
  document.querySelectorAll('.vsrs-btn').forEach(b=>b.classList.toggle('active',b.dataset.srs===srs));
  renderVocab();
}

// ════════════════════
//  Modal
// ════════════════════
function openVocabModal(id=null) {
  editVocabId = id;
  const hintBox = document.getElementById('rootHintBox');
  if (hintBox) hintBox.style.display='none';

  // Populate topic select
  const topicSel = document.getElementById('v-topic');
  if (topicSel) {
    topicSel.innerHTML = VOCAB_TOPICS.map(t=>`<option value="${t.id}">${t.label}</option>`).join('');
  }

  if (id) {
    const v = vocab.find(x=>x.id===id);
    document.getElementById('v-word').value    = v.word;
    document.getElementById('v-pos').value     = v.pos||'n.';
    document.getElementById('v-meaning').value = v.meaning;
    document.getElementById('v-phonetic').value= v.phonetic||'';
    document.getElementById('v-example').value = v.example||'';
    document.getElementById('v-tip').value     = v.tip||'';
    if (topicSel) topicSel.value = v.topic||'other';
    document.getElementById('vocabModalTitle').textContent='編輯單字';
    showRootHints(v.word);
  } else {
    ['v-word','v-meaning','v-phonetic','v-example','v-tip'].forEach(i=>document.getElementById(i).value='');
    document.getElementById('v-pos').value='n.';
    if (topicSel) topicSel.value = vocabTopicFilter!=='all' ? vocabTopicFilter : 'other';
    document.getElementById('vocabModalTitle').textContent='新增單字';
  }
  document.getElementById('ovVocab').classList.add('show');
}

// ════════════════════
//  儲存
// ════════════════════
function saveVocab() {
  const word    = document.getElementById('v-word').value.trim();
  const meaning = document.getElementById('v-meaning').value.trim();
  if (!word||!meaning) { alert('請填寫英文單字與中文意思！'); return; }

  const existing = editVocabId ? vocab.find(x=>x.id===editVocabId) : null;
  const v = {
    id:         editVocabId || Date.now().toString(),
    word, meaning,
    phonetic:   document.getElementById('v-phonetic').value.trim(),
    pos:        document.getElementById('v-pos').value,
    topic:      document.getElementById('v-topic')?.value || 'other',
    example:    document.getElementById('v-example').value.trim(),
    tip:        document.getElementById('v-tip').value.trim(),
    level:      existing ? existing.level      : 0,
    nextReview: existing ? existing.nextReview : new Date().toISOString().slice(0,10),
    date:       existing ? existing.date       : new Date().toISOString(),
  };

  if (editVocabId) vocab[vocab.findIndex(x=>x.id===editVocabId)] = v;
  else             vocab.unshift(v);

  persist();
  closeOv('ovVocab');
  renderVocabFilters();
  renderVocab();
  renderDash();
  updateBadge();
}

// ════════════════════
//  刪除
// ════════════════════
function deleteVocab(id) {
  if (!confirm('確定刪除此單字？')) return;
  vocab = vocab.filter(x=>x.id!==id);
  persist();
  renderVocabFilters();
  renderVocab();
  renderDash();
  updateBadge();
}

// ════════════════════
//  渲染列表
// ════════════════════
function renderVocab() {
  const q   = (document.getElementById('vocabSearch')?.value||'').toLowerCase();
  const list = vocab.filter(v => {
    if (vocabTopicFilter!=='all' && (v.topic||'other')!==vocabTopicFilter) return false;
    if (vocabPosFilter!=='all' && v.pos!==vocabPosFilter) return false;
    if (vocabSrsFilter==='due'  && !isDue(v)) return false;
    if (vocabSrsFilter==='0'    && (v.level||0)!==0) return false;
    if (vocabSrsFilter==='1'    && (v.level||0)!==1) return false;
    if (vocabSrsFilter==='2'    && (v.level||0)!==2) return false;
    if (vocabSrsFilter==='3'    && (v.level||0)<3)  return false;
    if (q && !v.word.toLowerCase().includes(q) && !v.meaning.toLowerCase().includes(q)) return false;
    return true;
  });

  const container = document.getElementById('vocabList');
  const empty     = document.getElementById('vocabEmpty');
  if (!list.length) {
    container.innerHTML='';
    if (empty) empty.style.display='block';
    return;
  }
  if (empty) empty.style.display='none';
  container.innerHTML = list.map(v=>vocabCardHTML(v)).join('');
}

// ════════════════════
//  單字卡 HTML
// ════════════════════
function vocabCardHTML(v) {
  const lvl      = v.level||0;
  const lvlLabel = ['待學習','初學','熟悉中','已熟練','精通'][Math.min(lvl,4)];
  const lvlCls   = ['srs-0','srs-0','srs-1','srs-2','srs-3'][Math.min(lvl,4)];
  const due      = isDue(v) ? '<span class="tag tag-red">今日複習</span>' : '';
  const topicObj = VOCAB_TOPICS.find(t=>t.id===(v.topic||'other'));
  const topicTag = topicObj
    ? `<span class="vtopic-chip" style="border-color:${topicObj.color};color:${topicObj.color}">${topicObj.label}</span>`
    : '';

  return `
  <div class="vocab-card">
    <div class="vocab-card-word">
      <div class="vc-word">${esc(v.word)}</div>
      ${v.phonetic?`<div class="vc-phonetic">${esc(v.phonetic)}</div>`:''}
      <div class="vc-pos">${v.pos||''}</div>
      ${topicTag}
    </div>
    <div class="vocab-card-body">
      <div class="vc-meaning">${esc(v.meaning)}</div>
      ${v.example?`<div class="vc-example">${esc(v.example).replace(/\n/g,'<br>')}</div>`:''}
      ${v.tip?`<div class="vc-tip">💡 ${esc(v.tip)}</div>`:''}
    </div>
    <div class="vocab-card-meta">
      <div class="srs-badge ${lvlCls}">Lv.${lvl} ${lvlLabel}</div>
      ${due}
      <div class="card-actions">
        <button class="icon-btn speak" onclick="speak('${v.word.replace(/'/g,"\\'")}')">🔊</button>
        <button class="icon-btn"       onclick="openVocabModal('${v.id}')">✏️</button>
        <button class="icon-btn del"   onclick="deleteVocab('${v.id}')">🗑</button>
      </div>
    </div>
  </div>`;
}

// ════════════════════
//  統計面板
// ════════════════════
function renderVocabStats() {
  const panel = document.getElementById('vocabStatsPanel');
  if (!panel) return;
  const stats = getVocabStats();
  const cur   = vocabTopicFilter==='all' ? stats['all'] : (stats[vocabTopicFilter]||{total:0,due:0,learned:0});
  const topicObj = VOCAB_TOPICS.find(t=>t.id===vocabTopicFilter);
  const label = vocabTopicFilter==='all' ? '全部單字' : (topicObj?.label||'');

  const pct = cur.total ? Math.round((cur.learned/cur.total)*100) : 0;
  panel.innerHTML = `
    <div class="vstats-row">
      <div class="vstats-item">
        <div class="vstats-num">${cur.total}</div>
        <div class="vstats-lbl">總單字數</div>
      </div>
      <div class="vstats-item">
        <div class="vstats-num" style="color:var(--red)">${cur.due}</div>
        <div class="vstats-lbl">今日待複習</div>
      </div>
      <div class="vstats-item">
        <div class="vstats-num" style="color:var(--green)">${cur.learned}</div>
        <div class="vstats-lbl">已熟練</div>
      </div>
      <div class="vstats-item" style="flex:2">
        <div class="vstats-bar-wrap">
          <div class="vstats-bar-label">${label} 熟練度 ${pct}%</div>
          <div class="vstats-bar"><div class="vstats-fill" style="width:${pct}%"></div></div>
        </div>
      </div>
    </div>`;
}

// 主入口：渲染整個單字庫頁面
function renderVocabPage() {
  renderVocabFilters();
  renderVocabStats();
  renderVocab();
}
