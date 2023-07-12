import React from "react";
import { mhs } from "../utils/data";
import ListName from "./listName";
import ListImage from "./listImg"

export function ListImages() {
    return (
        <>
            <ul>
                {mhs.map(m => <li key={m.id}>
                    <ListName mhs={m} />
                    <ListImage mhs={m} />
                </li>)}
            </ul>
        </>
    )
}