import React from "react";

export default function TextField({ contact, messages, textMessage }) {
    return (
        <>
            <section>
                <textarea
                    value={messages}
                    placeholder={"chat to " + contact.name}
                    onChange={e => textMessage(e)}
                />
                <br />
                <button type="button">send to {contact.email}</button>
            </section>
        </>
    )
}