// traversing DOM

let itemList = document.querySelector('#items')
// gets HTML element
// console.log(itemList)
// console.log(itemList.parentNode);

itemList.parentNode.style.background = '#f4f4f4'

// console.log(itemList.parentNode.parentElement);

// parentNode
// parentElement

// childNodes

// children 
// itemList.children[0].style.backgroundColor = 'yellow'

// let itemListArr = itemList.children
// // console.log(itemListArr[0].innerHTML)

// // 📌

// // 
// for (let i = 0; i < itemListArr.length; i++) {
//   const e = itemListArr[i];
//   i % 2 === 0 ?
//     e.style.backgroundColor = 'red' :
//     e.style.backgroundColor = 'green'
// }

// fc gives us the node
let fc = itemList.firstChild

// fec gives us the actual eleement
let fec = itemList.firstElementChild

// agn element 
let lec = itemList.lastElementChild


// siblings

let nextEsibling = itemList.nextElementSibling
console.log(nextEsibling);

// nextEsibling.style.backgroundColor = 'green'


// console.log(itemList.children)

