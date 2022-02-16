const blrQuotes = 'json/belquotes.json';
const rusQuotes = 'json/quotes.json';
const btn = document.querySelector('.btn');
const quote = document.querySelector('.text');
const author = document.querySelector('.autor');
const audio = new Audio('assets/audio/laser.mp3')

async function getQuotes() {
    const quotes = rusQuotes;
    const res = await fetch(quotes);
    const data = await res.json();
    console.log(data);
    showQuotes(data);
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

btn.addEventListener('click', getQuotes);
document.addEventListener('DOMContentLoaded', getQuotes);
btn.addEventListener('click', () => audio.play());