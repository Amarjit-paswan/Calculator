var displayValue = "";

function appendNumber(add){
    displayValue += add;
    
    updateDisplay();
}

function appendcancel(){
    displayValue = displayValue.slice(0,-1);
    updateDisplay();
}

function appendopert(opt){
    displayValue += opt;
    
    updateDisplay();
}

function calcute(){
    let result;
 
 
        result = eval(displayValue);
  

    displayValue= result.toString();
    updateDisplay();
}

function clearDisplay(){
    displayValue = "";
    updateDisplay();
}

function updateDisplay(){
    document.getElementById("answer").value= displayValue;
}