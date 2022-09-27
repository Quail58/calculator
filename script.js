let display = document.getElementById('input');

function displayChange(inp){
    if (display.innerHTML == 0 || display.innerHTML == "+" || display.innerHTML == "÷" || display.innerHTML == "−" || display.innerHTML == "×"){
        display.innerHTML = inp;
    } else {
        display.innerHTML += inp;
    }    
}

let num1 = 0;
let num2 = 0;
let operator = 0;

//backspace button code
function backspace(){
    let del = display.innerHTML;
    let result = del.toString().substring(0, del.toString().length - 1)
    display.innerHTML = result;
}

function add(){
    num1 = Number(display.innerHTML);
    operator = "+";
    display.innerHTML = "+";
}

function subtract(){
    num1 = Number(display.innerHTML);
    operator = "-";
    display.innerHTML = "&#8722;";
}

function multiply(){
    num1 = Number(display.innerHTML);
    operator = "*";
    display.innerHTML = "&#215;";
}

function divide(){
    num1 = Number(display.innerHTML);
    operator = "/";
    display.innerHTML = "&#247;";
}

function operate(){
    num2 = display.innerHTML;
    if (operator == "+"){
        display.innerHTML = Number(num1) + Number(num2);
    } else if (operator == "*"){
        display.innerHTML = Number(num1) * Number(num2);
    } else if (operator == "/"){
        display.innerHTML = Number(num1) / Number(num2);
    } else if (operator == "-"){
        display.innerHTML = Number(num1) - Number(num2);
    } else {
        display.innerHTML = "ERROR";
    }
    
}
