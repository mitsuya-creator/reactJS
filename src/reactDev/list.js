import React from "react";
import Card from "react-bootstrap/Card";
import mhs from "./data";


function ListSection({ position }) {
    const listItems = position.map(person => {
        return (
            <Card style={{ width: "20rem" }} className="card mx-5 my-3 d-flex justify-content-center p-4" key={person.id}>
                <Card.Img src={person.imgUrl} className="rounded-circle" />
                <Card.Title>{person.name}</Card.Title>
                <Card.Body>{person.position}</Card.Body>
                <Card.Text className="text-center">{person.quote}</Card.Text>
            </Card>
        )
    })
    return listItems;
}

function List({ special }) {
    const specialVar = mhs.filter(person => person.position === special);
    const everyOneVar = mhs.filter(person => person.position !== special);
    return (
        <>
            <h1>{special}</h1>
            <ListSection position={specialVar} />
            <h1>Everyone Else</h1>
            <ListSection position={everyOneVar} />
        </>
    )
}

export default List;