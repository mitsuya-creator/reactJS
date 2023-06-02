import React from "react";
import { useState } from "react";
import mhs from "./data";


function Slide() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < mhs.length - 1;
    const handleNextBTN = () => {
        hasNext ? setIndex(index + 1) : setIndex(0);
        console.log(index);
    }
    const handlePrevBTN = () => {
        index === 0 ? setIndex(mhs.length - 1) : setIndex(index - 1);
        console.log(index);
    }
    const handleShowMoreBTN = () => {
        setShowMore(!showMore);
    }

    return (
        <>
            <button onClick={handleNextBTN}>Next</button>
            <button onClick={handlePrevBTN}>Prev</button>
            <span>{index} / {mhs.length - 1}</span>
            <img src={mhs[index].imgUrl} width={150} height={150} />
        </>
    )
}


export default Slide;