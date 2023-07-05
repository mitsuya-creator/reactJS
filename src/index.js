import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
import ListTask from './reactDev/listTasks';
import { useReducer, useState } from 'react';
import taskReducer from './reactDev/taskWithReducer';
import SearchTask from './reactDev/searchTasks';
import './css/style.css';


const initialTasks = [];
let keyID = 0;

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [text, setText] = useState("");
  const [addTodo, setAddTodo] = useState(false);
  const [searchTodo, setSearchTodo] = useState(false);
  const handleAddTasks = text => {
    let newArr = [];
    tasks.map(t => newArr.push(t.title));
    if (newArr.includes(text)) {
      alert("Task Already Exist");
    } else if (text === "") {
      alert("title must not Empty!");
    } else {
      dispatch({
        type: "add",
        title: text,
        done: false,
        id: keyID++
      })
      setText("");
    }
  }
  const handleChanged = task => {
    dispatch({
      type: "changed",
      task: task
    })
  }
  const handleDeleted = taskId => {
    dispatch({
      type: "deleted",
      id: taskId
    })
  }
  return (
    <>
      <h1>TodoList App</h1>
      {
        addTodo ? <AddTasks onAddBTn={handleAddTasks} setText={setText} text={text} setAddTodo={setAddTodo} /> : <button type="button" onClick={() => {
          setAddTodo(true)
          setSearchTodo(false)
        }}>Create Tasks</button>

      }
      {
        searchTodo ? <SearchTask setSearchTodo={setSearchTodo} /> : <button type="button" onClick={() => {
          setSearchTodo(true)
          setAddTodo(false)
        }}>Search Tasks</button>
      }
      <ListTask tasks={tasks} onChangeTask={handleChanged} onDeleted={handleDeleted} />
      {console.log(tasks)}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
