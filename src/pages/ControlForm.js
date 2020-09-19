import React, { Component, createRef, Fragment } from 'react';
import TextInput from '../components/TextInput/TextInput';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ControlForm extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            agree: false,
            errorsValues: {}
        };
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     // validate
    validateForm = () => {
        const errors = {};
        if(!this.state.name) {
            errors.name = 'Please Provide Your Name'
        }
        return {
            errors,
            isValid:Object.keys(errors).length === 0 // return a array of errors that means ['name','email','password','birthday,'gender']
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();

        const {isValid,errors} = this.validateForm();

        if(isValid) {
            // data capture
            const newData = {
                name: this.state.name
            };

            console.log(newData);
            // reset
            this.setState({
                name: '',
                agree: false,
                errorsValues: {}
            });
        }
        else {
            this.setState({
                errorsValues: errors
            })
        }
        
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Control Form" />
                <div className="container">
                    <h2>Control Form</h2>
                    <form onSubmit={this.onSubmitHandler}>
                    <div className="row justify-content-center">
                            <div className="col-md-6">
                                <TextInput 
                                    label="Name *" 
                                    placeholder="Enter Name" 
                                    id="name" 
                                    name="name" 
                                    value={this.state.name} 
                                    onChange={this.changeHandler} 
                                    error={this.state.errorsValues.name}
                                />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success" disabled={this.state.agree}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
};


export default ControlForm;
