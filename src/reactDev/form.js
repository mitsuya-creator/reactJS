import React from "react";
import { useState } from "react";
import mitsuyaBirth from "./objectNested";
import mhs from "./data";

export default function Form() {
  const mitsuya = mhs[0];
  mitsuya.details = mitsuyaBirth;
  const [person, setPerson] = useState(mitsuya);
  const handleName = e => {
    setPerson({ ...person, name: e.target.value })
  }
  const handlePosition = e => {
    setPerson({ ...person, position: e.target.value })
  }
  const handleQuote = e => {
    setPerson({ ...person, quote: e.target.value })
  }
  const handleDate = e => {
    setPerson({ ...person, details: { ...person.details, date: e.target.value } })
  }
  return (
    <>
      <p>
        <label>
          Name:
          <input type="text" value={person.name} onChange={handleName} />
        </label>
      </p>
      <p>
        <label>
          Position:
          <input type="text" value={person.position} onChange={handlePosition} />
        </label>
      </p>
      <p>
        <label>
          Quote:
          <input type="text" value={person.quote} onChange={handleQuote} />
        </label>
      </p>
      <p>
        <label>
          date:
          <input type="text" value={person.details.date} onChange={handleDate} />
        </label>
      </p>
      <h6>Name: {person.name}</h6>
      <h6>position: {person.position}</h6>
      <h6>quote: {person.quote}</h6>
      <h6>date: {person.details.date}</h6>

    </>
  )
}