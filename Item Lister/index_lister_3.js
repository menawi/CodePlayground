
// QUERY SELECTOR

const testButton_2 = document.getElementById('test-2')
// testButton.addEventListener('click', changeColor)

// let header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 3px red'

let input = document.querySelector('input')
input.value = 'hello'

let submit = document.querySelector('input[type="submit"]')
submit.value = "SEND"

let item = document.querySelector('.list-group-item')
item.style.color = 'red'

let lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'yellow'

let secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'blue'

let titles = document.querySelectorAll('.titles')

let odd = document.querySelectorAll('li:nth-child(odd)')

let even = document.querySelectorAll('li:nth-child(even)')


// alternate light grey and dark grey in the list
for (let i = 0; i < odd.length; i++) {
  let e = odd[i];
  e.style.backgroundColor = '#f4f4f4'
}

for (let i = 0; i < even.length; i++) {
  let e = even[i];
  e.style.backgroundColor = '#ccc'
}