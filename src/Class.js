import React from 'react';


class Person extends React.Component{
  constructor(name){
    super();
    this.state = {name: name}
  }
  render(){
    return <h1>hello {this.state.name}</h1>;
  }
}

export default Person;