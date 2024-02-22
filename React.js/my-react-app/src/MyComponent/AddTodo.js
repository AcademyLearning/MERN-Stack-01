import React from 'react'

const AddTodo = () => {
  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
      <form>

  <div class="mb-3">
    <label for="title">Todo Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Title"/>
  </div>

  <div class="mb-3">
    <label for="desc">Todo Description</label>
    <input type="text" class="form-control" id="desc" placeholder="Description"/>
  </div>


  <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
