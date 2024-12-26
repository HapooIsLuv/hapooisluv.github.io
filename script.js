const targetYear = new Date("December 28, 2024 12:00:00").getTime();
const HIDDEN_KW = "hidden";

const countdownTag = document.querySelector(".time");
const Junseomessage = document.querySelector("#myMessage")
const Jiwoomessage = document.querySelector("#myMessagetwo")

const clock = document.querySelector(".clock");



const countdownfunc = setInterval(function() {
    const now = new Date().getTime();

    const distance = targetYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTag.innerHTML = 
    `${days}:${hours}:${minutes}:${seconds}`;


    if (distance < 0) {
        clearInterval(countdownfunc);
        Junseomessage.classList.remove(HIDDEN_KW);
        Junseomessage.classList.add("myMSG");
        clock.classList.remove("clock");
        clock.classList.add(HIDDEN_KW);
    }
}, 1000);

const btn = document.querySelector("#changeContent");
const btntwo = document.querySelector("#changeContenttwo");

btn.addEventListener("click", () => {
    Junseomessage.classList.add(HIDDEN_KW);
    Junseomessage.classList.remove("myMSG");

    Jiwoomessage.classList.remove(HIDDEN_KW);
    Jiwoomessage.classList.add("myMSG");
})

btntwo.addEventListener("click", () => {
    Jiwoomessage.classList.add(HIDDEN_KW);
    Jiwoomessage.classList.remove("myMSG");

    Junseomessage.classList.remove(HIDDEN_KW);
    Junseomessage.classList.add("myMSG");
})