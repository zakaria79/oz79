import React from 'react';
import Languages from './../languages/Languages';
import Frameworks from './../frameworks/Frameworks';
import OrmOdmDB from './../orm-odm-db/OrmOdmDB';
import Environements from './../environements/Environements';

const APropos = props => {
  return (
    <div className="APropos">
      <h2>Mes Compétences</h2>
      <Languages />
      <Frameworks />
      <OrmOdmDB />
      <Environements />
    </div>
  );
};

export default APropos;
