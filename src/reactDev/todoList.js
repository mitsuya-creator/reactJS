import React from "react";
import { useState } from "react";

let setId = 0;
function AddList() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    return (
        <>
            <h1>Todo List</h1>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button type="button" onClick={() => {
                setList([...list, { id: setId++, task: todo }]);
                setTodo("");
            }}>Add</button>
            <ul>
                {list.map(content => <li key={content.id}>{content.task}<button type="button" onClick={() => setList(list.filter(idContent => idContent.id !== content.id))}>Delete</button></li>)}
            </ul>
            {console.log(list)}
            {console.log(todo)}
        </>
    )
}

export default AddList;