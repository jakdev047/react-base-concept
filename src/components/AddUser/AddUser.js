import React, { Component, Fragment } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import { addUserRequest } from '../../data/actions/user';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 :  '500px'
    }
};

Modal.setAppElement('#root');

class AddUser extends Component {

    state = {
        name: '',
        email: '',
        street: '',
        suite: '',
        city: '',
        errorsValues: {},
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    // validate
    validateForm = () => {
        const errors = {};
        if(!this.state.name) {
            errors.name = 'Please Provide Your Name'
        }
        if(!this.state.email) {
            errors.email = 'Please Provide Your Email'
        }
        return {
            errors,
            isValid:Object.keys(errors).length === 0 // return a array of errors that means ['name','email']
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();
        const {isValid,errors} = this.validateForm();

        if(isValid) {
            // data capture
            const newData = {
                id: new Date().getTime().toString(),
                name: this.state.name,
                email: this.state.email,
                address: {
                    street: this.state.street,
                    suite: this.state.suite,
                    city: this.state.city,
                }
            };
            this.props.addUserRequest(newData);
            this.props.close();
            // reset
            this.setState({
                name: '',
                email: '',
                street: '',
                suite: '',
                city: '',
                errorsValues: {},
            });
        }
        else {
            this.setState({
                errorsValues: errors
            })
        }
    };

    render() {
        return (
            <Fragment>
                <Modal style={customStyles} isOpen={this.props.isOpen} onRequestClose={()=>this.props.close()} contentLabel="Add User">
                    <form  onSubmit={this.onSubmitHandler}>
                        <TextInput 
                            label="Name *" 
                            placeholder="Enter Name" 
                            id="name" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.changeHandler} 
                            error={this.state.errorsValues.name}
                        />
                        <TextInput 
                            label="Email *" 
                            placeholder="Enter Email" 
                            id="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.changeHandler} 
                            error={this.state.errorsValues.email}
                        />
                        <TextInput 
                            label="Street" 
                            placeholder="Enter Street" 
                            id="street" 
                            name="street" 
                            value={this.state.street} 
                            onChange={this.changeHandler} 
                        />
                        <TextInput 
                            label="Suit" 
                            placeholder="Enter Suit" 
                            id="suite" 
                            name="suite" 
                            value={this.state.suite} 
                            onChange={this.changeHandler} 
                        />
                        <TextInput 
                            label="City" 
                            placeholder="Enter City" 
                            id="city" 
                            name="city" 
                            value={this.state.city} 
                            onChange={this.changeHandler} 
                        />
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </Modal>
            </Fragment>
        )
    }
};

export default connect(null,{addUserRequest})(AddUser);