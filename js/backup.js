// ════════════════════════════════════════
//  backup.js — 資料備份：匯出/匯入 JSON、Google Sheets 同步
// ════════════════════════════════════════

// ════════════════════
//  設定區：填入你的 Google Sheets 資訊
//  申請步驟見 README 或網站內「備份設定」說明
// ════════════════════
const GSHEETS_CONFIG = {
  // 1. 從 Google Cloud Console 取得（Apps Script Web App URL）
  webAppUrl: localStorage.getItem('gs-webAppUrl') || '',
  // 是否啟用自動同步
  autoSync:  localStorage.getItem('gs-autoSync') === 'true',
};

// ════════════════════
//  方案一：匯出 / 匯入 JSON
// ════════════════════

function exportData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    version: '1.0',
    vocab,
    notes,
    settings,
    streak,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const date = new Date().toISOString().slice(0, 10);
  a.href     = url;
  a.download = `toeic-backup-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('✓ 備份檔案已下載');
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      // 驗證格式
      if (!Array.isArray(data.vocab) || !Array.isArray(data.notes)) {
        throw new Error('格式錯誤');
      }
      const confirmMsg = `即將匯入：\n• 單字 ${data.vocab.length} 個\n• 筆記 ${data.notes.length} 筆\n\n這會覆蓋現有資料，確定嗎？`;
      if (!confirm(confirmMsg)) return;

      vocab    = data.vocab;
      notes    = data.notes;
      settings = data.settings || settings;
      streak   = data.streak   || streak;
      persist();
      renderDash();
      renderVocab();
      renderNotes();
      updateBadge();
      loadSettings();
      showToast(`✓ 匯入完成：${vocab.length} 個單字、${notes.length} 筆筆記`);
      closeOv('ovBackup');
    } catch (err) {
      alert('匯入失敗：檔案格式不正確\n' + err.message);
    }
  };
  reader.readAsText(file);
}

// ════════════════════
//  方案二：Google Sheets 同步
//  原理：透過 Google Apps Script 部署成 Web App，
//        前端直接呼叫 Web App URL 讀寫試算表
// ════════════════════

async function syncToSheets() {
  const url = GSHEETS_CONFIG.webAppUrl;
  if (!url) {
    showToast('⚠ 尚未設定 Google Sheets，請先到備份設定填入 Web App URL', 'warn');
    openBackupModal();
    return;
  }

  setSyncStatus('syncing');
  try {
    const payload = {
      action: 'write',
      vocab:  JSON.stringify(vocab),
      notes:  JSON.stringify(notes),
      streak: JSON.stringify(streak),
      syncAt: new Date().toISOString(),
    };
    await fetch(url, {
      method: 'POST',
      mode:   'no-cors',   // Apps Script 需要 no-cors
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    // no-cors 無法讀回應，只要沒拋錯就算成功
    const now = new Date().toLocaleString('zh-TW');
    localStorage.setItem('gs-lastSync', now);
    setSyncStatus('ok', now);
    showToast('✓ 已同步到 Google Sheets');
  } catch (err) {
    setSyncStatus('err');
    showToast('✗ 同步失敗：' + err.message, 'err');
  }
}

async function syncFromSheets() {
  const url = GSHEETS_CONFIG.webAppUrl;
  if (!url) { showToast('⚠ 尚未設定 Google Sheets', 'warn'); return; }

  setSyncStatus('syncing');
  try {
    const res  = await fetch(url + '?action=read');
    const data = await res.json();
    if (!data.vocab) throw new Error('試算表無資料');

    const confirmMsg = `從 Google Sheets 匯入：\n• 單字 ${JSON.parse(data.vocab).length} 個\n• 筆記 ${JSON.parse(data.notes).length} 筆\n\n這會覆蓋本機資料，確定嗎？`;
    if (!confirm(confirmMsg)) { setSyncStatus('idle'); return; }

    vocab  = JSON.parse(data.vocab);
    notes  = JSON.parse(data.notes);
    streak = JSON.parse(data.streak || '[]');
    persist();
    renderDash(); renderVocab(); renderNotes(); updateBadge();
    setSyncStatus('ok', new Date().toLocaleString('zh-TW'));
    showToast('✓ 從 Google Sheets 載入完成');
  } catch (err) {
    setSyncStatus('err');
    showToast('✗ 載入失敗：' + err.message, 'err');
  }
}

function setSyncStatus(state, time) {
  const el = document.getElementById('syncStatus');
  if (!el) return;
  const map = {
    idle:    { text: '尚未同步',         cls: '' },
    syncing: { text: '⟳ 同步中…',       cls: 'syncing' },
    ok:      { text: `✓ 上次同步：${time||''}`, cls: 'ok' },
    err:     { text: '✗ 同步失敗',       cls: 'err' },
  };
  const s = map[state] || map.idle;
  el.textContent  = s.text;
  el.className    = 'sync-status ' + s.cls;
}

// 自動同步 hook：每次 persist() 後若啟用則自動推送
const _origPersist = persist;
function persist() {
  _origPersist();
  if (GSHEETS_CONFIG.autoSync && GSHEETS_CONFIG.webAppUrl) {
    // debounce：3 秒後才送，避免連續操作一直打 API
    clearTimeout(window._syncTimer);
    window._syncTimer = setTimeout(syncToSheets, 3000);
  }
}

// ════════════════════
//  備份設定 Modal
// ════════════════════

function openBackupModal() {
  document.getElementById('gs-url-input').value    = GSHEETS_CONFIG.webAppUrl;
  document.getElementById('gs-auto-toggle').checked = GSHEETS_CONFIG.autoSync;
  const last = localStorage.getItem('gs-lastSync');
  setSyncStatus(last ? 'ok' : 'idle', last);
  document.getElementById('ovBackup').classList.add('show');
}

function saveBackupSettings() {
  const url  = document.getElementById('gs-url-input').value.trim();
  const auto = document.getElementById('gs-auto-toggle').checked;
  GSHEETS_CONFIG.webAppUrl = url;
  GSHEETS_CONFIG.autoSync  = auto;
  localStorage.setItem('gs-webAppUrl', url);
  localStorage.setItem('gs-autoSync',  String(auto));
  showToast('✓ 設定已儲存');
  closeOv('ovBackup');
}

// ════════════════════
//  Toast 通知
// ════════════════════

function showToast(msg, type = 'ok') {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className   = 'toast show ' + type;
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}
