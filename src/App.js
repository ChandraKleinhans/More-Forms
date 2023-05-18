import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms';
import Results from './components/Results';
import React, {useState} from 'react';


function App() {
  //Destructure useState into state and setState
  const[state,setState] = useState(
    {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:''
    }
  );

  return (
    <><div>
      {/* pass state and setState into props attributes inputs and setInputs */}
      <Forms inputs={state} setInputs={setState}></Forms>
    </div>
    <div>
        <Results data={state}></Results>
    </div></>
  );
}

export default App;
