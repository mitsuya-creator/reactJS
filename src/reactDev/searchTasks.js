import React from "react";

export default function SearchTask({ setSearchTodo }) {
    return (
        <>
            <input type="text" placeholder="Search Tasks" />
            <button type="button" onClick={() => setSearchTodo(false)}>Close Search</button>
        </>
    )
}