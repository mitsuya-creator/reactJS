import React from "react";
import {useState} from "react";

function Comp1(){
  const [user, setUser] = useState("Mitsuya");
  return (
    <>
      <h1>{`Hello ${user}`}</h1>
      <Comp2 user={user} />
    </>
    )
}
function Comp2({user}){
  return (
    <>
    <h1>Comp2</h1>
    <Comp3 user={user} />
    </>
    )
}

function Comp3({user}){
  return (
    <h1>{`hello again ${user}`}</h1>
    )
}

export default Comp1;