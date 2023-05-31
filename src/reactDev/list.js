import React from "react";
import mhs from "./data";


function List({ by }) {
    const leader = mhs.filter(person => person.position === by);
    const listItem = leader.map(person => {
        return (
            <div key={person.id}>
                <li>name: {person.name}, position: {person.position}</li>
            </div>
        )
    });
    return listItem;
}

export default List;