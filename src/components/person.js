import { toBeRequired } from "@testing-library/jest-dom/matchers";
import React from "react";

class Person extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <h1>Hello I am {this.props.name}, My age {this.props.age} years</h1>
    }
}
export default Person;