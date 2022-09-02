// Самооценка
console.log("Самооценка: 100/100\n1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\nВ коде странице присутствуют следующие элементы:\n- <header>, <main>, <footer> +2\n- шесть элементов <section> +2 \n- только один заголовок <h1> +2 \n- пять заголовков <h2> +2\n - один элемент <nav> +2\n - два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n- десять кнопок <button> +2\n- два инпута: <input type='email'> и <input type='tel'> +2\n- один элемент <textarea> +2\n- три атрибута placeholder +2\n3. Вёрстка соответствует макету +48:\n- блок <header> +6\n- секция hero +6\n- секция skills +6\n- секция portfolio +6\n- секция video +6\n- секция price +6\n- секция contacts +6\n- блок <footer> +6\n4. Требования к css + 12\n- для построения сетки используются флексы +2\n- при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n- фоновый цвет тянется на всю ширину страницы +2\n- конки добавлены в формате .svg + 2\n- изображения добавлены в формате .jpg +2\n- есть favicon +2\n5. Интерактивность, реализуемая через css +20")

// Изменение языка
let lang = 'en';
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
      'skill-title-3': 'Retouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
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
      'send-message': 'Send message'
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
      'send-message': 'Отправить'
    }
}
function getTranslateOnRussian() {
    const words = document.querySelectorAll('[data-i18n]');
    words.forEach(elem => elem.textContent = i18Obj['ru'][elem.dataset.i18n]);
    localStorage.setItem(lang, 'ru');
}

function getTranslateOnEnglish() {
    const words = document.querySelectorAll('[data-i18n]');
    words.forEach(elem => elem.textContent = i18Obj['en'][elem.dataset.i18n]);
    localStorage.setItem(lang, 'en');
}

const russianButton = document.querySelector('#ru');
russianButton.addEventListener('click', getTranslateOnRussian);

const englishButton = document.querySelector('#en');
englishButton.addEventListener('click', getTranslateOnEnglish);

function getLocalStorageToLang() {
    if (localStorage.getItem(lang) == 'ru') {
        getTranslateOnRussian();
    } else if (localStorage.getItem(lang) == 'en') {
        getTranslateOnEnglish();
    }
}
window.addEventListener('load', getLocalStorageToLang());

// Изменение набора фотографий времени года

const winterBtn = document.querySelector('#winter-button');
const springBtn = document.querySelector('#spring-button');
const autumnBtn = document.querySelector('#autumn-button');
const summerBtn = document.querySelector('#summer-button');

const firstImg = document.querySelector('.first-img');
const secondImg = document.querySelector('.second-img')
const thirdImg = document.querySelector('.third-img');
const fourthImg = document.querySelector('.fourth-img');
const fifthImg = document.querySelector('.fifth-img');
const sixthImg = document.querySelector('.sixth-img')

winterBtn.addEventListener('click', () => {
    firstImg.src = 'assets/images/winter/1.jpg';
    secondImg.src = 'assets/images/winter/2.jpg';
    thirdImg.src = 'assets/images/winter/3.jpg';
    fourthImg.src = 'assets/images/winter/4.jpg';
    fifthImg.src = 'assets/images/winter/5.jpg';
    sixthImg.src = 'assets/images/winter/6.jpg';
    winterBtn.classList.add('active-portfolio-button');
});

springBtn.addEventListener('click', () => {
    firstImg.src = 'assets/images/spring/1.jpg';
    secondImg.src = 'assets/images/spring/2.jpg';
    thirdImg.src = 'assets/images/spring/3.jpg';
    fourthImg.src = 'assets/images/spring/4.jpg';
    fifthImg.src = 'assets/images/spring/5.jpg';
    sixthImg.src = 'assets/images/spring/6.jpg';

})

autumnBtn.addEventListener('click', () => {
    firstImg.src = 'assets/images/autumn/1.jpg';
    secondImg.src = 'assets/images/autumn/2.jpg';
    thirdImg.src = 'assets/images/autumn/3.jpg';
    fourthImg.src = 'assets/images/autumn/4.jpg';
    fifthImg.src = 'assets/images/autumn/5.jpg';
    sixthImg.src = 'assets/images/autumn/6.jpg';

})

summerBtn.addEventListener('click', () => {
    firstImg.src = 'assets/images/summer/1.jpg';
    secondImg.src = 'assets/images/summer/2.jpg';
    thirdImg.src = 'assets/images/summer/3.jpg';
    fourthImg.src = 'assets/images/summer/4.jpg';
    fifthImg.src = 'assets/images/summer/5.jpg';
    sixthImg.src = 'assets/images/summer/6.jpg';

})

summerBtn.addEventListener('click', () => {
    summerBtn.classList.add('active')
});

function changeClassActive(event) {
    let buttons = document.querySelectorAll('.portfolio-button');
    buttons.forEach(elem => {
        elem.classList.remove('active');
    })
    event.target.classList.add('active');
}
const seasons = document.querySelector('#seasons');
seasons.addEventListener('click', changeClassActive);


// Изменение темы
let theme = 'dark';
const lightThemeBtn = document.querySelector('#theme-icon');
const elementsWithTwoThemes = ['.container', '#logo', '.header-container', '#hero', 'h1', '#hero p',
                              '#hero button', '.section-titlles', '.section-titlles h2', '.skill-item h4', 
                              '.skill-item p', '#seasons button', '.pricecards', '#contacts button', 'footer a',
                              'footer .container', '#language', '.nav-links-1', '.nav-links-2', '.nav-links-3',
                              '.nav-links-4', '.nav-links-5', 'body', '#theme-icon', '#skills .container',
                              '#skill-items', '#portfolio .container', '#portfolio .section-titlles',
                              '#portfolio .section-titlles h2', '#winter-button', '#spring-button',
                              '#summer-button', '#autumn-button', '#video .container',
                              '#video .section-titlles', '#video .section-titlles h2',
                              '#pricesection .container', '#pricesection .section-titlles',
                              '#pricesection .section-titlles h2', '.pricecards:nth-child(1)',
                              '.pricecards:nth-child(2)', '.pricecards:nth-child(3)', '#contacts .container',
                              '#email', '#phone', 'textarea', '#contacts button', "#github-link", '#rs-link',
                              '#inst', '#tw', '#fb', '#pint'];

function changeThemeToLight() {
        elementsWithTwoThemes.forEach(elem => {
            document.querySelector(elem).classList.add('light-theme'); 
        });
        localStorage.setItem(theme, 'light'); 
}

function changeThemeToDark() {
        elementsWithTwoThemes.forEach(elem => {
            document.querySelector(elem).classList.remove('light-theme');
        });
        localStorage.setItem(theme, 'dark');
}

function changeTheme() {
    if (!lightThemeBtn.classList.contains('light-theme')) {
        changeThemeToLight();
    } else {
        changeThemeToDark();
    }
}

lightThemeBtn.addEventListener('click', changeTheme);


function getLocalStorageToTheme() {
    if (localStorage.getItem(theme) == 'light') {
        changeThemeToLight();
    } else if (localStorage.getItem(theme) == 'dark') {
        changeThemeToDark();
    }
}

window.addEventListener('load', getLocalStorageToTheme);