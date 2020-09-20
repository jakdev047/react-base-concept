import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AddUser from '../components/AddUser/AddUser';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import User from '../components/User/User';
import { fetchUsers,deleteUser } from '../data/actions/user';

class Users extends Component {

    state = {
        createModalOpen: false
    }

    openCreateModal = () => {
        this.setState({
            createModalOpen: true
        })
    };

    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        })
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Users" />
                <div className="container">
                    <h2>Users List</h2>
                    <div>
                        <button className="btn btn-success" onClick={this.openCreateModal}>Add User</button>
                        <AddUser isOpen={this.state.createModalOpen} close={this.closeCreateModal}/>
                    </div>
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