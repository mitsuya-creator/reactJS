import React from "react";
import { useState } from "react";

export default function Feedback() {
    const [messages, setMessages] = useState("");
    const [status, setStatus] = useState("typing");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        await sendMessages(messages);
        setStatus("sent");
    }
    if (status === "sent") {
        return <h1>Thanks For your Feedback</h1>
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Send Feedback</h1>
                <textarea type="text" onChange={(e) => setMessages(e.target.value)} />
                <button type="submit" disabled={status === "sending"}>Send</button>
                {status === "sending" && <p>sending......</p>}
            </form>
        </>
    )
}

function sendMessages(text) {
    return new Promise(resolve => {
        setTimeout(resolve, 1500)
    })
}