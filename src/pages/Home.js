import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home" />
                <h2>React Base Foundation</h2>
                <ul className="menu">
                    <li><Link to="/transion-effect">Transtion Effect</Link></li>
                </ul>
            </Fragment>
        )
    }
}

export default withRouter(Home);
