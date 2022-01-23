// document.querySelector('.burger-menu').addEventListener('click', function (e) {
//     e.preventDefault();
//     this.classList.toggle('is-active');
// })


const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

function toggleMenu() {
    burgerMenu.classList.toggle('is-active');
    navList.classList.toggle('is-active');
}
burgerMenu.addEventListener('click', toggleMenu);