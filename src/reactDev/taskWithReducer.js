export default function taskReducer(tasks, action) {
    switch (action.type) {
        case "add": {
            return [...tasks, { id: action.id, title: action.title, done: action.done, isEdit: action.isEdit }]
        };
        default: {
            throw Error("unknown Action");
        }

    }
}