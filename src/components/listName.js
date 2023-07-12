import React from "react";
import ListImage from "./listImg";

export default function listName({ mhs }) {
    return (
        <>
            <span>{mhs.name}</span>
            <ListImage mhs={mhs} />
        </>
    )
}