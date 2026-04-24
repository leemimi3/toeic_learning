// ════════════════════════════════════════
//  practice.js — 練習模式：拼寫、聽力選字、中文→英文
// ════════════════════════════════════════

let practiceQ       = [];
let practiceIdx     = 0;
let practiceMode    = 'spelling';
let practiceCorrect = 0;
let currentAnswer   = '';

// ── 選擇練習模式 ──
function selMode(el) {
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  practiceMode = el.dataset.mode;
}

// ── 重置回選擇畫面 ──
function resetPractice() {
  document.getElementById('practiceSetup').style.display = 'block';
  document.getElementById('practiceArena').classList.remove('active');
  document.getElementById('scoreScreen').style.display = 'none';
  document.getElementById('noDueMsg').style.display = 'none';
}

// ── 開始練習 ──
function startPractice() {
  const range = document.getElementById('practiceRange').value;
  let pool = [];
  if      (range === 'due')  pool = getDueWords();
  else if (range === 'weak') pool = vocab.filter(v => (v.level || 0) <= 1);
  else                       pool = [...vocab];

  if (!pool.length) {
    document.getElementById('noDueMsg').style.display = 'block';
    return;
  }
  document.getElementById('noDueMsg').style.display = 'none';

  // 隨機取 N 個
  pool = pool.sort(() => Math.random() - .5).slice(0, settings.count || 10);
  practiceQ       = pool;
  practiceIdx     = 0;
  practiceCorrect = 0;

  document.getElementById('practiceSetup').style.display = 'none';
  document.getElementById('practiceArena').classList.add('active');
  document.getElementById('scoreScreen').style.display = 'none';
  document.getElementById('practiceFill').style.width = '0%';
  showQ();
}

// ── 顯示題目 ──
function showQ() {
  if (practiceIdx >= practiceQ.length) { endPractice(); return; }

  const v   = practiceQ[practiceIdx];
  currentAnswer = v.word;
  const pct = Math.round((practiceIdx / practiceQ.length) * 100);
  document.getElementById('practiceFill').style.width       = pct + '%';
  document.getElementById('practiceCounter').textContent    = `${practiceIdx + 1}/${practiceQ.length}`;
  document.getElementById('feedbackBar').style.display      = 'none';
  document.getElementById('spellZone').style.display        = 'none';
  document.getElementById('mcqZone').style.display          = 'none';

  if (practiceMode === 'spelling') {
    document.getElementById('practiceLabel').textContent = '拼寫練習';
    document.getElementById('qPrompt').textContent       = '聽發音，輸入正確拼寫';
    document.getElementById('qWord').textContent         = '？？？';
    document.getElementById('qSub').textContent          = v.meaning + (v.phonetic ? ' · ' + v.phonetic : '');
    document.getElementById('spellZone').style.display   = 'block';
    document.getElementById('spellInput').value          = '';
    document.getElementById('spellInput').disabled       = false;
    document.getElementById('spellResult').className     = 'spell-result';
    document.getElementById('spellInput').focus();
    setTimeout(() => speak(v.word), 300);

  } else if (practiceMode === 'listen') {
    document.getElementById('practiceLabel').textContent = '聽力選字';
    document.getElementById('qPrompt').textContent       = '聽到的是哪個單字？';
    document.getElementById('qWord').textContent         = '🎧';
    document.getElementById('qSub').textContent          = '點擊選項或再次播放';
    document.getElementById('mcqZone').style.display     = 'block';
    renderChoices(v, 'word');
    setTimeout(() => speak(v.word), 300);

  } else {
    // zh2en
    document.getElementById('practiceLabel').textContent = '中文→英文';
    document.getElementById('qPrompt').textContent       = '選出對應的英文單字';
    document.getElementById('qWord').textContent         = v.meaning;
    document.getElementById('qSub').textContent          = v.pos || '';
    document.getElementById('mcqZone').style.display     = 'block';
    renderChoices(v, 'word');
  }
}

// ── 選擇題選項 ──
function renderChoices(correct, field) {
  const pool = vocab.filter(v => v.id !== correct.id).sort(() => Math.random() - .5).slice(0, 3);
  const opts = [correct, ...pool].sort(() => Math.random() - .5);
  document.getElementById('choicesGrid').innerHTML = opts.map(o => `
    <div class="choice" onclick="checkChoice(this,'${o[field].replace(/'/g,"\\'")}','${correct[field].replace(/'/g,"\\'")}')">
      ${esc(o[field])}
    </div>`).join('');
}

function checkChoice(el, chosen, correct) {
  document.querySelectorAll('.choice').forEach(c => c.classList.add('locked'));
  if (chosen === correct) {
    el.classList.add('correct');
    practiceCorrect++;
    updateSRS(practiceQ[practiceIdx], true);
  } else {
    el.classList.add('wrong');
    document.querySelectorAll('.choice').forEach(c => { if (c.textContent.trim() === correct) c.classList.add('correct'); });
    updateSRS(practiceQ[practiceIdx], false);
  }
  document.getElementById('feedbackBar').style.display = 'flex';
}

// ── 拼寫題確認 ──
function checkSpell() {
  const inp = document.getElementById('spellInput').value.trim().toLowerCase();
  const ans = currentAnswer.toLowerCase();
  const res = document.getElementById('spellResult');
  if (inp === ans) {
    res.className = 'spell-result ok';
    res.textContent = '✓ 正確！' + currentAnswer;
    practiceCorrect++;
    updateSRS(practiceQ[practiceIdx], true);
  } else {
    res.className = 'spell-result bad';
    res.textContent = `✗ 正確答案：${currentAnswer}`;
    updateSRS(practiceQ[practiceIdx], false);
  }
  document.getElementById('spellInput').disabled = true;
  document.getElementById('feedbackBar').style.display = 'flex';
}

function speakQ() {
  const v = practiceQ[practiceIdx];
  if (v) speak(v.word);
}

function nextQ() { practiceIdx++; showQ(); }

// ── SRS 更新 ──
function updateSRS(v, correct) {
  const idx = vocab.findIndex(x => x.id === v.id);
  if (idx < 0) return;
  if (correct) vocab[idx].level = Math.min((vocab[idx].level || 0) + 1, 4);
  else         vocab[idx].level = Math.max((vocab[idx].level || 0) - 1, 0);
  vocab[idx].nextReview = nextReviewDate(vocab[idx].level);
  persist();
}

// ── 結束練習 / 成績 ──
function endPractice() {
  // 標記今天已練習
  const today = new Date().toISOString().slice(0, 10);
  if (!streak.includes(today)) {
    streak.push(today);
    if (streak.length > 30) streak = streak.slice(-30);
    persist();
  }

  document.getElementById('practiceArena').classList.remove('active');
  const pct = practiceQ.length ? Math.round((practiceCorrect / practiceQ.length) * 100) : 0;
  document.getElementById('scorePct').textContent    = pct + '%';
  document.getElementById('scoreDetail').textContent = `答對 ${practiceCorrect} / ${practiceQ.length} 題`;
  document.getElementById('scoreScreen').style.display = 'block';
  updateBadge();
  renderDash();
}
