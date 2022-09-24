let display = document.getElementById('input');

function displayChange(inp){
    if (display.innerHTML == 0){
        display.innerHTML = inp;
    } else {
        display.innerHTML += inp
    }
    
}