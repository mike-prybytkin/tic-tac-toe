//burger-menu

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


//switch images of autumn/spring/summer/winter

const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');

function changeImage(event) {
    let dataAttribute = event.target.dataset.season;
    if(event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataAttribute}/${index + 1}.jpg`);
    }
};

portfolioBtns.addEventListener('click', changeImage);






