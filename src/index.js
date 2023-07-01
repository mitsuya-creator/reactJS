import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
// import ListTask from './reactDev/listTasks';
import { useReducer, useState } from 'react';
import taskReducer from './reactDev/taskWithReducer';
import './css/style.css';

const initialTasks = [];

export default function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [text, setText] = useState("");
  const handleAddTasks = text => {
    dispatch({
      type: "add",
      id: text,
      title: text,
      done: false,
      isEdit: false
    })
    setText("");
  }
  return (
    <>
      <AddTasks onAddBTn={handleAddTasks} tasks={tasks} setText={setText} text={text} />
      {console.log(tasks)}
      {/* <ListTask tasks={add} setTasks={setAdd} /> */}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
