import React from "react";
import "../css/style.css";

export default function Letter({ letters, setLetters }) {
    return (
        <>
            <ul>
                {letters.map(letter => <li key={letter.id} className={letter.isStarred ? "bg-skyblue li-h" : "li-h"}>
                    <input type="checkbox" checked={letter.isStarred} onChange={e => {
                        setLetters(letters.map(l => {
                            if (l.id === letter.id) {
                                return { ...letter, isStarred: e.target.checked }
                            } else {
                                return l;
                            }
                        }))
                    }} />
                    {letter.subject}
                </li>
                )}
            </ul>
        </>
    )
}