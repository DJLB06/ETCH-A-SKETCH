const container = document.querySelector(".container");


function buildInitialGrid(){
    for(let i=0;i<64;i++){
        let cell = document.createElement("div");
        cell.className ="new-grid-block";
        container.appendChild(cell);
    }
}

function hoverEvent(e){
    e.target.style.backgroundColor = 'black';
}

buildInitialGrid();

let newGrid = document.querySelectorAll(".new-grid-block");

newGrid.forEach(grid => {
    grid.addEventListener('mouseover', hoverEvent)
});

function buildUserDefinedGrid(rows, columns){
    let totalGridSquares = rows + columns;

    for(let i=0;i<totalGridSquares;i++){
        let cell = document.createElement("div");
        cell.className ="new-grid-block";
        container.appendChild(cell);
    }

    container.style.columnCount = columns;
    container.style.rowCount = rows;
}



