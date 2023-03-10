const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const message = document.getElementById('errormessage');
const named = document.querySelector('#name');
const description = document.querySelector('#message');
const messageObj = {
  username: `${named.value}`,
  email: `${email.value}`,
  message: `${description.value}`,
};

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

function updateMessage(input, value) {
  messageObj[input] = value;
  const objString = JSON.stringify(messageObj);
  localStorage['messageObj'] = objString;
}

function populateStorage(messageObj) {
  const objString = JSON.stringify(messageObj);
  localStorage.setItem('messageObj', objString);
}

function validateStorage(messageObj) {
  if (!localStorage.getItem(messageObj)) {
    return false;
  } else {
    return true;
  }
}

function respond(e) {
  let value = e.target.value;
  let input = e.target.name;
  if (validateStorage('messageObj')) {
    updateMessage(input, value);
  } else {
    messageObj[input] = value;
    populateStorage(messageObj);
  }
}

named.addEventListener('change', respond);
email.addEventListener('change', respond);
description.addEventListener('change', respond);
