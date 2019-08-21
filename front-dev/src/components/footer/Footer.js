import React from 'react';

const style = {
  fontSize: '.6rem',
  marginTop: '5rem',
  textAlign: 'center',
  color: '#2c3e50',
  padding: '.3rem',
};

const Footer = () => (
  <div className="Footer">
    <footer style={style}>
      Développé par Zakaria Othmane © - {new Date().getFullYear()} - Tous droits
      réservés
    </footer>
  </div>
);

export default Footer;
