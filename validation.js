const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const message = document.getElementById('errormessage');

function isvalidEmail(event) {
  event.preventDefault();
  return false;
}

function showErrorMessage() {
  email.classList.toggle('invalidinput');
  message.classList.toggle('errormessage');
  message.textContent = 'You should have to use ';
}
form.addEventListener('submit', isvalidEmail);
