var output = document.getElementById("result");
var game = () => {
    setTimeout(function () {
        let startNumber = 1;
        let endNumber = 6;
        let mix = Math.floor(Math.random() * endNumber) + startNumber;
        let afterMix = "";
        if (mix == 1) {
            afterMix = "ខ្លា";
            output.style.background = "images/tigers.jpg";
            output.style.display = "block";
        } else if (mix == 2) {
            afterMix = "ឃ្លោក";
            output.style.background = "orange";
            output.style.display = "block";
        } else if (mix == 3) {
            afterMix = "មាន់";
            output.style.background = "purple";
            output.style.display = "block";
        } else if (mix == 4) {
            afterMix = "បង្កង";
            output.style.background = "red";
            output.style.display = "block";
        } else if (mix == 5) {
            afterMix = "ក្តាម";
            output.style.background = "green";
            output.style.display = "block";
        } else {
            afterMix = "ត្រី";
            output.style.background = "pink";
            output.style.display = "block";
        }

        output.innerHTML = afterMix;
    }, 5000);



}

var resetGame = () => {
    output.style.display = "none";
    output.innerHTML = "";
    output.style.background = "";
}

let btn = document.querySelector("#mix");
let reset = document.querySelector("#reset");
reset.addEventListener('click', resetGame);
btn.addEventListener('click', game);

