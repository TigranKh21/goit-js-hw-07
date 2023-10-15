function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());
const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = `${newColor}`;
  currentColor.textContent = `${newColor}`;
}
