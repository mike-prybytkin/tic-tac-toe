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




// const navLinks = document.querySelectorAll('.nav-link');


// function closeMenu(event) {
//     if (event.target.classList.contains('nav-link')) {
//       document.querySelector('.burger-menu').classList.remove('is-active');
//       document.querySelector('.nav-list').classList.remove('is-active');
//     }
//   }

//   nav.addEventListener('click', closeMenu);