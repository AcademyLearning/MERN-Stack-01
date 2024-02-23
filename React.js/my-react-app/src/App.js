// import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Todos from  './MyComponent/Todos';
import AddTodo from './MyComponent/AddTodo';
import Footer from './MyComponent/Footer';
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) =>{
    console.log("I am ondelete of todo" , todo)

    setTodos(todos.filter((e) =>{
      return e!==todo;
    })) ;
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc) 
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  };

  const  [todos , setTodos]  = useState (
    [
      {
        sno : 1 , 
        title : "Go to the gym",
        desc : "Yon need to go to the gym for exercise "
      },
      {
        sno : 2 , 
        title : "Go to the Market",
        desc : "Yon need to go to the Market for shopping "
      },
      {
        sno : 3 , 
        title : "Go to the college",
        desc : "Yon need to go to the gym for studies "
      },
    ]
  ) ;

  return (
    <>
    <Header title = {'Title'} searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
