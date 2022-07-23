const container = document.querySelector(".container");

const changeGridSizeButton = document.querySelector(".change-grid-size");

const changeColors = document.querySelector(".change-colors");

const resetButton = document.querySelector(".reset");



resetButton.addEventListener("click", clearGrid);



let currentColor = false;



function buildInitialGrid(){
 
    for(let i=0;i<64;i++){
        let cell = document.createElement("div");
        cell.className ="new-grid-block";
        container.appendChild(cell);
    }

    container.style['grid-template-columns'] = `repeat(8,1fr)`;
}

function hoverEvent(e){
    if(currentColor == true){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
    }

    else{
    e.target.style.backgroundColor = 'black';
    }   
}

function promptUserInput(e){
    let gridSquares = prompt("Enter how many squares you want in each row/column (1- 50)");

    if (gridSquares === null) {
        return; 
    }

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


function changeColor(){
    if(currentColor == false){
        currentColor = true;
    }
    else{
        currentColor = false;
    }
}

changeColors.addEventListener("click", changeColor
);

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

function clearGrid(){
    let newGrid = document.querySelectorAll(".new-grid-block");
    newGrid.forEach(grid => {
        grid.remove();
    })

    buildInitialGrid();

    newGrid = document.querySelectorAll(".new-grid-block");

    newGrid.forEach(grid => {
        grid.addEventListener('mouseover', hoverEvent)
    });
}





