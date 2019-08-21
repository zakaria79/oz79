import React from 'react';
import RealisationsLsdla from './../realisatioins-lsdla/RealisationsLsdla';
import RealisationsI2SI from './../realisations-i2si/RealisationsI2SI';

const APropos = props => {
  return (
    <div>
      <h2>Mes Réalisations</h2>
      <RealisationsLsdla />
      <RealisationsI2SI />
    </div>
  );
};

export default APropos;
