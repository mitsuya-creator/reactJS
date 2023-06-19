import React from "react";
import "../css/style.css";

export default function Letter({ letters, setLetters }) {
    return (
        <>
            <ul>
                {letters.map(letter => <li key={letter.id} className="hover-skyblue li-h">
                    <button type="button" onClick={() => setLetters(letters.map(l => {
                        if (l.id === letter.id) {
                            return { ...letter, isStarred: !letter.isStarred }
                        } else {
                            return l;
                        }
                    }))}>{letter.isStarred ? "Unstar" : "Star"}</button>
                    {letter.subject}
                </li>
                )}
            </ul>
        </>
    )
}