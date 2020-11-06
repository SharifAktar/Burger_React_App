import React from 'react'

const Todo=(props) => {
    
    return (

        <div>
           <p onClick={props.click}>My name is {props.name}  and  I'm  {props.age} 
           years old</p> 
         <h3>{props.children}</h3>
        </div>
    )
    };

export default Todo;


