// ════════════════════════════════════════
//  vocab.js — 單字庫：新增/編輯/刪除、字根提示、渲染
// ════════════════════════════════════════

// ── 字根比對：輸入單字後自動掃描 ROOTS ──
function detectRoots(word) {
  if (!word || !window.ROOTS) return [];
  const w = word.toLowerCase();
  const found = [];

  for (const root of ROOTS) {
    // 從 root.name 取出所有可能的字根形式
    // 例如 "con-/com-/col-" → ['con','com','col']
    const variants = root.name
      .replace(/-/g, '')          // 去掉橫線
      .split('/')                  // 以 / 分割
      .map(s => s.trim().toLowerCase())
      .filter(s => s.length >= 2); // 至少 2 個字母

    for (const v of variants) {
      if (w.includes(v)) {
        found.push({ name: root.name, meaning: root.meaning, matched: v, id: root.id });
        break; // 同一組字根只記一次
      }
    }
  }
  return found;
}

// 輸入單字時觸發
function onWordInput() {
  const word = document.getElementById('v-word').value.trim();
  showRootHints(word);
}

// 顯示字根提示區
function showRootHints(word) {
  const box = document.getElementById('rootHintBox');
  if (!box) return;
  if (!word || word.length < 2) { box.style.display = 'none'; return; }

  const hits = detectRoots(word);
  if (!hits.length) { box.style.display = 'none'; return; }

  box.style.display = 'block';
  box.innerHTML = hits.map(h => `
    <div class="root-hint-item">
      <span class="root-hint-badge">${esc(h.name)}</span>
      <span class="root-hint-meaning">${esc(h.meaning)}</span>
      <button class="root-hint-use" onclick="applyRootTip('${esc(h.name)}','${esc(h.meaning)}')">
        填入口訣欄
      </button>
    </div>`).join('');
}

// 點「填入口訣欄」後自動把字根說明貼到記憶技巧
function applyRootTip(name, meaning) {
  const tipEl = document.getElementById('v-tip');
  const word  = document.getElementById('v-word').value.trim();
  const current = tipEl.value.trim();
  const suggestion = `${name}（${meaning}）`;
  // 若已有內容就附加，否則直接填入
  tipEl.value = current ? current + '｜' + suggestion : suggestion;
  tipEl.focus();
}

// ── Modal 開關 ──
function openVocabModal(id = null) {
  editVocabId = id;
  const hintBox = document.getElementById('rootHintBox');
  if (hintBox) hintBox.style.display = 'none';

  if (id) {
    const v = vocab.find(x => x.id === id);
    document.getElementById('v-word').value     = v.word;
    document.getElementById('v-pos').value      = v.pos || 'adj.';
    document.getElementById('v-meaning').value  = v.meaning;
    document.getElementById('v-phonetic').value = v.phonetic || '';
    document.getElementById('v-example').value  = v.example  || '';
    document.getElementById('v-tip').value      = v.tip      || '';
    document.getElementById('vocabModalTitle').textContent = '編輯單字';
    // 編輯時也跑一次字根偵測
    showRootHints(v.word);
  } else {
    ['v-word','v-meaning','v-phonetic','v-example','v-tip'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('v-pos').value = 'adj.';
    document.getElementById('vocabModalTitle').textContent = '新增單字';
  }
  document.getElementById('ovVocab').classList.add('show');
}

// ── 儲存 ──
function saveVocab() {
  const word    = document.getElementById('v-word').value.trim();
  const meaning = document.getElementById('v-meaning').value.trim();
  if (!word || !meaning) { alert('請填寫英文單字與中文意思！'); return; }

  const existing = editVocabId ? vocab.find(x => x.id === editVocabId) : null;
  const v = {
    id:         editVocabId || Date.now().toString(),
    word, meaning,
    phonetic:   document.getElementById('v-phonetic').value.trim(),
    pos:        document.getElementById('v-pos').value,
    example:    document.getElementById('v-example').value.trim(),
    tip:        document.getElementById('v-tip').value.trim(),
    level:      existing ? existing.level      : 0,
    nextReview: existing ? existing.nextReview : new Date().toISOString().slice(0, 10),
    date:       existing ? existing.date       : new Date().toISOString(),
  };

  if (editVocabId) {
    vocab[vocab.findIndex(x => x.id === editVocabId)] = v;
  } else {
    vocab.unshift(v);
  }
  persist();
  closeOv('ovVocab');
  renderVocab();
  renderDash();
  updateBadge();
}

// ── 刪除 ──
function deleteVocab(id) {
  if (!confirm('確定刪除此單字？')) return;
  vocab = vocab.filter(x => x.id !== id);
  persist();
  renderVocab();
  renderDash();
  updateBadge();
}

// ── 渲染列表 ──
function renderVocab() {
  const q   = (document.getElementById('vocabSearch')?.value || '').toLowerCase();
  const flt = document.getElementById('vocabFilter')?.value || 'all';
  const list = vocab.filter(v => {
    if (flt !== 'all' && String(v.level || 0) !== flt) return false;
    if (q && !v.word.toLowerCase().includes(q) && !v.meaning.toLowerCase().includes(q)) return false;
    return true;
  });

  const container = document.getElementById('vocabList');
  const empty     = document.getElementById('vocabEmpty');
  if (!list.length) {
    container.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  container.innerHTML = list.map(v => vocabCardHTML(v)).join('');
}

// ── 單字卡 HTML ──
function vocabCardHTML(v) {
  const lvl      = v.level || 0;
  const lvlLabel = ['待學習','初學','熟悉中','已熟練','精通'][Math.min(lvl, 4)];
  const lvlCls   = ['srs-0','srs-0','srs-1','srs-2','srs-3'][Math.min(lvl, 4)];
  const due      = isDue(v) ? '<span class="tag tag-red" style="font-size:.58rem">今日複習</span>' : '';
  return `
  <div class="vocab-card">
    <div class="vocab-card-word">
      <div class="vc-word">${esc(v.word)}</div>
      ${v.phonetic ? `<div class="vc-phonetic">${esc(v.phonetic)}</div>` : ''}
      <div class="vc-pos">${v.pos || ''}</div>
    </div>
    <div class="vocab-card-body">
      <div class="vc-meaning">${esc(v.meaning)}</div>
      ${v.example ? `<div class="vc-example">${esc(v.example).replace(/\n/g,'<br>')}</div>` : ''}
      ${v.tip     ? `<div class="vc-tip">💡 ${esc(v.tip)}</div>` : ''}
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
