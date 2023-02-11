const breathInstruction = document.querySelector("#instructions");
const container = document.querySelector(".container");
const pointerContainer = document.querySelector(".pointer-container");
const totalBreathTimeElement = document.querySelector('#total-breath-time');

let breathTime = (Number(localStorage.getItem("breathTime")) || 8000);

let breatheInTime = breathTime * 0.4;
let holdTime = breathTime * 0.2;
let breatheOutTime = breathTime * 0.4;

let updatedTime = breathTime;


totalBreathTimeElement.innerText = breathTime/1000 + "s";
document.documentElement.style.setProperty('--grow-shrink-time', breatheInTime / 1000 + "s");

pointerContainer.style.animation = `rotate ${breathTime / 1000
    }s infinite linear`;

breathInstructionsUpdate();

function breathInstructionsUpdate() {
    setTimeout(() => {
        breathInstruction.innerText = "Hold";
        setTimeout(() => {
            breathInstruction.innerText = "Breathe Out";
            container.classList.contains('grow') && container.classList.remove('grow');
            container.classList.add('shrink');
        }, holdTime);
    }, breatheInTime);
    breathInstruction.innerText = "Breathe In";

    container.classList.contains('shrink') && container.classList.remove('shrink');
    container.classList.add('grow');
}

let interval = window.setInterval(breathInstructionsUpdate, breathTime);

function increaseTime() {
    updatedTime += 500;
    totalBreathTimeElement.innerText = updatedTime/1000 + "s";
}
function decreaseTime() {
    updatedTime -= 500;
    totalBreathTimeElement.innerText = updatedTime/1000 + "s";
}

function updateTime(){
    localStorage.setItem('breathTime', updatedTime);

    window.location.reload();
}

function resetTime(){
    localStorage.setItem('breathTime', 8000);

    window.location.reload();
}