import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import OBForm from './Components/Form'

function App() {

  const [obForm, setOBForm] = useState([

    {
      id: Date.now,
      name: '',
      email: '',
      pass: '',
      terms: true,
    }
  ]);

  const setNewValue = value => {
    const newUser = {
      id: Date.now, 
      name: value.name,
      email: value.email, 
      pass: value.pass, 
      terms: value.terms,
    }
    setOBForm([...obForm, newUser]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <p>
          <OBForm setNewValue={setNewValue} />       
          
        </p>
       <div>
          {obForm.map(user=> {
              return (
            <div key = {user.id}> 
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.pass}</p>
            <p>{user.terms}</p>
            
            </div>
          
              )
          })
          
          }
          
       </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
