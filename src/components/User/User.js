import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PersonStyle= {
    display: 'block',
    maxWidth: '450px',
    border: '1px solid #000',
    padding: '15px 25px',
    margin: '15px auto',
    background: '#eee'
}
const ButonStyle= {
    display: 'inline-block',
    border: '1px solid #000',
    padding: '15px 25px',
    background: '#eee',
    margin: '10px auto',
    cursor: 'pointer'
}

class User extends Component {
    render() {
        const {name,email,address} = this.props.user;
        return (
            <div style={PersonStyle}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{address.street}, {address.suite}, {address.city}</p>
                <Link to={`/`} style={ButonStyle} >Details</Link> <br/>
                <button style={ButonStyle}>Delete</button> <br/>
            </div>
        );
    }
};

export default User;
