console.dir(document);   
// we have everything in document
console.log(document.URL)
console.log(document.title)

// const header = document.all[8]    
// //   go to document/all/index[8]
// console.log(header)


// const header = document.all[10]
// header.textContent="new-title"
// console.log(header)
//  we can change things permanently by using DOM

// Identifier Methods

// 5 in total 
// 1. getElementById
// 2.getElementsByClassName
// 3.getElementByTagName
// 4.querySelector
// 5.querySelectorAll

// *************************
// 1.getElementById
// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle);

// ***** Methods to manipulate data

// 3 in total---text-content , append a child ,style an existing element

// 1.Text-content-->to change dynamically text

// const headerTitle = document.getElementById('header-title')
// headerTitle.textContent='new title'
// //  title name changes to new title
// console.log(headerTitle);

// 2.element inside another element

// const headerTitle = document.getElementById('header-title')
// headerTitle.innerHTML = `<h3>this h3 is inside h1</h3>`
// // we will hae h3 inside h1 
// console.log(headerTitle);


// 3.change style of existing element 

// const headerTitle = document.getElementById('header-title')
// headerTitle.style.fontFamily="cursive"
// console.log(headerTitle);


// const headerTitle = document.getElementById('header-title')
// headerTitle.style.borderBottom = '3px solid black'
// console.log(headerTitle);


// ******** 2.getElementsByClassName

// const items = document.getElementsByClassName('list-group-item')
// // items[0].style.color="blue"
// for(let i=0;i<items.length; i++){
//     if(i%2 == 0){
//         items[i].style.backgroundColor='grey'
//     }
// }
// console.log(items);


// ********** 3 . getElementsByTagName

// const items = document.getElementsByTagName('li')
// console.log(items);

// ******* 4 .querySelector   *****

// we can use for any of the above 3 (id,class and tag )


// for id
// const headerTitle = document.querySelector('#header-title')
// console.log(headerTitle)

// for class
// const items = document.querySelector('.list-group-item')
// console.log(items)

// for tag
// const items = document.querySelector('li')
// console.log(items)

// ********** 5. querySelectorAll  ********


// for tag 

// const items = document.querySelectorAll('li')
// console.log(items)

// for class 

// const items = document.querySelectorAll('.list-group-item')
// console.log(items)



// DOM EVENTS
// const button = document.getElementById('button')
// button.addEventListener('click', onClickEvent)
// function onClickEvent(){
//     alert('Button')
// }

// another way 

// const button = document.getElementById('button')
// button.addEventListener('click', ()=>{
//     alert('Button')
// })


// double click

// const button = document.getElementById('button')
// button.addEventListener('dbclick', () =>{

//     alert(' twice Button')
// })


// events for text(focus,blur,copy,cut,paste and so mamny others)

// const textInput = document.getElementById('text-input')
// textInput.addEventListener('focus' , () =>{
//     console.log('Focused on text input')
    
// })

// const textInput = document.getElementById('text-input')
// textInput.addEventListener('blur' , () =>{
//     console.log('blurred on text input')
    
// })


// const textInput = document.getElementById('text-input')
// textInput.addEventListener('cut' , () =>{
//     console.log('cut on text input')
    
// })


// const textInput = document.getElementById('text-input')
// textInput.addEventListener('paste' , () =>{
//     console.log('paste on text input')
    
// })

// Event parameters
 

// for text

// const textInput = document.getElementById('text-input')
// textInput.addEventListener('keydown' , (e) =>{
//     console.log(e.target.value);
    
// })


// for button

// const button = document.getElementById('button')
// button.addEventListener('click' , (event) =>{
//     console.log(event);
    
// })


// DOM TRAVERSALS

// parent

const item = document.querySelector('.list-group-item')
console.log(item)
console.log(item.parentElement)

const listParentElement = item.parentElement
listParentElement.style.border='3px solid red'

// child

const unorderedList = document.querySelector('#items')
// console.log(unorderedList.childNodes)
// see the difference 
// children is used 
const children =unorderedList.children
console.log(unorderedList.children)    

// for( let i=0; i< children.length; i++){
//     if(i%2 == 0){
//         children[i].style.color ='blue'
//     }else{
//         children[i].style.color ='green'
//     }
// }




// siblings


const secondText = document.getElementById('second-text')
console.log(secondText)

console.log(secondText.previousElementSibling)

console.log(secondText.nextElementSibling)


// generating html elements using JS

// adding li with id ,class and textcontent

const newLi = document.createElement('li')
console.log(newLi);
newLi.id ="new-id"
newLi.className ="list-group-item"
newLi.textContent='Item 7'

// adding anchor tag

const anchor = document.createElement('a')
anchor.setAttribute('href', 'https://www.google.com')
console.log(anchor)


// add newly created element li to html
// const items=document.getElementById('items')
// items.appendChild(newLi)

// add items when we click on submit button

const submitButton = document.getElementById('submit-button')
// submitButton.addEventListener( 'click', (e) => { 
//     e.preventDefault()
//     items.appendChild(newLi)

// })

// adding items from input box and on submit click action

const text = document.getElementById('text-input')
text.addEventListener( 'keyup', ( e) =>{
    var value = e.target.value
    submitButton.addEventListener( 'click', (e) => { 
        e.preventDefault()
        newLi.innerText = value
        items.appendChild(newLi)
        
    
    })
})