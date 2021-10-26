let x = 16;
const container_div = document.getElementById('container');
const reset_button = document.getElementById('reset-button');
const gridpiece_div = document.getElementsByClassName('grid-piece');

function createGrid(x) {
    for (let i = 0; i < x; i++) {
        const div = document.createElement('div');
        div.classList.add('column-'+i);
        container_div.appendChild(div);
        for (let j = 0; j < x; j++) {
            const div = document.createElement('div');
            div.style.width = `${(750/x)}px`;
            div.style.height = `${(750/x)}px`;
            div.classList.add('grid-piece');
            div.classList.add('column-'+i);
            div.classList.add('row-'+j);
            document.querySelector(`.column-${i}`).appendChild(div);
        }
    }
}

function drawOnCanvas() {
    for(let i = 0; i < gridpiece_div.length; i++) {
        gridpiece_div[i].addEventListener('mouseover', function() {
            this.classList.add('color');
        });
    }
}

function resetClass() {
    for(let i = 0; i < gridpiece_div.length; i++) {
        gridpiece_div[i].classList.remove('color');
    }
}

function resetGrid() {
    const pieces = document.getElementsByClassName('grid-piece');
    while(pieces.length > 0) {
        pieces[0].parentNode.removeChild(pieces[0]);
    }
}

function startPage () {
    createGrid(x);
    drawOnCanvas();
}

startPage();
reset_button.addEventListener('click', function() {
    // resetClass()
    resetGrid();
    let x = prompt('how big would you like the canvas to be on each side?');
    if (x >= 100) {
        alert('number must be less than 100!')
        return;
    } else {
        createGrid(x);
        drawOnCanvas();
    }
})