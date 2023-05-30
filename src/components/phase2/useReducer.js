import React from "react";
import { useReducer } from "react";
// import { useActionData } from "react-router-dom";

const intialState = [
    {
        id: 1,
        title: "todo 1",
        compelete: false
    },
    {
        id: 2,
        title: "todo 2",
        compelete: false
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return (
                state.map(todo => {
                    if (todo.id === action.id) {
                        return { ...todo, compelete: !todo.compelete }
                    } else {
                        return todo;
                    }
                })
            )
        default:
            return state;
    }
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, intialState);
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label><input type="checkbox" checked={todo.compelete} onChange={() => handleComplete(todo)} />{todo.title}</label>
                    {console.log(todo.compelete)}
                </div>
            ))}
        </div>


    );
}

export default Todos;