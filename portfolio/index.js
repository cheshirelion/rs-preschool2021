(function () {
    const burger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    // const navLinks = document.querySelectorAll('.nav-link');
    
    burger.addEventListener('click', () => {
         navMenu.classList.toggle('open')
     });

    function toggleMenu() {
        burger.classList.toggle('close');
    };
    
    burger.addEventListener('click', toggleMenu);

    // function closeMenu() {
    //     navMenu.classList.remove('open');
    //     burger.classList.remove('close');
    // };

    // navLinks.forEach((el) => el.addEventListener('click', closeMenu));
    
    function closeMenu(event) {
        if (event.target.classList.contains('nav-link')) {
            navMenu.classList.remove('open');
            burger.classList.remove('close');
        }
    };
    
    navMenu.addEventListener('click', closeMenu);
}());