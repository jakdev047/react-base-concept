import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../../data/actions/user';
import UpdateUser from '../UpdateUser/UpdateUser';

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

    state = {
        updateModalOpen: false
    }

    // for update modal
    openUpdateModal = () => {
        this.setState({
            updateModalOpen: true
        })
    };

    closeUpdateModal = () => {
        this.setState({
            updateModalOpen: false
        })
    };

    render() {
        const {name,email,address,id} = this.props.user;
        return (
            <div style={PersonStyle}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{address.street}, {address.suite}, {address.city}</p>
                <button style={ButonStyle} onClick={this.openUpdateModal}>Edit</button> <br/>
                <button style={ButonStyle} onClick={()=>this.props.deleteUser(id)}>Delete</button> <br/>
                <UpdateUser isOpen={this.state.updateModalOpen} close={this.closeUpdateModal} user={this.props.user}/>
            </div>
        );
    }
};



export default connect( null,{})(User);
