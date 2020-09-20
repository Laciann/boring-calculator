let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if(isNaN(value)){
        handleSymbol(value); //NaN
    } else {
        handleNumber(value);
        }

        screen.innerText = buffer;
    }

function handleSymbol(symbol) {
   switch (symbol) {
       case 'C':
           buffer = '0';
           runningTotal = 0;
           break;
   
        case '&plus;':
        case '&minus;':
        case '&times;':
        case '&divide;':
            handleMath(symbol);
           break;
   }
}

function handleMath(symbol) {
    
}

function handleNumber(numberString) {
    if(buffer === "0"){
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}


function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function (event) {
        buttonClick(event.target.innerText);
    })
}

init();