import React, { Component, Fragment } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
        console.log('Child Component Constructor')
    }

    UNSAFE_componentWillMount(){
        console.log('Child Component componentWillMount')
    }

    componentDidMount() {
        console.log('Child Component componentDidMount')
    }

    render() {
        console.log('Child Component render')
        return (
            <Fragment>
                <h2>Child Component Lifecycle</h2>
            </Fragment>
        )
    }
}

export default Child;