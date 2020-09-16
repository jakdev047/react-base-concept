import React, { Component, Fragment } from 'react';

import Person from '../components/Person/Person';

class Persons extends Component {
    render() {
        return (
            <Fragment>
                <Person name="Rahim" email="rahim@email.com" phone="123-444-555" />
                <Person name="Karim" email="karim@email.com" phone="123-444-555" />
                <Person name="Rahat" email="Rahat@email.com" phone="123-444-555" />
                <Person name="Jamal" email="Jamal@email.com" phone="123-444-555" />
                <Person> Person Children </Person>
            </Fragment>
        )
    }
}

export default Persons;
