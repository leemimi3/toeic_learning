// roots-data.js — 重新整理後的字根字首資料
// 分類對照 PDF：
//   A = 否定字首   B = 時間順序字首  C = 數量程度字首
//   D = 方位空間字首 E = 商業溝通字根  F = 感官移動字根
//   G = 製作力量字根 H = 生命自然字根  I = 字尾 Suffixes

window.ROOTS = [

// ═══════════════════════════════
//  A. 否定字首 Negation Prefixes
// ═══════════════════════════════
{id:'un',name:'un-',meaning:'不、相反',origin:'古英文',category:'A',words:[
  {w:'unavailable',   hl:'un', meaning:'無法取得的'},
  {w:'unauthorized',  hl:'un', meaning:'未經授權的'},
  {w:'unexpected',    hl:'un', meaning:'意外的'},
  {w:'unnecessary',   hl:'un', meaning:'不必要的'},
  {w:'unfamiliar',    hl:'un', meaning:'不熟悉的'},
  {w:'unresolved',    hl:'un', meaning:'未解決的'},
]},
{id:'in_neg',name:'in-/im-/ir-/il-',meaning:'不、非',origin:'拉丁文 in',category:'A',words:[
  {w:'inaccurate',    hl:'in',  meaning:'不精確的'},
  {w:'insufficient',  hl:'in',  meaning:'不足的'},
  {w:'improper',      hl:'im',  meaning:'不恰當的'},
  {w:'irrelevant',    hl:'ir',  meaning:'不相關的'},
  {w:'illegal',       hl:'il',  meaning:'不合法的'},
  {w:'inefficient',   hl:'in',  meaning:'無效率的'},
  {w:'implement',     hl:'im',  meaning:'實施（向內執行）'},
]},
{id:'dis',name:'dis-',meaning:'分開、否定、相反',origin:'拉丁文 dis',category:'A',words:[
  {w:'discontinue',   hl:'dis', meaning:'中斷'},
  {w:'discount',      hl:'dis', meaning:'折扣、扣除'},
  {w:'dismiss',       hl:'dis', meaning:'解雇、送走'},
  {w:'distribute',    hl:'dis', meaning:'分配'},
  {w:'disclose',      hl:'dis', meaning:'揭露'},
  {w:'dispute',       hl:'dis', meaning:'爭議'},
]},
{id:'mis',name:'mis-',meaning:'錯誤、不當',origin:'古英文 mis',category:'A',words:[
  {w:'mislead',       hl:'mis', meaning:'誤導'},
  {w:'miscalculate',  hl:'mis', meaning:'誤算'},
  {w:'misunderstand', hl:'mis', meaning:'誤解'},
  {w:'misplace',      hl:'mis', meaning:'放錯位置'},
  {w:'miscommunication',hl:'mis',meaning:'溝通不良'},
]},
{id:'de',name:'de-',meaning:'除去、向下、反轉',origin:'拉丁文 de',category:'A',words:[
  {w:'defrost',       hl:'de',  meaning:'除霜'},
  {w:'devalue',       hl:'de',  meaning:'貶值'},
  {w:'decrease',      hl:'de',  meaning:'減少'},
  {w:'delegate',      hl:'de',  meaning:'授權、委派'},
  {w:'decline',       hl:'de',  meaning:'拒絕、下降'},
  {w:'deduct',        hl:'de',  meaning:'扣除'},
]},
{id:'non',name:'non-',meaning:'非、不',origin:'拉丁文 non',category:'A',words:[
  {w:'nonprofit',     hl:'non', meaning:'非營利的'},
  {w:'nonrefundable', hl:'non', meaning:'不可退款的'},
  {w:'noncompliance', hl:'non', meaning:'不遵守'},
  {w:'nondisclosure', hl:'non', meaning:'保密的'},
  {w:'nonsmoking',    hl:'non', meaning:'禁菸的'},
]},
{id:'anti',name:'anti-/counter-',meaning:'反對、對抗、反向',origin:'希臘文 anti',category:'A',words:[
  {w:'antivirus',     hl:'anti',   meaning:'防毒的'},
  {w:'antifreeze',    hl:'anti',   meaning:'抗凍劑'},
  {w:'anticipate',    hl:'anti',   meaning:'預期、事先抓取'},
  {w:'counteroffer',  hl:'counter',meaning:'還價'},
  {w:'counterpart',   hl:'counter',meaning:'對應的人事物'},
  {w:'counteract',    hl:'counter',meaning:'抵消'},
]},

// ═══════════════════════════════
//  B. 時間順序字首 Time & Order
// ═══════════════════════════════
{id:'pre',name:'pre-',meaning:'前、事先',origin:'拉丁文 prae',category:'B',words:[
  {w:'precaution',    hl:'pre', meaning:'預防措施'},
  {w:'preview',       hl:'pre', meaning:'預覽'},
  {w:'predict',       hl:'pre', meaning:'預測'},
  {w:'preliminary',   hl:'pre', meaning:'初步的'},
  {w:'prerequisite',  hl:'pre', meaning:'先決條件'},
  {w:'prevent',       hl:'pre', meaning:'預防'},
]},
{id:'post',name:'post-',meaning:'後、之後',origin:'拉丁文 post',category:'B',words:[
  {w:'postpone',      hl:'post', meaning:'延期'},
  {w:'postscript',    hl:'post', meaning:'附筆（P.S.）'},
  {w:'postdate',      hl:'post', meaning:'填寫未來日期'},
  {w:'postgraduate',  hl:'post', meaning:'研究所的'},
]},
{id:'fore',name:'fore-',meaning:'前、預先',origin:'古英文 fore',category:'B',words:[
  {w:'forecast',      hl:'fore', meaning:'預測（天氣/趨勢）'},
  {w:'foresee',       hl:'fore', meaning:'預見'},
  {w:'foreword',      hl:'fore', meaning:'前言'},
]},
{id:'re',name:'re-',meaning:'再次、返回',origin:'拉丁文 re',category:'B',words:[
  {w:'refund',        hl:'re', meaning:'退款'},
  {w:'relocate',      hl:'re', meaning:'搬遷'},
  {w:'reimburse',     hl:'re', meaning:'報銷'},
  {w:'review',        hl:'re', meaning:'複習、審查'},
  {w:'reschedule',    hl:'re', meaning:'重新安排'},
  {w:'renewal',       hl:'re', meaning:'更新、續約'},
]},

// ═══════════════════════════════
//  C. 數量程度字首 Amount & Degree
// ═══════════════════════════════
{id:'over',name:'over-',meaning:'超過、過度',origin:'古英文 ofer',category:'C',words:[
  {w:'overtime',      hl:'over', meaning:'加班'},
  {w:'overestimate',  hl:'over', meaning:'高估'},
  {w:'overlook',      hl:'over', meaning:'忽略、俯瞰'},
  {w:'overdue',       hl:'over', meaning:'逾期的'},
  {w:'overview',      hl:'over', meaning:'概覽'},
  {w:'overwhelm',     hl:'over', meaning:'壓倒'},
]},
{id:'under',name:'under-',meaning:'不足、在下方',origin:'古英文 under',category:'C',words:[
  {w:'understaffed',  hl:'under', meaning:'人手不足'},
  {w:'undergo',       hl:'under', meaning:'經歷'},
  {w:'undermine',     hl:'under', meaning:'削弱'},
  {w:'underestimate', hl:'under', meaning:'低估'},
  {w:'underscore',    hl:'under', meaning:'強調'},
]},
{id:'semi_bi',name:'semi-/bi-',meaning:'半、二',origin:'拉丁文',category:'C',words:[
  {w:'semiannual',    hl:'semi', meaning:'半年一度的'},
  {w:'semifinal',     hl:'semi', meaning:'準決賽'},
  {w:'biweekly',      hl:'bi',  meaning:'雙週一次/每週兩次'},
  {w:'bilateral',     hl:'bi',  meaning:'雙邊的'},
  {w:'bilingual',     hl:'bi',  meaning:'雙語的'},
]},
{id:'uni_multi',name:'uni-/multi-',meaning:'一/多',origin:'拉丁文',category:'C',words:[
  {w:'uniform',       hl:'uni',   meaning:'制服、統一'},
  {w:'unique',        hl:'uni',   meaning:'獨特的'},
  {w:'unanimous',     hl:'uni',   meaning:'一致同意的'},
  {w:'multinational', hl:'multi', meaning:'跨國的'},
  {w:'multitask',     hl:'multi', meaning:'多工處理'},
]},
{id:'micro_macro',name:'micro-/macro-',meaning:'微小/宏大',origin:'希臘文',category:'C',words:[
  {w:'microprocessor',hl:'micro', meaning:'微處理器'},
  {w:'micromanage',   hl:'micro', meaning:'過度細節管理'},
  {w:'macroeconomics',hl:'macro', meaning:'總體經濟學'},
]},
{id:'hyper_hypo',name:'hyper-/hypo-',meaning:'過度/不足',origin:'希臘文',category:'C',words:[
  {w:'hypertension',  hl:'hyper', meaning:'高血壓（壓力過高）'},
  {w:'hyperlink',     hl:'hyper', meaning:'超連結'},
  {w:'hypothesis',    hl:'hypo',  meaning:'假設（提出低層概念）'},
]},
{id:'mono_poly',name:'mono-/poly-',meaning:'單一/多重',origin:'希臘文',category:'C',words:[
  {w:'monopoly',      hl:'mono', meaning:'壟斷（只有一個賣家）'},
  {w:'monolingual',   hl:'mono', meaning:'單語的'},
  {w:'polygraph',     hl:'poly', meaning:'測謊器'},
]},

// ═══════════════════════════════
//  D. 方位空間字首 Space & Direction
// ═══════════════════════════════
{id:'sub',name:'sub-',meaning:'在下、次要',origin:'拉丁文 sub',category:'D',words:[
  {w:'subsidiary',    hl:'sub', meaning:'子公司'},
  {w:'subway',        hl:'sub', meaning:'地鐵'},
  {w:'submit',        hl:'sub', meaning:'提交'},
  {w:'subscribe',     hl:'sub', meaning:'訂閱'},
  {w:'substantial',   hl:'sub', meaning:'大量的'},
]},
{id:'super_sur',name:'super-/sur-',meaning:'在上、超越',origin:'拉丁文 super',category:'D',words:[
  {w:'supervise',     hl:'super', meaning:'監督'},
  {w:'superior',      hl:'super', meaning:'上級、優於'},
  {w:'surplus',       hl:'sur',   meaning:'盈餘'},
  {w:'surcharge',     hl:'sur',   meaning:'額外費用'},
  {w:'surpass',       hl:'sur',   meaning:'超越'},
]},
{id:'trans',name:'trans-',meaning:'橫跨、轉換',origin:'拉丁文 trans',category:'D',words:[
  {w:'transport',     hl:'trans', meaning:'運輸'},
  {w:'transaction',   hl:'trans', meaning:'交易'},
  {w:'transfer',      hl:'trans', meaning:'轉移'},
  {w:'translate',     hl:'trans', meaning:'翻譯'},
  {w:'transparent',   hl:'trans', meaning:'透明的'},
]},
{id:'inter',name:'inter-',meaning:'在…之間、相互',origin:'拉丁文 inter',category:'D',words:[
  {w:'international', hl:'inter', meaning:'國際的'},
  {w:'interview',     hl:'inter', meaning:'面試'},
  {w:'interact',      hl:'inter', meaning:'互動'},
  {w:'interrupt',     hl:'inter', meaning:'打斷'},
  {w:'internal',      hl:'inter', meaning:'內部的'},
]},
{id:'intra',name:'intra-',meaning:'在…內部',origin:'拉丁文 intra',category:'D',words:[
  {w:'intranet',      hl:'intra', meaning:'內部網路'},
  {w:'intracompany',  hl:'intra', meaning:'公司內部的'},
]},
{id:'ex',name:'ex-',meaning:'向外、前任',origin:'拉丁文 ex',category:'D',words:[
  {w:'export',        hl:'ex', meaning:'出口'},
  {w:'expire',        hl:'ex', meaning:'到期'},
  {w:'exclude',       hl:'ex', meaning:'排除'},
  {w:'execute',       hl:'ex', meaning:'執行'},
  {w:'expedite',      hl:'ex', meaning:'加速處理'},
]},
{id:'pro',name:'pro-',meaning:'向前、支持',origin:'拉丁文 pro',category:'D',words:[
  {w:'promote',       hl:'pro', meaning:'晉升、促銷'},
  {w:'proceed',       hl:'pro', meaning:'繼續進行'},
  {w:'propose',       hl:'pro', meaning:'提議'},
  {w:'proactive',     hl:'pro', meaning:'積極主動的'},
  {w:'proficient',    hl:'pro', meaning:'熟練的'},
]},
{id:'co',name:'co-/com-/con-',meaning:'共同、一起',origin:'拉丁文 cum',category:'D',words:[
  {w:'collaboration', hl:'col', meaning:'合作'},
  {w:'conference',    hl:'con', meaning:'會議'},
  {w:'consolidate',   hl:'con', meaning:'整合'},
  {w:'cooperate',     hl:'co',  meaning:'合作'},
  {w:'comprehensive', hl:'com', meaning:'全面的'},
]},
{id:'tele',name:'tele-',meaning:'遠距離',origin:'希臘文 tele',category:'D',words:[
  {w:'telecommute',   hl:'tele', meaning:'遠距辦公'},
  {w:'telemarketing', hl:'tele', meaning:'電話行銷'},
  {w:'teleconference',hl:'tele', meaning:'視訊會議'},
  {w:'telephone',     hl:'tele', meaning:'電話'},
]},
{id:'ad',name:'ad-/ac-',meaning:'朝向、靠近',origin:'拉丁文 ad',category:'D',words:[
  {w:'adjust',        hl:'ad',  meaning:'調整'},
  {w:'advance',       hl:'ad',  meaning:'前進、提前'},
  {w:'accomplish',    hl:'ac',  meaning:'完成'},
  {w:'acquire',       hl:'ac',  meaning:'獲取、收購'},
  {w:'accommodate',   hl:'ac',  meaning:'容納、住宿'},
]},
{id:'en',name:'en-/em-',meaning:'使成為',origin:'法文 en',category:'D',words:[
  {w:'enlarge',       hl:'en',  meaning:'擴大'},
  {w:'enforce',       hl:'en',  meaning:'執行、強制'},
  {w:'enable',        hl:'en',  meaning:'使能夠'},
  {w:'empower',       hl:'em',  meaning:'授權、賦能'},
]},
{id:'out',name:'out-',meaning:'超出、向外',origin:'古英文 ut',category:'D',words:[
  {w:'outsource',     hl:'out', meaning:'外包'},
  {w:'outperform',    hl:'out', meaning:'超越表現'},
  {w:'outstanding',   hl:'out', meaning:'傑出的'},
  {w:'outcome',       hl:'out', meaning:'結果'},
  {w:'output',        hl:'out', meaning:'產出'},
]},
{id:'ab',name:'ab-',meaning:'偏離、遠離',origin:'拉丁文 ab',category:'D',words:[
  {w:'abnormal',      hl:'ab', meaning:'異常的'},
  {w:'absent',        hl:'ab', meaning:'缺席的'},
  {w:'abstract',      hl:'ab', meaning:'摘要、抽象'},
]},

// ═══════════════════════════════
//  E. 商業溝通字根 Business & Communication
// ═══════════════════════════════
{id:'dict',name:'dict',meaning:'說、宣告',origin:'拉丁文 dicere',category:'E',words:[
  {w:'predict',       hl:'dict', meaning:'預測'},
  {w:'dictate',       hl:'dict', meaning:'口述、命令'},
  {w:'contradict',    hl:'dict', meaning:'矛盾'},
  {w:'verdict',       hl:'dict', meaning:'裁決'},
  {w:'indicate',      hl:'dict', meaning:'指出'},
]},
{id:'voc',name:'voc-/vok-',meaning:'聲音、呼喚',origin:'拉丁文 vocare',category:'E',words:[
  {w:'vocation',      hl:'voc', meaning:'職業（使命呼召）'},
  {w:'revoke',        hl:'vok', meaning:'撤銷'},
  {w:'advocate',      hl:'voc', meaning:'倡導'},
  {w:'evoke',         hl:'vok', meaning:'喚起'},
  {w:'vocabulary',    hl:'voc', meaning:'詞彙'},
]},
{id:'scrib',name:'scrib-/script-',meaning:'寫',origin:'拉丁文 scribere',category:'E',words:[
  {w:'describe',      hl:'scrib', meaning:'描述'},
  {w:'subscribe',     hl:'scrib', meaning:'訂閱'},
  {w:'manuscript',    hl:'script',meaning:'手稿'},
  {w:'transcript',    hl:'script',meaning:'成績單、謄本'},
  {w:'prescribe',     hl:'scrib', meaning:'開藥方'},
]},
{id:'graph',name:'-graph-/-gram-',meaning:'寫、圖',origin:'希臘文 graphe',category:'E',words:[
  {w:'graphic',       hl:'graph', meaning:'圖表的'},
  {w:'autograph',     hl:'graph', meaning:'親筆簽名'},
  {w:'diagram',       hl:'gram',  meaning:'圖解'},
  {w:'telegram',      hl:'gram',  meaning:'電報'},
]},
{id:'log',name:'-log-/-logue-',meaning:'說話、科學',origin:'希臘文 logos',category:'E',words:[
  {w:'apology',       hl:'log', meaning:'道歉'},
  {w:'prologue',      hl:'log', meaning:'序言'},
  {w:'monologue',     hl:'log', meaning:'獨白'},
  {w:'dialogue',      hl:'log', meaning:'對話'},
]},
{id:'nounce',name:'-nounce-/-claim-',meaning:'宣告、呼喊',origin:'拉丁文 nuntiare',category:'E',words:[
  {w:'announce',      hl:'nounce', meaning:'宣布'},
  {w:'pronounce',     hl:'nounce', meaning:'發音'},
  {w:'proclaim',      hl:'claim',  meaning:'聲明'},
  {w:'exclaim',       hl:'claim',  meaning:'驚叫'},
]},

// ═══════════════════════════════
//  F. 感官移動字根 Senses & Movement
// ═══════════════════════════════
{id:'spec',name:'spec-/spect-',meaning:'看、觀察',origin:'拉丁文 specere',category:'F',words:[
  {w:'inspect',       hl:'spect', meaning:'檢查'},
  {w:'prospect',      hl:'spect', meaning:'前景'},
  {w:'aspect',        hl:'spect', meaning:'方面'},
  {w:'expect',        hl:'spect', meaning:'期待'},
  {w:'spectacular',   hl:'spec',  meaning:'壯觀的'},
]},
{id:'vis',name:'vis-/vid-',meaning:'看、視覺',origin:'拉丁文 videre',category:'F',words:[
  {w:'vision',        hl:'vis', meaning:'願景、視野'},
  {w:'revise',        hl:'vis', meaning:'修訂'},
  {w:'supervise',     hl:'vis', meaning:'監督'},
  {w:'evident',       hl:'vid', meaning:'明顯的'},
  {w:'provide',       hl:'vid', meaning:'提供'},
]},
{id:'aud',name:'aud-',meaning:'聽、聲音',origin:'拉丁文 audire',category:'F',words:[
  {w:'audio',         hl:'aud', meaning:'音訊'},
  {w:'audit',         hl:'aud', meaning:'審計、查帳'},
  {w:'auditorium',    hl:'aud', meaning:'禮堂'},
  {w:'audience',      hl:'aud', meaning:'觀眾'},
]},
{id:'sens',name:'sens-/sent-',meaning:'感覺、感受',origin:'拉丁文 sentire',category:'F',words:[
  {w:'sensitive',     hl:'sens', meaning:'敏感的'},
  {w:'consent',       hl:'sent', meaning:'同意'},
  {w:'sentiment',     hl:'sent', meaning:'情感'},
  {w:'sensible',      hl:'sens', meaning:'明智的'},
]},
{id:'ced',name:'ced-/ceed-/cess-',meaning:'走、前進',origin:'拉丁文 cedere',category:'F',words:[
  {w:'proceed',       hl:'ceed', meaning:'繼續進行'},
  {w:'exceed',        hl:'ceed', meaning:'超過'},
  {w:'access',        hl:'cess', meaning:'存取、進入'},
  {w:'process',       hl:'cess', meaning:'程序'},
  {w:'recession',     hl:'cess', meaning:'衰退'},
]},
{id:'port',name:'port-',meaning:'攜帶、運送',origin:'拉丁文 portare',category:'F',words:[
  {w:'transport',     hl:'port', meaning:'運輸'},
  {w:'portable',      hl:'port', meaning:'手提式的'},
  {w:'import',        hl:'port', meaning:'進口'},
  {w:'export',        hl:'port', meaning:'出口'},
  {w:'report',        hl:'port', meaning:'報告'},
]},
{id:'mit',name:'mit-/miss-',meaning:'送、放出',origin:'拉丁文 mittere',category:'F',words:[
  {w:'submit',        hl:'mit',  meaning:'提交'},
  {w:'permit',        hl:'mit',  meaning:'允許'},
  {w:'transmit',      hl:'mit',  meaning:'傳送'},
  {w:'commit',        hl:'mit',  meaning:'承諾'},
  {w:'dismiss',       hl:'miss', meaning:'解雇'},
]},
{id:'tract',name:'tract-',meaning:'拉、吸引',origin:'拉丁文 trahere',category:'F',words:[
  {w:'attract',       hl:'tract', meaning:'吸引'},
  {w:'contract',      hl:'tract', meaning:'合約'},
  {w:'extract',       hl:'tract', meaning:'提取'},
  {w:'distract',      hl:'tract', meaning:'分心'},
  {w:'subtract',      hl:'tract', meaning:'扣除'},
]},
{id:'duc',name:'duc-/duct-',meaning:'引導、帶領',origin:'拉丁文 ducere',category:'F',words:[
  {w:'conduct',       hl:'duct', meaning:'執行、行為'},
  {w:'introduce',     hl:'duc',  meaning:'介紹'},
  {w:'produce',       hl:'duc',  meaning:'生產'},
  {w:'reduce',        hl:'duc',  meaning:'減少'},
  {w:'educate',       hl:'duc',  meaning:'教育'},
]},
{id:'ven',name:'ven-/vent-',meaning:'來',origin:'拉丁文 venire',category:'F',words:[
  {w:'convention',    hl:'vent', meaning:'慣例、大會'},
  {w:'revenue',       hl:'ven',  meaning:'營收（流回來的）'},
  {w:'intervene',     hl:'ven',  meaning:'介入'},
  {w:'prevent',       hl:'vent', meaning:'預防'},
]},
{id:'cur',name:'cur-/curs-',meaning:'跑、流動',origin:'拉丁文 currere',category:'F',words:[
  {w:'currency',      hl:'cur',  meaning:'貨幣（流通的）'},
  {w:'cursor',        hl:'curs', meaning:'游標'},
  {w:'occur',         hl:'cur',  meaning:'發生'},
  {w:'concurrent',    hl:'cur',  meaning:'同時的'},
]},
{id:'grad',name:'grad-/gress-',meaning:'走、步伐',origin:'拉丁文 gradus',category:'F',words:[
  {w:'progress',      hl:'gress', meaning:'進步'},
  {w:'graduate',      hl:'grad',  meaning:'畢業'},
  {w:'aggressive',    hl:'gress', meaning:'積極的'},
  {w:'upgrade',       hl:'grad',  meaning:'升級'},
]},
{id:'via',name:'via-/viat-',meaning:'路、道路',origin:'拉丁文 via',category:'F',words:[
  {w:'previous',      hl:'vi',   meaning:'先前的（走過的路）'},
  {w:'deviate',       hl:'via',  meaning:'偏離'},
  {w:'trivial',       hl:'vi',   meaning:'瑣碎的（走岔路）'},
]},

// ═══════════════════════════════
//  G. 製作力量字根 Action & Power
// ═══════════════════════════════
{id:'fac',name:'fac-/fec-/fic-',meaning:'做、製造',origin:'拉丁文 facere',category:'G',words:[
  {w:'factory',       hl:'fact', meaning:'工廠'},
  {w:'efficient',     hl:'fic',  meaning:'有效率的'},
  {w:'manufacture',   hl:'fac',  meaning:'製造'},
  {w:'defect',        hl:'fec',  meaning:'缺陷'},
  {w:'effect',        hl:'fec',  meaning:'效果'},
]},
{id:'struct',name:'struct-',meaning:'建造、構建',origin:'拉丁文 struere',category:'G',words:[
  {w:'instruct',      hl:'struct', meaning:'指示'},
  {w:'infrastructure',hl:'struct', meaning:'基礎建設'},
  {w:'construct',     hl:'struct', meaning:'建造'},
  {w:'restructure',   hl:'struct', meaning:'重組'},
]},
{id:'form',name:'form-',meaning:'形式、形狀',origin:'拉丁文 forma',category:'G',words:[
  {w:'conform',       hl:'form', meaning:'符合'},
  {w:'reform',        hl:'form', meaning:'改革'},
  {w:'perform',       hl:'form', meaning:'執行、表演'},
  {w:'transform',     hl:'form', meaning:'轉變'},
  {w:'inform',        hl:'form', meaning:'通知'},
]},
{id:'pos',name:'pos-/pon-',meaning:'放置',origin:'拉丁文 ponere',category:'G',words:[
  {w:'deposit',       hl:'pos', meaning:'存款'},
  {w:'proposal',      hl:'pos', meaning:'提案'},
  {w:'expose',        hl:'pos', meaning:'暴露'},
  {w:'component',     hl:'pon', meaning:'零件'},
  {w:'postpone',      hl:'pon', meaning:'延期'},
]},
{id:'oper',name:'oper-',meaning:'工作、操作',origin:'拉丁文 opus',category:'G',words:[
  {w:'operate',       hl:'oper', meaning:'操作'},
  {w:'cooperate',     hl:'oper', meaning:'合作'},
]},
{id:'serv',name:'serv-',meaning:'服務、保存',origin:'拉丁文 servire',category:'G',words:[
  {w:'reserve',       hl:'serv', meaning:'預約'},
  {w:'preserve',      hl:'serv', meaning:'保存'},
  {w:'observe',       hl:'serv', meaning:'觀察'},
  {w:'conserve',      hl:'serv', meaning:'節省、保護'},
]},
{id:'cred',name:'cred-',meaning:'相信、信任',origin:'拉丁文 credere',category:'G',words:[
  {w:'credible',      hl:'cred', meaning:'可信的'},
  {w:'credit',        hl:'cred', meaning:'信用'},
  {w:'accredit',      hl:'cred', meaning:'認可'},
  {w:'credential',    hl:'cred', meaning:'資格證明'},
]},
{id:'ten',name:'ten-/tain-',meaning:'握住、保持',origin:'拉丁文 tenere',category:'G',words:[
  {w:'retain',        hl:'tain', meaning:'保留'},
  {w:'maintain',      hl:'tain', meaning:'維持、保養'},
  {w:'obtain',        hl:'tain', meaning:'獲得'},
  {w:'contain',       hl:'tain', meaning:'包含'},
  {w:'attain',        hl:'tain', meaning:'達成'},
]},
{id:'pli',name:'pli-/ply-',meaning:'摺疊、配合',origin:'拉丁文 plicare',category:'G',words:[
  {w:'comply',        hl:'ply',  meaning:'遵守'},
  {w:'supply',        hl:'ply',  meaning:'供應'},
  {w:'imply',         hl:'ply',  meaning:'暗示'},
  {w:'apply',         hl:'ply',  meaning:'申請、應用'},
]},
{id:'rupt',name:'rupt-',meaning:'破裂、打斷',origin:'拉丁文 rumpere',category:'G',words:[
  {w:'interrupt',     hl:'rupt', meaning:'打斷'},
  {w:'disrupt',       hl:'rupt', meaning:'破壞'},
  {w:'bankrupt',      hl:'rupt', meaning:'破產'},
  {w:'corrupt',       hl:'rupt', meaning:'腐敗'},
]},
{id:'vert',name:'vert-/vers-',meaning:'轉、翻轉',origin:'拉丁文 vertere',category:'G',words:[
  {w:'convert',       hl:'vert', meaning:'轉換'},
  {w:'divert',        hl:'vert', meaning:'轉移'},
  {w:'advertise',     hl:'vert', meaning:'廣告'},
  {w:'diverse',       hl:'vers', meaning:'多樣的'},
  {w:'reverse',       hl:'vers', meaning:'反轉'},
]},
{id:'press',name:'press-',meaning:'壓、擠',origin:'拉丁文 premere',category:'G',words:[
  {w:'express',       hl:'press', meaning:'表達'},
  {w:'impress',       hl:'press', meaning:'留下印象'},
  {w:'suppress',      hl:'press', meaning:'壓制'},
  {w:'compress',      hl:'press', meaning:'壓縮'},
]},
{id:'stat',name:'stat-/stan-',meaning:'站立、狀態',origin:'拉丁文 stare',category:'G',words:[
  {w:'statistics',    hl:'stat', meaning:'統計'},
  {w:'standard',      hl:'stan', meaning:'標準'},
  {w:'status',        hl:'stat', meaning:'狀態、地位'},
  {w:'circumstance',  hl:'stan', meaning:'情況'},
]},
{id:'cap',name:'cap-/cept-',meaning:'拿、抓',origin:'拉丁文 capere',category:'G',words:[
  {w:'accept',        hl:'cept', meaning:'接受'},
  {w:'capable',       hl:'cap',  meaning:'有能力的'},
  {w:'capture',       hl:'cap',  meaning:'捕獲'},
  {w:'concept',       hl:'cept', meaning:'概念'},
]},
{id:'man',name:'man-/manu-',meaning:'手',origin:'拉丁文 manus',category:'G',words:[
  {w:'manual',        hl:'man',  meaning:'手冊、手動的'},
  {w:'maintain',      hl:'main', meaning:'維持'},
  {w:'manage',        hl:'man',  meaning:'管理'},
  {w:'manufacture',   hl:'manu', meaning:'製造'},
  {w:'mandate',       hl:'man',  meaning:'命令'},
]},
{id:'jur',name:'jur-/jud-',meaning:'法律、判斷',origin:'拉丁文 jus',category:'G',words:[
  {w:'judge',         hl:'jud',  meaning:'法官、判斷'},
  {w:'jurisdiction',  hl:'jur',  meaning:'管轄權'},
  {w:'adjust',        hl:'jus',  meaning:'調整（使合法）'},
]},

// ═══════════════════════════════
//  H. 生命自然字根 Life & Qualities
// ═══════════════════════════════
{id:'gen',name:'gen-',meaning:'產生、種類',origin:'拉丁文 genus',category:'H',words:[
  {w:'generate',      hl:'gen', meaning:'產生'},
  {w:'genuine',       hl:'gen', meaning:'真實的'},
  {w:'generous',      hl:'gen', meaning:'慷慨的'},
  {w:'generation',    hl:'gen', meaning:'世代'},
]},
{id:'nat',name:'nat-',meaning:'出生、天性',origin:'拉丁文 natus',category:'H',words:[
  {w:'native',        hl:'nat', meaning:'本土的'},
  {w:'innate',        hl:'nat', meaning:'天生的'},
  {w:'multinational', hl:'nat', meaning:'跨國的'},
]},
{id:'viv',name:'viv-/vit-',meaning:'活、生命',origin:'拉丁文 vivere',category:'H',words:[
  {w:'revive',        hl:'viv', meaning:'使復甦'},
  {w:'vital',         hl:'vit', meaning:'至關重要的'},
  {w:'vivid',         hl:'viv', meaning:'生動的'},
]},
{id:'mort',name:'mort-',meaning:'死亡',origin:'拉丁文 mors',category:'H',words:[
  {w:'mortgage',      hl:'mort', meaning:'抵押貸款（死亡擔保）'},
  {w:'mortal',        hl:'mort', meaning:'致命的、凡人'},
]},
{id:'path',name:'path-',meaning:'感情、病苦',origin:'希臘文 pathos',category:'H',words:[
  {w:'empathy',       hl:'path', meaning:'同理心'},
  {w:'sympathy',      hl:'path', meaning:'同情'},
  {w:'apathy',        hl:'path', meaning:'冷漠'},
]},
{id:'bene',name:'bene-',meaning:'好、有益',origin:'拉丁文 bene',category:'H',words:[
  {w:'benefit',       hl:'bene', meaning:'利益'},
  {w:'beneficial',    hl:'bene', meaning:'有益的'},
  {w:'beneficiary',   hl:'bene', meaning:'受益人'},
]},
{id:'mal',name:'mal-',meaning:'壞、不良',origin:'拉丁文 malus',category:'H',words:[
  {w:'malfunction',   hl:'mal', meaning:'故障'},
  {w:'malpractice',   hl:'mal', meaning:'醫療疏失'},
  {w:'malicious',     hl:'mal', meaning:'惡意的'},
]},
{id:'nov',name:'nov-',meaning:'新',origin:'拉丁文 novus',category:'H',words:[
  {w:'novel',         hl:'nov', meaning:'新穎的'},
  {w:'innovate',      hl:'nov', meaning:'創新'},
  {w:'renovate',      hl:'nov', meaning:'翻新'},
  {w:'novelty',       hl:'nov', meaning:'新奇事物'},
]},
{id:'auto',name:'auto-',meaning:'自己、自動',origin:'希臘文 autos',category:'H',words:[
  {w:'automatic',     hl:'auto', meaning:'自動的'},
  {w:'autonomy',      hl:'auto', meaning:'自治'},
  {w:'automate',      hl:'auto', meaning:'使自動化'},
]},
{id:'fin',name:'fin-',meaning:'結束、範圍',origin:'拉丁文 finis',category:'H',words:[
  {w:'finalize',      hl:'fin', meaning:'定案'},
  {w:'finance',       hl:'fin', meaning:'財務'},
  {w:'define',        hl:'fin', meaning:'定義'},
  {w:'infinite',      hl:'fin', meaning:'無限的'},
]},
{id:'ver',name:'ver-',meaning:'真實',origin:'拉丁文 verus',category:'H',words:[
  {w:'verify',        hl:'ver', meaning:'證實'},
  {w:'verdict',       hl:'ver', meaning:'裁決'},
]},
{id:'val',name:'val-',meaning:'價值',origin:'拉丁文 valere',category:'H',words:[
  {w:'valid',         hl:'val', meaning:'有效的'},
  {w:'evaluate',      hl:'val', meaning:'評估'},
  {w:'equivalent',    hl:'val', meaning:'等值的'},
]},
{id:'crit',name:'crit-',meaning:'判斷',origin:'希臘文 krinein',category:'H',words:[
  {w:'critical',      hl:'crit', meaning:'關鍵的、批評的'},
  {w:'criterion',     hl:'crit', meaning:'標準（判斷依據）'},
]},

// ═══════════════════════════════
//  I. 字尾 Suffixes
// ═══════════════════════════════
{id:'tion',name:'-tion/-sion',meaning:'行為、過程（名詞）',origin:'拉丁文 -tio',category:'I',words:[
  {w:'promotion',     hl:'tion', meaning:'晉升、促銷'},
  {w:'transaction',   hl:'tion', meaning:'交易'},
  {w:'permission',    hl:'sion', meaning:'許可'},
  {w:'expansion',     hl:'sion', meaning:'擴展'},
  {w:'discussion',    hl:'sion', meaning:'討論'},
]},
{id:'ment',name:'-ment',meaning:'行為的結果（名詞）',origin:'拉丁文 -mentum',category:'I',words:[
  {w:'management',    hl:'ment', meaning:'管理'},
  {w:'agreement',     hl:'ment', meaning:'協議'},
  {w:'requirement',   hl:'ment', meaning:'要求'},
  {w:'improvement',   hl:'ment', meaning:'改善'},
  {w:'shipment',      hl:'ment', meaning:'貨運'},
]},
{id:'able',name:'-able/-ible',meaning:'能夠、可以（形容詞）',origin:'拉丁文 -abilis',category:'I',words:[
  {w:'available',     hl:'able', meaning:'可用的'},
  {w:'reliable',      hl:'able', meaning:'可靠的'},
  {w:'responsible',   hl:'ible', meaning:'負責任的'},
  {w:'flexible',      hl:'ible', meaning:'彈性的'},
  {w:'sustainable',   hl:'able', meaning:'可持續的'},
]},
{id:'ive',name:'-ive/-ative',meaning:'有…性質的（形容詞）',origin:'拉丁文 -ivus',category:'I',words:[
  {w:'productive',    hl:'ive', meaning:'有生產力的'},
  {w:'effective',     hl:'ive', meaning:'有效的'},
  {w:'competitive',   hl:'ive', meaning:'競爭的'},
  {w:'innovative',    hl:'ive', meaning:'創新的'},
  {w:'executive',     hl:'ive', meaning:'執行主管'},
]},
{id:'ness',name:'-ness',meaning:'狀態、性質（名詞）',origin:'古英文 -nes',category:'I',words:[
  {w:'effectiveness', hl:'ness', meaning:'效果'},
  {w:'awareness',     hl:'ness', meaning:'意識'},
  {w:'willingness',   hl:'ness', meaning:'意願'},
  {w:'business',      hl:'ness', meaning:'業務'},
]},
{id:'ship',name:'-ship',meaning:'關係、身分（名詞）',origin:'古英文 -scipe',category:'I',words:[
  {w:'leadership',    hl:'ship', meaning:'領導力'},
  {w:'ownership',     hl:'ship', meaning:'所有權'},
  {w:'partnership',   hl:'ship', meaning:'夥伴關係'},
  {w:'internship',    hl:'ship', meaning:'實習'},
]},
{id:'er_or',name:'-er/-or',meaning:'做…的人（名詞）',origin:'拉丁文/古英文',category:'I',words:[
  {w:'manager',       hl:'er',  meaning:'經理'},
  {w:'supervisor',    hl:'or',  meaning:'監督者'},
  {w:'contractor',    hl:'or',  meaning:'承包商'},
  {w:'distributor',   hl:'or',  meaning:'經銷商'},
]},
{id:'ly',name:'-ly',meaning:'以…方式（副詞）',origin:'古英文 -lice',category:'I',words:[
  {w:'significantly', hl:'ly', meaning:'顯著地'},
  {w:'approximately', hl:'ly', meaning:'大約'},
  {w:'efficiently',   hl:'ly', meaning:'有效率地'},
  {w:'immediately',   hl:'ly', meaning:'立即'},
  {w:'subsequently',  hl:'ly', meaning:'之後地'},
]},
{id:'ology',name:'-ology/-logy',meaning:'…學（名詞）',origin:'希臘文 logos',category:'I',words:[
  {w:'technology',    hl:'ology', meaning:'科技'},
  {w:'methodology',   hl:'ology', meaning:'方法論'},
  {w:'psychology',    hl:'ology', meaning:'心理學'},
  {w:'terminology',   hl:'ology', meaning:'術語'},
]},

]; // end window.ROOTS
