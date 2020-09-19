import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import User from '../components/User/User';
import { fetchUsers,deleteUser } from '../data/actions/user';

class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Users" />
                <div className="container">
                    <h2>Users List</h2>
                    {
                        this.props.usersData.loading ? (<h2>Loading</h2>) : (
                            this.props.usersData.error ? (<h2>{this.props.usersData.error}</h2>) :
                            this.props.usersData.users.map(user=> <User key={user.id} user={user} deleteUser={this.props.deleteUser} /> )
                        )
                    }
                </div>
            </Fragment>
        )
    }
};


const mapStateToProps = state => {
    return {
        usersData: state.users
    }
};

export default  connect(mapStateToProps,{fetchUsers,deleteUser})(Users);