const email = document.getElementById("email"),
        subject = document.getElementById("asunto"),
        message = document.getElementById("mensaje"),
        sendBotton = document.getElementById("enviar"),
        sendForm = document.getElementById("enviar-mail"),
        resetButton = document.getElementById("resetBtn");
    
//const sendSubmitButton = document.getElementById("enviar-");

function startApp() {
    sendBotton.disabled = true;
}

function validateField() {
    isValidInput(this);

    if (this.type === "email") {
        validateEmail(this);
    }

    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        sendBotton.disabled = false;
    }
    else {
        sendBotton.disabled = true;
    }
}

function validateEmail(field) {
    const messge = field.value;

    if (messge.indexOf("@") !== -1) {
        field.style.borderBottomColor = "green";
        field.classList.remove("error");
    }
    else {
        field.style.borderBottomColor = "red";
        field.classList.add("error");
    }
}

function isValidInput(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = "green";
        field.classList.remove("error");
    }
    else {
        field.style.borderBottomColor = "red";
        field.classList.add("error");
    }
}

function sendEmail(e) {

    const spinnerGif = document.querySelector("#spinner"),
        sent = document.createElement("img");
    
    spinnerGif.style.display = "block";
    sent.src = "img/mail.gif";
    sent.style.display = "block";

    setTimeout(() => {
        spinnerGif.style.display = "none";
        document.querySelector("#loaders").appendChild(sent);

        setTimeout(() => {
           sent.remove(); 
           sendForm.reset();
        }, 5000);
    }, 3000);

    e.preventDefault();
}

function resetForm(e) {
    sendForm.reset();
    e.preventDefault();
}

function eventListeners() {
    document.addEventListener("DOMContentLoaded", startApp);

    email.addEventListener("blur", validateField);
    subject.addEventListener("blur", validateField);
    message.addEventListener("blur", validateField);

    sendBotton.addEventListener("click", sendEmail);
    //sendSubmitButton.addEventListener("submit", sendEmail);

    resetButton.addEventListener("click", resetForm);
}

eventListeners();