const playButton = document.querySelector('button');




playButton.addEventListener('click', function(){
    grid.innerHTML = '';
    console.clear();
    startNewGame();
});
    
    
function startNewGame(){
    const gridElement = document.getElementById('grid');
    const dificultySelector = document.getElementById('dificulty').value;

    let cellsNumber = 0;
    let cellsClass = "";

    if (dificultySelector == 1){
        cellsNumber = 100;
        cellsClass = "my_cell-one"
    } else if (dificultySelector == 2) {
        cellsNumber = 81;
        cellsClass = "my_cell-two"
    } else if (dificultySelector == 3){
        cellsNumber = 49;
        cellsClass = "my_cell-three"
    }

    for (let i = 1; i<=cellsNumber ; i++) {
        const newCell = createElement('div', cellsClass, i);
            newCell.addEventListener('click', function(){
                newCell.classList.toggle('my_selected');
                console.log(i)
            });
        gridElement.appendChild(newCell);
    }    
};

/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string.
 * @param {string} className The classes of the element to be created as a string.
 * @param {string} innerText Content inside the div cell.
 */
function createElement(tagName, className, innerText){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    cellElement.innerText = innerText;
    return cellElement;
};

