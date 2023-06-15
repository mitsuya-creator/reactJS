import React from "react";
import { useState } from "react";


export default function ListSnack() {
    const [listSnack, setListSnack] = useState([
        { id: 0, title: "Garuda O'corn" },
        { id: 1, title: "Twist Roasted Corn" },
        { id: 2, title: "Chitato BBQ" }
    ])
    const [selectedId, setSelectedId] = useState(0);
    const handleChange = (e, id) => {
        setListSnack(listSnack.map(items => {
            if (items.id === id) {
                return { ...items, title: e.target.value }
            } else {
                return items;
            }
        }))
    }
    const selectedItems = listSnack.find(items => items.id === selectedId);
    return (
        <>
            <ul>
                {listSnack.map(list => <li key={list.id}><input type="text" value={list.title} onChange={(e) => handleChange(e, list.id)} /><button type="button" onClick={() => setSelectedId(list.id)}>choose</button></li>)}
            </ul>
            <p>Your Picked {selectedItems.title}.</p>
        </>
    )
}