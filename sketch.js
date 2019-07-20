const body = document.querySelector('body');
const containerDiv = document.createElement('div');
containerDiv.setAttribute("id", "container")
containerDiv.innerHTML = '<p>Test to make sure this will get added.</p>'

body.appendChild(containerDiv);

function createGrid(numRows, numColumns) {
    for (let i = 0; i < numRows * numColumns; i++) {
       let grid = document.createElement('div');
       grid.textContent = 'testing';
       grid.setAttribute("class", "grids");
       containerDiv.appendChild(grid);
       console.log(i)
    }
    
}

createGrid(16, 16);