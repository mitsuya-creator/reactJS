import React from "react";

export default function SearchBar({ setWord }) {
    return (
        <>
            <label> Search:
                <input type="text" id="searchBar" onChange={e => setWord(e.target.value)} />
            </label>
            <hr />
        </>
    )
}