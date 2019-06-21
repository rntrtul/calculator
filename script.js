function add(num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function multiply (num1, num2){
    return (Math.round((num1*num2)*100) / 100);
}

function operate(sign, num1, num2){
    if (sign === "+"){
        return add (num1, num2);
    } else if(sign === "-"){
        return subtract(num1, num2);
    } else if(sign === "*"){
        return multiply (num1, num2);
    } else if(sign === "/"){
        return divide (num1, num2);
    }
}

const screen = document.querySelector(".screen");

function display(str){
    if (str === "clear"){
        screen.textContent = "";
    }else {
        screen.textContent += str;
    }
    
}

const btns = document.querySelectorAll("button");
btns.forEach(element => {
    element.addEventListener('click', (e)=>{
        display(element.textContent);
    })
});

