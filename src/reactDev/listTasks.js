import React from "react";
import EditTask from "./editTasks";

export default function ListTask({ tasks, setTasks }) {
    const handleChange = (t, event) => {
        let updateTasks = tasks.map(task => {
            if (task.id === t.id) {
                return { ...t, done: event.target.checked }
            } else {
                return task;
            }
        })
        setTasks(updateTasks);
    }
    const handleEditBtn = t => {
        let updateTasks = tasks.map(task => {
            if (task.id === t.id) {
                return { ...t, isEdit: true }
            } else {
                return task;
            }
        })
        setTasks(updateTasks);
    }
    console.log(tasks)
    return (
        <>
            <ul>
                {tasks.map(task => <li key={task.id}>
                    <input type="checkbox" onChange={e => handleChange(task, e)} checked={task.done} />
                    {task.isEdit ? <EditTask tasks={tasks} setTasks={setTasks} taskUpdate={task} key={task.id} id={task.id} />
                        :
                        <>
                            <span>{task.title}</span>
                            <button type="button" onClick={() => handleEditBtn(task)}>Edit</button>
                        </>
                    }
                </li>)}
            </ul>
        </>
    )
}