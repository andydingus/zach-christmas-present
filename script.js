const aboveBlocks = document.getElementsByClassName('above');
const belowBlocks = document.getElementsByClassName('below');

// Constants for the gridBlocks based on their position
// Row 1
const row1Col1Below = document.querySelector('.row1.col1.below');
const row1Col2Below = document.querySelector('.row1.col2.below');
const row1Col3Below = document.querySelector('.row1.col3.below');
// Row 2
const row2Col1Below = document.querySelector('.row2.col1.below');
const row2Col2Below = document.querySelector('.row2.col2.below');
const row2Col3Below = document.querySelector('.row2.col3.below');
// Row 3
const row3Col1Below = document.querySelector('.row3.col1.below');
const row3Col2Below = document.querySelector('.row3.col2.below');
const row3Col3Below = document.querySelector('.row3.col3.below');

const grid = document.querySelector('.grid');

let blocksOpened = 0;

function removeAboveBlock() {
    this.style.visibility = 'hidden';
    this.style.cursor = 'initial';

    // Check which above block was clicked and change the below block's width and height
    if (this.classList.contains('row1')) {
        if (this.classList.contains('col1')) {
            row1Col1Below.style.width = '215px';
            row1Col1Below.style.height = '215px';
        } else if (this.classList.contains('col2')) {
            row1Col2Below.style.width = '215px';
            row1Col2Below.style.height = '215px';
        } else if (this.classList.contains('col3')) {
            row1Col3Below.style.width = '215px';
            row1Col3Below.style.height = '215px';
        }
    } else if (this.classList.contains('row2')) {
        if (this.classList.contains('col1')) {
            row2Col1Below.style.width = '215px';
            row2Col1Below.style.height = '215px';
        } else if (this.classList.contains('col2')) {
            row2Col2Below.style.width = '215px';
            row2Col2Below.style.height = '215px';
        } else if (this.classList.contains('col3')) {
            row2Col3Below.style.width = '215px';
            row2Col3Below.style.height = '215px';
        }
    } else if (this.classList.contains('row3')) {
        if (this.classList.contains('col1')) {
            row3Col1Below.style.width = '215px';
            row3Col1Below.style.height = '215px';
        } else if (this.classList.contains('col2')) {
            row3Col2Below.style.width = '215px';
            row3Col2Below.style.height = '215px';
        } else if (this.classList.contains('col3')) {
            row3Col3Below.style.width = '215px';
            row3Col3Below.style.height = '215px';
        }
    }

    // Remove text content
    for (let i = 0; i < this.children.length; i++) {
        this.children[i].textContent = '';
    }

    // Remove grid gaps
    blocksOpened += 1;
    console.log(blocksOpened);
    removeGridGaps();
}



function removeGridGaps() {
    // Eventually, this should only happen once all blocks are "revealed"
    if (blocksOpened ===  9) {
        grid.style.gridGap = '0';
    }
}

function riseFunc() {
    this.style.zIndex = "1";
}

function setEventListeners() {
    blocksEventListener();
}

function blocksEventListener() {
    for (let i = 0; i < aboveBlocks.length; i++) {
        aboveBlocks[i].addEventListener('mouseup', removeAboveBlock);
    }
}

setEventListeners();
