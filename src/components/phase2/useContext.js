import React from "react";
import {useState, createContext, useContext} from "react";

const UserContext = createContext();
function Comp1(){
  const [user, setUser] = useState("Mitsuya");
  return (
    <>
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Comp2 user={user} />
     </UserContext.Provider>
    </>
    )
}
function Comp2(){
  const user = useContext(UserContext);
  return (
    <>
    <h1>Comp2 {user}</h1>
    <Comp3/>
    </>
    )
}

function Comp3(){
  const user = useContext(UserContext);
  return (
    <h1>{`hello again ${user}`}</h1>
    )
}

export default Comp1;