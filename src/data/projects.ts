// src/data/projects.ts

export type SectionType = "hero" | "text" | "image" | "stats" | "summary";

export interface ProjectSection {
  type: SectionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string[];
  duration: string;
  image: string;
  link?: string;
  sections: ProjectSection[];
}

// --- RUSSIAN DATA ---
const projectsRu: Project[] = [
  {
    id: 1,
    slug: "ithub",
    title: "Главная страница IThub College",
    category: ["Сайт"],
    duration: "3 дня",
    image: "/photos/content/ithub/main.webp",
    link: "https://ithub.ru",
    sections: [
      {
        type: "hero",
        content: {
          title: "Главная страница IThub College",
          tags: ["EdTech", "Web Design", "Dark Mode"],
        },
      },
      {
        type: "text",
        content: {
          title: "Интерфейс, который продаёт",
          text: "Пока государственные вузы верстают цифровые стенгазеты из нулевых, мы делаем интерфейс, который продаёт. Если сайт колледжа выглядит хуже, чем лендинг курсов успешного успеха, вы теряете абитуриента за 3 секунды.\n\nВ проекте стояла задача превратить учебное заведение в место, куда хочется нести деньги.\n\nКлиент обратился с проблемой коммерческого колледжа с амбициями, но с отсутствием внятного позиционирования и древним лендингом.\n\nВ основе проекта лежал конфликт аудиторий: сайт должны любить подростки как ЦА, а деньги платят родители как ЛПР, при этом текущий визуал был инфантильным, а контент бюрократическим.\n\nПеред нами стояла задача разработать визуальную концепцию, которая будет продавать колледж как IT-стартап."
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/NewHeroLooksLike.jpg",
          alt: "Новый дизайн первого экрана",
        },
      },
      {
        type: "text",
        content: {
          title: "Jobs To Be Done",
          text: "Мы имеем дело с двумя противоположными психотипами на одном экране. Угодить всем означает сделать серую массу. Мы развели потоки визуально и по смыслу.\n\nПодростку плевать на ФГОСы. Он хочет вайб, тусовку и чувствовать себя героем Мистера Робота.\nРешение: тёмная тема, неоновая палитра, 3D-маскоты и эстетика киберпанка.\n\nРодителю плевать на неон, потому что он хочет гарантий, дипломов и безопасности инвестиций.",
        },
      },
      {
        type: "text",
        content: {
          title: "Визуальная архитектура",
          text: "Мы ушли от реальных фото низкого качества, которые удешевляли бренд.\n\nВместо этого внедрили AI-генерацию и 3D-ассеты маскота колледжа. Вместо шаблонных фото весёлого подростка с упаковки сока добавили реальные фото колледжа.\n\nЭто задало планку качества, которой клиент теперь обязан соответствовать в своём контенте.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/Professions.jpg",
          alt: "Визуальный стиль направлений",
        },
      },
      {
        type: "text",
        content: {
          title: "Проектирование и работа с возражениями",
          text: "Главная боль платного образования — стоимость обучения. Увидеть ценник в 60 000 ₽/мес и уйти — стандартный сценарий родителя. Мы перехватили этот сценарий.\n\nВместо прайс-листа Excel сделали карточки тарифов с цветовым кодированием. Внедрили блок «Образовательный кредит» сразу после цены.\n\nНе извиняемся за то, что платно и даём решение. Превращаем неподъёмную трату в умную инвестицию в будущее.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/BenefitsPricesAndCredit.jpg",
          alt: "Блок стоимости и кредита",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/FeedbackForm.jpg",
          alt: "Форма заявки",
        },
      },
      {
        type: "text",
        content: {
          title: "Чистка навигации",
          text: "Убили бюрократию и вместо каши из ссылок сделали двухуровневое короткое меню с выпадающим списком.\n\nПоиск свернули в иконку, освободив 20% полезной площади экрана для контента.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/NewHeaderLooksLike.jpg",
          alt: "Новая шапка сайта",
        },
      },
      {
        type: "summary",
        content: {
          title: "Итог",
          text: "Клиент получил концепт уровня топ-студий за бюджет фриланса. Сайт колледжа выглядит как интерфейс Netflix и не как портал Госуслуг. Дизайн принят без вкусовщины, потому что каждое решение было обосновано деньгами и психологией пользователя.",
          buttons: [
            { label: "Смотреть сайт", url: "https://ithub.ru", primary: false },
            { label: "Обсудить проект", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    slug: "smartfeed",
    title: "MVP SmartFeed агрегатора контента",
    category: ["Приложение", "Питч-дек"],
    duration: "1 месяц",
    image: "/photos/content/smartfeed/main.webp",
    link: "#",
    sections: [
      {
        type: "hero",
        content: {
          title: "MVP SmartFeed агрегатора контента",
          tags: ["Приложение", "Агрегатор", "AI", "UX/UI", "Питч-дек"],
        },
      },
      {
        type: "text",
        content: {
          title: "Информационная гигиена",
          text: "Пока хипстеры перерисовывают иконки и ищут градиенты, мы решаем инженерную задачу того, как достать информацию из-под блокировок и инфошума. Приложение должно упрощать жизнь в цифровой изоляции.\n\nКлиент обратился с проектом для российского рынка, где в условиях блокировки Meta пользователи столкнулись с проблемой информационного шума.\n\nЧтобы оставаться в курсе, им приходится неэффективно мониторить VK, Telegram, Дзен и Youtube, что приводит к FOMO и бесконечному скроллингу лент.\n\nПеред нами стояла задача разработать MVP, который будет собирать контент в одном месте, фильтровать его с помощью AI и обеспечивать анонимность."
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/PhotoWithMainAppBenefits.jpg",
          alt: "Ключевые преимущества приложения",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/competitors.jpg",
          alt: "Ключевые преимущества приложения",
        },
      },
      {
        type: "text",
        content: {
          title: "Архитектура решений",
          text: "Юзерам плевать на экосистемы, им нужен контент. Система парсит всё: от открытых источников до тех, что под ограничениями. Нейросеть (SF.AI) анализирует интересы по поведению.\nРезультат: релевантная лента без мусора.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/FeedProfileAndSearch.jpg",
          alt: "Лента и поиск",
        },
      },
      {
        type: "text",
        content: {
          title: "Onboarding и Анонимность",
          text: "Обычные приложения требуют почту, телефон и анализы кала на входе. Это убивает конверсию. Мы сделали вход без регистрации. Зашёл, ткнул в интересы, получил пользу.\n\nВход нужен только чтобы сохранить лайки. Это снижает барьер входа до нуля. Мы даём дофамин сразу, а требуем данные потом.\n\nМы внедрили систему обезличенных профилей. Только хэш данных. Смотришь контент, система знает, что тебе нравится, но не знает, кто ты.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/OnboardingAndAnonymousUsing.jpg",
          alt: "Онбординг и анонимность",
        },
      },
      {
        type: "text",
        content: {
          title: "Борьба с перегрузом",
          text: "Интерфейсы конкурентов (особенно VK) — визуальная свалка. Юзер не понимает, где кончается один пост и начинается реклама средств от геморроя.\n\nПоэтому мы добавили каждой карточке поста мягкую тень и увеличенный отступ. Не для красоты, а потому, что тесты показали, что в VK пользователи теряются в потоке. Чёткое разделение позволяет мозгу быстрее обрабатывать информацию.\n\nМеньше нагрузка = дольше сессия = больше денег бизнесу.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/PostsSeparate.jpg",
          alt: "Разделение постов в ленте",
        },
      },
      {
        type: "text",
        content: {
          title: "Mobile Logic",
          text: "Взяли паттерны инстаграма, чтобы снизить порог входа. Привычный интерфейс снижает когнитивное сопротивление.\n\nРеакции доступны всем как вовлечение. Комментарии доступны только по подписке (барьер от спама и ботов + монетизация). Это отсекает троллей и создаёт элитарность для тех, кто готов платить за право высказывать точку зрения.",
        },
      },
      {
        type: "summary",
        content: {
          title: "Итог",
          text: "Разработка встала на паузу, потому что инвесторы временно приостановили финансирование в связи с новыми политическими рисками. Спроектировали систему, которая решает проблему дефицита западного контента и избытка отечественного. Чистая функциональность, завёрнутая в понятный UI.",
          buttons: [
            { label: "Обсудить проект", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    slug: "ysreda",
    title: "Конверсионный лендинг для Уютной Среды",
    category: ["Сайт"],
    duration: "6 дней",
    image: "/photos/ysreda.webp",
    link: "http://ysreda.tilda.ws/",
    sections: [
      {
        type: "hero",
        content: {
          title: "Конверсионный лендинг для Уютной Среды",
          tags: ["B2B", "Конверсия", "UX/UI"],
        },
      },
      {
        type: "text",
        content: {
          title: "Перевод бизнеса в B2B",
          text: "Пока дизайнеры молятся на сетки и воздух, мы занимаемся конверсией и логикой. Если интерфейс не приносит деньги бизнесу, то это цифровой мусор, как бы красиво он ни выглядел.\n\nВ проекте для Уютной Среды стояла задача трансформировать розничного продавца в B2B-поставщика для HoReCa.\n\nКлиент, производитель, масштабирующийся на B2B-рынок, обратился с проблемой: у него не было ни сайта, ни репутации в профессиональной среде, а все продажи шли через маркетплейсы.\n\nПеред нами стояла задача разработать лендинг, генерирующий лидов."
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/context.png",
          alt: "Контекст проекта",
        },
      },
      {
        type: "text",
        content: {
          title: "Jobs To Be Done",
          text: "B2B-заказчик это не импульсивный покупатель. У него жёсткие KPI, сроки и бюджеты. Мы декомпозировали их потребности по методу JTBD и выяснили, что клиент — это четыре основных психотипа со своими барьерами.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/painandfears.png",
          alt: "Боли и страхи клиентов",
        },
      },
      {
        type: "text",
        content: {
          title: "Архитектура решений",
          text: "Внедрили функционал, отвечающий болям ЦА:\n— PDF-презентация для защиты бюджета, позволяющая менеджеру на стороне клиента обосновать покупку перед своим руководством.\n— Видео краш-тестов как эмпирическое доказательство качества работает лучше тысячи слов.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/optimizationsales.png",
          alt: "Инструменты продаж",
        },
      },
      {
        type: "text",
        content: {
          title: "UX проектирование и упразднение корзины",
          text: "В B2B стандартная корзина — атавизм. Оптовые клиенты не оплачивают фуру диванов картой на сайте. Лишние клики убивают конверсию. Мы выкинули всё лишнее.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/interfacedesign1.png",
          alt: "Дизайн интерфейса без корзины",
        },
      },
      {
        type: "text",
        content: {
          text: "Мы реализовали концепцию One-Click-Lead. Вместо кнопки покупки реализовали контекстную заявку. Менеджер получает лид сразу со спецификацией интересующего товара. Это ускоряет закрытие сделки на 30% и исключает человеческий фактор при расчётах.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/interfacedesign2.png",
          alt: "Форма заявки",
        },
      },
      {
        type: "text",
        content: {
          text: "Интерфейс спроектирован отвечая на вопросы до того, как они будут заданы:\n— Подтверждение статуса прямого производителя (отстройка от перекупщиков)\n— Инструменты для быстрого бюджетирования\n— Юридические гарантии и ГОСТы на видном месте",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/validation.png",
          alt: "Блок доверия и гарантий",
        },
      },
      {
        type: "text",
        content: {
          title: "Mobile First адаптация",
          text: "60% B2B-запросов поступает с мобильных устройств. Лица, принимающие решения, часто находятся в полях, а не в офисе. Сайт, который некорректно работает на смартфоне означает потерянного клиента.\n\nРазработали адаптив с приоритетом на юзабилити: увеличенные тач-зоны и мгновенный доступ к контактам через бургер-меню.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/interfacedesign3.png",
          alt: "Мобильная версия",
        },
      },
      {
        type: "text",
        content: {
          title: "Техническая оптимизация",
          text: "Показатели Google Lighthouse подтверждают качество нашей архитектуры. Сайт загружается мгновенно, не теряя пользователей даже при нестабильном мобильном интернете.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/lighthouse.png",
          alt: "Показатели Google Lighthouse",
        },
      },
      {
        type: "summary",
        content: {
          title: "Итог",
          text: "Клиент получил стабильный поток целевых заявок, а мы продемонстрировали, что системный подход и логика в дизайне побеждают субъективное нравится или не нравится.",
          buttons: [
            { label: "Смотреть сайт", url: "http://ysreda.tilda.ws/", primary: false },
            { label: "Обсудить проект", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
];

// --- ENGLISH DATA ---
const projectsEn: Project[] = [
  {
    id: 1,
    slug: "ithub",
    title: "IThub College Homepage",
    category: ["Website"],
    duration: "3 days",
    image: "/photos/content/ithub/main.webp",
    link: "https://ithub.ru",
    sections: [
      {
        type: "hero",
        content: {
          title: "IThub College Homepage",
          tags: ["EdTech", "Web Design", "Dark Mode"],
        },
      },
      {
        type: "text",
        content: {
          title: "Interface that sells",
          text: "While public universities are designing digital wall newspapers from the 2000s, we build interfaces that sell. If a college website looks worse than a generic 'success course' landing page, you lose the applicant in 3 seconds.\n\nThe task was to turn an educational institution into a place where people want to bring their money.\n\nThe client approached us with a commercial college that had ambitions but lacked clear positioning and had an ancient landing page.\n\nThe project was based on a conflict of audiences: the site must be loved by teenagers (the target audience), but the money is paid by parents (decision-makers). The current visuals were infantile, and the content was bureaucratic.\n\nOur task was to develop a visual concept that would sell the college like an IT startup."
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/NewHeroLooksLike_en.jpg",
          alt: "New Hero Design",
        },
      },
      {
        type: "text",
        content: {
          title: "Jobs To Be Done",
          text: "We are dealing with two opposite psychotypes on one screen. Trying to please everyone means making a grey mass. We separated the flows visually and semantically.\n\nThe teenager doesn't care about state standards. They want vibes, a community, and to feel like the hero of Mr. Robot.\nSolution: dark mode, neon palette, 3D mascots, and cyberpunk aesthetics.\n\nThe parent doesn't care about neon because they want guarantees, diplomas, and investment security.",
        },
      },
      {
        type: "text",
        content: {
          title: "Visual Architecture",
          text: "We moved away from low-quality real photos that cheapened the brand.\n\nInstead, we implemented AI generation and 3D assets of the college mascot. Instead of stock photos of a happy teenager with a juice box, we added real photos of the college.\n\nThis set a quality bar that the client is now obliged to meet in their content.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/Professions.jpg",
          alt: "Visual style of professions",
        },
      },
      {
        type: "text",
        content: {
          title: "Engineering and Handling Objections",
          text: "The main pain of paid education is the tuition cost. Seeing a price tag of 60,000 ₽/month and leaving is a standard parent scenario. We intercepted this scenario.\n\nInstead of an Excel price list, we made tariff cards with color coding. We implemented an 'Educational Loan' block immediately after the price.\n\nWe don't apologize for it being paid; we provide a solution. We turn an unbearable expense into a smart investment in the future.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/BenefitsPricesAndCredit.jpg",
          alt: "Price and credit block",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/FeedbackForm.jpg",
          alt: "Application form",
        },
      },
      {
        type: "text",
        content: {
          title: "Navigation Cleanup",
          text: "We killed bureaucracy and instead of a mess of links, we made a two-level short menu with a dropdown list.\n\nSearch was collapsed into an icon, freeing up 20% of useful screen area for content.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/NewHeaderLooksLike_en.jpg",
          alt: "New website header",
        },
      },
      {
        type: "summary",
        content: {
          title: "Summary",
          text: "The client received a top-studio level concept for a freelance budget. The college website looks like the Netflix interface, not a government portal. The design was accepted without 'taste discussions' because every decision was justified by money and user psychology.",
          buttons: [
            { label: "View Website", url: "https://ithub.ru", primary: false },
            { label: "Discuss Project", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    slug: "smartfeed",
    title: "SmartFeed Content Aggregator MVP",
    category: ["App", "Pitch Deck"],
    duration: "1 month",
    image: "/photos/content/smartfeed/main.webp",
    link: "#",
    sections: [
      {
        type: "hero",
        content: {
          title: "SmartFeed Content Aggregator MVP",
          tags: ["App", "Aggregator", "AI", "UX/UI", "Pitch Deck"],
        },
      },
      {
        type: "text",
        content: {
          title: "Information Hygiene",
          text: "While hipsters are redrawing icons and looking for gradients, we are solving the engineering problem of how to get information out from under blocks and information noise. The application should simplify life in digital isolation.\n\nThe client approached us with a project for the Russian market, where, under the conditions of Meta blocking, users faced the problem of information noise.\n\nTo stay informed, they have to inefficiently monitor VK, Telegram, Zen, and Youtube, which leads to FOMO and endless feed scrolling.\n\nOur task was to develop an MVP that would collect content in one place, filter it using AI, and ensure anonymity."
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/PhotoWithMainAppBenefits_en.png",
          alt: "Key app benefits",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/competitors_en.jpg",
          alt: "Competitors analysis",
        },
      },
      {
        type: "text",
        content: {
          title: "Solution Architecture",
          text: "Users don't give a shit about ecosystems; they need content. The system parses everything: from open sources to those under restrictions. Neural network (SF.AI) analyzes interests by behavior.\nResult: a relevant feed without trash.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/FeedProfileAndSearch_en.jpg",
          alt: "Feed and Search",
        },
      },
      {
        type: "text",
        content: {
          title: "Onboarding and Anonymity",
          text: "Ordinary applications require email, phone, and stool samples at the entrance. This kills conversion. We made entry without registration. Entered, tapped on interests, got value.\n\nLogin is only needed to save likes. This lowers the entry barrier to zero. We give dopamine immediately and demand data later.\n\nWe implemented a system of impersonal profiles. Only a data hash. You watch content, the system knows what you like, but doesn't know who you are.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/OnboardingAndAnonymousUsing_en.png",
          alt: "Onboarding and anonymous use",
        },
      },
      {
        type: "text",
        content: {
          title: "Fighting Overload",
          text: "Competitors' interfaces (especially VK) are a visual dump. The user does not understand where one post ends and an ad for hemorrhoid remedies begins.\n\nTherefore, we added a soft shadow and increased padding to each post card. Not for beauty, but because tests showed that in VK users get lost in the stream. Clear separation allows the brain to process information faster.\n\nLess load = longer session = more money for business.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/PostsSeparate_en.jpg",
          alt: "Posts separation",
        },
      },
      {
        type: "text",
        content: {
          title: "Mobile Logic",
          text: "We took Instagram patterns to lower the entry threshold. A familiar interface reduces cognitive resistance.\n\nReactions are available to everyone as engagement. Comments are available only by subscription (barrier against spam and bots + monetization). This cuts off trolls and creates elitism for those ready to pay for the right to express an opinion.",
        },
      },
      {
        type: "summary",
        content: {
          title: "Summary",
          text: "Development was paused because investors temporarily suspended funding due to new political risks. We designed a system that solves the problem of a deficit of Western content and an excess of domestic content. Pure functionality wrapped in a clear UI.",
          buttons: [
            { label: "Discuss Project", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    slug: "ysreda",
    title: "High-conversion landing page for Cozy Sreda",
    category: ["Website"],
    duration: "6 days",
    image: "/photos/ysreda.webp",
    link: "http://ysreda.tilda.ws/",
    sections: [
      {
        type: "hero",
        content: {
          title: "High-conversion landing page for Cozy Sreda",
          tags: ["B2B", "Conversion", "UX/UI"],
        },
      },
      {
        type: "text",
        content: {
          title: "Business transition to B2B",
          text: "While designers pray to grids and whitespace, we deal with conversion and logic. If an interface doesn't bring money to the business, it's digital trash, no matter how beautiful it looks.\n\nIn the project for Cozy Sreda, the task was to transform a retail seller into a B2B supplier for HoReCa.\n\nThe client, a manufacturer scaling to the B2B market, approached us with a problem: they had neither a website nor a reputation in the professional environment, and all sales went through marketplaces.\n\nOur task was to develop a landing page generating leads."
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/context_en.png",
          alt: "Project context",
        },
      },
      {
        type: "text",
        content: {
          title: "Jobs To Be Done",
          text: "A B2B customer is not an impulsive buyer. They have strict KPIs, deadlines, and budgets. We decomposed their needs using the JTBD method and found out that the client consists of four main psychotypes with their own barriers.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/painandfears_en.png",
          alt: "Pain and fears",
        },
      },
      {
        type: "text",
        content: {
          title: "Solution Architecture",
          text: "We implemented functionality addressing TA pains:\n— PDF presentation for budget protection, allowing the manager on the client side to justify the purchase to their management.\n— Crash test videos as empirical proof of quality work better than a thousand words.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/optimizationsales_en.png",
          alt: "Sales tools",
        },
      },
      {
        type: "text",
        content: {
          title: "UX Design and Cart Elimination",
          text: "In B2B, a standard cart is an atavism. Wholesale clients do not pay for a truckload of sofas with a card on the website. Extra clicks kill conversion. We threw out everything unnecessary.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/interfacedesign1_en.png",
          alt: "Interface design without cart",
        },
      },
      {
        type: "text",
        content: {
          text: "We implemented the One-Click-Lead concept. Instead of a buy button, we implemented a context application. The manager receives a lead immediately with the specification of the product of interest. This speeds up deal closing by 30% and eliminates the human factor in calculations.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/interfacedesign2_en.png",
          alt: "Application form",
        },
      },
      {
        type: "text",
        content: {
          text: "The interface is designed answering questions before they are asked:\n— Confirmation of direct manufacturer status (differentiation from resellers)\n— Tools for quick budgeting\n— Legal guarantees and GOST standards in a visible place",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/validation_en.png",
          alt: "Trust block and guarantees",
        },
      },
      {
        type: "text",
        content: {
          title: "Mobile First Adaptation",
          text: "60% of B2B requests come from mobile devices. Decision-makers are often in the field, not in the office. A website that works incorrectly on a smartphone means a lost client.\n\nWe developed a responsive design with a priority on usability: increased touch zones and instant access to contacts via the burger menu.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/interfacedesign3_en.png",
          alt: "Mobile version",
        },
      },
      {
        type: "text",
        content: {
          title: "Technical Optimization",
          text: "Google Lighthouse indicators confirm the quality of our architecture. The site loads instantly without losing users even with unstable mobile internet.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ysreda/lighthouse_en.png",
          alt: "Google Lighthouse scores",
        },
      },
      {
        type: "summary",
        content: {
          title: "Summary",
          text: "The client received a stable flow of targeted leads, and we demonstrated that a systematic approach and logic in design defeat subjective 'like or dislike'.",
          buttons: [
            { label: "View Website", url: "http://ysreda.tilda.ws/", primary: false },
            { label: "Discuss Project", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
];

// ГЛАВНАЯ ФУНКЦИЯ: отдает нужный массив в зависимости от языка
export const getProjects = (locale: string) => {
  return locale === 'en' ? projectsEn : projectsRu;
}

// Вспомогательная функция для поиска по слагу (тоже учитывает язык)
export const getProjectBySlug = (slug: string, locale: string) => {
  const all = getProjects(locale);
  return all.find((p) => p.slug === slug);
}