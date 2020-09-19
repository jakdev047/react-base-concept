import React, { Component, Fragment } from 'react';
import RadioBoxForm from '../components/RadioBoxForm/RadioBoxForm';
import TextInput from '../components/TextInput/TextInput';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ControlForm extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            birthday: '',
            country: '',
            gender: '',
            skills:[],
            agree: false,
            errorsValues: {}
        };
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSkills = e => {
        if(e.target.checked) {
            this.setState({
                skills: [...this.state.skills, e.target.value]
            });
        }
        else {
            const newSkill = this.state.skills.filter(skill=> skill !== e.target.value);
            this.setState({
                skills: newSkill
            });
        }
    }

     // validate
    validateForm = () => {
        const errors = {};
        if(!this.state.name) {
            errors.name = 'Please Provide Your Name'
        }
        if(!this.state.birthday) {
            errors.birthday = 'Please Provide Your Birthday'
        }
        if(!this.state.country) {
            errors.country = 'Please Provide Your Country'
        }
        if(!this.state.gender) {
            errors.gender = 'Please Provide Your Gender'
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
                name: this.state.name,
                birthday: this.state.birthday,
                country: this.state.country,
                gender: this.state.gender,
                skills: this.state.skills,
                agree: this.state.agree
            };

            console.log(newData);
            // reset
            this.setState({
                name: '',
                birthday: '',
                country: '',
                gender: '',
                skills:[],
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

                                <TextInput 
                                    label="date *" 
                                    className="form-control" 
                                    type="date" 
                                    id="birthday" 
                                    name="birthday" 
                                    value={this.state.birthday} 
                                    onChange={this.changeHandler}  
                                    error={this.state.errorsValues.birthday}
                                />

                                <div className="form-group">
                                    <select 
                                        className={this.state.errorsValues.country ? 'form-control is-invalid' : 'form-control'} 
                                        name="country" 
                                        value={this.state.country} 
                                        onChange={this.changeHandler}
                                    >
                                        <option >Select Country</option>
                                        <option value="Ban">Bnagladesh</option>
                                        <option value="Bhu">Bhutan</option>
                                        <option value="In">India</option>
                                        <option value="Mal">Maldhives</option>
                                        <option value="Nep">Nepal</option>
                                        <option value="Pak">Pakistan</option>
                                        <option value="Sri">Srilanka</option>
                                    </select>
                                    {this.state.errorsValues.country && <div className="invalid-feedback">{this.state.errorsValues.country}</div>}
                                </div>

                                <div>
                                    <RadioBoxForm name="gender" value="Male" onChange={this.changeHandler}>Male</RadioBoxForm>
                                    <RadioBoxForm name="gender" value="Female" onChange={this.changeHandler}>Female</RadioBoxForm>
                                    { 
                                        this.state.errorsValues.gender && <div className="invalid-feedback" style={{display:'block'}}>{this.state.errorsValues.gender}</div>
                                    }
                                </div>

                                <div className="form-group text-left">
                                    <h5>Skills</h5>

                                    <input className="form-check-input" type="checkbox" name="skills" value='HTML5' checked={this.state.skills.includes('HTML5')} 
                                    onChange={(e) => this.handleSkills(e)}/>  HTML5   <br/>
                                    <input className="form-check-input" type="checkbox" name="skills" value='CSS3' checked={this.state.skills.includes('CSS3')} 
                                    onChange={(e) => this.handleSkills(e)} /> CSS3  <br/>
                                    <input className="form-check-input" type="checkbox" name="skills" value='JS' checked={this.state.skills.includes('JS')} 
                                    onChange={(e) => this.handleSkills(e)} /> JS   <br/>
                                    <input className="form-check-input" type="checkbox" name="skills" value='React' checked={this.state.skills.includes('React')} 
                                    onChange={(e) => this.handleSkills(e)} /> React <br/>
                                </div>

                                <div className="form-group">
                                    <input className="form-check-input" type="checkbox" name="agree"  checked={this.state.agree} onChange={this.changeHandler} /> I agree to all terms & condition
                                </div>

                                {/* <CheckkboxForm name="agree" checked={this.state.agree} onChange={this.changeHandler}>
                                    I agree to all terms & condition
                                </CheckkboxForm> */}

                                <div className="form-group">
                                    <button type="submit" className="btn btn-success" disabled={!this.state.agree}>Submit</button>
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
