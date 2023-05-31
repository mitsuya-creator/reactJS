import React from "react";
import ReactDOM from "react-dom/client";
import List from "./reactDev/list";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <List by="leader" />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);