import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import PublicNavbar from '../components/navbar/PublicNavbar.css';
import LoginBackground from '../components/LoginBackground.css';

export default function LogIn() {
  return (

    <>
    <PublicNavbar />

    <div className="login-container">

    <LoginBackground />

    <form className="form">
      <p className="form-title">Logga in på ditt konto</p>

      <div className="input-container">
        <input type="email" placeholder="Ange e-postadress" />
        <span></span>
      </div>

      <div className="input-container">
        <input type="password" placeholder="Ange lösenord" />
      </div>

      <button type="submit" className="submit">
        Logga in
      </button>

      <p className="signup-link">
        Inget konto? <Link to="/register">Registrera dig</Link>
      </p>
    </form>

    </div>
    </>
  );
}