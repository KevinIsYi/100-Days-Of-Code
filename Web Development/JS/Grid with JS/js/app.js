let size = 10, container, row, box;

container = document.createElement("header");
container.setAttribute("class", "container");
document.querySelector("body").appendChild(container);

function createGrid() {

    for (let i = 0 ; i < size ; ++i) {

        setTimeout(() => {
            row = document.createElement("div");
            row.setAttribute("class", "row");
            container.appendChild(row);

            for (let j = 0 ; j < size ; j++) {
                setTimeout(() => {
                    row = document.querySelectorAll(".row");
                    box = document.createElement("div");
                    box.setAttribute("class", "box");
                    row[i].appendChild(box);
                }, 500 * j);
            }
        }, 500 * i);
    }
}
createGrid();
