let hamburgerIcon = document.querySelector("#hamburger-menu");
let hamburgerContentContainer = document.querySelector(".links");

hamburgerIcon.addEventListener("click", showMenu);

function showMenu() {
  hamburgerContentContainer.classList.toggle("hamburger-content");
  hamburgerContentContainer.style.display = "block";
}
