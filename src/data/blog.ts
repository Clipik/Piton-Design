export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: string[];
  duration: string;
  image: string;
  link: string;
  badge?: string;
  sections: any[];
}

export const postsRu: BlogPost[] = [
  {
    id: 1,
    slug: "yandex-fuckup",
    title: "Как потерять оффер Яндекса из-за двух букв",
    category: ["Аутоскопия"],
    duration: "3 дня",
    image: "/photos/content/yandex-fuckup/coverphoto.webp",
    link: "#",
    sections: [
      {
        type: "hero",
        content: {
          title: "Как потерять оффер Яндекса из-за двух букв",
          tags: ["UX/UI", "Лендинг", "Аутоскопия"],
        },
      },
      {
        type: "text",
        content: {
          title: "Синдром вылизанных пикселей",
          text: "В IT-индустрии принято прятать провалы и выкладывать только успешные кейсы, где конверсия взлетела на 300%. Настоящая инженерия строится на разборе багов. Этот кейс — аутопсия тестового задания в Яндекс. Рассказываю, как сделать технически безупречный макет, собрать сложную 3D-графику, выстроить идеальную сетку и... быть отправленным в корзину за 10 секунд из-за отключенного мозга на этапе самопроверки\n\nЗадача была типичной ловушкой для мидла: разработать дизайн лендинга внутренней IT-конференции Yandex Pet Day",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/yandex-fuckup/task-context.webp",
          loading: "lazy",
          alt: "Техническое задание Яндекса на конференцию Pet Day",
        },
      },
      {
        type: "text",
        content: {
          title: "Техническое исполнение",
          text: "С точки зрения хард-скиллов собрали проект как швейцарские часы. 8-пиксельная модульная сетка. Никаких «Group 1383», только Auto Layouts с понятными названиями, выдерживающие ресайз и смену контента.\n\nЧтобы интерфейс был экосистемой Яндекс, развернули элементы из их открытого UI-кита Gravity UI для сложных состояний инпутов и чекбоксов. Цвета и типографика заведены в библиотеки. Верстальщик забрал бы макет, даже не открывая панель инспектора.\n\nВместо ИИ генераций пошли в Blender и отрендерили 3D-иллюстрацию колонки Яндекс и проводков в стерильном стиле 3дшек компании",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/yandex-fuckup/figma-layers.webp",
          loading: "lazy",
          alt: "Идеальная структура слоев и Auto Layout в Figma",
        },
      },
      {
        type: "text",
        content: {
          title: "Когда дизайнер разучился читать",
          text: "Лид-дизайнер, проверяющий тестовое, тратит на первый экран ровно 5 секунд. Ему плевать на Auto Layouts, если на главном экране кровь из глаз.\n\nБаг №1: опечатка в hero блоке. Огромными буквами на первом экране написано «Конференция по didgital-продуктам». С двумя D. Дизайнер, который не вычитывает подзаголовки — риск для продакшена. Никакая красивая кнопка не оправдает текст, от которого поперхнется миллионная аудитория.\n\nБаг №2: контекст бренда. Увлеклись реверс-инжинирингом и влепили в шапку логотип Яндекс Директа. Но конфа была от зонтичного бренда Яндекс Реклама и посвящена зоо-проектам и технологиям. Вешать лого инструмента для настройки таргета на ивент для разработчиков и ветеринаров — расписаться в непонимании бизнес-структуры клиента",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/yandex-fuckup/the-typo.webp",
          loading: "lazy",
          alt: "Опечатка didgital и ошибочный логотип на первом экране",
        },
      },
      {
        type: "text",
        content: {
          title: "Что значит для клиентов",
          text: "Яндекс ответили отказом абсолютно заслуженно. Однако, в разработке упавший сервер — повод переписать архитектуру, а не выкидывать железо.\n\nКакой вывод сделали для студии? Вылизанный UI ничего не стоит, если нарушена логика. Теперь в рабочий пайплайн встроен железобетонный этап QA до презентации клиенту:\n\n1. Прогон текстов и заголовков на опечатки\n2. Проверка иерархии логотипов и брендбука заказчика",
        },
      },
      {
        type: "video",
        content: {
          src: "/videos/slider.webm",
          loading: "lazy",
          alt: "Исправленный первый экран: чистые смыслы, правильный брендинг",
        },
      },
      {
        type: "text",
        content: {
          text: "Данный материал отражает личный опыт автора при выполнении тестового задания для Яндекса. Показанные элементы (включая логотипы) используются исключительно для иллюстрации ошибок и не претендуют на воспроизведение товарных знаков Яндекса. Все права на логотипы и фирменные элементы принадлежат компании Яндекс",
        },
      },
      {
        type: "summary",
        content: {
          title: "Итог",
          text: "Ошибаются все. Инженеры находят уязвимости в своей работе, фиксируют логи и внедряют защиту от дурака в следующие проекты",
          buttons: [
            { label: "Заказать дизайн без багов", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
];

export const postsEn: BlogPost[] = [
  {
    id: 1,
    slug: "yandex-fuckup",
    title: "How to Lose a Yandex Job Offer Because of Two Letters",
    category: ["UX/UI", "Landing", "Post-mortem"],
    duration: "3 days",
    image: "/photos/content/yandex-fuckup/coverphoto.webp",
    link: "#",
    sections: [
      {
        type: "hero",
        content: {
          title: "How to Lose a Yandex Job Offer Because of Two Letters",
          tags: ["UX/UI", "Landing", "Post-mortem"],
        },
      },
      {
        type: "text",
        content: {
          title: "The Polished Pixel Syndrome",
          text: "In the IT industry, it's common to hide failures and only showcase success stories where conversion rates skyrocketed by 300%. Real engineering is built on analyzing bugs. This case is an autopsy of a test assignment for Yandex. I’ll tell you how to create a technically flawless layout, build complex 3D graphics, align an ideal grid, and... get sent to the trash in 10 seconds because your brain switched off during the self-check phase.\n\nThe task was a typical trap for a middle designer: develop a landing page design for an internal IT conference called Yandex Pet Day.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/yandex-fuckup/task-context_en.webp",
          loading: "lazy",
          alt: "Yandex technical assignment for the Pet Day conference",
        },
      },
      {
        type: "text",
        content: {
          title: "Technical Execution",
          text: "From a hard-skills perspective, the project was assembled like a Swiss watch. An 8-pixel modular grid. No 'Group 1383' layers—only Auto Layouts with clear naming that can withstand resizing and content changes.\n\nTo ensure the interface felt like part of the Yandex ecosystem, we utilized elements from their open-source UI kit, Gravity UI, for complex input and checkbox states. Colors and typography were synced to libraries. A developer could have coded the layout without even opening the inspector panel.\n\nInstead of AI generation, we used Blender to render a 3D illustration of a Yandex speaker and cables in the company's signature sterile 3D style.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/yandex-fuckup/figma-layers.webp",
          loading: "lazy",
          alt: "Perfect layer structure and Auto Layout in Figma",
        },
      },
      {
        type: "text",
        content: {
          title: "When a Designer Forgets How to Read",
          text: "A lead designer reviewing a test task spends exactly 5 seconds on the first screen. They don't care about Auto Layouts if the hero section makes their eyes bleed.\n\nBug #1: A typo in the hero block. In massive letters on the first screen, it said 'Conference on didgital products.' With two 'd's. A designer who doesn't proofread headlines is a production risk. No beautiful button can justify text that would make a million-person audience cringe.\n\nBug #2: Brand context. We got carried away with reverse engineering and slapped the Yandex Direct logo in the header. However, the conference was by the umbrella brand Yandex Advertising and focused on pet-related projects and tech. Using the logo of a specific target-setting tool for an event aimed at developers and veterinarians showed a complete lack of understanding of the client's business structure.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/yandex-fuckup/the-typo.webp",
          loading: "lazy",
          alt: "The 'didgital' typo and incorrect logo on the first screen",
        },
      },
      {
        type: "text",
        content: {
          title: "What This Means for Clients",
          text: "Yandex's rejection was absolutely deserved. However, in development, a crashed server is a reason to rewrite the architecture, not throw away the hardware.\n\nWhat conclusion did we draw for the studio? Polished UI is worthless if the logic is broken. Now, a bulletproof QA stage is built into our workflow before any client presentation:\n\n1. Running all texts and headlines through spell-check.\n2. Verifying the hierarchy of logos and the client's brand book.",
        },
      },
      {
        type: "image",
        content: {
          src: "/photos/content/yandex-fuckup/fixed-hero_en.webp",
          loading: "lazy",
          alt: "Fixed hero screen: clear meanings, correct branding",
        },
      },
      {
        type: "summary",
        content: {
          title: "The Bottom Line",
          text: "Everyone makes mistakes. Engineers find vulnerabilities in their work, log them, and implement 'fool-proofing' for future projects.",
          buttons: [
            { label: "Order bug-free design", url: "https://t.me/liverans", primary: true },
          ],
        },
      },
    ],
  },
];

export const getBlogPosts = (locale: string) =>
  locale === 'en' ? postsEn : postsRu;

export const getBlogPostBySlug = (slug: string, locale: string) =>
  getBlogPosts(locale).find(p => p.slug === slug);