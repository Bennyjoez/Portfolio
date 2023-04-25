const projects = [
  {
    id: 1,
    name: 'To Do List App',
    featured: true,
    description: "The To-Do List app is a project that was created to provide it's users with a tool to list some tasks that they would like to accomplish within a day. The key features of this app include: an input, a list area, clear all button and reset button. The input allows the user to type a description for a task. The list shows all added tasks with the individual checkboxes, edit areas and trash icons. A user can mark a task as complete, edit the task and delete an individual task. The clear all completed button allows the user to remove all tasks that have been marked as complete. The reset button allows the user to reset the entire list to an empty list. I used html, css and JavaScript to implement this project. In the course of implementing the exercise, I faced a few challenges such as making the rest button to rotate on click. I found a solution on the w3 articles on animations. I would like to add a section that lists all previously completed tasks in future",
    featuredImage: {
      link: 'images/project-images/todolist/todolist1.png',
      alt: 'Todo List front page',
    },
    images: [
      {
        src: 'images/project-images/todolist/todolist1.png',
        alt: 'Input text',
      },
      {
        src: 'images/project-images/todolist/todolist2.png',
        alt: 'Add item',
      },
      {
        src: 'images/project-images/todolist/todolist3.png',
        alt: 'Mark task as complete',
      },
      {
        src: 'images/project-images/todolist/todolist4.png',
        alt: 'Edit and delete task',
      },
    ],
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://microvese-projects.github.io/ToDoList/',
    sourceLink: 'https://github.com/microvese-projects/ToDoList.git',
  },
  {
    id: 2,
    name: 'Leaderboard',
    featured: false,
    description: "Leaderboard is an app that was created with a game in mind. It represents a game scoring board where a user can feed data on the progress of a game. This includes scores of a particular game per player. The usability is endless as the users can create a score-board for a game of choice and keep the record for as long as they would wish. The games can include: pool-table tournaments, scrabble, monopoly, chess, etc. This is an app created by consuming a REST API. To consume the API, I managed to use async await functions. The app uses different tools, technologies and languages. I used JavaScript to manipulate the DOM, HTML to write the markup, Normal CSS to style the page, Coloors website to get a good blend of colors and webpack to compile the source files. In implementing this build, I faced a couple of challenges; the main one however was that I had a problem setting the correct ID of the established game. This was a problem since with each reload, the browser was calling fetch again and setting a new game with a new ID. This meant a loss of the data already fed for the game before the reload. To solve this, I decided to save a reference of the ID on the browser's localStorage. On reload/load, the browser would check for a stored variable(ID), if it's present, the browser will not call fetch again. However, in the case it's not present, the browser will call fetch, get a new ID, and set a reference to it in the localstorage. This was a good app to build and I see myself using it to play some games with friends.",
    featuredImage: {
      link: 'images/project-images/learderboard/leaderboard1.png',
      alt: 'Leaderboard',
    },
    images: [
      {
        src: 'images/project-images/learderboard/leaderboard1.png',
        alt: 'Landing page',
      },
      {
        src: 'images/project-images/learderboard/leaderboard2.png',
        alt: 'Adding score',
      },
      {
        src: 'images/project-images/learderboard/leaderboard3.png',
        alt: 'Posted score',
      },
      {
        src: 'images/project-images/learderboard/leaderboard4.png',
        alt: 'Success message',
      },
      {
        src: 'images/project-images/learderboard/leaderboard5.png',
        alt: 'Refresh button',
      },
    ],
    technologies: ['html & css', 'Javascript', 'webpack', 'API'],
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
    images: [
      {
        src: 'images/popupImage.svg',
        alt: 'Input text',
      },
    ],
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
    images: [
      {
        src: 'images/popupImage.svg',
        alt: 'Input text',
      },
    ],
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
    images: [
      {
        src: 'images/popupImage.svg',
        alt: 'Input text',
      },
    ],
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
    images: [
      {
        src: 'images/popupImage.svg',
        alt: 'Input text',
      },
    ],
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
    images: [
      {
        src: 'images/popupImage.svg',
        alt: 'Input text',
      },
    ],
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

function displayCards(obj) {
  const {
    id, name, featured, description, featuredImage, technologies,
  } = obj;
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
  skills.innerHTML = technologies.slice(0, 3).map((tech) => `<li>${tech.split(' ')[0]}</li>`).join('');
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
    card.style.backgroundImage = `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${featuredImage.link})`;
    inactiveCardsContainers.appendChild(card);
  } else {
    const div = document.createElement('div');
    div.id = 'featured-background';
    const image = document.createElement('img');
    const projectInfo = document.createElement('div');
    card.classList.add('featured');
    image.setAttribute('src', featuredImage.link);
    image.setAttribute('alt', featuredImage.alt);
    div.appendChild(image);
    projectInfo.className = 'information';
    anchor.appendChild(seeProjectBtn);
    projectInfo.appendChild(projectHeading);
    projectInfo.appendChild(descriptionP);
    projectInfo.appendChild(skills);
    projectInfo.appendChild(anchor);
    card.appendChild(div);
    card.appendChild(projectInfo);
    activeCardContainer.appendChild(card);
  }
}

projects.forEach(displayCards);
const seeProjectBtns = document.querySelectorAll('.see-project');

function closeModal() {
  modal.style.display = 'none';
}

function showProjectDetails(obj) {
  const {
    name, images, description, technologies, liveLink, sourceLink,
  } = obj;
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
        <div id="images-container">
          ${images.map(({ src, alt }) => `<img src=${src} alt=${alt} class="popup-images"></img>`)}
        </div>
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