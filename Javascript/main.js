console.log('hello world')
// alert(2+2)
// console.log('hello world')
// console.warn('hello world')
// console.error('hellow world')


var variable=10; //global Variable -- var
console.log(variable)


let something = 'Hi'  //Local Variable ---let
console.log(something)

const abc='ABC'    // const
console.log(abc)

// const abc = 'ABC'
// abc = 12345      //Error
// console.log(abc)


// strings

const str = 'JavaScript'
 console.log(str.length)  //string length


 const str1 = ' JavaScript '
 console.log(str1.length)    //spaces are also counted in JS


 const str2 = " JavaScript is cool language "
 console.log(str2.toLowerCase())
 console.log(str2.toUpperCase())


 console.log(str2.substr(15)) //extract a part of existing string


 console.log(str2.substring(4,12))  //a is 4 and b is 12----in this a is included but is excluded.(12th index is excluded)

 console.log(str2.substring(4,13)) 


 console.log(str2.indexOf('s')) // if we have multiple or repated letters the first one is taken in to consideration.


//  split
const str3 = 'javascript, C, C++, Java' //space and ,
const languages=str3.split(', ')  //split or separate with one comma(,) and one space between
console.log(languages[0]);
console.log(languages)

console.log(10/0)
console.log(10/'Anu') //not a number


// Arrays
const courses =new Array('hello', 'java','CSS')
console.log(courses)


const items=[10.25,10,'Hello',null,'anu',undefined]
console.log(items);

console.log(items[2]);

// string iterals
//  genaerally string concatination is done like below

console.log(items[2]+ ", my name is " + items[4])

// to avoid + signs use string literals.

// ${}
 console.log(`${items[2]} , my name is ${items[4]}`)   //--> String literals



//  ***IMP ---Objects----***


// creation of objects in JS
const person = {
    firstname:'anusha',
    lastname:'kilari',
    designation:'Angular Developer',
    fav_colors:['blue','white','black'], //array inside object
    address :{    
        street:'charterOakCourt',      //object inside object
        city:'reston',
        state : 'Virginia',
        country: 'USA' 
    }
}
console.log(person)

// accessing of objects in JS

console.log(`Hi my name is ${person.firstname} ${person.lastname}
I work as ${person.designation} . 
My two favourite colors are ${person.fav_colors[0]} & ${person.fav_colors[1]}.
I live in ${person.address.state} , ${person.address.country}`);

