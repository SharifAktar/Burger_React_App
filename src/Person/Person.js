import React from 'react'
import './Person.css';

const Person=(props) => {
    
    return (

        <div className="Person">
            
           <p onClick={props.click}>My name is {props.name}  and  I'm  {props.age} 
           years old</p> 
         <h3>{props.children}</h3>
         <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    };

export default Person;


