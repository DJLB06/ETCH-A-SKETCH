const container = document.querySelector(".container");

const changeGridSizeButton = document.querySelector(".change-grid-size");

function buildInitialGrid(){
    for(let i=0;i<64;i++){
        let cell = document.createElement("div");
        cell.className ="new-grid-block";
        container.appendChild(cell);
    }

    container.style['grid-template-columns'] = `repeat(8,1fr)`;
}

function hoverEvent(e){
    e.target.style.backgroundColor = 'black';
}

function promptUserInput(e){
    let gridSquares = prompt("Enter how many squares you want in each row/column (1- 50)");

    if(gridSquares > 0 && gridSquares<=50){
    buildUserDefinedGrid(gridSquares);
    }
    else{
        promptUserInput(e);
    }
}

buildInitialGrid();

let newGrid = document.querySelectorAll(".new-grid-block");

newGrid.forEach(grid => {
    grid.addEventListener('mouseover', hoverEvent)
});

changeGridSizeButton.addEventListener("click", promptUserInput);

function buildUserDefinedGrid(gridSquares){
    
    let newGrid = document.querySelectorAll(".new-grid-block");
      
    newGrid.forEach(grid => {
        grid.remove();
    })

    let totalGridSquares = gridSquares * gridSquares;

    for(let i=0;i<totalGridSquares;i++){
        let cell = document.createElement("div");
        cell.className ="new-grid-block";
        container.appendChild(cell);
    }

    container.style['grid-template-columns'] = `repeat(${gridSquares},1fr)`;

    newGrid = document.querySelectorAll(".new-grid-block");

    newGrid.forEach(grid => {
        grid.addEventListener('mouseover', hoverEvent)
    });

}





