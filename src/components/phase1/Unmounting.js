import React from "react";

class Unmounting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favCol: "Gray",
            show: true
        }
    }
    delHeader = () => {
        this.setState({ show: false });
    }
    createHeader = () => {
        this.setState({ show: true });
    }
    render() {
        let header, textButton;
        if (this.state.show) {
            header = <Header />
        }
        if (this.state.show) {
            textButton = "Delete Header";
        } else {
            textButton = "Show Header";
        }
        return (
            <>
                {header}
                <p>my favorite color is {this.state.favCol}</p>
                <button onClick={this.state.show ? this.delHeader : this.createHeader}>{textButton}</button>
            </>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <h1>Unmounting components</h1>
        )
    }
}

export default Unmounting;
