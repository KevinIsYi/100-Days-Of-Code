const keysId = {8: ["#del"], //del
                13: ["#ans"], //ans - enter
                48: ["#equal", " = "], //equal
                96: ["#zero", "0"],
                97: ["#one", "1"],
                98: ["#two", "2"],
                99: ["#three", "3"],
                100: ["#four", "4"],
                101: ["#five", "5"],
                102: ["#six", "6"],
                103: ["#seven", "7"],
                104: ["#eight", "8"],
                105: ["#nine", "9"],
                106: ["#mult", " X "], //asterisk
                107: ["#plus", " + "], //sum
                109: ["#min", " - "], //rest
                111: ["#div", " ÷ "] , //division
                190: ["#dot", " . "]
                };
let onScreen = "";

function getValue(key) {
    try {
        return keysId[key][0]; 
    } 
    catch (error) {
        return undefined;
    }
}

function eventListeners() {
    const body = document.querySelector("body");

    body.addEventListener("keyup", keyPressed);
    body.addEventListener("keydown", keyUnpressed);
}

function keyPressed(event) {

    let key = event.keyCode, value = getValue(key);

    if (value !== undefined) {
        let screenText = document.querySelector(".screen-text");
        
        if (key == 13 || key == 48) {
            let splittedExpression = screenText.innerHTML.split(" ");
            solveExpression(screenText, splittedExpression);
            onScreen = "";
        }
        else if (key == 8) {
            screenText.innerHTML = "";
            onScreen = "";
        }
        else {
            onScreen += keysId[key][1];
            screenText.innerHTML = onScreen;
        }

        key = document.querySelector(value);
        key.classList.add("on-click-animation");
    }
}

function solveExpression(screenText, splittedExpression) {

    let numbers = [], symbols = [], ans;

    for (let i = 0 ; i < splittedExpression.length ; ++i) {
        if (splittedExpression[i] === "") {
            continue;
        }
        if (!isNaN(splittedExpression[i])) {
            numbers.push(parseInt(splittedExpression[i]));
        }
        else {
            symbols.push(splittedExpression[i]);
        }
    }

    if (symbols.length + 1 !== numbers.length) {
        screenText.innerHTML = "SYNTAX ERROR";
    }
    else {
        ans = numbers[0];

        for (let i = 1 ; i < numbers.length ; ++i) {
            switch (symbols[i - 1]) {
                case "X":
                    ans *= numbers[i];
                    break;
                case "÷":
                    if (numbers[i] == 0) {
                        screenText.innerHTML = "DIVIDED BY 0";
                        return;
                    }
                    else {
                        ans /= numbers[i];
                    }
                    break;
                case "+":
                    ans += numbers[i];
                    break;
                case "-":
                    ans -= numbers[i];
                    break;
            }
        }
        screenText.innerHTML = ans.toString();
    }   
}

function keyUnpressed(event) {

    let key = event.keyCode, value = getValue(key);

    if (value !== undefined) {
        key = document.querySelector(value);
        key.classList.remove("on-click-animation");
    }
}

eventListeners();