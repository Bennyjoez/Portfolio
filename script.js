let hamburgerIcon = document.querySelector("#hamburger-menu");
let hamburgerContentContainer = document.querySelector(".links");
const closeHamburgerBtn = document.querySelector("#close-hamburger");

hamburgerIcon.addEventListener("click", showMenu);
closeHamburgerBtn.addEventListener("click", closeMenu)

function showMenu() {
  hamburgerContentContainer.classList.toggle("hamburger-content");
  hamburgerContentContainer.style.display = "block";
}

function closeMenu() {
  hamburgerContentContainer.classList.toggle("hamburger-content");
  hamburgerContentContainer.style.display = "none";
}
