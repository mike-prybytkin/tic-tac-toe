//--burger-menu--

const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');

function toggleMenu() {
    burgerMenu.classList.toggle('is-active');
    nav.classList.toggle('is-active');
};
burgerMenu.addEventListener('click', toggleMenu);


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
    burgerMenu.classList.remove('is-active');
    nav.classList.remove('is-active');
    }
};


//--switch images of autumn/spring/summer/winter--

const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');

function changeImage(event) {
    let dataAttribute = event.target.dataset.season;
    if(event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataAttribute}/${index + 1}.jpg`);
    }
};

portfolioBtns.addEventListener('click', changeImage);


//--switch buttons colour--

portfolioBtns.addEventListener('click', (event) => {
    portfolioBtn.forEach((el) => el.classList.remove('active'));
    event.target.classList.add('active')
});


//--switch language buttons colour--

const navLanguage = document.querySelector('.nav-language');
const changeColor = document.querySelectorAll('.change-color');

navLanguage.addEventListener('click', (event) => {
    changeColor.forEach((el) => el.classList.remove('active-lang'));
    event.target.classList.add('active-lang')
});


//--translate web-site--

import i18Obj from './translate.js';

const enLang = document.querySelector('.en-lang');
const ruLang = document.querySelector('.ru-lang');

function getTranslate(lang) {
    let dataLanguage = document.querySelectorAll('[data-i18]');
    dataLanguage.forEach((item) => item.textContent = i18Obj[lang][item.dataset.i18]);

    if (lang === 'ru') {
        document.querySelector('#email').placeholder = i18Obj.ru.email;
        document.querySelector('#tel').placeholder = i18Obj.ru.phone;
        document.querySelector('#textarea').placeholder = i18Obj.ru.message;
        document.querySelector('#button-message').value = i18Obj.ru.sendmessage;
    } else {
        document.querySelector('#email').placeholder = i18Obj.en.email;
        document.querySelector('#tel').placeholder = i18Obj.en.phone;
        document.querySelector('#textarea').placeholder = i18Obj.en.message;
        document.querySelector('#button-message').value = i18Obj.en.sendmessage;
    }
};


enLang.addEventListener('click', () => getTranslate('en'));
ruLang.addEventListener('click', () => getTranslate('ru'));





