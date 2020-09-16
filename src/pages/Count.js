import React, { Component, Fragment } from 'react';

class Count extends Component {

    state = {
        count: 0
    }

    increment () {
        this.setState({
            count:this.state.count +1
        });
    }

    decrement () {
        this.setState({
            count:this.state.count - 1
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h2>Count {this.state.count}</h2>
                    <button type="button" onClick={()=>this.increment()}> Increment </button> | 
                    <button type="button" onClick={()=>this.decrement()}> Decrement </button> 
                </div>
            </Fragment>
        )
    }
}

export default Count;
