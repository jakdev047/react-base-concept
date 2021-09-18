import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ComponentsModule extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <TopNavigation title="Components" />
                    <div className="container">
                        <h2> Components </h2>
                        <ul className="menu">
                            <li><Link to='/all-input-fields'>All Input Field</Link></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ComponentsModule;
