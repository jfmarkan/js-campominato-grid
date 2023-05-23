const playButton = document.querySelector('button');
const gridElement = document.getElementById('grid');
const dificultySelector = document.getElementById('dificulty').value;

playButton.addEventListener('click', function(){
    for (let i = 1; i <= 100; i++) {
        const newCell = createElement('div', 'my_cell-one', i);
            newCell.addEventListener('click', function(){
                newCell.classList.toggle('my_selected');
                console.log(i)
            });
        gridElement.appendChild(newCell)
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
}