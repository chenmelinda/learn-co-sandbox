console.log('messages!')

console.log(document.querySelector('#third-div'))
console.log(document.querySelectorAll('div p'))



//1. create element
let pTag= document.createElement('p')

//2. put text in the paragraph tag
pTag.innerText = "Some text"

// 3. put it on the page
let thirdDiv = document.querySelector('#third-div')
thirdDiv.appendChild(pTag)

//method chaining
document.querySelector('div p').remove()


