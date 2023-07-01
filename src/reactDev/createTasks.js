import React from "react";

export default function AddTasks({ onAddBTn, tasks, setText, text }) {
    let toggle, newArr;
    newArr = [];
    tasks.map(task => newArr.push(task.title));
    newArr.includes(text) ? toggle = true : toggle = false;
    const handleOnChange = e => {
        setText(e.target.value);
    }
    return (
        <>
            <input type="text" value={text} placeholder="Add Tasks" onChange={e => handleOnChange(e)} />
            <button type="button" onClick={() => onAddBTn(text)} disabled={toggle}>Add Tasks</button>
        </>
    )

}