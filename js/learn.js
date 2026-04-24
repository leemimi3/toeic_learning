// ════════════════════════════════════════
//  learn.js — 學習區：Part 1–7 完整攻略
// ════════════════════════════════════════

const LEARN_DATA = [

// ══════════════════════════════════
//  PART 1
// ══════════════════════════════════
{
  id:'part1', part:'Part 1', title:'照片描述', section:'聽力',
  color:'var(--red)', meta:'6 題｜每題 1 張照片，4 個選項',
  intro:'看一張照片，聽 4 個英文描述，選出最符合照片的一個。題數最少，是聽力中最容易拿分的部分，目標滿分。',
  types:[
    { name:'① 單人照', desc:'一個人正在做某件事',
      key:'主詞（A man/woman）+ 動詞進行式 + 地點',
      example:'A man is typing on a keyboard.\nA woman is carrying a bag down the hallway.\nThe man is talking on the phone.' },
    { name:'② 多人照', desc:'兩人以上，各自或共同做事',
      key:'注意每個人的動作，選描述最多人的選項',
      example:'Several people are sitting around a conference table.\nThe workers are wearing safety helmets.\nTwo women are shaking hands.' },
    { name:'③ 物品/場景照', desc:'沒有人，或人不是主角',
      key:'描述物品的狀態、位置（被動語態）',
      example:'Some chairs are arranged around a table.\nA laptop has been left on the desk.\nThe shelves are stocked with products.' },
    { name:'④ 混合照', desc:'人＋物品都有',
      key:'人的動作 + 物品狀態兩者都要對',
      example:'A man is standing next to a car.\nSomeone is loading boxes onto a truck.' },
  ],
  traps:[
    '照片中沒有的動作（最常見陷阱）',
    '時態錯誤：照片是靜態的，要用 is/are + V-ing',
    '主動/被動混淆：is carrying（主動）vs. is being carried（被動）',
    '位置介系詞：on/in/next to/in front of/behind 要分清楚',
    '部分描述錯誤：整句有一個詞不對就是錯誤選項',
  ],
  keywords:[
    'is/are + V-ing → 正在做（進行式）',
    'is/are + 過去分詞 → 被動，物品狀態',
    'is/are being + 過去分詞 → 正在被…',
    'next to / beside → 旁邊',
    'in front of → 前面｜behind → 後面',
    'in the background → 背景中',
    'facing → 面向',
    'leaning against → 靠著',
    'lined up → 排成一排',
    'piled up → 堆疊',
  ],
  strategy:'① 播音前快速看照片 5 秒：記住人物動作、物品、地點\n② 聽每個選項時立即判斷對/錯\n③ 消去法：只要有一個詞不符就刪掉\n④ 特別小心：看起來像但不完全對的選項\n⑤ 目標：6題全對',
},

// ══════════════════════════════════
//  PART 2
// ══════════════════════════════════
{
  id:'part2', part:'Part 2', title:'應答問題', section:'聽力',
  color:'var(--red)', meta:'25 題｜問一句，選最適合的回應（3 選 1）',
  intro:'聽一個問句或陳述句，從 3 個選項中選出最適合的回應。全程沒有印刷文字，完全靠聽力。第一個字決定一切。',
  types:[
    { name:'① WH 問句（最多）', desc:'What / Who / When / Where / Why / How 開頭',
      key:'疑問詞決定答案方向，這是最重要的一步',
      example:'Q: When will the shipment arrive?\nA: It should be here by Thursday.\n\nQ: Where is the annual report?\nA: Mr. Chen has it on his desk.\n\nQ: Why was the meeting canceled?\nA: The director is out of town.\n\nQ: Who is in charge of the marketing campaign?\nA: I believe it\'s Ms. Johnson.\n\nQ: How did you get to the conference?\nA: I took the subway.' },
    { name:'② Yes/No 問句', desc:'Are/Is/Do/Does/Did/Will/Can/Have 開頭',
      key:'不一定要答 Yes 或 No！間接回應很常見',
      example:'Q: Did you finish the quarterly report?\nA: I\'ll send it to you by five.（間接→還沒）\nA: It\'s on your desk.（間接→已完成）\n\nQ: Can you attend the morning session?\nA: I have a client meeting at that time.（間接→不能）\nA: I wouldn\'t miss it.（間接→能去）\n\nQ: Is the printer working?\nA: It ran out of paper earlier.（間接→沒在運作）' },
    { name:'③ 選擇問句（A or B）', desc:'Would you like A or B? / Should we A or B?',
      key:'選其中一個，或說「都可以」「都不要」「讓我想想」',
      example:'Q: Would you like to meet on Monday or Tuesday?\nA: Either day works for me.（都可以）\nA: Monday would be better.（選一個）\nA: Actually, could we do Wednesday instead?（都不要，提新選項）\n\nQ: Should I email or call the client?\nA: An email would be more appropriate.' },
    { name:'④ 附加問句', desc:'…, isn\'t it? / …, don\'t you? / …, right?',
      key:'確認語氣，答同意或糾正',
      example:'Q: The deadline is Friday, isn\'t it?\nA: Actually, it\'s been moved to next Monday.\nA: That\'s what I heard too.\n\nQ: You\'ve met our new manager, haven\'t you?\nA: Not yet, but I\'m looking forward to it.' },
    { name:'⑤ 陳述句/間接問句（最難）', desc:'句子不是問句形式，但需要回應',
      key:'最難！要理解言下之意，選最合邏輯的回應',
      example:'Q: I\'m not sure where to submit the application.\nA: You can ask the HR department.\nA: There should be a box near the entrance.\n\nQ: The conference room is already booked.\nA: Let\'s use the small meeting room then.\nA: I can reschedule it for later.\n\nQ: I didn\'t receive the agenda for today\'s meeting.\nA: I\'ll forward it to you right away.' },
  ],
  traps:[
    '同音字陷阱：Where → wear / When → win / hour → our / buy → by / right → write',
    '重複字陷阱：題目有 meeting，選項也有 meeting → 通常是陷阱！',
    '關聯字陷阱：問 book（書），選項出現 library（圖書館）→ 陷阱！',
    '太直接的 Yes/No 答案通常不是正確答案',
    '第一個字沒聽清楚就全錯，所以第一秒最關鍵',
  ],
  keywords:[
    'What time / When → 時間答案（at + 時間）',
    'Where → 地點答案（at/in/on + 地點）',
    'Who → 人名 / 部門 / 職位',
    'Why → Because... / To + 動詞（目的）',
    'How → 方法、方式、交通工具',
    'How long → 時間長度（for + 時間）',
    'How much → 金額（$... / It costs...）',
    'How many → 數量（數字）',
    'Which → 特定選項（The one on the left...）',
  ],
  strategy:'① 第一個字最重要：全神貫注聽疑問詞\n② 根據疑問詞預測答案類型（時間/地點/人/原因）\n③ 消去法：排除和問題無關的選項\n④ 間接回應也可能正確，不要堅持找 Yes/No\n⑤ 沒聽清楚？猜一個馬上繼續，不要停在上一題\n⑥ 練習方法：Dictation（聽寫）效果最好',
  practice:[
    { q:"Where should I leave the packages?", a:"Just put them by the front desk.", note:"Where → 地點答案" },
    { q:"When is the next team meeting?", a:"It's scheduled for Thursday at two.", note:"When → 時間答案" },
    { q:"Who approved the budget proposal?", a:"The finance director signed off on it.", note:"Who → 人物" },
    { q:"Why hasn't the report been submitted yet?", a:"We\'re still waiting for the data.", note:"Why → 原因" },
    { q:"Did you call the supplier about the delay?", a:"I left a message this morning.", note:"間接回應" },
    { q:"Would you prefer a window or an aisle seat?", a:"A window seat, please.", note:"選擇問句" },
    { q:"The coffee machine in the break room is broken.", a:"I\'ll contact maintenance right away.", note:"陳述句回應" },
    { q:"Isn\'t the presentation supposed to start at noon?", a:"Actually, it was moved to one o\'clock.", note:"附加問句" },
  ],
},

// ══════════════════════════════════
//  PART 3
// ══════════════════════════════════
{
  id:'part3', part:'Part 3', title:'簡短對話', section:'聽力',
  color:'var(--red)', meta:'39 題（13 組）｜每組對話搭配 3 題',
  intro:'聽 2～3 人對話，每段搭配 3 個問題。新制多益加入圖表整合題和三方對話。答案依題目順序出現在對話中。',
  types:[
    { name:'① 職場對話', desc:'同事/上下屬/部門之間',
      key:'問題→原因→解決方案→後續行動',
      example:'Meeting scheduling / Project updates / Work assignments\nI\'ll have the report ready by end of day.\nCould you cover for me at the three o\'clock meeting?' },
    { name:'② 電話對話', desc:'客服/預約/商務聯絡',
      key:'目的→結果→後續步驟',
      example:'I\'d like to make a reservation for Friday evening.\nI\'m calling about the order I placed last week.\nLet me transfer you to our customer service department.' },
    { name:'③ 購物/服務', desc:'店員與顧客',
      key:'商品說明→問題→解決→付款',
      example:'Do you have this in a larger size?\nI\'d like to return this item. I have my receipt.\nWe can offer you an exchange or store credit.' },
    { name:'④ 三方對話（新制）', desc:'三個說話者輪流發言',
      key:'區分三個人的立場和資訊，不要搞混',
      example:'Manager + two employees discussing a project timeline.\nNeed to track who said what.' },
  ],
  traps:[
    '說話者身份判斷錯誤（Who most likely is the man?）',
    '混淆說話者 A 和 B 的資訊',
    '後續行動：聽對方要做什麼，不是自己',
    '圖表題：聽力內容要和圖表交叉比對',
    '轉折詞後面的資訊才是重點',
  ],
  keywords:[
    'Actually / In fact → 轉折！後面是重點',
    'I\'ll... / Let me... → 說話者的後續行動',
    'Could you...? / Would you mind...? → 請求',
    'I\'m afraid... / Unfortunately... → 壞消息/拒絕',
    'Why don\'t we...? / How about...? → 提建議',
    'That\'s right / Exactly → 確認對方說的',
    'I\'m not sure / I\'ll have to check → 不確定',
    'As soon as... / By... → 時間點',
  ],
  strategy:'① 預讀 3 題，找疑問詞和關鍵字，預測場景\n② 注意誰在說話（說話者身份常考）\n③ 答案按題目順序出現在對話中（前/中/後）\n④ 聽到 but/however/actually 後面特別注意\n⑤ 圖表題：預讀先看圖表',
},

// ══════════════════════════════════
//  PART 4
// ══════════════════════════════════
{
  id:'part4', part:'Part 4', title:'簡短獨白', section:'聽力',
  color:'var(--red)', meta:'30 題（10 段）｜每段獨白搭配 3 題',
  intro:'聽一段由單人說的獨白，每段搭配 3 個問題。涵蓋廣告、公告、電話留言、新聞、導覽等多種場景。',
  types:[
    { name:'① 廣告/促銷', desc:'產品或服務推銷',
      key:'原因→優惠內容→條件→截止時間',
      example:'With summer just around the corner...\nFor every barbecue grill sold, we\'ll throw in a bag of charcoal for free.\nThese deals will end on Sunday.' },
    { name:'② 電話留言', desc:'語音信箱',
      key:'打電話者→目的→要求對方做什麼→回電資訊',
      example:'This is David from XYZ Company.\nI\'m calling regarding the shipment scheduled for next Monday.\nPlease call me back at 555-0123.' },
    { name:'③ 公司公告', desc:'內部通知',
      key:'通知對象→事件內容→生效時間→員工行動',
      example:'Attention all employees.\nAs of next Monday, the parking lot on the east side will be closed for renovations.\nPlease use the temporary lot on Third Street.' },
    { name:'④ 新聞/廣播', desc:'報導類',
      key:'主旨→細節→影響→後續',
      example:'In today\'s business news...\nAccording to our correspondent...\nThe company announced a merger with...' },
    { name:'⑤ 導覽介紹', desc:'參觀/旅遊說明',
      key:'地點介紹→參觀順序→注意事項→集合時間地點',
      example:'Welcome to our manufacturing facility.\nOn your left, you\'ll see the assembly line.\nPlease stay with the group at all times.' },
    { name:'⑥ 會議/簡報', desc:'開場或摘要',
      key:'場合→今日主題→流程安排→問題時間',
      example:'Thank you all for joining us today.\nThis morning, we\'ll be discussing our Q3 results.\nWe\'ll have time for questions at the end.' },
  ],
  traps:[
    '同義替換：deals = sale / purchase = buy / throw in = include for free',
    '主旨在第一句，不要錯過開頭',
    '後續行動在最後一句',
    '圖表題：預讀先看圖，不是先看選項',
    '數字、時間、地點是細節題高頻考點',
  ],
  keywords:[
    'around the corner → 即將來臨',
    'throw in → 附贈',
    'as of / effective → 從…起，生效',
    'limited time / ends on → 截止時間',
    'eligible for → 有資格',
    'don\'t miss out → 不要錯過',
    'Please be advised → 請注意（公告開頭）',
    'Attention all + 對象 → 公告對象',
    'I\'m calling about / regarding → 電話目的',
  ],
  strategy:'① 聽前 8 秒預讀 3 題疑問詞和關鍵字\n② 答案按順序出現（前段/中段/後段）\n③ 轉折詞後面特別注意\n④ 圖表題：預讀先看圖表類型和標籤\n⑤ 聽後快選，絕不戀戰，立刻預讀下一題',
  note:'✅ 詳細筆記在「筆記」頁面的 Part 4 分類中',
},

// ══════════════════════════════════
//  PART 5
// ══════════════════════════════════
{
  id:'part5', part:'Part 5', title:'句子填空', section:'閱讀',
  color:'var(--blue)', meta:'30 題｜每題一個句子，4 選 1',
  intro:'句子中有一個空格，從 4 個選項中選出最適合的單字或片語。考文法（60%）和詞彙（40%）。每題目標 30 秒以內。',
  types:[
    { name:'① 詞性題（最多）', desc:'四個選項是同一字根的不同詞性',
      key:'看空格在句子的位置判斷需要哪個詞性',
      example:'The _____ of the new policy will begin next month.\n(A) implement (v.) (B) implementing (C) implementation ✓ (D) implemented\n→ 空格前有 The，後無動詞，需要名詞\n\nThe manager spoke _____ about the upcoming changes.\n(A) confident (B) confidence (C) confidently ✓ (D) confide\n→ 修飾動詞，需要副詞 -ly' },
    { name:'② 時態題', desc:'四個選項是同一動詞的不同時態',
      key:'找時間副詞和上下文線索判斷時態',
      example:'By the time the manager arrived, the team _____ the presentation.\n→ had already finished ✓（過去完成式：arrive之前就完成了）\n\nThe company _____ its annual report last Friday.\n→ released ✓（last Friday = 過去式）\n\n時間線索：yesterday/ago/last → 過去式\nyet/already/recently → 完成式\nnext/tomorrow/will → 未來式' },
    { name:'③ 語態題', desc:'主動 vs 被動',
      key:'主詞是動作發出者→主動；主詞是接受者→被動',
      example:'The annual budget _____ by the board of directors.\n→ was approved ✓（預算被批准，被動）\n\nThe team _____ the project ahead of schedule.\n→ completed ✓（團隊完成，主動）' },
    { name:'④ 連接詞/介系詞題', desc:'選邏輯連接詞或正確介系詞',
      key:'固定搭配要記熟，不能硬翻譯',
      example:'_____ the heavy rain, the event was held outdoors.\n(A) Despite ✓ (B) Although (C) Because (D) However\n→ Despite + 名詞片語（雖然）\n\nThe store is closed _____ renovation.\n→ due to ✓（因為+名詞）\n\nShe has worked here _____ 2018.\n→ since ✓（從某時間點到現在）' },
    { name:'⑤ 詞彙題', desc:'四個選項詞性相同，靠語意判斷',
      key:'最難！考字義和固定搭配',
      example:'Please _____ the form before submitting it.\n(A) write (B) complete ✓ (C) make (D) do\n→ complete a form（完成表格）是固定搭配\n\nThe new software _____ productivity by 30%.\n(A) increased ✓ (B) expanded (C) extended (D) enlarged\n→ increase productivity 固定搭配' },
  ],
  traps:[
    'despite + 名詞；although + 子句（有 S+V）',
    'because of / due to + 名詞；because + 子句',
    'fewer + 可數名詞（fewer students）；less + 不可數（less time）',
    'a number of + 複數動詞；the number of + 單數動詞',
    'another + 單數；other + 複數；the other + 特定',
    '空格前有 The/a/an → 需要名詞',
    '空格修飾動詞 → 需要副詞（-ly）',
    '空格修飾名詞 → 需要形容詞',
  ],
  keywords:[
    'despite / in spite of + 名詞 → 雖然',
    'although / even though + 子句 → 雖然',
    'because of / due to / owing to + 名詞 → 因為',
    'because / since / as + 子句 → 因為',
    'however / nevertheless → 然而（句首，加逗號）',
    'therefore / thus / consequently → 因此',
    'moreover / furthermore / in addition → 此外',
    'since（時間）→ 從…至今｜since（原因）→ 既然',
    'while（時間）→ 當…時｜while（對比）→ 然而',
    'unless → 除非（= if...not）',
  ],
  strategy:'① 先看空格前後 2 個字，判斷詞性\n② 詞性確認後用語意縮小範圍\n③ 固定搭配靠記憶，不要硬翻譯\n④ 連接詞題先判斷後面是名詞還是子句\n⑤ 每題 30 秒，不確定就猜，繼續往下',
},

// ══════════════════════════════════
//  PART 6
// ══════════════════════════════════
{
  id:'part6', part:'Part 6', title:'短文填空', section:'閱讀',
  color:'var(--blue)', meta:'16 題（4 篇）｜每篇短文有 4 個空格',
  intro:'讀一篇短文，有 4 個空格（含 1 題句子插入題），考文法、詞彙、段落邏輯銜接。比 Part 5 難，需要讀上下文。',
  types:[
    { name:'① 文法/詞彙題（3題）', desc:'和 Part 5 相似，但要考慮上下文',
      key:'時態一致性、代名詞對應、語意連貫',
      example:'整篇用過去式 → 空格也要過去式\n前一句說 "she" → 空格要用 her/she\n前文說促銷結束 → 空格選 "final" 而非 "upcoming"' },
    { name:'② 句子插入題（1題）', desc:'選一整句插入最符合上下文的位置',
      key:'看邏輯連貫性和銜接詞，這是 Part 6 最特別的題型',
      example:'選項通常有 Therefore / However / In addition 等銜接詞\n→ 找前後句的邏輯關係：\n  轉折 → However + 選項\n  補充 → In addition + 選項\n  結果 → Therefore + 選項\n  例子 → For example + 選項' },
  ],
  traps:[
    '時態不一致：整篇文章時態要統一，不要看單句',
    '代名詞對象搞錯：確認 he/she/it/they 指的是誰',
    '句子插入題選錯位置：前後句邏輯要通順',
    '詞彙語意不符：要讀上下文，不能只看單句',
    '忽略整篇主旨：先快速瀏覽全文再填空',
  ],
  keywords:[
    'Furthermore / Moreover / In addition → 此外（補充資訊）',
    'However / Nevertheless / On the other hand → 然而（轉折）',
    'Therefore / As a result / Consequently → 因此（結果）',
    'For example / For instance / Such as → 例如',
    'In conclusion / To summarize / In short → 總結',
    'Previously / Formerly → 之前（時間轉換）',
    'Currently / At present → 目前',
    'Subsequently / Afterward → 之後',
  ],
  strategy:'① 先快速瀏覽全文，了解主題和語氣\n② 確認整篇的時態（過去/現在/未來）\n③ 句子插入題：找前後句的邏輯關係\n④ 代名詞題：往前找對應的名詞\n⑤ 每篇約 2 分鐘，共 8 分鐘完成 4 篇',
},

// ══════════════════════════════════
//  PART 7
// ══════════════════════════════════
{
  id:'part7', part:'Part 7', title:'閱讀測驗', section:'閱讀',
  color:'var(--blue)', meta:'54 題｜單篇 / 雙篇 / 三篇文章',
  intro:'閱讀各類商務文件，回答相關問題。是分數差距最大的部分，建議從單篇開始，最後做雙篇和三篇。',
  types:[
    { name:'① 單篇文章（SP）', desc:'1 篇文章配 2～5 題',
      key:'先讀題目找關鍵字，再回文章定位答案',
      example:'Email / Notice / Advertisement / Report / Article\n→ 常見文體：招聘廣告、活動通知、商品說明、新聞報導' },
    { name:'② 雙篇文章（DP）', desc:'2 篇相關文章配 5 題',
      key:'最後 1～2 題需要整合兩篇資訊',
      example:'Email 往來、廣告＋詢問信、公告＋回覆\n→ 前 3 題通常只需讀其中一篇\n→ 最後 1～2 題需要兩篇交叉比對' },
    { name:'③ 三篇文章（TP）', desc:'3 篇相關文章配 5 題',
      key:'資訊分散在三篇，耐心交叉比對',
      example:'Email＋公告＋訂單、廣告＋詢問＋回覆\n→ 每題判斷答案在哪篇，不要全部都讀' },
  ],
  traps:[
    'NOT/EXCEPT 題：找「沒提到」的，最耗時，建議最後做',
    '同義替換：原文 purchase → 選項 buy；原文 annually → 選項 once a year',
    '細節題靠文章，不要靠常識或常識猜測',
    '時間/日期計算：注意 next week / by + 日期',
    '句子插入題（新制）：和 Part 6 一樣，找邏輯銜接',
    '推論題：答案沒有直接說出來，要找「言外之意」',
  ],
  keywords:[
    'What is the purpose of...? → 看第一段開頭',
    'What is mentioned/stated...? → 答案直接在文中',
    'What is NOT mentioned? → 逐一消去，最耗時',
    'What is implied/suggested? → 推論，找言外之意',
    'According to the + 文件類型 → 答案在那份文件',
    'What will + 人 + most likely do? → 後續行動',
    'Look at the graphic → 圖表整合題',
    'Who most likely is...? → 推論身份',
  ],
  strategy:'① 先讀題目，找疑問詞和關鍵字\n② 用關鍵字在文章中定位，不要全文細讀\n③ NOT題最後做，因為要逐一比對最耗時\n④ 時間管理：54題約55分鐘，每題約1分鐘\n⑤ 雙篇/三篇：先判斷每題看哪篇，不要全部都讀\n⑥ 推論題：找文章中暗示的資訊，不要靠常識',
},

]; // end LEARN_DATA

// ══════════════════════════════════
//  渲染函式
// ══════════════════════════════════

let learnCurrentPart = 'part1';

function renderLearn() {
  renderLearnNav();
  renderLearnContent(LEARN_DATA.find(d => d.id === learnCurrentPart) || LEARN_DATA[0]);
}

function renderLearnNav() {
  const nav = document.getElementById('learnNav');
  if (!nav) return;
  nav.innerHTML = LEARN_DATA.map(d => `
    <button class="learn-nav-btn ${d.id === learnCurrentPart ? 'active' : ''}"
      style="${d.id === learnCurrentPart ? `border-color:${d.color};color:${d.color}` : ''}"
      onclick="selectLearnPart('${d.id}')">
      <span class="learn-nav-part">${d.part}</span>
      <span class="learn-nav-title">${d.title}</span>
    </button>`).join('');
}

function selectLearnPart(id) {
  learnCurrentPart = id;
  renderLearnNav();
  renderLearnContent(LEARN_DATA.find(d => d.id === id));
  document.getElementById('learnBody').scrollIntoView({ behavior:'smooth', block:'start' });
}

function renderLearnContent(d) {
  const body = document.getElementById('learnBody');
  if (!body || !d) return;

  // 題型卡片
  const typesHTML = d.types.map(t => `
    <div class="learn-type-card">
      <div class="learn-type-name">${esc(t.name)}</div>
      <div class="learn-type-desc">${esc(t.desc)}</div>
      ${t.key ? `<div class="learn-type-key">🎯 ${esc(t.key)}</div>` : ''}
      ${t.example ? `<div class="learn-type-example">${esc(t.example).replace(/\n/g,'<br>')}</div>` : ''}
    </div>`).join('');

  // 陷阱
  const trapsHTML = (d.traps||[]).map(t =>
    `<div class="learn-trap-item">⚠ ${esc(t)}</div>`).join('');

  // 關鍵字
  const kwHTML = (d.keywords||[]).map(k => {
    const en = k.split(/[→＋]/)[0].replace(/[^\x00-\x7F]/g,'').trim();
    return `<div class="learn-kw-item">
      <span class="learn-kw-text">${esc(k)}</span>
      ${en.length > 2 ? `<button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${esc(en)}">🔊</button>` : ''}
    </div>`;
  }).join('');

  // 練習句（Part 2 專屬）
  const practiceHTML = (d.practice||[]).map((p,i) => `
    <div class="learn-practice-item">
      <div class="learn-practice-num">Q${i+1}</div>
      <div class="learn-practice-body">
        <div class="learn-practice-q">
          ${esc(p.q)}
          <button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${esc(p.q)}">🔊</button>
        </div>
        <div class="learn-practice-a">
          → ${esc(p.a)}
          <button class="speak-btn-sm" onclick="learnSpeak(this)" data-text="${esc(p.a)}">🔊</button>
        </div>
        ${p.note ? `<div class="learn-practice-note">${esc(p.note)}</div>` : ''}
      </div>
    </div>`).join('');

  body.innerHTML = `
    <div class="learn-header" style="border-left:4px solid ${d.color}">
      <div class="learn-part-badge" style="background:${d.color}20;color:${d.color};border:1px solid ${d.color}40">${d.part} ${d.section}</div>
      <div class="learn-part-title">${d.title}</div>
      <div class="learn-part-meta">${d.meta}</div>
      <div class="learn-part-intro">${esc(d.intro)}</div>
      ${d.note ? `<div class="learn-note-tip">💡 ${esc(d.note)}</div>` : ''}
    </div>

    <div class="learn-section">
      <div class="learn-section-title">📋 題型分類</div>
      <div class="learn-types">${typesHTML}</div>
    </div>

    ${d.strategy ? `
    <div class="learn-section">
      <div class="learn-section-title">🎯 解題策略</div>
      <div class="learn-strategy">${esc(d.strategy).replace(/\n/g,'<br>')}</div>
    </div>` : ''}

    ${d.practice && d.practice.length ? `
    <div class="learn-section">
      <div class="learn-section-title">🎧 練習例句（點 🔊 聽發音）</div>
      <div class="learn-practice">${practiceHTML}</div>
    </div>` : ''}

    ${d.keywords && d.keywords.length ? `
    <div class="learn-section">
      <div class="learn-section-title">🔑 關鍵字 / 常見句型</div>
      <div class="learn-keywords">${kwHTML}</div>
    </div>` : ''}

    ${d.traps && d.traps.length ? `
    <div class="learn-section">
      <div class="learn-section-title">🪤 常見陷阱</div>
      <div class="learn-traps">${trapsHTML}</div>
    </div>` : ''}
  `;
}

// ── 學習區朗讀輔助（避免 JSON.stringify 在 onclick 屬性中的引號問題）──
function learnSpeak(btn) {
  const text = btn.getAttribute('data-text');
  if (text && window.speak) speak(text);
}
