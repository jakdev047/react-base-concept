import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';

// images
import triangleImg from "../assets/images/triangle.png";


class Home extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home" />
                <div className="home-section">
                    <h2>React Base Foundation</h2>
                    <ul className="menu">
                        <li><Link to="/transion-effect">Transtion Effect</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                    </ul>
                    <div class="rotate-animation">
                        <img src={triangleImg} alt="effects"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Home);
