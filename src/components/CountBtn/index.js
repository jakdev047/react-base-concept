import React from 'react';

const CountBtn = ({increment,decrement}) => {
    return (
        <div>
            <button type="button" onClick={()=>increment(2)}> Increment </button> | 
            <button type="button" onClick={()=>decrement(2)}> Decrement </button>
        </div>
    )
}

export default CountBtn;
