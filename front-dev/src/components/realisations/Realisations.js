import React from 'react';
import RealisationsLsdla from './../realisatioins-lsdla/RealisationsLsdla';
import RealisationsI2SI from './../realisations-i2si/RealisationsI2SI';
import ContactForm from './../contact-form/ContactForm';

const APropos = props => {
  return (
    <div>
      <h2>Mes Réalisations</h2>
      <RealisationsLsdla />
      <RealisationsI2SI />
      <ContactForm />
    </div>
  );
};

export default APropos;
