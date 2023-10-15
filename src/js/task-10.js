function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numElems = document.querySelector('input');
const funcElems = document.querySelector('#controls');
const targetDiv = document.querySelector('#boxes');

funcElems.addEventListener('click', createBoxes);

function createBoxes({ target }) {
  const inputValue = funcElems.querySelector('input');
  if (target && target.getAttribute('data-create') !== null) {
    let boxesArray = [];
    for (let i = 0; i < inputValue.value; i++) {
      const sizeBox = 30 + i * 10;
      boxesArray.push(
        `<div style="background-color:${getRandomHexColor()};width:${sizeBox}px;height:${sizeBox}px"></div>`
      );
    }
    targetDiv.insertAdjacentHTML('beforeend', boxesArray.join(''));
  } else if (target && target.getAttribute('data-destroy') !== null) {
    targetDiv.innerHTML = '';
    inputValue.value = '';
  }
}
