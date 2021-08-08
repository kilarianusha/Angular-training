function showTodo(todo:Todo) : void{
    console.log(`${todo.title} : ${todo.text}`);
}
let todo={title:'Title1' , text : 'title1 Text'}
showTodo(todo)



// to avoid more code write an interface
interface Todo {
    title : string,
    text : string
}
// use this Todo in above code