const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    featured: true,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: 'images/multi-post-stories.png',
      alt: 'Background image',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 2,
    name: 'Professional Art Printing Data',
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: './images/popupImage.svg',
      alt: 'Background Image',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    name: 'Professional Art Printing Data',
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: './images/popupImage.svg',
      alt: 'Background Image',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    name: 'Professional Art Printing Data',
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: './images/popupImage.svg',
      alt: 'Background Image',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 5,
    name: 'Professional Art Printing Data',
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: './images/popupImage.svg',
      alt: 'Background Image',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 6,
    name: 'Professional Art Printing Data',
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: './images/popupImage.svg',
      alt: 'Background Image',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 7,
    name: 'Professional Art Printing Data',
    featured: false,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: {
      link: './images/popupImage.svg',
      alt: 'Background Image',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const hamburgerIcon = document.querySelector('#hamburger-menu');
const hamburgerContentContainer = document.querySelector('.links');
const closeHamburgerBtn = document.querySelector('#close-hamburger > i');
const modal = document.querySelector('#project-details-modal');
let closeModalBtn;

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

const activeCardContainer = document.querySelector('.projects-container');
const inactiveCardsContainers = document.querySelector('.inactive-cards-container');

function displayCards({
  id, name, featured, description, featuredImage, technologies,
}) {
  const card = document.createElement('div');
  const projectHeading = document.createElement('h3');
  const descriptionP = document.createElement('p');
  const skills = document.createElement('ul');
  const anchor = document.createElement('a');
  const seeProjectBtn = document.createElement('button');
  anchor.setAttribute('href', '#popup-details-card');
  anchor.className = 'see-project-anchor';
  card.className = 'project-card';
  projectHeading.className = 'project-card-heading';
  projectHeading.textContent = name;
  descriptionP.className = 'project-card-description';
  descriptionP.textContent = description.slice(0, 200);
  skills.className = 'skills';
  skills.innerHTML = technologies.map((tech) => `<li>${tech.split(' ')[0]}</li>`).join('');
  seeProjectBtn.className = 'see-project';
  seeProjectBtn.textContent = 'See Project';
  seeProjectBtn.setAttribute('id', id);
  if (featured === false) {
    card.classList.add('inactive');
    card.appendChild(projectHeading);
    card.appendChild(descriptionP);
    card.appendChild(skills);
    anchor.appendChild(seeProjectBtn);
    card.appendChild(anchor);
    inactiveCardsContainers.appendChild(card);
  } else {
    const image = document.createElement('img');
    const projectInfo = document.createElement('div');
    card.classList.add('featured');
    image.setAttribute('src', featuredImage.link);
    image.setAttribute('alt', featuredImage.alt);
    projectInfo.className = 'information';
    anchor.appendChild(seeProjectBtn);
    projectInfo.appendChild(projectHeading);
    projectInfo.appendChild(descriptionP);
    projectInfo.appendChild(skills);
    projectInfo.appendChild(anchor);
    card.appendChild(image);
    card.appendChild(projectInfo);
    activeCardContainer.appendChild(card);
  }
}

projects.forEach(displayCards);
const seeProjectBtns = document.querySelectorAll('.see-project');

function closeModal() {
  modal.style.display = 'none';
}

function showProjectDetails({
  name, featuredImage, description, technologies, liveLink, sourceLink,
}) {
  modal.style.display = 'block';
  modal.innerHTML = `
    <div id="popup-details-card">
      <div class="popup-heading">
        <div id="close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h2 id="popup-heading">${name}</h2>
        <ul class="popup-details-skills">
          ${technologies.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
      </div>
      <div id="popup-flex-container">
        <img src=${featuredImage.link} alt=${featuredImage.alt} id="featuredImage">
        <div id="popup-details">
          <p id="popup-description">
            ${description}
          </p>
          <ul id="links">
            <li class="links-li">
              <a href=${liveLink}>
                See Live
                <img src="./images/Icon-see live.svg" alt="see live icon">
              </a>
            </li>
            <li class="links-li">
              <a href=${sourceLink}>
                See Source
                <img src="./images/githubPopup.svg" alt="github">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `;
  closeModalBtn = document.querySelector('#close');
  closeModalBtn.addEventListener('click', closeModal);
}

function callDetails(targetId) {
  projects.forEach((project) => {
    if (project.id === +targetId) {
      showProjectDetails(project);
    }
  });
}

function listen(btn) {
  btn.addEventListener('click', (e) => {
    const targetId = e.target.id;
    callDetails(targetId);
  });
}

seeProjectBtns.forEach(listen);