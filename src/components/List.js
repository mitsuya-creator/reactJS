import React from "react";

function WordList(props){
  return <li> i am {props.name} </li>;
}

function List(){
  const mhs = ["Mitsuya","Draken","Hina"];
    return (
    <div>
      <ul>
        {mhs.map( x => <WordList name={x} />)}
      </ul>
    </div>
    );
}

export {List, WordList};
