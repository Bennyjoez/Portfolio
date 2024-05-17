let cards;
let navbar;

const cardsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-50px',
};

const navbarOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '600px',
};

function animateCard(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}

function toggleNavBackground(entries) {

  console.log("called", entries, navbar)
  if (entries[0].isIntersecting === true) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

const observeCards = new IntersectionObserver(animateCard, cardsOptions);
const toggleNavbar = new IntersectionObserver(toggleNavBackground, navbarOptions);

window.addEventListener("load", () => {
  cards = document.querySelectorAll('.project-card');
  navbar = document.querySelector('.navbar');

  cards.forEach((card) => {
    observeCards.observe(card);
  });

  toggleNavbar.observe(document.querySelector('#projects'));
}, false);
