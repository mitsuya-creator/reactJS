import React from "react";

function Car(props) {
    return <h1>I am Car {props.model.type}</h1>
}

function Model(){
  const car = {name: "Mustang", type: "Sport"}
  return (
    <div>
    <Car model={car} />
    </div>
    )
}
export {Car, Model};