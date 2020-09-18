import React, { Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import { persons } from '../data/persons';

const PersonStyle= {
    display: 'block',
    maxWidth: '450px',
    border: '1px solid #000',
    padding: '15px 25px',
    margin: '15px auto',
    background: '#eee'
}

const SinglePerson = props => {
    const person= persons.filter(person=> person.id == props.match.params.personId);
    const {name,email,phone} = person[0];
    return (
        <Fragment>
            <TopNavigation title="Persons" />
            <div style={PersonStyle}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </Fragment>
    );
}

export default SinglePerson;