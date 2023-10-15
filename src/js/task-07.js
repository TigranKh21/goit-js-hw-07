const toggleEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(text);
toggleEl.addEventListener('input', setFontSize);

function setFontSize(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
console.log(toggleEl.value);
