import React from 'react';
import ContactForm from './../contact-form/ContactForm';

const Frameworks = props => {
  return (
    <div className="Frameworks">
      <h3>Frameworks</h3>
      <ul>
        <li>Express JS</li>
        <li>React JS</li>
        <li>Symfony</li>
        <li>Django (notions)</li>
      </ul>
      <ContactForm />
    </div>
  );
};

export default Frameworks;
