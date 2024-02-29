import React from 'react'

const Todo = (props) => {
  return (
    <div>
     <p>
     <span style={{ fontWeight:'bold' }} > {props.todo.title} </span> : {props.todo.description}
     <button className='btn btn-outline-danger my-2 mx-2' >delete</button>
    <hr />
     </p>
    </div>
  )
}

export default Todo
