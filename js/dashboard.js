// ════════════════════════════════════════
//  dashboard.js — 複習設定、今日徽章、總覽渲染
// ════════════════════════════════════════

// ── 設定讀寫 ──
function saveSettings() {
  settings.count     = parseInt(document.getElementById('settingCount').value);
  settings.newPerDay = parseInt(document.getElementById('settingNew').value);
  settings.mode      = document.getElementById('settingMode').value;
  persist();
  updateBadge();
}

function loadSettings() {
  document.getElementById('settingCount').value = settings.count     || 10;
  document.getElementById('settingNew').value   = settings.newPerDay || 10;
  document.getElementById('settingMode').value  = settings.mode      || 'standard';
}

// ── 導覽列紅點 ──
function updateBadge() {
  const n     = getDueWords().length;
  const badge = document.getElementById('reviewBadge');
  document.getElementById('todayCount').textContent = n;
  if (n > 0) { badge.style.display = 'inline-block'; badge.textContent = n; }
  else        { badge.style.display = 'none'; }
}

// ── 總覽頁面渲染 ──
function renderDash() {
  updateBadge();
  document.getElementById('statTotal').textContent    = vocab.length;
  document.getElementById('statMastered').textContent = vocab.filter(v => (v.level || 0) >= 3).length;
  document.getElementById('statNotes').textContent    = notes.length;

  const due = getDueWords();
  const bn  = document.getElementById('bannerTitle');
  const bd  = document.getElementById('bannerDesc');
  if (due.length > 0)       { bn.textContent = `今日待複習 ${due.length} 個單字`; bd.textContent = '點擊右側按鈕開始今日練習'; }
  else if (!vocab.length)   { bn.textContent = '開始建立你的單字庫';              bd.textContent = '先到「單字庫」新增單字，再來練習'; }
  else                      { bn.textContent = '今日複習已完成 🎉';               bd.textContent = '明天繼續加油！'; }

  // 連續學習條（過去 7 天）
  const today = new Date().toISOString().slice(0, 10);
  const days  = ['日','一','二','三','四','五','六'];
  let html = '';
  for (let i = 6; i >= 0; i--) {
    const d      = new Date();
    d.setDate(d.getDate() - i);
    const ds     = d.toISOString().slice(0, 10);
    const done   = streak.includes(ds);
    const isToday = ds === today;
    html += `<div class="streak-day ${done ? 'done' : ''} ${isToday && !done ? 'today' : ''}">${days[d.getDay()]}</div>`;
  }
  document.getElementById('streakBar').innerHTML = html;

  // 最近新增單字
  const recent = vocab.slice(0, 4);
  document.getElementById('recentVocab').innerHTML = recent.length
    ? recent.map(v => vocabCardHTML(v)).join('')
    : '<div class="empty-state" style="padding:30px"><div class="empty-icon">📚</div>尚無單字，點「單字庫」開始新增</div>';
}
