const buttonsEl = document.querySelectorAll('#counter button');
const value = document.querySelector('#value');
const buttonMinusEl = buttonsEl[0];
const buttonPlusEl = buttonsEl[1];
let counter = 0;

buttonMinusEl.addEventListener('click', () => {
  counter -= 1;
  value.textContent = counter;
});

buttonPlusEl.addEventListener('click', () => {
  counter += 1;
  value.textContent = counter;
});
