//Adaptive menu

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

//Change Picture

const portfolioBtns = document.querySelector('.portfolio-btns')
const portfolioCards = document.querySelectorAll('.portfolio-card');

function changeImage(event) {
    if (event.target.dataset.season) {
        portfolioCards.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    };
};

portfolioBtns.addEventListener('click', changeImage);

//Preload Images

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach(season => {
        for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${season}/${i}.jpg`
        }
    
    });
}

preloadImages();

//Active btn

function changeActive(className, event) {
    const btnAll = document.querySelector(className);
    const btns = btnAll.querySelectorAll('button');

    btns.forEach(int => int.classList.remove('active'));
    event.target.classList.add('active');
};

portfolioBtns.addEventListener('click', event => {
    changeActive('.portfolio-btns', event);
});
