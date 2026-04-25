// topics.js — 主題學習邏輯（資料在 topics-data.js）
let topicGoals = JSON.parse(localStorage.getItem('tv-topic-goals') || '{}');
// {
//   examDate: '2025-08-30',
//   weeklyTopics: 2,
//   dailyVocab: 5,
//   dailyNotes: 2,
//   topicProgress: { travel: { vocabDone: [], reviewed: false }, ... }
// }

function saveTopicGoals() {
  localStorage.setItem('tv-topic-goals', JSON.stringify(topicGoals));
}

// ── 目前選中的主題 ──
let currentTopicId  = 'financing';
let currentTopicTab = 'vocab'; // vocab | patterns | exam

// ════════════════════
//  主題頁面渲染
// ════════════════════
function renderTopics() {
  renderTopicGoalBar();
  renderTopicGrid();
  showTopic(currentTopicId);
}

// ── 目標進度條 ──
function renderTopicGoalBar() {
  const bar = document.getElementById('topicGoalBar');
  if (!bar) return;

  const g = topicGoals;
  const examDate = g.examDate ? new Date(g.examDate) : null;
  const today    = new Date();
  const daysLeft = examDate ? Math.max(0, Math.ceil((examDate - today) / 86400000)) : null;

  const totalTopics   = window.TOPICS_DATA.length;
  const reviewedCount = window.TOPICS_DATA.filter(t =>
    topicGoals.topicProgress?.[t.id]?.reviewed
  ).length;

  bar.innerHTML = `
    <div class="tg-row">
      <div class="tg-item">
        <div class="tg-label">📅 考試倒數</div>
        <div class="tg-value">${daysLeft !== null ? daysLeft + ' 天' : '未設定'}</div>
      </div>
      <div class="tg-item">
        <div class="tg-label">📗 主題進度</div>
        <div class="tg-value">${reviewedCount} / ${totalTopics}</div>
        <div class="tg-bar"><div class="tg-fill" style="width:${(reviewedCount/totalTopics)*100}%"></div></div>
      </div>
      <div class="tg-item">
        <div class="tg-label">🎯 每週目標</div>
        <div class="tg-value">${g.weeklyTopics || '—'} 個主題</div>
      </div>
      <div class="tg-item">
        <div class="tg-label">📝 每日單字</div>
        <div class="tg-value">${g.dailyVocab || '—'} 個</div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="openTopicGoalModal()" style="margin-left:auto">⚙ 設定目標</button>
    </div>`;
}

// ── 主題卡片列表 ──
function renderTopicGrid() {
  const grid = document.getElementById('topicGrid');
  if (!grid) return;
  grid.innerHTML = window.TOPICS_DATA.map(t => {
    const reviewed = topicGoals.topicProgress?.[t.id]?.reviewed;
    const vocabDone = (topicGoals.topicProgress?.[t.id]?.vocabDone || []).length;
    const pct = Math.round((vocabDone / t.vocab.length) * 100);
    return `
      <div class="topic-card ${currentTopicId === t.id ? 'active' : ''} ${reviewed ? 'done' : ''}"
           onclick="showTopic('${t.id}')"
           style="${currentTopicId === t.id ? `border-color:${t.color};background:${t.color}12` : ''}">
        <div class="tc-icon">${t.icon}</div>
        <div class="tc-body">
          <div class="tc-name" style="color:${t.color}">${t.name}</div>
          <div class="tc-name-tw">${t.nameTw}</div>
          <div class="tc-progress-bar">
            <div class="tc-progress-fill" style="width:${pct}%;background:${t.color}"></div>
          </div>
          <div class="tc-pct">${pct}% 單字</div>
        </div>
        ${reviewed ? '<div class="tc-done">✓</div>' : ''}
      </div>`;
  }).join('');
}

// ── 顯示單一主題詳細內容 ──
function showTopic(id) {
  currentTopicId = id;
  renderTopicGrid(); // 更新 active 狀態
  const t = window.TOPICS_DATA.find(d => d.id === id);
  if (!t) return;

  const detail = document.getElementById('topicDetail');
  if (!detail) return;

  const prog   = topicGoals.topicProgress?.[id] || {};
  const done   = prog.vocabDone || [];

  detail.innerHTML = `
    <div class="td-header" style="border-left:4px solid ${t.color}">
      <div class="td-title">
        <span class="td-icon">${t.icon}</span>
        <div>
          <div class="td-name">${t.name}</div>
          <div class="td-name-tw">${t.nameTw} · ${t.desc}</div>
        </div>
        <label class="td-reviewed-label">
          <input type="checkbox" ${prog.reviewed ? 'checked' : ''}
            onchange="toggleTopicReviewed('${id}', this.checked)">
          標記為已複習
        </label>
      </div>
      <div class="td-tabs">
        <button class="td-tab ${currentTopicTab==='vocab'?'active':''}" onclick="switchTopicTab('vocab')">📚 單字</button>
        <button class="td-tab ${currentTopicTab==='patterns'?'active':''}" onclick="switchTopicTab('patterns')">💬 句型</button>
        <button class="td-tab ${currentTopicTab==='synonyms'?'active':''}" onclick="switchTopicTab('synonyms')">🔄 同義替換</button>
        <button class="td-tab ${currentTopicTab==='errors'?'active':''}" onclick="switchTopicTab('errors')">⚠ 常見錯誤</button>
        <button class="td-tab ${currentTopicTab==='practice'?'active':''}" onclick="switchTopicTab('practice')">🧩 練習題</button>
        <button class="td-tab ${currentTopicTab==='exam'?'active':''}" onclick="switchTopicTab('exam')">🎯 重點</button>
      </div>
    </div>

    <div id="topicTabContent"></div>`;

  renderTopicTabContent(t, done);
}

function switchTopicTab(tab) {
  currentTopicTab = tab;
  const t    = window.TOPICS_DATA.find(d => d.id === currentTopicId);
  const prog = topicGoals.topicProgress?.[currentTopicId] || {};
  const done = prog.vocabDone || [];
  // Update tab buttons
  document.querySelectorAll('.td-tab').forEach(b => {
    const map = {vocab:'單字',patterns:'句型',synonyms:'同義',errors:'常見錯誤',practice:'練習',exam:'重點'};
    b.classList.toggle('active', b.textContent.includes(map[tab]||''));
  });
  renderTopicTabContent(t, done);
}

function renderTopicTabContent(t, done) {
  const content = document.getElementById('topicTabContent');
  if (!content || !t) return;

  if (currentTopicTab === 'vocab') {
    const filter = window._vocabFilter || 'all';
    const filtered = filter === 'all' ? t.vocab
      : filter === '1' ? t.vocab.filter(v=>v.level===1)
      : t.vocab.filter(v=>v.level>=2);
    content.innerHTML = `
      <div class="tv-filter-bar">
        <button class="tv-filter-btn ${filter==='all'?'on':''}" onclick="setVocabFilter('all')">全部 (${t.vocab.length})</button>
        <button class="tv-filter-btn ${filter==='1'?'on':''}" onclick="setVocabFilter('1')">★ 核心 (${t.vocab.filter(v=>v.level===1).length})</button>
        <button class="tv-filter-btn ${filter==='2'?'on':''}" onclick="setVocabFilter('2')">★★ 進階 (${t.vocab.filter(v=>v.level>=2).length})</button>
      </div>
      <div class="tv-list">
        ${filtered.map((v, i) => { const i2 = t.vocab.indexOf(v);
          const isDone = done.includes(i2);
          return `
            <div class="tv-item ${isDone ? 'learned' : ''}">
              <div class="tv-check">
                <input type="checkbox" ${isDone ? 'checked' : ''}
                  onchange="toggleVocabDone('${t.id}', ${i2}, this.checked)">
              </div>
              <div class="tv-body">
                <div class="tv-word">
                  ${esc(v.w)}
                  <button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${esc(v.w)}">🔊</button>
                </div>
                <div class="tv-meaning">${esc(v.m)}</div>
                <div class="tv-example">
                  ${esc(v.e)}
                  <button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${esc(v.e)}">🔊</button>
                </div>
              </div>
              <button class="tv-add-btn" onclick="addTopicVocab('${esc(v.w)}','${esc(v.m)}','${esc(v.e)}')" title="加入單字庫">＋庫</button>
            </div>`;
        }).join('')}
      </div>`;
  } else if (currentTopicTab === 'patterns') {
    content.innerHTML = `
      <div class="tp-list">
        ${t.patterns.map(p => `
          <div class="tp-item">
            <div class="tp-pattern">
              ${esc(p.p)}
              <span class="tp-tag">${esc(p.t)}</span>
            </div>
            <div class="tp-tw">${esc(p.tw)}</div>
            <div class="tp-example">
              ${esc(p.e)}
              <button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${esc(p.e)}">🔊</button>
            </div>
          </div>`).join('')}
      </div>`;
  } else if (currentTopicTab === 'synonyms') {
    const syns = t.synonyms || [];
    content.innerHTML = syns.length ? `
      <div class="ts-list">
        ${syns.map(s => `
          <div class="ts-item">
            <div class="ts-word">${esc(s.word)}</div>
            <div class="ts-others">${s.others.map(o => `<span class="ts-chip">${esc(o)}</span>`).join('')}</div>
            <div class="ts-note">💡 ${esc(s.note)}</div>
          </div>`).join('')}
      </div>` : '<div class="empty-state" style="padding:30px">此主題同義替換資料準備中</div>';
  } else if (currentTopicTab === 'errors') {
    const errs = t.commonErrors || [];
    content.innerHTML = errs.length ? `
      <div class="te-err-list">
        ${errs.map(e => `
          <div class="te-err-item">
            <div class="te-err-wrong">✗ ${esc(e.wrong)}</div>
            <div class="te-err-right">✓ ${esc(e.right)}</div>
            <div class="te-err-explain">💡 ${esc(e.explain)}</div>
          </div>`).join('')}
      </div>` : '<div class="empty-state" style="padding:30px">此主題常見錯誤資料準備中</div>';
  } else if (currentTopicTab === 'practice') {
    renderTopicPractice(t);
  } else {
    content.innerHTML = `
      <div class="te-list">
        ${t.examTips.map(tip => `
          <div class="te-item">💡 ${esc(tip)}</div>`).join('')}
      </div>
      <div class="te-note-prompt">
        <div class="te-note-title">📝 我的筆記</div>
        <textarea class="inp" rows="4" placeholder="記錄這個主題的解題技巧、容易搞混的單字…"
          onblur="saveTopicNote('${t.id}', this.value)">${esc(topicGoals.topicProgress?.[t.id]?.note || '')}</textarea>
      </div>`;
  }
}

// ── 互動：標記單字已學 ──
function toggleVocabDone(topicId, idx, checked) {
  if (!topicGoals.topicProgress) topicGoals.topicProgress = {};
  if (!topicGoals.topicProgress[topicId]) topicGoals.topicProgress[topicId] = { vocabDone: [], reviewed: false };
  const done = topicGoals.topicProgress[topicId].vocabDone;
  if (checked && !done.includes(idx)) done.push(idx);
  if (!checked) topicGoals.topicProgress[topicId].vocabDone = done.filter(i => i !== idx);
  saveTopicGoals();
  renderTopicGrid();
  renderTopicGoalBar();
}

// ── 互動：標記主題已複習 ──
function toggleTopicReviewed(topicId, checked) {
  if (!topicGoals.topicProgress) topicGoals.topicProgress = {};
  if (!topicGoals.topicProgress[topicId]) topicGoals.topicProgress[topicId] = { vocabDone: [], reviewed: false };
  topicGoals.topicProgress[topicId].reviewed = checked;
  saveTopicGoals();
  renderTopicGrid();
  renderTopicGoalBar();
}

// ── 互動：儲存主題筆記 ──
function saveTopicNote(topicId, text) {
  if (!topicGoals.topicProgress) topicGoals.topicProgress = {};
  if (!topicGoals.topicProgress[topicId]) topicGoals.topicProgress[topicId] = { vocabDone: [], reviewed: false };
  topicGoals.topicProgress[topicId].note = text;
  saveTopicGoals();
}

// ── 互動：加入單字庫 ──
function addTopicVocab(word, meaning, example) {
  const today = new Date().toISOString().slice(0, 10);
  const exists = vocab.some(v => v.word.toLowerCase() === word.toLowerCase());
  if (exists) { showToast('⚠ 單字庫已有此單字', 'warn'); return; }
  vocab.unshift({
    id: 'tp_' + Date.now(),
    word, meaning,
    phonetic: '',
    pos: 'n./v./adj.',
    example,
    tip: '',
    level: 0,
    nextReview: today,
    date: new Date().toISOString(),
  });
  persist();
  updateBadge();
  showToast('✓ 已加入單字庫：' + word);
}

// ════════════════════
//  學習目標 Modal
// ════════════════════
function openTopicGoalModal() {
  const g = topicGoals;
  document.getElementById('tg-exam-date').value    = g.examDate      || '';
  document.getElementById('tg-weekly-topics').value = g.weeklyTopics || 2;
  document.getElementById('tg-daily-vocab').value   = g.dailyVocab   || 5;
  document.getElementById('tg-daily-notes').value   = g.dailyNotes   || 2;
  document.getElementById('ovTopicGoal').classList.add('show');
}

function saveTopicGoalSettings() {
  topicGoals.examDate      = document.getElementById('tg-exam-date').value;
  topicGoals.weeklyTopics  = parseInt(document.getElementById('tg-weekly-topics').value) || 2;
  topicGoals.dailyVocab    = parseInt(document.getElementById('tg-daily-vocab').value)   || 5;
  topicGoals.dailyNotes    = parseInt(document.getElementById('tg-daily-notes').value)   || 2;
  saveTopicGoals();
  closeOv('ovTopicGoal');
  renderTopicGoalBar();
  showToast('✓ 學習目標已儲存');
}

// ════════════════════════════════════════
//  練習題資料
// ════════════════════════════════════════

let topicPracticeState = {};

function renderTopicPractice(t) {
  const el = document.getElementById('topicTabContent');
  if (!el) return;
  // Normalize: flatten qs:[] nested structure into flat array
  const rawQs = (window.TOPIC_PRACTICE || {})[t.id] || [];
  const qs = [];
  rawQs.forEach(function(item) {
    if (item.qs && Array.isArray(item.qs)) {
      // Group structure: { part, type, groupId, passage, qs:[...] }
      item.qs.forEach(function(subQ) {
        qs.push(Object.assign({}, subQ, {
          part: item.part,
          type: item.type,
          groupId: item.groupId,
          passage: item.passage, // only first gets passage, rest get undefined
          _isFirstInGroup: subQ === item.qs[0]
        }));
      });
      // Fix: only first question carries passage
      const baseIdx = qs.length - item.qs.length;
      for (let i = baseIdx + 1; i < qs.length; i++) {
        delete qs[i].passage;
      }
    } else {
      // Flat structure: { part, type, q, choices, ans, explain }
      qs.push(item);
    }
  });
  if (!qs.length) {
    el.innerHTML = '<div class="empty-state" style="padding:40px"><div class="empty-icon">🚧</div>練習題準備中</div>';
    return;
  }
  if (!topicPracticeState[t.id]) topicPracticeState[t.id] = { answers:{}, revealed:new Set() };

  // Part filter
  const parts = [...new Set(qs.map(q=>q.part))];
  const cur = window._practicePartFilter || 'all';

  const filtered = cur === 'all' ? qs : qs.filter(q => q.part === cur);

  // Group questions by groupId (passage sharing)
  const groups = [];
  const seen = new Set();
  filtered.forEach((q) => {
    const realIdx = qs.indexOf(q);
    if (q.groupId) {
      if (!seen.has(q.groupId)) {
        seen.add(q.groupId);
        // Get ALL questions in this group from full qs (not just filtered)
        const allGroupQs = qs.filter(x => x.groupId === q.groupId);
        // Get the passage from whichever question has it
        const passageSource = allGroupQs.find(x => x.passage) || allGroupQs[0];
        // Only show questions that match current filter
        const visibleQs = filtered.filter(x => x.groupId === q.groupId);
        if (visibleQs.length > 0) {
          groups.push({
            type: 'group',
            groupId: q.groupId,
            passage: passageSource.passage,
            qs: visibleQs,
            indices: visibleQs.map(x => qs.indexOf(x))
          });
        }
      }
    } else {
      groups.push({ type:'single', q, idx:realIdx });
    }
  });

  el.innerHTML = `
    <div class="tpq-part-filter">
      <button class="tpq-pf-btn ${cur==='all'?'on':''}" onclick="setPracticePartFilter('all','${t.id}')">全部</button>
      ${parts.map(p=>`<button class="tpq-pf-btn ${cur===p?'on':''}" onclick="setPracticePartFilter('${p}','${t.id}')">${p}</button>`).join('')}
      <button class="btn btn-ghost btn-sm" style="margin-left:auto" onclick="resetTopicPractice('${t.id}')">↺ 重置</button>
    </div>
    <div class="tpq-list">
      ${groups.map(g => g.type==='group' ? renderPassageGroup(g, t.id, topicPracticeState[t.id]) : renderSingleQ(g.q, g.idx, t.id, topicPracticeState[t.id])).join('')}
    </div>`;
}

function renderPassageGroup(g, topicId, state) {
  const typeLabel = g.qs[0].type.includes('對話') ? '📢 對話內容'
    : g.qs[0].type.includes('獨白') ? '🎙 獨白內容' : '📄 閱讀文章';
  const canSpeak  = g.qs[0].type.includes('對話') || g.qs[0].type.includes('獨白');
  const speakBtn  = canSpeak && g.passage
    ? '<button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="' + esc(g.passage) + '" style="margin-left:8px">🔊</button>'
    : '';
  const passageLines = g.passage ? g.passage.split('\n').map(function(l){return esc(l);}).join('<br>') : '';
  const passageHTML = g.passage
    ? '<div class="tpq-passage"><div class="tpq-passage-label">' + typeLabel + speakBtn + '</div>'
      + '<div class="tpq-passage-text">' + passageLines + '</div></div>'
    : '';

  return '<div class="tpq-group">'
    + '<div class="tpq-group-header">'
    + '<span class="tpq-part-tag">' + g.qs[0].part + '</span>'
    + '<span class="tpq-type-tag">' + g.qs[0].type + '</span>'
    + '</div>'
    + passageHTML
    + g.qs.map(function(q,i){ return renderSingleQ(q, g.indices[i], topicId, state, i+1); }).join('')
    + '</div>';
}

function renderSingleQ(q, idx, topicId, state, num) {
  const revealed = state.revealed.has(idx);
  const chosen   = state.answers[idx];
  const metaHTML = num ? '' : '<div class="tpq-meta"><span class="tpq-part-tag">' + q.part + '</span><span class="tpq-type-tag">' + q.type + '</span></div>';
  const prefix   = num ? '<strong>Q' + num + '.</strong> ' : '';
  const qText    = esc(q.q).split('\n').join('<br>');

  var choicesHTML = '';
  if (!q || !q.choices) return '';
  q.choices.forEach(function(c,ci) {
    var cls = 'tpq-choice';
    if (revealed) {
      if (ci===q.ans) cls += ' correct';
      else if (ci===chosen && ci!==q.ans) cls += ' wrong';
      else cls += ' locked';
    } else if (ci===chosen) cls += ' selected';
    choicesHTML += '<div class="' + cls + '" onclick="choosePracticeAnswer(\'' + topicId + '\',' + idx + ',' + ci + ')">'
      + String.fromCharCode(65+ci) + '. ' + esc(c) + '</div>';
  });

  var explainHTML = revealed
    ? '<div class="tpq-explain">💡 ' + esc(q.explain) + '</div>'
    : '<button class="btn btn-ghost btn-sm tpq-reveal-btn" onclick="revealAnswer(\'' + topicId + '\',' + idx + ')"'
      + (chosen===undefined ? ' disabled' : '') + '>查看解析</button>';

  return '<div class="tpq-item" id="tpq-' + topicId + '-' + idx + '">'
    + metaHTML
    + '<div class="tpq-q">' + prefix + qText + '</div>'
    + '<div class="tpq-choices">' + choicesHTML + '</div>'
    + explainHTML
    + '</div>';
}

function setPracticePartFilter(part, topicId) {
  window._practicePartFilter = part;
  const t = window.TOPICS_DATA.find(d => d.id === topicId);
  renderTopicPractice(t);
}

function setVocabFilter(f) {
  window._vocabFilter = f;
  const t = window.TOPICS_DATA.find(d => d.id === currentTopicId);
  const prog = topicGoals.topicProgress?.[currentTopicId] || {};
  renderTopicTabContent(t, prog.vocabDone || []);
}
