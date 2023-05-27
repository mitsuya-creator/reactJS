import React from "react";

function Car(props) {
    return <h1>I am Car {props.model}</h1>
}

class Model extends React.Component{
     render(){
     return (
       <div>
        <Car model="Mustang" />
        <h1>type Sports</h1>
       </div>
       );
     }
}
export {Car, Model};