
const button = document.querySelector('#new-quote');
const quoteEl = document.querySelector('.quote');
const personEl = document.querySelector('.person');

const quotes = [
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person : "Nelson Mandela"
    },
    {
        quote : "Well done is better than well said.",
        person : "Benjamin Franklin"
    },
    {
        quote : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
        person : "Oprah Winfrey"
    },
    {
        quote : "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person : "James Cameron"
    },
    {
        quote : "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        person : "Mother Teresa"
    },
    {
        quote : "You must be the change you wish to see in the world.",
        person : "Mahatma Gandhi"
    },
]

let cnt = 0;
function change() {
    quoteEl.innerText = quotes[cnt].quote;
    personEl.innerText = quotes[cnt].person;
    cnt = (cnt + 1) % quotes.length;
}
