// ════════════════════════════════════════
//  topics-practice.js
//  13 大主題完整練習題組
//  每主題：Part 3或4（獨白/對話）+ Part 5（3題）+ Part 7（完整文章+4題）
// ════════════════════════════════════════
window.TOPIC_PRACTICE = {

// ══════════════════════
//  Travel 旅遊篇
// ══════════════════════
travel:[
  // ── Part 4 簡短獨白 ──
  { part:'Part 4', type:'簡短獨白', groupId:'t-p4',
    passage:`Good morning, passengers. This is your captain speaking. We apologize for the delay in our departure. Due to heavy fog at our destination airport in London, we will be holding on the ground for approximately 45 minutes. Once we receive clearance, we will begin boarding immediately. We understand this is inconvenient and appreciate your patience. Complimentary beverages will be provided during the wait. If you need to make alternative arrangements, please speak with a gate agent. We expect to arrive in London by 3:30 PM local time. Thank you for flying with us.`,
    qs:[
      { q:'What is the reason for the delay?',
        choices:['Technical problems with the aircraft','Bad weather at the destination','Air traffic congestion','A crew scheduling issue'],
        ans:1, explain:'"Due to heavy fog at our destination airport" 直接說明原因是目的地機場的濃霧。'},
      { q:'What will passengers receive during the wait?',
        choices:['A meal voucher','Free beverages','A seat upgrade','A hotel room'],
        ans:1, explain:'"Complimentary beverages will be provided during the wait" = 等候期間提供免費飲料。'},
      { q:'What are passengers with schedule concerns advised to do?',
        choices:['Call the airline directly','Visit the airline website','Speak with a gate agent','Wait for further announcements'],
        ans:2, explain:'"please speak with a gate agent" 直接指示需要更改安排的旅客去找登機門工作人員。'},
    ]
  },
  // ── Part 5 句子填空 ──
  { part:'Part 5', type:'句子填空',
    q:'Passengers are required to present their _____ and a valid photo ID at the check-in counter.',
    choices:['boarding pass','itinerary','confirmation','ticket stub'], ans:0,
    explain:'登機時需出示「登機證 boarding pass」，這是多益旅遊主題最常考的搭配。' },
  { part:'Part 5', type:'句子填空',
    q:'The hotel provides _____ airport shuttle service for guests arriving after 10 PM.',
    choices:['complimentary','mandatory','excessive','tentative'], ans:0,
    explain:'免費的接駁服務 = complimentary shuttle，complimentary = free of charge，是旅遊主題必考字。' },
  { part:'Part 5', type:'句子填空',
    q:'All travel expenses must be submitted for _____ within 30 days of returning from the trip.',
    choices:['reimbursement','reservation','cancellation','accommodation'], ans:0,
    explain:'費用報銷 = reimbursement，submit for reimbursement = 提交申請報銷，是商務旅遊必考搭配。' },
  // ── Part 7 閱讀測驗 ──
  { part:'Part 7', type:'閱讀測驗', groupId:'t-p7',
    passage:`To: All Staff
From: HR Department
Subject: Updated Business Travel Policy

Effective March 1st, all employees traveling on company business must adhere to the following updated guidelines:

1. Flight bookings must be made at least 14 days in advance through the company's approved travel portal to qualify for reimbursement.
2. Hotel accommodation is limited to $150 per night. Any amount exceeding this limit must be approved by a department manager.
3. A per diem of $60 will be provided for meals. Receipts are not required for amounts under this limit.
4. International travel requires written approval from the Vice President at least 21 days prior to departure.
5. All travel itineraries must be submitted to HR before departure.

For questions, contact the Travel Department at travel@company.com.`,
    qs:[
      { q:'According to the policy, how far in advance must flights be booked?',
        choices:['7 days','10 days','14 days','21 days'],
        ans:2, explain:'"must be made at least 14 days in advance" 直接說明最少提前 14 天訂機票。'},
      { q:'What is the daily meal allowance for business travelers?',
        choices:['$50','$60','$80','$150'],
        ans:1, explain:'"A per diem of $60 will be provided for meals" = 每日餐費津貼為 60 美元。'},
      { q:'Who must approve hotel costs that exceed the limit?',
        choices:['The HR department','The Travel Department','A department manager','The Vice President'],
        ans:2, explain:'"must be approved by a department manager" 說明超出住宿上限需要部門經理批准。'},
      { q:'What is required for international travel?',
        choices:['Approval from HR 7 days ahead','A travel insurance policy','Written approval from the VP 21 days before','An updated passport copy'],
        ans:2, explain:'"requires written approval from the Vice President at least 21 days prior" = 需要副總裁書面核准且提前 21 天。'},
    ]
  },
],

// ══════════════════════
//  Dining Out 外出用餐篇
// ══════════════════════
dining:[
  { part:'Part 3', type:'簡短對話', groupId:'d-p3',
    passage:`W: Good evening. Do you have a reservation?
M: Yes, it's under Anderson. A table for four at 7 PM.
W: Let me check... I'm sorry, I only see a reservation for two people under that name.
M: Oh, that must be a mistake. I called last week and specifically requested a table for four. We have two guests joining us tonight.
W: I understand. Unfortunately, all of our four-person tables are fully booked this evening. However, I can seat you at two adjacent two-person tables, or you're welcome to wait at the bar for about 20 minutes — a larger table should be available then.
M: We'd prefer to wait. My guests haven't arrived yet anyway.
W: Of course. I'll let you know as soon as a table is ready. Can I get you something to drink while you wait?`,
    qs:[
      { q:'What is the problem with the reservation?',
        choices:['The reservation was canceled','The time is incorrect','The number of guests is wrong','The restaurant is fully booked'],
        ans:2, explain:'訂位記錄只有 2 人，但男士說他訂的是 4 人桌，所以問題是人數有誤。'},
      { q:'What does the woman offer as a solution?',
        choices:['A private dining room','A discount on the meal','Two adjacent tables or a wait','A reservation for another day'],
        ans:2, explain:'"seat you at two adjacent two-person tables, or you\'re welcome to wait" 提供兩個選項。'},
      { q:'What will the man most likely do next?',
        choices:['Leave the restaurant','Call to change the reservation','Wait at the bar','Speak with the manager'],
        ans:2, explain:'"We\'d prefer to wait" 表示男士選擇等候，且說客人還沒到。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The restaurant requires that all _____ restrictions be communicated at least 24 hours before the event.',
    choices:['dietary','catering','beverage','gratuity'], ans:0,
    explain:'飲食限制 = dietary restrictions，是餐飲主題最常考的搭配，注意 dietary 是形容詞。' },
  { part:'Part 5', type:'句子填空',
    q:'A 15% _____ will be automatically added to the bill for parties of eight or more.',
    choices:['gratuity','cuisine','specials','entree'], ans:0,
    explain:'服務費 = gratuity，"automatically added to the bill" 是多益常考的餐廳帳單描述。' },
  { part:'Part 5', type:'句子填空',
    q:'The company has hired a professional _____ service to handle all food arrangements for the annual gala.',
    choices:['catering','dining','buffet','hosting'], ans:0,
    explain:'外燴服務 = catering service，hire a catering company/service 是多益常考搭配。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'d-p7',
    passage:`HARVEST BISTRO — Private Event Menu

Thank you for choosing Harvest Bistro for your upcoming event. Below are our available set menu options for groups of 15 or more.

GOLD PACKAGE — $65 per person
• Choice of 2 appetizers (served family style)
• Main course: choice of salmon, chicken, or vegetarian pasta
• Dessert platter
• Coffee and tea

PLATINUM PACKAGE — $90 per person
• Choice of 3 appetizers
• Soup or salad
• Main course: choice of filet mignon, lobster, or vegetarian option
• Dessert platter and individual dessert
• Open bar for 3 hours
• Coffee and tea

Both packages include complimentary table setup and a dedicated event coordinator.
A non-refundable deposit of 25% is required to confirm your booking.
Final guest count must be provided 5 business days before the event.
For dietary accommodations, please notify us at least 48 hours in advance.`,
    qs:[
      { q:'What is included in both packages?',
        choices:['An open bar','Soup or salad','A dedicated event coordinator','Individual desserts'],
        ans:2, explain:'"Both packages include complimentary table setup and a dedicated event coordinator" 兩個套餐都包含專屬活動協調員。'},
      { q:'How much is the deposit required to confirm a booking?',
        choices:['15% of the total','20% of the total','25% of the total','50% of the total'],
        ans:2, explain:'"A non-refundable deposit of 25% is required" 明確說明需要 25% 不可退訂金。'},
      { q:'By when must the final guest count be submitted?',
        choices:['48 hours before','3 business days before','5 business days before','One week before'],
        ans:2, explain:'"Final guest count must be provided 5 business days before the event" 直接說明。'},
      { q:'What should guests with special dietary needs do?',
        choices:['Email the chef directly','Call the restaurant immediately','Notify the restaurant 48 hours in advance','Select from the standard menu only'],
        ans:2, explain:'"please notify us at least 48 hours in advance" = 需提前 48 小時告知飲食需求。'},
    ]
  },
],

// ══════════════════════
//  Entertainment 娛樂篇
// ══════════════════════
entertainment:[
  { part:'Part 4', type:'簡短獨白', groupId:'en-p4',
    passage:`Thank you for calling the Riverside Arts Center box office. Our upcoming season features some truly exciting performances. This Saturday, the internationally acclaimed Verona String Quartet will perform works by Beethoven and Brahms. Tickets are still available — $45 for general seating and $70 for premium front-section seats. Next month, we are thrilled to present the world premiere of "Echoes," a new play by award-winning playwright Daniel Marsh. Advance tickets for the premiere are selling fast, so we recommend booking early. All tickets can be purchased online at riversideartscom or at our box office, which is open Tuesday through Saturday from noon to 8 PM. Student and senior discounts are available with valid ID. For group bookings of 10 or more, please call us directly for special rates.`,
    qs:[
      { q:'What event is happening this Saturday?',
        choices:['A new play premiere','A string quartet performance','An art exhibition opening','A dance recital'],
        ans:1, explain:'"This Saturday, the internationally acclaimed Verona String Quartet will perform" 直接說明本週六的演出。'},
      { q:'How much do premium seats cost for Saturday\'s performance?',
        choices:['$45','$60','$70','$90'],
        ans:2, explain:'"$70 for premium front-section seats" 直接說明高級座位票價。'},
      { q:'What are group bookers advised to do?',
        choices:['Book online','Visit the box office in person','Call for special rates','Email the arts center'],
        ans:2, explain:'"For group bookings of 10 or more, please call us directly for special rates" = 團體訂票需電話聯絡。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The Saturday afternoon _____ performance is priced 20% lower than evening shows.',
    choices:['matinee','premiere','lineup','intermission'], ans:0,
    explain:'日場表演 = matinee，是娛樂主題必考詞，matinee prices（日場票價）通常較便宜。' },
  { part:'Part 5', type:'句子填空',
    q:'The concert hall has a seating _____ of 2,000 and is fully accessible to people with disabilities.',
    choices:['capacity','admission','venue','exhibit'], ans:0,
    explain:'容納人數 = seating capacity，"has a capacity of + 數字" 是固定說法。' },
  { part:'Part 5', type:'句子填空',
    q:'Due to overwhelming demand, the opening weekend performances are completely _____.',
    choices:['sold out','booked up','reserved','unavailable'], ans:0,
    explain:'sold out 是多益最常考的「售罄」說法，注意也可以用 fully booked，但 sold out 最常見。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'en-p7',
    passage:`METROPOLITAN MUSEUM OF ART
Special Exhibition: The Golden Age of Dutch Masters

Opening: March 15 – June 30
Gallery Hours: Tuesday–Sunday, 10:00 AM – 6:00 PM (Thursdays until 9:00 PM)
Closed Mondays

This groundbreaking exhibition brings together over 80 masterpieces from the 17th century, including rarely-seen works on loan from private collections across Europe. Highlights include works by Rembrandt, Vermeer, and their contemporaries.

ADMISSION
General: $28  |  Members: Free  |  Students (with ID): $18  |  Children under 12: Free

GUIDED TOURS
Curator-led tours are offered Saturdays at 11 AM and 2 PM. Registration is required and can be done at the information desk upon arrival. Space is limited to 15 participants per tour.

AUDIO GUIDE
Available in 8 languages. Rental fee: $8

Please note: Photography is permitted in all galleries except in rooms marked with a "No Photography" sign. Flash photography is strictly prohibited.`,
    qs:[
      { q:'On which day is the museum open latest?',
        choices:['Tuesday','Friday','Saturday','Thursday'],
        ans:3, explain:'"Thursdays until 9:00 PM" 週四開放到晚上 9 點，比其他天更晚。'},
      { q:'How much does a university student pay for admission?',
        choices:['Free','$18','$28','$8'],
        ans:1, explain:'"Students (with ID): $18" 持有效學生證的學生票價為 18 美元。'},
      { q:'What must visitors do to join a curator-led tour?',
        choices:['Book online in advance','Call the museum','Register at the information desk','Purchase a special tour ticket'],
        ans:2, explain:'"Registration is required and can be done at the information desk upon arrival" = 到場後在服務台登記。'},
      { q:'Which of the following is NOT permitted in the museum?',
        choices:['Taking photographs','Using an audio guide','Flash photography','Visiting with children'],
        ans:2, explain:'"Flash photography is strictly prohibited" = 嚴禁使用閃光燈拍照。'},
    ]
  },
],

// ══════════════════════
//  Housing 房屋篇
// ══════════════════════
housing:[
  { part:'Part 3', type:'簡短對話', groupId:'ho-p3',
    passage:`M: Hi, I'm calling about the two-bedroom apartment listed on your website. Is it still available?
W: Yes, it is. It's on the fourth floor of a newly renovated building. The monthly rent is $1,800, utilities not included.
M: That sounds reasonable. Does it come with parking?
W: There's one assigned parking space included. Additional spaces are available for $80 per month.
M: Great. I'd like to schedule a viewing. I'm available this weekend.
W: We have openings on Saturday at 10 AM or 2 PM, and Sunday at 11 AM.
M: Saturday at 2 PM works perfectly for me.
W: Wonderful. Can I get your name and phone number? Also, I should mention that we require a security deposit equal to two months' rent and a completed rental application before signing the lease.`,
    qs:[
      { q:'What is the monthly rent for the apartment?',
        choices:['$1,600','$1,800','$2,000','$2,200'],
        ans:1, explain:'"The monthly rent is $1,800" 直接說明月租金。'},
      { q:'What is included with the apartment?',
        choices:['Two parking spaces','Utilities','One parking space','A storage unit'],
        ans:2, explain:'"There\'s one assigned parking space included" = 含一個指定停車位。'},
      { q:'What does the woman say is required before signing the lease?',
        choices:['Three months\' rent deposit','A credit check and references','Two months\' deposit and a rental application','A meeting with the building manager'],
        ans:2, explain:'"a security deposit equal to two months\' rent and a completed rental application" = 兩個月押金加租屋申請表。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The building manager must be notified in writing at least 30 days before a _____ intends to vacate the premises.',
    choices:['tenant','landlord','vendor','contractor'], ans:0,
    explain:'租客離開前需通知 = tenant（承租人），是房屋主題最重要的詞彙，注意與 landlord（房東）的區別。' },
  { part:'Part 5', type:'句子填空',
    q:'The security _____ will be returned to the tenant within 14 days of moving out, provided no damages are found.',
    choices:['deposit','lease','utilities','mortgage'], ans:0,
    explain:'押金退還 = security deposit returned，是租屋合約常見條款，多益 Part 7 必考。' },
  { part:'Part 5', type:'句子填空',
    q:'All maintenance requests should be submitted through the online portal, and repairs will be completed within 48 hours _____ urgent situations.',
    choices:['except for','in addition to','along with','instead of'], ans:0,
    explain:'除了緊急情況 = except for urgent situations，except for + 名詞是常考介系詞搭配。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'ho-p7',
    passage:`NOTICE TO ALL RESIDENTS
Maple Grove Apartments

Dear Residents,

We would like to inform you of the following building updates scheduled for the month of April:

LOBBY RENOVATION (April 3–14)
The main lobby will be under renovation during this period. Residents should use the side entrance on Oak Street. Deliveries will also be redirected to the side entrance. We apologize for the inconvenience.

ELEVATOR MAINTENANCE (April 18, 9 AM – 3 PM)
Both elevators will be out of service for routine maintenance on April 18th. Residents requiring assistance should contact the office by April 15th so alternative arrangements can be made.

ANNUAL FIRE SAFETY INSPECTION (April 25)
A certified inspector will conduct unit inspections between 9 AM and 5 PM. Residents are encouraged to be present, but if you cannot be available, please contact the office to arrange access. Inspectors will carry photo identification.

Association fees for April will remain unchanged despite these temporary inconveniences.
For any questions, please contact the building management office at (555) 234-5678.

Best regards,
Building Management`,
    qs:[
      { q:'Where should residents enter the building during the lobby renovation?',
        choices:['Through the main entrance as usual','Through the parking garage','Through the side entrance on Oak Street','Through the emergency exit'],
        ans:2, explain:'"Residents should use the side entrance on Oak Street" 直接說明替代入口。'},
      { q:'What should residents needing elevator assistance do?',
        choices:['Contact the office on April 18th','Contact the office by April 15th','Use the service elevator','Email the building manager'],
        ans:1, explain:'"contact the office by April 15th so alternative arrangements can be made" = 在 4/15 前聯絡辦公室。'},
      { q:'What will inspectors carry during the fire safety inspection?',
        choices:['A building master key','A signed letter from management','Photo identification','A copy of residents\' lease'],
        ans:2, explain:'"Inspectors will carry photo identification" = 檢查員將攜帶附照片身份證件。'},
      { q:'What is stated about the April association fees?',
        choices:['They will increase due to renovations','They will be waived for the month','They will remain the same','They will be collected earlier than usual'],
        ans:2, explain:'"Association fees for April will remain unchanged" = 4 月管理費維持不變。'},
    ]
  },
],

// ══════════════════════
//  Purchasing 採購篇
// ══════════════════════
purchasing:[
  { part:'Part 3', type:'簡短對話', groupId:'pu-p3',
    passage:`W: Hi, this is Jennifer Park from Nexus Solutions. I'm calling about purchase order #4521 that we placed last week.
M: Yes, Ms. Park. I have your order here. It looks like there's been a slight delay — we're waiting on one component from our supplier.
W: I see. We actually need those items by the 20th for a client installation. Is there any way to expedite the order?
M: Let me check with our warehouse... We could ship the available items now and send the remaining components separately once they arrive, or we could wait and ship everything together on the 22nd.
W: I'll take the partial shipment now. Even getting most of the items will help us prepare. Can you send a tracking number once it ships?
M: Absolutely. I'll process that today and you should have the first shipment by the 18th. I'll email you the tracking information along with an updated invoice.
W: Perfect. Thank you for your help.`,
    qs:[
      { q:'Why is the order delayed?',
        choices:['The items are out of stock','A supplier component is missing','The order was placed incorrectly','The shipping address is wrong'],
        ans:1, explain:'"we\'re waiting on one component from our supplier" = 正在等待供應商的一個零件。'},
      { q:'What does the woman decide to do?',
        choices:['Cancel the order entirely','Wait for the complete shipment on the 22nd','Accept a partial shipment now','Place a new order with a different supplier'],
        ans:2, explain:'"I\'ll take the partial shipment now" 表示女士選擇接受部分出貨。'},
      { q:'What will the man send by email?',
        choices:['A new purchase order form','A product catalog','Tracking information and an updated invoice','A refund confirmation'],
        ans:2, explain:'"I\'ll email you the tracking information along with an updated invoice" 說明將 email 追蹤資訊和更新發票。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The vendor agreed to offer a 10% _____ discount for orders exceeding 1,000 units.',
    choices:['bulk','wholesale','restocking','procurement'], ans:0,
    explain:'批量折扣 = bulk discount，"bulk + 名詞" 表示大量採購，是採購主題最常考的搭配。' },
  { part:'Part 5', type:'句子填空',
    q:'Payment must be received within 30 days of the _____ date to avoid late fees.',
    choices:['invoice','purchase','vendor','warranty'], ans:0,
    explain:'發票日期 = invoice date，"within 30 days of the invoice date" 是 net 30 付款條件的標準表達。' },
  { part:'Part 5', type:'句子填空',
    q:'The new supplier was selected based on competitive pricing and a proven track record of _____ with safety standards.',
    choices:['compliance','defective','procurement','backorder'], ans:0,
    explain:'遵守規定 = compliance，compliance with + 規定/標準 是多益常考的固定搭配。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'pu-p7',
    passage:`From: David Chen <d.chen@brighttech.com>
To: Sarah Morris <s.morris@alphasupply.com>
Subject: RE: Quote Request – Office Furniture

Dear Ms. Morris,

Thank you for sending the quote for our office furniture order (RFQ #2024-089). After reviewing the proposal with our management team, we would like to proceed with the following modifications:

1. We will increase the desk order from 20 to 35 units, as we have expanded our planned office space.
2. We would like to substitute the standard chairs (Model C-200) with the ergonomic version (Model EC-300), as employee comfort is a priority.
3. Regarding delivery, we require all items to be delivered by September 15th to align with our office opening date.

Could you please send a revised quote reflecting these changes? We would also like to know if a bulk discount applies to the increased desk order.

Looking forward to your response.

Best regards,
David Chen
Procurement Manager, BrightTech Solutions`,
    qs:[
      { q:'Why is the desk quantity being increased?',
        choices:['The original order was incorrect','The office space has been expanded','A discount is available for larger orders','The original desks were defective'],
        ans:1, explain:'"we have expanded our planned office space" = 辦公室計畫空間已擴大，所以增加訂購量。'},
      { q:'What change is being made regarding the chairs?',
        choices:['The quantity is being reduced','The color is being changed','The model is being upgraded to an ergonomic version','The order is being canceled'],
        ans:2, explain:'"substitute the standard chairs with the ergonomic version" = 將標準椅換成符合人體工學的版本。'},
      { q:'Why is September 15th important?',
        choices:['It is the payment deadline','It is the office opening date','It is the last day of the promotion','It is the end of the fiscal quarter'],
        ans:1, explain:'"delivered by September 15th to align with our office opening date" = 因為辦公室將於該日開幕。'},
      { q:'What additional information does Mr. Chen request?',
        choices:['A product catalog','Delivery insurance options','Information about bulk discounts','A sample of the furniture'],
        ans:2, explain:'"We would also like to know if a bulk discount applies to the increased desk order" = 詢問是否有批量折扣。'},
    ]
  },
],

// ══════════════════════
//  Personnel 人事篇
// ══════════════════════
personnel:[
  { part:'Part 4', type:'簡短獨白', groupId:'pe-p4',
    passage:`Good afternoon, everyone. I'm pleased to announce some exciting changes to our team. First, I'd like to congratulate Rachel Kim on her promotion to Regional Sales Director, effective the first of next month. Rachel has been with us for eight years and has consistently exceeded her targets. Please join me in welcoming her to this new role. Additionally, we will be welcoming two new team members next week: James Liu, who joins us as Senior Analyst from our Singapore office, and Maria Gonzalez, a recent graduate who will be joining as a Marketing Associate. Both will be attending our two-week onboarding program starting Monday. Finally, I want to remind everyone that annual performance reviews will begin on November 15th. Please ensure that your self-evaluations are completed and submitted to HR by November 10th. Department managers will schedule individual review meetings after that date.`,
    qs:[
      { q:'What is announced about Rachel Kim?',
        choices:['She is leaving the company','She is transferring to Singapore','She is being promoted','She is receiving a special award'],
        ans:2, explain:'"I\'d like to congratulate Rachel Kim on her promotion to Regional Sales Director" = Rachel 獲得晉升。'},
      { q:'When will the new employees start the onboarding program?',
        choices:['This Friday','Next Monday','The first of next month','November 15th'],
        ans:1, explain:'"attending our two-week onboarding program starting Monday" = 週一開始的新員工培訓。'},
      { q:'By what date must self-evaluations be submitted?',
        choices:['November 1st','November 10th','November 15th','November 30th'],
        ans:1, explain:'"self-evaluations are completed and submitted to HR by November 10th" = 11/10 前提交自評。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'All new hires are required to complete a 90-day _____ period before being considered for permanent employment.',
    choices:['probation','recruitment','incentive','severance'], ans:0,
    explain:'試用期 = probation period，90-day probation period 是多益人事主題最常考的固定搭配。' },
  { part:'Part 5', type:'句子填空',
    q:'The company offers a competitive _____ package that includes base salary, performance bonuses, and health benefits.',
    choices:['compensation','recruitment','onboarding','termination'], ans:0,
    explain:'薪酬福利套餐 = compensation package，是人事主題最核心的詞彙，包含各種薪資和福利。' },
  { part:'Part 5', type:'句子填空',
    q:'Qualified applicants should _____ for the position by submitting a resume and cover letter to hr@company.com.',
    choices:['apply','refer','promote','recruit'], ans:0,
    explain:'應徵職位 = apply for the position，apply for 是多益最常考的動詞搭配，不能只說 apply the position。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'pe-p7',
    passage:`POSITION AVAILABLE

Job Title: Senior Marketing Manager
Location: Chicago, IL (Hybrid — 3 days in office, 2 days remote)
Department: Marketing
Reports to: Vice President of Marketing

ABOUT THE ROLE
We are seeking an experienced Senior Marketing Manager to lead our brand strategy and digital marketing initiatives. The ideal candidate will have a strong background in B2B marketing and a proven ability to drive measurable results.

RESPONSIBILITIES
• Develop and execute comprehensive marketing campaigns
• Manage a team of 6 marketing professionals
• Oversee an annual marketing budget of $1.2 million
• Collaborate with the sales team to align marketing strategies
• Analyze campaign performance and present monthly reports to senior leadership

QUALIFICATIONS
• Bachelor's degree in Marketing, Business, or related field (Master's preferred)
• Minimum 7 years of marketing experience, with at least 3 in a managerial role
• Proficiency in CRM software and digital marketing platforms
• Excellent written and verbal communication skills

COMPENSATION
• Base salary: $95,000–$115,000, commensurate with experience
• Annual performance bonus (up to 15% of base salary)
• Comprehensive benefits including medical, dental, and 401(k)

To apply, submit your resume, cover letter, and three professional references to careers@innovatecorp.com by January 31st.`,
    qs:[
      { q:'How many days per week would the employee work from home?',
        choices:['1 day','2 days','3 days','5 days'],
        ans:1, explain:'"Hybrid — 3 days in office, 2 days remote" = 每週 2 天遠端工作。'},
      { q:'What is the minimum required experience for this position?',
        choices:['3 years total experience','5 years in marketing','7 years of marketing experience','10 years in a managerial role'],
        ans:2, explain:'"Minimum 7 years of marketing experience" = 至少 7 年行銷經驗。'},
      { q:'What should applicants include in their submission?',
        choices:['A portfolio of past campaigns','A resume, cover letter, and three references','A writing sample and references','Only a resume and cover letter'],
        ans:1, explain:'"submit your resume, cover letter, and three professional references" = 需提交履歷、求職信和三份推薦人資料。'},
      { q:'What is stated about the salary?',
        choices:['It is fixed at $95,000','It depends on the number of years at the company','It is based on experience','It includes a guaranteed bonus'],
        ans:2, explain:'"$95,000–$115,000, commensurate with experience" = 薪資範圍依經驗而定。'},
    ]
  },
],

// ══════════════════════
//  Offices 辦公室篇
// ══════════════════════
offices:[
  { part:'Part 3', type:'簡短對話', groupId:'of-p3',
    passage:`W: Have you seen the memo about the new office supply ordering system?
M: I skimmed it, but I didn't read the whole thing. What changed?
W: Starting next month, we can't just call the supply room directly anymore. All requests have to go through the online procurement portal. And we need our department manager's approval for any order over $50.
M: That seems like it'll slow things down. What if I just need a few pens or notepads?
W: Items under $25 are still available at the supply room without approval. But for anything more, you'll need to log in to the portal, submit a request, and wait for approval before picking it up.
M: I guess that makes sense for tracking expenses. Does the portal show estimated delivery times?
W: Yes, and you'll get an email notification once your order is approved and ready for pickup. The IT department set up a training session for Thursday at 3 PM if you want to learn the system.
M: I'll try to make it. I have a meeting that might run late, but I'll aim to be there.`,
    qs:[
      { q:'What is the main change described in the memo?',
        choices:['The supply room will be relocated','Office supplies will no longer be provided','All orders must now go through an online portal','The department budget has been reduced'],
        ans:2, explain:'"All requests have to go through the online procurement portal" = 所有申請都要透過線上採購系統。'},
      { q:'What is the approval threshold for supply orders?',
        choices:['$15','$25','$50','$100'],
        ans:2, explain:'"department manager\'s approval for any order over $50" = 超過 50 元的訂單需要主管批准。'},
      { q:'What will happen after an order is approved?',
        choices:['The items will be delivered to the employee\'s desk','The employee will receive an email notification','The department manager will be notified','The finance team will process the payment'],
        ans:1, explain:'"you\'ll get an email notification once your order is approved and ready for pickup" = 核准後會收到 email 通知。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The meeting _____ includes a review of Q3 results, a budget discussion, and updates from each department head.',
    choices:['agenda','minutes','memo','deadline'], ans:0,
    explain:'議程 = agenda，meeting agenda = 會議議程，是辦公室主題最常考的詞彙。' },
  { part:'Part 5', type:'句子填空',
    q:'Please _____ all meeting documents at least 24 hours before the scheduled conference call.',
    choices:['circulate','delegate','archive','stipulate'], ans:0,
    explain:'傳閱文件 = circulate documents，circulate 在商務情境中表示分發、流傳文件。' },
  { part:'Part 5', type:'句子填空',
    q:'The manager _____ responsibility for the annual report to the senior analyst while she attended the conference.',
    choices:['delegated','submitted','revised','informed'], ans:0,
    explain:'委派責任 = delegate responsibility，delegate + 任務 + to + 人，是辦公室主題固定搭配。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'of-p7',
    passage:`INTERNAL MEMORANDUM

To: All Staff, Riverside Office
From: Facilities Management
Date: October 8
Subject: Office Renovation — Phase 2 Schedule

As previously announced, Phase 2 of our office renovation will begin on October 20th. The following areas will be affected:

WEEK 1 (Oct 20–24): Third-floor meeting rooms 3A, 3B, and 3C will be closed. Alternative meeting spaces have been reserved on the second floor. To book these rooms, please use the standard calendar booking system with the label "Phase 2 Temp."

WEEK 2 (Oct 27–31): The staff kitchen and break room on the third floor will be temporarily closed. A mobile refreshment station will be set up near the elevator lobby. The vending machines on floors 1 and 2 will remain operational.

Noise levels during construction may be disruptive. Employees who require a quiet working environment for focused tasks are encouraged to use the library room on the first floor (available 8 AM–6 PM) or discuss flexible work-from-home options with their managers.

We appreciate your understanding and cooperation during this period. For questions, contact facilities@riversideoffice.com.`,
    qs:[
      { q:'What areas will be unavailable during Week 1?',
        choices:['The first-floor library','The staff kitchen','The third-floor meeting rooms','The elevator lobby'],
        ans:2, explain:'"Third-floor meeting rooms 3A, 3B, and 3C will be closed" = 三樓會議室關閉。'},
      { q:'How can employees book temporary meeting rooms?',
        choices:['Call the facilities office','Use the calendar system with a special label','Submit a written request','Ask their department manager'],
        ans:1, explain:'"use the standard calendar booking system with the label \'Phase 2 Temp.\'" = 使用行事曆系統並標記特定名稱。'},
      { q:'What option is available for employees who need a quiet workspace?',
        choices:['Working from home only','Using the third-floor conference room','Using the first-floor library room','Moving to another office location'],
        ans:2, explain:'"encouraged to use the library room on the first floor" = 一樓圖書室提供安靜工作環境。'},
      { q:'What will remain available during Week 2?',
        choices:['The third-floor break room','The mobile refreshment station and vending machines on floors 1 and 2','All meeting rooms','The staff kitchen'],
        ans:1, explain:'"A mobile refreshment station will be set up" 和 "vending machines on floors 1 and 2 will remain operational" 兩項都繼續提供。'},
    ]
  },
],

// ══════════════════════
//  Health 健康篇
// ══════════════════════
health:[
  { part:'Part 4', type:'簡短獨白', groupId:'he-p4',
    passage:`Attention all employees. This is a reminder from the Human Resources Department about our annual benefits enrollment period. Open enrollment begins on November 1st and closes on November 15th. During this time, you can make changes to your health, dental, and vision insurance plans, as well as your flexible spending accounts. Please note that any changes made during this period will take effect on January 1st of next year. If you do not make any changes, your current coverage will automatically renew. We strongly encourage all employees to review their current plans and compare options, as we have added two new health plan options this year with lower deductibles. Detailed information about all available plans has been sent to your company email. If you need assistance comparing plans or have questions about coverage, please contact HR at extension 204. Personalized consultations are also available by appointment.`,
    qs:[
      { q:'When does the open enrollment period end?',
        choices:['November 1st','November 15th','December 31st','January 1st'],
        ans:1, explain:'"Open enrollment begins on November 1st and closes on November 15th" = 報名截止日為 11/15。'},
      { q:'What happens if an employee makes no changes during enrollment?',
        choices:['Their coverage will be canceled','They must reapply for benefits','Their current coverage will renew automatically','They will be assigned a default plan'],
        ans:2, explain:'"your current coverage will automatically renew" = 若不做更改，現有保險自動續保。'},
      { q:'What is new this year regarding health plans?',
        choices:['Lower monthly premiums','Two new plans with lower deductibles','Extended dental coverage','Free vision exams'],
        ans:1, explain:'"we have added two new health plan options this year with lower deductibles" = 新增兩個自付額較低的方案。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'Employees are eligible to use their flexible spending accounts to pay for medical expenses not covered by their insurance _____.',
    choices:['coverage','deductible','premium','referral'], ans:0,
    explain:'保險涵蓋範圍 = insurance coverage，"covered by insurance coverage" 是健康主題最常考的固定說法。' },
  { part:'Part 5', type:'句子填空',
    q:'To see a specialist, most insurance plans require a _____ from your primary care physician.',
    choices:['referral','prescription','checkup','claim'], ans:0,
    explain:'轉診單 = referral，"require a referral from your primary care physician" 是健康保險主題必考句型。' },
  { part:'Part 5', type:'句子填空',
    q:'The company\'s wellness program includes free annual health _____ for all full-time employees.',
    choices:['checkups','premiums','deductibles','coverages'], ans:0,
    explain:'健康檢查 = health checkups，annual health checkup = 年度健康檢查，是健康主題最常考的搭配。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'he-p7',
    passage:`HealthPlus Employee Benefits Guide — Summary of Plans

PLAN A: Basic Coverage
Monthly Premium: $120 (employee share)
Deductible: $1,500 per year
Copayment: $30 per primary care visit / $60 per specialist visit
Coverage: 80% after deductible is met
Dental and Vision: Not included (available as add-ons)

PLAN B: Comprehensive Coverage
Monthly Premium: $210 (employee share)
Deductible: $500 per year
Copayment: $15 per primary care visit / $35 per specialist visit
Coverage: 90% after deductible is met
Dental and Vision: Included
Annual maximum out-of-pocket: $3,000

PLAN C: High-Deductible Health Plan (HDHP)
Monthly Premium: $75 (employee share)
Deductible: $3,000 per year
Coverage: 100% after deductible is met
Copayment: None after deductible
Compatible with Health Savings Account (HSA)

Note: The company contributes 70% of the monthly premium for all plans. The figures above represent the employee's share only.`,
    qs:[
      { q:'Which plan has the lowest monthly cost for employees?',
        choices:['Plan A','Plan B','Plan C','All plans cost the same'],
        ans:2, explain:'"Plan C: Monthly Premium: $75" 是最低的月費，Plan A 是 $120，Plan B 是 $210。'},
      { q:'Which plan includes dental and vision coverage?',
        choices:['Plan A only','Plan B only','Plan C only','All plans'],
        ans:1, explain:'"Plan B: Dental and Vision: Included" = 只有 Plan B 包含牙科和視力保險。'},
      { q:'What is the copayment for a specialist visit under Plan A?',
        choices:['$15','$30','$35','$60'],
        ans:3, explain:'"Plan A: $60 per specialist visit" = Plan A 看專科醫師的自付額為 60 美元。'},
      { q:'What is the company\'s contribution toward monthly premiums?',
        choices:['50%','60%','70%','80%'],
        ans:2, explain:'"The company contributes 70% of the monthly premium for all plans" = 公司支付所有方案 70% 的月費。'},
    ]
  },
],

// ══════════════════════
//  General Business 一般商務篇
// ══════════════════════
general_biz:[
  { part:'Part 3', type:'簡短對話', groupId:'gb-p3',
    passage:`M: I just finished reviewing the proposal for the Henderson account. I think it's strong overall, but I'm concerned about the timeline. We're promising delivery in six weeks, and given our current workload, that might be cutting it close.
W: I thought the same thing. Should we push it to eight weeks? I'd rather underpromise and overdeliver than the opposite.
M: Agreed. Also, section three — the pricing breakdown — needs to be more detailed. The client specifically asked for itemized costs, and right now it's just a lump sum figure.
W: You're right. I'll have the team work on that tomorrow. Any other changes before we present on Friday?
M: The executive summary looks good. I might tweak the opening paragraph to better highlight our competitive advantages. Can I send you a revised version by Wednesday?
W: Sure, that gives us time to finalize everything before the presentation. Let's also schedule a rehearsal on Thursday afternoon.
M: Good idea. I'll book the conference room.`,
    qs:[
      { q:'What concern does the man raise about the proposal?',
        choices:['The pricing is too high','The timeline may be unrealistic','The executive summary is incomplete','The client requirements are unclear'],
        ans:1, explain:'"given our current workload, that might be cutting it close" = 擔心六週的時間太緊迫。'},
      { q:'What does the woman suggest regarding the delivery timeline?',
        choices:['Keep it at six weeks','Change it to eight weeks','Let the client decide','Remove the timeline from the proposal'],
        ans:1, explain:'"Should we push it to eight weeks?" = 建議改成八週，"underpromise and overdeliver" = 保守承諾、超額達成。'},
      { q:'What will happen on Thursday?',
        choices:['The proposal will be submitted','A rehearsal will be held','The client will visit the office','The revised pricing will be sent'],
        ans:1, explain:'"Let\'s also schedule a rehearsal on Thursday afternoon" = 週四下午安排排練。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The new partnership agreement is _____ the terms outlined in the letter of intent signed last month.',
    choices:['in accordance with','in addition to','in contrast with','regardless of'], ans:0,
    explain:'依照…條款 = in accordance with，是商務合約最常見的介系詞片語，As per 也是同義替換。' },
  { part:'Part 5', type:'句子填空',
    q:'We are pleased to announce that our annual _____ exceeded projections by 18% due to strong performance in Asian markets.',
    choices:['revenue','proposal','strategy','feasibility'], ans:0,
    explain:'年度營收 = annual revenue，"exceeded projections by 18%" 是財務成果報告常見句型。' },
  { part:'Part 5', type:'句子填空',
    q:'All stakeholders are _____ to attend the quarterly briefing scheduled for next Thursday morning.',
    choices:['encouraged','required','forbidden','allowed'], ans:0,
    explain:'"encouraged to attend" 表示鼓勵出席（但非強制）= encouraged，是多益常考的商務動詞用法。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'gb-p7',
    passage:`From: Margaret Lau <m.lau@globalventures.com>
To: Thomas Reed <t.reed@primelogistics.com>
Subject: Partnership Proposal — Follow-up

Dear Mr. Reed,

Thank you for meeting with us last Tuesday. We were impressed by Prime Logistics' capabilities and believe a strategic partnership would be mutually beneficial.

Following our discussion, I would like to propose the following framework for collaboration:

SCOPE: Prime Logistics would handle all warehousing and distribution for Global Ventures' product lines in the Asia-Pacific region.

TERM: An initial contract of two years, with the option to renew based on performance metrics.

PRICING: We propose a revenue-sharing model at 12% of net sales handled by Prime Logistics, reviewed quarterly.

EXCLUSIVITY: During the contract period, Global Ventures requests that Prime Logistics not provide the same services to our direct competitors in the electronics sector.

We would like to move forward with drafting a formal agreement. Could you please confirm your availability for a follow-up call next week? I am available Tuesday through Thursday between 9 AM and noon (GMT+8).

Please find attached our due diligence documents and a draft term sheet for your review.

Looking forward to your response.

Best regards,
Margaret Lau
Director of Strategic Partnerships`,
    qs:[
      { q:'What is the proposed length of the initial contract?',
        choices:['One year','Two years','Three years','Five years'],
        ans:1, explain:'"An initial contract of two years, with the option to renew" = 初始合約為兩年。'},
      { q:'How would Prime Logistics be compensated under the proposed arrangement?',
        choices:['A fixed monthly fee','A percentage of net sales','An annual lump sum','Based on the number of deliveries'],
        ans:1, explain:'"a revenue-sharing model at 12% of net sales handled by Prime Logistics" = 按淨銷售額的 12% 分潤。'},
      { q:'What restriction is Global Ventures requesting of Prime Logistics?',
        choices:['Not to expand into new markets','Not to hire from Global Ventures','Not to serve direct competitors in electronics','Not to increase service fees during the contract'],
        ans:2, explain:'"Prime Logistics not provide the same services to our direct competitors in the electronics sector" = 不能為電子業直接競爭對手提供同樣服務。'},
      { q:'What has Margaret Lau attached to the email?',
        choices:['A signed contract','A product catalog','Due diligence documents and a draft term sheet','A financial report'],
        ans:2, explain:'"Please find attached our due diligence documents and a draft term sheet" = 附上盡職調查文件和條款草案。'},
    ]
  },
],

// ══════════════════════
//  Manufacturing 製造業篇
// ══════════════════════
manufacturing:[
  { part:'Part 4', type:'簡短獨白', groupId:'mf-p4',
    passage:`Attention all production staff. This is an important announcement from floor management. As you may be aware, our Q3 output targets have been revised upward by 15% due to increased client demand. To meet this goal, we will be implementing the following changes effective this Monday. First, Line 4 will operate on an extended schedule, running from 6 AM to 10 PM, Monday through Saturday. Second, all quality control inspections will now be conducted at three checkpoints rather than two, to maintain our defect rate below 1.5%. Third, overtime will be available on a voluntary basis. Any production staff interested should notify their shift supervisor by Friday. Please note that all safety protocols remain strictly in place. There will be no exceptions regarding the use of protective equipment. If you have questions about the schedule changes, speak with your supervisor or visit the HR office on Floor 1. We appreciate your continued dedication and hard work.`,
    qs:[
      { q:'Why are production targets being increased?',
        choices:['New government regulations','A merger with another company','Higher client demand','Improved production technology'],
        ans:2, explain:'"due to increased client demand" = 因為客戶需求增加。'},
      { q:'What change is being made to quality control?',
        choices:['Inspections will be reduced to save time','Inspections will increase from two to three checkpoints','A new inspection team will be hired','Inspections will only occur at the end of production'],
        ans:1, explain:'"quality control inspections will now be conducted at three checkpoints rather than two" = 從兩個增加到三個品管檢查點。'},
      { q:'How can production staff sign up for overtime?',
        choices:['Submit a written request to HR','Notify their shift supervisor by Friday','Sign up through the company intranet','Speak with the floor manager on Monday'],
        ans:1, explain:'"Any production staff interested should notify their shift supervisor by Friday" = 週五前告知班長。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The factory received its ISO 9001 certification after demonstrating consistent _____ with international quality management standards.',
    choices:['compliance','defective','throughput','prototype'], ans:0,
    explain:'遵守標準 = compliance with standards，demonstrate compliance 是認證流程的標準說法。' },
  { part:'Part 5', type:'句子填空',
    q:'A product _____ was issued last month after customers reported safety issues with the Model X-500 coffee maker.',
    choices:['recall','defect','assembly','prototype'], ans:0,
    explain:'產品召回 = product recall，issue a recall = 發布召回通知，是製造業主題必考詞彙。' },
  { part:'Part 5', type:'句子填空',
    q:'Production was temporarily halted _____ a malfunction in the main conveyor system.',
    choices:['due to','because','result of','following with'], ans:0,
    explain:'因為…而暫停 = halted due to，due to + 名詞是原因說明的固定搭配。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'mf-p7',
    passage:`QUALITY CONTROL REPORT — Q3 Summary
Brightfield Manufacturing Co.

Overall Performance: SATISFACTORY
Period: July 1 – September 30

PRODUCTION SUMMARY
Total Units Produced: 48,200
Units Passed QC Inspection: 47,156
Defective Units Identified: 1,044
Overall Defect Rate: 2.17%

DEFECT ANALYSIS
The defect rate of 2.17% exceeds our target threshold of 1.5%. Investigation revealed that 68% of defects occurred in the assembly phase and were linked to a miscalibrated machine on Line 3. The issue was identified on August 14th and corrected by August 18th. Units produced during this period (August 14–18) have been quarantined pending further inspection.

CORRECTIVE ACTIONS TAKEN
1. Line 3 equipment has been recalibrated and tested.
2. Calibration checks will now be conducted weekly rather than monthly.
3. Affected units will undergo secondary inspection by a third-party auditor.

RECOMMENDATIONS
To achieve the 1.5% target in Q4, management recommends increasing inspection staff during the first two weeks of the quarter and conducting a staff training refresher on quality protocols.`,
    qs:[
      { q:'What was the defect rate in Q3?',
        choices:['1.5%','2.17%','68%','3.5%'],
        ans:1, explain:'"Overall Defect Rate: 2.17%" 直接列在報告摘要中。'},
      { q:'What was identified as the main cause of defects?',
        choices:['Untrained assembly staff','A software error in the QC system','A miscalibrated machine on Line 3','Poor quality raw materials'],
        ans:2, explain:'"68% of defects occurred in the assembly phase and were linked to a miscalibrated machine on Line 3"。'},
      { q:'How often will calibration checks now be conducted?',
        choices:['Daily','Weekly','Monthly','Quarterly'],
        ans:1, explain:'"Calibration checks will now be conducted weekly rather than monthly" = 由每月改為每週校準。'},
      { q:'What does the report recommend for the beginning of Q4?',
        choices:['Purchasing new equipment','Increasing inspection staff and conducting staff training','Reducing production output','Hiring a new quality control manager'],
        ans:1, explain:'"increasing inspection staff during the first two weeks of the quarter and conducting a staff training refresher" = 增加人員並進行培訓。'},
    ]
  },
],

// ══════════════════════
//  Corporate Development 企業發展篇
// ══════════════════════
corporate:[
  { part:'Part 4', type:'簡短獨白', groupId:'co-p4',
    passage:`Good morning. I'd like to take a few minutes to update everyone on the progress of our planned merger with Pacific Holdings. As you know, we announced the merger in January, and I'm pleased to report that we have received approval from the regulatory authorities ahead of schedule. The merger will officially take effect on July 1st. What does this mean for our team? First, there will be no immediate changes to your roles or compensation. Both organizations are committed to retaining all current staff through the transition period. Second, over the next six months, we will be integrating our IT systems and consolidating certain back-office functions. Some employees may be asked to take on expanded responsibilities during this time. Third, a joint task force has been formed to oversee the transition. Representatives from both companies will be meeting monthly. I want to assure everyone that transparency is our top priority. We will hold town hall meetings quarterly to keep you informed. Please don't hesitate to bring questions to your managers or HR.`,
    qs:[
      { q:'When will the merger officially take effect?',
        choices:['January 1st','April 1st','July 1st','December 1st'],
        ans:2, explain:'"The merger will officially take effect on July 1st" 直接說明合併生效日。'},
      { q:'What does the speaker say about current employees?',
        choices:['Some positions will be eliminated','Roles and compensation will not change immediately','All staff will receive a bonus','Employees will be transferred to the new headquarters'],
        ans:1, explain:'"there will be no immediate changes to your roles or compensation" = 職位和薪酬不會立即改變。'},
      { q:'How often will town hall meetings be held?',
        choices:['Monthly','Bi-monthly','Quarterly','Annually'],
        ans:2, explain:'"We will hold town hall meetings quarterly" = 每季舉辦一次全員大會。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'_____ the merger, all employees from both companies will be transferred to the new headquarters in Dallas.',
    choices:['Following','Despite','Although','Nevertheless'], ans:0,
    explain:'合併後 = Following the merger，Following + 名詞 表示某事件之後，是企業發展主題最常考的句型。' },
  { part:'Part 5', type:'句子填空',
    q:'The board of directors voted unanimously to _____ the acquisition of a leading software company for $2.3 billion.',
    choices:['approve','announce','complete','propose'], ans:0,
    explain:'批准收購 = approve the acquisition，vote to approve 是董事會決議的標準說法。' },
  { part:'Part 5', type:'句子填空',
    q:'As part of the company\'s restructuring, several non-core _____ will be sold to focus on the main business areas.',
    choices:['subsidiaries','shareholders','dividends','headquarters'], ans:0,
    explain:'出售子公司 = sell subsidiaries，non-core subsidiaries = 非核心子公司，是企業發展必考詞彙。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'co-p7',
    passage:`FOR IMMEDIATE RELEASE

NOVEX INDUSTRIES ANNOUNCES ACQUISITION OF CLEARPATH TECHNOLOGIES

San Francisco, CA — Novex Industries (NYSE: NVX) today announced that it has entered into a definitive agreement to acquire ClearPath Technologies, a leading provider of cloud-based supply chain software, for approximately $850 million in cash.

The acquisition is expected to close in the third quarter of this year, subject to regulatory approval and customary closing conditions.

"ClearPath's technology is a perfect complement to our existing logistics platform," said Novex CEO William Park. "This acquisition will significantly enhance our ability to offer end-to-end solutions to our enterprise clients."

ClearPath Technologies, founded in 2015, serves over 400 enterprise clients across North America and Europe. The company reported revenues of $120 million in its most recent fiscal year, representing a 35% year-over-year growth rate.

Following the acquisition, ClearPath will operate as a wholly-owned subsidiary of Novex Industries. ClearPath's current management team, including CEO Anna Brennan, will remain in place.

Novex Industries was advised by Goldman Sachs, and ClearPath was advised by Morgan Stanley in connection with this transaction.`,
    qs:[
      { q:'How much will Novex pay for ClearPath Technologies?',
        choices:['$120 million','$400 million','$850 million','$1.2 billion'],
        ans:2, explain:'"acquire ClearPath Technologies...for approximately $850 million in cash" 直接說明收購金額。'},
      { q:'When is the acquisition expected to be completed?',
        choices:['In the first quarter','In the second quarter','In the third quarter','By end of the year'],
        ans:2, explain:'"expected to close in the third quarter of this year" = 預計在第三季完成。'},
      { q:'What was ClearPath\'s revenue growth rate in its most recent fiscal year?',
        choices:['15%','25%','35%','45%'],
        ans:2, explain:'"representing a 35% year-over-year growth rate" = 年增率 35%。'},
      { q:'What will happen to ClearPath\'s management after the acquisition?',
        choices:['All managers will be replaced','ClearPath will be dissolved','The current management team will remain','Anna Brennan will join Novex\'s board'],
        ans:2, explain:'"ClearPath\'s current management team, including CEO Anna Brennan, will remain in place" = 現有管理團隊留任。'},
    ]
  },
],

// ══════════════════════
//  Technical Areas 技術層面篇
// ══════════════════════
technical:[
  { part:'Part 3', type:'簡短對話', groupId:'te-p3',
    passage:`W: IT support, this is Dana speaking. How can I help you?
M: Hi Dana. I'm having a problem accessing the company intranet. I can connect to the internet fine, but every time I try to log in to the portal, I get an error message saying my credentials are invalid.
W: I see. Have you tried resetting your password recently?
M: I did reset it yesterday, actually. That's when the problem started.
W: That's helpful. There may be a cache issue after the password reset. Could you try clearing your browser cache and cookies, and then attempt to log in again?
M: Sure, give me a moment... Okay, I cleared everything, but I'm still getting the same error message.
W: In that case, your account may have been temporarily locked due to too many failed login attempts. I can unlock it from my end. Can I have your employee ID?
M: It's EMP-4821.
W: Perfect. I've unlocked your account. Please try logging in now, and this time make sure to use your new password without any extra spaces.
M: It worked! Thank you so much.`,
    qs:[
      { q:'What is the man\'s problem?',
        choices:['His computer is broken','He cannot access the internet','He cannot log into the company portal','His email is not working'],
        ans:2, explain:'"every time I try to log in to the portal, I get an error message" = 無法登入公司入口網站。'},
      { q:'What does Dana first suggest trying?',
        choices:['Restarting the computer','Clearing browser cache and cookies','Contacting the IT manager','Reinstalling the browser'],
        ans:1, explain:'"Could you try clearing your browser cache and cookies" = 先嘗試清除快取和 cookies。'},
      { q:'What was the actual cause of the problem?',
        choices:['An expired password','A software virus','Too many failed login attempts locking the account','A network configuration error'],
        ans:2, explain:'"your account may have been temporarily locked due to too many failed login attempts" = 多次登入失敗導致帳號被鎖。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'All employees must complete the cybersecurity awareness training before they can _____ company systems remotely.',
    choices:['access','install','upgrade','backup'], ans:0,
    explain:'存取系統 = access systems，access 是 IT 主題最核心的動詞，常與 system / database / network 搭配。' },
  { part:'Part 5', type:'句子填空',
    q:'The IT department will perform scheduled _____ on the main server from midnight to 4 AM on Sunday.',
    choices:['maintenance','troubleshooting','installation','configuration'], ans:0,
    explain:'例行維護 = scheduled maintenance，perform maintenance 是 IT 公告最常用的說法。' },
  { part:'Part 5', type:'句子填空',
    q:'To protect sensitive data, the company requires all employees to enable two-factor _____ on their accounts.',
    choices:['authentication','encryption','configuration','verification'], ans:0,
    explain:'雙重驗證 = two-factor authentication（2FA），是多益 IT 主題最常考的安全術語。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'te-p7',
    passage:`From: IT Department <it@companymail.com>
To: All Staff
Subject: Planned System Upgrade — Action Required

Dear All,

We will be upgrading our company-wide enterprise resource planning (ERP) system to version 8.2 on Saturday, November 9th, starting at 11 PM and expected to be completed by 6 AM on Sunday, November 10th.

During the maintenance window, the following services will be unavailable:
• Employee self-service portal
• Payroll and expense reporting systems
• Inventory management database
• Internal messaging system

Please ensure you complete all time-sensitive tasks before 9 PM on Saturday.

ACTION REQUIRED:
1. All employees must log out of the ERP system by 10:30 PM on November 9th.
2. Download and save any reports or documents you may need during the outage.
3. For urgent communication needs during the maintenance window, please use your personal email or company mobile phone.
4. After the system comes back online, all users will be required to reset their passwords before logging in.

If you experience any issues after the upgrade is complete, please contact IT support at extension 100 or helpdesk@companymail.com.

Thank you for your cooperation.
IT Department`,
    qs:[
      { q:'When is the system upgrade scheduled to begin?',
        choices:['Saturday at 9 PM','Saturday at 11 PM','Sunday at 6 AM','Sunday at 10:30 PM'],
        ans:1, explain:'"Saturday, November 9th, starting at 11 PM" 直接說明開始時間。'},
      { q:'Which of the following will NOT be available during the upgrade?',
        choices:['Personal email','Company mobile phones','The payroll system','IT support by phone'],
        ans:2, explain:'"Payroll and expense reporting systems" 在停機期間不可用，而個人 email 和公司手機都還能用。'},
      { q:'By what time must employees log out of the system on Saturday?',
        choices:['9 PM','10 PM','10:30 PM','11 PM'],
        ans:2, explain:'"All employees must log out of the ERP system by 10:30 PM on November 9th" 直接說明。'},
      { q:'What will employees need to do after the system comes back online?',
        choices:['Download new software','Contact IT support','Reset their passwords','Complete a system training'],
        ans:2, explain:'"all users will be required to reset their passwords before logging in" = 系統恢復後需要重設密碼。'},
    ]
  },
],

// ══════════════════════
//  Financing 財務金融篇
// ══════════════════════
financing:[
  { part:'Part 3', type:'簡短對話', groupId:'fi-p3',
    passage:`W: The Q3 financial results are in, and I have to say, the numbers are better than expected.
M: Really? I thought the slowdown in our European division would pull down the overall revenue.
W: It did affect us, but the Asia-Pacific region compensated significantly. Overall revenue is up 12% compared to the same period last year.
M: That's great. What about the operating expenses? I know we approved some additional spending for the new marketing campaign.
W: Operating costs increased by 7%, which is within budget. The good news is that our profit margin improved from 14% to 16%.
M: That's a significant improvement. Will this be enough to meet the year-end targets the board set?
W: If Q4 maintains the same trajectory, yes. But we'll need to keep a close eye on currency fluctuations — the strong dollar is affecting our export revenues.
M: Understood. Let's include a currency risk analysis in the Q4 forecast presentation.
W: Already planned. The draft will be ready for your review by Thursday.`,
    qs:[
      { q:'What was the overall revenue change in Q3?',
        choices:['Up 7%','Up 12%','Up 14%','Down 3%'],
        ans:1, explain:'"Overall revenue is up 12% compared to the same period last year" 直接說明。'},
      { q:'How much did the profit margin improve?',
        choices:['From 12% to 14%','From 14% to 16%','From 10% to 14%','From 16% to 18%'],
        ans:1, explain:'"our profit margin improved from 14% to 16%" 直接說明利潤率的改善。'},
      { q:'What does the man suggest including in the Q4 forecast?',
        choices:['A new marketing plan','An analysis of European performance','A currency risk analysis','An updated budget proposal'],
        ans:2, explain:'"Let\'s include a currency risk analysis in the Q4 forecast presentation" = 建議加入貨幣風險分析。'},
    ]
  },
  { part:'Part 5', type:'句子填空',
    q:'The external _____ confirmed that all financial statements were prepared in accordance with generally accepted accounting principles.',
    choices:['audit','budget','dividend','expenditure'], ans:0,
    explain:'外部審計 = external audit，"confirmed that financial statements were prepared in accordance with" 是財務主題常考句型。' },
  { part:'Part 5', type:'句子填空',
    q:'The company has set aside a _____ of $3 million for capital improvements and equipment upgrades next year.',
    choices:['budget','liability','revenue','dividend'], ans:0,
    explain:'撥出預算 = set aside a budget，"set aside + 金額 + for + 用途" 是財務規劃的標準說法。' },
  { part:'Part 5', type:'句子填空',
    q:'Shareholders will receive a _____ of $1.50 per share, payable on December 15th to shareholders of record as of November 30th.',
    choices:['dividend','equity','liability','revenue'], ans:0,
    explain:'股息 = dividend，"dividend per share" 和 "payable on + 日期" 是財務報告必考搭配。' },
  { part:'Part 7', type:'閱讀測驗', groupId:'fi-p7',
    passage:`MERIDIAN FINANCIAL GROUP
Annual Report Highlights — Fiscal Year Summary

To Our Shareholders,

We are pleased to report another strong year for Meridian Financial Group. Total revenue reached $4.8 billion, an increase of 9.3% from the previous fiscal year. Net income grew by 14.2% to $620 million, reflecting improved operational efficiency and disciplined cost management.

KEY FINANCIAL METRICS
• Earnings per share (EPS): $3.82, up from $3.35 last year
• Return on equity (ROE): 18.4%
• Operating expense ratio: 61.2% (improved from 63.8%)
• Dividend per share: $1.20 (increased from $0.95)

STRATEGIC HIGHLIGHTS
This year, we completed the acquisition of Apex Wealth Management, which added $2.1 billion in assets under management. We also expanded our digital banking platform, resulting in a 42% increase in mobile banking users.

OUTLOOK
For the coming fiscal year, we project revenue growth of 7–10%, driven by continued expansion in our retail banking and wealth management divisions. We will continue to invest in technology infrastructure to enhance customer experience and operational efficiency.

We thank our shareholders, clients, and employees for their continued trust and support.

Robert Chen, CEO
Meridian Financial Group`,
    qs:[
      { q:'What was the total revenue for the fiscal year?',
        choices:['$620 million','$2.1 billion','$3.82 billion','$4.8 billion'],
        ans:3, explain:'"Total revenue reached $4.8 billion" 直接列在報告中。'},
      { q:'By how much did the dividend per share increase?',
        choices:['From $0.95 to $1.20','From $1.20 to $3.82','From $3.35 to $3.82','From $3.82 to $4.80'],
        ans:0, explain:'"Dividend per share: $1.20 (increased from $0.95)" = 每股股息從 0.95 增加到 1.20。'},
      { q:'What contributed to the increase in mobile banking users?',
        choices:['Lower banking fees','The acquisition of Apex Wealth','Expansion of the digital banking platform','New branch openings'],
        ans:2, explain:'"expanded our digital banking platform, resulting in a 42% increase in mobile banking users" = 擴展數位銀行平台導致用戶增加。'},
      { q:'What is the projected revenue growth for the next fiscal year?',
        choices:['5–7%','7–10%','9–12%','10–15%'],
        ans:1, explain:'"we project revenue growth of 7–10%" 直接列出預測的成長率範圍。'},
    ]
  },
],

}; // end window.TOPIC_PRACTICE
