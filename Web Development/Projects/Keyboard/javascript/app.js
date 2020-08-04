const body = document.querySelector("body");
body.addEventListener("keydown", getEvent);
body.addEventListener("keyup", deleteClass);

function deleteClass(e) {

    const dict = {1: 20, 2: 32, 3: 65, 4: 66, 5: 67, 6: 68, 7: 69, 8: 70, 
        9: 71, 10: 72, 11: 73, 12: 74, 13: 75, 
        14: 76, 15: 77, 16: 78, 17: 79, 18: 80, 
        19: 81, 20: 82, 21: 83, 22: 84, 23: 85, 24: 86, 
        25: 87, 26: 88, 27: 89, 28: 90};

    console.log(Object.keys(dict).length);

    
    let keycode = e.keyCode;

    let hola = "hola";
    console.log(hola);
    console.log(keycode);

    console.log(`Esto vale keycode: ${keycode}`);

    if (keycode == 81) {
        let key = document.querySelector("#q");
        key.classList.remove("on-click-animation");
        console.log(key);
    }
}

function getEvent(e) {
    //console.log(busq.value);
    let keycode = e.keyCode;

    console.log(`Este es el codigo: ${keycode}`);

    switch(keycode) {
        case 81:
            let key = document.querySelector("#q");
            
            key.classList.add("on-click-animation");
            
            console.log("Presionaste la q, perro");
            
            console.log(document.querySelector("#q"));
            break;
    }

    console.log(e);
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e.key);
    console.log(`Evento: ${e.type}`);
}