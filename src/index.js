import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./reactDev/Props";
import AEU from "./assets/AsEverythingUnfolds.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  return (
    <>
      <Profile person={{
        imgUrl: AEU,
        title: "As Everything Unfolds",
        description: "Band Heavy Metal From England"
      }}/>
      <Profile person={{
        imgUrl: AEU,
        title: "As Everything Unfolds",
        description: "Band Heavy Metal From England"
      }}/>
      <Profile person={{
        imgUrl: AEU,
        title: "As Everything Unfolds",
        description: "Band Heavy Metal From England"
      }}/>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);