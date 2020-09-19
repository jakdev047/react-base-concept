import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home" />
                <h2>React Base Foundation</h2>
            </Fragment>
        )
    }
}

export default withRouter(Home);
