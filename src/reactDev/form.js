import React from "react";
import {useState} from "react";
import mitsuyaBirth from "./objectNested";
import mhs from "./data";

export default function Form(){
  const mitsuya = mhs[0];
  mitsuya.details = mitsuyaBirth;
  const [name,setName] = useState(mitsuya.name);
  return 
}