import { toBeRequired } from "@testing-library/jest-dom/matchers";
import React from "react";

class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Mitsuya',
            age: 22,
            edu: 'High School',
            colorFav: 'gray'
        }
    }
    changeName = () => {
        this.setState({
            name: 'Draken',
            age: 19,
            edu: 'High School',
            colorFav: 'blue'
        });
    }
    render() {
        return (
            <div>
                <h1>Introduction</h1>
                <p>
                    Hello My name is {this.state.name},
                    my old {this.state.age},
                    i have studied at {this.state.edu},
                    my color favorite is {this.state.colorFav} because the world in {this.state.colorFav == 'gray' ? 'grayscasle Now' : 'the blue is sky'}.
                </p>
                <button type='button' onClick={this.changeName}>Draken</button>
            </div>
        )
    }
}
export default Person;