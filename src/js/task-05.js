const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputToOutput);

function inputToOutput(event) {
  event.currentTarget.value
    ? (outputEl.textContent = event.currentTarget.value.trim())
    : (outputEl.textContent = 'Anonymous');
}
