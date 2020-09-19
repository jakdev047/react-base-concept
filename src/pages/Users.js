import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class Users extends Component {
    render() {
        console.log(this.props.users);
        return (
            <Fragment>
                <TopNavigation title="Users" />
                <div className="container">
                    <h2>Users List</h2>
                </div>
            </Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

export default  connect(mapStateToProps)(Users);