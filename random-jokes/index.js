const belQuotes = 'json/belquotes.json';
const rusQuotes = 'json/quotes.json';
const btn = document.querySelector('.btn');
const quote = document.querySelector('.text');
const author = document.querySelector('.autor');
const audio = new Audio('assets/audio/laser.mp3');
const lang = document.querySelectorAll('.lang');
const rus = document.getElementById('rus');
let quotes = rusQuotes;

const changeLang = () => {
    if (rus.classList.contains('active')) {
        quotes = rusQuotes;
    } else {
        quotes = belQuotes;
    }
};

async function getQuotes() {
    changeLang();
    const res = await fetch(quotes);
    const data = await res.json();
    showQuotes(data);
    console.log(data)
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

const showQuotes = (data) => {
    quote.textContent = data[getRandomInt(0, 99)].text;
    author.textContent = data[getRandomInt(0, 99)].author;
}

function changeActive() {
    lang.forEach(curent => curent.classList.remove('active'));
    this.classList.add('active');
};

lang.forEach(el => {el.addEventListener('click', changeActive)});
btn.addEventListener('click', getQuotes);
document.addEventListener('DOMContentLoaded', getQuotes);
btn.addEventListener('click', () => audio.play());