import React from "react";
import { useState } from "react";

export default function IssuedTo() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const fullName = firstName + " " + lastName;

    return (
        <>
            <form>
                <h1>Let's check you in</h1>
                <label> FirstName :
                    <input type="text" onChange={e => setFirstName(e.target.value)} />
                </label>
                <br />
                <label> LastName :
                    <input type="text" onChange={e => setLastName(e.target.value)} />
                </label>
                <p>your ticket will be issued to: {fullName}</p>
            </form>
        </>
    )
}