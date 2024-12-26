const targetYear = new Date("December 26, 2024 11:20:00").getTime();
const HIDDEN_KW = "hidden";

const countdownTag = document.querySelector(".time");
const message = document.querySelector("#myMessage")

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
        message.classList.remove(HIDDEN_KW);
        message.classList.add("myMSG");
        clock.classList.remove("clock");
        clock.classList.add(HIDDEN_KW);
    }
}, 1000);

