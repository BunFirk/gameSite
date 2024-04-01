async function goBack(){
    var audio = new Audio('../sounds/ponClick.mp3');
    audio.play();
    for (let i = 1; i <= 1; i++) {
        await sleep(300);
    }
    window.location.href = "../index.html";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function(event) {
    var minPrice = 1;
    var processPrice = document.getElementById("priceP");
    var priceCoinDoc = document.getElementById("priceS");
    var updPriseDoc = document.getElementById("updPrice");
    var priceArrow = document.getElementById("priceArrow");
    var priceCoinOld = 0
    var priceCoinNew = 0
    var audio = new Audio('../sounds/ponClick.mp3');

    async function demo() {
        while (true) {
            for (let i = 1; i <= 11; i++) {
                await sleep(1000);

                switch(i) {
                    case 1:
                       processPrice.innerText = "[■□□□□□□□□□]";
                       updPriseDoc.innerText = "Update prise";
                       break;
                    case 2:
                        processPrice.innerText = "[■■□□□□□□□□]";
                        updPriseDoc.innerText = "Update prise.";
                        break;
                    case 3:
                        processPrice.innerText = "[■■■□□□□□□□]";
                        updPriseDoc.innerText = "Update prise..";
                        break;
                    case 4:
                        processPrice.innerText = "[■■■■□□□□□□]";
                        updPriseDoc.innerText = "Update prise...";
                        break;
                    case 5:
                        processPrice.innerText = "[■■■■■□□□□□]";
                        updPriseDoc.innerText = "Update prise";
                        break;
                    case 6:
                        processPrice.innerText = "[■■■■■■□□□□]";
                        updPriseDoc.innerText = "Update prise.";
                        break;
                    case 7:
                        processPrice.innerText = "[■■■■■■■□□□]";
                        updPriseDoc.innerText = "Update prise..";
                        break;
                    case 8:
                        processPrice.innerText = "[■■■■■■■■□□]";
                        updPriseDoc.innerText = "Update prise...";
                        break;
                    case 9:
                        processPrice.innerText = "[■■■■■■■■■□]";
                        updPriseDoc.innerText = "Update prise.";
                        break;
                    case 10:
                        processPrice.innerText = "[■■■■■■■■■■]";
                        updPriseDoc.innerText = "Price is updated!";
                        break;
                }
            }
            priceCoinNew = Math.floor(Math.random() * (10 - minPrice + 1)) + minPrice;

            switch(true){
                case priceCoinNew < priceCoinOld:
                    priceArrow.innerText = "↓";
                    priceArrow.style.color = "#ff7878";
                    break;
                case priceCoinNew > priceCoinOld:
                    priceArrow.innerText = "↑";
                    priceArrow.style.color = "#86ff78";
                    break;
                case priceCoinNew == priceCoinOld:
                    priceArrow.innerText = "-";
                    priceArrow.style.color = "#ffffff";
                    break;
            }

            priceCoinOld = priceCoinNew
            
            
            audio.play();

            priceCoinDoc.innerText = `[${priceCoinNew}$]`;
            processPrice.innerText = "[□□□□□□□□□□]";
        }
    }

    demo();
});

function play() {
    var audio = new Audio('../sounds/pon.mp3');
    
    audio.play();
}