import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AppDevelopment from './Components/AppDevelopment';
import WebDevelopment from './Components/WebDevelopment';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/AppDevelopment" component={AppDevelopment} />
        <Route exact path="/WebDevelopment" component={WebDevelopment} />
        <Redirect exact to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
