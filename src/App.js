import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez mettre votre logique de connexion
    // par exemple, vérification des informations d'identification
  };

  return (

    
    <div className="login-container">

<div className='LeftSection'>
        <h1 className='facebac'>Facebac</h1>
      <h4 className='facebacText'>Naviguer en toute sereniter avec nous et decouvrer ce qui se passe dans le monde maintenant !</h4>
      <div className='signature'>ReactProject @WEB2</div>
      </div>
      
      <div className="login-box">
        <h2>Se connecter</h2>
        <input
          type="text"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Connexion</button>
        <br></br>
        <button className='SignUpButton' onClick={handleLogin}>Sign up</button>
        <br></br>
        <div className='message'>Créer une Page pour une célébrité, une marque ou une entreprise. </div>
      </div>
      
      
    </div>
  );
}

export default App;
