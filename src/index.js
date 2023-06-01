import React from "react";
import ReactDOM from "react-dom/client";
import List from "./reactDev/list";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";

export default function App() {
  return (
    <>
      <List special="Member" />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);