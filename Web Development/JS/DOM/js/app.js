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
let enlace = document.querySelectorAll(".enlace");
console.log(enlace[0].parentNode);
console.log(enlace[4].previousElementSibling);