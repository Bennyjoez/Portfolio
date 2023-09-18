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
    liveLink: 'https://microvese-projects.github.io/leaderBoard/dist/',
    sourceLink: 'https://github.com/microvese-projects/leaderBoard',
  },
  {
    id: 3,
    name: 'Vet Clinic',
    featured: false,
    description: 'Vet Clinic is a veterinary clinic database built with PostgreSQL. The app has the ability to save data on the animals, the owners, the vets, the visits, the species, and specializations. All data is stored on separate tables and relationships between the tables established. Each table in the database is responsible for various information. The animals table stores data on the animal like the animal\'s date of birth, the name, the owner\'s id, and the species id. The owners table stores information on owners: name and age. The vets table stores information on the vets: name, age and date of graduation. The visits table stores data on the animal id,vet id and visit date. The species table stores data on the different species of the animals; we only have "Pokemons" and "Digimons". The specialization table stores data on the species id, and the vet id. It also acts as a joining table between the species and vets. While building the project, I faced a number of challenges. It was my first time using PostgreSQL and the syntax was new to me but I learn quick. Another challenge was working as a group on a database that cannot be shared remotely to a team. To solve this challenge, we had to ensure that we build the project while documenting every operation so the other members could follow on. I learned how to document databases effectively in the process.',
    featuredImage: {
      link: 'images/project-images/Vet-clinic/ER.png',
      alt: 'Entity Relationship Diagram',
    },
    images: [
      {
        src: 'images/project-images/Vet-clinic/ER.png',
        alt: 'ERD',
      },
      {
        src: 'images/project-images/Vet-clinic/animals.png',
        alt: 'Animals Table',
      },
      {
        src: 'images/project-images/Vet-clinic/query1.png',
        alt: 'Queries',
      },
      {
        src: 'images/project-images/Vet-clinic/query2.png',
        alt: 'Queries',
      },
      {
        src: 'images/project-images/Vet-clinic/query3.png',
        alt: 'Queries',
      },
    ],
    technologies: ['PostgreSQL', 'Git', 'Github', 'CL'],
    liveLink: 'https://microvese-projects.github.io/vet-clinic/',
    sourceLink: 'https://github.com/microvese-projects/vet-clinic',
  },
  {
    id: 4,
    name: 'Crypto Metrics',
    featured: false,
    description: 'Crypto Metrics is an app created in React and Redux. The app displays the data about the various exchange rates for various cryptocurrencies of the world and the US Dollar. It also allows the user to convert any amount of dollars to the selected currency. A user can come to the app with a goal to convert some value in dollars to their local currency. The website displays two cards: one for local currencies and one for global currencies. Local are the currencies for US states and global is for general world currencies. Rates are updated each time the app reloads. To convert currencies, users can search for their currency using its name or the abbreviations of their currency. For example, I can search for the kenyan shilling or KES in the global markets. Once you click on the currency of choice, you are taken to a calculator that shows you the conversion rate to convert a value. Your task will be to insert the value you want converted in dollars and the app does the rest. This calculator utilizes memo hook in react to ensure the conversion is realtime. The main challenge I faced with this app was calling the API that serves the needed data. I would call the api each time the view changed, dispatching actions to the redux store and this meant my app was always loading. To solve this, I did some research and consulted a few developers and they helped me determine the bug. I had to refine my asyncThunk in redux toolkit to fetch the data properly and limit accidental reload. I learned asyncThunk effectively in the process.',
    featuredImage: {
      link: '/images/project-images/crypto-metrics/home.png',
      alt: 'Landing',
    },
    images: [
      {
        link: '/images/project-images/crypto-metrics/home.png',
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
    description: 'Bookstore is an app that allows the user to manage the progress/status of different books. The app allows users to add, delete, edit, and update books. I used React, Redux-toolkit and APIs in this project. When a user fast loads the page, they see the homepage which is shows a list of books managed in the app. A user can add a book using the form at the bottom and post it to an API. The app does two things at this point, it saves this data to an API and also adds the book to the global state maintained through the redux. Updating the redux store updates the app list and displays the added book. A user can then decide to delete a book from history and this initiates two operations. It sends an API call to delete the book and also updates the global redux state to remove the book from the list of maintained books. The greatest challenge that I faced with this app was implementing the completed status feature per book entry. This was a CSS implementation with a little javascript. I would have just added an image to suffice but I wanted it to be able to display the progress on a percentage basis. I solved this challenge by referencing some articles online that gave a step by step guide on how to solve it and effected it in the app. The app was built with the desktop version in view. By completing this project, I learned how to send delete operations to APIs, working with Redux-toolkit and effecting advanced CSS.',
    featuredImage: {
      link: 'images/project-images/Boostore/home.png',
      alt: 'Landing page',
    },
    images: [
      {
        src: 'images/project-images/Boostore/add.png',
        alt: 'Add book',
      },
      {
        src: 'images/project-images/Boostore/added.png',
        alt: 'Added book',
      },
      {
        src: 'images/project-images/Boostore/remove.png',
        alt: 'Remove book',
      },
    ],
    technologies: ['React', 'Redux', 'CSS3', 'API'],
    liveLink: 'https://bookstore-re.netlify.app/',
    sourceLink: 'https://github.com/microvese-projects/bookstore-cra',
  },
  {
    id: 6,
    name: 'OOP School Library',
    featured: false,
    description: 'OOP School Library is a backend project that is object oriented. The app was built in Ruby. The project is terminal based and the only way to run it is to interact with the terminal (Instructions on the live link). The app emulates the backend operations of a School Library with operations such as registering teachers, students, books and creating rentals. All operations require certain data to be fed by the users input on the terminal. The information added as input on the terminal is retrieved, saved in variables and used to create object representing the teachers, students, books or rentals in the library. If a user mistakenly inputs some operations not listed on the options list, the operation is cancelled, the user is notified and the app loads the options again for another attempt. The user has options to list books, list people, add people, add books, create rentals, list rentals specific to an ID and also exit. The exit operation triggers a save operation which ensures the books, people and rentals created by the user are saved in files. If the files do not exist, the app dynamically creates them and saves the files. On load of the app, the app checks for the files, if they are present, the data is loaded from this files and used to populate the specific objects that the user can then use to maintain the library. The main challenge from this app was making the user interface to display the requests that the users need to respond to. It was time consuming at first as on each reload, the data was lost. To solve the problem, I implemented a file saving system that saves the data on exit. This taught me how to create, and read from files in Ruby.',
    featuredImage: {
      link: 'images/project-images/school-lib/landing.png',
      alt: 'Landing page',
    },
    images: [
      {
        link: 'images/project-images/school-lib/landing.png',
        alt: 'Landing page',
      },
      {
        src: 'images/project-images/school-lib/list.png',
        alt: 'List',
      },
      {
        src: 'images/project-images/school-lib/add-person.png',
        alt: 'Add person',
      },
      {
        src: 'images/project-images/school-lib/add-book.png',
        alt: 'Add book',
      },
      {
        src: 'images/project-images/school-lib/add-rental.png',
        alt: 'Create rental',
      },
      {
        src: 'images/project-images/school-lib/show-rentals.png',
        alt: 'Show rentals of an ID',
      },
    ],
    technologies: ['Ruby', 'CLI', 'Documentation'],
    liveLink: 'https://microvese-projects.github.io/OOP_school_library/',
    sourceLink: 'https://github.com/microvese-projects/OOP_school_library',
  },
  {
    id: 7,
    name: 'Meals DB',
    featured: false,
    description: "Capstone Meals DB is an impressive web application developed in a team. It serves as a platform where users can explore a variety of delicious meals and engage with the community through likes and comments. The project utilizes HTML, CSS, and JavaScript on the client side, along with Webpack for bundling and making API calls. The homepage of Capstone Meals DB showcases an enticing display of different meals, each presented as a card. Users can browse through this collection, getting inspired by the culinary delights on offer. Furthermore, they have the ability to express their appreciation for a meal by liking it. This engagement feature allows users to curate their favorites and share their preferences. A particularly interesting aspect of the application is the \"Comments_Popup\" section. Here, users can select a meal card and delve into a step-by-step recipe guide for preparing that particular dish. Alongside the recipe, users can also post comments and share their thoughts or experiences related to the meal. The comments section fosters interaction and creates a sense of community among users, who can learn from each other's experiences and exchange culinary tips. The project's future roadmap includes the addition of exciting features such as an \"Ingredients\" section, which will provide a comprehensive list of ingredients required for each meal. Additionally, a \"Meal_Presentation\" feature is planned to enhance the visual appeal of the meals and make the browsing experience more enjoyable. Moreover, the team intends to implement an \"Edit_Comment\" functionality, allowing users to modify their previously posted comments.",
    featuredImage: {
      link: 'images/project-images/Meals-db/Home.png',
      alt: 'Landing page',
    },
    images: [
      {
        link: 'images/project-images/Meals-db/Home.png',
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
    technologies: ['html', 'JavaScript', 'CSS', 'Webpack', 'API'],
    liveLink: 'https://microvese-projects.github.io/capstone-meals-DB/dist',
    sourceLink: 'https://github.com/microvese-projects/capstone-meals-DB',
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

var typed = new Typed('#title-typed', {
  strings: ["I'am a Full-stack Software Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: false
});