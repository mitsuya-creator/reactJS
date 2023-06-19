import React from "react";

export default function Letter({ letters }) {
    return (
        <>
            {letters.map(letter => <li key={letter.id}>
                <button type="button">{letter.isStarred ? "Unstar" : "Star"}</button>
                {letter.title}
            </li>
            )}
        </>
    )
}