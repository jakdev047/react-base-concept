import React, { Component, Fragment } from 'react';

class BasicForm extends Component {

    state = {
        name: '____'
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h2> Basic Form</h2>
                    <input type="text" name="name" onChange={this.changeHandler}/>
                    <h4> Name: {this.state.name}</h4>
                </div>
            </Fragment>
        )
    }
}

export default BasicForm;
