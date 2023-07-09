export default function filterTasks(tasks, query) {
    query = query.toLowerCase();
    return tasks.filter(task => {
        let title;
        query.includes(" ") ? title = task.title.split() : title = task.title.split(" ");
        return title.some(word => word.toLowerCase().startsWith(query));
    }
    );
}