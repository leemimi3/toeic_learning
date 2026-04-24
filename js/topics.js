// ════════════════════════════════════════
//  topics.js — 主題學習 + 學習目標系統
//  13 個 TOEIC 高頻主題
// ════════════════════════════════════════

// ── 13 大主題資料 ──
const TOPICS_DATA = [
  {
    id: 'travel', icon: '✈️', name: 'Travel', nameTw: '旅遊篇',
    color: '#5b8fd4',
    desc: '機場、訂房、交通、行程安排',
    vocab: [
      { w:'itinerary',     m:'行程表',       e:'Please send me the updated travel itinerary.' },
      { w:'reservation',   m:'預訂、訂位',    e:'I would like to make a hotel reservation.' },
      { w:'departure',     m:'出發、起飛',    e:'Our departure time has been moved to 8 AM.' },
      { w:'accommodation', m:'住宿',          e:'The conference includes accommodation for two nights.' },
      { w:'layover',       m:'中停、轉機',    e:'We have a two-hour layover in Tokyo.' },
      { w:'complimentary', m:'免費贈送的',    e:'Breakfast is complimentary for all guests.' },
      { w:'cancellation',  m:'取消',          e:'Late cancellation may result in a fee.' },
      { w:'reimbursement', m:'費用報銷',      e:'Submit your receipts for travel reimbursement.' },
      { w:'excess baggage',m:'超重行李',      e:'You may be charged for excess baggage.' },
      { w:'boarding pass', m:'登機證',        e:'Please have your boarding pass ready.' },
    ],
    patterns: [
      { p:'I would like to + V', e:'I would like to book a single room for two nights.', t:'禮貌請求', tw:'我想要…' },
      { p:'Is there a + N available?', e:'Is there a direct flight to Paris available?', t:'詢問是否有…', tw:'請問有…嗎？' },
      { p:'Please be advised that + S+V', e:'Please be advised that check-in is at 3 PM.', t:'公告提醒', tw:'請注意…' },
      { p:'due to + N', e:'The flight was delayed due to bad weather.', t:'原因說明', tw:'由於…' },
    ],
    examTips: [
      'Part 3/4 常考：班機延誤、改期、轉機、飯店 check-in 問題',
      'Part 7 常考：行程確認 email、飯店取消政策、旅遊廣告',
      '關鍵字：itinerary / round-trip / one-way / complimentary / amenities',
    ],
  },
  {
    id: 'dining', icon: '🍽️', name: 'Dining Out', nameTw: '外出用餐篇',
    color: '#e8a44a',
    desc: '餐廳訂位、點餐、外燴、餐飲服務',
    vocab: [
      { w:'reservation',   m:'訂位',          e:'I have a reservation under the name Smith.' },
      { w:'appetizer',     m:'開胃菜',        e:'Would you like to start with an appetizer?' },
      { w:'cuisine',       m:'料理、烹飪風格', e:'The restaurant is known for its French cuisine.' },
      { w:'catering',      m:'外燴服務',      e:'We hired a catering company for the event.' },
      { w:'dietary',       m:'飲食的',        e:'Please let us know of any dietary restrictions.' },
      { w:'takeout',       m:'外帶',          e:'Would you prefer dine-in or takeout?' },
      { w:'gratuity',      m:'小費、服務費',   e:'A 15% gratuity is included in the bill.' },
      { w:'specials',      m:'今日特餐',      e:'Today\'s specials include grilled salmon.' },
      { w:'banquet',       m:'宴席、宴會',    e:'The company dinner will be a banquet-style event.' },
      { w:'buffet',        m:'自助式餐廳',    e:'Lunch will be served buffet style.' },
    ],
    patterns: [
      { p:'I\'d like to reserve a table for + 人數', e:'I\'d like to reserve a table for six at 7 PM.', t:'訂位', tw:'我想訂…人的位子' },
      { p:'Do you have anything + adj?', e:'Do you have anything vegetarian on the menu?', t:'詢問菜單', tw:'有…的選項嗎？' },
      { p:'Could you accommodate + N?', e:'Could you accommodate a special dietary request?', t:'特殊要求', tw:'能否配合…？' },
    ],
    examTips: [
      'Part 3 常考：訂位電話、更改人數、特殊飲食需求',
      'Part 4 常考：餐廳廣告、外燴服務說明',
      '關鍵字：reservation / dietary restriction / complimentary / gratuity',
    ],
  },
  {
    id: 'entertainment', icon: '🎭', name: 'Entertainment', nameTw: '娛樂篇',
    color: '#9b7fe8',
    desc: '展覽、表演、活動、票務',
    vocab: [
      { w:'venue',         m:'場地、會場',    e:'The concert venue holds up to 5,000 people.' },
      { w:'admission',     m:'入場費',        e:'Admission is free for children under 12.' },
      { w:'intermission',  m:'中場休息',      e:'There will be a 15-minute intermission.' },
      { w:'featured',      m:'特別呈現的',    e:'The film festival featured works by local artists.' },
      { w:'premiere',      m:'首映、首演',    e:'The premiere is scheduled for next Friday.' },
      { w:'exhibit',       m:'展覽（品）',    e:'The art exhibit will run through the end of the month.' },
      { w:'ticket stub',   m:'票根',          e:'Please keep your ticket stub for re-entry.' },
      { w:'sold out',      m:'售罄',          e:'The Saturday performance is already sold out.' },
      { w:'box office',    m:'售票處',        e:'Tickets are available at the box office.' },
      { w:'lineup',        m:'陣容、節目表',   e:'This year\'s festival lineup is impressive.' },
    ],
    patterns: [
      { p:'Tickets are available + 地點/方式', e:'Tickets are available online or at the door.', t:'售票資訊', tw:'票券可在…購得' },
      { p:'The event will be held + 時地', e:'The event will be held at City Hall on March 15th.', t:'活動舉行', tw:'活動將於…舉行' },
      { p:'For more information, + V', e:'For more information, visit our website.', t:'更多資訊', tw:'更多資訊請…' },
    ],
    examTips: [
      'Part 7 常考：活動公告、展覽說明、票務規則',
      'Part 4 常考：廣播節目介紹、表演廣告',
      '關鍵字：admission / venue / sold out / intermission / box office',
    ],
  },
  {
    id: 'housing', icon: '🏠', name: 'Housing', nameTw: '房屋篇',
    color: '#4caf82',
    desc: '租屋、買賣、維修、物業管理',
    vocab: [
      { w:'lease',         m:'租約、租賃',    e:'The lease agreement is for one year.' },
      { w:'landlord',      m:'房東',          e:'The landlord agreed to repaint the apartment.' },
      { w:'deposit',       m:'押金、定金',    e:'A security deposit equal to one month\'s rent is required.' },
      { w:'utilities',     m:'水電費',        e:'Utilities are not included in the monthly rent.' },
      { w:'renovation',    m:'整修、翻新',    e:'The building is undergoing major renovation.' },
      { w:'property',      m:'房產、物業',    e:'The company owns several commercial properties.' },
      { w:'mortgage',      m:'抵押貸款',      e:'They applied for a 30-year mortgage.' },
      { w:'tenant',        m:'承租人、房客',   e:'The tenant is responsible for minor repairs.' },
      { w:'vacancy',       m:'空缺、空屋',    e:'There are currently two vacancies in the building.' },
      { w:'maintenance',   m:'維護、保養',    e:'Report any maintenance issues to the building manager.' },
    ],
    patterns: [
      { p:'The rent is + $ per month', e:'The rent is $1,200 per month, utilities included.', t:'租金說明', tw:'租金為…' },
      { p:'Subject to + N', e:'All repairs are subject to management approval.', t:'需經審核', tw:'需視…而定' },
      { p:'Effective + date', e:'The new lease terms are effective January 1st.', t:'生效日期', tw:'自…起生效' },
    ],
    examTips: [
      'Part 7 常考：租約條款、維修通知、公寓廣告',
      'Part 3 常考：房客與房東的溝通、維修請求',
      '關鍵字：lease / deposit / utilities / tenant / maintenance',
    ],
  },
  {
    id: 'purchasing', icon: '🛒', name: 'Purchasing', nameTw: '採購篇',
    color: '#e05c5c',
    desc: '訂購、議價、供應商、付款條件',
    vocab: [
      { w:'invoice',       m:'發票、帳單',    e:'Please send the invoice to our accounting department.' },
      { w:'purchase order',m:'採購訂單',      e:'A purchase order must be approved before placing the order.' },
      { w:'vendor',        m:'供應商',        e:'We are comparing quotes from three different vendors.' },
      { w:'bulk discount', m:'批量折扣',      e:'A bulk discount is available for orders over 500 units.' },
      { w:'backorder',     m:'延期交貨訂單',  e:'The item is on backorder and will ship in two weeks.' },
      { w:'quote',         m:'報價',          e:'Could you send us a quote for 200 units?' },
      { w:'warranty',      m:'保固',          e:'The product comes with a one-year warranty.' },
      { w:'defective',     m:'有缺陷的',      e:'We received a shipment of defective parts.' },
      { w:'procurement',   m:'採購（正式）',   e:'Our procurement team handles all supplier contracts.' },
      { w:'net 30',        m:'30天付款條件',  e:'Payment terms are net 30 from the invoice date.' },
    ],
    patterns: [
      { p:'We would like to place an order for + N', e:'We would like to place an order for 300 units.', t:'下訂單', tw:'我們想訂購…' },
      { p:'Could you provide a quote for + N?', e:'Could you provide a quote for bulk printing?', t:'詢價', tw:'能否提供…的報價？' },
      { p:'The shipment is scheduled for + date', e:'The shipment is scheduled for delivery on Friday.', t:'出貨說明', tw:'貨物預計於…出貨' },
    ],
    examTips: [
      'Part 7 常考：採購 email、發票、訂單確認',
      'Part 5 常考：採購相關詞彙、介系詞搭配',
      '關鍵字：invoice / purchase order / vendor / backorder / net 30',
    ],
  },
  {
    id: 'personnel', icon: '👥', name: 'Personnel', nameTw: '人事篇',
    color: '#5b8fd4',
    desc: '招聘、面試、升遷、績效評估',
    vocab: [
      { w:'recruitment',   m:'招聘',          e:'The recruitment process takes about four weeks.' },
      { w:'applicant',     m:'求職者、申請人', e:'We received over 200 applicants for the position.' },
      { w:'resume/CV',     m:'履歷',          e:'Please submit your resume and cover letter.' },
      { w:'probation',     m:'試用期',        e:'New employees undergo a 90-day probation period.' },
      { w:'performance review', m:'績效評估', e:'Annual performance reviews are held in December.' },
      { w:'promotion',     m:'晉升',          e:'She received a promotion to Senior Manager.' },
      { w:'severance',     m:'資遣費',        e:'Laid-off employees will receive severance packages.' },
      { w:'payroll',       m:'薪資發放',      e:'The payroll department handles salary processing.' },
      { w:'incentive',     m:'獎勵、激勵',    e:'Sales staff receive a quarterly incentive bonus.' },
      { w:'onboarding',    m:'新人培訓流程',  e:'Our onboarding program lasts two weeks.' },
    ],
    patterns: [
      { p:'We are looking for candidates with + N', e:'We are looking for candidates with five years of experience.', t:'徵才條件', tw:'我們尋找具備…的人才' },
      { p:'The position requires + N/V-ing', e:'The position requires fluency in English and Mandarin.', t:'職位要求', tw:'此職位需要…' },
      { p:'We are pleased to offer you + N', e:'We are pleased to offer you the position of Marketing Manager.', t:'錄取通知', tw:'我們很高興提供您…職位' },
    ],
    examTips: [
      'Part 7 常考：職缺廣告、錄取通知、績效評估表',
      'Part 3 常考：面試、升遷、離職對話',
      '關鍵字：recruitment / probation / performance review / onboarding',
    ],
  },
  {
    id: 'offices', icon: '🏢', name: 'Offices', nameTw: '辦公室篇',
    color: '#e8b86d',
    desc: '辦公設備、會議、行政、文件處理',
    vocab: [
      { w:'agenda',        m:'議程',          e:'Please review the agenda before the meeting.' },
      { w:'minutes',       m:'會議記錄',      e:'Sarah will take the minutes during the meeting.' },
      { w:'memo',          m:'備忘錄',        e:'A memo was sent to all staff about the policy change.' },
      { w:'deadline',      m:'截止日期',      e:'The report deadline is this Friday at 5 PM.' },
      { w:'cc',            m:'副本（電郵）',  e:'Please cc the finance department on this email.' },
      { w:'conference call',m:'電話會議',     e:'We will have a conference call with the Tokyo office.' },
      { w:'workload',      m:'工作量',        e:'The new hire will help reduce our workload.' },
      { w:'cubicle',       m:'隔間辦公桌',   e:'Each employee has their own cubicle.' },
      { w:'copier',        m:'影印機',        e:'The copier on the third floor is out of order.' },
      { w:'delegate',      m:'委派工作',      e:'The manager delegated the task to her assistant.' },
    ],
    patterns: [
      { p:'The meeting is scheduled for + 時間/地點', e:'The meeting is scheduled for 2 PM in the conference room.', t:'會議安排', tw:'會議安排於…' },
      { p:'Please ensure that + S+V', e:'Please ensure that all reports are submitted by Friday.', t:'確認事項', tw:'請確保…' },
      { p:'I am writing to + V', e:'I am writing to inform you of a schedule change.', t:'電郵開頭', tw:'我寫信是為了…' },
    ],
    examTips: [
      'Part 3 常考：會議安排、工作分配、設備故障',
      'Part 6/7 常考：備忘錄、內部公告、電子郵件',
      '關鍵字：agenda / minutes / deadline / cc / delegate',
    ],
  },
  {
    id: 'health', icon: '🏥', name: 'Health', nameTw: '健康篇',
    color: '#4caf82',
    desc: '醫療保險、預約、職場健康',
    vocab: [
      { w:'prescription',  m:'處方箋',        e:'You need a prescription for this medication.' },
      { w:'insurance',     m:'保險',          e:'Our company provides full health insurance coverage.' },
      { w:'coverage',      m:'保險範圍、涵蓋', e:'Does your insurance coverage include dental?' },
      { w:'deductible',    m:'自付額（保險）', e:'The annual deductible is $500.' },
      { w:'specialist',    m:'專科醫師',      e:'Your doctor referred you to a specialist.' },
      { w:'wellness',      m:'健康促進',      e:'The company offers a wellness program for employees.' },
      { w:'pharmacy',      m:'藥局',          e:'The prescription can be filled at any pharmacy.' },
      { w:'symptoms',      m:'症狀',          e:'Please describe your symptoms to the doctor.' },
      { w:'checkup',       m:'健康檢查',      e:'Annual checkups are covered by the insurance plan.' },
      { w:'ergonomic',     m:'符合人體工學的', e:'We provide ergonomic chairs for all staff.' },
    ],
    patterns: [
      { p:'I\'d like to make an appointment with + 醫師', e:'I\'d like to make an appointment with Dr. Lee.', t:'預約看診', tw:'我想預約…醫師' },
      { p:'Your insurance covers + N', e:'Your insurance covers up to $200 for eyewear.', t:'保險說明', tw:'你的保險涵蓋…' },
      { p:'Please contact + 部門 + regarding + N', e:'Please contact HR regarding your insurance benefits.', t:'聯絡指引', tw:'請聯絡…關於…' },
    ],
    examTips: [
      'Part 7 常考：保險說明、醫療公告、健康福利',
      'Part 3 常考：請假、看診對話',
      '關鍵字：insurance / coverage / deductible / prescription / wellness',
    ],
  },
  {
    id: 'general_biz', icon: '💼', name: 'General Business', nameTw: '一般商務篇',
    color: '#5b8fd4',
    desc: '商務往來、合作、策略、簡報',
    vocab: [
      { w:'proposal',      m:'提案、企劃書',  e:'We submitted a proposal to the client last week.' },
      { w:'objective',     m:'目標',          e:'The main objective is to increase market share by 10%.' },
      { w:'strategy',      m:'策略',          e:'The team developed a new marketing strategy.' },
      { w:'stakeholder',   m:'利害關係人',    e:'All stakeholders were invited to the presentation.' },
      { w:'revenue',       m:'營收',          e:'Revenue increased by 15% in the third quarter.' },
      { w:'contract',      m:'合約',          e:'Both parties signed the contract yesterday.' },
      { w:'benchmark',     m:'基準、標竿',    e:'We use industry benchmarks to evaluate performance.' },
      { w:'fiscal year',   m:'財政年度',      e:'Our fiscal year ends on March 31st.' },
      { w:'collaborate',   m:'合作',          e:'We will collaborate with a local firm on this project.' },
      { w:'initiative',    m:'主動、新計畫',  e:'The company launched a new sustainability initiative.' },
    ],
    patterns: [
      { p:'We are pleased to announce + N/that', e:'We are pleased to announce the launch of our new product.', t:'公告喜訊', tw:'我們很高興宣布…' },
      { p:'As per + N', e:'As per our agreement, payment is due within 30 days.', t:'根據…', tw:'根據我們的…' },
      { p:'We look forward to + V-ing', e:'We look forward to working with your team.', t:'期待合作', tw:'我們期待…' },
    ],
    examTips: [
      'Part 7 常考：商務提案、合約條款、業績報告',
      'Part 5 常考：商務詞彙的詞性和搭配',
      '關鍵字：proposal / revenue / stakeholder / fiscal year / initiative',
    ],
  },
  {
    id: 'manufacturing', icon: '🏭', name: 'Manufacturing', nameTw: '製造業篇',
    color: '#9b7fe8',
    desc: '生產流程、品管、出貨、工廠作業',
    vocab: [
      { w:'assembly line',  m:'生產線',        e:'The assembly line operates 24 hours a day.' },
      { w:'defective',      m:'有缺陷的',      e:'Defective products are removed from the line.' },
      { w:'quality control',m:'品質管制',      e:'Our quality control team inspects every batch.' },
      { w:'output',         m:'產量',          e:'We aim to increase output by 20% this quarter.' },
      { w:'raw material',   m:'原物料',        e:'Rising costs of raw materials affect our margins.' },
      { w:'shipment',       m:'貨運批次',      e:'The shipment arrived two days ahead of schedule.' },
      { w:'inventory',      m:'庫存',          e:'We need to conduct a full inventory count.' },
      { w:'compliance',     m:'法規遵守',      e:'The factory must maintain compliance with safety regulations.' },
      { w:'prototype',      m:'原型、樣品',    e:'Engineers are testing the new prototype.' },
      { w:'throughput',     m:'生產量、吞吐量', e:'We improved throughput by optimizing the workflow.' },
    ],
    patterns: [
      { p:'The production of + N + has been + adj', e:'The production of the new model has been delayed.', t:'生產狀況說明', tw:'…的生產已…' },
      { p:'In order to + V', e:'In order to meet demand, we increased production hours.', t:'目的說明', tw:'為了…' },
      { p:'All products must + V', e:'All products must pass a safety inspection before shipping.', t:'規定要求', tw:'所有產品必須…' },
    ],
    examTips: [
      'Part 4 常考：工廠公告、安全說明、生產進度',
      'Part 7 常考：品管報告、出貨通知、製程說明',
      '關鍵字：assembly line / quality control / defective / inventory / compliance',
    ],
  },
  {
    id: 'corporate', icon: '📈', name: 'Corporate Development', nameTw: '企業發展篇',
    color: '#e8b86d',
    desc: '合併收購、企業策略、組織變革',
    vocab: [
      { w:'merger',        m:'合併',          e:'The merger was approved by shareholders last month.' },
      { w:'acquisition',   m:'收購',          e:'The company announced the acquisition of a startup.' },
      { w:'restructuring', m:'重組',          e:'The restructuring plan will reduce costs significantly.' },
      { w:'subsidiary',    m:'子公司',        e:'They opened a subsidiary in Singapore.' },
      { w:'shareholder',   m:'股東',          e:'Shareholders will vote on the merger next week.' },
      { w:'board of directors', m:'董事會',   e:'The board of directors approved the new strategy.' },
      { w:'expansion',     m:'擴張',          e:'The company\'s expansion into Asia has been successful.' },
      { w:'downsizing',    m:'裁員、縮編',    e:'Downsizing affected 200 employees across three departments.' },
      { w:'headquarters',  m:'總部',          e:'The headquarters will relocate to New York.' },
      { w:'stock',         m:'股票',          e:'The company\'s stock rose 5% after the announcement.' },
    ],
    patterns: [
      { p:'Following the + N', e:'Following the merger, all employees will be transferred.', t:'合併/收購後', tw:'在…之後' },
      { p:'The company plans to + V', e:'The company plans to expand operations to Europe.', t:'企業計畫', tw:'公司計畫…' },
      { p:'Effective immediately, + S+V', e:'Effective immediately, all travel must be pre-approved.', t:'立即生效的公告', tw:'即日起…' },
    ],
    examTips: [
      'Part 4 常考：公司公告、組織變革通知',
      'Part 7 常考：股東信、年報摘要、合併說明',
      '關鍵字：merger / acquisition / restructuring / subsidiary / shareholder',
    ],
  },
  {
    id: 'technical', icon: '💻', name: 'Technical Areas', nameTw: '技術層面篇',
    color: '#5b8fd4',
    desc: 'IT、工程、技術支援、系統操作',
    vocab: [
      { w:'software',      m:'軟體',          e:'The new software update will be released next week.' },
      { w:'troubleshoot',  m:'排除故障',      e:'Our IT team will troubleshoot the network issue.' },
      { w:'install',       m:'安裝',          e:'Please install the latest version of the application.' },
      { w:'upgrade',       m:'升級',          e:'All computers will be upgraded to the new OS.' },
      { w:'bandwidth',     m:'頻寬',          e:'We need more bandwidth to support remote work.' },
      { w:'firewall',      m:'防火牆',        e:'The firewall blocked unauthorized access.' },
      { w:'backup',        m:'備份',          e:'Data backup is performed automatically every night.' },
      { w:'database',      m:'資料庫',        e:'The database stores all customer records.' },
      { w:'server',        m:'伺服器',        e:'The server went down for scheduled maintenance.' },
      { w:'glitch',        m:'小故障、異常',  e:'There was a minor glitch in the payment system.' },
    ],
    patterns: [
      { p:'The system will be + adj + for + 時間', e:'The system will be unavailable for two hours.', t:'系統維護說明', tw:'系統將…' },
      { p:'If you experience + N, please + V', e:'If you experience any issues, please contact IT support.', t:'問題處理指引', tw:'如果你遇到…，請…' },
      { p:'We apologize for any + N + caused by + N', e:'We apologize for any inconvenience caused by the outage.', t:'道歉說明', tw:'我們為…造成的…致歉' },
    ],
    examTips: [
      'Part 4 常考：系統維護公告、IT 變更通知',
      'Part 7 常考：技術手冊摘要、IT 支援 email',
      '關鍵字：troubleshoot / upgrade / backup / server / glitch',
    ],
  },
  {
    id: 'financing', icon: '💰', name: 'Financing', nameTw: '財務金融篇',
    color: '#4caf82',
    desc: '財報、預算、投資、貸款、會計',
    vocab: [
      { w:'budget',        m:'預算',          e:'The annual budget was approved by the board.' },
      { w:'expenditure',   m:'支出、費用',    e:'We need to reduce our monthly expenditures.' },
      { w:'profit margin', m:'利潤率',        e:'Our profit margin improved by 3% this quarter.' },
      { w:'cash flow',     m:'現金流',        e:'Maintaining positive cash flow is critical for small businesses.' },
      { w:'audit',         m:'審計、查帳',    e:'The external audit found no significant issues.' },
      { w:'equity',        m:'股東權益',      e:'They raised capital through equity financing.' },
      { w:'liability',     m:'負債',          e:'The company\'s liabilities exceed its assets.' },
      { w:'depreciation',  m:'折舊',          e:'Equipment depreciation must be recorded annually.' },
      { w:'balance sheet', m:'資產負債表',    e:'The balance sheet shows total assets of $5 million.' },
      { w:'dividend',      m:'股息',          e:'Shareholders will receive a dividend of $2 per share.' },
    ],
    patterns: [
      { p:'According to the + 文件', e:'According to the quarterly report, revenue increased by 12%.', t:'引用數據', tw:'根據…' },
      { p:'The budget for + N + is + $', e:'The budget for marketing this year is $500,000.', t:'預算說明', tw:'…的預算為…' },
      { p:'We expect + N/that + S+V', e:'We expect profits to exceed targets this quarter.', t:'財務預測', tw:'我們預期…' },
    ],
    examTips: [
      'Part 7 常考：財報、預算報告、投資說明',
      'Part 5 常考：財務詞彙的詞性（noun/adj/verb）',
      '關鍵字：budget / cash flow / audit / profit margin / balance sheet',
      'Ch16 重點：Part2 Q17/Q24, Part3 Q68-70, Part4 Q98-100, Part5 Q112/Q120, Part7 Q168-171',
    ],
  },
];

// ── 學習目標資料 ──
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

  const totalTopics   = TOPICS_DATA.length;
  const reviewedCount = TOPICS_DATA.filter(t =>
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
  grid.innerHTML = TOPICS_DATA.map(t => {
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
  const t = TOPICS_DATA.find(d => d.id === id);
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
        <button class="td-tab ${currentTopicTab==='vocab'?'active':''}" onclick="switchTopicTab('vocab')">📚 核心單字 (${t.vocab.length})</button>
        <button class="td-tab ${currentTopicTab==='patterns'?'active':''}" onclick="switchTopicTab('patterns')">💬 常見句型</button>
        <button class="td-tab ${currentTopicTab==='practice'?'active':''}" onclick="switchTopicTab('practice')">🧩 練習題</button>
        <button class="td-tab ${currentTopicTab==='exam'?'active':''}" onclick="switchTopicTab('exam')">🎯 考試重點</button>
      </div>
    </div>

    <div id="topicTabContent"></div>`;

  renderTopicTabContent(t, done);
}

function switchTopicTab(tab) {
  currentTopicTab = tab;
  const t    = TOPICS_DATA.find(d => d.id === currentTopicId);
  const prog = topicGoals.topicProgress?.[currentTopicId] || {};
  const done = prog.vocabDone || [];
  // Update tab buttons
  document.querySelectorAll('.td-tab').forEach(b => b.classList.toggle('active', b.textContent.includes(
    tab === 'vocab' ? '核心單字' : tab === 'patterns' ? '句型' : tab === 'practice' ? '練習題' : '考試'
  )));
  renderTopicTabContent(t, done);
}

function renderTopicTabContent(t, done) {
  const content = document.getElementById('topicTabContent');
  if (!content || !t) return;

  if (currentTopicTab === 'vocab') {
    content.innerHTML = `
      <div class="tv-list">
        ${t.vocab.map((v, i) => {
          const isDone = done.includes(i);
          return `
            <div class="tv-item ${isDone ? 'learned' : ''}">
              <div class="tv-check">
                <input type="checkbox" ${isDone ? 'checked' : ''}
                  onchange="toggleVocabDone('${t.id}', ${i}, this.checked)">
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
  const content = document.getElementById('topicTabContent');
  if (!content) return;
  const qs = TOPIC_PRACTICE[t.id] || [];
  if (!qs.length) {
    content.innerHTML = '<div class="empty-state" style="padding:40px"><div class="empty-icon">🚧</div>此主題練習題即將推出</div>';
    return;
  }
  if (!topicPracticeState[t.id]) topicPracticeState[t.id] = { answers:{}, revealed:new Set() };
  const state = topicPracticeState[t.id];
  const done  = Object.keys(state.revealed).length || state.revealed.size || 0;
  content.innerHTML = `
    <div class="tpq-header">
      <span class="tpq-count">${qs.length} 題 · 已完成 ${done}</span>
      <button class="btn btn-ghost btn-sm" onclick="resetTopicPractice('${t.id}')">↺ 重置</button>
    </div>
    <div class="tpq-list">
      ${qs.map((q,qi) => renderQuestion(q, qi, t.id, state)).join('')}
    </div>`;
}

function renderQuestion(q, qi, topicId, state) {
  const revealed = state.revealed.has(qi);
  const chosen   = state.answers[qi];
  const speakBtn = q.speak ? `<button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${esc(q.q)}">🔊</button>` : '';
  const choicesHTML = q.choices.map((c,ci) => {
    let cls = 'tpq-choice';
    if (revealed) {
      if (ci === q.ans) cls += ' correct';
      else if (ci === chosen && ci !== q.ans) cls += ' wrong';
      else cls += ' locked';
    } else if (ci === chosen) cls += ' selected';
    return `<div class="${cls}" onclick="choosePracticeAnswer('${topicId}',${qi},${ci})">${String.fromCharCode(65+ci)}. ${esc(c)}</div>`;
  }).join('');
  const explainHTML = revealed
    ? `<div class="tpq-explain">💡 ${esc(q.explain)}</div>`
    : `<button class="btn btn-ghost btn-sm tpq-reveal-btn" onclick="revealAnswer('${topicId}',${qi})" ${chosen===undefined?'disabled':''}>查看解析</button>`;
  return `
    <div class="tpq-item" id="tpq-${topicId}-${qi}">
      <div class="tpq-meta"><span class="tpq-part-tag">${q.part}</span><span class="tpq-type-tag">${q.type}</span></div>
      <div class="tpq-q">${esc(q.q).replace(/\n/g,'<br>')} ${speakBtn}</div>
      <div class="tpq-choices">${choicesHTML}</div>
      ${explainHTML}
    </div>`;
}

function choosePracticeAnswer(topicId, qi, ci) {
  if (!topicPracticeState[topicId]) topicPracticeState[topicId] = { answers:{}, revealed:new Set() };
  const state = topicPracticeState[topicId];
  if (state.revealed.has(qi)) return;
  state.answers[qi] = ci;
  const item = document.getElementById(`tpq-${topicId}-${qi}`);
  if (!item) return;
  const q = (TOPIC_PRACTICE[topicId]||[])[qi];
  if (!q) return;
  item.querySelector('.tpq-choices').innerHTML = q.choices.map((c,idx) => {
    const cls = 'tpq-choice' + (idx===ci ? ' selected' : '');
    return `<div class="${cls}" onclick="choosePracticeAnswer('${topicId}',${qi},${idx})">${String.fromCharCode(65+idx)}. ${esc(c)}</div>`;
  }).join('');
  const btn = item.querySelector('.tpq-reveal-btn');
  if (btn) btn.disabled = false;
}

function revealAnswer(topicId, qi) {
  if (!topicPracticeState[topicId]) return;
  topicPracticeState[topicId].revealed.add(qi);
  const q     = (TOPIC_PRACTICE[topicId]||[])[qi];
  const state = topicPracticeState[topicId];
  const chosen = state.answers[qi];
  const item  = document.getElementById(`tpq-${topicId}-${qi}`);
  if (!item || !q) return;
  item.querySelector('.tpq-choices').innerHTML = q.choices.map((c,idx) => {
    let cls = 'tpq-choice locked';
    if (idx===q.ans) cls += ' correct';
    else if (idx===chosen) cls += ' wrong';
    return `<div class="${cls}">${String.fromCharCode(65+idx)}. ${esc(c)}</div>`;
  }).join('');
  const btn = item.querySelector('.tpq-reveal-btn');
  if (btn) {
    const div = document.createElement('div');
    div.className = 'tpq-explain';
    div.textContent = '💡 ' + q.explain;
    btn.replaceWith(div);
  }
}

function resetTopicPractice(topicId) {
  topicPracticeState[topicId] = { answers:{}, revealed:new Set() };
  const t = TOPICS_DATA.find(d => d.id === topicId);
  renderTopicPractice(t);
}
