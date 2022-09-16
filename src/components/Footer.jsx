import React from 'react';
import Section from './Section';
import '../styles/components/footer.css';


const Footer = () => {
  return (
    <>
      <Section>
        <div className="Frame">
          <img src="../../assets/facebook.png" alt="" className="icon" />
          <img src="../../assets/twitter.png" alt="" className="icon" />
          <img src="../../assets/linkedin.png" alt="" className="icon" />
          <img src="../../assets/youtube.png" alt="" className="icon" />
          </div>
          <img src="../../assets/hexagon.png" alt="" className="footerLogo" />
      </Section>
    </>
  );
}

export default Footer;