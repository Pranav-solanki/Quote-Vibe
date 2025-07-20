const quotes = [
    "1, The only way to do great work is to love what you do.",
    "2, Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "3, In the middle of every difficulty lies opportunity.",
    "4, Life is what happens when you're busy making other plans.",
    "5, Happiness is not something ready-made. It comes from your own actions.",
    "6, If you want to live a happy life, tie it to a goal, not to people or things.",
    "7, Your time is limited, so don’t waste it living someone else’s life.",
    "8, Believe you can and you're halfway there.",
    "9, Do what you can, with what you have, where you are.",
    "10, The future belongs to those who believe in the beauty of their dreams."
];
const owners = ["Steve Jobs",
    "Winston Churchill",
    "Albert Einstein",
    "John Lennon",
    "Dalai Lama",
    "Albert Einstein",
    "Steve Jobs",
    "Theodore Roosevelt",
    "Theodore Roosevelt",
    "Eleanor Roosevelt"]
const audio = new Audio('sound1.mp3');
let len = quotes.length;
let btn = document.querySelector("button");
let content = document.querySelectorAll("p");
let first = content[0];
let second = content[1];
let index = 0;


btn.addEventListener("click", () => {
    audio.play();
    if (index == len - 1) {
        index = 0;
    }
    else {
        index++;
    }
    first.innerText = quotes[index];
    second.innerText = owners[index];
})