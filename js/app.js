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
      { id:'v1', word:'consecutive',  phonetic:'/kənˈsɛkjʊtɪv/', meaning:'連續的、接連的', pos:'adj.',  example:'We had three consecutive days of rain.\n（連續三天下雨）',                          tip:'con(一起)+secu(跟隨)→連續不斷',              level:1, nextReview:today, date:new Date().toISOString() },
      { id:'v2', word:'reimburse',    phonetic:'/ˌriːɪmˈbɜːrs/', meaning:'報銷、償還',      pos:'v.',   example:'The company will reimburse travel expenses.\n（公司將報銷差旅費）',                 tip:'re(再)+im+burse(錢包)→把錢再放回錢包',       level:0, nextReview:today, date:new Date(Date.now()-86400000).toISOString() },
      { id:'v3', word:'subsequent',   phonetic:'/ˈsʌbsɪkwənt/',  meaning:'之後的、後續的',  pos:'adj.',  example:'Subsequent events proved him right.\n（後來的事件證明他是對的）',                  tip:'sub(在下)+sequ(跟隨)→緊跟在後',             level:2, nextReview:new Date(Date.now()+3*86400000).toISOString().slice(0,10), date:new Date(Date.now()-2*86400000).toISOString() },
      { id:'v4', word:'allocate',     phonetic:'/ˈæləkeɪt/',     meaning:'分配、撥款',      pos:'v.',   example:'Budget was allocated for new equipment.\n（預算被撥款購買新設備）',               tip:'al+locate(定位)→把資源定位給各方',           level:0, nextReview:today, date:new Date(Date.now()-3*86400000).toISOString() },
    ];
  }
  if (!notes.length) {
    notes = [
      { id:'n1', type:'listen', part:'Part 4', title:'diplomat / embassy 外交詞彙',      body:"I'm calling from the United States embassy...\n• 關鍵字：diplomats coming to visit\n• 正確答案：C", tip:'embassy=大使館，diplomat=外交官，常一起出現', hard:true,  date:new Date().toISOString() },
      { id:'n2', type:'grammar', part:'文法', title:'分詞構句：主動 vs 被動',              body:'主動：Finishing the report, he went home.\n被動：Written in 1960, the book is still popular.',      tip:'動詞-ing=主動；過去分詞=被動',              hard:false, date:new Date(Date.now()-86400000).toISOString() },
    ];
  }
  persist();
}

// ── 啟動 ──
document.addEventListener('DOMContentLoaded', () => {
  initSampleData();
  loadSettings();
  renderDash();
  renderNotes();
  renderRoots();
  updateBadge();
});
