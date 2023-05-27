import React from "react";
import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");
    return (
        <form>
            <label>Input Name:
                <input type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
        </form>

    )
}

export default MyForm;