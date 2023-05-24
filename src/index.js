import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import Person from "./person";

function Mitsuya() {
  return <h1>Hello Mitsuya</h1>
} function Draken() {
  return (
    <>
      <h2> Hello Draken</h2 >
      <Mitsuya />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Draken />);