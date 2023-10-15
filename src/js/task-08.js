const form = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-form button');

form.addEventListener('submit', onFormSetData);

let usersData = {};

function onFormSetData(event) {
  event.preventDefault();
  const formData = event.currentTarget.elements;
  if (!formData.email.value || !formData.password.value) {
    alert('Fill all nesassory fields');
  } else {
    usersData.email = formData.email.value;
    usersData.password = formData.password.value;
    console.log(usersData);
    form.reset();
  }
}
