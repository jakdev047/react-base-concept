import React, { Component } from 'react';

import Person from '../components/Person/Person';

class Persons extends Component {

    state = {
        persons:[
            {id:1, name:"Rahim", email:"rahim@email.com", phone:"123-444-555"},
            {id:2, name:"Karim", email:"karim@email.com", phone:"123-444-555"},
            {id:3, name:"Rahat", email:"Rahat@email.com", phone:"123-444-555"},
            {id:4, name:"Jamal", email:"Jamal@email.com", phone:"123-444-555"}
        ]
    }

    deleteBookItem = (id) => {
        const persons = [...this.state.persons].filter(person=> person.id !== id);
        this.setState({
            persons
        });
    }

    render() {
        const {persons} = this.state;
        return (
            <div>
                {
                    persons.map( person => <Person key={person.id} person={person} delete={this.deleteBookItem} />)
                }
            </div>
    )
    }
}

export default Persons;
