//Get Value
const getNumbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector('.calculator-screen');
const getOperators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal-sign");
const allClear = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const percent = document.querySelector(".percentage");

//Mendefinisikan Variabel untuk Melakukan kalkulasi
let currentNumber = "0";
let prevNumber = "";
let calcOperator = "";

//----------------------------------------------------------
//Menyimpan value tombol yg di tekan ke currNumber
const inputNumber = function (number) {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber = currentNumber + number;
    }
};

const updateScreen = function (number) {
    calculatorScreen.value = number;
};

//Memindahkan Nilai yg tersimpan di currNumber -> prevNumber
//Menyimpan Operator Kalkulasi -> calcOperator
//Mengosongkan currNumber untuk diisi kembali
const inputOperator = function (operator) {
    if(calcOperator === ''){ 
        prevNumber = currentNumber; 
    }
    calcOperator = operator;
    currentNumber = '';
};

const calculate = function () {
    let temp = '';
    switch(calcOperator) {
        case "+":
            temp = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            temp = prevNumber - currentNumber;
            break;
        case "*":
            temp = prevNumber * currentNumber;
            break;   
        case "/":
            temp = prevNumber / currentNumber;
            break;    
        default:
            break; 
    }
    currentNumber = temp;
    calcOperator = '';
};


const clear = function () {
    prevNumber = "";
    currentNumber = "0";
    calcOperator = "";
};

const inputDecimal = function (decimal){
    if(currentNumber.includes(".")){
        return;
    }
    currentNumber += decimal;
};

const percentage = function (){
    currentNumber = currentNumber/100;
}
//---------------------------------------------------------

//Click Event (Numbers) -> Input Number
getNumbers.forEach((number) => {
    number.addEventListener("click", function (e) {
        inputNumber(e.target.value);
        updateScreen(currentNumber);
    });
});

//Click Event (Operator) -> InputOperator
getOperators.forEach(function (operator) {
    operator.addEventListener("click", function (e) {
        inputOperator(e.target.value);
    });
});

//Click Event (Equal) -> Calculate
    equal.addEventListener("click", function () {
        calculate();
        updateScreen(currentNumber);
    });

//Click Event (Clear) -> Clear
    allClear.addEventListener("click", function () {
        clear();
        updateScreen(currentNumber);
    });

//Click Event (Decimal) -> inputDecimal
    decimal.addEventListener("click", function (e) {
        inputDecimal(e.target.value);
        updateScreen(currentNumber);
    });

//Click Event (%) -> Percentage
    percent.addEventListener("click", function (e) {
        percentage(e.target.value);
        updateScreen(currentNumber);
    });