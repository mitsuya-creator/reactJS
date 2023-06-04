import React from "react";
import ReactDOM from "react-dom/client";
import StateQueue from "./reactDev/stateQueue";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";

export default function App() {
  return (
    <>
      <StateQueue />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);