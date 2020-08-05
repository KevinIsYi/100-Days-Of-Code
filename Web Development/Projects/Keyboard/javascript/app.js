
const keysId = {20: "#caps", 32: "#spacebar", 65: "#a", 66: "#b", 67: "#c", 
    68: "#d", 69: "#e", 70: "#f", 71: "#g", 72: "#h", 73: "#i", 74: "#j", 75: "#k", 
    76: "#l", 77: "#m", 78: "#n", 79: "#o", 80: "#p", 81: "#q", 82: "#r", 83: "#s", 
    84: "#t", 85: "#u", 86: "#v", 87: "#w", 88: "#x", 89: "#y", 90: "#z"};

function deleteClass(e) {
    
    let keycode = e.keyCode, value = keysId[keycode];

    if (value !== undefined) {
        let pressedKey = document.querySelector(value);
        pressedKey.classList.remove("on-click-animation");
    }
}

function receiveEvent(e) {

    let keycode = e.keyCode, value = keysId[keycode];

    if (value !== undefined) {
        let pressedKey = document.querySelector(value);
        pressedKey.classList.add("on-click-animation");
    }
}

function eventListener() {
    const body = document.querySelector("body");

    body.addEventListener("keydown", receiveEvent);
    body.addEventListener("keyup", deleteClass);
}

eventListener();