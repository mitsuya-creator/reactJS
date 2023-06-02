import React from "react";
import ReactDOM from "react-dom/client";
import Time from "./reactDev/renderCommit";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";

export default function App() {
  return (
    <>
      <Time />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);