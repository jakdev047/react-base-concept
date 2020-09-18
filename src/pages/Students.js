import React, { Component, Fragment } from 'react';

import Student from '../components/Student/Student';
import TopNavigation from '../components/TopNavigation/TopNavigation';


class Students extends Component {
    state = {
        students:[
            {id:1, name:"Rahim", email:"rahim@email.com", phone:"123-444-555"},
            {id:2, name:"Karim", email:"karim@email.com", phone:"123-444-555"},
            {id:3, name:"Rahat", email:"Rahat@email.com", phone:"123-444-555"},
            {id:4, name:"Jamal", email:"Jamal@email.com", phone:"123-444-555"}
        ]
    }
    render() {
        const {students} = this.state;
        return (
            <Fragment>
                <TopNavigation title="Students" />
                <div>
                    {
                        students.map( student => <Student key={student.id} student={student} />)
                    }
                </div>
            </Fragment>
        )
    }
}

export default Students;
