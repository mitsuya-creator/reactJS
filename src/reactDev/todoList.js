import React from "react";
import { useState } from "react";

let setId = 0;
function AddList() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    const addBtn = () => {
      if(todo === "") alert("inputSomeText")
      else{
        setList([...list,{id: setId++, task: todo}]);
        setTodo("");
      }
    }
    function delBtn(id) {
      setList(list.filter(idContent => idContent.id !== id));
    }
    function editBtn(id) {
      let x = prompt("newTask");
      const newTask = [...list];
      newTask[id].task = x;
      setList(newTask);
    }
    return (
        <>
            <h1>Todo List</h1>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button type="button" onClick={addBtn}>Add</button>
            <ul>
                {list.map(content => <li key={content.id}>{content.task}<button type="button" onClick={() => delBtn(content.id)}>Delete</button><button type="button" onClick={() => editBtn(content.id)}>Edit</button></li>)}
            </ul>
            {console.log(list)}
            {console.log(todo)}
        </>
    )
}

export default AddList;