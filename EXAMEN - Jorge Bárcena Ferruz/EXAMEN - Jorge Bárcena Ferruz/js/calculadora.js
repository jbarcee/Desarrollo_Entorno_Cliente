var firstOp = 0;
var secondOp = 0;
var operation = "";
var firstIsSet = false;
window.addEventListener('click', () => {
    console.log(firstIsSet);
    console.log("Primer: " + firstOp + ", Segundo: " + secondOp);
})
function init() {
    clearScreen();
    document.getElementById("signo").style.display = "none";
    document.getElementById("seno").style.display = "none";
    document.getElementById("pi").style.display = "none";
    document.getElementById("coseno").style.display = "none";
    document.getElementById("tangente").style.display = "none";
    document.getElementById("e").style.display = "none";
    document.getElementById("cuadrado").style.display = "none";
    document.getElementById("raiz").style.display = "none";

    document.getElementById("estandar").checked = true;
}

function switchCalculator(mode) {
    //Comprueba que el modo sea científico
    document.getElementById("cientifica").checked ? mode = "block" : mode = "none";
    //Modifica la visibilidad de los botones
    document.getElementById("signo").style.display = mode;
    document.getElementById("seno").style.display = mode;
    document.getElementById("pi").style.display = mode;
    document.getElementById("coseno").style.display = mode;
    document.getElementById("tangente").style.display = mode;
    document.getElementById("e").style.display = mode;
    document.getElementById("cuadrado").style.display = mode;
    document.getElementById("raiz").style.display = mode;
}

function addValueToScreen(value) {
    if (value == ".") {
        if (checkPoint() == true) {
            return;
        }
    }
    document.getElementById("pantalla").value += value;

    if (firstIsSet === false) {
        firstOp = document.getElementById("pantalla").value;
    }
    else {
        secondOp = document.getElementById("pantalla").value;
    }

}

function clearScreen() {
    document.getElementById("pantalla").value = 0;
}

function changeSign() {
    let result = document.getElementById("pantalla").value *= -1;
    if (!firstIsSet) {
        firstOp = result;
    }
    else {
        secondOp = result;
    }
    
}

function calculateSin() {
    firstOp = Math.sin(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = firstOp;
}

function calculateCos() {
    firstOp = Math.cos(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = firstOp;
}

function calculateSquare() {
    firstOp = Math.pow(document.getElementById("pantalla").value, 2);
    document.getElementById("pantalla").value = firstOp;
}

function checkPoint() {
    if((document.getElementById("pantalla").value).match(/\./)) {
        return true;
    }
    else {
        return false;
    }
}

function calculateSqrt() {
    firstOp = Math.sqrt(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = firstOp;
}

function calculateTan() {
    firstOp = Math.tan(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = firstOp;
}  

function calculate() {
    switch (operation) {
        case "suma":
            firstOp = parseFloat(firstOp) + parseFloat(secondOp);
            document.getElementById("pantalla").value = firstOp;
            break;
        case "resta":
            firstOp = parseFloat(firstOp) - parseFloat(secondOp);
            document.getElementById("pantalla").value = firstOp;
            break;
        case "multiplicacion":
            firstOp = parseFloat(firstOp) * parseFloat(secondOp);
            document.getElementById("pantalla").value = firstOp;
            break;
        case "division":
            firstOp = parseFloat(firstOp) / parseFloat(secondOp);
            document.getElementById("pantalla").value = firstOp;
            break;  
    }
}
