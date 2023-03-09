const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const message = document.getElementById('errormessage');

function showErrorMessage() {
  const ERROR_MESSAGE = 'You have to use small letters for an email!';
  email.className = 'invalidinput';
  message.textContent = ERROR_MESSAGE;
}

function showSuccess() {
  email.classList.remove('invalidinput');
  message.textContent = '';
  form.submit();
}

function isvalidEmail(event) {
  event.preventDefault();
  const emailRegex = /[A-Z]/g;
  const tested = email.value;
  if (emailRegex.test(tested)) {
    showErrorMessage();
  } else {
    showSuccess();
  }
}

form.addEventListener('submit', isvalidEmail);
