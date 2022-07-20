const container = document.querySelector(".container");

function buildGrid(){
    for(let i=0;i<64;i++){
        let cell = document.createElement("div");
        cell.className ="test1";
        container.appendChild(cell);
    }
}

buildGrid();


