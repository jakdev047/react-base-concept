import React from 'react';
import { ReduceMethod } from '../components/ReduceMethod/ReduceMethod';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const ReduceHelper = () => {
    return (
        <div>
            <TopNavigation title="Reduce Helper" />
            <div className="container">
                <h2> Reduce Helper</h2>
                <ReduceMethod />
            </div>
        </div>
    )
};

export default ReduceHelper;
