import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AppBar from './components/app-bar/AppBar';
import Drawer from './components/drawer/Drawer';
import Home from './components/home/Home';
import APropos from './components/a-propos/APropos';
import Competences from './components/competences/Competences';
import Realisations from './components/realisations/Realisations';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import ContactForm from './components/contact-form/ContactForm';
import Langages from './components/languages/Languages';
import Frameworks from './components/frameworks/Frameworks';
import OrmOdmDB from './components/orm-odm-db/OrmOdmDB';
import Environements from './components/environements/Environements';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [side]: open});
  };

  return (
    <div className="App">
      'narusietnarusietnaurisetnarusietnarusitenrs'
      'narusietnarusietnaurisetnarusietnarusitenrs'
      <Router>
        <header className="App-header">
          <AppBar toggleDrawer={toggleDrawer} />
        </header>
        <Drawer toggleDrawer={toggleDrawer} state={state} />
        <CssBaseline />
        <Container maxWidth="sm">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/a-propos" component={APropos} />
            <Route path="/competences" component={Competences} />
            <Route path="/realisations" component={Realisations} />
            <Route path="/contact" component={Contact} />
            <Route path="/langages" component={Langages} />
            <Route path="/frameworks" component={Frameworks} />
            <Route path="/orm-odm-db" component={OrmOdmDB} />
            <Route path="/environements" component={Environements} />
            <Route path="/login" component={Login} />
          </Switch>
          <ContactForm />
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
