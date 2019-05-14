

var area = document.getElementById("anima");
var isStarted = false;
var current_animation = document.getElementById("animaOption");
var startInterval = null;
var speed = 250;

function start() {
    if (!isStarted) {
        var currentArray = ANIMATIONS[current_animation].split('=====');
        let currentNum = 0;
        startInterval = setInterval(function () {
            if (currentNum < currentArray.length) {
                area.value = currentArray[currentNum];
                currentNum++;
            }
            else 
            currentNum = 0;
        }, speed);
        isStarted = true;
    }
    else
        console.log("Already Started");

}

function stopAnime() {
    clearInterval(startInterval);
    isStarted = false;
}

function animeChange() {
    current = document.getElementById("animaOption");
    current_animation = current.value;
    stopAnime();
}

function sizeChange() {
    var value = document.getElementById("animaSize").value;
    if (value == 'tiny') area.style.fontSize = '7pt';
    else if (value == 'small') area.style.fontSize = '10pt';
    else if (value == 'medium') area.style.fontSize = '12pt';
    else if (value == 'large') area.style.fontSize = '16pt';
    else if (value == 'extra') area.style.fontSize = '24pt';
    else if (value == 'xxl') area.style.fontSize = '32pt';
}

function speedChange() {
    var isTurbo = document.getElementById("turboChange").checked;
    if (isTurbo) speed = 50;
    else speed = 250;
}
