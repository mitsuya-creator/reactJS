import React from "react";

export default function Form({status}){
  if(status === "success") return <h1>that's right</h1>
  return (
      <>
        <form>
          <textarea disabled={
            status === "submitting"
          } /> 
          <br/>
          <button disabled={
            status === "submitting" || status === "empty"
          }>submit</button>
          {status === "error" && <p style={{color: "red"}}> You got Error </p> }
        </form>
      </>
    )
}