import React from "react";
import { useState } from "react";

function MultInput() {
    const [inputs, setInput] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value
        setInput((values) => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name :
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Age :
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}


export default MultInput;