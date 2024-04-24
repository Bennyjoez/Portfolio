/* eslint no-new-wrappers: "error" */
const projects = [
  {
    id: 1,
    name: 'To Do List App',
    featured: false,
    description: "Allow me to introduce my To-Do List app, a personal project crafted with dedication and passion. This user-friendly tool simplifies daily task management, offering features like task addition, editing, and removal, alongside the ability to mark tasks as complete.\nFor a touch of whimsy, I've added a delightful rotating reset button that reflects my personal touch. Developed single-handedly using HTML, CSS, and JavaScript, this project represents my commitment to creating a seamless task management experience. Excitingly, I have plans to introduce a new section that will list all your completed tasks in the near future. Stay tuned for updates!",
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
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveLink: 'https://microvese-projects.github.io/ToDoList/',
    sourceLink: 'https://github.com/microvese-projects/ToDoList.git',
  },
  {
    id: 3,
    name: 'Motorcycle Appointment',
    featured: true,
    description: 'This app combines the power of Ruby on Rails 🚀 for the backend and React ⚛️ for the frontend, seamlessly connected through robust API endpoints 🌐. React Redux 🔄 efficiently manages global state, while agile methodologies 🏃 ensure flexibility and responsiveness throughout development. 💪',
    featuredImage: {
      link: 'images/project-images/motorcycle/home.png',
      alt: 'Home page',
    },
    images: [
      {
        src: 'images/project-images/motorcycle/home.png',
        alt: 'Motorcycles Page',
      },
      {
        src: 'images/project-images/motorcycle/responsive1.png',
        alt: 'Motorcycles Page',
      },
      {
        src: 'images/project-images/motorcycle/responsive2.png',
        alt: 'Motorcycles Page',
      },
      {
        src: 'images/project-images/motorcycle/details.png',
        alt: 'Details',
      },
      {
        src: 'images/project-images/motorcycle/hireform.png',
        alt: 'Reserve Form',
      },
      {
        src: 'images/project-images/motorcycle/reservations.png',
        alt: 'Reservations',
      },
      {
        src: 'images/project-images/motorcycle/delete.png',
        alt: 'Delete page',
      },
      {
        src: 'images/project-images/motorcycle/add-motorcycle.png',
        alt: 'Add motorcycle',
      },
      {
        src: 'images/project-images/motorcycle/register.png',
        alt: 'Register page',
      },
      {
        src: 'images/project-images/motorcycle/login.png',
        alt: 'Login page',
      },
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'React', 'CSS3'],
    liveLink: 'https://motorcycle-appointment.netlify.app/',
    sourceLink: 'https://github.com/Bennyjoez/motorcycle-appointment-app-front-end',
  },
  {
    id: 2,
    name: 'Leaderboard',
    featured: false,
    description: "Leaderboard 🏆 - your ultimate game scoring companion! Whether it's pool, scrabble, or chess, this app lets you track scores effortlessly. It consumes a REST API using async/await functions, and the sleek design is powered by JavaScript, HTML, CSS, and webpack. Challenges were conquered, like handling game IDs and preventing data loss on reload. Level up your gaming experience! 🎮🏆🚀",
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
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Webpack', 'API'],
    liveLink: 'https://microvese-projects.github.io/leaderBoard/dist/',
    sourceLink: 'https://github.com/microvese-projects/leaderBoard',
  },
  {
    id: 4,
    name: 'Crypto Metrics',
    featured: false,
    description: 'Crypto Metrics 💰 - a React-Redux gem that tracks cryptocurrency exchange rates against the US Dollar. It also converts dollars to any selected currency. With real-time updates, it simplifies currency conversion. Challenges included optimizing API calls for smoother performance. Discover crypto with ease! 💰🚀📊',
    featuredImage: {
      link: '/images/project-images/crypto-metrics/home.png',
      alt: 'Landing',
    },
    images: [
      {
        src: '/images/project-images/crypto-metrics/home.png',
        alt: 'Landing',
      },
      {
        src: '/images/project-images/crypto-metrics/global.png',
        alt: 'Global currencies',
      },
      {
        src: '/images/project-images/crypto-metrics/local.png',
        alt: 'LOcal currencies',
      },
      {
        src: '/images/project-images/crypto-metrics/search.png',
        alt: 'Search',
      },
      {
        src: '/images/project-images/crypto-metrics/calculator.png',
        alt: 'Calculator',
      },
    ],
    technologies: ['React', 'Redux', 'CSS3', 'RestAPI'],
    liveLink: 'https://currency-metrics.netlify.app/',
    sourceLink: 'https://github.com/microvese-projects/crypto-metrics',
  },
  {
    id: 5,
    name: 'Bookstore',
    featured: false,
    description: 'Introducing Bookstore 📚 – your book management companion! With React, Redux-toolkit, and APIs, you can effortlessly add, edit, delete, and update your book collection.\nAdding a book updates both the API and your global Redux state, ensuring seamless synchronization. Deleting a book is a breeze, thanks to API calls and Redux state management.\nOur biggest challenge? Creating a completion status feature with dynamic progress display. Online guides and CSS magic made it possible.\nBuilt with desktop in mind, Bookstore taught us API delete operations, Redux-toolkit, and advanced CSS. Dive into your reading journey! 📖',
    featuredImage: {
      link: 'images/project-images/Bookstore/home.png',
      alt: 'Landing page',
    },
    images: [
      {
        src: 'images/project-images/Bookstore/add.png',
        alt: 'Add book',
      },
      {
        src: 'images/project-images/Bookstore/added.png',
        alt: 'Added book',
      },
      {
        src: 'images/project-images/Bookstore/remove.png',
        alt: 'Remove book',
      },
      {
        src: 'images/project-images/Bookstore/categories.png',
        alt: 'Book Categories',
      },
      {
        src: 'images/project-images/Bookstore/profile.png',
        alt: 'Contact',
      },
    ],
    technologies: ['React', 'Redux', 'CSS3', 'API'],
    liveLink: 'https://bookstore-re.netlify.app/',
    sourceLink: 'https://github.com/microvese-projects/bookstore-cra',
  },
  {
    id: 7,
    name: 'All You Can Eat',
    featured: false,
    description: "All You Can Eat 🍲 – savor and share culinary wonders! This collaborative web app lets you explore a feast of meals, express likes, and spark conversations. Built with HTML, CSS, JavaScript, and Webpack, it's a flavorful experience. Stay tuned for upcoming features like 'Ingredients' and 'Meal_Presentation.' Join the culinary journey! 🍽️👩‍🍳👨‍🍳",
    featuredImage: {
      link: 'images/project-images/Meals-db/Home.png',
      alt: 'Landing page',
    },
    images: [
      {
        src: 'images/project-images/Meals-db/Home.png',
        alt: 'Landing page',
      },
      {
        src: 'images/project-images/Meals-db/description.png',
        alt: 'Description page',
      },
      {
        src: 'images/project-images/Meals-db/preparations.png',
        alt: 'Preparation procedure',
      },
      {
        src: 'images/project-images/Meals-db/comments.png',
        alt: 'Comments',
      },
    ],
    technologies: ['HTML5', 'JavaScript', 'CSS3', 'Webpack', 'API'],
    liveLink: 'https://microvese-projects.github.io/capstone-meals-DB/dist',
    sourceLink: 'https://github.com/microvese-projects/capstone-meals-DB',
  },
];

const hamburgerIcon = document.querySelector('#hamburger-menu');
const hamburgerContentContainer = document.querySelector('.links');
const closeHamburgerBtn = document.querySelector('#close-hamburger > i');
const modal = document.querySelector('#project-details-modal');
let closeModalBtn;
let prev;
let next;

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
  card.classList.add('hide');
  projectHeading.className = 'project-card-heading';
  projectHeading.textContent = name;
  descriptionP.className = 'project-card-description';
  descriptionP.textContent = `${description.slice(0, 200)}...`;
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

let currentImageIndex = 0; // Initialize currentImageIndex
function navImages(direction) {
  const images = document.querySelectorAll('.popup-images');
  // Hide the current image
  images[currentImageIndex].style.display = 'none';

  // Update the current index based on the direction
  if (direction === 'prev') {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  } else if (direction === 'next') {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  // Show the new current image
  images[currentImageIndex].style.display = 'block';
}

function showProjectDetails(obj) {
  const {
    name, images, description, technologies, liveLink, sourceLink,
  } = obj;
  currentImageIndex = 0;
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
          <figure class='images'>
            ${images.map(({ src, alt }) => `<img src="${src}" alt="${alt}" class="popup-images" />`).join('')}
          </figure>
          <div>
            <span class="arrow left">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span class="arrow right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
        </div>
        <div id="popup-details">
          <div id="popup-description">
            ${description.split('\n').map((each) => ` <p>${each}</p><br />`).join('')}
          </div>

          <ul id="links">
            <li class="links-li">
              <a target="_blank" href=${liveLink}>
                See Live
                <img src="./images/Icon-see live.svg" alt="see live icon">
              </a>
            </li>
            <li class="links-li">
              <a target="_blank" href=${sourceLink}>
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
  prev = document.querySelector('.left');
  next = document.querySelector('.right');
  closeModalBtn.addEventListener('click', closeModal);
  prev.addEventListener('click', () => navImages('prev'));
  next.addEventListener('click', () => navImages('next'));
  navImages('next');
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

/* eslint-disable */
new Typed('#title-typed', {
  strings: ["I'm a Full-stack Software Developer"],
  typeSpeed: 50,
  loop: false,
});
 /* eslint-enable */
