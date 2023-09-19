const cards = document.querySelectorAll('.project-card')

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-50px'
}

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
}, options)


cards.forEach((card) => {
  observer.observe(card)
})
