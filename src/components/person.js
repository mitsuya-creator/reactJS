import React from "react";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    delContructor = () => {
        return this.setState({
            show: false
        })
    }
    render() {
        let header;
        if (this.state.show) {
            header = <AlertDel />
        }
        return (
            <div>
                {header}
                <Button onClick={this.delContructor} variant='dark'>Draken</Button>
            </div>
        )
    }
}

class AlertDel extends React.Component {
    componentWillUnmount() {
        alert('Componen Hello will be remove');
    }
    render() {
        return <h1>Hello</h1>
    }
}

export default Person;