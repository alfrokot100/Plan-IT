import React from 'react';
import styles from './HeroSection.module.css';
import teamImage from "../../assets/team.svg";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
  <div className={styles.contentWrapper}>
    <div className={styles.textContainer}>
      <h1>
        <span>Bygg starkare team.</span> <br />
        <span className={styles.highlight}>Tillsammans.</span>
      </h1>
      <p>Den kompletta plattformen för teambyggande, målspårning och välmående.</p>
      <div className={styles.buttons}>
        <button className={styles.primary} ><Link to="/register">Prova gratis</Link></button>
        <button className={styles.secondary}><Link to="/about">Boka demo</Link></button>
      </div>
    </div>

    <div className={styles.imageContainer}>
      <img src={teamImage} alt="Team working together" />
    </div>
  </div>
</section>
  );
} 
export default HeroSection;