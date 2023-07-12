import React from "react";
import { useReducer } from "react";
import TextField from "../components/chat";
import ContactsList from "../components/contactList";
import { messengerReducer, initialState } from "../utils/messengerReducer";

export default function App() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const contact = contacts.find(c => c.id === state.selectedId)
    let message = state.messages[state.selectedId];
    if (message === undefined) message = `hello ${contact.name}`
    console.log(contact)
    console.log(message)
    console.log(state.selectedId)
    const handleReceiver = selectedId => {
        dispatch({
            type: "selectedReceiver",
            contactId: selectedId
        })
    }
    return (
        <>
            <ContactsList ContactsList={contacts} selectedId={state.selectedId} handleReceiver={handleReceiver} />
            <TextField contact={contact} message={message} textMessage={dispatch} key={contact.id} />
        </>
    )
}


const contacts = [
    { id: 0, name: "Mitsuya", email: "mitsuya@code.net" },
    { id: 1, name: "Draken", email: "draken@code.net" },
    { id: 2, name: "Chifuyu", email: "chifuyu@code.net" }
]