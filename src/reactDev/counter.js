import React from "react";
import { useState } from "react";
import "../css/style.css"
export default function Counter() {
    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(false);
    let className = "card";
    if (hover) {
        className += " bg-skyblue";
    }
    return (
        <>
            <div className={className}
                onPointerEnter={() => setHover(true)}
                onPointerLeave={() => setHover(false)}
            >
                <h1>{count}</h1>
                <button type="button" onClick={() => setCount(count => count + 1)}>add one</button>
            </div>
        </>
    )
}