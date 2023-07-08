import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
import ListTask from './reactDev/listTasks';
import { useReducer, useState } from 'react';
import taskReducer from './reactDev/taskWithReducer';
import SearchTask from './reactDev/searchTasks';
import filterTasks from './reactDev/filterTasks';
import iconSearch from '../src/assets/search.svg';
import './css/style.css';

let keyID = 0;
let key, initialTasks;
initialTasks = [];
for (key in localStorage) {
  if (key === "tasks!") {
    initialTasks = JSON.parse(localStorage.getItem("tasks!"));
    keyID = localStorage.getItem("keyID");
  }
}


export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [text, setText] = useState("");
  const [addTodo, setAddTodo] = useState(false);
  const [searchTodo, setSearchTodo] = useState(false);
  const [keyword, setKeyword] = useState("");

  let result;
  if (searchTodo) {
    result = filterTasks(tasks, keyword);
  } else {
    result = tasks;
  }
  console.log(result);

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

  if (tasks.length > 0) {
    localStorage.setItem("keyID", keyID)
    localStorage.setItem("tasks!", JSON.stringify(tasks))
  } else {
    keyID = 0;
    localStorage.removeItem("tasks!")
    localStorage.removeItem("keyID")
  }

  return (
    <>
      <h1>TodoList App</h1>
      <label for="language">Bahasa</label>
      <select name="language" id="language">
        <option>English</option>
        <option>Indonesia</option>
      </select>
      {
        addTodo ? <AddTasks onAddBTn={handleAddTasks} setText={setText} text={text} /> : <button type="button" onClick={() => {
          setAddTodo(true)
          setSearchTodo(false)
          setKeyword("")
        }}>Create Tasks</button>

      }
      {
        searchTodo ? <SearchTask setSearchTodo={setSearchTodo} setKeyword={setKeyword} /> : <button type="button" onClick={() => {
          setSearchTodo(true)
          setAddTodo(false)
          setText("")
        }}><img src={iconSearch} alt='search-icon' /></button>
      }
      <ListTask tasks={result} onChangeTask={handleChanged} onDeleted={handleDeleted} allTasks={tasks} />
      {console.log(tasks)}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
