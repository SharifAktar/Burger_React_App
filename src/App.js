import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div id="App">
     <Todo  name= "Arman" age="33" place="Kamycka"/>
     <Todo  name= "Riad" age="28" place="Strohuv" />
     <Todo  name= "Raben" age="29" place="Kamycka"/>
    </div>
  );
}

export default App;
