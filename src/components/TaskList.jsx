import TaskItem from "./TaskItem";


// eslint-disable-next-line react/prop-types
function TaskList({todos,dispatchTodos}) {

  return <div>

{todos.map((todo,i)=><TaskItem  key={i} item={todo} dispatchTodos={dispatchTodos}/>)}

  </div>;
}

export default TaskList;
