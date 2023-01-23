let newDiv = document.createElement('div')

newDiv.className = 'hello'

newDiv.id = 'hello id'

newDiv.setAttribute('title', 'hello div title')

console.log(newDiv)

let newDivText = document.createTextNode('hello world')

newDiv.appendChild(newDivText)

// console.log(newDiv)

// let header = document.getElementById('main-header')

// console.log(header);

let container = document.querySelector('header .container')

console.log(container);


// 📌this = error --- reas = wrong name
// let h1 = document.querySelector('header h1')

// correct name = headerTitle
let h1 = document.querySelector('header headerTitle')

newDiv.style.fontSize = '30px'



// CGPT
// let h1 = document.querySelector('#header-title')
// container.insertBefore(newDiv, h1)


// console.log(h1)

container.insertBefore(newDiv, h1)