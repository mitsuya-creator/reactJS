import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import AddTodo from './reactDev/AddTodo';
import TaskList from './reactDev/TaskList';
import ResetCheckbox from './reactDev/resetCheckbox';


let id = 0;
let reset = false;

export default function App() {
  const [list, setList] = useState([]);
  const handleAddBtn = title => {
    setList([...list, { id: id++, title: title, done: false }])
  }
  const handleDeleteBtn = id => {
    setList(list.filter(idList => idList.id !== id))
  }
  const handleOnChangeList = todo => {
    setList(list.map(t => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    }))
  }
  return (
    <>
      <AddTodo onAddTodo={handleAddBtn} />
      {reset = list.map(t => t.done ? true : undefined)}{reset.some(a => a === true) && <ResetCheckbox />}
      <TaskList todos={list} onDeleted={handleDeleteBtn} onChange={handleOnChangeList} />
      {console.log(list)}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
