import React from "react";
import {useState} from "react";

export default function Profile(){
  const [firstName,setFirstName] = useState("Mit");
  const [lastName,setLastName] = useState("Taka");
  const [isEditing,setIsEditing] = useState(false);
  
  return (
    <>
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>FirstName:
       {isEditing ? (<input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>) : (<b>{firstName}</b>)}
      </label>
      <br/>
      <label>LastName: 
        {isEditing ? (<input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>) : (<b>{lastName}</b>)}
      </label>
      <br/>
      <button type="submit">{isEditing ? "Save Profile" : "Edit Profile"}</button>
    <h1>Hello {firstName} {lastName}!</h1>
    </form>
    </>
    )
}