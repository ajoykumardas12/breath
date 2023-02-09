const breathInstruction = document.querySelector('#instructions');

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
        }, holdTime);
    }, breatheInTime);
    breathInstruction.innerText = "Breathe In";
}

window.setInterval(breathInstructionsUpdate, breathTime);