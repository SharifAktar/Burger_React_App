import React from 'react'
import './Person.css';
import Radium from 'radium';
const Person=(props) => {
const style={
        '@media (min-width:500px)':{
            width: '450px'
        }

}

    
    return (
        <div className="Person" style={style}>
            
           <p onClick={props.click}>My name is {props.name}  and  I'm  {props.age} 
           years old</p> 
         <h3>{props.children}</h3>
         <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    };

export default Radium(Person);


