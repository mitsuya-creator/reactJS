import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTasks from './reactDev/createTasks';
import ListTask from './reactDev/listTasks';
import { useState } from 'react';

const initialTasks = [];

export default function App() {
  const [add, setAdd] = useState(initialTasks);
  return (
    <>
      <AddTasks setAdd={setAdd} />
      <ListTask tasks={add} setTasks={setAdd} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
