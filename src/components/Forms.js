import React from "react";
import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Your submitted was ${name}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Input Name:
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>

    )
}

export default MyForm;