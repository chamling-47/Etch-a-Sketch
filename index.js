let random = false;
let color = 'blue';
let noOfcolumns = 16;

// generate color box and set onclick function
let btnColors = document.querySelectorAll('.color');
for (let i = 0; i < btnColors.length; i++) {
  btnColor = btnColors[i];
  btnColor.style.background = btnColor.classList[1];
  btnColor.onclick = (element) => {
    random = false;
    color = element.target.classList[1];
  };
}

// generate color
function generateColor() {
  if (random) {
    let color = '#';
    let hexValues = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return color;
}

// Generate Grid
const drawingBoard = document.querySelector('.drawing-board');
function generateGrid(noOfcolumns) {
  for (let i = 0; i < noOfcolumns; i++) {
    let column = document.createElement('div');
    column.setAttribute('style', 'flex:1;display:grid');
    column.classList.add('grid-columns');
    for (let i = 0; i < noOfcolumns; i++) {
      let row = document.createElement('div');
      row.classList.add('grid-cell');
      row.onmouseover = () => {
        row.style.background = generateColor();
      };
      column.appendChild(row);
    }
    drawingBoard.appendChild(column);
  }
}

// reset buton
const btnreset = document.querySelector('.btn-reset');
function resetGrid() {
  for (let i = 0; i < noOfcolumns; i++) {
    let element = document.querySelector('.grid-columns');
    element.parentNode.removeChild(element);
  }
}
btnreset.onclick = () => {
  resetGrid();
  generateGrid(noOfcolumns);
};

// toggle random function
const btnRandom = document.querySelector('.btn-random');
btnRandom.onclick = () => {
  random = !random;
  return random;
};

// change grid button
const btnChangeGrid = document.querySelector('.btn-change');
btnChangeGrid.onclick = () => {
  let gridSize = 0;
  do {
    gridSize = Number(prompt('Change the column size(1-99)'));
  } while (!(typeof gridSize === 'number' && gridSize > 0 && gridSize < 100));
  resetGrid();
  noOfcolumns = gridSize;
  generateGrid(noOfcolumns);
};

generateGrid(noOfcolumns);
