
const burger = document.querySelector('.hamburger');
const hamburgerOverlay = document.querySelector('.hamburger-overlay');
const navMenu = document.querySelector('.nav');

burger.addEventListener('click', () => {
        navMenu.classList.toggle('open')
        hamburgerOverlay.classList.toggle('active');
    });

function toggleMenu() {
    burger.classList.toggle('close');
};

burger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        navMenu.classList.remove('open');
        hamburgerOverlay.classList.remove('active');
        burger.classList.remove('close');
    }
};

navMenu.addEventListener('click', closeMenu);
hamburgerOverlay.addEventListener("click", closeMenu);

//Change pic

const portfolioBtns = document.querySelector('.portfolio-btns')
const portfolioCards = document.querySelectorAll('.portfolio-card');

function changeImage(event) {
    if (event.target.dataset.season) {
        portfolioCards.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    };
};

portfolioBtns.addEventListener('click', changeImage);