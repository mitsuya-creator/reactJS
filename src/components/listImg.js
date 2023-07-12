import React from "react";
import { useContext } from "react";
import { imageSizeContext } from "../utils/context"

export default function ListImage({ mhs }) {
    const imgSize = useContext(imageSizeContext)
    return (
        <>
            <img src={mhs.imgUrl} width={imgSize} height={imgSize} alt={mhs.name} />
        </>
    )
}