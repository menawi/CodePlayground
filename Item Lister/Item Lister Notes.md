# Item Lister Notes

#javascript #programming #Template 


## Important Ideas Learned

```javascript

> // I had problems accessing innerHTML of document.document.getElementsByTagName( 'tag' )

let header = document.getElementsByTagName('h1')

using tagName results in an HTML element, which needs further indexing to access inside the element

let header = document.getElementsByTagName('h1')[0]

// The tag is like the door

// Outer door : tag
// Inner door: element

Arrays !

> HTML Collections can be accessed using the index method just like arrays ; meaning you can apply loops and push methods on HTML collections

```



## Questions
    
- What is an HTML collection ?
- What is diff bw HTML collection and Node list?
    > An HTML collection is an array and thus can have array methods run on it ; a node list is not, and must be converted into an HTML collection first in order to , for e.g. iterate over it.

## Observations

- query selector => using css classes as well to get elements 
- using loops to iterate over items of the same class 


## ✅ Good Job !
```javascript


itemList.children[0].style.backgroundColor = 'yellow'

let itemListArr = itemList.children
// console.log(itemListArr[0].innerHTML)

// 
for (let i = 0; i < itemListArr.length; i++) {
  const e = itemListArr[i];
  i % 2 === 0 ?
    e.style.backgroundColor = 'red' :
    e.style.backgroundColor = 'green'
}

```