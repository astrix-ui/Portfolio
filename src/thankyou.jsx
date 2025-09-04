import React, { useEffect } from 'react';
import Footer from './footer/Footer';
import './thankyou.css';

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank You | Ayush Sharma";
  }, []);

  return (
    <div className="thankyou-page">
      <div className="thankyou-container">
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully. I'll get back to you soon.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
