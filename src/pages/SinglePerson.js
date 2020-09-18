import React, { Fragment } from 'react';

// import TopNavigation from '../components/TopNavigation/TopNavigation';

const PersonStyle= {
    display: 'block',
    maxWidth: '450px',
    border: '1px solid #000',
    padding: '15px 25px',
    margin: '15px auto',
    background: '#eee'
}

const SinglePerson = ({person}) => {
    // console.log(props,props.match.params);
    if( person == null) return <div></div>
    return (
        <Fragment>
            {/* <TopNavigation title="Persons" /> */}
            {/* <h2>{props.match.params.personName}</h2> */}
            <div style={PersonStyle}>
                <h2>{person.name}</h2>
                <p>{person.email}</p>
                <p>{person.phone}</p>
            </div>
        </Fragment>
    );
}

export default SinglePerson;