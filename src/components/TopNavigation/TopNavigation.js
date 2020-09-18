import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class TopNavigation extends Component {
    state = {
        pageTitle: this.props.title
    }
    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/count">Count</Link></li>
                    <li><Link to="/persons">Persons</Link></li>
                    <li><Link to="/students">Students</Link></li>
                    <li><Link to="/basic-forms">Basic Form</Link></li>
                </ul>
            </Fragment>
        )
    }
}

export default TopNavigation;