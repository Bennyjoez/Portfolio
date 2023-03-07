let hamburgerMenu = document.querySelector(".popup=menu");

hamburgerMenu.addEventListener("click", showMenu);

function showMenu() {
  hamburgerMenu.style.display="block";
  hamburgerMenu.classList.toggle('hamburger-content');
}
