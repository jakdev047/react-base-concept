import React, { Component, Fragment } from 'react';
import CountBtn from '../components/CountBtn';

class Count extends Component {

    state = {
        count: 0
    }

    increment = (stepping) => {
        this.setState({
            count:this.state.count + stepping
        });
    }

    decrement = (stepping) => {
        this.setState({
            count:this.state.count - stepping
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h2>Count {this.state.count}</h2>
                    <CountBtn increment={this.increment} decrement={this.decrement} />
                </div>
            </Fragment>
        )
    }
}

export default Count;
