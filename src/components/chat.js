import React from "react";

export default function TextField({ contact, message, textMessage }) {
    return (
        <>
            <section>
                <textarea
                    value={message}
                    placeholder={"chat to " + contact.name}
                    onChange={e => textMessage({
                        type: "edited_messages",
                        message: e.target.value
                    })}
                />
                <br />
                <button type="button">send to {contact.email}</button>
            </section>
        </>
    )
}