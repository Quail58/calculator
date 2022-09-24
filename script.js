let display = document.getElementById('input');

function displayChange(inp){
    if (display.innerHTML == 0 || display.innerHTML == "+"){
        display.innerHTML = inp;
    } else {
        display.innerHTML += inp;
    }    
}

let num1 = 0;
let num2 = 0;
let operator = 0;

function add(){
    num1 = Number(display.innerHTML);
    operator = "+";
    display.innerHTML = "+";
    return num1;
}

function subtract(){

}

function multiply(){

}

function divide(){

}

function operate(){
    num2 = display.innerHTML;
    if (operator == "+"){
        display.innerHTML = Number(num1) + Number(num2);
    } else {
        display.innerHTML = 69;
    }
}
