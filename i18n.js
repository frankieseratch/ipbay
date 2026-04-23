/* IP Bay i18n — English / 日本語 toggle
   Phase 1: nav, page headers, closing CTAs, form labels, key taglines.
   ⚠ Japanese translations are a first pass — flag on ipbay_ja_review.md any phrasing
   that reads unnaturally and have Yasuo / Jun / Shinji correct before shipping phase 2.
*/
(function () {
  var DICT = {
    en: {
      // Nav
      'nav.home': 'Home',
      'nav.legacy': 'Legacy',
      'nav.cloverway': 'The Cloverway Way',
      'nav.services': 'Services',
      'nav.japan': 'Japan Access',
      'nav.team': 'On Board',
      'nav.contact': 'Contact',

      // Landing (index.html)
      'home.tagline': 'A harbor for Japanese stories on their voyage to the world.',
      'home.sub': 'Japan first · Author first',
      'home.scrollcue': 'Set Sail',
      'home.seabedLede': 'A harbor for Japanese stories. Est. 2026.',
      'home.enterLegacy': 'Enter the Legacy',

      // Legacy page
      'legacy.sup': 'Legacy',
      'legacy.title': 'Cloverway Inc.',
      'legacy.lede': 'Founded 1991, onward. IP Bay carries forward the relationships Yasuo Matsuo built across three decades as one of the earliest harbors between Japanese animation and audiences in the Americas.',
      'legacy.closing': 'The operating principles we continue to honor.',
      'legacy.closingEm': 'The Cloverway Way.',
      'legacy.closingCta': 'Read the record',

      // Cloverway page
      'cloverway.sup': 'The Cloverway Way',
      'cloverway.closingCta': 'See Services',

      // Services page
      'services.sup': 'Services',
      'services.title': 'What we do.',
      'services.lede': 'IP Bay represents Japanese intellectual property to the world. Each engagement is structured around the property and the partners. There is no single deal template. The services below describe the work we take on directly.',
      'services.closing': "Inside Japan's creative system.",
      'services.closingEm': 'Japan Access.',
      'services.closingCta': 'See Japan access',

      // Japan Access page
      'japan.sup': 'Japan Access',
      'japan.title': "Inside Japan's",
      'japan.titleEm': 'creative system.',
      'japan.lede': "IP Bay is registered as a Japanese corporation and works with respect for the institutional partners that support Japan's creative industries.",
      'japan.closing': 'The crew at IP Bay.',
      'japan.closingEm': 'On Board.',
      'japan.closingCta': 'Meet the crew',

      // Team page
      'team.sup': 'On Board',
      'team.closing': 'Come aboard.',
      'team.closingEm': 'Contact.',
      'team.closingCta': 'Get in touch',

      // Contact page
      'contact.sup': 'Contact',
      'contact.title': 'Come',
      'contact.titleEm': 'aboard.',
      'contact.lede': 'For producers, studios, financiers, and partners interested in working with Japanese intellectual property, we welcome the conversation.',

      // Contact form
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

      // Footer
      'footer.tagline': 'A harbor for Japanese stories.'
    },

    ja: {
      // Nav
      'nav.home': 'ホーム',
      'nav.legacy': '沿革',
      'nav.cloverway': 'クローバーウェイの流儀',
      'nav.services': 'サービス',
      'nav.japan': '日本アクセス',
      'nav.team': 'メンバー',
      'nav.contact': 'お問い合わせ',

      // Landing
      'home.tagline': '日本の物語を世界へと運ぶ港。',
      'home.sub': '日本を第一に・著者を第一に',
      'home.scrollcue': '出航',
      'home.seabedLede': '日本の物語のための港。2026年創立。',
      'home.enterLegacy': '沿革を見る',

      // Legacy page
      'legacy.sup': '沿革',
      'legacy.title': 'クローバーウェイ・インク',
      'legacy.lede': '1991年創立。IP Bayは、松尾安雄が三十年にわたって築き上げた関係を受け継いでいます。日本のアニメーションとアメリカ大陸の観客をつないだ、最も初期の港のひとつでした。',
      'legacy.closing': '今も守り続ける運営の原則。',
      'legacy.closingEm': 'クローバーウェイの流儀。',
      'legacy.closingCta': '記録を読む',

      // Cloverway
      'cloverway.sup': 'クローバーウェイの流儀',
      'cloverway.closingCta': 'サービスを見る',

      // Services
      'services.sup': 'サービス',
      'services.title': '私たちの仕事。',
      'services.lede': 'IP Bayは日本の知的財産を世界に届けます。各案件は作品とパートナーに合わせて組み立てられ、定型の契約はありません。以下のサービスは、私たちが直接担う仕事を示しています。',
      'services.closing': '日本の創造の仕組みの中へ。',
      'services.closingEm': '日本アクセス。',
      'services.closingCta': '日本アクセスを見る',

      // Japan Access
      'japan.sup': '日本アクセス',
      'japan.title': '日本の',
      'japan.titleEm': '創造の仕組みの中へ。',
      'japan.lede': 'IP Bayは日本法人として登録されており、日本の創造産業を支える各機関への敬意をもって活動しています。',
      'japan.closing': 'IP Bayのクルー。',
      'japan.closingEm': 'ご乗船いただきます。',
      'japan.closingCta': 'クルーに会う',

      // Team
      'team.sup': 'メンバー',
      'team.closing': 'ご乗船ください。',
      'team.closingEm': 'お問い合わせ。',
      'team.closingCta': 'ご連絡ください',

      // Contact
      'contact.sup': 'お問い合わせ',
      'contact.title': 'ご',
      'contact.titleEm': '乗船ください。',
      'contact.lede': '日本の知的財産との協業にご関心をお持ちのプロデューサー、スタジオ、投資家、パートナーの皆様からのご連絡をお待ちしております。',

      // Form
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

      // Footer
      'footer.tagline': '日本の物語のための港。'
    }
  };

  var STORAGE_KEY = 'ipbay:lang';
  var lang = localStorage.getItem(STORAGE_KEY) || 'en';
  if (!DICT[lang]) lang = 'en';

  // Anchor-by-href translation so nav never needs data-i18n attributes
  var NAV_BY_HREF = {
    './': 'nav.home',
    'legacy.html': 'nav.legacy',
    'cloverway.html': 'nav.cloverway',
    'services.html': 'nav.services',
    'japan.html': 'nav.japan',
    'team.html': 'nav.team',
    'contact.html': 'nav.contact'
  };

  // `.nav-current` text is the active-page label added to each subpage — translate by current page
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

    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    // data-i18n-placeholder → placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-placeholder'));
      if (v) el.setAttribute('placeholder', v);
    });
    // Nav anchors by href (skip the brand .nav-logo)
    document.querySelectorAll('nav a, .mobile-nav-overlay a, .chrome-top .nav-links a').forEach(function (a) {
      if (a.classList.contains('nav-logo') || a.classList.contains('wordmark-nav')) return;
      var key = NAV_BY_HREF[a.getAttribute('href')];
      if (key) a.textContent = t(key);
    });
    // Current-page indicator span
    document.querySelectorAll('.nav-current').forEach(function (el) {
      var dataKey = el.getAttribute('data-i18n');
      if (dataKey) return; // already handled by data-i18n pass
      var key = CURRENT_BY_TEXT[el.textContent.trim()];
      if (key) el.setAttribute('data-i18n-page', key); // remember for future toggles
      var rememberedKey = el.getAttribute('data-i18n-page');
      if (rememberedKey) el.textContent = t(rememberedKey);
    });
    // Footer tagline by class (global)
    document.querySelectorAll('.footer-tagline').forEach(function (el) {
      el.textContent = t('footer.tagline');
    });
    // Toggle button active state
    document.querySelectorAll('.lang-toggle-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function injectToggle() {
    var nav = document.querySelector('nav');
    if (!nav || nav.querySelector('.lang-toggle')) return;
    var toggle = document.createElement('div');
    toggle.className = 'lang-toggle';
    toggle.setAttribute('role', 'group');
    toggle.setAttribute('aria-label', 'Switch language · 言語切替');
    toggle.innerHTML =
      '<button type="button" class="lang-toggle-btn" data-lang="en" aria-pressed="true">EN</button>' +
      '<button type="button" class="lang-toggle-btn" data-lang="ja" aria-pressed="false">日本語</button>';
    var hamburger = nav.querySelector('.nav-toggle');
    if (hamburger) nav.insertBefore(toggle, hamburger);
    else nav.appendChild(toggle);
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
    injectToggle();
    apply();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
