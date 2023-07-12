import React from "react";
import { ListImages } from "../components/listMhs";
import { imageSizeContext } from "../utils/context";
import { useState } from "react";

export default function App() {
    const [large, setLarge] = useState(false);
    const imgSize = large ? 1500 : 100;
    return (
        <>
            <imageSizeContext.Provider
                value={imgSize} >
                <input type="checkbox" onClick={() => setLarge(!large)} />
                <ListImages />
            </imageSizeContext.Provider>

        </>
    )
}