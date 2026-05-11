document.getElementById('animate-btn').addEventListener('click', function () {
  document.getElementById('title').classList.toggle('bounce')
})

let firstName = 'Chris'
let lastName = 'Chevalier'

console.log('Bienvenue ' + firstName + ' ' + lastName + ' !')
console.log(`Bienvenue ${firstName} ${lastName} !`)

let age = 25
age += 8

console.log(age)

console.log('5' === 5) // true

let students = ['Rim', 'Philippine', 'Thomas']
students.push('Charif')
students.unshift('Khalil')
//students.pop()

console.table(students)

/* for (let i = 0; i < students.length; i++) {
  const firstName = students[i]
  console.log(`Bienvenue ${firstName} !`)
} */

students.sort()
students.reverse()

students.forEach(student => {
  console.log(`Bienvenue ${student} !`)
})

let cosmo = {
  breed: 'Golden Retriever',
  firstName: 'Cosmo',
  age: 3,
  lastName: 'CHEVALIER',
  color: 'sable'
}

cosmo.lastName = 'Chevalier'
console.log(cosmo)

for (let property in cosmo) {
  console.log(property + ' : ' + cosmo[property])
}
