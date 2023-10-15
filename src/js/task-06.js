const inputEl = document.querySelector('input');
const targetLen = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', blurCheckLen);

function blurCheckLen(event) {
  if (event.currentTarget.value.trim().length === targetLen) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
