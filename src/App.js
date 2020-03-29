import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/navigation/Navigation';
import * as ROUTES from './components/navigation/routes';

import Landing from './components/pages/Landing';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import './css/App.css';

function App() {
  return (
    <Router >
      <div className="App">

        <Nav>hello</Nav>

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
