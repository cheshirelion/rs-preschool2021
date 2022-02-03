//Translate

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'standart': 'Standart',
      'premium': 'Premium',
      'gold': 'Gold',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'phone': 'Phone',
      'message': 'Message',

    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'standart': 'Стандарт',
      'premium': 'Премиум',
      'gold': 'Золото',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'phone': 'Телефон',
      'message': 'Сообщение',
    }
};

//Change Picture

const portfolioBtns = document.querySelector('.portfolio-btns')
const portfolioCards = document.querySelectorAll('.portfolio-card');

function changeImage(event) {
    if (event.target.dataset.season) {
        portfolioCards.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    };
};

portfolioBtns.addEventListener('click', changeImage);


//Active btn

function changeActive(className, event) {
    const btnAll = document.querySelector(className);
    const btns = btnAll.querySelectorAll('button');

    btns.forEach(int => int.classList.remove('active'));
    event.target.classList.add('active');
};

portfolioBtns.addEventListener('click', event => {
    changeActive('.portfolio-btns', event);
});

//Change Language

const switchBtns = document.querySelector('.switch-nav-list');
let lang = 'en';

switchBtns.addEventListener('click', event => {
    changeActive('.switch-nav-list', event);
});

function changeLanguage(l) {
    const translateElement = document.querySelectorAll('[data-i18n]');
    lang = l;
    translateElement.forEach(t => {
        if (t.placeholder) {
            t.placeholder = i18Obj[l][t.dataset.i18n];
            t.textContent = '';
        } else {
            t.textContent = i18Obj[l][t.dataset.i18n];
        }
    });
}

function getTranslate() {
    const languageBtns = document.querySelector('.switch-nav-list');
    languageBtns.addEventListener('click', event => {
      if (event.target.type === 'button') {
        changeActive('.switch-nav-list', event);
        lang = event.target.dataset.lang;
        changeLanguage(lang);
      }
    });
  }

getTranslate();

//Change theme

const themeBtn = document.querySelector('.switch-theme');
const allBtnsBlack = document.querySelectorAll('.btn-black')
const themeArr = [
    '.nav',
    '.section-skills',
    '.section-portfolio',
    '.section-video',
    '.section-price',
];

themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('light-theme');
    themeArr.forEach(int => {
        document.querySelector(int).classList.toggle('light-theme');
    });
    allBtnsBlack.forEach((int) => int.classList.toggle('btn-black-ligth'));
});

//Adaptive menu

const burger = document.querySelector('.hamburger');
const hamburgerOverlay = document.querySelector('.hamburger-overlay');
const navMenu = document.querySelector('.nav');
const body = document.querySelector('.body');

burger.addEventListener('click', () => {
        navMenu.classList.toggle('open')
        body.classList.toggle('overflow-hidden');
        hamburgerOverlay.classList.toggle('active');
    });

function toggleMenu() {
    burger.classList.toggle('close');
};

burger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        navMenu.classList.remove('open');
        hamburgerOverlay.classList.remove('active');
        body.classList.remove('overflow-hidden');
        burger.classList.remove('close');
    }
};

navMenu.addEventListener('click', closeMenu);
hamburgerOverlay.addEventListener("click", closeMenu);

//Preload Images

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach(season => {
        for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${season}/${i}.jpg`
        }
    
    });
}

preloadImages();