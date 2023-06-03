import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./reactDev/queue";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";

export default function App() {
  return (
    <>
      <Counter />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);