import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import PublicNavbar from '../components/navbar/PublicNavbar';
import LoginBackground from '../components/LoginBackground';

export default function SignUp() {
  return (

    <>
    <PublicNavbar />

    <div className="login-container">

    <LoginBackground />

    <form className="form">
      <p className="form-title">Registrera</p>
      <p className="form-subtitle">Skapa ett gratis konto hos Buildboard</p>

      <div className="input-container">
        <input type="text" placeholder="Fullständigt namn" />
        <span></span>
      </div>

      <div className="input-container">
        <input type="epost" placeholder="Ange e-postadress" />
        <span></span>
      </div>

      <div className="input-container">
        <input type="password" placeholder="Ange lösenord" />
      </div>

      <button type="submit" className="submit">
        Registrera
      </button>

      <p className="signup-link">
      Har du redan ett konto? <Link to="/log-in">Logga In</Link>
      </p>
    </form>

    </div>
    </>
  );
}

