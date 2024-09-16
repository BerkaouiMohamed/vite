

function TaskItem({item,dispatchTodos}) {
  return (
    <div className="taskItem">
      <h1>{item.todo} </h1>
    <p>{item.description}</p>
    <button onClick={()=>dispatchTodos({type:"DELETETODO",payload:item})}>delete</button>
    </div>
  )
}

export default TaskItem