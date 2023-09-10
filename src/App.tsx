import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigate, useNavigate} from "react-router-dom";

function App() {

  const navigate = useNavigate();

  function handleGoLogin() {
    navigate('/login');
  }

  return (
    <div className="App">
      <button onClick={handleGoLogin}>ir al login</button>
    </div>
  );
}

export default App;
