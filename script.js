function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function divide(num1, num2) {
    return Math.round((Number(num1) / Number(num2)) * 100) / 100;
}

function multiply(num1, num2) {
    return (Math.round((Number(num1) * Number(num2)) * 100) / 100);
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
var decimal = 0;

function screenToOperate(str) {
    var ans;
    var num1 = "";
    var num2 = "";
    var operator = "";
    var nowChar = "";
    const length = str.length;

    for (let i = 0; i < length; i++) {
        nowChar = str.charAt(i);

        if (nowChar >= "0" && nowChar <= "9" || nowChar === ".") {
            if (operator === "") {
                num1 += nowChar;
            } else {
                num2 += nowChar;
            }
        } else if (isOperator(nowChar)) {
            if (operator === "") {
                operator = nowChar;
                decimal = 0;
            } else {
                ans = operate(operator, num1, num2);
                num1 = ans;
                num2 = "";
                operator = nowChar;
                decimal = 0;
            }
        }
    }

    ans = operate(operator, num1, num2);
    console.log(ans);
    asnwer.textContent = ans;
}

const screen = document.querySelector(".screen");
var screenText = "";

function screenDraw(str) {
    if (str == "Del") {
        var shorter = screen.textContent.substring(0, screen.textContent.length - 1);
        screen.textContent = shorter;
    } else {
        screenText += str;
        if (str === "=") {
            screenToOperate(screenText);
            screen.textContent = " ";
            screenText = "";
        } else if (str === "AC") {
            screen.textContent = " ";
            screenText = "";
            asnwer.textContent = "";
        } else {
            if (isOperator(str)) {
                screen.textContent += " " + str + " ";
                decimal = 0;
            } else {
                screen.textContent += str;
            }
        }
    }
}

const btns = document.querySelectorAll("button");

btns.forEach(element => {
    if (element.textContent === ".") {
        element.addEventListener('click', (e) => {
            if (decimal === 0) {
                decimal = 1;
                screenDraw(element.textContent);
            }
        });
    } else {
        element.addEventListener('click', (e) => {
            screenDraw(element.textContent);
        });
    }
});