import React, { Component, Fragment } from 'react';

import Student from '../components/Student/Student';

class Students extends Component {
    render() {
        return (
            <Fragment>
                <Student name="Rahim" email="rahim@email.com" phone="123-444-555" />
                <Student name="Karim" email="karim@email.com" phone="123-444-555" />
                <Student name="Rahat" email="Rahat@email.com" phone="123-444-555" />
                <Student name="Jamal" email="Jamal@email.com" phone="123-444-555" />
                <Student> Student Children </Student>
            </Fragment>
        )
    }
}

export default Students;
