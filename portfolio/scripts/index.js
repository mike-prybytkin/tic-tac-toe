const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

function toggleMenu() {
    burgerMenu.classList.toggle('is-active');
    navList.classList.toggle('is-active');
}
burgerMenu.addEventListener('click', toggleMenu);




const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
    burgerMenu.classList.remove('is-active');
    navList.classList.remove('is-active');
    }
  }

  navLinks.addEventListener('click', closeMenu);