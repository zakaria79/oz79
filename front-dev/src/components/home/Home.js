import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  h1: {
    color: '#3f51b5',
    fontSize: '1.3rem',
  },
  h2: {
    color: '#3f51b5',
  },
}));

const envoyerMail = () => {
  console.log('Envoyer un email');
};

const APropos = props => {
  const classes = useStyles();
  return (
    <div className="Home">
      <h1 className={classes.h1}>Développeur web indépendant</h1>
      <button onClick={envoyerMail}>Envoyer un email</button>
      <p>
        Développement de Site et Applications Web pour entreprises et
        particuliers
      </p>
      <h2 className={classes.h2}>Mes services</h2>
      <p>
        Création de Sites et Applications web sur mesure. Du développement à la
        mise en production
      </p>
      <p>Refonte ou ajout de fonctionnalités sur projets existants</p>
      <h2 className={classes.h2}>Technologies</h2>
      <p>PHP, Node JS, React JS, Express JS...</p>
    </div>
  );
};

export default APropos;
