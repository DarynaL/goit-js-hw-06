const changeColorBtn = document.querySelector('.change-color');
const spanEL = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanEL.textContent = color;
}

