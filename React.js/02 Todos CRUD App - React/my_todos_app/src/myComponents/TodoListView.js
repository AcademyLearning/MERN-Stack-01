import Todo from "./Todo";

import React from 'react'

const TodoListView = (props) => {
  return (
    <>
    
    <div>

      <ul>
        {props.todoList.map(todo => <Todo todo={todo}/>)}
      </ul>

    </div>
    </>
  )
}

export default TodoListView
