import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Person extends Component {
    render() {
        const {name,email,phone,id} = this.props.person;
        return (
            <div style={PersonStyle}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{phone}</p>
                <Link to={`/single-person/${id}/${name}`} style={ButonStyle} >Details</Link> <br/>
                {/* <button style={ButonStyle} onClick={()=>this.props.onSelectedPerson(this.props.person)}>Details</button> <br/> */}
                <button style={ButonStyle} onClick={()=>this.props.delete(id)}>Delete</button> <br/>
                <input type="text" value={name} onChange={this.props.changeHandler}/>
                <p>{this.props.children}</p>
            </div>
        );
    }
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
