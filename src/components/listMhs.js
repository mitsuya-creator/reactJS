import React from "react";
import { mhs } from "../utils/data";
import { imageSize } from "../utils/context";

export function ListImages() {
    return (
        <>
            <ul>
                {mhs.map(m => <li key={m.id}>
                    <span>{m.name}</span>
                    <img src={m.imgUrl} width={imageSize} height={imageSize} alt={m.name} />
                </li>)}
            </ul>
        </>
    )
}