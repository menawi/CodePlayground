// 

let headerTitle = document.getElementById('header-title')
// headerTitle.innerHTML = 'change'

// let h1 = document.getElementsByTagName('h1')[0]
// h1.style.borderBottom = 'solid, 3px, yellow'

let header = document.getElementById('main-header')
header.style.borderBottom = 'solid 3px #000'


let items = document.getElementsByClassName('list-group-item')
console.log(items);

// 📍
// for (let index = 0; index < items.length; index++) {
//   items[index].style.backgroundColor = 'yellow'
// }


let li = document.getElementsByTagName('li')

const changeColor = () => {

  for (let i = 0; i < li.length; i++) {
    const element = li[i]
    element.style.backgroundColor = 'yellow'
  }
}

const testButton = document.getElementById('test')
testButton.addEventListener('click', changeColor)

