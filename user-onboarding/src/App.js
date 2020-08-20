import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import OBForm from './Components/Form';
import * as yup from 'yup';
import axios from 'axios';

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

  //Set New Value 

  const setNewValue = value => {
    const newUser = {
      id: Date.now,
      name: value.name,
      email: value.email,
      pass: value.pass,
      terms: value.terms,
    }
    setOBForm([...obForm, newUser]);
  };

  //Return Form 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p> <OBForm setNewValue={setNewValue} /> </p>
        <div>
       
          {obForm.map(user => {
            return (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.pass}</p>
                <p>{user.terms}</p>
              </div>
            )
          })};
          </div>
      </header>
    </div>

    <div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
                  </a>
    </div>
  );

  const obFormSubmit(values, { setStatus }) {
    axios.post(
      `https://requires.in/api/users`
    )
       .then(res => {setStatus(res.data);
       console.log(res)});
                   .catch (e => console.log("ERROR", e.res));
                   (OBForm)
  };

          const formSchema = yup.object().shape({
            name: yup.string().required('Name is required'),
            email: yup.string().email('must be a valid email').required('Please Include Email Address'),
            pass: yup.string().required('Password must be included'),
            terms: yup.boolean().oneOf([true], 'Please check the TOS Box'),
          });



}
export default from App