const form = document.getElementById('contact-form');
const email = document.getElementById('email');

function isvalidEmail() {
  return true;
}
form.addEventListener('submit', isvalidEmail);
