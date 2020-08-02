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