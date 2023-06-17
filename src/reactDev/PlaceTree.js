import React from "react";

export default function PlaceTree({ id, parentId, placeById, onCompleted }) {
    const place = placeById[id];
    const childsId = place.childs;
    return (
        <>
            <li>
                <span>
                    {place.title}
                </span>
                <button onClick={() => onCompleted(id, parentId)}>Completed</button>
                {childsId.length > 0 &&
                    <ol>
                        {childsId.map(child => <PlaceTree key={child} id={child} parentId={id} placeById={placeById} onCompleted={onCompleted} />)}
                    </ol>
                }
            </li>
        </>
    )
}