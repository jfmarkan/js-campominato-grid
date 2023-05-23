const playButton = document.querySelector('button');
const gridElement = document.getElementById('grid');



playButton.addEventListener('click', function(){
    grid.innerHTML = '';
    console.clear();
    let dificultySelector = document.getElementById('dificulty');
    if (dificultySelector.value == 1){
        for (let i = 1; i<=100 ; i++) {
            const newCell = createElement('div', 'my_cell-one', i);
                newCell.addEventListener('click', function(){
                    newCell.classList.toggle('my_selected');
                    console.log(i)
                });
            gridElement.appendChild(newCell);
        }
    } else if (dificultySelector.value == 2){
        for (let i = 1; i<=81 ; i++) {
            const newCell = createElement('div', 'my_cell-two', i);
                newCell.addEventListener('click', function(){
                    newCell.classList.toggle('my_selected');
                    console.log(i)
                });
            gridElement.appendChild(newCell);
        }
    } else if (dificultySelector.value == 3){
        for (let i = 1; i<=49 ; i++) {
            const newCell = createElement('div', 'my_cell-three', i);
                newCell.addEventListener('click', function(){
                    newCell.classList.toggle('my_selected');
                    console.log(i)
                });
            gridElement.appendChild(newCell);
        }
    }
    
});

/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 */
function createElement(tagName, className, innerText){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    cellElement.innerText = innerText;
    return cellElement;
};

