const blrQuotes = 'json/belquotes.json';
const rusQuotes = 'json/quotes.json';

async function getQuotes() {
    const quotes = rusQuotes;
    const res = await fetch(quotes);
    const data = await res.json();
    console.log(data);
}

getQuotes();