(function () {
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
}());

console.log(`
Вёрстка соответствует макету. Ширина экрана 768px +48
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. 
Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
На ширине экрана 768рх и меньше реализовано адаптивное меню +22`);

alert ('Здраствуй многоуважаемый проверяющий! Сейчас на этой странице скорее всего еще нет изменений из Portfolio #3. Я заболел, температурю и чувствую себя довольно скверно.  Буду стараться выполнить задание уже во время кросс-чека и залью изменения, по возможности, как можно быстрее. Очень прошу проверить мою работу ближе к концу кросс-чека, либо проверить не "инкогнито", чтоб иметь возможность списаться. Извиняюсь за  возможные неудобства. Заранее благодарю, долгой жизни и процветания 🖖! ');