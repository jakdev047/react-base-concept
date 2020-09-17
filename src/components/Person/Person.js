import React, {  } from 'react';
import PropTypes from 'prop-types';

const PersonStyle= {
    display: 'block',
    maxWidth: '450px',
    border: '1px solid #000',
    padding: '15px 25px',
    margin: '15px auto',
    background: '#eee'
}
const ButonStyle= {
    display: 'block',
    border: '1px solid #000',
    padding: '15px 25px',
    background: '#eee',
    margin: '10px auto',
    cursor: 'pointer'
}

const Person = (props) => {
    const {name,email,phone,id} = props.person;
    return (
        <div style={PersonStyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <button style={ButonStyle} onClick={()=>props.delete(id)}>Delete</button> <br/>
            <input type="text" value={name} onChange={props.changeHandler}/>
            <p>{props.children}</p>
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
