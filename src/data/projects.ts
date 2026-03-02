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
  badge?: string;
  duration: string;
  image: string;
  link?: string;
  sections: ProjectSection[];
}

// --- RUSSIAN DATA ---
const projectsRu: Project[] = [
  {
    id: 4,
    slug: "powerm",
    title: "Карьерный портал Силовых Машин",
    category: ["Сайт", "HR-бренд", "UX/UI"],
    badge: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 141.7 141.7" xml:space="preserve"><style>.st0{fill:#FF0033;}.st1{fill:#FFFFFF;}</style><polygon class="st0" points="70.9,0 78.4,13.8 89.2,2.4 92.9,17.7 106.3,9.5 105.9,25.2 121,20.8 116.5,35.8 132.2,35.4 124.1,48.8 139.3,52.5 128,63.4 141.7,70.9 128,78.4 139.3,89.2 124.1,92.9 132.2,106.3 116.5,105.9 121,121 105.9,116.5 106.3,132.2 92.9,124.1 89.2,139.3 78.4,128 70.9,141.7 63.4,128 52.5,139.3 48.8,124.1 35.4,132.2 35.8,116.5 20.8,121 25.2,105.9 9.5,106.3 17.7,92.9 2.4,89.2 13.8,78.4 0,70.9 13.8,63.4 2.4,52.5 17.7,48.8 9.5,35.4 25.2,35.8 20.8,20.8 35.8,25.2 35.4,9.5 48.8,17.7 52.5,2.4 63.4,13.8"/><g><path class="st1" d="M85,100H56.7v-5.9h10.5v-39H56.7v-5.3c4,0,6.9-0.6,8.8-1.7c1.9-1.1,2.9-3.3,3.2-6.4h6.1v52.4H85V100z"/></g></svg>`,
    duration: "10 дней",
    image: "/photos/content/powerm/coverphoto.webp",
    link: "https://career.power-m.ru",
    sections: [

    // ─── HERO ────────────────────────────────────────────────────────────────
    {
      type: "hero",
      content: {
        title: "Карьерный портал Силовых машин",
        tags: ["UX/UI", "HR Tech", "Конверсия", "Mobile First"],
      },
    },

    // ─── КОНТЕКСТ ─────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Кадры решают всё. Кривой UX решает, что кадров не будет",
        text: "Силовые машины — крупнейший производитель энергооборудования в России. 70% рынка РФ и СНГ, 13 000+ сотрудников, 5-е место в мире по объёму оборудования, клиенты в 57 странах. При этом карьерный сайт застрял в 2019 году и не конвертировал молодёжь в отклики.\n\nПроблема не в бренде, а в инструменте. Сайт не работал как воронка найма: 70% трафика приходило с телефона, но мобильная версия была непригодна для использования. Фильтры спрятаны, путь до заявки — 7 кликов, вакансии написаны на корпоративном языке.\n\nЗадача: перепроектировать портал, чтобы нанимать 2000 человек в год сам без менеджеров, держащих кандидата за руку. Ограничения: строгий брендбук, 1С-Битрикс, запрет на изменение цветовой палитры.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/context.webp",
        loading: "lazy",
        alt: "Контекст проекта: ситуация, проблема, задача",
      },
    },

    // ─── БЕНЧМАРКИНГ ─────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Бенчмаркинг: что делают конкуренты",
        text: "Прежде чем проектировать, разобрал три сильнейших HR-портала в промышленности: НЛМК, Северсталь и СИБУР. У каждого своя фишка, которую стоило присвоить.\n\nУ НЛМК мощный фильтр прямо в шапке и разделение по направлениям — кандидат попадает в релевантные вакансии за один клик. Плюс Телеграм-канал для связи с HR, потому что молодёжь не звонит по телефону.\n\nУ Северстали дизайн построен на людях. Раздел «Вдохновляем друг друга» с реальными фото сотрудников снимает скептицизм новичка, он видит будущих коллег. Визуальная чистота без перегруженного экрана.\n\nУ СИБУРа карьерные траектории и программы быстрого роста прямо на сайте. Раздел «Кто работает в СИБУРе» с историями сотрудников о карьерном пути формирует доверие, где раньше были только строчки требований.\n\nВывод: красивого сайта мало. Нужна работающая система фильтрации, структура вакансий, доказательства и путь от входа до заявки за минимум времени.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/benchmarkingNLMK.webp",
        loading: "lazy",
        alt: "Бенчмаркинг НЛМК: навигация и фильтрация",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/benchmarkingSEVERSTAL.webp",
        loading: "lazy",
        alt: "Бенчмаркинг Северстали: трансляция ценностей и визуальная чистота",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/benchmarkingSIBUR.webp",
        loading: "lazy",
        alt: "Бенчмаркинг СИБУР: карьерные траектории и социальное доказательство",
      },
    },

    // ─── СТРАТЕГИЯ ────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Стратегия: продавать будущее, а не станки",
        text: "Чтобы нанять молодёжь, показываем людей и перспективу. Сварщик 25 лет выбирает не между заводами, он выбирает между образом жизни. Поэтому в основу стратегии легли три принципа.\n\nСервисный подход к навигации. Внедряем фильтрацию и структуру вакансий, потому что сайт должен работать как инструмент.\n\nПереходим от перечня обязанностей к историям успеха, карьерным трекам и социальным доказательствам. Кандидат должен увидеть себя через 3 года, а не инструкцию к должности.\n\n70% трафика идёт с телефона. Сварщик ищет работу в метро на старом андройде, не сидит с макбуком в коворкинге.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/strategy.webp",
        loading: "lazy",
        alt: "Стратегия: сервисный подход и продажа будущего",
      },
    },

    // ─── UX НОВОГО ПОРТАЛА ────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Четыре столпа UX",
        text: "Быстрый доступ. Фильтры по направлению, городу и обучению вынесены на главный экран — прямо под заголовком. Путь кандидата от входа на сайт до списка релевантных вакансий сокращён до 2 кликов.\n\nИнформация упакована в блоки с иконками и списками, чтобы сканировать контент взглядом, не вчитываясь. Кандидат за секунду понимает, что ему предлагают и чем отличается одна должность от другой.\n\nСтрогая сетка, воздух и контрастные шрифты. Интерфейс не перегружен графикой, поэтому выглядит современно и технологично, при этом остаётся легким для верстки в Битрикс.\n\nФотографии живых сотрудников и настоящего производства. Это работает на доверие, потому что кандидат видит фактические условия и будущих коллег, а не нейросетевые улыбки из фотостоков.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/newportalux.webp",
        loading: "lazy",
        alt: "UX нового портала: быстрый доступ, структура, чистота, реальность",
      },
    },

    // ─── МОБИЛЬНАЯ АДАПТАЦИЯ ──────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Интерфейс для базового смартфона",
        text: "Мобильная версия проектировалась как отдельный продукт. Пользователь это рабочий с не дорогим телефоном, у которого нет времени разбираться в меню.\n\nКрупные тач-зоны от 44px исключают случайные нажатия. Контрастные шрифты читаются на улице при ярком солнце. Эффекты при наведении полностью убраны, чтобы не мешать восприятию.\n\nФильтры вынесены на первый экран. Кандидат находит вакансию сразу, без блужданий по меню. Как в Яндекс.Такси: зашёл, выбрал, откликнулся.\n\nВ карточках вакансий убраны абстракции и корпоративный жаргон. Добавлены конкретные факты: что именно делаешь, на каком оборудовании работаешь, есть ли обучение.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/mobileapatationHOW.webp",
        loading: "lazy",
        alt: "Принципы мобильной адаптации",
      },
    },

    // ─── ГЛАВНАЯ СТРАНИЦА ─────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Сокращаем путь до вакансии на главной",
        text: "Поисковая строка и фильтры расположены на главном блоке без скролла. Открываешь сайт и первое, что видишь: возможность мгновенно отфильтровать вакансии по направлению, городу и наличию обучения.\n\nПод фильтрами живой блок с реальными открытыми вакансиями. Не абстрактная кнопка «Смотреть все вакансии», а конкретные должности, которые компания нанимает прямо сейчас. Создаем восприятие Силовых машин как активной компании, а не пустого шаблона.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/heroblockofmainpage.webp",
        loading: "lazy",
        alt: "Новый главный экран портала — десктоп и мобильный",
      },
    },

    // ─── ФАКТЫ ────────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Блок с цифрами",
        text: "Цифры работают лучше рекламных текстов, потому что их не нужно интерпретировать. Блок работает на уверенность: это не очередной заводик, который закроется через год. Это системообразующее предприятие с масштабом.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/companyinnumbersblockofmainpage.webp",
        loading: "lazy",
        alt: "Блок с ключевыми показателями компании",
      },
    },

    // ─── ВИЗУАЛЬНОЕ ДОКАЗАТЕЛЬСТВО ────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Гордость за профессию",
        text: "Силовые машины производят уникальные вещи: первую российскую тихоходную паровую турбину для АЭС, газовые турбины собственной технологии, гидрогенераторы для крупнейших ГЭС страны.\n\nЕсли кандидат не знает, что стоит за словом «производство» — покажи ему. Формируем гордость за профессию ещё до первого рабочего дня и снимаем скептицизм.\n\nЗдесь нет картинок из фотобанков. Только реальные цеха, реальные машины и реальные сотрудники.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/visualproofblockofmainpage.webp",
        loading: "lazy",
        alt: "Блок визуального доказательства: уникальные продукты компании",
      },
    },

    // ─── КОНТЕКСТНЫЙ ВЫВОД ВАКАНСИЙ ──────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Ловим горячего кандидата",
        text: "Стандартная воронка теряет кандидата между страницей «О компании» и списком вакансий — он изучил направление, загорелся, но не знает, куда нажать дальше.\n\nРешение: каждый тематический блок на главной дублирует вакансии своего направления прямо под описанием. Не нужно возвращаться на главную, искать раздел «Вакансии» и заново фильтровать.\n\nПо расчётам, контекстный вывод повышает конверсию в отклик на 30%, потому что устраняет паузу между интересом и действием.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciesblockofmainpage.webp",
        loading: "lazy",
        alt: "Контекстный вывод вакансий направления на главной странице",
      },
    },

    // ─── ИНКЛЮЗИВНОСТЬ ────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Женская аудитория без штрафов",
        text: "Промышленные порталы указывают пол в вакансиях — «Вакансия для девушек» или используют исключительно мужские местоимения. Это прямое нарушение ТК РФ и штраф.\n\nОдновременно компания теряет женскую аудиторию, которая в ряде направлений составляет значительную долю квалифицированных кадров.\n\nРешение: в блоках навигации по направлениям используются фотографии и женщин, и мужчин в равной пропорции. Никаких указаний пола в интерфейсе. Визуал нейтрален по умолчанию. Компания привлекает более широкую аудиторию и одновременно защищена от юридических рисков.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/inclusiveandstudentsblockofmainpage.webp",
        loading: "lazy",
        alt: "Инклюзивный дизайн навигации и блок для студентов",
      },
    },

    // ─── СТРАНИЦА ВАКАНСИЙ ────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Страница вакансий",
        text: "Фильтр всегда виден сбоку от списка вакансий. Кандидату не нужно скроллить вверх для изменения параметров. Список позволяет считывать вакансии в 2 раза быстрее, чем карточный формат, потому что информация упорядочена строго горизонтально.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciespage.webp",
        loading: "lazy",
        alt: "Страница вакансий: постоянный фильтр и список",
      },
    },

    // ─── ВХОД В ПРОФЕССИЮ ─────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Вход в профессию для тех, кто не знает терминологию",
        text: "«Обмотчик электромашин» или «дефектоскопист НК» — новичок без опыта в промышленности не понимает, что это за профессии и чем именно занимается специалист каждый день.\n\nВместо списка должностей внедрили блоки с фотографиями реального рабочего места и описанием работы простым языком. Укладываешь обмотки в пазы — вот как это выглядит, вот что ты делаешь руками, вот от чего зависит результат.\n\nОтдельная метка «С обучением» снимает главный страх человека без опыта: «меня не возьмут». Компания сама говорит: возьмём и научим.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciesifnoexp.webp",
        loading: "lazy",
        alt: "Блок вакансий для кандидатов без опыта — карточный формат",
      },
    },

    // ─── БЕСШОВНЫЙ ОТКЛИК ─────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Бесшовный отклик: убрали лишние шаги",
        text: "Стандартный сценарий отклика на промышленных порталах выглядит так: нашёл вакансию → нажал «Откликнуться» → тебя выкинуло на пустую форму → вручную вписываешь должность → заполняешь пять полей → отправляешь. На каждом шаге часть кандидатов уходит.\n\nМы убрали промежуточные шаги. При нажатии «Откликнуться» прямо на странице вакансии форма заявки подтягивает название должности автоматически. Кандидат вписывает только имя и почту.\n\nМеньше трения = меньше отказов на финальном шаге воронки.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciesifnoexpblockform.webp",
        loading: "lazy",
        alt: "Форма бесшовного отклика: поля заполняются автоматически",
      },
    },

    // ─── ГЕОГРАФИЯ ────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "География: масштаб компании как аргумент",
        text: "Силовые машины присутствуют в России, Беларуси, Узбекистане, Сербии, Турции, Индии, Вьетнаме и Колумбии. Это серьёзный аргумент для кандидата, который думает о карьере, а не просто о работе рядом с домом.\n\nПереработали интерфейс карты: переключатель мгновенно делит представительства и производства. Кандидат видит либо карту продаж (где работают менеджеры), либо карту заводов (где куют железо). Это убирает путаницу и позволяет соискателю сразу найти «свой» город.\n\nБлок географии работает на раздел «О нас», потому что наглядно показывает международный масштаб без слов.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/geographyblockaboutuspage.webp",
        loading: "lazy",
        alt: "Интерактивная карта присутствия компании",
      },
    },

    // ─── МАСШТАБИРУЕМАЯ СЕТКА / СТАТЬИ ───────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Редактор не сломает верстку",
        text: "Битрикс — это жесткое ограничение. Контент-менеджеры будут добавлять статьи через стандартный редактор, и дизайн обязан выдерживать любой объём текста без поломки.\n\nУниверсальный шаблон страницы статьи работает на любой длине материала: короткая новость, развёрнутый лонгрид, технический документ. Визуальная иерархия структурирует текст акцентными блоками — заголовки, врезки, списки без вмешательства дизайнера.\n\nВ каждую статью встроен CTA-блок «Откликнуться на вакансию». Корпоративная новость, репортаж с завода, интервью с инженером — точку входа в воронку найма.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/articlepagetop.webp",
        loading: "lazy",
        alt: "Верх страницы статьи: шапка и модульная сетка",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/articlepagebottom.webp",
        loading: "lazy",
        alt: "Низ страницы статьи: CTA и мобильная версия",
      },
    },

    // ─── ИТОГ ─────────────────────────────────────────────────────────────────
    {
      type: "summary",
      content: {
        title: "Итог",
        text: "1-е место на федеральном соревновании «Дизайн молодых». Концепция одобрена топ-менеджментом. Клиент получил высококонверсионный интерфейс, который уважает время кандидата и решает конкретную боль: бесперебойный найм на заводы.\n\nКаждое решение в проекте обосновано данными и логикой воронки.",
        buttons: [
          { label: "Обсудить проект", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
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
          src: "/photos/content/ithub/NewHeroLooksLike.webp",
          loading: "lazy",
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
          src: "/photos/content/ithub/Professions.webp",
          loading: "lazy",
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
          src: "/photos/content/ithub/BenefitsPricesAndCredit.webp",
          loading: "lazy",
          alt: "Блок стоимости и кредита",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/FeedbackForm.webp",
          loading: "lazy",
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
          src: "/photos/content/ithub/NewHeaderLooksLike.webp",
          loading: "lazy",
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
          src: "/photos/content/smartfeed/PhotoWithMainAppBenefits.webp",
          loading: "lazy",
          alt: "Ключевые преимущества приложения",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/Competitors.webp",
          loading: "lazy",
          alt: "Конкуренты",
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
          src: "/photos/content/smartfeed/FeedProfileAndSearch.webp",
          loading: "lazy",
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
          src: "/photos/content/smartfeed/OnboardingAndAnonymousUsing.webp",
          loading: "lazy",
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
          src: "/photos/content/smartfeed/PostsSeparate.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/context.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/painandfears.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/optimizationsales.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/interfacedesign1.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/interfacedesign2.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/validation.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/interfacedesign3.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/lighthouse.webp",
          loading: "lazy",
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
    id: 4,
    slug: "powerm",
    title: "Power Machines Career Portal",
    category:["Website", "HR Tech", "UX/UI"],
    badge: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 141.7 141.7" xml:space="preserve"><style>.st0{fill:#FF0033;}.st1{fill:#FFFFFF;}</style><polygon class="st0" points="70.9,0 78.4,13.8 89.2,2.4 92.9,17.7 106.3,9.5 105.9,25.2 121,20.8 116.5,35.8 132.2,35.4 124.1,48.8 139.3,52.5 128,63.4 141.7,70.9 128,78.4 139.3,89.2 124.1,92.9 132.2,106.3 116.5,105.9 121,121 105.9,116.5 106.3,132.2 92.9,124.1 89.2,139.3 78.4,128 70.9,141.7 63.4,128 52.5,139.3 48.8,124.1 35.4,132.2 35.8,116.5 20.8,121 25.2,105.9 9.5,106.3 17.7,92.9 2.4,89.2 13.8,78.4 0,70.9 13.8,63.4 2.4,52.5 17.7,48.8 9.5,35.4 25.2,35.8 20.8,20.8 35.8,25.2 35.4,9.5 48.8,17.7 52.5,2.4 63.4,13.8"/><g><path class="st1" d="M85,100H56.7v-5.9h10.5v-39H56.7v-5.3c4,0,6.9-0.6,8.8-1.7c1.9-1.1,2.9-3.3,3.2-6.4h6.1v52.4H85V100z"/></g></svg>`,
    duration: "10 days",
    image: "/photos/content/powerm/coverphoto.webp",
    link: "https://career.power-m.ru",
    sections: [

    // ─── HERO ────────────────────────────────────────────────────────────────
    {
      type: "hero",
      content: {
        title: "Power Machines Career Portal",
        tags: ["UX/UI", "HR Tech", "Conversion", "Mobile First"],
      },
    },

    // ─── CONTEXT ──────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Personnel is everything. Broken UX means no personnel.",
        text: "Power Machines is Russia's largest energy equipment manufacturer. 70% of the Russian and CIS market, 13,000+ employees, 5th place globally by equipment volume, clients in 57 countries. Yet the career site was stuck in 2019 and wasn't converting young talent into applicants.\n\nThe problem wasn't the brand — it was the tool. The site didn't function as a hiring funnel: 70% of traffic came from mobile, but the mobile version was unusable. Filters were buried, the path to an application took 7 clicks, and job listings were written in HR-speak, not plain language.\n\nThe task: redesign the portal so it hires 2,000 people a year on its own — no managers holding candidates by the hand. Constraints: a strict brand book, a legacy 1C-Bitrix engine, and no changes to the color palette.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/context_en.webp",
        loading: "lazy",
        alt: "Project context: situation, problem, task",
      },
    },

    // ─── BENCHMARKING ─────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Benchmarking: what competitors get right",
        text: "Before designing anything, I analyzed the three strongest HR portals in heavy industry: NLMK, Severstal, and SIBUR. Each had something worth borrowing.\n\nNLMK has a powerful filter right in the header with direction-based navigation — a candidate reaches relevant vacancies in one click. Plus a Telegram channel for HR communication, because young people don't make phone calls.\n\nSeverstal's design is built around people. The 'We inspire each other' section with real employee photos breaks down a newcomer's skepticism — they see future colleagues, not corporate gloss. Visual clarity with no cluttered screens.\n\nSIBUR shows career trajectories and fast-track growth programs directly on the site. The 'Who works at SIBUR' section with employee career stories builds trust where previously there were only lists of requirements.\n\nConclusion: a good-looking site is not enough. You need a working system — filtering, structured vacancies, social proof, and a path from landing to application in the fewest steps possible.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/benchmarkingNLMK_en.webp",
        loading: "lazy",
        alt: "NLMK benchmarking: navigation and filtering",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/benchmarkingSEVERSTAL_en.webp",
        loading: "lazy",
        alt: "Severstal benchmarking: values communication and visual clarity",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/benchmarkingSIBUR_en.webp",
        loading: "lazy",
        alt: "SIBUR benchmarking: career trajectories and social proof",
      },
    },

    // ─── STRATEGY ─────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Strategy: sell the future, not the machines",
        text: "To attract young talent, you show people and perspective — not equipment. A 25-year-old welder isn't choosing between factories; they're choosing between lifestyles. The strategy rests on three principles.\n\nA service approach to navigation. Filtering and vacancy structure, because the site must work as a tool — not a brochure.\n\nSelling the future. We shift from listing job duties to success stories, career tracks, and social proof. The candidate should picture themselves in three years, not read an instruction manual for a role.\n\nMobile priority. 70% of traffic comes from phones. A welder searches for jobs on the subway using an old Android — not sitting with a MacBook in a coworking space.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/strategy_en.webp",
        loading: "lazy",
        alt: "Strategy: service-first navigation and selling the future",
      },
    },

    // ─── UX OF THE NEW PORTAL ─────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Four pillars of UX",
        text: "Quick access. Filters by direction, city, and training availability are placed on the main screen — right below the headline. The candidate's path from landing on the site to a list of relevant vacancies is cut down to 2 clicks.\n\nStructured presentation. Information is packed into blocks with icons and lists so users can scan content at a glance without reading every word. In seconds, a candidate understands what's on offer and how one role differs from another.\n\nVisual clarity. A strict grid, generous whitespace, and high-contrast typography. The interface isn't overloaded with graphics — it looks modern and precise, and stays easy to implement in Bitrix.\n\nReality. Photos of actual employees and real production floors. This builds trust because the candidate sees genuine working conditions and future colleagues — not AI-generated smiles from stock libraries.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/newportalux_en.webp",
        loading: "lazy",
        alt: "New portal UX: quick access, structure, clarity, reality",
      },
    },

    // ─── MOBILE ADAPTATION ────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "An interface for the basic smartphone",
        text: "The mobile version was designed as a standalone product, not a scaled-down desktop. The user is a blue-collar worker with an inexpensive phone who has no time to navigate complex menus.\n\nLarge touch zones from 44px prevent accidental taps. High-contrast fonts are readable outdoors in bright sunlight. Hover effects are removed entirely — they don't exist on touchscreens and only break the experience.\n\nFilters are on the first screen. A candidate finds a relevant vacancy immediately, without wandering through menus. Like a ride-hailing app: open, pick, apply.\n\nJob cards strip out corporate jargon and abstract language. Concrete facts replace it: what you actually do, what equipment you work with, whether training is included.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/mobileapatationHOW_en.webp",
        loading: "lazy",
        alt: "Mobile adaptation principles",
      },
    },

    // ─── MAIN PAGE ────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Cutting the path to a vacancy on the homepage",
        text: "The search bar and filters are positioned in the hero block — no scrolling required. A candidate opens the site and the very first thing they see is the ability to instantly filter vacancies by direction, city, and training availability.\n\nBelow the filters sits a live block of real open vacancies. Not an abstract 'View all vacancies' button, but specific roles the company is actively hiring for right now. This creates the impression of Power Machines as a dynamic, active employer — not an empty template.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/heroblockofmainpage_en.webp",
        loading: "lazy",
        alt: "New hero section of the portal — desktop and mobile",
      },
    },

    // ─── FACTS ────────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "The numbers block",
        text: "Numbers work better than ad copy because they require no interpretation. The block builds confidence: this isn't some small factory that might close next year. This is a backbone enterprise with real scale.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/companyinnumbersblockofmainpage_en.webp",
        loading: "lazy",
        alt: "Company key metrics block",
      },
    },

    // ─── VISUAL PROOF ─────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Pride in the profession",
        text: "Power Machines makes one-of-a-kind things: Russia's first low-speed steam turbine for a nuclear power plant, proprietary gas turbines, hydrogenerators for the country's largest hydroelectric stations.\n\nIf a candidate doesn't know what 'manufacturing' actually means here — show them. Demonstrating real products builds professional pride before day one on the job and removes skepticism before it starts.\n\nNo stock photos. Only real workshops, real machines, and real employees.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/visualproofblockofmainpage_en.webp",
        loading: "lazy",
        alt: "Visual proof block: unique company products",
      },
    },

    // ─── CONTEXTUAL VACANCY OUTPUT ────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Catching the hot candidate",
        text: "A standard funnel loses the candidate somewhere between the 'About' page and the vacancies list — they explored a direction, got interested, but don't know where to click next.\n\nThe fix: every thematic block on the homepage duplicates the vacancies from its own direction right below the description. No need to go back to the homepage, find the 'Vacancies' section, and filter from scratch.\n\nContextual vacancy display is estimated to increase application conversion by 30%, because it eliminates the gap between interest and action.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciesblockofmainpage_en.webp",
        loading: "lazy",
        alt: "Contextual vacancy display by direction on the homepage",
      },
    },

    // ─── INCLUSIVITY ──────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "A female audience — without the fines",
        text: "Most industrial job portals specify gender in listings — 'position for men' or use exclusively male pronouns. This is a direct violation of Russian labor law and carries real financial risk.\n\nAt the same time, those companies are cutting off a female audience that in many specializations represents a significant share of qualified talent.\n\nThe fix: navigation blocks for each job direction use photos of both women and men in equal proportion. No gender indicators anywhere in the interface. The visual is neutral by default. The company reaches a broader audience and is legally protected at the same time.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/inclusiveandstudentsblockofmainpage_en.webp",
        loading: "lazy",
        alt: "Inclusive navigation design and student onboarding block",
      },
    },

    // ─── VACANCIES PAGE ───────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Vacancies page",
        text: "The filter is always visible alongside the vacancy list. A candidate never needs to scroll back to the top to change parameters — they adjust on the fly without losing their place. The list format lets users scan vacancies twice as fast as a card layout, because information is organized in a clean horizontal flow.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciespage_en.webp",
        loading: "lazy",
        alt: "Vacancies page: persistent filter and list view",
      },
    },

    // ─── ENTRY INTO THE PROFESSION ────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Entry into the profession for those who don't know the terminology",
        text: "'Electrical machine winder' or 'NDT defectoscopist' — a newcomer with no industrial background has no idea what these roles are or what the work actually looks like day to day.\n\nInstead of a text list of job titles, we introduced visual cards with a real photo of the workplace and a plain-language description of the work. You're laying windings into stator slots — here's what it looks like, here's what you do with your hands, here's what the result depends on.\n\nThe 'With training' tag addresses the biggest fear of someone without experience: 'they won't hire me.' The company answers directly: we will, and we'll teach you.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciesifnoexp_en.webp",
        loading: "lazy",
        alt: "Entry-level vacancy cards with photos and plain descriptions",
      },
    },

    // ─── SEAMLESS APPLICATION ─────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Seamless application: removed the unnecessary steps",
        text: "The standard application flow on industrial portals looks like this: found a vacancy → clicked 'Apply' → redirected to a blank form → manually typed the job title → filled in five fields → submitted. Candidates drop off at every step.\n\nWe removed the friction. When a candidate clicks 'Apply' directly on the vacancy page, the application form auto-populates the job title. The candidate only enters their name and email.\n\nLess friction = fewer drop-offs at the final stage of the funnel.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/vacanciesifnoexpblockform_en.webp",
        loading: "lazy",
        alt: "Seamless application form: fields auto-populated from the vacancy",
      },
    },

    // ─── GEOGRAPHY ────────────────────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Geography: company scale as an argument",
        text: "Power Machines operates in Russia, Belarus, Uzbekistan, Serbia, Turkey, India, Vietnam, and Colombia. That's a compelling argument for a candidate thinking about a career, not just a job close to home.\n\nWe redesigned the map interface: a toggle instantly separates offices and manufacturing plants. A candidate sees either a sales map (where managers work) or a factories map (where things are built). This eliminates confusion and lets an applicant find their city immediately.\n\nThe geography block also serves the 'About Us' section — it communicates international scale without a single word of marketing copy.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/geographyblockaboutuspage_en.webp",
        loading: "lazy",
        alt: "Interactive map of company presence",
      },
    },

    // ─── SCALABLE GRID / ARTICLES ─────────────────────────────────────────────
    {
      type: "text",
      content: {
        title: "Content editors won't break the layout",
        text: "Bitrix is a hard constraint. Content managers will add articles through a standard editor, and the design must hold up at any content length without breaking.\n\nThe universal article page template works at any depth: a short news post, a long-form feature, a technical document. Visual hierarchy structures the text with accent blocks — headings, pull quotes, lists — without requiring a designer's intervention.\n\nEvery article has a built-in 'Apply for a vacancy' CTA block. A company news piece, a factory floor report, an interview with an engineer — each becomes an entry point into the hiring funnel.",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/articlepagetop_en.webp",
        loading: "lazy",
        alt: "Article page top: header and modular grid",
      },
    },
    {
      type: "image",
      content: {
        src: "/photos/content/powerm/articlepagebottom_en.webp",
        loading: "lazy",
        alt: "Article page bottom: CTA block and mobile view",
      },
    },

    // ─── SUMMARY ──────────────────────────────────────────────────────────────
    {
      type: "summary",
      content: {
        title: "Summary",
        text: "1st place at the federal 'Young Design' competition. The concept was approved by top management. The client received a high-conversion interface that respects candidates' time and solves a concrete business problem: uninterrupted hiring across their factories.\n\nEvery decision in this project is backed by data and funnel logic.",
        buttons: [
          { label: "Discuss Project", url: "https://t.me/liverans", primary: true },
        ],
      },
    },
    ],
  },
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
          src: "/photos/content/ithub/NewHeroLooksLike_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ithub/Professions_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ithub/BenefitsPricesAndCredit_en.webp",
          loading: "lazy",
          alt: "Price and credit block",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/ithub/FeedbackForm_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ithub/NewHeaderLooksLike_en.webp",
          loading: "lazy",
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
          src: "/photos/content/smartfeed/PhotoWithMainAppBenefits_en.webp",
          loading: "lazy",
          alt: "Key app benefits",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/smartfeed/Competitors_en.webp",
          loading: "lazy",
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
          src: "/photos/content/smartfeed/FeedProfileAndSearch_en.webp",
          loading: "lazy",
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
          src: "/photos/content/smartfeed/OnboardingAndAnonymousUsing_en.webp",
          loading: "lazy",
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
          src: "/photos/content/smartfeed/PostsSeparate_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/context_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/painandfears_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/optimizationsales_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/interfacedesign1_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/interfacedesign2_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/validation_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/interfacedesign3_en.webp",
          loading: "lazy",
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
          src: "/photos/content/ysreda/lighthouse_en.webp",
          loading: "lazy",
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