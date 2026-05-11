const submitBtn = document.querySelector('.btn-primary')
const input = document.getElementById('todo')
const ul = document.getElementById('todo-list')

submitBtn.addEventListener('click', () => {
  const text = input.value
  if (text) {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
    input.value = ''
  }
})
