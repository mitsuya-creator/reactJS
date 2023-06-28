export default function deleteTask(tasks, setTasks, id) {
    return setTasks(tasks.filter(task => task.id !== id))
}