// Adding div squares
function buildGrid(rows=16) {
    for (i = 0; i < (rows * rows); i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.addEventListener("mouseover", handleHover);
        container.append(div);
    }
}

function createNewGrid() {
    let numberOfRows = prompt("Сколько строк сделать?");
    if (!numberOfRows)
        return;
    resetGrid(numberOfRows);
}

function resetGrid(numberOfRows=Math.sqrt(document.querySelectorAll(".square").length)) {
    container.innerHTML = "";
    container.style.cssText = `grid-template-columns: repeat(${numberOfRows},1fr);`
    buildGrid(numberOfRows);
}

function handleHover(e) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.setProperty('background-color', randomColor);
}

const container = document.querySelector(".container");

buildGrid();



