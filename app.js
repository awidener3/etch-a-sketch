const container_div = document.getElementById('container');
const reset_button = document.getElementById('reset-button');
const gridpiece_div = document.getElementsByClassName('grid-piece');

function addGrid(columns, rows) {
    for (let i = 0; i < columns; i++) {
        const div = document.createElement('div');
        // div.classList.add('grid-piece');
        div.classList.add('column-'+i);
        container_div.appendChild(div);
        for (let j = 0; j < rows; j++) {
            const div = document.createElement('div');
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

function main() {
    reset_button.addEventListener('click', () => resetClass())
    addGrid(16, 16);
    drawOnCanvas();
}

main();