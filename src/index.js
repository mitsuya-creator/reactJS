import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
import ListTask from './reactDev/listTasks';
import { useReducer, useState } from 'react';
import taskReducer from './reactDev/taskWithReducer';
import SearchTask from './reactDev/searchTasks';
import filterTasks from './reactDev/filterTasks';
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
      let ask = window.confirm(`"${text}" already Exist, Create Again ?`)
      if (ask) {
        dispatch({
          type: "add",
          title: text,
          done: false,
          id: keyID++
        })
        setText("");
      }
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
      {searchTodo ? <SearchTask setSearchTodo={setSearchTodo} setKeyword={setKeyword} /> : <button type="button" onClick={() => {
        setSearchTodo(true)
        setAddTodo(false)
        setText("")
      }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></button>}
      {addTodo ? <AddTasks onAddBTn={handleAddTasks} setText={setText} text={text} /> : <button type="button" onClick={() => {
        setAddTodo(true)
        setSearchTodo(false)
        setKeyword("")
      }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg></button>}
      <ListTask tasks={result} onChangeTask={handleChanged} onDeleted={handleDeleted} allTasks={tasks} />
      {console.log(tasks)}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
