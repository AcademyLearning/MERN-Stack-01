import axios from 'axios'
import React from 'react'
import setTodoList from '../App'

const Todo = (props) => {

  const deleteTodoHandler = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`).then(res => {

      // Fetch the updated todo list after successfully adding a new todo 
      axios.get("http://localhost:8000/api/todo")
      .then(res => {
        setTodoList(res.data);
      })
      .catch(error => {
        console.log("Error fetching todos after deleting a todo " , error)
      });
    })
  }

  return (
    <div>
     <p>
     <span style={{ fontWeight:'bold' }} > {props.todo.title} </span> : {props.todo.description}
     <button onClick={() => deleteTodoHandler(props.todo.title)} className='btn btn-outline-danger my-2 mx-2'  >delete</button>
    <hr />
     </p>
    </div>
  )
}

export default Todo
