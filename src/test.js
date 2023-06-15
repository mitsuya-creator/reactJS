import React from "react";
import { useState } from "react";
import MitsuyaImg from "./assets/Mitsuya.jpeg";
import "./css/style.css"

export default function Img() {
  const [active, setActive] = useState(false);
  let bgClass;
  if (active) {
    bgClass = "div bg-purple";
  } else {
    bgClass = "div";
  }
  const handleDivClick = () => {
    setActive(true);
  }
  return (
    <div style={{ width: "500px", height: "500px" }} className={bgClass} onClick={handleDivClick}>
      <img src={MitsuyaImg} width={250} height={250} alt="profile-mitsuya" className="border-purple" onClick={(e) => {
        e.stopPropagation();
        setActive(false)
      }} />
    </div>
  )
}