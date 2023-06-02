import React from "react";
import { useEffect, useState } from "react";
function Time() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, [])
    return (
        <h1>{time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()}</h1>
    )
}

export default Time;