import { render } from '@testing-library/react';
import React,{useState} from 'react'
import './App.css';
import Todo from './components/Todo';


const App = props=>{

  const [personState,setPersonState]= 
  useState({
    persons:[
    {name:'Arman', age:28},
    {name:'Riad', age:26},
    {name:'Raben', age:25}
  ]
});
console.log(personState);
const switchNameHandler=(newName)=>{
  setPersonState({
    persons:[
      {name:newName, age:30},
      {name:'Sumon', age:29},
      {name:'Raben', age:29}
    ]
  })
}
const [otherState,setOtherState]= useState('What is your name')

console.log(otherState,setOtherState );



  return (
    <div className="App">
    <button onClick={switchNameHandler.bind(this,"Sharif")}> Switch Name</button>
                                       {/* //way to pass the data method  */}
    <Todo  name= {personState.persons[0].name}
    age={personState.persons[0].age} />
    <Todo  name=  {personState.persons[1].name}
    age={personState.persons[1].age} click={switchNameHandler.bind(this,"Khadija")}> My hobbies: Racing</Todo>
    <Todo  name=  {personState.persons[2].name}
    age={personState.persons[2].age}/>
   </div>


  );
   
  }

export default App;
