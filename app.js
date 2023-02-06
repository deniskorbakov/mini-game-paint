const board = document.querySelector('#board');
const SQUARE_NUMBERS = 500;
const colors = ['#DDA0DD','#FF00FF','#BA55D3','#8A2BE2','#4B0082'];

for (let i = 0; i < SQUARE_NUMBERS; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square);
}

function setColor(el) {
    const color = getColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
    el.style.backgroundColor = 'white';
    el.style.boxShadow = `0 0 2px black`;
}

function getColor(el) {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index];
}