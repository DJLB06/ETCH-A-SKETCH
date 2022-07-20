const container = document.querySelector(".container");


function buildGrid(){
    for(let i=0;i<256;i++){
        let cell = document.createElement("div");
        cell.innerText = "test";
        cell.className ="test1";
        container.appendChild(cell);
    }
}

buildGrid();


