import React from "react";

export default function AddTasks({ onAddBTn, setText, text, setAddTodo }) {
    const handleOnChange = e => {
        setText(e.target.value);
    }
    return (
        <>
            <input type="text" value={text} placeholder="Add Tasks" onChange={e => handleOnChange(e)} />
            <button type="button" onClick={() => onAddBTn(text)}>Add Tasks</button>
            <button type="button" onClick={() => setAddTodo(false)}>Search Tasks</button>
        </>
    )

}