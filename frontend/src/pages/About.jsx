import { Link } from 'react-router-dom';
import './About.css';
import PublicNavbar from '../components/navbar/PublicNavbar';


const About = () => {
  return (

    <>

    <PublicNavbar />
    <div className="about-page">


      <section className="hero-section">
        <h1>Upptäck funktionerna som gör BuildBoard enkelt att använda</h1>
        <p>
          BuildBoard samlar allt du behöver för projektledning i ett kraftfullt, flexibelt verktyg. 
          Planera, samarbeta och leverera – snabbare och smartare.
        </p>
      </section>

      <section className="trusted-by-section">
        <h2>Om oss</h2>
        <p>
          Vi utvecklar en plattform som förenklar team building och projektledning för moderna företag. 
          Vår vision är att samla flera centrala funktioner i ett enda, kraftfullt verktyg – så att 
          organisationer slipper använda flera olika system för att hantera sina interna processer.
          <br /><br />
          Plattformen gör det enkelt att skapa tydliga och visuella arbetsflöden, anpassade efter varje 
          teams unika arbetssätt. Med smarta tidslinjer får användare en klar överblick över deadlines, 
          milstolpar och beroenden – vilket förbättrar både planering och kommunikation.
          <br /><br />
          Syftet är att ge företag möjligheten att följa grupprocesser, spåra projektens aktuella status 
          och samtidigt få en inblick i välmåendet inom organisationen.
          <br /><br />
          Företag världen över – från startups till globala aktörer – söker sig till lösningar som skapar 
          verklig nytta. Vår plattform är inte bara ett verktyg för struktur och kontroll – den är en 
          strategisk fördel. För de vet att bättre verktyg ger bättre resultat.
        </p>
      </section>
<section className="cta-section">
        <h2>Bygg bättre. Tillsammans.</h2>
        <p>
          Lämna manuella system och ostrukturerad kommunikation bakom dig. 
          Med BuildBoard får ni en samlad plats för allt ert arbete.
        </p>
        <Link to="/register" className="cta-button">Testa gratis</Link>
      </section>
    </div>
    </>
  );
};

export default About;