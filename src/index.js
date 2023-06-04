import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./reactDev/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";

export default function App() {
  return (
    <>
      <Form />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);