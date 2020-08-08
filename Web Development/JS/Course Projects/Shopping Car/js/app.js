const car = document.getElementById("carrito"),
    courses = document.getElementById("lista-cursos"),
    listCourses = document.querySelector("#lista-carrito tbody"),
    emptyCar = document.getElementById("vaciar-carrito");

function getCoursesLocalStorage() {

    if (localStorage.getItem("cursos") === null) {
        return [];
    }
    return JSON.parse(localStorage.getItem("cursos"));
}

function saveInLocalStorage(courseInfo) {
    console.log("A ver papuchin");

    let courses = getCoursesLocalStorage();
    courses.push(courseInfo);
    localStorage.setItem("cursos", JSON.stringify(courses));
}

function insertInCar(courseInfo) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${courseInfo.image}" width=100>
        </td>
        <td>${courseInfo.tittle}</td>
        <td>${courseInfo.price}</td>
        <td>
            <a hred="#" class="borrar-curso" data-id="${courseInfo.id}">X</a>
        </td>
        `;

    listCourses.appendChild(row);
    saveInLocalStorage(courseInfo);
}

function readCourseData(course) {
    const courseInfo = {
        image: course.querySelector("img").src,
        tittle: course.querySelector("h4").textContent,
        price: course.querySelector(".precio span").textContent,
        id: course.querySelector("a").getAttribute("data-id")
    };

    insertInCar(courseInfo);
}
function buyCourse(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        const course = e.target.parentElement.parentElement;

        readCourseData(course);
    }
}

function deleteCourseFromLocalStorage(course) {
    let courses = getCoursesLocalStorage();

    courses.forEach((currentCourse, index) => {
        if(currentCourse.id === course) {
            courses.splice(index, 1);
        }
    });
    localStorage.setItem("cursos", JSON.stringify(courses));
}

function deleteCourse(e) {
    e.preventDefault();

    let course,
        courseId;

    if (e.target.classList.contains("borrar-curso")) {
        course = e.target.parentElement.parentElement;
        course.remove();

        courseId = course.querySelector("a").getAttribute("data-id");
    }

    deleteCourseFromLocalStorage(courseId);
}

function emptyShoppingCar(e) {
    e.preventDefault();

    //listCourses.innerHTML = "";
    while(listCourses.firstChild) {
        listCourses.removeChild(listCourses.firstChild);
    }
    localStorage.clear();
}

function readLocalStorage() {
    let coursesLocalStorage = getCoursesLocalStorage();

    coursesLocalStorage.forEach(courseInfo => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
            <img src="${courseInfo.image}" width=100>
        </td>
        <td>${courseInfo.tittle}</td>
        <td>${courseInfo.price}</td>
        <td>
            <a hred="#" class="borrar-curso" data-id="${courseInfo.id}">X</a>
        </td>
        `;

        listCourses.appendChild(row);
    });
    console.log(coursesLocalStorage);
}

function eventListeners() {

    courses.addEventListener("click", buyCourse);
    car.addEventListener("click", deleteCourse);
    emptyCar.addEventListener("click", emptyShoppingCar);
    document.addEventListener("DOMContentLoaded", readLocalStorage);
}

eventListeners();