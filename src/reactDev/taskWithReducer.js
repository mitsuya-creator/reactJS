export default function taskReducer(tasks, action) {
    switch (action.type) {
        case "add": {
            return [...tasks, { id: action.id, title: action.title, done: action.done }];
        }
        case "changed": {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return tasks.filter(t => t.id !== action.id)
        }
        default: {
            throw Error("unknown Action");
        }

    }
}