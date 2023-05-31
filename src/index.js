import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./reactDev/Props";
import AEU from "./assets/AsEverythingUnfolds.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  return (
    <>
      <Profile>
        <img src={AEU} width="50px" height="50px"/>
      </Profile>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);