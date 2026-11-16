/* =========================================================
   POLITICAL COMPASS
   Simple HTML + CSS + JavaScript edition
   Languages: English / 简体中文 / Bahasa Melayu
========================================================= */

const translations = {
  en: {
    navHome:"Home", navTest:"Political Test", navIdeas:"Ideologies",
    navPolicies:"Policy Explorer", navParties:"Party Comparison",
    navElections:"Election Center", navAbout:"About",
    heroEyebrow:"",
    heroTitle:"Political Compass",
    heroText:"An independent space to explore political ideas, understand public policies and discover different perspectives.",
    startTest:"Start Political Test", exploreIdeas:"Explore Ideas",
    heroNote:"Educational and informational. Not a voting recommendation.",
    introEyebrow:"A SPACE TO EXPLORE",
    introTitle:"Politics is more than one point of view.",
    introText:"Understand the ideas, policies and institutions that shape Malaysia.",
    feature1Title:"Discover your perspectives",
    feature1Text:"Reflect on your views across economic, social, governance and global issues.",
    feature2Title:"Explore political ideas",
    feature2Text:"Learn about political philosophies, their principles, histories and criticisms.",
    feature3Title:"Compare public policies",
    feature3Text:"Examine policy proposals and compare publicly available party positions.",
    learnMore:"Learn more →",
    testEyebrow:"POLITICAL SELF-REFLECTION",
    testTitle:"Discover your political profile.",
    testIntro:"Answer a series of statements. There are no right or wrong answers.",
    testStartTitle:"A broader look at your views.",
    testStartText:"The test covers government, economy, taxation, welfare, democracy, civil liberties, society, justice, security, foreign policy, environment and technology.",
    begin:"Begin",
    privacyNote:"Your answers stay in this browser in this demo. Avoid using a shared device if you want to keep them private.",
    skip:"Skip", previous:"Previous", next:"Next",
    resultEyebrow:"YOUR REFLECTION", resultTitle:"Your political profile",
    resultDisclaimer:"This is an educational reflection, not a scientific diagnosis or a recommendation about whom to vote for.",
    restart:"Retake test",
    ideasEyebrow:"POLITICAL PHILOSOPHY",
    ideasTitle:"Ideas that shape political thought.",
    ideasText:"An introduction to influential political traditions and their different approaches to society.",
    policyEyebrow:"PUBLIC POLICY",
    policyTitle:"Explore the issues that matter.",
    policyText:"Understand policy areas, questions and trade-offs in public decision-making.",
    policySearch:"Search policies...", allCategories:"All categories",
    partyEyebrow:"MALAYSIAN POLITICS",
    partyTitle:"Compare political parties.",
    partyText:"Compare published positions using transparent sources. Missing information is shown clearly.",
    selectParty1:"Party 1", selectParty2:"Party 2",
    partyDisclaimer:"This comparison presents documented information, not an endorsement or voting recommendation.",
    electionEyebrow:"DEMOCRATIC PROCESS",
    electionTitle:"Malaysia Election Center.",
    electionText:"Learn about general elections, state elections, by-elections and the electoral process.",
    election1Title:"General Elections",
    election1Text:"Explore the role of Parliament and the process of electing federal representatives.",
    election2Title:"State Elections",
    election2Text:"Understand state legislative assemblies and state-level representation.",
    election3Title:"By-Elections",
    election3Text:"Learn why a by-election takes place and how a vacant seat is filled.",
    officialSource:"Official election information",
    sourceText:"For verified election dates, results and constituency information, consult Malaysia's Election Commission.",
    aboutEyebrow:"ABOUT THIS PROJECT",
    aboutTitle:"Independent. Informative. Transparent.",
    aboutText:"Political Compass is designed as an educational platform for exploring political ideas and public information in Malaysia.",
    principle1Title:"Political neutrality",
    principle1Text:"The platform does not promote a political party, candidate or ideology.",
    principle2Title:"Source transparency",
    principle2Text:"Political claims and policy positions should be linked to identifiable sources and dates.",
    principle3Title:"Room for complexity",
    principle3Text:"Political views can be mixed, uncertain or changing. A single label cannot describe every person.",
    methodText:"The political test is an educational self-reflection tool. Its dimensions and scoring model are simplified and should not be treated as a validated psychological or scientific instrument.",
    footerText:"An independent space for political learning and understanding.",
    stronglyAgree:"Strongly Agree", agree:"Agree", neutral:"Neutral / Unsure",
    disagree:"Disagree", stronglyDisagree:"Strongly Disagree",
    skipped:"Not answered", completed:"Completed",
    resultIntro:"Your answers suggest a combination of views. The scores below describe tendencies in your responses, not a fixed political identity.",
    economic:"Economic", authority:"Authority & Governance",
    social:"Social & Civil Liberties", global:"Global & Environment",
    left:"More economically interventionist", right:"More market-oriented",
    liberty:"More emphasis on individual liberty", order:"More emphasis on authority and order",
    open:"More socially open", traditional:"More socially traditional",
    international:"More internationally cooperative", sovereignty:"More sovereignty-focused",
    noData:"No verified information has been added yet.",
    sourcePending:"Source verification pending",
    viewDetails:"View details",
    noResults:"No matching policies found.",
    categoryGovernment:"Government", categoryEconomy:"Economy",
    categoryTaxation:"Taxation", categoryWelfare:"Welfare",
    categoryDemocracy:"Democracy", categoryLiberties:"Civil Liberties",
    categorySociety:"Social & Culture", categoryJustice:"Justice",
    categorySecurity:"National Security", categoryForeign:"Foreign Policy",
    categoryEnvironment:"Environment", categoryTechnology:"Technology",
    sourceLabel:"Source", positionLabel:"Published position",
    noPosition:"No verified party position entered."
  },

  "zh-CN": {
    navHome:"首页", navTest:"政治测试", navIdeas:"政治理念",
    navPolicies:"政策探索", navParties:"政党比较",
    navElections:"选举中心", navAbout:"关于我们",
    heroEyebrow:"",
    heroTitle:"Political Compass",
    heroText:"一个独立的空间，探索政治理念、理解公共政策，并认识不同观点。",
    startTest:"开始政治测试", exploreIdeas:"探索政治理念",
    heroNote:"仅供教育与资讯参考，不提供投票建议。",
    introEyebrow:"探索政治的空间",
    introTitle:"政治，从来不只有一种观点。",
    introText:"认识影响马来西亚的政治理念、公共政策与制度。",
    feature1Title:"认识自己的观点",
    feature1Text:"从经济、社会、治理与国际议题，反思自己的立场。",
    feature2Title:"探索政治理念",
    feature2Text:"认识不同政治思想的原则、历史背景与相关批评。",
    feature3Title:"比较公共政策",
    feature3Text:"了解政策提案，并比较公开可查的政党立场。",
    learnMore:"了解更多 →",
    testEyebrow:"政治观点探索",
    testTitle:"认识自己的政治观点。",
    testIntro:"阅读陈述并表达你的看法。没有标准答案。",
    testStartTitle:"从更多维度认识自己的观点。",
    testStartText:"测试涵盖政府、经济、税收、福利、民主、公民自由、社会文化、司法、国家安全、外交、环境与科技。",
    begin:"开始测试",
    privacyNote:"此示范版本会将答案保留在当前浏览器。若希望保护隐私，请避免在共用设备上使用。",
    skip:"跳过", previous:"上一题", next:"下一题",
    resultEyebrow:"你的观点分析", resultTitle:"你的政治观点概览",
    resultDisclaimer:"这是一项教育性质的自我探索，不是科学诊断，也不是投票建议。",
    restart:"重新测试",
    ideasEyebrow:"政治哲学",
    ideasTitle:"影响政治思想的重要理念。",
    ideasText:"认识具有影响力的政治思想传统，以及它们对社会的不同理解。",
    policyEyebrow:"公共政策",
    policyTitle:"探索重要公共议题。",
    policyText:"了解公共政策领域、社会争议，以及公共决策中的不同取舍。",
    policySearch:"搜索政策议题...", allCategories:"所有类别",
    partyEyebrow:"马来西亚政治",
    partyTitle:"比较马来西亚政党。",
    partyText:"根据公开资料比较政党立场。尚未核实的资料会明确标示。",
    selectParty1:"政党一", selectParty2:"政党二",
    partyDisclaimer:"本比较仅呈现有资料支持的内容，不代表支持任何政党，也不提供投票建议。",
    electionEyebrow:"民主程序",
    electionTitle:"马来西亚选举中心。",
    electionText:"认识全国大选、州选举、补选及马来西亚选举制度。",
    election1Title:"全国大选",
    election1Text:"了解国会的角色，以及联邦民意代表的选举程序。",
    election2Title:"州选举",
    election2Text:"认识州立法议会与州级民意代表制度。",
    election3Title:"补选",
    election3Text:"了解补选发生的原因，以及议席空缺的填补程序。",
    officialSource:"官方选举资料",
    sourceText:"有关经核实的选举日期、成绩与选区资料，请参考马来西亚选举委员会。",
    aboutEyebrow:"关于本项目",
    aboutTitle:"独立、资讯与透明。",
    aboutText:"Political Compass 是一个以马来西亚为重点的政治理念与公共资讯教育平台。",
    principle1Title:"政治中立",
    principle1Text:"本平台不宣传任何政党、候选人或政治意识形态。",
    principle2Title:"资料来源透明",
    principle2Text:"政治主张与政策立场应附上可识别的来源及日期。",
    principle3Title:"尊重观点的复杂性",
    principle3Text:"政治观点可能混合、不确定或随时间改变，单一标签无法代表一个人的全部想法。",
    methodText:"政治测试仅供教育与自我反思。其维度和评分方式经过简化，并非经过科学验证的心理或政治测量工具。",
    footerText:"一个独立的政治学习与理解空间。",
    stronglyAgree:"非常同意", agree:"同意", neutral:"中立／不确定",
    disagree:"不同意", stronglyDisagree:"非常不同意",
    skipped:"未回答", completed:"已完成",
    resultIntro:"你的答案呈现出多方面的观点组合。以下分数反映回答倾向，并不代表固定的政治身份。",
    economic:"经济", authority:"权力与治理",
    social:"社会与公民自由", global:"国际与环境",
    left:"较倾向政府经济干预", right:"较倾向市场机制",
    liberty:"较重视个人自由", order:"较重视权威与秩序",
    open:"较倾向社会开放", traditional:"较倾向社会传统",
    international:"较重视国际合作", sovereignty:"较重视国家主权",
    noData:"目前尚未加入经过核实的资料。",
    sourcePending:"资料来源待核实",
    viewDetails:"查看详情",
    noResults:"找不到符合条件的政策议题。",
    categoryGovernment:"政府", categoryEconomy:"经济",
    categoryTaxation:"税收", categoryWelfare:"社会福利",
    categoryDemocracy:"民主", categoryLiberties:"公民自由",
    categorySociety:"社会与文化", categoryJustice:"司法",
    categorySecurity:"国家安全", categoryForeign:"外交政策",
    categoryEnvironment:"环境", categoryTechnology:"科技",
    sourceLabel:"资料来源", positionLabel:"公开立场",
    noPosition:"尚未加入经过核实的政党立场。"
  },

  ms: {
    navHome:"Utama", navTest:"Ujian Politik", navIdeas:"Ideologi",
    navPolicies:"Penerokaan Dasar", navParties:"Perbandingan Parti",
    navElections:"Pusat Pilihan Raya", navAbout:"Tentang",
    heroEyebrow:"",
    heroTitle:"Political Compass",
    heroText:"Ruang bebas untuk meneroka idea politik, memahami dasar awam dan mengenali pelbagai perspektif.",
    startTest:"Mulakan Ujian Politik", exploreIdeas:"Terokai Idea",
    heroNote:"Untuk pendidikan dan maklumat. Bukan cadangan mengundi.",
    introEyebrow:"RUANG UNTUK MENEROKA",
    introTitle:"Politik mempunyai pelbagai sudut pandangan.",
    introText:"Fahami idea, dasar dan institusi yang membentuk Malaysia.",
    feature1Title:"Kenali perspektif anda",
    feature1Text:"Fikirkan pandangan anda tentang ekonomi, masyarakat, tadbir urus dan isu global.",
    feature2Title:"Terokai idea politik",
    feature2Text:"Pelajari falsafah politik, prinsip, sejarah dan kritikan terhadapnya.",
    feature3Title:"Bandingkan dasar awam",
    feature3Text:"Teliti cadangan dasar dan bandingkan pendirian parti yang diterbitkan.",
    learnMore:"Ketahui lagi →",
    testEyebrow:"REFLEKSI POLITIK",
    testTitle:"Kenali profil politik anda.",
    testIntro:"Jawab beberapa pernyataan. Tiada jawapan betul atau salah.",
    testStartTitle:"Lihat pandangan anda daripada pelbagai dimensi.",
    testStartText:"Ujian ini merangkumi kerajaan, ekonomi, cukai, kebajikan, demokrasi, kebebasan awam, masyarakat, keadilan, keselamatan, dasar luar, alam sekitar dan teknologi.",
    begin:"Mula",
    privacyNote:"Dalam versi demo ini, jawapan kekal dalam pelayar semasa. Elakkan peranti kongsi jika anda mahu mengekalkan privasi.",
    skip:"Langkau", previous:"Sebelumnya", next:"Seterusnya",
    resultEyebrow:"REFLEKSI ANDA", resultTitle:"Profil politik anda",
    resultDisclaimer:"Ini ialah refleksi pendidikan, bukan diagnosis saintifik atau cadangan tentang siapa yang patut diundi.",
    restart:"Ulang ujian",
    ideasEyebrow:"FALSAFAH POLITIK",
    ideasTitle:"Idea yang membentuk pemikiran politik.",
    ideasText:"Pengenalan kepada tradisi politik berpengaruh dan pendekatan berbeza terhadap masyarakat.",
    policyEyebrow:"DASAR AWAM",
    policyTitle:"Terokai isu yang penting.",
    policyText:"Fahami bidang dasar, persoalan dan pertimbangan dalam membuat keputusan awam.",
    policySearch:"Cari dasar...", allCategories:"Semua kategori",
    partyEyebrow:"POLITIK MALAYSIA",
    partyTitle:"Bandingkan parti politik.",
    partyText:"Bandingkan pendirian yang diterbitkan menggunakan sumber telus. Maklumat yang tiada akan ditandakan.",
    selectParty1:"Parti 1", selectParty2:"Parti 2",
    partyDisclaimer:"Perbandingan ini memaparkan maklumat yang didokumenkan, bukan sokongan atau cadangan mengundi.",
    electionEyebrow:"PROSES DEMOKRASI",
    electionTitle:"Pusat Pilihan Raya Malaysia.",
    electionText:"Pelajari pilihan raya umum, pilihan raya negeri, pilihan raya kecil dan proses pilihan raya.",
    election1Title:"Pilihan Raya Umum",
    election1Text:"Terokai peranan Parlimen dan proses memilih wakil persekutuan.",
    election2Title:"Pilihan Raya Negeri",
    election2Text:"Fahami dewan undangan negeri dan perwakilan di peringkat negeri.",
    election3Title:"Pilihan Raya Kecil",
    election3Text:"Ketahui sebab pilihan raya kecil diadakan dan cara kerusi kosong diisi.",
    officialSource:"Maklumat pilihan raya rasmi",
    sourceText:"Untuk tarikh, keputusan dan maklumat kawasan pilihan raya yang disahkan, rujuk Suruhanjaya Pilihan Raya Malaysia.",
    aboutEyebrow:"TENTANG PROJEK INI",
    aboutTitle:"Bebas. Bermaklumat. Telus.",
    aboutText:"Political Compass ialah platform pendidikan untuk meneroka idea politik dan maklumat awam di Malaysia.",
    principle1Title:"Neutraliti politik",
    principle1Text:"Platform ini tidak mempromosikan mana-mana parti, calon atau ideologi.",
    principle2Title:"Ketelusan sumber",
    principle2Text:"Dakwaan politik dan pendirian dasar perlu disertakan sumber dan tarikh yang boleh dikenal pasti.",
    principle3Title:"Menghormati kerumitan",
    principle3Text:"Pandangan politik boleh bercampur, tidak pasti atau berubah. Satu label tidak dapat menggambarkan seseorang sepenuhnya.",
    methodText:"Ujian politik ini ialah alat refleksi pendidikan. Dimensi dan pemarkahannya dipermudah dan bukan instrumen psikologi atau saintifik yang telah disahkan.",
    footerText:"Ruang bebas untuk pembelajaran dan pemahaman politik.",
    stronglyAgree:"Sangat Setuju", agree:"Setuju", neutral:"Neutral / Tidak Pasti",
    disagree:"Tidak Setuju", stronglyDisagree:"Sangat Tidak Setuju",
    skipped:"Tidak dijawab", completed:"Selesai",
    resultIntro:"Jawapan anda menunjukkan gabungan pandangan. Skor ini menggambarkan kecenderungan jawapan, bukan identiti politik tetap.",
    economic:"Ekonomi", authority:"Kuasa & Tadbir Urus",
    social:"Masyarakat & Kebebasan Awam", global:"Global & Alam Sekitar",
    left:"Lebih cenderung kepada campur tangan ekonomi kerajaan", right:"Lebih cenderung kepada mekanisme pasaran",
    liberty:"Lebih menekankan kebebasan individu", order:"Lebih menekankan kuasa dan ketertiban",
    open:"Lebih terbuka dari segi sosial", traditional:"Lebih tradisional dari segi sosial",
    international:"Lebih mengutamakan kerjasama antarabangsa", sovereignty:"Lebih mengutamakan kedaulatan negara",
    noData:"Tiada maklumat yang telah disahkan dimasukkan buat masa ini.",
    sourcePending:"Pengesahan sumber belum selesai",
    viewDetails:"Lihat butiran",
    noResults:"Tiada dasar yang sepadan ditemui.",
    categoryGovernment:"Kerajaan", categoryEconomy:"Ekonomi",
    categoryTaxation:"Percukaian", categoryWelfare:"Kebajikan",
    categoryDemocracy:"Demokrasi", categoryLiberties:"Kebebasan Awam",
    categorySociety:"Masyarakat & Budaya", categoryJustice:"Keadilan",
    categorySecurity:"Keselamatan Negara", categoryForeign:"Dasar Luar",
    categoryEnvironment:"Alam Sekitar", categoryTechnology:"Teknologi",
    sourceLabel:"Sumber", positionLabel:"Pendirian diterbitkan",
    noPosition:"Tiada pendirian parti yang telah disahkan dimasukkan."
  }
};

/* ---------- LANGUAGE ---------- */

let currentLanguage = localStorage.getItem("pc-language") || "en";

function t(key) {
  return translations[currentLanguage]?.[key] ??
         translations.en[key] ??
         key;
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  localStorage.setItem("pc-language", currentLanguage);

  document.documentElement.lang =
    currentLanguage === "zh-CN" ? "zh-CN" : currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) {
      element.innerHTML = t(key);
    }
  });

  document.querySelector("#languageSelect").value = currentLanguage;

  document.querySelectorAll(".language-option").forEach(button => {
    const selected = button.dataset.language === currentLanguage;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  renderQuestions();
  renderIdeologies();
  renderPolicies();
  renderPartyComparison();
  updateQuestionView();
}

document.querySelector("#languageSelect").addEventListener("change", event => {
  setLanguage(event.target.value);
});

document.querySelectorAll(".language-option").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

/* ---------- DARK MODE ---------- */

const themeToggle = document.querySelector("#themeToggle");

if (localStorage.getItem("pc-theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "pc-theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

/* ---------- MOBILE MENU ---------- */

document.querySelector("#menuToggle").addEventListener("click", () => {
  document.querySelector("#mainNav").classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("#mainNav").classList.remove("open");
  });
});

/* ---------- QUESTION BANK ---------- */

/*
  These are starter questions generated across 12 topics.
  Before public launch, review each question for balance,
  clarity, cultural context and scoring suitability.
*/

const topicDefinitions = [
  {
    id:"government", key:"categoryGovernment",
    axis:"authority",
    en:"Government institutions should be transparent and accountable to the public.",
    zh:"政府机构应向公众保持透明，并承担问责责任。",
    ms:"Institusi kerajaan perlu telus dan bertanggungjawab kepada orang ramai."
  },
  {
    id:"economy", key:"categoryEconomy",
    axis:"economic",
    en:"The government should play an active role in reducing economic inequality.",
    zh:"政府应积极减少经济不平等。",
    ms:"Kerajaan perlu memainkan peranan aktif dalam mengurangkan ketidaksamaan ekonomi."
  },
  {
    id:"taxation", key:"categoryTaxation",
    axis:"economic",
    en:"People with higher incomes should generally contribute a larger share of their income in taxes.",
    zh:"高收入人士一般应承担较高比例的税务。",
    ms:"Golongan berpendapatan tinggi secara umumnya perlu membayar bahagian cukai yang lebih besar."
  },
  {
    id:"welfare", key:"categoryWelfare",
    axis:"economic",
    en:"Public services should ensure that essential support is available to people who need it.",
    zh:"公共服务应确保有需要的人能够获得基本援助。",
    ms:"Perkhidmatan awam perlu memastikan bantuan asas tersedia kepada mereka yang memerlukannya."
  },
  {
    id:"democracy", key:"categoryDemocracy",
    axis:"authority",
    en:"Citizens should have meaningful opportunities to participate in public decision-making.",
    zh:"公民应有实质机会参与公共决策。",
    ms:"Rakyat perlu mempunyai peluang bermakna untuk mengambil bahagian dalam keputusan awam."
  },
  {
    id:"liberties", key:"categoryLiberties",
    axis:"social",
    en:"Protecting freedom of expression should be a high priority, even when opinions are unpopular.",
    zh:"即使某些观点不受欢迎，保障言论自由仍应是重要优先事项。",
    ms:"Melindungi kebebasan bersuara perlu menjadi keutamaan walaupun pandangan itu tidak popular."
  },
  {
    id:"society", key:"categorySociety",
    axis:"social",
    en:"People should generally be free to make personal lifestyle choices without unnecessary government interference.",
    zh:"人们通常应能自由作出个人生活选择，而不受不必要的政府干预。",
    ms:"Orang ramai seharusnya bebas membuat pilihan gaya hidup peribadi tanpa campur tangan kerajaan yang tidak perlu."
  },
  {
    id:"justice", key:"categoryJustice",
    axis:"authority",
    en:"The justice system should apply the law equally regardless of a person's wealth or status.",
    zh:"司法制度应平等适用法律，不因个人财富或社会地位而有所不同。",
    ms:"Sistem keadilan perlu melaksanakan undang-undang secara sama rata tanpa mengira kekayaan atau kedudukan seseorang."
  },
  {
    id:"security", key:"categorySecurity",
    axis:"authority",
    en:"National security measures should be subject to independent oversight and legal safeguards.",
    zh:"国家安全措施应受到独立监督与法律保障。",
    ms:"Langkah keselamatan negara perlu tertakluk kepada pengawasan bebas dan perlindungan undang-undang."
  },
  {
    id:"foreign", key:"categoryForeign",
    axis:"global",
    en:"Malaysia should actively cooperate with other countries to address shared international challenges.",
    zh:"马来西亚应积极与其他国家合作，应对共同的国际挑战。",
    ms:"Malaysia perlu bekerjasama secara aktif dengan negara lain untuk menangani cabaran antarabangsa bersama."
  },
  {
    id:"environment", key:"categoryEnvironment",
    axis:"global",
    en:"Environmental protection should be considered in major economic and infrastructure decisions.",
    zh:"重大经济与基础设施决策应考虑环境保护。",
    ms:"Perlindungan alam sekitar perlu dipertimbangkan dalam keputusan ekonomi dan infrastruktur utama."
  },
  {
    id:"technology", key:"categoryTechnology",
    axis:"global",
    en:"The use of artificial intelligence in important public decisions should be transparent and accountable.",
    zh:"人工智能用于重要公共决策时，应保持透明并承担问责责任。",
    ms:"Penggunaan kecerdasan buatan dalam keputusan awam penting perlu telus dan bertanggungjawab."
  }
];

/*
  Ten variations for each topic create 120 questions.
  The statements are deliberately framed as broad civic principles.
  They are starter content and should receive editorial review.
*/

const variations = [
  {
    en:"Public institutions should publish clear explanations for important decisions.",
    zh:"公共机构应为重要决策提供清楚的说明。",
    ms:"Institusi awam perlu menerbitkan penjelasan yang jelas bagi keputusan penting."
  },
  {
    en:"Long-term public interests should be considered alongside short-term benefits.",
    zh:"公共决策应同时考虑长期公共利益与短期效益。",
    ms:"Kepentingan awam jangka panjang perlu dipertimbangkan bersama manfaat jangka pendek."
  },
  {
    en:"People affected by a policy should have opportunities to express their views.",
    zh:"受到政策影响的人应有机会表达意见。",
    ms:"Mereka yang terjejas oleh sesuatu dasar perlu diberi peluang untuk menyuarakan pandangan."
  },
  {
    en:"Public decisions should be supported by reliable evidence and clear reasoning.",
    zh:"公共决策应有可靠证据与清楚的推理作为依据。",
    ms:"Keputusan awam perlu disokong oleh bukti yang boleh dipercayai dan alasan yang jelas."
  },
  {
    en:"The government should explain how public resources are used.",
    zh:"政府应说明公共资源的使用方式。",
    ms:"Kerajaan perlu menjelaskan cara sumber awam digunakan."
  },
  {
    en:"Policies should be reviewed when evidence shows that they are not achieving their goals.",
    zh:"当证据显示政策未能达成目标时，应重新检讨政策。",
    ms:"Dasar perlu dikaji semula apabila bukti menunjukkan matlamatnya tidak tercapai."
  },
  {
    en:"Public institutions should consider the needs of minority communities.",
    zh:"公共机构应考虑少数群体的需要。",
    ms:"Institusi awam perlu mengambil kira keperluan komuniti minoriti."
  },
  {
    en:"Major policy changes should include a clear explanation of possible trade-offs.",
    zh:"重大政策改变应清楚说明可能涉及的取舍。",
    ms:"Perubahan dasar utama perlu disertakan penjelasan tentang kemungkinan pertimbangannya."
  },
  {
    en:"Independent oversight can help improve public trust in institutions.",
    zh:"独立监督有助于提升公众对机构的信任。",
    ms:"Pengawasan bebas boleh membantu meningkatkan kepercayaan awam terhadap institusi."
  },
  {
    en:"Public policy should be evaluated by its actual outcomes, not only its stated intentions.",
    zh:"公共政策应根据实际成果评估，而不只是依据其宣称的目标。",
    ms:"Dasar awam perlu dinilai berdasarkan hasil sebenar, bukan hanya niat yang dinyatakan."
  }
];

const questions = [];

topicDefinitions.forEach(topic => {
  variations.forEach((variation, index) => {
    questions.push({
      id:`${topic.id}-${index + 1}`,
      topic:topic.id,
      topicKey:topic.key,
      axis:topic.axis,
      text:{
        en:index === 0 ? topic.en : variation.en,
        "zh-CN":index === 0 ? topic.zh : variation.zh,
        ms:index === 0 ? topic.ms : variation.ms
      }
    });
  });
});

/* ---------- TEST ENGINE ---------- */

const answerOptions = [
  {value:2, key:"stronglyAgree"},
  {value:1, key:"agree"},
  {value:0, key:"neutral"},
  {value:-1, key:"disagree"},
  {value:-2, key:"stronglyDisagree"}
];

let currentQuestion = 0;
let answers = {};
let testStarted = false;
let answerLocked = false;
let questionTransitionTimer = null;

const testStart = document.querySelector("#testStart");
const testQuestion = document.querySelector("#testQuestion");
const testResult = document.querySelector("#testResult");

document.querySelector("#beginTest").addEventListener("click", () => {
  testStarted = true;
  currentQuestion = 0;
  answers = {};
  testStart.classList.add("hidden");
  testResult.classList.add("hidden");
  testQuestion.classList.remove("hidden");
  updateQuestionView();
});

function getQuestionText(question) {
  return question.text[currentLanguage] || question.text.en;
}

function renderQuestions() {
  if (testStarted) updateQuestionView();
}

function updateQuestionView() {
  if (!testStarted) return;

  const question = questions[currentQuestion];

  document.querySelector("#questionCategory").textContent = t(question.topicKey);
  answerLocked = false;
  document.querySelector("#questionCounter").textContent =
    `${currentQuestion + 1} / ${questions.length}`;
  const percentage = Math.round(((currentQuestion + 1) / questions.length) * 100);
  document.querySelector("#questionPercent").textContent = `${percentage}%`;
  document.querySelector("#progressFill").style.width = `${percentage}%`;
  document.querySelector("#questionProgress").setAttribute("aria-valuenow", currentQuestion + 1);
  document.querySelector("#questionProgress").setAttribute("aria-valuemax", questions.length);

  document.querySelector("#questionText").textContent = getQuestionText(question);

  const list = document.querySelector("#answerList");
  list.innerHTML = "";

  answerOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.dataset.value = option.value;
    button.innerHTML = `<span class="answer-marker" aria-hidden="true">${["＋＋", "＋", "—", "−", "−−"][index]}</span><span class="answer-label">${t(option.key)}</span><span class="answer-arrow" aria-hidden="true">↗</span>`;

    if (answers[question.id] === option.value) {
      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", () => {
      if (answerLocked) return;
      answers[question.id] = option.value;
      answerLocked = true;
      button.classList.add("selected", "answer-confirmed");
      button.setAttribute("aria-pressed", "true");

      if (currentQuestion === questions.length - 1) {
        window.setTimeout(() => showResults(), 220);
      } else {
        const content = document.querySelector("#questionContent");
        content.classList.add("question-leaving");
        window.setTimeout(() => {
          currentQuestion++;
          updateQuestionView();
          content.classList.remove("question-leaving");
        }, 190);
      }
    });

    list.appendChild(button);
  });

  document.querySelector("#previousQuestion").disabled = currentQuestion === 0;
}

document.querySelector("#previousQuestion").addEventListener("click", () => {
  if (questionTransitionTimer) window.clearTimeout(questionTransitionTimer);
  answerLocked = false;
  if (currentQuestion > 0) {
    currentQuestion--;
    updateQuestionView();
  }
});

document.querySelector("#skipQuestion").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showResults();
  } else {
    updateQuestionView();
  }
});

/* ---------- SCORING ---------- */

/*
  Four broad dimensions:
  Economic: Economy, Taxation, Welfare
  Authority: Government, Democracy, Justice, Security
  Social: Civil Liberties, Social & Culture
  Global: Foreign Policy, Environment, Technology

  Score range is converted to 0–100 for display.
  This is a simple prototype scoring model, not a validated scale.
*/

const axisDefinitions = {
  economic:{
    label:"economic",
    topics:["economy","taxation","welfare"],
    low:"left", high:"right"
  },
  authority:{
    label:"authority",
    topics:["government","democracy","justice","security"],
    low:"liberty", high:"order"
  },
  social:{
    label:"social",
    topics:["liberties","society"],
    low:"open", high:"traditional"
  },
  global:{
    label:"global",
    topics:["foreign","environment","technology"],
    low:"international", high:"sovereignty"
  }
};

function calculateResults() {
  const results = {};

  Object.entries(axisDefinitions).forEach(([axis, definition]) => {
    let total = 0;
    let count = 0;

    questions.forEach(question => {
      if (
        definition.topics.includes(question.topic) &&
        Object.prototype.hasOwnProperty.call(answers, question.id)
      ) {
        total += answers[question.id];
        count++;
      }
    });

    const possible = definition.topics.reduce((sum, topic) => {
      return sum + questions.filter(q => q.topic === topic).length;
    }, 0);

    const average = count ? total / count : 0;
    const percentage = Math.round(((average + 2) / 4) * 100);

    results[axis] = {
      average,
      percentage,
      answered:count,
      possible,
      completion:possible ? Math.round(count / possible * 100) : 0
    };
  });

  return results;
}

function showResults() {
  testQuestion.classList.add("hidden");
  testResult.classList.remove("hidden");

  const results = calculateResults();
  const answered = Object.keys(answers).length;

  document.querySelector("#resultSummary").textContent =
    `${t("resultIntro")} ${answered} / ${questions.length} ${t("completed")}.`;

  const container = document.querySelector("#resultDimensions");
  container.innerHTML = "";

  Object.entries(results).forEach(([axis, result]) => {
    const row = document.createElement("div");
    row.className = "dimension-row";

    const label = document.createElement("strong");
    label.textContent = t(axisDefinitions[axis].label);

    const bar = document.createElement("div");
    bar.className = "dimension-bar";

    const fill = document.createElement("span");
    fill.style.width = `${result.percentage}%`;
    bar.appendChild(fill);

    const score = document.createElement("span");
    score.textContent = `${result.percentage}%`;

    row.append(label, bar, score);
    container.appendChild(row);

    const explanation = document.createElement("p");
    explanation.className = "small-note";
    explanation.textContent =
      `${t(axisDefinitions[axis].low)} ← → ${t(axisDefinitions[axis].high)} · ` +
      `${result.answered}/${result.possible} answered`;

    container.appendChild(explanation);
  });

  localStorage.setItem("pc-last-result", JSON.stringify({
    answers,
    results,
    date:new Date().toISOString()
  }));
}

document.querySelector("#restartTest").addEventListener("click", () => {
  currentQuestion = 0;
  answers = {};
  testStarted = false;
  testResult.classList.add("hidden");
  testQuestion.classList.add("hidden");
  testStart.classList.remove("hidden");
});

/* ---------- IDEOLOGIES ---------- */

const ideologies = [
  {
    name:{
      en:"Liberalism",
      "zh-CN":"自由主义",
      ms:"Liberalisme"
    },
    category:{
      en:"POLITICAL PHILOSOPHY",
      "zh-CN":"政治哲学",
      ms:"FALSAFAH POLITIK"
    },
    description:{
      en:"A broad political tradition emphasizing individual liberty, rights, consent and limits on arbitrary power. Different forms of liberalism disagree about the role of markets and the state.",
      "zh-CN":"一种强调个人自由、权利、政治同意及限制任意权力的政治传统。不同流派对于市场与政府角色有不同理解。",
      ms:"Tradisi politik yang menekankan kebebasan individu, hak, persetujuan dan batas terhadap kuasa sewenang-wenangnya. Aliran liberalisme berbeza dalam pandangan tentang pasaran dan peranan negara."
    }
  },
  {
    name:{en:"Conservatism","zh-CN":"保守主义",ms:"Konservatisme"},
    category:{en:"POLITICAL PHILOSOPHY","zh-CN":"政治哲学",ms:"FALSAFAH POLITIK"},
    description:{
      en:"A tradition that often values continuity, inherited institutions, social stability and gradual change. Conservative approaches differ across countries and historical periods.",
      "zh-CN":"一种通常重视社会延续、传统制度、社会稳定与渐进改革的政治传统。保守主义在不同国家与历史时期有不同形式。",
      ms:"Tradisi yang sering menghargai kesinambungan, institusi warisan, kestabilan sosial dan perubahan beransur-ansur. Pendekatan konservatif berbeza mengikut negara dan zaman."
    }
  },
  {
    name:{en:"Socialism","zh-CN":"社会主义",ms:"Sosialisme"},
    category:{en:"POLITICAL PHILOSOPHY","zh-CN":"政治哲学",ms:"FALSAFAH POLITIK"},
    description:{
      en:"A family of ideas concerned with economic equality, social ownership or control, workers' interests and the distribution of economic power. Its traditions vary widely.",
      "zh-CN":"一系列关注经济平等、社会所有权或控制权、劳动者利益及经济权力分配的思想传统，其内部流派相当多元。",
      ms:"Kumpulan idea yang berkaitan dengan kesamarataan ekonomi, pemilikan atau kawalan sosial, kepentingan pekerja dan pengagihan kuasa ekonomi."
    }
  },
  {
    name:{en:"Social Democracy","zh-CN":"社会民主主义",ms:"Demokrasi Sosial"},
    category:{en:"POLITICAL PHILOSOPHY","zh-CN":"政治哲学",ms:"FALSAFAH POLITIK"},
    description:{
      en:"A democratic political tradition that generally supports a market economy alongside public services, social protections, labour rights and policies aimed at reducing inequality.",
      "zh-CN":"一种民主政治传统，通常支持市场经济，同时重视公共服务、社会保障、劳动权益及减少不平等的政策。",
      ms:"Tradisi politik demokratik yang secara umumnya menyokong ekonomi pasaran bersama perkhidmatan awam, perlindungan sosial, hak pekerja dan dasar mengurangkan ketidaksamaan."
    }
  },
  {
    name:{en:"Libertarianism","zh-CN":"自由意志主义",ms:"Libertarianisme"},
    category:{en:"POLITICAL PHILOSOPHY","zh-CN":"政治哲学",ms:"FALSAFAH POLITIK"},
    description:{
      en:"A family of political ideas placing strong emphasis on individual liberty and limiting coercive state power. Libertarian traditions differ on economic and social questions.",
      "zh-CN":"一系列高度重视个人自由、限制国家强制权力的政治思想。不同流派对经济与社会议题有不同立场。",
      ms:"Kumpulan idea politik yang memberi penekanan kuat terhadap kebebasan individu dan pembatasan kuasa paksaan negara."
    }
  },
  {
    name:{en:"Nationalism","zh-CN":"民族主义",ms:"Nasionalisme"},
    category:{en:"POLITICAL PHILOSOPHY","zh-CN":"政治哲学",ms:"FALSAFAH POLITIK"},
    description:{
      en:"A political idea emphasizing national identity, collective belonging and self-determination. Nationalist movements can take different civic, cultural and political forms.",
      "zh-CN":"一种强调国家认同、集体归属感与自决权的政治思想。民族主义运动可以呈现不同的公民、文化与政治形式。",
      ms:"Idea politik yang menekankan identiti kebangsaan, rasa kekitaan bersama dan penentuan nasib sendiri."
    }
  }
];

function localized(value) {
  return value[currentLanguage] || value.en;
}

function renderIdeologies() {
  const grid = document.querySelector("#ideologyGrid");
  if (!grid) return;

  grid.innerHTML = "";

  ideologies.forEach(item => {
    const card = document.createElement("article");
    card.className = "content-card";

    const category = document.createElement("div");
    category.className = "card-category";
    category.textContent = localized(item.category);

    const title = document.createElement("h3");
    title.textContent = localized(item.name);

    const description = document.createElement("p");
    description.textContent = localized(item.description);

    const note = document.createElement("div");
    note.className = "card-detail";
    note.textContent = t("sourcePending");

    card.append(category, title, description, note);
    grid.appendChild(card);
  });
}

/* ---------- POLICIES ---------- */

const policies = [
  {
    id:"education",
    category:"Welfare",
    name:{
      en:"Education and Skills",
      "zh-CN":"教育与技能发展",
      ms:"Pendidikan dan Kemahiran"
    },
    description:{
      en:"Explore questions about access to education, public funding, technical training, higher education and lifelong learning.",
      "zh-CN":"探索教育机会、公共教育经费、技术培训、高等教育与终身学习等议题。",
      ms:"Terokai isu akses pendidikan, pembiayaan awam, latihan teknikal, pendidikan tinggi dan pembelajaran sepanjang hayat."
    }
  },
  {
    id:"health",
    category:"Welfare",
    name:{
      en:"Healthcare and Public Health",
      "zh-CN":"医疗与公共卫生",
      ms:"Penjagaan Kesihatan dan Kesihatan Awam"
    },
    description:{
      en:"Understand healthcare access, public hospitals, preventive care, healthcare financing and service delivery.",
      "zh-CN":"了解医疗服务可及性、公立医院、预防医疗、医疗融资与服务体系。",
      ms:"Fahami akses penjagaan kesihatan, hospital awam, pencegahan penyakit, pembiayaan dan penyampaian perkhidmatan."
    }
  },
  {
    id:"cost",
    category:"Economy",
    name:{
      en:"Cost of Living",
      "zh-CN":"生活成本",
      ms:"Kos Sara Hidup"
    },
    description:{
      en:"Explore household costs, wages, inflation, housing affordability and the policy choices that affect living standards.",
      "zh-CN":"探索家庭开销、工资、通货膨胀、住房负担能力及影响生活水平的政策选择。",
      ms:"Terokai perbelanjaan isi rumah, gaji, inflasi, kemampuan perumahan dan pilihan dasar yang mempengaruhi taraf hidup."
    }
  },
  {
    id:"tax",
    category:"Taxation",
    name:{
      en:"Taxation and Public Revenue",
      "zh-CN":"税收与公共财政",
      ms:"Percukaian dan Hasil Awam"
    },
    description:{
      en:"Learn how governments raise revenue, design tax systems and balance public spending with fiscal sustainability.",
      "zh-CN":"了解政府如何筹集收入、设计税制，并在公共开支与财政可持续性之间取得平衡。",
      ms:"Pelajari cara kerajaan mengutip hasil, membentuk sistem cukai dan mengimbangi perbelanjaan awam dengan kemampanan fiskal."
    }
  },
  {
    id:"environment",
    category:"Environment",
    name:{
      en:"Environment and Climate",
      "zh-CN":"环境与气候",
      ms:"Alam Sekitar dan Iklim"
    },
    description:{
      en:"Explore conservation, energy transition, pollution, climate resilience and sustainable development.",
      "zh-CN":"探索自然保育、能源转型、污染、气候韧性与可持续发展。",
      ms:"Terokai pemuliharaan, peralihan tenaga, pencemaran, daya tahan iklim dan pembangunan mampan."
    }
  },
  {
    id:"digital",
    category:"Technology",
    name:{
      en:"Digital Rights and AI",
      "zh-CN":"数码权利与人工智能",
      ms:"Hak Digital dan AI"
    },
    description:{
      en:"Understand data protection, online expression, digital access, platform accountability and responsible AI governance.",
      "zh-CN":"了解个人资料保护、网络表达、数码普及、平台问责与负责任的人工智能治理。",
      ms:"Fahami perlindungan data, kebebasan bersuara dalam talian, akses digital, akauntabiliti platform dan tadbir urus AI."
    }
  }
];

function renderPolicies() {
  const grid = document.querySelector("#policyGrid");
  if (!grid) return;

  const search = (document.querySelector("#policySearch")?.value || "")
    .trim().toLowerCase();

  const category = document.querySelector("#policyFilter")?.value || "all";

  grid.innerHTML = "";

  const filtered = policies.filter(policy => {
    const name = localized(policy.name).toLowerCase();
    const description = localized(policy.description).toLowerCase();

    return (category === "all" || policy.category === category) &&
      (!search || name.includes(search) || description.includes(search));
  });

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "small-note";
    empty.textContent = t("noResults");
    grid.appendChild(empty);
    return;
  }

  filtered.forEach(policy => {
    const card = document.createElement("article");
    card.className = "content-card";

    const categoryLabel = document.createElement("div");
    categoryLabel.className = "card-category";
    categoryLabel.textContent = policy.category.toUpperCase();

    const title = document.createElement("h3");
    title.textContent = localized(policy.name);

    const description = document.createElement("p");
    description.textContent = localized(policy.description);

    const note = document.createElement("div");
    note.className = "card-detail";
    note.textContent = t("sourcePending");

    card.append(categoryLabel, title, description, note);
    grid.appendChild(card);
  });
}

const policyFilter = document.querySelector("#policyFilter");

[
  ["Government","Government"],
  ["Economy","Economy"],
  ["Taxation","Taxation"],
  ["Welfare","Welfare"],
  ["Democracy","Democracy"],
  ["Liberties","Liberties"],
  ["Society","Society"],
  ["Justice","Justice"],
  ["Security","Security"],
  ["Foreign","Foreign"],
  ["Environment","Environment"],
  ["Technology","Technology"]
].forEach(([value]) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  policyFilter.appendChild(option);
});

document.querySelector("#policySearch").addEventListener("input", renderPolicies);
policyFilter.addEventListener("change", renderPolicies);

/* ---------- PARTY COMPARISON ---------- */

/*
  No party positions are invented here.
  Add verified party records and citations to data/parties.json
  before publishing comparisons.
*/

const parties = [
  {id:"party-a", name:"Party A"},
  {id:"party-b", name:"Party B"},
  {id:"party-c", name:"Party C"},
  {id:"party-d", name:"Party D"}
];

const partyOne = document.querySelector("#partyOne");
const partyTwo = document.querySelector("#partyTwo");

function populatePartySelectors() {
  [partyOne, partyTwo].forEach((select, index) => {
    select.innerHTML = "";

    parties.forEach(party => {
      const option = document.createElement("option");
      option.value = party.id;
      option.textContent = party.name;
      select.appendChild(option);
    });

    select.selectedIndex = index;
  });
}

function renderPartyComparison() {
  const container = document.querySelector("#partyComparison");
  if (!container) return;

  const first = parties.find(p => p.id === partyOne.value);
  const second = parties.find(p => p.id === partyTwo.value);

  if (!first || !second) return;

  const table = document.createElement("table");
  table.className = "comparison-table";

  const thead = document.createElement("thead");
  const header = document.createElement("tr");

  [t("positionLabel"), first.name, second.name].forEach(textValue => {
    const th = document.createElement("th");
    th.textContent = textValue;
    header.appendChild(th);
  });

  thead.appendChild(header);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  const categories = [
    "Government","Economy","Taxation","Welfare",
    "Democracy","Liberties","Society","Justice",
    "Security","Foreign","Environment","Technology"
  ];

  categories.forEach(category => {
    const row = document.createElement("tr");

    const categoryCell = document.createElement("td");
    categoryCell.textContent = category;
    row.appendChild(categoryCell);

    [first, second].forEach(() => {
      const cell = document.createElement("td");
      cell.textContent = t("noPosition");
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.innerHTML = "";
  container.appendChild(table);
}

partyOne.addEventListener("change", renderPartyComparison);
partyTwo.addEventListener("change", renderPartyComparison);

/* ---------- INITIALIZE ---------- */

document.querySelector("#year").textContent = new Date().getFullYear();

populatePartySelectors();
renderIdeologies();
renderPolicies();
setLanguage(currentLanguage);

/* =========================================================
   YANG DI-PERTUAN AGONG
   Three-language content + two portrait switcher
========================================================= */

const agongTranslations = {
  en: {
    navAgong: "Yang di-Pertuan Agong",
    agongEyebrow: "THE FEDERAL CONSTITUTION",
    agongTitle: "Yang di-Pertuan Agong",
    agongSubtitle: "The constitutional monarch and Head of State of Malaysia.",
    agongOfficialPortrait: "Official portrait",
    agongSecondPortrait: "Alternative official portrait",
    agongSwitchPhoto: "View another portrait",
    agongRoleTitle: "Constitutional position",
    agongRoleText: "The Yang di-Pertuan Agong is Malaysia's constitutional monarch and Head of State. The office is established under Article 32 of the Federal Constitution.",
    agongElectionTitle: "Election and term",
    agongElectionText: "The Yang di-Pertuan Agong is elected by the Conference of Rulers from among the Malay Rulers. The term of office is five years, subject to the Constitution.",
    agongFunctionTitle: "Constitutional functions",
    agongFunctionText: "The office carries out constitutional functions, including appointing the Prime Minister in accordance with the Constitution and performing formal functions in Parliament.",
    agongSourcesTitle: "Official references"
  },

  "zh-CN": {
    navAgong: "国家元首",
    agongEyebrow: "联邦宪法",
    agongTitle: "马来西亚国家元首",
    agongSubtitle: "马来西亚的立宪君主与国家元首。",
    agongOfficialPortrait: "官方肖像",
    agongSecondPortrait: "另一张官方肖像",
    agongSwitchPhoto: "切换另一张肖像",
    agongRoleTitle: "宪法地位",
    agongRoleText: "国家元首是马来西亚的立宪君主与国家元首职位。该职位依据《联邦宪法》第32条设立。",
    agongElectionTitle: "选举与任期",
    agongElectionText: "国家元首由统治者会议从马来统治者中选出，任期为五年，并须遵循联邦宪法的相关规定。",
    agongFunctionTitle: "宪法职能",
    agongFunctionText: "国家元首履行宪法规定的职能，包括根据宪法委任首相，以及在国会履行相关正式职能。",
    agongSourcesTitle: "官方参考资料"
  },

  ms: {
    navAgong: "Yang di-Pertuan Agong",
    agongEyebrow: "PERLEMBAGAAN PERSEKUTUAN",
    agongTitle: "Yang di-Pertuan Agong",
    agongSubtitle: "Raja Berperlembagaan dan Ketua Utama Negara Malaysia.",
    agongOfficialPortrait: "Potret rasmi",
    agongSecondPortrait: "Satu lagi potret rasmi",
    agongSwitchPhoto: "Lihat potret lain",
    agongRoleTitle: "Kedudukan perlembagaan",
    agongRoleText: "Yang di-Pertuan Agong ialah Raja Berperlembagaan dan Ketua Utama Negara Malaysia. Jawatan ini diperuntukkan di bawah Perkara 32 Perlembagaan Persekutuan.",
    agongElectionTitle: "Pemilihan dan tempoh jawatan",
    agongElectionText: "Yang di-Pertuan Agong dipilih oleh Majlis Raja-Raja dalam kalangan Raja-Raja Melayu. Tempoh jawatan ialah lima tahun, tertakluk kepada Perlembagaan.",
    agongFunctionTitle: "Fungsi perlembagaan",
    agongFunctionText: "Jawatan ini melaksanakan fungsi perlembagaan, termasuk melantik Perdana Menteri mengikut Perlembagaan dan menjalankan fungsi rasmi dalam Parlimen.",
    agongSourcesTitle: "Rujukan rasmi"
  }
};

/* Add new translations without replacing existing translations */
Object.keys(agongTranslations).forEach(language => {
  Object.assign(translations[language], agongTranslations[language]);
});

/* Re-apply the current language so the new navigation and section translate */
setLanguage(currentLanguage);

/* ---------- PORTRAIT SWITCHER ---------- */

const agongPortraits = [
  {
    src: "https://www.istananegara.gov.my/v1/images/2025/09/30/potret-rasmi-ydpa.jpg",
    label: "agongOfficialPortrait"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Potret-rasmi-kdymm-spb-ydpa.jpg",
    label: "agongSecondPortrait"
  }
];

let currentAgongPortrait = 0;

const agongImage = document.querySelector("#agongPortrait");
const agongToggle = document.querySelector("#agongPhotoToggle");
const agongPhotoLabel = document.querySelector("#agongPhotoLabel");
const agongPhotoCounter = document.querySelector("#agongPhotoCounter");

function updateAgongPortrait() {
  if (!agongImage) return;

  const portrait = agongPortraits[currentAgongPortrait];

  agongImage.classList.add("portrait-changing");

  window.setTimeout(() => {
    agongImage.src = portrait.src;
    agongImage.alt = t(portrait.label);

    if (agongPhotoLabel) {
      agongPhotoLabel.textContent = t(portrait.label);
    }

    if (agongPhotoCounter) {
      agongPhotoCounter.textContent =
        `0${currentAgongPortrait + 1} / 02`;
    }

    agongImage.classList.remove("portrait-changing");
  }, 180);
}

if (agongToggle) {
  agongToggle.addEventListener("click", () => {
    currentAgongPortrait =
      (currentAgongPortrait + 1) % agongPortraits.length;

    updateAgongPortrait();
  });
}

/* Update the portrait caption when the website language changes */
const originalSetLanguage = setLanguage;

setLanguage = function(language) {
  originalSetLanguage(language);

  if (agongImage) {
    agongImage.alt = t(
      agongPortraits[currentAgongPortrait].label
    );
  }

  if (agongPhotoLabel) {
    agongPhotoLabel.textContent = t(
      agongPortraits[currentAgongPortrait].label
    );
  }
};