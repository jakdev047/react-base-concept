import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const FunctionHelper = () => {
        return (
            <Fragment>
                <div>
                    <TopNavigation title="Function Helper" />
                    <div className="container">
                        <h2> Function Helper</h2>
                        <ul className="menu">
                            <li><Link to='/reduce-helper'>Reduce Helper</Link></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
}

export default FunctionHelper;
