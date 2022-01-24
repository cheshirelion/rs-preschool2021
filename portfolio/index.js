(function () {
    const burger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    const closeBurger = document.querySelector('.header-burger-close');
    burger.addEventListener('click', () => {
        navMenu.classList.add('open')
    });
    closeBurger.addEventListener('click', () => {
        navMenu.classList.remove('open')
    });
}());