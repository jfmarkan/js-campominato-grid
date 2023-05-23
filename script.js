const playButton = document.querySelector('button');
const gridElement = document.getElementById('grid');


playButton.addEventListener('click', function(){
    for (let index = 1; index <= 100; index++) {
        const newCell = createElement('div', 'my_cell-one');
        newCell.innerText = index;
            newCell.addEventListener('click', function(){
            newCell.classList.toggle('my_selected');
        });
        gridElement.appendChild(createElement('div', 'my_cell-one'))
    }
}
);












/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 */
function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}