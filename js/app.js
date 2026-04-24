// ════════════════════════════════════════
//  app.js — 全域狀態、工具函式、導航、TTS、SRS、初始化
// ════════════════════════════════════════

// ── 全域資料 ──
let vocab    = JSON.parse(localStorage.getItem('tv-vocab')    || '[]');
let notes    = JSON.parse(localStorage.getItem('tv-notes')    || '[]');
let settings = JSON.parse(localStorage.getItem('tv-settings') || '{"count":10,"newPerDay":10,"mode":"standard"}');
let streak   = JSON.parse(localStorage.getItem('tv-streak')   || '[]');

let editVocabId  = null;
let editNoteId   = null;
let ttsSpeed     = 1.0;
let curNoteFilter = 'all';

const SRS_INTERVALS = {
  standard: [1, 3, 7, 14, 30],
  fast:     [1, 2, 5, 10, 21],
  slow:     [2, 7, 14, 30, 60],
};

// ── 持久化 ──
function persist() {
  localStorage.setItem('tv-vocab',    JSON.stringify(vocab));
  localStorage.setItem('tv-notes',    JSON.stringify(notes));
  localStorage.setItem('tv-settings', JSON.stringify(settings));
  localStorage.setItem('tv-streak',   JSON.stringify(streak));
  // 通知備份模組（若已載入且啟用自動同步）
  if (window._onAfterPersist) window._onAfterPersist();
}

// ── 共用工具 ──
function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── 導航 ──
function goto(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  btn.classList.add('active');
  if (id === 'dash')     renderDash();
  if (id === 'vocab')    renderVocab();
  if (id === 'notes')    renderNotes();
  if (id === 'roots')    renderRoots();
  if (id === 'practice') resetPractice();
  if (id === 'learn')    renderLearn();
}

// ── TTS (Text-to-Speech) ──
function setSpd(s, btn) {
  ttsSpeed = s;
  document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = ttsSpeed;
  const voices = speechSynthesis.getVoices();
  const voice  = voices.find(v => v.lang === 'en-US' && v.name.includes('Google'))
               || voices.find(v => v.lang === 'en-US');
  if (voice) u.voice = voice;
  speechSynthesis.speak(u);
}
// Chrome lazy-loads voices
if (window.speechSynthesis) speechSynthesis.getVoices();

// ── SRS 間隔計算 ──
function srsIntervals() {
  return SRS_INTERVALS[settings.mode] || SRS_INTERVALS.standard;
}

function nextReviewDate(level) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  const days = srsIntervals()[Math.min(level, srsIntervals().length - 1)];
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function isDue(v) {
  if (!v.nextReview) return true;
  return v.nextReview <= new Date().toISOString().slice(0, 10);
}

function getDueWords() {
  return vocab.filter(v => isDue(v));
}

// ── Modal 工具 ──
function closeOv(id)          { document.getElementById(id).classList.remove('show'); }
function ovClose(e, id)       { if (e.target.id === id) closeOv(id); }

// ── 初始化 Sample 資料 ──
function initSampleData() {
  if (!vocab.length) {
    const today = new Date().toISOString().slice(0, 10);
    vocab = [
      { id:'v1',  word:'consecutive',   phonetic:'/kənˈsɛkjʊtɪv/', meaning:'連續的、接連的', pos:'adj.', example:'We had three consecutive days of rain.\n（連續三天下雨）',                          tip:'con(一起)+secu(跟隨)→連續不斷',        level:1, nextReview:today, date:new Date().toISOString() },
      { id:'v2',  word:'reimburse',     phonetic:'/ˌriːɪmˈbɜːrs/', meaning:'報銷、償還',     pos:'v.',   example:'The company will reimburse travel expenses.\n（公司將報銷差旅費）',                 tip:'re(再)+im+burse(錢包)→把錢再放回錢包', level:0, nextReview:today, date:new Date(Date.now()-86400000).toISOString() },
      { id:'v3',  word:'subsequent',    phonetic:'/ˈsʌbsɪkwənt/',  meaning:'之後的、後續的', pos:'adj.', example:'Subsequent events proved him right.\n（後來的事件證明他是對的）',                  tip:'sub(在下)+sequ(跟隨)→緊跟在後',        level:2, nextReview:new Date(Date.now()+3*86400000).toISOString().slice(0,10), date:new Date(Date.now()-2*86400000).toISOString() },
      { id:'v4',  word:'allocate',      phonetic:'/ˈæləkeɪt/',     meaning:'分配、撥款',     pos:'v.',   example:'Budget was allocated for new equipment.\n（預算被撥款購買新設備）',               tip:'al+locate(定位)→把資源定位給各方',     level:0, nextReview:today, date:new Date(Date.now()-3*86400000).toISOString() },
      // ── 圖表題詞彙 ──
      { id:'v_g1', word:'fluctuate',    phonetic:'/ˈflʌktʃuˌeɪt/', meaning:'波動、起伏',     pos:'v.',   example:'Sales figures fluctuated throughout the year.\n（全年銷售數字持續波動）',            tip:'fluctu(流動)+ate → 像水流一樣起伏',    level:0, nextReview:today, date:new Date(Date.now()-1*86400000).toISOString() },
      { id:'v_g2', word:'significantly', phonetic:'/sɪɡˈnɪfɪkəntli/', meaning:'顯著地、大幅地', pos:'adv.', example:'Profits increased significantly last quarter.\n（上季利潤顯著提升）',             tip:'sign(標誌)+ificant+ly → 有顯著標誌地', level:0, nextReview:today, date:new Date(Date.now()-1*86400000).toISOString() },
      { id:'v_g3', word:'plateau',      phonetic:'/plæˈtoʊ/',       meaning:'趨於平穩、停滯期', pos:'n./v.', example:'Growth has reached a plateau after rapid expansion.\n（快速擴張後增長趨於平穩）', tip:'高原→ 到了高點就平了，比喻停滯',       level:0, nextReview:today, date:new Date(Date.now()-2*86400000).toISOString() },
      { id:'v_g4', word:'surge',        phonetic:'/sɜːrdʒ/',        meaning:'激增、暴漲',     pos:'n./v.', example:'There was a surge in demand after the announcement.\n（公告後需求激增）',         tip:'海浪湧來→ 突然大量增加',               level:0, nextReview:today, date:new Date(Date.now()-2*86400000).toISOString() },
      { id:'v_g5', word:'consecutive',  phonetic:'/kənˈsɛkjʊtɪv/', meaning:'連續的、接連的', pos:'adj.', example:'The company reported consecutive quarterly losses.\n（公司連續幾季虧損）',           tip:'con(一起)+secu(跟隨)→ 連續不斷',      level:0, nextReview:today, date:new Date(Date.now()-3*86400000).toISOString() },
      { id:'v_g6', word:'approximately', phonetic:'/əˈprɒksɪmətli/', meaning:'大約、約莫',   pos:'adv.', example:'The project will take approximately six months.\n（這個專案大約需要六個月）',       tip:'proxim(接近)+ately → 接近正確值',      level:0, nextReview:today, date:new Date(Date.now()-3*86400000).toISOString() },
      // ── Part 4 高頻慣用語 ──
      { id:'v_p1', word:'around the corner', phonetic:'', meaning:'即將來臨、近在眼前', pos:'phrase', example:'With the holiday season just around the corner, sales are expected to rise.\n（假期即將來臨，銷售預計將上升）', tip:'轉角就在那裡 → 快到了', level:0, nextReview:today, date:new Date(Date.now()-4*86400000).toISOString() },
      { id:'v_p2', word:'throw in',         phonetic:'', meaning:'附贈、額外加入',   pos:'phrase', example:'For every purchase over $50, we\'ll throw in a free gift.\n（每筆消費超過50元，我們將附贈免費禮物）', tip:'丟進去 → 額外加進去', level:0, nextReview:today, date:new Date(Date.now()-4*86400000).toISOString() },
      { id:'v_p3', word:'as of',            phonetic:'', meaning:'從…起、自…日起', pos:'phrase', example:'As of Monday, the new policy will be in effect.\n（從週一起，新政策將生效）',            tip:'多益公告題必考，記住 as of = starting from', level:0, nextReview:today, date:new Date(Date.now()-5*86400000).toISOString() },
      { id:'v_p4', word:'eligible for',     phonetic:'', meaning:'符合資格、有資格', pos:'phrase', example:'Employees who work over 5 years are eligible for extra benefits.\n（工作超過5年的員工有資格獲得額外福利）', tip:'eligible = 合格的，搭配 for', level:0, nextReview:today, date:new Date(Date.now()-5*86400000).toISOString() },
    ];
  }
  if (!notes.length) {
    const d  = new Date().toISOString();
    const d1 = new Date(Date.now()-1*86400000).toISOString();
    const d2 = new Date(Date.now()-2*86400000).toISOString();
    const d3 = new Date(Date.now()-3*86400000).toISOString();
    const d4 = new Date(Date.now()-4*86400000).toISOString();
    const d5 = new Date(Date.now()-5*86400000).toISOString();
    const d6 = new Date(Date.now()-6*86400000).toISOString();
    const d7 = new Date(Date.now()-7*86400000).toISOString();
    notes = [
      // ── Part 4 解題框架 ──
      { id:'n_p4_01', type:'listen', part:'Part 4', title:'【框架】Part 4 黃金三步驟',
        body:'① 聽前預讀（8秒）：掃描疑問詞 What/Who/When/Why/How → 鎖定名詞/動詞關鍵字 → 預測場景\n② 聽中鎖定：答案依序出現（第1題在前段、第2在中、第3在後）→ 特別注意轉折詞 but/however/therefore\n③ 聽後快選：果斷作答，絕不戀戰，立刻準備下一題預讀',
        tip:'答案順序 = 題目順序，這是 Part 4 鐵則', hard:false, date:d },

      { id:'n_p4_02', type:'listen', part:'Part 4', title:'【題型】主旨題 Main Idea',
        body:'典型問句：What is the purpose of the talk? / What is the main topic?\n\n解題策略：\n• 答案幾乎在獨白第一句話\n• 聽到 "I\'m calling about..." / "Today we\'ll..." / "This is to inform you..." 立刻鎖定\n• 選項通常是主旨的同義改寫，非細節',
        tip:'主旨題 = 第一句話最重要', hard:false, date:d1 },

      { id:'n_p4_03', type:'listen', part:'Part 4', title:'【題型】細節題 Specific Details',
        body:'典型問句：What does the speaker mention about...? / When will...? / How much...?\n\n解題策略：\n• 預讀時標記數字、時間、地點、人名\n• 注意同義替換陷阱：cost → price/fee/charge\n• 聽到數字/專有名詞時快速記下',
        tip:'數字、時間、地點 = 細節題高頻考點', hard:false, date:d2 },

      { id:'n_p4_04', type:'listen', part:'Part 4', title:'【題型】後續行動題 Next Action',
        body:'典型問句：What will the speaker do next? / What are listeners asked to do?\n\n解題策略：\n• 答案通常在獨白最後一句\n• 聽 "Please..." / "You should..." / "Don\'t forget to..." / "I\'ll..." 等指示語\n• 注意聽眾 vs 說話者的行動不要搞混',
        tip:'後續行動 = 聽最後一句話', hard:true, date:d3 },

      { id:'n_p4_05', type:'listen', part:'Part 4', title:'【題型】推論題 Inference',
        body:'典型問句：What can be inferred...? / What does the speaker imply?\n\n解題策略：\n• 答案不在原文，需要邏輯推理\n• 結合上下文，找「言外之意」\n• 排除法很有效：剔除原文直接說過的（太直接通常不是推論題答案）',
        tip:'推論題 ≠ 細節題，要找「沒說出來」的含義', hard:true, date:d4 },

      { id:'n_p4_06', type:'listen', part:'Part 4', title:'【獨白類型】電話留言 Phone Message',
        body:'開頭關鍵字：This is... / I\'m calling about... / I\'m calling regarding...\n\n必聽要素：\n• 打電話的人是誰、代表哪家公司\n• 打電話的目的（通知/詢問/確認/抱怨）\n• 要求對方做什麼（回電/確認/準備）\n• 回電號碼或時間（數字最容易出題）',
        tip:'回電號碼、時間細節 = 電話留言高頻考點', hard:false, date:d5 },

      { id:'n_p4_07', type:'listen', part:'Part 4', title:'【獨白類型】公司公告 Company Announcement',
        body:'開頭關鍵字：Attention all employees / Please be informed / I\'d like to announce...\n\n必聽要素：\n• 宣布的事項（政策變更/人事異動/設施更新）\n• 生效時間（as of / effective / starting）\n• 員工需要配合的行動',
        tip:'as of + 日期 = 生效日，常考細節', hard:false, date:d6 },

      { id:'n_p4_08', type:'listen', part:'Part 4', title:'【獨白類型】廣告/促銷 Advertisement',
        body:'開頭關鍵字：With summer just around the corner / For a limited time...\n\n必聽要素：\n• 促銷原因（季節/節日/清庫存）\n• 優惠內容（折扣/贈品/免費）\n• 條件句：for every... / if you... / when you...\n• 截止時間：until / ends on / limited time\n\n高頻陷阱：\n• marvelous deals = a sale（同義替換）\n• purchase = buy / throw in = include for free',
        tip:'條件句 + 截止時間 = 廣告題必考組合', hard:false, date:d7 },

      { id:'n_p4_09', type:'listen', part:'Part 4', title:'【獨白類型】導覽介紹 Tour Guide',
        body:'開頭關鍵字：Welcome to... / On your left you\'ll see... / Our first stop is...\n\n必聽要素：\n• 地點名稱和特色\n• 參觀順序（first / then / next / finally）\n• 注意事項（No photos / Please stay with the group）\n• 集合時間和地點',
        tip:'順序題常考：先去哪裡再去哪裡', hard:false, date:d7 },

      { id:'n_p4_10', type:'listen', part:'Part 4', title:'【圖表整合題】Look at the graphic',
        body:'新制多益特有題型，通常是每組第3題\n\n解題流程：\n① 預讀先掃圖表：看標題、座標軸、圖例\n② 找問題與圖表的關聯點\n③ 聽音時：聽到與圖表元素相關的詞立刻定位\n④ 交叉比對：聽力內容 + 圖表資訊 → 選答案\n\n常考圖表類型：\n• 時間表（schedule）→ 聽日期/時間變更\n• 組織圖（org chart）→ 聽職位/人名\n• 數據表格（table）→ 聽數字/百分比',
        tip:'圖表題：預讀時間優先看圖表，不是看選項', hard:true, date:d7 },

      { id:'n_gram', type:'grammar', part:'文法', title:'分詞構句：主動 vs 被動',
        body:'主動：Finishing the report, he went home.\n被動：Written in 1960, the book is still popular.\n\n★ 分詞主詞必須與主句主詞一致（否則懸垂分詞錯誤）',
        tip:'動詞-ing=主動；過去分詞=被動', hard:false, date:d7 },
    ];
  }
  persist();
}

// ── 啟動 ──
document.addEventListener('DOMContentLoaded', async () => {
  const hasLocalData = vocab.length > 0 || notes.length > 0;

  if (!hasLocalData) {
    // 新裝置或資料被清除：嘗試從 Google Sheets 自動還原
    await autoRestoreFromSheets();
  } else {
    // 有本機資料，直接啟動
    initSampleData();
  }

  loadSettings();
  renderDash();
  renderNotes();
  renderRoots();
  updateBadge();
});

// ── 自動從 Google Sheets 還原（新裝置第一次開啟時） ──
async function autoRestoreFromSheets() {
  const url = localStorage.getItem('gs-webAppUrl');
  if (!url) {
    // 沒設定試算表，載入範例資料
    initSampleData();
    return;
  }

  // 顯示載入提示
  showAutoRestoreUI(true);
  try {
    const res  = await fetch(url + '?action=read');
    const data = await res.json();

    if (data.vocab && JSON.parse(data.vocab).length > 0) {
      vocab  = JSON.parse(data.vocab);
      notes  = JSON.parse(data.notes  || '[]');
      streak = JSON.parse(data.streak || '[]');
      persist();
      console.log('[AutoRestore] 從 Google Sheets 還原成功');
    } else {
      // 試算表也是空的，載入範例資料
      initSampleData();
    }
  } catch (e) {
    console.warn('[AutoRestore] 無法連線到 Google Sheets，使用範例資料', e);
    initSampleData();
  } finally {
    showAutoRestoreUI(false);
  }
}

function showAutoRestoreUI(show) {
  let el = document.getElementById('autoRestoreBanner');
  if (!el) {
    el = document.createElement('div');
    el.id = 'autoRestoreBanner';
    el.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'right:0',
      'background:rgba(91,143,212,.15)',
      'border-bottom:1px solid rgba(91,143,212,.35)',
      'padding:10px 20px',
      'font-family:var(--font-mono)',
      'font-size:.75rem',
      'color:var(--blue)',
      'text-align:center',
      'z-index:999',
      'transition:opacity .3s',
    ].join(';');
    document.body.appendChild(el);
  }
  if (show) {
    el.textContent = '⟳ 偵測到新裝置，正在從 Google Sheets 還原資料…';
    el.style.opacity = '1';
    el.style.display = 'block';
  } else {
    el.style.opacity = '0';
    setTimeout(() => { el.style.display = 'none'; }, 400);
  }
}
