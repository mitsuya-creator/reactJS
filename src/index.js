import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
import ListTask from './reactDev/listTasks';
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
      done: false
    })
    setText("");
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
      <AddTasks onAddBTn={handleAddTasks} tasks={tasks} setText={setText} text={text} />
      <ListTask tasks={tasks} onChangeTask={handleChanged} onDeleted={handleDeleted} />
      {console.log(tasks)}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
