import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Student extends Component {

    render() {
        const {name,email,phone} = this.props.student;
        return (
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                {this.props.children}
            </div>
        )
    }
};

// Student.propTypes = {
//     student: PropTypes.object.isRequired,
// };

export default Student;
