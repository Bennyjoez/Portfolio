const projects = [
  {
    name: "Multi-Post Stories",
    featured: true,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/multi-post-stories.png",
      alt: "Background image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  },
  {
    name: "Professional Art Printing Data",
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: "images/background2.png",
      alt: "Background Image"
    },
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    liveLink: "#",
    sourceLink: "#"
  }
]

const hamburgerIcon = document.querySelector('#hamburger-menu');
const hamburgerContentContainer = document.querySelector('.links');
const closeHamburgerBtn = document.querySelector('#close-hamburger > i');

function closeMenu() {
  hamburgerContentContainer.classList.remove('hamburger-content');
}

function navigationClose(link) {
  link.addEventListener('click', closeMenu);
}

function showMenu() {
  hamburgerContentContainer.classList.add('hamburger-content');
  // get nav-links in hamburger view
  const navLinks = document.querySelectorAll('.hamburger-content li:not(#close-hamburger)');
  navLinks.forEach(navigationClose);
}

hamburgerIcon.addEventListener('click', showMenu);
closeHamburgerBtn.addEventListener('click', closeMenu);

const inactiveCardsContainers = document.querySelector(".inactive-cards-container")

function displayCards({name, description, featuredImage, technologies}) {
  let card = document.createElement("div");
  card.className = "project-card inactive";
  let image = document.createElement("img");
  image.setAttribute("src", featuredImage.link);
  image.setAttribute("alt", featuredImage.alt);
  card.appendChild(image);
  let projectHeading = document.createElement("h3");
  projectHeading.className = "project-card-heading";
  projectHeading.textContent = name;
  card.appendChild(projectHeading);
  let descriptionP = document.createElement("p");
  descriptionP.className = "project-card-description";
  descriptionP.textContent = description.slice(0, 200);
  card.appendChild(descriptionP);
  let skills = document.createElement("ul");
  skills.className = "skills";
  skills.innerHTML = technologies.map(tech => `<li>${tech.split(" ")[0]}</li>`).join("");
  card.appendChild(skills);
  let seeProjectBtn = document.createElement("button");
  seeProjectBtn.className = "see-project";
  seeProjectBtn.textContent = "See Project"
  card.appendChild(seeProjectBtn);

  console.log(card);

  inactiveCardsContainers.appendChild(card)
}

// displayCards(projects[0])
projects.forEach(displayCards)