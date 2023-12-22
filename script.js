const aboveBlocks = document.getElementsByClassName('above');
const belowBlocks = document.getElementsByClassName('below');
const grid = document.querySelector('.grid');

function removeAboveBlock() {
    this.style.backgroundImage = 'none';
    this.style.cursor = 'initial';

    // Remove text content
    for (let i = 0; i < this.children.length; i++) {
        this.children[i].textContent = '';
    }

    // Remove grid gaps
    removeGridGaps();
}

function removeGridGaps() {
    grid.style.rowGap = '0';
    grid.style.columnGap = '0';
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
