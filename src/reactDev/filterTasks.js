export default function filterTasks(tasks, query) {
    query = query.toLowerCase();
    return tasks.filter(task => task.title.split(" ").some(word => word.toLowerCase().startsWith(query)));
}