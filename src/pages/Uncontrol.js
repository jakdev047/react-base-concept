import React, { Component, createRef, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class Uncontrol extends Component {
    constructor(){
        super();
        this.name = createRef();
        this.email = createRef();
        this.phone = createRef();
    }
    onSubmitHandler = e => {
        e.preventDefault();

        // data capture
        let name = this.name.current.value;
        let email = this.email.current.value;
        let phone = this.phone.current.value;

        if( name == ' ' & email == ' ' & phone == ' ' ) {
            alert('Please Enter form fillup');
        }
        else {
            const newData = {};
            newData.id = new Date().getTime().toString();
            newData.name = name;
            newData.email = email
            newData.password = phone;
        
            console.log(newData);

            // reset field
            e.target.reset();
        }
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Uncontrol Form" />
                <div className="container">
                    <h2>Uncontrol Form</h2>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" ref={this.name} className="form-control" placeholder="Jubayer Alam Khan" />
                                </div>
                                <div className="form-group">
                                    <input type="email" ref={this.email} className="form-control" placeholder="shuvo047niter@gmail.com" />
                                </div>
                                <div className="form-group">
                                <   input type="text" ref={this.phone} className="form-control" placeholder="+88011112223333" />
                                </div>
                                <div className="form-group text-left">
                                <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
};

export default Uncontrol;
