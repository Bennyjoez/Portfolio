let hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", showMenu);

function showMenu() {
  document.querySelector("#hamburger-content").style.display = "block";
}