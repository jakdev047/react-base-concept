import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

class TopNavigation extends Component {
    state = {
        pageTitle: this.props.title
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <div className="container">
                    <nav className="navbar justify-content-center">
                        <ul className="menu">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink exact to="/users">Users</NavLink></li>
                            <li><NavLink exact to="/count">Count</NavLink></li>
                            <li><NavLink exact to="/persons">Persons</NavLink></li>
                            <li><NavLink exact to="/students">Students</NavLink></li>
                            <li><NavLink exact to="/forms">Form</NavLink></li>
                            <li><NavLink exact to="/function-helper">Function Helper</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </Fragment>
        )
    }
}

export default TopNavigation;