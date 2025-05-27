import "../index.css";
import React from 'react';
import HeroSection from '../components/homePage/HeroSection';
import WhyChoose from '../components/homePage/WhyChoose';
import FeaturesGrid from '../components/homePage/FeaturesGrid';
import HowItWorks from '../components/homePage/HowItWorks';
import CallToAction from '../components/homePage/CallToAction';
import PublicNavbar from "../components/navbar/PublicNavbar";


      
    const Home = () => {
      return (
        <div>
          <PublicNavbar />
          <HeroSection />
          
          <WhyChoose />
          <FeaturesGrid />
          {<HowItWorks /> }
          {<CallToAction />}
        </div>
      );
    };
    
    export default Home;
    