import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Student extends Component {

    constructor(props){
        super(props)
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    };

    render() {
        const {name,email,phone,children} = this.props;
        return (
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{children}</p>
            </div>
        )
    }
};

export default Student;
