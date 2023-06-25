import React, { useState } from "react";
import mhs from "./data";

export default function Carousel() {
    const [index, setIndex] = useState(0);
    return (
        <>
            <button type="button" onClick={() => {
                if (index === mhs.length - 1) {
                    setIndex(0)
                } else {
                    setIndex(index => index + 1)
                }
            }}>Next</button>
            <h1>Image {index + 1} of {mhs.length}</h1>
            <img src={mhs[index].imgUrl} alt={"img-" + index} width={100} height={100} />
            <p>{mhs[index].name}</p>
        </>
    )
}