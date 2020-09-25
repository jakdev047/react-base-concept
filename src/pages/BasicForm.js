import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class BasicForm extends Component {

    state = {
        name: '____'
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <TopNavigation title="Forms" />
                    <div className="container">
                        <h2> Basic Form</h2>
                        <input type="text" name="name" onChange={this.changeHandler}/>
                        <h4> Name: {this.state.name}</h4>
                        <h3>There are two types form work</h3>
                        <ul className="menu">
                            <li><Link to='/uncontrol-form'>Uncontrole Form</Link></li>
                            <li><Link to='/control-form'>Controle Form</Link></li>
                            <li><Link to="/formik-form">Formik Form</Link></li>
                            <li><Link to="/formik-component">Formik Component</Link></li>
                            <li><Link to="/formik-project">Project</Link></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BasicForm;
