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
                        selectedId: contact.id,
                        message: e.target.value
                    })}
                />
                <br />
                <button type="button" onClick={() => {
                    alert(`sending "${message}" to ${contact.email}`);
                    textMessage({
                        type: "sending_messages",
                        message: ''
                    })
                }}>send to {contact.email}</button>
            </section>
        </>
    )
}