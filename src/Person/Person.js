// Creating a functional component
import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> I'm a {props.name} and I'm {props.age} years old!! </p>
            {/* this will print contain of person tag */}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;