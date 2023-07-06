import React from "react";

export default function SearchTask({ setSearchTodo, setKeyword }) {
    return (
        <>
            <input type="text" placeholder="Search Tasks" onChange={e => setKeyword(e.target.value)} />
            <button type="button" onClick={() => {
                setSearchTodo(false);
                setKeyword("");
            }}>Close Search</button>
        </>
    )
}