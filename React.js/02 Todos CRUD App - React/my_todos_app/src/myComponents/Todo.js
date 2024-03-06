import axios from 'axios';
import React, { useState } from 'react'

const Todo = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(props.todo.title);
  const [updatedDescription, setUpdatedDescription] = useState(props.todo.description);

  
  return (
    <div>
      {isEditing ? (
          
     <>
     <input onChange={(e) => setUpdatedTitle(e.target.value)} value={updatedTitle} type="text" />
     <input onChange={(e) => setUpdatedDescription(e.target.value)} value={updatedDescription} type="text" />
     <button onClick={updateTodoHandler} className='btn btn-outline-success my-2 mx-2'>Update</button>
      </>
      ) : (
        <p>
          <span style={{ fontWeight: 'bold' }} > {props.todo.title} </span> : {props.todo.description}
          <button onClick={() => props.deleteTodoHandler(props.todo.title)} className='btn btn-outline-danger my-2 mx-2'  >delete</button>
          <button onClick={() => setIsEditing(true)} className='btn btn-outline-primary my-2 mx-2'  >Edit</button>
          <hr />
        </p>
      )}



    </div>
  )
}

export default Todo
