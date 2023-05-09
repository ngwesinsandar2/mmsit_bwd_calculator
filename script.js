const keyPad = document.querySelector(".keypad");
const display = document.querySelector(".display");
let key = document.querySelectorAll(".key");
let operators = ["+", "-", "*", "/", "%"];

let filter = (x) => {
    let current = display.innerText;
    let lastCha = current[current.length-1];
    if (current == "0" && x != ".") {
        clearLast();
    }

    if (operators.includes(x) && operators.includes(lastCha)) {
        return false;
    }

    if (current.length == 7) {
        display.style.fontSize = "60px";
    }

    if (current.length == 10) {
        return false;
    }
    return true;
}

const showInDisplay = (x) => {
    if (filter(x)) {
        display.innerText += x;
    }
}
// && operators.includes(lastCha)

let okEqual = (x) => {
    let current = display.innerText;
    let lastCha = current[current.length-1];
    if (x = "=" && operators.includes(lastCha)) {
        return false;
    }
    return true;
}

let calc = (x) => {
    if (okEqual(x)) {
        display.innerText = eval(display.innerText);
    }
}

const clearAll = _ => display.innerText = "";

const clearLast = () => {
    display.innerText = display.innerText.substring(0, display.innerText.length-1);

    if (display.innerText.length == 7) {
        display.style.fontSize = "80px";
    }
}

// let notError = () => {
//     if (operators.includes(lastCha)) {
//         return false;
//     }
//     return true;
// }

// const calc = () => {
//     let current = display.innerText;
//     let lastCha = current[current.length-1];
//     if (operators.includes(lastCha)) {
//         return false;
//     }else{
//         current = eval(current);
//     }
// }

// let calc = _ => display.innerText = eval(display.innerText);