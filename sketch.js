let colorScheme = "default";

const body = document.querySelector('body');
const containerDiv = document.createElement('div');
containerDiv.setAttribute("id", "container")


body.appendChild(containerDiv);

function createGrid(size) {
    containerDiv.setAttribute("style", `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr);`)
    for (let i = 0; i < size * size; i++) {
       let grid = document.createElement('div');
       grid.classList.add("grids");
       grid.addEventListener("mouseover",  function(e)  {
           changeColor(e.target);
       });  
       containerDiv.appendChild(grid);
    }
    
}

function changeColor(targetCell){
    switch(colorScheme){
        case "default": 
        targetCell.setAttribute("style", "background-color: rgb(0, 0, 0, 1");
        break;
        
        case "random":
            targetCell.setAttribute("style", `background-color: ${getRandomColor()}`);
    }
}

function getRandomInt(maxNum){
    return Math.floor(Math.random() * (maxNum + 1));
}

function getRandomColor(){
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);

    return `rgba(${r}, ${g}, ${b}, 1)`;
}

function resetGrid(){
    while (containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);
    }
    size = prompt('Enter a size');
    createGrid(size);
    colorScheme = "default";
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", function() {
    resetGrid();
})

const randomButton = document.getElementById('random');
randomButton.addEventListener("click", (e) =>{
    colorScheme = "random";
});

const defaultButton = document.querySelector('#default');
defaultButton.addEventListener("click", (e) =>{ 
    colorScheme = "default"
});

createGrid(16);