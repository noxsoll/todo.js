import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo.list.class';


export const todoList = new TodoList();


todoList.todos.forEach( todo => crearTodoHtml(todo) );
// tambien se puede de la siguiente forma
// todoList.todos.forEach( crearTodoHtml );

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);


// crearTodoHtml(tarea);


 console.log(todoList);
