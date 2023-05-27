import React from "react";

function WordList(props) {
  return <li> i am {props.name} </li>;
}

function List() {
  const mhs = [
    { id: 0, name: "Mitsuya" },
    { id: 1, name: "Draken" },
    { id: 3, name: "Hina" }

  ];
  return (
    <div>
      <ul>
        {mhs.map(x => <WordList key={x.id} name={x.name} />)}
      </ul>
    </div>
  );
}

export { List, WordList };
