
var textArea = document.getElementById("txt_area");
function helloWorld() {

    setInterval(function () {
        var newSize = parseInt(parseFloat(window.getComputedStyle(textArea, null).getPropertyValue('font-size')) * 3 / 4) + 2;
        textArea.style.fontSize = newSize + "pt";
        console.log("called");

    }, 500);


}

function changeCheck() {

    var myCheck = document.getElementById("myCheck");

    console.log(normalText);
    if (myCheck.checked) {
        textArea.style.fontWeight = 'bold';
        textArea.style.textDecoration = 'underline';
        textArea.style.color = 'green';
        document.getElementsByTagName("body")[0].style.background = "url(dollar.jpg)";
    }
    else {
        textArea.style.fontWeight = 'normal';
        textArea.style.textDecoration = 'none';
        textArea.style.color = 'black';
        document.body.style.background = "";
    }
}

function toLatinBttn() {
    var normalText = textArea.value;
    var varArr = normalText.split(' ');
    var myText = toLatin(varArr);
    textArea.value = myText;
}

function malkovich() {
    var normalText = textArea.value;
    var varArr = normalText.split(' ');
    var myValue = '';
    varArr.forEach(el => {
        if(el.length >= 5) {
            el = "Malkovich";
        }
        myValue += el + ' ';
    });

    textArea.value = myValue.substring(0,myValue.length-1);
    
}

function toLatin(arr) {
    let returnValue = '';
    for (let i = 0; i < arr.length; i++) {
        let word = '';
        if(arr[i] != ' ') word = arr[i].substring(1, arr[i].length) + arr[i].substring(0, 1) + 'ay';
        returnValue += word + " ";
        console.log(word);
        
    }
    return returnValue.substring(0, returnValue.length-1);
}