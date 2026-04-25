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
const TOPIC_PRACTICE = {
  travel:[
    {part:'Part 2',type:'應答問題',q:'Has the hotel confirmed our reservation?',speak:true,choices:['Yes, we received a confirmation email.','No, the hotel is closed.','The flight was delayed.'],ans:0,explain:'確認飯店訂房 → 最合邏輯的回應是「收到確認信」。'},
    {part:'Part 5',type:'句子填空',q:'Passengers are reminded to have their _____ ready before boarding.',choices:['boarding pass','travel agent','excess baggage','itinerary'],ans:0,explain:'登機前需要出示「登機證 boarding pass」，固定搭配。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Email] Your flight TK205 has been rescheduled from 09:00 to 14:30 due to maintenance.\n\nQ: Why was the flight rescheduled?',choices:['Bad weather','Aircraft maintenance','Overbooking','Staff strike'],ans:1,explain:'郵件中明確說明 "due to maintenance"（機體維修）。'},
  ],
  dining:[
    {part:'Part 2',type:'應答問題',q:'Do you have a reservation for this evening?',speak:true,choices:["Yes, it's under the name Johnson, party of four.",'The food was excellent.','We close at 10 PM.'],ans:0,explain:'詢問有無訂位 → 回答「有，Johnson，4人」是最直接的回應。'},
    {part:'Part 5',type:'句子填空',q:'The company hired a professional _____ company for the annual banquet.',choices:['catering','dietary','specials','gratuity'],ans:0,explain:'外燴服務公司 = catering company，多益商務情境高頻搭配。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Notice] A 15% gratuity will be added to parties of six or more. Dietary restrictions must be communicated at least 24 hours in advance.\n\nQ: What must customers do if they have dietary needs?',choices:['Pay an extra fee','Inform the restaurant in advance','Order from a special menu','Arrive early'],ans:1,explain:'"must be communicated at least 24 hours in advance" = 需要提前告知。'},
  ],
  entertainment:[
    {part:'Part 2',type:'應答問題',q:"Are there still tickets available for Saturday's performance?",speak:true,choices:["I'm afraid it's sold out.",'The venue is very large.','The show starts at 8 PM.'],ans:0,explain:'詢問票是否還有 → 回答「很遺憾已售完」最合邏輯。'},
    {part:'Part 5',type:'句子填空',q:'The art _____ will be open to the public from May 1st through June 30th.',choices:['exhibit','admission','premiere','lineup'],ans:0,explain:'展覽 = exhibit（名詞），art exhibit = 藝術展覽，固定搭配。'},
    {part:'Part 4',type:'簡短獨白',q:"[Announcement] Tonight's concert begins at 8 PM. Latecomers will not be admitted until intermission. Tickets available at the box office until 7:30 PM.\n\nQ: What will happen to people who arrive late?",choices:['They will receive a refund','They must wait until intermission','They can enter through a side door','They will get different seats'],ans:1,explain:'"will not be admitted until intermission" = 必須等到中場才能入場。'},
  ],
  housing:[
    {part:'Part 2',type:'應答問題',q:'When does the lease expire?',speak:true,choices:['At the end of December.','It is a two-bedroom apartment.','The landlord is very helpful.'],ans:0,explain:'詢問租約何時到期 → 回答「12月底」是最直接的時間回應。'},
    {part:'Part 5',type:'句子填空',q:'The security _____ is equal to two months rent and will be returned upon move-out.',choices:['deposit','tenant','utilities','vacancy'],ans:0,explain:'押金 = security deposit，退租時退還押金是固定商務表達。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Notice] Due to renovation of the east wing, parking lot B will be closed from March 1-15. Residents may use Oak Street parking.\n\nQ: Why will the parking lot be closed?',choices:['A car accident occurred','Building renovations are being done','It is becoming a garden','The lot is being expanded'],ans:1,explain:'"Due to scheduled renovation" = 因為預定的翻修工程。'},
  ],
  purchasing:[
    {part:'Part 2',type:'應答問題',q:'Has the purchase order been approved yet?',speak:true,choices:['Not yet. It is still under review.','The vendor sent the invoice.','We need 200 units.'],ans:0,explain:'詢問採購單是否批准 → 回答「尚未，仍在審核中」最合邏輯。'},
    {part:'Part 5',type:'句子填空',q:'Could you send us a _____ for 500 units of the XR-200 model?',choices:['quote','invoice','backorder','warranty'],ans:0,explain:'詢問報價用 "send a quote"，invoice 是帳單（事後），兩者不同。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Email] We would like to place an order for 300 units. Payment will be made within net 30 days of invoice receipt.\n\nQ: What payment terms does the buyer offer?',choices:['Payment in advance','Payment within 30 days of invoicing','50% deposit required','Cash on delivery'],ans:1,explain:'"net 30 days of invoice receipt" = 收到發票後 30 天內付款。'},
  ],
  personnel:[
    {part:'Part 2',type:'應答問題',q:'Did anyone apply for the marketing manager position?',speak:true,choices:['We received over 50 applications.','The salary is negotiable.','The interview was last week.'],ans:0,explain:'詢問有沒有人應徵 → 回答「收到 50 多份申請」是最直接的回應。'},
    {part:'Part 5',type:'句子填空',q:'New employees are required to complete a 90-day _____ period before receiving full benefits.',choices:['probation','recruitment','incentive','payroll'],ans:0,explain:'試用期 = probation period，是人事主題必考詞彙。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Job Posting] Senior Accountant needed. Requirements: 5+ years experience, CPA preferred. Submit resume and cover letter to hr@company.com.\n\nQ: What should applicants send to apply?',choices:['A phone call','A resume and cover letter','A portfolio','A reference letter'],ans:1,explain:'"Submit resume and cover letter" = 需要寄履歷和求職信。'},
  ],
  offices:[
    {part:'Part 2',type:'應答問題',q:"Could you send me the agenda for tomorrow's meeting?",speak:true,choices:["Sure, I'll email it to you right away.",'The meeting was rescheduled.','It is in Conference Room B.'],ans:0,explain:'請求傳送議程 → 「好的，我馬上 email 給你」是最直接的回應。'},
    {part:'Part 5',type:'句子填空',q:'The manager _____ the project to her assistant while she was on a business trip.',choices:['delegated','submitted','revised','scheduled'],ans:0,explain:'委派任務 = delegate the project to sb，是辦公室主題固定用法。'},
    {part:'Part 6',type:'短文填空',q:'[Memo] Effective next Monday, all expense _____ must be submitted by the 15th of each month.',choices:['reports','meetings','requests','schedules'],ans:0,explain:'前文提到 expense，空格後說 submitted by the 15th，Reports 承接最自然。'},
  ],
  health:[
    {part:'Part 2',type:'應答問題',q:'Does our health insurance cover dental treatment?',speak:true,choices:['Yes, up to $500 per year.','The doctor is very experienced.','You need a prescription.'],ans:0,explain:'詢問保險是否涵蓋牙科 → 回答「有，每年最高 500 元」是最直接的資訊回應。'},
    {part:'Part 5',type:'句子填空',q:'The annual health _____ is free for all full-time employees.',choices:['checkup','coverage','deductible','prescription'],ans:0,explain:'健康檢查 = health checkup，是 health 主題最常考的搭配。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Notice] Our wellness program includes yoga, nutrition workshops, and a step challenge. Participation is voluntary.\n\nQ: What is true about the wellness program?',choices:['It is required for all staff','It costs extra','Attendance is optional','It is only for managers'],ans:2,explain:'"Participation is voluntary" = 自願參加，所以是 optional。'},
  ],
  general_biz:[
    {part:'Part 2',type:'應答問題',q:'Has the contract with the new client been finalized?',speak:true,choices:['Not yet. We are still negotiating the terms.','The client visited last Tuesday.','It is a two-year agreement.'],ans:0,explain:'詢問合約是否完成 → 回答「還沒，還在協商條款」最合邏輯。'},
    {part:'Part 5',type:'句子填空',q:'We are pleased to announce that our annual _____ exceeded last year by 12%.',choices:['revenue','proposal','strategy','initiative'],ans:0,explain:'超越去年數字 → 指財務表現，revenue（營收）最符合語意。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Press Release] XYZ Corp announced a strategic partnership with ABC Inc to expand operations across Southeast Asia and increase market share.\n\nQ: What is the main purpose of the partnership?',choices:['To reduce the workforce','To expand into new markets','To merge the companies','To launch a new product'],ans:1,explain:'"expand operations" + "increase market share" = 拓展新市場。'},
  ],
  manufacturing:[
    {part:'Part 2',type:'應答問題',q:'Has the quality control team finished inspecting the new batch?',speak:true,choices:['They are still working on it.','The factory is in Taipei.','We received the raw materials.'],ans:0,explain:'詢問品管是否完成 → 「他們還在進行中」是最直接的狀態回應。'},
    {part:'Part 5',type:'句子填空',q:'All _____ products must be removed from the production line immediately.',choices:['defective','assembly','throughput','compliant'],ans:0,explain:'有缺陷的產品 = defective products，是製造業主題最核心詞彙。'},
    {part:'Part 4',type:'簡短獨白',q:'[Announcement] Due to maintenance on Line 3, production is suspended from 2 to 4 PM. Workers on Line 3 should report to Line 5.\n\nQ: What should Line 3 workers do?',choices:['Take a break','Report to Line 5','Wait at their stations','Leave the factory'],ans:1,explain:'"Workers on Line 3 are asked to report to Line 5" 直接說明。'},
  ],
  corporate:[
    {part:'Part 2',type:'應答問題',q:'When will the merger be officially announced?',speak:true,choices:['The board will make an announcement next Friday.','The shareholders voted last month.','Both companies are profitable.'],ans:0,explain:'詢問合併何時宣布 → 回答「董事會下週五宣布」是最直接的時間資訊。'},
    {part:'Part 5',type:'句子填空',q:'Following the _____, the company will operate under a new name.',choices:['merger','dividend','shareholder','downsizing'],ans:0,explain:'合併後改名 = Following the merger，是企業發展主題標準用法。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Notice] Effective January 1st, GlobalTech will acquire BrightStar. All BrightStar employees will be transferred to GlobalTech. Benefits and salaries remain unchanged for the first year.\n\nQ: What will happen to BrightStar employees?',choices:['They will be laid off','Their salaries will be cut','They will join GlobalTech','They must reapply'],ans:2,explain:'"All BrightStar employees will be transferred to GlobalTech" 直接說明。'},
  ],
  technical:[
    {part:'Part 2',type:'應答問題',q:'Is the server back online yet?',speak:true,choices:['Not yet. The IT team is still working on it.','We backed up all the data.','The password was reset.'],ans:0,explain:'詢問伺服器是否恢復 → 回答「還沒，IT 還在處理中」最合邏輯。'},
    {part:'Part 5',type:'句子填空',q:'Please _____ the latest version of the software before the system update begins.',choices:['install','troubleshoot','upgrade','backup'],ans:0,explain:'系統更新前先安裝最新版本 = install the latest version，IT 情境固定用法。'},
    {part:'Part 4',type:'簡短獨白',q:'[IT Notice] System maintenance will occur from 11 PM to 2 AM tonight. Database access will be unavailable. Please save all work before 10:30 PM.\n\nQ: What are employees advised to do before 10:30 PM?',choices:['Log out','Save their work','Contact IT','Back up the database'],ans:1,explain:'"Please save all your work before 10:30 PM" 直接指示。'},
  ],
  financing:[
    {part:'Part 2',type:'應答問題',q:'Has the quarterly budget report been submitted yet?',speak:true,choices:['Yes, the finance team sent it this morning.','The budget was approved last month.','Our revenue increased by 10%.'],ans:0,explain:'詢問預算報告是否提交 → 「財務部今早已送出」是最直接的確認回應。'},
    {part:'Part 5',type:'句子填空',q:'The external _____ found no significant financial irregularities in this year records.',choices:['audit','budget','dividend','liability'],ans:0,explain:'外部稽查 = external audit，是財務主題必考詞彙。'},
    {part:'Part 5',type:'句子填空',q:'The company total _____ exceeded its assets, raising concerns among investors.',choices:['liabilities','revenues','dividends','budgets'],ans:0,explain:'負債超過資產 = liabilities exceeded assets，財報分析常見句型。'},
    {part:'Part 7',type:'閱讀測驗',q:'[Q3 Report] Revenue reached $4.2M, a 15% increase. However, operating expenses rose 20%, resulting in a lower profit margin of 8.5%.\n\nQ: What happened to the profit margin in Q3?',choices:['It increased by 15%','It stayed the same','It decreased','It exceeded the target'],ans:2,explain:'收入增加但支出增加更多 → profit margin 下降（decreased）。'},
  ],
};

// ════════════════════════════════════════
//  練習題引擎
// ════════════════════════════════════════
let topicPracticeState = {};

function renderTopicPractice(t) {
  const el = document.getElementById('topicTabContent');
  if (!el) return;
  const qs = (window.TOPIC_PRACTICE || {})[t.id] || [];
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
  filtered.forEach((q, qi) => {
    const realIdx = qs.indexOf(q);
    if (q.groupId) {
      if (!seen.has(q.groupId)) {
        seen.add(q.groupId);
        const groupQs = filtered.filter(x => x.groupId === q.groupId);
        groups.push({ type:'group', groupId:q.groupId, passage:q.passage, qs:groupQs,
          indices:groupQs.map(x=>qs.indexOf(x)) });
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
