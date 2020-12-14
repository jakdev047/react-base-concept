import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <TopNavigation title="Projects" />
                    <div className="container">
                        <h2> All Projects </h2>
                        <ul className="menu">
                            <li><Link to='/js-to-excel'>JS to Excel</Link></li>
                            <li><Link to='/excel-to-js'>Excel to JS</Link></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Projects;
