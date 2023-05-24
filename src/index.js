<<<<<<< HEAD
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
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 928e83e (Initialize project using Create React App)
