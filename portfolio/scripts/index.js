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




