
import { useReducer } from "react";
import AddTodo from "./components/AddTodo"
import TaskList from "./components/TaskList";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADDTODO": {
      localStorage.setItem("todos", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];
    }
    case "DELETETODO": {
      let newTodos = state.filter((todo) => todo.todo !== action.payload.todo);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    case "EDITTODO": {
      let newTodos = state.map((todo) =>
        todo.todo === action.payload.todo ? action.payload : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    default:
      return state;
  }
}

function App() {
  var tasks = localStorage.key('todos')?JSON.parse(localStorage.getItem("todos")) :[];
  const [todos, dispatchTodos] = useReducer(todoReducer, tasks);
  return (
    <div className="App">
      <AddTodo  dispatchTodos={dispatchTodos}/>
      <TaskList todos={todos} dispatchTodos={dispatchTodos}/>

    </div>
  )
}

export default App
