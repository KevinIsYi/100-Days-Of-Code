/*
let enlaces = document.getElementsByClassName("enlace");
enlaces = document.querySelector(".enlace");
enlaces = document.getElementById("encabezado");
enlaces = document.querySelector("#encabezado");

enlaces = document.getElementsByClassName("enlace")[3];

enlaces.style.background = "red";
enlaces = document.querySelector("ul");
enlaces = document.querySelector("#principal a");
enlaces = document.getElementsByTagName("h1");

enlaces[0].style.background = "#000000";

console.log(enlaces);

*/

// Traveling from parent to child
let barra = document.querySelector(".barra");
console.log(barra.children[0].children[0].children);


// Traveling from child to parent
/*
let enlace = document.querySelectorAll(".enlace");
console.log(enlace[0].parentNode);
console.log(enlace[4].previousElementSibling);
*/
// Create js components

/*
const enlace = document.createElement('a');
enlace.className = "enlace";
enlace.id = "nuevo-id";
enlace.setAttribute("href", "#");
enlace.textContent = "Nuevo Enlace";

/*add it to html 
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);
*/

/*
// edit current html with js
const newHeading = document.createElement('h2');
newHeading.id = "newHeader";
newHeading.appendChild(document.createTextNode('New Text'));
const prev = document.querySelector("#encabezado");
const parent = document.querySelector("#lista-cursos");

// reemplazar
parent.replaceChild(newHeading, prev);
*/

/*
//add and remove elements
const enlaces = document.querySelectorAll(".enlace");
const nav = document.querySelector("#principal");

//enlaces[0].remove();
nav.removeChild(enlaces[0]);

console.log(enlaces);
*/

//create class
/*
const primerLi = document.querySelector(".enlace");
let element;

element = primerLi.classList.add("nueva-clase");
element = primerLi.classList.remove("nueva-clase");
element = primerLi.className;
element = primerLi.classList;

element = primerLi.getAttribute('href');
primerLi.setAttribute("href", "http://google.com.mx");
primerLi.removeAttribute("href");
console.log(primerLi);
console.log(element);
*/

/*
// Click
function prueba(e) {
    e.preventDefault();
    let element;

    element = e.target;
    element = e.target.className;
    element = e.target.innerText;
    e.target.innerText = "Nuevo Texto";
    console.log(element);
    alert("Ahsuuu");
}

document.querySelector("#submit-buscador").addEventListener("click", prueba);
*/

const body = document.querySelector("body");
body.addEventListener("keyup", getEvent);

/*
const header = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll(".enlace");
const boton = document.querySelector("#vaciar-carrito");
*/

//clic 
//boton.addEventListener("click", getEvent);

//doble clic
//boton.addEventListener('dblclick', getEvent);

//mouse enter (hover on buttom)
//boton.addEventListener("mouseenter", getEvent);

//mouse leave
//boton.addEventListener("mouseleave", getEvent);

// mouse over
//boton.addEventListener("mouseover", getEvent);

// mouse out
//boton.addEventListener("mouseout", getEvent);

//mouse down 
//boton.addEventListener("mousedown", getEvent);

// mose up (when unpress)
//boton.addEventListener("mouseup", getEvent);


// movements inside page
//header.addEventListener("mousemove", getEvent);



//const busq = document.querySelector("#buscador");
//busq.addEventListener("keydown", getEvent); except last pressed key
//busq.addEventListener("keyup", getEvent); after pressing key
//busq.addEventListener("keypress", getEvent); all word
//busq.addEventListener("focus", getEvent); //When item is selected
//busq.addEventListener("blur", getEvent); // When you stop selecting item
//busq.addEventListener("cut", getEvent); // when user uses ctrl + c
//busq.addEventListener("copy", getEvent);
//busq.addEventListener("paste", getEvent);
//busq.addEventListener("input", getEvent);
//busq.addEventListener("change", getEvent); // when selecting an option and you change it

function getEvent(e) {
    //console.log(busq.value);
    console.log(e);
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e.key);
    console.log(`Evento: ${e.type}`);
}

/*
// event bubbling
const card = document.querySelector(".card");
const info = document.querySelector(".info-card");
const addCar = document.querySelector(".agregar-carrito");

card.addEventListener("click", function(e) {
    console.log("Click en card");
    e.stopPropagation();
});

info.addEventListener("click", function(e) {
    console.log("Click en infocard");
    e.stopPropagation();
});

addCar.addEventListener("click", function(e) {
    console.log("Click en addCar");
    e.stopPropagation();
});
*/

/*
// delegation
document.body.addEventListener("click", deleteElement);
function deleteElement(e) {
    e.preventDefault(); 
    console.log(e.target.classList);
    console.log("Click");

    if (e.target.classList.contains("borrar-curso")) {
        console.log("La cotiene perro");
        e.target.parentElement.parentElement.remove();
    }
    else {
        console.log("Nel");
    }
}
*/

// Local Storage
//localStorage.setItem("name", "kevin"); // deletes everything when cleaning caché or manual cleaning

//sesion storage
//sessionStorage.setItem("nombre", "kevin"); // it cleans when closing browser


//delete
//localStorage.removeItem("name");
//console.log(localStorage.getItem("name"));

//localStorage.clear(); // cleans up local storage
