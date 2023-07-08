import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
import ListTask from './reactDev/listTasks';
import { useReducer, useState } from 'react';
import taskReducer from './reactDev/taskWithReducer';
import SearchTask from './reactDev/searchTasks';
import filterTasks from './reactDev/filterTasks';
import './css/style.css';


let initialTasks = [];
let keyID = 0;
for (let key in localStorage) {
  // console.log(key);
  if (key === "tasks!") {
    initialTasks = localStorage.getItem("tasks!");
    initialTasks = JSON.parse(initialTasks);
    keyID = localStorage.getItem("keyID");
  }
}




export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [text, setText] = useState("");
  const [addTodo, setAddTodo] = useState(false);
  const [searchTodo, setSearchTodo] = useState(false);
  const [keyword, setKeyword] = useState("");

  if (tasks.length > 0) {
    localStorage.setItem("keyID", keyID)
    localStorage.setItem("tasks!", JSON.stringify(tasks))
  }

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
    localStorage.setItem(task.id, task)
  }
  const handleDeleted = taskId => {
    dispatch({
      type: "deleted",
      id: taskId
    })
    localStorage.removeItem(taskId)
  }
  return (
    <>
      <h1>TodoList App</h1>
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
        }}>Search Tasks</button>
      }
      <ListTask tasks={result} onChangeTask={handleChanged} onDeleted={handleDeleted} allTasks={tasks} />
      {console.log(tasks)}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
