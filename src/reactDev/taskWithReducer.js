export default function taskReducer(tasks, action) {
    switch (action.type) {
        case "add": {
            return [...tasks, { id: action.id, title: action.title, done: action.done }]
        };
        case "changed": {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    console.log("change")
                    return action.task;
                } else {
                    return t;
                }
            })
        };
        default: {
            throw Error("unknown Action");
        }

    }
}