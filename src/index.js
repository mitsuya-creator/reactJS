import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
import ListTask from './reactDev/listTasks';
import { useState } from 'react';
import './css/style.css';

const initialTasks = [];

export default function App() {
  const [add, setAdd] = useState(initialTasks);
  return (
    <>
      <AddTasks setAdd={setAdd} tasks={add} />
      <ListTask tasks={add} setTasks={setAdd} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
