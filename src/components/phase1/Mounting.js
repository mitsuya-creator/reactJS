import React from "react";

class MountingComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'gray'
        }
    }
    changeColor = () => this.setState({ favoriteColor: 'blue' });
    render() {
        return (
            <>
                <h1>My favorit color is {this.state.favoriteColor} </h1>
                <button onClick={this.changeColor}>changeColor</button>
            </>

        )
    }
}

export default MountingComponents;