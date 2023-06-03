// when button "buy" clicked => increase count pending, wait for 3 seconds then increase count completed also decrease count pending to zero.

import React from "react";
import { useState } from "react";
export default function Counter() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    const handleClick = () => {
        setPending(pendig => pendig + 1);
        setTimeout(() => {
            setPending(pending => pending - 1);
            setCompleted(completed => completed + 1);
        }, 3000);
    }

    return (
        <>
            <h1>Pending : {pending}</h1>
            <h1>Completed : {completed}</h1>
            <button onClick={handleClick}>Buy</button>
        </>
    )
}