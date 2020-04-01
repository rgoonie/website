import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from '../navigation/Navigation/Naviagation';
import * as ROUTES from '../navigation/routes';

import Landing from '../pages/Landing/Landing';
import About from '../pages/About/About';
import Blogs from '../pages/Blogs/Blogs';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';

import './App.css';

function App() {
  return (
    <Router >
      <div className="App">

        <Nav/>

        <Route exact path={ROUTES.LANDING} component={Landing}/>
        <Route exact path={ROUTES.ABOUT} component={About}/>
        <Route exact path={ROUTES.BLOGS} component={Blogs}/>
        <Route exact path={ROUTES.PROJECTS} component={Projects} />
        <Route exact path={ROUTES.CONTACT} component={Contact} />

      </div>
    </Router>
  );
}

export default App;
