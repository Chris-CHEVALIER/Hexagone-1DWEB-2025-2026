const title = document.getElementById('title')
const lorem = document.querySelector('.lorem')
const btn = document.querySelector('#clic-here')

const article = document.createElement('article') // <article></article>
const h2 = document.createElement('h2') // <h2></h2>
const img = document.createElement('img') // <img />
h2.textContent = 'Un Cosmic Doggo'
img.src = './images/cosmo.jpg'
img.alt = 'Un Cosmic Doggo'
img.style.width = '220px'

article.appendChild(h2)
article.appendChild(img)

btn.addEventListener('click', () => {
  title.innerHTML = '<u>Mon super titre</u>'
  title.style.color = 'dodgerblue'
  title.style.fontFamily = 'Arial'
  if (document.body.contains(article)) {
    document.body.removeChild(article)
  } else {
    document.body.appendChild(article)
  }
})

const countBtn = document.querySelector('#count-btn')
const countLabel = document.getElementById('count-label')
let count = 0

countBtn.addEventListener('click', () => {
  count++
  countLabel.textContent = count
})

const changeThemeBtn = document.getElementById('change-theme-btn')
changeThemeBtn.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  } else {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
})

