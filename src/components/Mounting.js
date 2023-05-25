import React from "react";

class MountingComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'gray'
        }
    }
    render() {
        return (
            <h1>My favorit color is {this.state.favoriteColor} </h1>
        )
    }
}

export default MountingComponents;