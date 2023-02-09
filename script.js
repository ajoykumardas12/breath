const breathInstruction = document.querySelector('#instructions');
const container = document.querySelector('.container');

const breathTime = 8000;
const breatheInTime = breathTime * 0.4;
const holdTime = breathTime * 0.2;
const breatheOutTime = breathTime * 0.4;

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

window.setInterval(breathInstructionsUpdate, breathTime);