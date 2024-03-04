// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TodoListView from './myComponents/TodoListView';
import axios from 'axios';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import SignUp from './myComponents/SignUp';
import SignIn from './myComponents/SignIn';

function App() {

  const [todoList , setTodoList] = useState([{}])
  const [title , setTitle] = useState('')
  const [desc , setDesc] = useState('')

  // Read all todos 
  useEffect( ()=>{
    axios.get("http://localhost:8000/api/todo").then(res => {
      setTodoList(res.data)})
  } , [] ); // Empty dependency array

  // Post a todo

  const addTodoHandler = () => {
    axios.post("http://localhost:8000/api/todo/" , { 'title' : title , 'description' : desc })
    .then(res => {
      console.log(res) // debugging 

      // Fetch the updated todo list after successfully adding a new todo 
      axios.get("http://localhost:8000/api/todo")
      .then(res => {
        setTodoList(res.data);
      })
      .catch(error => {
        console.log("Error fetching todos after adding new todo " , error)
      });
    })
    .catch(error => {
      console.error("Error adding new todo:" , error)
    });
  }


  return (
    // <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
    //   <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Task Manager</h1>
    //   <h6 className="card text-white bg-primary mb-3">React - API - MongoDB</h6>
    //  <div className="card-body">
    //   <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
    //   <span className="card-text"> 
    //     <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/> 
    //     <input className="mb-2 form-control desIn"  onChange={event => setDesc(event.target.value)}  placeholder='Description'/>
    //   <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"fontWeight":"bold"}} onClick={addTodoHandler} >Add Task</button>
    //   </span>
    //   <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
    //   <div >
    //   <TodoListView todoList={todoList}/>
    //   <SignUp/>
    //   </div>
    //   </div>
    //   <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2024, All rights reserved &copy;</h6>
    // </div>

    <Router>

    <Routes>
      <Route exact path='/sign-up' element= {<SignUp/>} />
      <Route exact path='/sign-in' element= {<SignIn/>}/>
      {/* <Route /> */}
    </Routes>

    </Router>


  );
}

export default App;
