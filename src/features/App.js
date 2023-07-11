import React from "react";
import { useReducer } from "react";
import TextField from "../components/chat";
import ContactsList from "../components/contactList";
import { messengerReducer, initialState } from "../utils/messengerReducer";

export default function App() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.messages;
    const contact = contacts.find(c => c.id === state.selectedId)
    console.log(contact)
    const handleReceiver = selectedId => {
        dispatch({
            type: "selectedReceiver",
            selectedId: selectedId
        })
    }
    const handleTextMessage = e => {
        dispatch({
            type: "edited_messages",
            message: e.target.value
        })
        console.log(e.target.value)
    }
    return (
        <>
            <ContactsList ContactsList={contacts} selectedId={state.selectedId} handleReceiver={handleReceiver} />
            <TextField contact={contact} messages={message} textMessage={handleTextMessage} key={contact.id} />
        </>
    )
}


const contacts = [
    { id: 0, name: "Mitsuya", email: "mitsuya@code.net" },
    { id: 1, name: "Draken", email: "draken@code.net" },
    { id: 2, name: "Chifuyu", email: "chifuyu@code.net" }
]