function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function openRate(){
    var audio = new Audio('./sounds/ponClick.mp3');
    audio.play();
    for (let i = 1; i <= 1; i++) {
        await sleep(300);
    }
    window.location.href = "./rateView/index.html";
}

function play() {
    var audio = new Audio('./sounds/pon.mp3');
    audio.play();
}