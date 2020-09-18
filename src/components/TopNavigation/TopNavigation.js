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
                <nav className="navbar">
                    <ul className="menu">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/count">Count</NavLink></li>
                        <li><NavLink exact to="/persons">Persons</NavLink></li>
                        <li><NavLink exact to="/students">Students</NavLink></li>
                        <li><NavLink exact to="/basic-forms">Basic Form</NavLink></li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default TopNavigation;