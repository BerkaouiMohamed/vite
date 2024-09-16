import { useRef } from "react";

// eslint-disable-next-line react/prop-types
function AddTodo({dispatchTodos}) {

    const ref=useRef()
function handleSubmit(e){
    e.preventDefault()
   dispatchTodos({type:"ADDTODO",payload:{todo:ref.current.todo.value,description:ref.current.description.value}})
}

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">todo:</label>
        <input type="text" name="todo" />
      </div>
      <div>
        <label htmlFor="">description:</label>
        <input type="text" name="description" />
      </div>
      <input type="submit" />
    </form>
  );
}

export default AddTodo;
