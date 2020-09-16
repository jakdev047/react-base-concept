import React, {  } from 'react';
import PropTypes from 'prop-types';

const Person = ({name,email,phone}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

Person.defaultProps = {
    name: 'Demo Name',
    email: 'demo@email.com',
    phone: '000-0000-000'
};

Person.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Person;
