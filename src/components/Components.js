import React, {useState} from 'react'; 
import './App.css';
import screenshot from './ReactComponent.PNG'

function Componenets() { 

  return (
    <div>
      <header> Components in React </header>
      <div className="bodyContent">
        <p className="important"> Making components is a fundamental task when using React!  </p>
        <p> This file itself is a component :0 </p>
        <p> Creating a component is very easy, they are simply a function that have a return function. </p>
        <p> Here is an exmple of a custom component that returns text: </p>
        <ExampleComponent /> 
        <img src={screenshot} alt='' title="LOOK AT THE EXAMPLE COMPONENT" height={{}} style={{display: 'block', margin: 'auto'}}/>
        <ul>
          <li>Non-standard html tags are not the usual teal color - they are a shade of green. </li>
          <li> Custom components start with a capital letter. </li>
          <li> The return call has to have its arguements wrapped in parenthesis like so: return{`(<p> example</p>)`}.</li>
        </ul>
        <br/> 
        <div className='space'/>
        <br/>
      </div>
    </div>
  );
}

const ExampleComponent = () => {
    return (
        <p style={{textAlign: 'center', fontSize: '20pt', color: 'red', fontWeight: 'bold'}}> I am a custom component! go to line 27-31 in the 'Componenets.js' file to see me! </p>
    )
}

export default Componenets;
