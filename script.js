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

function isOperator(sign){
    if (sign === "+" || sign === "-" || sign === "*"|| sign === "/"){
        return true;
    } else{
        return false;
    }
}

const asnwer = document.querySelector(".answer");

function screenToOperate(str){
    var ans;
    var num1 = "";
    var num2 = "";
    var operator = "";
    var nowChar = "";
    const length = str.length;

    for (let i = 0; i < length;i++){
        nowChar = str.charAt(i);
        console.log(nowChar);

        if (nowChar >= "0" && nowChar <= "9"){
            console.log("is digit " + nowChar);
            if (operator === ""){
                num1 += nowChar;
            } else{
                num2 += nowChar;
            }
        } else if (isOperator(nowChar)){
            console.log("is operator " + nowChar);
            if (operator === ""){
                operator = nowChar;
            } else{
                ans = operate (operator, Number(num1), Number(num2));
                num1 = ans;
                num2 = "";
                operator = nowChar;
            }            
        }
    }

    ans = operate (operator, Number(num1), Number(num2));
    console.log ("num1: " + num1 + " num2: " + num2);
    console.log (ans);
    asnwer.textContent = ans;
}

const screen = document.querySelector(".screen");
var screenText = "";

function screenDraw(str){
    screenText+= str;
    if (str === "="){
        screenToOperate (screenText);
        screen.textContent = " ";
        screenText= "";
    } else if (str === "clear"){
        screen.textContent = " ";
        screenText= "";
    } else {
        screen.textContent += str;
    }
}


const btns = document.querySelectorAll("button");
btns.forEach(element => {
    element.addEventListener('click', (e)=>{
        screenDraw(element.textContent);
    })
});

