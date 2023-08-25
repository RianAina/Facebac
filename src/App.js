import React, { useState } from 'react';
import './App.css';
import AutrePage from './AutrePage';
import Router from './Router';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez mettre votre logique de connexion
    // par exemple, vérification des informations d'identification
  };

  return (

    <Router/>


    
  );
}

export default App;
