import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function SigninScreen() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // TODO : signin action
  };

  return (
    <div>
      <div className="form" onSubmit={submitHandler}>
        <div>
          <h1>Se connecter</h1>
        </div>
        <div>
          <label htmlFor="email">Adresse mail</label>
          <input
            type="email"
            id="email"
            placeholder="Entrer votre adresse mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrer votre mot de passe"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Se connecter
          </button>
        </div>
        <div>
          <label />
          <div>
            Nouvel utilisateur ? {' '}
            <Link to ="/register">Créer son compte</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
