const container = document.querySelector('.container');
const newGame = document.querySelector('.newGame');
let allMinis = [];

addDiv(25, container);
changeColor();

newGame.addEventListener('click', reset);

function addDiv(divNb, divWrapper) {
    divWrapper.style.gridTemplateColumns = `repeat(${divNb}, 1fr)`;
    divWrapper.style.gridTemplateRows = `repeat(${divNb}, 1fr)`;

    while(divWrapper.firstChild) {
        divWrapper.removeChild(divWrapper.firstChild);
    }

    for (let i = 0; i < divNb**2; i++) {
        const oneDiv = document.createElement('div');
        oneDiv.classList.add('miniSquare');
        divWrapper.appendChild(oneDiv);
    }
    allMinis = Array.from(document.querySelectorAll('.miniSquare'));
}

function reset () {
    allMinis.forEach(mini => {
        mini.style.backgroundColor = '#FFF';
    })
    let divBySide = 0;
    while (divBySide < 3 || divBySide > 50) {
        divBySide = +prompt('How many squares by side for the new game ?\n(Give a number between 3 and 50)');
        if (divBySide === 0) {
            break;
        }
    }
    addDiv(divBySide, container);
    changeColor();
}

function changeColor() {
    allMinis.forEach(square => {
        square.addEventListener('mouseover', (e) => e.target.style.backgroundColor = randomColor());   
    });
}

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}