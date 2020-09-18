import React, { Component, Fragment } from 'react';
import Child from '../components/Child/Child';

class Parent extends Component {
    constructor(props) {
        super(props)
        console.log('Parent Component Constructor')
    }

    UNSAFE_componentWillMount(){
        console.log('Parent Component componentWillMount')
    }

    componentDidMount() {
        console.log('Parent Component componentDidMount')
    }

    render() {
        console.log('Parent Component render')
        return (
            <Fragment>
                <h2>Parent Component Lifecycle</h2>
                <Child />
            </Fragment>
        )
    }
}

export default Parent;