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

    changeHandler = (e,index) => {
        const person = {...this.state.persons[index]};
        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[index] = person;
        this.setState({
            persons
        })
        console.log(person.name)
    }

    render() {
        const {persons} = this.state;
        return (
            <div>
                {
                    persons.map( (person,index) => <Person key={person.id} person={person} delete={this.deleteBookItem} changeHandler={(e)=>this.changeHandler(e,index)} />)
                }
            </div>
    )
    }
}

export default Persons;
