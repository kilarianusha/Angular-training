// function getSum(num1,num2){
//     return num1+num2
// }
// console.log(getSum(10,20))

// function sum(a:number, b:number):number{
//     return a+b
// }
// console.log(sum('10','20'))


// works
function sum(a:number, b:number):number{
    return +a + +b
}
console.log(sum('10','20'))


// // optional parameter--- use (?)
// function getName(firstName:string,lastName? :string):string{
//     return `${firstName} ${lastName}` 
// }
// console.log(getName('anusha'))


// to make work properly

function getName(firstName:string,lastName? :string):string{
    if (typeof lastName === 'undefined'){
        return `${firstName}`
    }
    return `${firstName} ${lastName}` 
}
console.log(getName('anusha'))


// void as return type
function printSomething(string1:string , string2:string):void{
    
    console.log(string1 + " " + string2)
}
printSomething('hi','how are you')