/* IP Bay i18n — English / 日本語 toggle
   All English stays identical when lang=en. Japanese translation is first-pass quality;
   have Yasuo / Jun / Shinji review edits inline in the DICT.ja object before going live.
   Japanese voice: 敬体 (です・ます調), business-formal; proper nouns follow the pattern
   katakana first-mention + (Latin) for Western names, and standard katakana for industry terms.
*/
(function () {
  var DICT = {
    en: {
      // ───────── Nav
      'nav.home': 'Home',
      'nav.legacy': 'Legacy',
      'nav.cloverway': 'The Cloverway Way',
      'nav.services': 'Services',
      'nav.japan': 'Japan Access',
      'nav.team': 'On Board',
      'nav.contact': 'Contact',

      // ───────── Landing (index.html)
      'home.tagline': 'A harbor for Japanese stories on their voyage to the world.',
      'home.sub': 'Japan first · Author first',
      'home.scrollcue': 'Set Sail',
      'home.seabedLede': 'A harbor for Japanese stories. Est. 2026.',
      'home.enterLegacy': 'Enter the Legacy',
      'home.ch1.eyebrow': 'The Vessel',
      'home.ch1.display': 'A harbor for Japanese stories on their <em>voyage</em> to the world.',
      'home.ch1.lede': 'Thirty-five years of publisher relationships. One company that sits at the table from the first Tokyo meeting to the last note on the mix stage. Patiently, faithfully, and in direct partnership with the authors at the source.',
      'home.ch2.eyebrow': 'The Crossing',
      'home.ch2.display': 'Built on the Cloverway legacy of bringing Dragon Ball Z and Sailor Moon <em>across the Pacific.</em>',
      'home.ch2.lede': "Before there was a market for anime in the Americas, Yasuo Matsuo was building one. From Toei Animation's sole Americas representative to the trusted intermediary for Shueisha, Kodansha, and Nippon Animation. The relationships that took thirty years to build are the ones IP Bay carries forward.",
      'home.ch3.eyebrow': 'The Harbor',
      'home.ch3.display': 'Quality of work. Trust of our partners. <em>Respect for every author.</em>',
      'home.ch3.lede': 'We are not brokers. We are not intermediaries. We are the company with the relationships, and we sit at the table throughout. Anchored in three decades of publisher trust, and committed to the patience the work deserves.',
      'home.anchored': 'Anchored',

      // ───────── Legacy page
      'legacy.sup': 'Legacy',
      'legacy.title': 'Cloverway Inc.',
      'legacy.lede': 'Founded 1991, onward. IP Bay carries forward the relationships Yasuo Matsuo built across three decades as one of the earliest harbors between Japanese animation and audiences in the Americas.',
      'legacy.p1.eyebrow': 'Our Foundation',
      'legacy.p1.headline': 'A foundation built<br>on respect for<br><em>Japanese creators.</em>',
      'legacy.p1.photoTag': 'Cloverway Inc. · Long Beach, California',
      'legacy.p1.captionText': 'Yasuo Matsuo, Founder & President, c. 2000s',
      'legacy.p1.body1': 'In 1991, <strong>Yasuo Matsuo</strong> founded Cloverway Inc. in Long Beach, California, as one of the first independent firms to serve as a harbor between Japanese animation studios and audiences across the Americas.',
      'legacy.p1.body2': 'Sailor Moon, Dragon Ball Z, Saint Seiya, Slam Dunk. Cloverway worked with respect for each property, partnering with the original rights holders and distributors who cared about bringing these stories to Western audiences with their creative intent intact.',
      'legacy.p1.body3': 'Yasuo helped build a market for Japanese animation in the Americas at a time when very few people were trying.',
      'legacy.p2.eyebrow': 'Yasuo Matsuo, Chairman',
      'legacy.p2.headline': "A trusted partner<br>for Japan's most<br><em>important publishers.</em>",
      'legacy.p2.photoTag': 'Yasuo Matsuo · Long Beach CA',
      'legacy.p2.body1': 'Through Cloverway, Yasuo served as the official representative of <strong>Toei Animation for the Americas</strong>, and as a trusted partner to <strong>Shueisha, Shogakukan, Nippon Animation, and Tezuka Productions</strong>.',
      'legacy.p2.body2': 'Cloverway worked with Viz Communications, Tokyopop, Pioneer Entertainment, and Bandai in the United States, and with Televisa, TV Azteca, Cartoon Network, and Telemundo across Latin America.',
      'legacy.p2.quote': '"For many Japanese producers, including Shueisha and Nippon Animation, Cloverway was a company they trusted to help guide them through a market they did not yet know."',
      'legacy.p2.body3': "Yasuo's approach was consistent: <strong>preserve the creative integrity of the original work.</strong> Cloverway did not censor the properties it distributed, at a time when that approach was far from the norm.",
      'legacy.tl1.title': 'Cloverway Founded',
      'legacy.tl1.desc': 'Early independent anime distribution across Latin America',
      'legacy.tl2.title': 'Saint Seiya',
      'legacy.tl2.desc': 'Among the first anime broadcasts across Latin American television',
      'legacy.tl3.title': 'Dragon Ball Z',
      'legacy.tl3.desc': 'Distributed to Telemundo across the U.S. Hispanic market',
      'legacy.tl4.title': 'Sailor Moon S & SuperS',
      'legacy.tl4.desc': 'English dubs produced with respect for the original work',
      'legacy.tl5.title': 'A New Chapter',
      'legacy.tl5.desc': 'The relationships, and the trust, continue',
      'legacy.tl6.title': 'IP Bay',
      'legacy.tl6.desc': 'Continuing the work, with the same principles',
      'legacy.p3.eyebrow': 'It Runs in the Family',
      'legacy.p3.headline': 'Jun Matsuo grew up<br>inside this world.<br><em>He was born into it.</em>',
      'legacy.p3.captionText': 'Cloverway Era · Long Beach, California',
      'legacy.p3.body1': 'That Dragon Ball Z poster on the wall was part of the working inventory of a family business. <strong>Jun Matsuo</strong> spent his early years among the properties his father was placing on television networks across the Americas.',
      'legacy.p3.body2': "Today, as <strong>CEO of IP Bay</strong>, Jun leads day-to-day publisher engagement in Tokyo. He supports the Kadokawa relationship, guides presentations with publisher rights divisions, and serves as the primary interface between IP Bay and Japan's major publishers.",
      'legacy.p3.body3': "Jun carries forward his father's work with the fluency and respect of someone who grew up inside it.",
      'legacy.p4.eyebrow': 'A Legacy of Respect',
      'legacy.p4.headline': "The author's vision<br>comes first.<br><em>Always.</em>",
      'legacy.p4.body1': 'At IP Bay, we work closely with Japanese creators in Tokyo because these stories belong to the people who made them. <strong>Respect for the author is the foundation of our work.</strong>',
      'legacy.p4.body2': 'Yasuo built his career on a simple principle: the creative integrity of the original work should be protected. Cloverway did not censor the properties it distributed, and that principle remains at the heart of everything IP Bay does.',
      'legacy.p4.body3': "It is also, we believe, why Japan's publishers continue to take our meetings.",
      'legacy.p4.badgeTitle': 'Author First',
      'legacy.p4.badgeSub': 'Creative Integrity · Tokyo',
      'legacy.cat.label': 'The Cloverway Catalog',
      'legacy.cat.headline': 'The properties that<br>introduced a generation<br>to Japan.',
      'legacy.cat.sub': 'Reached Latin America, North America, and Brazil through Cloverway, building publisher relationships IP Bay is honored to carry forward.',
      'legacy.cat.countLabel': 'Properties distributed across<br>North America, Latin America, and Brazil',
      'legacy.net.kicker': 'Publisher & Partner Network',
      'legacy.net.h1': 'Relationships built over <em>thirty years.</em>',
      'legacy.net.sub': 'The crossings that formed during the Cloverway years are the foundation of what IP Bay is honored to carry forward today.',
      'legacy.net.tab1': 'Japanese Publishers',
      'legacy.net.tab2': 'U.S. Partners',
      'legacy.net.tab3': 'Broadcast Partners',
      'legacy.net.hint': 'Drag the harbor · tap a buoy',
      'legacy.closing': 'The operating principles we continue to honor.',
      'legacy.closingEm': 'The Cloverway Way.',
      'legacy.closingCta': 'Read the record',

      // ───────── Cloverway page
      'cloverway.sup': 'The Cloverway Way',
      'cloverway.title': 'The operating principles',
      'cloverway.titleEm': 'we still run on.',
      'cloverway.lede': 'For sixteen years, one Long Beach office helped Japanese animation reach audiences across the Americas. Those principles are the foundation of our work today.',
      'cloverway.sectionLabel': 'Public Record · Founded 1991',
      'cloverway.mark': 'Cloverway Inc.',
      'cloverway.markLede': 'Official representative of Toei Animation for the Americas. Trusted partner to Shueisha, Kodansha, Shogakukan, and Nippon Animation, and to the Western broadcasters and publishers who carried their stories with care.',
      'cloverway.meta.founded': 'Founded',
      'cloverway.meta.foundedVal': '1991 · Long Beach, CA',
      'cloverway.meta.founder': 'Founder',
      'cloverway.meta.role': 'Role',
      'cloverway.meta.roleVal': 'Toei Americas Rep.',
      'cloverway.meta.tenure': 'Tenure',
      'cloverway.meta.tenureVal': '50+ Titles · 16 Years',
      'cloverway.meta.today': 'Today',
      'cloverway.pillar1.title': 'Toei Animation, Americas',
      'cloverway.pillar1.desc': "Cloverway served as the official representative office of Toei Animation for the Americas, the licensed harbor for Toei's catalog into the United States, Latin America, and Brazil from 1991 until Toei opened its own U.S. subsidiary in 2004.",
      'cloverway.pillar2.title': 'Shueisha and Viz, Intermediary',
      'cloverway.pillar2.desc': 'Viz Communications manga volumes of the era carried an explicit credit line: "English translation rights arranged by Shueisha, Inc. through Cloverway Inc." A documented record of trust earned over many years with Japan\'s largest publisher.',
      'cloverway.pillar3.title': 'Author First, Uncut',
      'cloverway.pillar3.desc': 'Cloverway worked to preserve the creative integrity of the original work at a time when that approach was far from the norm. The Spanish-language Dragon Ball Z dub produced through Intertrack became regarded as among the most faithful anime dubs made for any Western market.',
      'cloverway.pillar4.title': 'Two Continents, One Office',
      'cloverway.pillar4.desc': 'Cloverway worked with Viz, Tokyopop, Pioneer, Bandai, and ADV in the U.S., and with Televisa, TV Azteca, Turner, Cartoon Network, Telemundo, and Univision across Latin America. One small office, sixteen years of patient work.',
      'cloverway.ed1.h3': 'Dragon Ball Z',
      'cloverway.ed1.h4': 'A Latin American dub that is still beloved, and the Shueisha arrangement behind it.',
      'cloverway.ed1.p1': "Dragon Ball Z is among the most commercially significant anime series in history, produced by Toei Animation and based on Akira Toriyama's manga published by Shueisha. <strong>Cloverway held the Latin American distribution and production rights</strong> and commissioned the Spanish-language dub through Intertrack in Mexico City.",
      'cloverway.ed1.p2': "The Intertrack cast became beloved voices across Latin America. The dub aired on Cartoon Network Latin America and on dozens of national broadcasters, and Cloverway syndicated the Spanish-language Dragon Ball Z to <strong>Telemundo</strong> in the U.S., carrying the series into American Hispanic households throughout the late 1990s and early 2000s.",
      'cloverway.ed1.p3': "Cloverway's role as the formal intermediary between Shueisha and Viz for U.S. publishing licensing is preserved on the copyright pages of a generation of manga volumes.",
      'cloverway.ed2.h3': 'Sailor Moon',
      'cloverway.ed2.h4': 'Two English seasons, and the full Latin American franchise.',
      'cloverway.ed2.p1': 'Cloverway produced the English-language dubs of <strong>Sailor Moon S (Season 3) and Sailor Moon SuperS (Season 4)</strong> in association with Optimum Productions in Canada. These are the only two Sailor Moon seasons whose English versions were produced directly by Cloverway, and the credit appears at the end of each episode.',
      'cloverway.ed2.p2': 'Across Latin America, Cloverway distributed and co-produced the complete Sailor Moon franchise, <strong>Seasons 1 through Sailor Stars, including the theatrical films,</strong> in both Spanish and Brazilian Portuguese.',
      'cloverway.ed2.p3': "Anime News Network's encyclopedia records Cloverway with formal Adaptation (1996, 1997, 1998), Dubbing, Production, and Special Thanks credits across the full Sailor Moon franchise.",
      'cloverway.credits.label': 'Documented Cloverway Credits · Founded 1991',
      'cloverway.cr1.role': 'Rep of Record',
      'cloverway.cr1.desc': 'Official representative for the Americas from 1991. Licensing, distribution, and co-production across the United States, Latin America, and Brazil.',
      'cloverway.cr2.role': 'Early LatAm Work',
      'cloverway.cr2.desc': '1992. Among the first anime broadcasts across Latin America, launched on Mexican and Brazilian television. A template for the Toei work that followed.',
      'cloverway.cr3.role': 'U.S. Hispanic',
      'cloverway.cr3.desc': 'Syndicated Spanish-language Dragon Ball Z to Telemundo across the U.S. Hispanic market. Broadcast history documented in Wikipedia and Kanzenshuu fan archives.',
      'cloverway.cr4.role': 'English Production',
      'cloverway.cr4.title': 'Sailor Moon S & SuperS',
      'cloverway.cr4.desc': 'Produced in association with Optimum Productions (Canada). Aired on YTV and Cartoon Network. Onscreen Cloverway credit at episode end.',
      'cloverway.cr5.role': 'Publisher Partner',
      'cloverway.cr5.desc': "Trusted partner to Japan's major publishers, and to the U.S. and Latin American media partners they worked with. The Shueisha and Viz arrangement is explicitly credited on manga copyright pages of the era.",
      'cloverway.cr6.role': 'Broadcast Network',
      'cloverway.cr6.title': 'Across the Americas',
      'cloverway.cr6.desc': 'Viz, Tokyopop, Pioneer, Bandai, ADV, Cartoon Network, Televisa, TV Azteca, Turner, Telemundo, Univision, YTV. A footprint spanning North America, Latin America, and Brazil.',
      'cloverway.quote.text': 'For many Japanese producers, including Shueisha and Nippon Animation, Cloverway was a company they trusted to help guide them through a market they did not yet know.',
      'cloverway.quote.attr': 'The Cloverway Operating Principle',
      'cloverway.sources.label': 'Public Record · Independently Verifiable',
      'cloverway.closingCta': 'See services',

      // ───────── Services page
      'services.sup': 'Services',
      'services.title': 'What we do.',
      'services.lede': 'IP Bay represents Japanese intellectual property to the world. Each engagement is structured around the property and the partners. There is no single deal template. The services below describe the work we take on directly.',
      'services.label': 'Services',
      'services.headline': 'Six tiers of work.<br>Author first, always.',
      'services.s1.title': 'Rights Representation',
      'services.s1.desc': 'Introducing Japanese intellectual property to global producers and studios, and representing rights holders in the negotiations that follow.',
      'services.s2.title': 'Packaging for Film & Television',
      'services.s2.desc': 'Connecting Japanese properties with the directors, writers, talent, and financing that give a project its shape before it reaches a studio.',
      'services.s3.title': 'Connecting Japanese & U.S. Producers',
      'services.s3.desc': 'Originating and structuring co-development relationships across territories. We help thoughtful producers on both sides find each other.',
      'services.s4.title': 'Japan Market Support',
      'services.s4.desc': "On-the-ground support for foreign producers entering the Japanese market. Publisher introductions, production infrastructure, and access to Japan's incentive programs through IP Bay Inc.",
      'services.s5.title': 'Co-Production Support & Joint Ventures',
      'services.s5.desc': "Structured production partnerships between Japanese and foreign entities, built to honor creator intent and meet both territories' distribution needs.",
      'services.s6.title': 'Executive Producing',
      'services.s6.desc': 'Direct producing involvement on adapted properties. For projects where alignment with the original author is essential, we stay in the room from development through delivery.',
      'services.mission.label': 'Our Mission',
      'services.mission.h3a': 'For Global Producers',
      'services.mission.h4a': 'Securing the rights to strong projects.',
      'services.mission.p1a': 'One of the key challenges facing filmmakers targeting global markets is securing the rights to strong projects. Japan is renowned for the wealth of its intellectual property in comics, animation, and games, each of which has had a significant influence on the craft of global filmmaking.',
      'services.mission.p2a': 'Our work is to collaborate with thoughtful producers around the world to bring these Japanese stories to the screen, with respect for the creators behind them.',
      'services.mission.h3b': 'For Japan',
      'services.mission.h4b': 'With respect for every creator.',
      'services.mission.p1b': 'We communicate with rights holders throughout the planning and development of each project, with respect for their creative control and their relationship with the work.',
      'services.mission.p2b': 'We also help find distribution partners in Japan, support the casting of Japanese actors in international productions, and keep rights holders informed about how their work is received in the United States and other territories.',
      'services.closing': "Inside Japan's creative system.",
      'services.closingEm': 'Japan Access.',
      'services.closingCta': 'See Japan access',

      // ───────── Japan Access page
      'japan.sup': 'Japan Access',
      'japan.title': "Inside Japan's",
      'japan.titleEm': 'creative system.',
      'japan.lede': "IP Bay is registered as a Japanese corporation and works with respect for the institutional partners that support Japan's creative industries.",
      'japan.label': 'Japan Access',
      'japan.headline': "Working alongside<br>Japan's creative partners.",
      'japan.desc1': "Through our Japanese corporate entity and our advisor network, IP Bay works alongside Japan's institutional partners to support co-production and to help our partners access production incentive programs.",
      'japan.desc2': "<strong>Shinji Sakamoto</strong>, IP Bay's Japan Operations Advisor, is a registered member of the <strong>Cool Japan Initiative</strong>, Japan's national strategy for supporting its content industries. Sakamoto holds direct ties to the Osaka Film Commission and the prefectural government, and works as the crossing between IP Bay and Japan's institutional community with care and respect.",
      'japan.desc3': "We view this work as a responsibility. Japan's stories belong to Japan, and our role is to support their thoughtful introduction to audiences around the world.",
      'japan.c1.icon': 'Production Incentive',
      'japan.c1.title': 'Japan Cash Rebate',
      'japan.c1.desc': "Japan's Content Incentive Program, administered by METI, offers cash rebates of up to 50% on qualifying production expenditures made in Japan. IP Bay Inc. provides access to this rebate for our production partners.",
      'japan.c1.link': 'METI Content Industry Office ↗',
      'japan.c2.icon': 'National Initiative',
      'japan.c2.title': 'Cool Japan, ¥20T by 2033',
      'japan.c2.desc': "Overhauled in 2024 and led by Cabinet Minister Kimi Onoda under the Cabinet Office's IP Strategy Headquarters, Cool Japan aims to support ¥20 trillion in overseas content revenue by 2033. Sakamoto participates in the platform alongside Kodansha, Kadokawa, Toei, Shochiku, Toho, and Bandai Namco affiliates.",
      'japan.c2.link': 'Cabinet Office · Cool Japan Strategy ↗',
      'japan.c3.icon': 'Trade Organization',
      'japan.c3.title': 'JETRO',
      'japan.c3.desc': "Through the Japan External Trade Organization's Tokyo office, IP Bay accesses co-production resources, market intelligence, and support channels for inbound and outbound content projects between Japan and the United States. JETRO operates 76 offices across 50 countries.",
      'japan.c3.link': 'jetro.go.jp ↗',
      'japan.c4.icon': 'Tax Incentives',
      'japan.c4.title': 'Prefectural Support',
      'japan.c4.desc': "Japan's prefectural governments and the Visual Industry Promotion Organization (VIPO) administer supplemental location and production incentives for qualifying shoots across Japan's regions. IP Bay's relationships help our partners access regional programs that may compound with national incentives.",
      'japan.c4.link': 'VIPO · Visual Industry Promotion Org ↗',
      'japan.w1.h3': "Serving Japan's Publishers",
      'japan.w1.h4': 'Through relationships built over time.',
      'japan.w1.p1': 'In Japanese business culture, relationships are built slowly and held carefully. We take that approach seriously. Our introductions come through people whose trust has been earned over many years, and we hold that trust with respect.',
      'japan.w1.p2': 'When publishers engage with us, they do so because of the relationships we have been given the privilege to continue, not because of volume.',
      'japan.w2.h3': 'Serving Global Producers',
      'japan.w2.h4': 'A voice that listens first.',
      'japan.w2.p1': 'Japan is renowned for the wealth of its intellectual property in comics, animation, and games. Filmmakers seeking global audiences are increasingly looking toward these stories.',
      'japan.w2.p2': 'Our role is to help both sides understand each other, and to offer thoughtful perspective on which properties may be suited for which markets, always in conversation with the publisher and the creator.',
      'japan.closing': 'The crew at IP Bay.',
      'japan.closingEm': 'On Board.',
      'japan.closingCta': 'Meet the crew',

      // ───────── Team page
      'team.sup': 'The Crew',
      'team.title': 'On',
      'team.titleEm': 'Board.',
      'team.lede': "A small crew committed to our partners, to Japan's authors, and to the patience the work deserves.",
      'team.label': 'Officers & Partners',
      'team.m1.role': 'Chairman · IP Bay Inc.',
      'team.m1.bio': 'Founder of <strong>Cloverway Inc.</strong> Over three decades as a harbor between Japanese publishers and audiences across the Americas. Former representative of Toei Animation for the Americas. Trusted partner to Shueisha, Kodansha, and Shogakukan.',
      'team.m1.cred1': 'Cloverway Founder',
      'team.m1.cred2': 'Toei · Shueisha · Kodansha',
      'team.m2.role': 'CEO · Tokyo',
      'team.m2.bio': "Day-to-day publisher engagement and Japan operations. Bilingual and bicultural. Supports author and publisher relationships and serves as the primary interface between IP Bay and Japan's major publishers.",
      'team.m2.cred1': 'Kadokawa Lead',
      'team.m2.cred2': 'Tokyo Desk',
      'team.m3.role': 'Co-Founder · U.S. Operations',
      'team.m3.bio': 'U.S. operations. Supports studio, streamer, and financier relationships on the American side of the crossing, helping connect Japanese stories with producers who can bring them to the screen with care.',
      'team.m3.cred1': 'U.S. Ops',
      'team.m3.cred2': 'Studios & Streamers',
      'team.m4.role': 'Japan Operations Advisor',
      'team.m4.bio': "Registered member of the <strong>Cool Japan Initiative</strong>. Direct ties to the Osaka Film Commission and prefectural government. Supports IP Bay's work with Japan's institutional partners with care and respect.",
      'team.m4.cred1': 'Cool Japan',
      'team.m4.cred2': 'Osaka Film Commission',
      'team.closing': 'Come aboard.',
      'team.closingEm': 'Contact.',
      'team.closingCta': 'Get in touch',

      // ───────── Contact page
      'contact.sup': 'Contact',
      'contact.title': 'Come',
      'contact.titleEm': 'aboard.',
      'contact.lede': 'For producers, studios, financiers, and partners interested in working with Japanese intellectual property, we welcome the conversation.',
      'contact.label': 'Contact',
      'contact.headline': 'Offices &<br>inquiries.',
      'contact.desc': 'IP Bay is registered in Japan, with operations across Japan and the United States. Our team works closely with publishers in Tokyo, with studios and partners in Los Angeles, and with producers and financiers internationally. We aim to respond to every inquiry within two business days.',
      'contact.d1.label': 'IP Bay Inc. Head Office',
      'contact.d1.value': '14-17 Suzukaze-cho<br>Ashiya, Hyogo, Japan',
      'contact.d2.label': 'Tokyo',
      'contact.d2.value': 'Publisher engagement, day-to-day operations',
      'contact.d3.label': 'Los Angeles',
      'contact.d3.value': 'Studio and streamer relations',
      'contact.d4.label': 'Brooklyn',
      'contact.d4.value': 'Strategy and business development',

      // ───────── Contact form
      'form.firstName': 'First Name',
      'form.lastName': 'Last Name',
      'form.company': 'Company',
      'form.email': 'Email',
      'form.message': 'Message',
      'form.submit': 'Send Message',
      'form.firstNamePh': 'First name',
      'form.lastNamePh': 'Last name',
      'form.companyPh': 'Company name',
      'form.emailPh': 'your@email.com',
      'form.messagePh': 'Tell us about your project or inquiry',

      // ───────── Footer
      'footer.tagline': 'A harbor for Japanese stories.'
    },

    ja: {
      // ───────── Nav
      'nav.home': 'ホーム',
      'nav.legacy': '沿革',
      'nav.cloverway': 'クローバーウェイの流儀',
      'nav.services': 'サービス',
      'nav.japan': '日本アクセス',
      'nav.team': 'メンバー',
      'nav.contact': 'お問い合わせ',

      // ───────── Landing
      'home.tagline': '日本の物語が、世界へと船出するための港。',
      'home.sub': '日本を第一に・著者を第一に',
      'home.scrollcue': '出航',
      'home.seabedLede': '日本の物語のための港。令和8年（2026）創立。',
      'home.enterLegacy': '沿革を見る',
      'home.ch1.eyebrow': '船',
      'home.ch1.display': '日本の物語が、世界への<em>航海</em>に出るための港。',
      'home.ch1.lede': '出版社との三十五年にわたる関係。東京での最初の打ち合わせから、音声仕上げの最後のひと音まで、ずっと同じ席に座り続ける一社。辛抱強く、誠実に、そして原作の著者と直接手を取り合いながら。',
      'home.ch2.eyebrow': '渡航',
      'home.ch2.display': 'ドラゴンボールZ、セーラームーンを太平洋の向こうへ届けた、<em>クローバーウェイ（Cloverway）</em>の歩みの上に。',
      'home.ch2.lede': '米州（アメリカ大陸）にアニメ市場が生まれる前から、松尾康雄はその市場を築いていました。東映アニメーションの米州における唯一の代理人として、そして集英社、講談社、日本アニメーションから信頼される取次役として。三十年をかけて築かれた関係を、IP Bayが受け継いでいます。',
      'home.ch3.eyebrow': '港',
      'home.ch3.display': '仕事の質。パートナーからの信頼。<em>すべての著者への敬意。</em>',
      'home.ch3.lede': '私たちは仲介業者ではありません。取次でもありません。関係を持つ当事者として、最初から最後まで同じ席に座り続けます。三十年にわたる出版社からの信頼に錨を下ろし、この仕事にふさわしい辛抱強さを大切にしています。',
      'home.anchored': '錨を下ろして',

      // ───────── Legacy
      'legacy.sup': '沿革',
      'legacy.title': 'クローバーウェイ・インク',
      'legacy.lede': '1991年創立、そして現在へ。IP Bayは、松尾康雄が三十年にわたって築いた関係を受け継いでいます。日本のアニメーションと米州の観客をつないだ、最も初期の港のひとつでした。',
      'legacy.p1.eyebrow': '私たちの礎',
      'legacy.p1.headline': '<em>日本の作り手</em>への<br>敬意のうえに築かれた<br>礎。',
      'legacy.p1.photoTag': 'クローバーウェイ・インク（Cloverway Inc.）・ロングビーチ、カリフォルニア',
      'legacy.p1.captionText': '松尾康雄、創業者兼社長、2000年代',
      'legacy.p1.body1': '1991年、<strong>松尾康雄</strong>はカリフォルニア州ロングビーチにてクローバーウェイ・インク（Cloverway Inc.）を創業しました。日本のアニメーションスタジオと米州の観客をつなぐ独立系の港として、最も早い時期に生まれた会社のひとつです。',
      'legacy.p1.body2': 'セーラームーン、ドラゴンボールZ、聖闘士星矢、スラムダンク。クローバーウェイは一作ずつに敬意をもって向き合い、原作者の創作意図を損なわぬ形で西洋の観客に届けようとする、原権利者と配給パートナーと共に仕事をしてきました。',
      'legacy.p1.body3': '日本アニメーションを米州で届けようとする者がまだほとんどいなかった時代に、松尾康雄はその市場を築く一助となりました。',
      'legacy.p2.eyebrow': '松尾康雄、会長',
      'legacy.p2.headline': '日本を代表する<br>出版社からの<br><em>信頼できるパートナー。</em>',
      'legacy.p2.photoTag': '松尾康雄・ロングビーチCA',
      'legacy.p2.body1': 'クローバーウェイを通じて、松尾康雄は<strong>東映アニメーション米州代理人</strong>を務め、<strong>集英社、小学館、日本アニメーション、手塚プロダクション</strong>から信頼されるパートナーでした。',
      'legacy.p2.body2': 'クローバーウェイは米国にてヴィズ・コミュニケーションズ（Viz Communications）、トーキョーポップ（Tokyopop）、パイオニア・エンタテインメント（Pioneer Entertainment）、バンダイと協業し、ラテンアメリカにおいてはテレビサ（Televisa）、TVアステカ（TV Azteca）、カートゥーン ネットワーク（Cartoon Network）、テレムンド（Telemundo）と共に仕事をしてきました。',
      'legacy.p2.quote': '「集英社や日本アニメーションを含む多くの日本のプロデューサーにとって、クローバーウェイはまだ知り得なかった市場への道案内を信頼して任せられる会社でした。」',
      'legacy.p2.body3': '松尾の姿勢は一貫していました——<strong>原作の創作的な完全性を守ること。</strong>そのような取り組みが一般的ではなかった時代においても、クローバーウェイは扱う作品を検閲することはありませんでした。',
      'legacy.tl1.title': 'クローバーウェイ創立',
      'legacy.tl1.desc': 'ラテンアメリカにおける独立系アニメ配給の初期',
      'legacy.tl2.title': '聖闘士星矢',
      'legacy.tl2.desc': 'ラテンアメリカのテレビで最初期に放送されたアニメのひとつ',
      'legacy.tl3.title': 'ドラゴンボールZ',
      'legacy.tl3.desc': '米国ヒスパニック市場のテレムンド（Telemundo）にて配給',
      'legacy.tl4.title': 'セーラームーンS・SuperS',
      'legacy.tl4.desc': '原作への敬意をもって制作された英語吹替',
      'legacy.tl5.title': '新たな章へ',
      'legacy.tl5.desc': '関係と信頼は、今も続いています',
      'legacy.tl6.title': 'IP Bay',
      'legacy.tl6.desc': '同じ原則のもと、この仕事を続けていきます',
      'legacy.p3.eyebrow': '家族の仕事として',
      'legacy.p3.headline': '松尾ジュンはこの世界の<br>なかで育ちました。<br><em>生まれたときから。</em>',
      'legacy.p3.captionText': 'クローバーウェイの時代・ロングビーチ、カリフォルニア',
      'legacy.p3.body1': '壁に貼られたあのドラゴンボールZのポスターは、家族経営の会社にとって日々の仕事そのものでした。<strong>松尾ジュン</strong>は、父が米州各地のテレビに送り出していた作品とともに幼い日々を過ごしました。',
      'legacy.p3.body2': '現在、<strong>IP Bayの代表取締役</strong>として、ジュンは東京にて日々の出版社対応を率いています。著者と出版社の関係を支え、出版社の版権部門との打ち合わせを導き、IP Bayと日本の主要出版社をつなぐ中心的な窓口を務めています。',
      'legacy.p3.body3': 'ジュンは、父の仕事をその文化のなかで育った者の流暢さと敬意をもって受け継いでいます。',
      'legacy.p4.eyebrow': '敬意の系譜',
      'legacy.p4.headline': '著者の構想が<br>まず最初に来ます。<br><em>常に。</em>',
      'legacy.p4.body1': 'IP Bayでは東京の日本の作り手と密に仕事をしています。これらの物語は、それを生み出した人々のものだからです。<strong>著者への敬意が、私たちの仕事の礎です。</strong>',
      'legacy.p4.body2': '松尾康雄はひとつの原則のうえにその歩みを築きました——原作の創作的な完全性は守られなければならない。クローバーウェイは扱う作品を検閲せず、その原則は今日のIP Bayのあらゆる仕事の中心に息づいています。',
      'legacy.p4.body3': 'そして私たちは、日本の出版社の皆様が今もなお打ち合わせの席を設けてくださる理由もそこにあると考えています。',
      'legacy.p4.badgeTitle': '著者第一',
      'legacy.p4.badgeSub': '創作の完全性・東京',
      'legacy.cat.label': 'クローバーウェイ・カタログ',
      'legacy.cat.headline': 'ひと世代を<br>日本へといざなった<br>作品たち。',
      'legacy.cat.sub': 'クローバーウェイを通じてラテンアメリカ、北米、ブラジルへと届けられ、IP Bayが受け継がせていただいている出版社との関係の礎となりました。',
      'legacy.cat.countLabel': '北米、ラテンアメリカ、ブラジルへ<br>配給された作品数',
      'legacy.net.kicker': '出版社・パートナーネットワーク',
      'legacy.net.h1': '<em>三十年</em>にわたって築かれた関係。',
      'legacy.net.sub': 'クローバーウェイの時代に形づくられた渡航の数々が、今日のIP Bayが受け継がせていただいている仕事の礎となっています。',
      'legacy.net.tab1': '日本の出版社',
      'legacy.net.tab2': '米国パートナー',
      'legacy.net.tab3': '放送パートナー',
      'legacy.net.hint': '港を動かす・ブイをタップ',
      'legacy.closing': '今も守り続けている運営の原則。',
      'legacy.closingEm': 'クローバーウェイの流儀。',
      'legacy.closingCta': '記録を読む',

      // ───────── Cloverway
      'cloverway.sup': 'クローバーウェイの流儀',
      'cloverway.title': '今も私たちが<br>拠り所にしている',
      'cloverway.titleEm': '運営の原則。',
      'cloverway.lede': '十六年間、ロングビーチのひとつの事務所が、日本のアニメーションを米州各地の観客へと届ける仕事を支えてきました。その原則は、今日の私たちの仕事の礎となっています。',
      'cloverway.sectionLabel': '公的記録・1991年創立',
      'cloverway.mark': 'クローバーウェイ・インク',
      'cloverway.markLede': '東映アニメーション米州代理人。集英社、講談社、小学館、日本アニメーションから信頼されるパートナーであり、その物語を大切に扱ってくれた西洋の放送局・出版社とも信頼関係を築いてきました。',
      'cloverway.meta.founded': '創立',
      'cloverway.meta.foundedVal': '1991年・ロングビーチ、CA',
      'cloverway.meta.founder': '創業者',
      'cloverway.meta.role': '役割',
      'cloverway.meta.roleVal': '東映米州代理人',
      'cloverway.meta.tenure': '在任',
      'cloverway.meta.tenureVal': '50作品以上・16年',
      'cloverway.meta.today': '現在',
      'cloverway.pillar1.title': '東映アニメーション、米州',
      'cloverway.pillar1.desc': 'クローバーウェイは1991年から、東映アニメーションの米州における公式代理事務所を務めました。東映のカタログを米国、ラテンアメリカ、ブラジルへ届ける公認の港として、2004年に東映が米国現地法人を設立するまでその役割を担いました。',
      'cloverway.pillar2.title': '集英社とヴィズの取次',
      'cloverway.pillar2.desc': '当時のヴィズ・コミュニケーションズ（Viz Communications）刊のマンガ単行本には、明確なクレジットが記されていました——「English translation rights arranged by Shueisha, Inc. through Cloverway Inc.」。日本最大の出版社と長年にわたって積み上げてきた信頼の、文書に残る記録です。',
      'cloverway.pillar3.title': '著者第一、無編集',
      'cloverway.pillar3.desc': 'そのような取り組みが一般的ではなかった時代に、クローバーウェイは原作の創作的な完全性を守ることに努めました。インタートラック（Intertrack）が手がけたスペイン語版ドラゴンボールZの吹替は、西洋の市場向けに制作されたアニメ吹替のなかでも最も原作に忠実なものの一つとして評価されるに至りました。',
      'cloverway.pillar4.title': '二大陸、ひとつの事務所',
      'cloverway.pillar4.desc': 'クローバーウェイは米国でヴィズ、トーキョーポップ、パイオニア、バンダイ、ADV と協業し、ラテンアメリカではテレビサ、TVアステカ、ターナー（Turner）、カートゥーン ネットワーク、テレムンド、ユニビジョン（Univision）と共に仕事をしてきました。小さなひとつの事務所が、十六年にわたって辛抱強く続けた仕事です。',
      'cloverway.ed1.h3': 'ドラゴンボールZ',
      'cloverway.ed1.h4': '今も愛され続けるラテンアメリカ版吹替と、その背後にあった集英社との取り決め。',
      'cloverway.ed1.p1': 'ドラゴンボールZは、東映アニメーションが制作し、集英社が刊行する鳥山明氏のマンガを原作とする、アニメ史上もっとも商業的意義の大きいシリーズのひとつです。<strong>クローバーウェイはラテンアメリカにおける配給・制作権を保有</strong>し、メキシコシティのインタートラック（Intertrack）を通じてスペイン語吹替を発注しました。',
      'cloverway.ed1.p2': 'インタートラックの声優陣はラテンアメリカ全土で親しまれる声となりました。吹替はカートゥーン ネットワーク・ラテンアメリカをはじめ、各国の放送局数十社で放映され、クローバーウェイは米国では<strong>テレムンド</strong>に向けてスペイン語版ドラゴンボールZを配給し、1990年代後半から2000年代初頭にかけてアメリカのヒスパニック系家庭へ届け続けました。',
      'cloverway.ed1.p3': '米国での出版ライセンスにおける集英社とヴィズのあいだの正式な取次役としてのクローバーウェイの役割は、ひと世代にわたるマンガ単行本の奥付に記録として残されています。',
      'cloverway.ed2.h3': 'セーラームーン',
      'cloverway.ed2.h4': '英語版二シーズン、そしてラテンアメリカでのフルシリーズ。',
      'cloverway.ed2.p1': 'クローバーウェイは、カナダのオプティマム・プロダクションズ（Optimum Productions）と共に<strong>セーラームーンS（第3期）およびセーラームーンSuperS（第4期）</strong>の英語吹替を制作しました。英語版がクローバーウェイ直々の手によって制作されたセーラームーンは、この二シーズンのみであり、各話の最後にクレジットが表示されます。',
      'cloverway.ed2.p2': 'ラテンアメリカにおいては、クローバーウェイは<strong>第1期からセーラースターズまで、劇場版を含むシリーズ全編</strong>をスペイン語版とブラジル・ポルトガル語版の双方で配給・共同制作しました。',
      'cloverway.ed2.p3': 'アニメ・ニューズ・ネットワーク（Anime News Network）の百科事典には、セーラームーンシリーズ全体にわたって、クローバーウェイがアダプテーション（1996年、1997年、1998年）、吹替、プロダクション、スペシャル・サンクスの公式クレジットを有する旨が記されています。',
      'cloverway.credits.label': '文書に残るクローバーウェイのクレジット・1991年創立',
      'cloverway.cr1.role': '代理人記録',
      'cloverway.cr1.desc': '1991年より米州における公式代理人。米国、ラテンアメリカ、ブラジルにおけるライセンシング、配給、共同制作。',
      'cloverway.cr2.role': 'ラテンアメリカでの初期の仕事',
      'cloverway.cr2.desc': '1992年。メキシコおよびブラジルのテレビで放映された、ラテンアメリカで最初期のアニメ放送のひとつ。その後に続く東映作品の雛形となりました。',
      'cloverway.cr3.role': '米国ヒスパニック市場',
      'cloverway.cr3.desc': '米国ヒスパニック市場のテレムンド（Telemundo）に向けてスペイン語版ドラゴンボールZを配給。ウィキペディアおよびカンゼンシュウ（Kanzenshuu）のファン資料に放送履歴が文書化されています。',
      'cloverway.cr4.role': '英語版制作',
      'cloverway.cr4.title': 'セーラームーンS・SuperS',
      'cloverway.cr4.desc': 'カナダのオプティマム・プロダクションズと共同制作。YTVおよびカートゥーン ネットワークにて放映。各話終わりに画面上にクローバーウェイのクレジットが表示。',
      'cloverway.cr5.role': '出版社パートナー',
      'cloverway.cr5.desc': '日本を代表する出版社、およびその出版社が協業していた米国・ラテンアメリカのメディアパートナーから信頼されるパートナー。集英社とヴィズのあいだの取り決めは、当時のマンガ単行本の奥付に明確にクレジットされています。',
      'cloverway.cr6.role': '放送ネットワーク',
      'cloverway.cr6.title': '米州全域',
      'cloverway.cr6.desc': 'ヴィズ、トーキョーポップ、パイオニア、バンダイ、ADV、カートゥーン ネットワーク、テレビサ、TVアステカ、ターナー、テレムンド、ユニビジョン、YTV。北米、ラテンアメリカ、ブラジルに広がる足跡。',
      'cloverway.quote.text': '集英社や日本アニメーションを含む多くの日本のプロデューサーにとって、クローバーウェイはまだ知り得なかった市場への道案内を信頼して任せられる会社でした。',
      'cloverway.quote.attr': 'クローバーウェイの運営原則',
      'cloverway.sources.label': '公的記録・独立して検証可能',
      'cloverway.closingCta': 'サービスを見る',

      // ───────── Services
      'services.sup': 'サービス',
      'services.title': '私たちの仕事。',
      'services.lede': 'IP Bayは日本の知的財産を世界へと届けます。各案件は作品とパートナーに合わせて組み立てられており、定型の契約はありません。以下のサービスは、私たちが直接お引き受けしている仕事の内容です。',
      'services.label': 'サービス',
      'services.headline': '六つの層の仕事。<br>常に、著者を第一に。',
      'services.s1.title': '権利代理',
      'services.s1.desc': '日本の知的財産を世界のプロデューサー・スタジオへご紹介し、その後の交渉において権利者の代理を務めます。',
      'services.s2.title': '映像・テレビ向けパッケージング',
      'services.s2.desc': '日本の作品に、スタジオへ持ち込む前の企画の形を与える監督・脚本家・俳優・資金を結びつけます。',
      'services.s3.title': '日米プロデューサーをつなぐ',
      'services.s3.desc': '国をまたぐ共同開発の関係を発案し、組み立てます。両国の思慮深いプロデューサー同士が互いに出会えるよう支援いたします。',
      'services.s4.title': '日本市場サポート',
      'services.s4.desc': '日本市場に参入される外国プロデューサーへの現地支援。出版社のご紹介、制作インフラ、そしてIP Bay Inc.を通じた日本の優遇制度へのアクセスをご提供します。',
      'services.s5.title': '共同製作支援・合弁事業',
      'services.s5.desc': '日本と海外の主体による体系的な製作連携。作り手の意図を尊重し、両国の流通要件を満たすかたちで構築いたします。',
      'services.s6.title': 'エグゼクティブ・プロデュース',
      'services.s6.desc': '翻案作品における直接のプロデュース関与。原作者との方向性の一致が欠かせない企画においては、企画開発から納品まで同じ席に座り続けます。',
      'services.mission.label': '私たちの使命',
      'services.mission.h3a': '世界のプロデューサーへ',
      'services.mission.h4a': '力のある企画の権利を確保するために。',
      'services.mission.p1a': '世界市場を目指す映画制作者にとって、力のある企画の権利を確保することは中心的な課題のひとつです。日本は、マンガ、アニメーション、ゲームといった豊富な知的財産で知られており、そのいずれもが世界の映画制作の技芸に大きな影響を与えてきました。',
      'services.mission.p2a': '私たちの仕事は、世界中の思慮深いプロデューサーの皆様と協働し、それを生み出した作り手への敬意をもって、日本の物語を映像化することです。',
      'services.mission.h3b': '日本の皆様へ',
      'services.mission.h4b': 'すべての作り手に敬意を。',
      'services.mission.p1b': '企画の立案と開発の全過程を通じて権利者の皆様と連絡を取り合い、創作上のコントロールおよび作品との関係に対する敬意を欠かさずに進めます。',
      'services.mission.p2b': 'また、日本国内での配給パートナーの選定支援、国際製作における日本人俳優のキャスティング支援、そして米国をはじめ各地域での作品受容に関する情報共有も行っております。',
      'services.closing': '日本の創造の仕組みの中へ。',
      'services.closingEm': '日本アクセス。',
      'services.closingCta': '日本アクセスを見る',

      // ───────── Japan Access
      'japan.sup': '日本アクセス',
      'japan.title': '日本の',
      'japan.titleEm': '創造の仕組みの中へ。',
      'japan.lede': 'IP Bayは日本法人として登録されており、日本の創造産業を支える各機関の皆様への敬意をもって活動しています。',
      'japan.label': '日本アクセス',
      'japan.headline': '日本の作り手の<br>皆様と共に。',
      'japan.desc1': '日本法人とアドバイザーネットワークを通じて、IP Bayは日本の機関パートナーと共に共同製作を支援し、またパートナーの皆様が製作助成制度を活用できるようサポートいたします。',
      'japan.desc2': 'IP Bayの日本オペレーションアドバイザーである<strong>坂本信二</strong>は、日本のコンテンツ産業を支援する国家戦略<strong>クールジャパン機構</strong>の登録会員です。坂本は大阪フィルム・コミッションおよび府との直接の関係を持ち、IP Bayと日本の機関社会をつなぐ架け橋として、真心と敬意をもって職務を担っています。',
      'japan.desc3': '私たちはこの仕事を責任として捉えています。日本の物語は日本のものであり、私たちの役割はそれを世界各地の観客へと思慮深く紹介することを支援することです。',
      'japan.c1.icon': '製作助成',
      'japan.c1.title': '日本キャッシュ・リベート',
      'japan.c1.desc': '経済産業省（METI）が運営する日本のコンテンツ助成制度は、日本国内で行われる適格な製作支出に対して最大50%のキャッシュ・リベートを提供します。IP Bay Inc.は製作パートナーの皆様にこの制度への窓口をご提供いたします。',
      'japan.c1.link': '経済産業省コンテンツ産業課 ↗',
      'japan.c2.icon': '国家戦略',
      'japan.c2.title': 'クールジャパン、2033年までに20兆円',
      'japan.c2.desc': '2024年に再編され、小野田紀美大臣のもと内閣府知的財産戦略本部が主導するクールジャパン戦略は、2033年までに海外コンテンツ収入20兆円の実現を目指しています。坂本は講談社、KADOKAWA、東映、松竹、東宝、バンダイナムコ関連会社と共にこのプラットフォームに参加しています。',
      'japan.c2.link': '内閣府・クールジャパン戦略 ↗',
      'japan.c3.icon': '貿易機関',
      'japan.c3.title': 'JETRO',
      'japan.c3.desc': '日本貿易振興機構（JETRO）東京本部を通じて、IP Bayは日米間の双方向コンテンツ案件のための共同製作リソース、市場情報、支援窓口を活用しています。JETROは50か国に76事務所を展開しています。',
      'japan.c3.link': 'jetro.go.jp ↗',
      'japan.c4.icon': '税制優遇',
      'japan.c4.title': '府県サポート',
      'japan.c4.desc': '日本の都道府県および映像産業振興機構（VIPO）は、日本各地での適格な撮影に対するロケーションおよび製作の補完的優遇制度を運営しています。IP Bayの関係性を通じて、パートナーの皆様は国の助成と重ねて活用できる可能性のある地域制度にアクセスいただけます。',
      'japan.c4.link': 'VIPO・映像産業振興機構 ↗',
      'japan.w1.h3': '日本の出版社の皆様に仕える',
      'japan.w1.h4': '時間をかけて築かれた関係を通じて。',
      'japan.w1.p1': '日本の商習慣においては、関係は時間をかけてゆっくりと築かれ、大切に守られます。私たちはその姿勢を真剣に受け止めています。私たちのご紹介は、長年にわたって信頼を積み上げてきた方々を通じて行われ、その信頼を敬意をもってお預かりしています。',
      'japan.w1.p2': '出版社の皆様が私たちに声をかけてくださるのは、私たちが受け継がせていただいている関係のゆえであり、量のゆえではありません。',
      'japan.w2.h3': '世界のプロデューサーの皆様に仕える',
      'japan.w2.h4': 'まず聴くことから始める声として。',
      'japan.w2.p1': '日本は、マンガ、アニメーション、ゲームにおける豊富な知的財産で世界に知られています。世界の観客を目指す映画制作者の視線は、ますますこれらの物語へと向けられています。',
      'japan.w2.p2': '私たちの役割は双方の理解を助けることであり、どの作品がどの市場に向いているかについて思慮深い視点をお伝えすることです。常に出版社と作り手との対話のなかで進めてまいります。',
      'japan.closing': 'IP Bayのクルー。',
      'japan.closingEm': 'ご乗船を。',
      'japan.closingCta': 'クルーに会う',

      // ───────── Team
      'team.sup': 'クルー',
      'team.title': 'ご',
      'team.titleEm': '乗船を。',
      'team.lede': 'パートナーの皆様、日本の作り手の皆様、そしてこの仕事にふさわしい辛抱強さに向き合う、少数精鋭のクルーです。',
      'team.label': '役員・パートナー',
      'team.m1.role': '会長・IP Bay Inc.',
      'team.m1.bio': '<strong>クローバーウェイ・インク</strong>の創業者。三十年以上にわたり、日本の出版社と米州の観客をつなぐ港として歩んできました。東映アニメーション米州代理人を務め、集英社、講談社、小学館から信頼されるパートナーです。',
      'team.m1.cred1': 'クローバーウェイ創業者',
      'team.m1.cred2': '東映・集英社・講談社',
      'team.m2.role': '代表取締役・東京',
      'team.m2.bio': '日々の出版社対応および日本オペレーションを担当。バイリンガル・バイカルチュラル。著者と出版社の関係を支え、IP Bayと日本の主要出版社をつなぐ中心的な窓口を務めています。',
      'team.m2.cred1': 'KADOKAWA担当',
      'team.m2.cred2': '東京デスク',
      'team.m3.role': '共同創業者・米国オペレーション',
      'team.m3.bio': '米国オペレーションを担当。渡航のアメリカ側にて、スタジオ、配信事業者、投資家との関係を支え、日本の物語を大切に扱うプロデューサーと結びつける仕事を担っています。',
      'team.m3.cred1': '米国オペレーション',
      'team.m3.cred2': 'スタジオ・配信事業者',
      'team.m4.role': '日本オペレーションアドバイザー',
      'team.m4.bio': '<strong>クールジャパン機構</strong>の登録会員。大阪フィルム・コミッションおよび府との直接の関係。真心と敬意をもって、IP Bayと日本の機関パートナーとの仕事を支えています。',
      'team.m4.cred1': 'クールジャパン',
      'team.m4.cred2': '大阪フィルム・コミッション',
      'team.closing': 'ご乗船ください。',
      'team.closingEm': 'お問い合わせ。',
      'team.closingCta': 'ご連絡ください',

      // ───────── Contact
      'contact.sup': 'お問い合わせ',
      'contact.title': 'ご',
      'contact.titleEm': '乗船ください。',
      'contact.lede': '日本の知的財産との協業にご関心をお持ちのプロデューサー、スタジオ、投資家、パートナーの皆様からのご連絡をお待ちしております。',
      'contact.label': 'お問い合わせ',
      'contact.headline': '拠点と<br>お問い合わせ。',
      'contact.desc': 'IP Bayは日本にて法人登録されており、日本および米国で活動しています。東京では出版社の皆様と、ロサンゼルスではスタジオおよびパートナーの皆様と、国際的にはプロデューサーおよび投資家の皆様と密に仕事をしています。いただいたお問い合わせには営業日二日以内のご返信を目指しております。',
      'contact.d1.label': 'IP Bay Inc. 本社',
      'contact.d1.value': '〒659-0067<br>兵庫県芦屋市涼風町14-17',
      'contact.d2.label': '東京',
      'contact.d2.value': '出版社対応、日々の業務',
      'contact.d3.label': 'ロサンゼルス',
      'contact.d3.value': 'スタジオ・配信事業者対応',
      'contact.d4.label': 'ブルックリン',
      'contact.d4.value': '戦略および事業開発',

      // ───────── Form
      'form.firstName': '名',
      'form.lastName': '姓',
      'form.company': '会社名',
      'form.email': 'メールアドレス',
      'form.message': 'メッセージ',
      'form.submit': '送信する',
      'form.firstNamePh': '名',
      'form.lastNamePh': '姓',
      'form.companyPh': '会社名',
      'form.emailPh': 'your@email.com',
      'form.messagePh': 'プロジェクトやお問い合わせ内容をお聞かせください',

      // ───────── Footer
      'footer.tagline': '日本の物語のための港。'
    }
  };

  var STORAGE_KEY = 'ipbay:lang';
  var lang = localStorage.getItem(STORAGE_KEY) || 'en';
  if (!DICT[lang]) lang = 'en';

  var NAV_BY_HREF = {
    './': 'nav.home',
    'legacy.html': 'nav.legacy',
    'cloverway.html': 'nav.cloverway',
    'services.html': 'nav.services',
    'japan.html': 'nav.japan',
    'team.html': 'nav.team',
    'contact.html': 'nav.contact'
  };
  var CURRENT_BY_TEXT = {
    'Legacy': 'nav.legacy',
    'The Cloverway Way': 'nav.cloverway',
    'Services': 'nav.services',
    'Japan Access': 'nav.japan',
    'On Board': 'nav.team',
    'Contact': 'nav.contact'
  };

  function t(key) {
    return (DICT[lang] && DICT[lang][key]) || (DICT.en && DICT.en[key]) || '';
  }

  function apply() {
    document.documentElement.lang = lang;
    document.body && document.body.classList.toggle('lang-ja', lang === 'ja');

    // data-i18n → textContent (safe, no HTML)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    // data-i18n-html → innerHTML (preserves <strong>, <em>, <br>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-html'));
      if (v) el.innerHTML = v;
    });
    // data-i18n-placeholder → placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-placeholder'));
      if (v) el.setAttribute('placeholder', v);
    });
    // Nav anchors by href (skip the brand .nav-logo / .wordmark-nav)
    document.querySelectorAll('nav a, .mobile-nav-overlay a, .chrome-top .nav-links a').forEach(function (a) {
      if (a.classList.contains('nav-logo') || a.classList.contains('wordmark-nav')) return;
      var key = NAV_BY_HREF[a.getAttribute('href')];
      if (key) a.textContent = t(key);
    });
    // Current-page label
    document.querySelectorAll('.nav-current').forEach(function (el) {
      if (el.getAttribute('data-i18n')) return;
      var rememberedKey = el.getAttribute('data-i18n-page');
      if (!rememberedKey) {
        var key = CURRENT_BY_TEXT[el.textContent.trim()];
        if (key) { el.setAttribute('data-i18n-page', key); rememberedKey = key; }
      }
      if (rememberedKey) el.textContent = t(rememberedKey);
    });
    // Footer tagline (global)
    document.querySelectorAll('.footer-tagline').forEach(function (el) {
      el.textContent = t('footer.tagline');
    });
    // Toggle pill state
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function injectStyles() {
    if (document.getElementById('ipbay-i18n-styles')) return;
    // Load Shippori Mincho for Japanese mode (slightly heavier, more traditional/official)
    var fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontLink);

    var css =
      '.lang-toggle{display:inline-flex;align-items:center;gap:2px;background:rgba(247,241,229,0.08);border:1px solid rgba(247,241,229,0.2);border-radius:999px;padding:3px;margin-left:14px;flex-shrink:0;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 2px 14px -4px rgba(0,0,0,0.28)}' +
      '.lang-toggle-btn{display:inline-flex;align-items:center;gap:6px;font-family:"Inter",-apple-system,BlinkMacSystemFont,sans-serif;background:transparent;border:0;padding:5px 11px;border-radius:999px;cursor:pointer;line-height:1;color:rgba(247,241,229,0.65);transition:background 0.25s ease,color 0.25s ease}' +
      '.lang-toggle-flag{font-size:13px;line-height:1;font-family:"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif}' +
      '.lang-toggle-label{font-size:10.5px;letter-spacing:0.12em;font-weight:500}' +
      '.lang-toggle-btn[data-lang="ja"] .lang-toggle-label{font-size:12.5px;letter-spacing:0.01em}' +
      '.lang-toggle-btn:hover{color:#F7F1E5}' +
      '.lang-toggle-btn.active{background:#C9A66B;color:#0F2A3D}' +
      '@media (max-width:720px){' +
        '.lang-toggle{margin-left:8px;padding:2px}' +
        '.lang-toggle-btn{gap:4px;padding:4px 8px}' +
        '.lang-toggle-flag{font-size:12px}' +
        '.lang-toggle-label{font-size:9.5px;letter-spacing:0.08em}' +
        '.lang-toggle-btn[data-lang="ja"] .lang-toggle-label{font-size:11px}' +
      '}' +
      /* Japanese mode: swap to Shippori Mincho for serif headings + body, Inter kept for labels */
      'body.lang-ja{font-family:"Shippori Mincho","Hiragino Mincho ProN","Yu Mincho",serif}' +
      'body.lang-ja h1,body.lang-ja h2,body.lang-ja h3,body.lang-ja h4,' +
      'body.lang-ja .title-card-mark,body.lang-ja .page-header-title,body.lang-ja .cwway-mark,' +
      'body.lang-ja .panel-headline,body.lang-ja .closing-title,body.lang-ja .team-name,' +
      'body.lang-ja .catalog-headline,body.lang-ja .services-headline,body.lang-ja .govt-headline,' +
      'body.lang-ja .contact-headline,body.lang-ja .networks-headline,body.lang-ja .display,' +
      'body.lang-ja .seabed .wordmark,body.lang-ja .pnet-h1' +
      '{font-family:"Shippori Mincho","Hiragino Mincho ProN","Yu Mincho",serif;font-weight:500;letter-spacing:0}' +
      'body.lang-ja .title-card-mark em,body.lang-ja .page-header-title em,body.lang-ja h2 em,body.lang-ja .closing-title em' +
      '{font-style:normal}' + /* italic looks unnatural for Japanese characters */
      'body.lang-ja .title-card-tagline,body.lang-ja .lede,body.lang-ja .panel-body,body.lang-ja .svc-desc,' +
      'body.lang-ja .govt-desc,body.lang-ja .team-bio,body.lang-ja .cwway-col p,body.lang-ja .page-header-lede,' +
      'body.lang-ja .contact-desc,body.lang-ja .catalog-sub,body.lang-ja .networks-desc,body.lang-ja .cw-credit-desc' +
      '{font-family:"Shippori Mincho","Hiragino Mincho ProN","Yu Mincho",serif;font-weight:400}' +
      'body.lang-ja .title-card-tagline{font-style:normal}' +
      'body.lang-ja .footer-tagline{font-family:"Shippori Mincho","Hiragino Mincho ProN","Yu Mincho",serif}';
    var style = document.createElement('style');
    style.id = 'ipbay-i18n-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function injectToggle() {
    var hamburger = document.querySelector('.nav-toggle');
    var container = hamburger ? hamburger.parentElement : document.querySelector('nav');
    if (!container || container.querySelector('.lang-toggle')) return;
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';
    toggle.setAttribute('role', 'group');
    toggle.setAttribute('aria-label', 'Switch language · 言語切替');
    toggle.innerHTML =
      '<button type="button" class="lang-toggle-btn" data-lang="en" aria-pressed="true" aria-label="English">' +
        '<span class="lang-toggle-flag" aria-hidden="true">\uD83C\uDDFA\uD83C\uDDF8</span>' +
        '<span class="lang-toggle-label">EN</span>' +
      '</button>' +
      '<button type="button" class="lang-toggle-btn" data-lang="ja" aria-pressed="false" aria-label="日本語">' +
        '<span class="lang-toggle-flag" aria-hidden="true">\uD83C\uDDEF\uD83C\uDDF5</span>' +
        '<span class="lang-toggle-label">日本語</span>' +
      '</button>';
    if (hamburger) container.insertBefore(toggle, hamburger);
    else container.appendChild(toggle);
    toggle.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.lang-toggle-btn');
      if (!btn) return;
      var next = btn.getAttribute('data-lang');
      if (!next || next === lang || !DICT[next]) return;
      lang = next;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
      apply();
    });
  }

  function init() {
    injectStyles();
    injectToggle();
    apply();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
