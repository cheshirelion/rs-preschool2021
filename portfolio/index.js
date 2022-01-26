const close = document.querySelector('.hamburger');
function toggleMenu() {
   close.classList.toggle('closeBurger');
};

close.addEventListener('click', toggleMenu);

(function () {
    const burger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    
    burger.addEventListener('click', () => {
         navMenu.classList.toggle('open')
     });
}());