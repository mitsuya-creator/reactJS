import React from "react";
import { useState, useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const [color, setColor] = useState("red");
    const handleOnChange = (e) => {
        setColor(e.target.value);
    }
    const refreshClock = () => {
        setTime(new Date());
    }
    useEffect(() => {
        let timeout = setTimeout(refreshClock, 1000);
        return () => clearTimeout(timeout);
    })
    return (
        <>
            <label>Pick Color : </label>
            <select id="color" onChange={(e) => handleOnChange(e)}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
            <h1 style={{ color: color }}>{time.toLocaleTimeString()}</h1>
        </>
    )
}