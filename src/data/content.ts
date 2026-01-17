export const content = {
  ru: {
    navbar: {
      portfolio: "Портфолио",
      services: "Услуги и цены",
      about: "О студии",
    },
    hero: {
      title: "Дизайн для IT–стартапа",
      subtitle: "От идеи до готового MVP",
      portfolio: "Портфолио",
    },
    about: {
      title: "Почему мы",
      benefits: [
        { id: 1, title: "Скорость", videoName: "car", description: "В стартапе завтра — это никогда. Вы получаете готовый дизайн когда хайп ещё жив. Мы сделаем ваш проект в кратчайшие сроки, работаем в выходные и праздники." },
        { id: 2, title: "Без ТЗ", videoName: "paper", description: "Лень писать техзадание? Нам не важно. Понимаем на языке «хочу как у Apple, но зелёный». Присылаете референс и получаете результат." },
        { id: 3, title: "Визуал для FOMO", videoName: "beartrap", description: "Наш дизайн давит на жадность. Знаем, какие триггеры заставляют юзера нажать на кнопку. Это не искусство, это психология продаж." },
        { id: 4, title: "Готовый продукт", videoName: "key", description: "Вы получаете проект готовый к запуску. Полностью готовый сайт, приложение или упакованные соцсети." },
      ]
    },
    pricing: {
      title: "Цены и сроки",
      from: "от ",
      services: [
        { id: 1, topTags: ["Сайт", "Веб-дизайн"], lottieSrc: "/lottie/desktop.lottie", title: "Сайт под задачи стартапа", tags: ["одностраничные лендинги", "промо", "визитки", "Web3"], description: "Полная упаковка продукта. Главный экран, который продаёт, блок токеномики, Roadmap и подвал. Адаптив включён.", price: "от 80 000 ₽", time: "от 4 дней" },
        { id: 2, topTags: ["Приложение", "UX/UI"], lottieSrc: "/lottie/phone.lottie", title: "Прототип приложения", tags: ["кроссплатформенные", "SaaS", "Telegram Mini App"], description: "Кликабельный прототип в Figma. Выглядит как готовое приложение, которое можно показать инвестору на телефоне.", price: "от 100 000 ₽", time: "от 1 недели" },
        { id: 3, topTags: ["Ваш дизайн"], lottieSrc: "/lottie/turnkey.lottie", title: "Любой вид дизайна", tags: ["презентации", "Pitch Deck", "соцсети", "NFT"], description: "Оформление X или Telegram канала, стикерпак для комьюнити, презентация (pitch deck) для фондов.", price: "Индивидуально", time: "" },
      ]
    },
    footer: {
      toTop: "Наверх страницы",
      copy: "Все права защищены, если кого-то волнует",
      privacy: "Политика конфиденциальности",
      terms: "Условия предоставления услуг"
    }
  },
  en: {
    navbar: {
      portfolio: "Portfolio",
      services: "Services & Pricing",
      about: "About us",
    },
    hero: {
      title: "Design for an IT startup",
      subtitle: "From concept to ready MVP",
      portfolio: "Portfolio",
    },
    about: {
      title: "Why us",
      benefits: [
        { id: 1, title: "Velocity", videoName: "car", description: "In a startup, tomorrow is never. You get the design while the hype is still alive. We work weekends and holidays to hit your deadlines." },
        { id: 2, title: "No Specs", videoName: "paper", description: "Too lazy to write a brief? We don't care. We speak 'I want it like Apple, but green'. Send a reference and get results." },
        { id: 3, title: "Visuals for FOMO", videoName: "beartrap", description: "Our design triggers greed. We know which buttons to push to make users click. It's not art, it's sales psychology." },
        { id: 4, title: "Launch Ready", videoName: "key", description: "You get a project ready to go live. Fully completed website, app, or social media assets." },
      ]
    },
    pricing: {
      title: "Pricing & Deadlines",
      from: "from ",
      services: [
        { id: 1, topTags: ["Website", "Web Design"], lottieSrc: "/lottie/desktop.lottie", title: "Startup Website", tags: ["landings", "promo", "vCards", "Web3"], description: "Complete product packaging. A hero section that sells, tokenomics block, Roadmap, and footer. Fully responsive.", price: "from $2000", time: "from 4 days" },
        { id: 2, topTags: ["App", "UX/UI"], lottieSrc: "/lottie/phone.lottie", title: "App Prototype", tags: ["cross-platform", "SaaS", "Telegram Mini App"], description: "Clickable Figma prototype. Looks and feels like a real app to show investors on your phone.", price: "from $2500", time: "from 1 week" },
        { id: 3, topTags: ["Custom"], lottieSrc: "/lottie/turnkey.lottie", title: "Any Custom Design", tags: ["slides", "Pitch Deck", "Socials", "NFT"], description: "X/Twitter or Telegram branding, community sticker packs, or VC-ready pitch decks.", price: "Individual", time: "" },
      ]
    },
    footer: {
      toTop: "Back to top",
      copy: "All rights reserved, if anyone cares",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  }
};

export const getContent = (locale: string) => locale === 'en' ? content.en : content.ru;