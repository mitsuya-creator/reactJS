import React from "react";
import { useState } from "react";

function Car() {
    const [car, setCar] = useState({
        brand: "Honda",
        type: "Brio",
        color: "gray"
    })
    const changeColor = () => {
        setCar(x => {
            return { ...x, color: "red" }
        });
    }
    return (
        <>
            <h1>{car.brand}</h1>
            <h1>{car.color}</h1>
            <h1>{car.type}</h1>
            <button onClick={changeColor}>change color</button>
        </>
    )
}
export default Car;