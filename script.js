function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return (Math.round((num1 * num2) * 100) / 100);
}

function operate(sign, num1, num2) {
    if (sign === "+") {
        return add(num1, num2);
    } else if (sign === "-") {
        return subtract(num1, num2);
    } else if (sign === "*") {
        return multiply(num1, num2);
    } else if (sign === "/") {
        return divide(num1, num2);
    }
}

function isOperator(sign) {
    if (sign === "+" || sign === "-" || sign === "*" || sign === "/") {
        return true;
    } else {
        return false;
    }
}

const asnwer = document.querySelector(".answer");

function screenToOperate(str) {
    var ans;
    var num1 = "";
    var num2 = "";
    var operator = "";
    var nowChar = "";
    const length = str.length;

    for (let i = 0; i < length; i++) {
        nowChar = str.charAt(i);

        if (nowChar >= "0" && nowChar <= "9") {
            if (operator === "") {
                num1 += nowChar;
            } else {
                num2 += nowChar;
            }
        } else if (isOperator(nowChar)) {
            if (operator === "") {
                operator = nowChar;
            } else {
                ans = operate(operator, Number(num1), Number(num2));
                num1 = ans;
                num2 = "";
                operator = nowChar;
            }
        }
    }

    ans = operate(operator, Number(num1), Number(num2));
    asnwer.textContent = ans;
}

const screen = document.querySelector(".screen");
var screenText = "";

function screenDraw(str) {
    screenText += str;
    if (str === "=") {
        screenToOperate(screenText);
        screen.textContent = " ";
        screenText = "";
    } else if (str === "AC") {
        screen.textContent = " ";
        screenText = "";
    } else {
        if (isOperator(str)) {
            screen.textContent += " " + str + " ";
        } else {
            screen.textContent += str;
        }
    }
}


const btns = document.querySelectorAll("button");
btns.forEach(element => {
    element.addEventListener('click', (e) => {
        screenDraw(element.textContent);
    })
});