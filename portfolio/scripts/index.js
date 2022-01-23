document.querySelector('.burger-menu').addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
})