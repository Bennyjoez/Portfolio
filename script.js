const hamburgerIcon = document.querySelector("#hamburger-menu");
const hamburgerContentContainer = document.querySelector(".links");
const closeHamburgerBtn = document.querySelector("#close-hamburger > i");

hamburgerIcon.addEventListener("click", showMenu);
closeHamburgerBtn.addEventListener("click", closeMenu);

function showMenu() {
  hamburgerContentContainer.classList.add("hamburger-content");
  
  // get nav-links in hamburger view
  const navLinks = document.querySelectorAll(".hamburger-content li:not(#close-hamburger)");
  navLinks.forEach(navigationClose);
}

function closeMenu() {
  hamburgerContentContainer.classList.remove("hamburger-content");
}

function navigationClose(link) {
  link.addEventListener("click", closeMenu);
}
