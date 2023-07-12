import { Reac, useContext } from "react";

export default function ListImage({ mhs }) {
    return (
        <>
            <img src={mhs.imgUrl} width={100} height={100} alt={mhs.name} />
        </>
    )
}