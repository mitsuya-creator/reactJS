import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class UpdatingComponents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favcol: 'gray'
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('before').innerHTML = `components before update ${prevState.favcol}`;
    }
    componentDidUpdate() {
        document.getElementById('after').innerHTML = `components after update ${this.state.favcol}`;
    }
    changeColor = () => {
        this.setState({ favcol: 'blue' })
    }
    render() {
        return (
            <>
                <h1>Upating Components</h1>
                <h3>My color Favorite is {this.state.favcol}</h3>
                <h3 id='before'></h3>
                <h3 id='after'></h3>
                <Button variant='dark' onClick={this.changeColor}>changeColor</Button>
            </>
        )
    }
}


export default UpdatingComponents;