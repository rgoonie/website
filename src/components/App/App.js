import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from '../navigation/Navigation/Naviagation';
import PageContainer from '../pages/PageContainer/PageContainer';

import './App.css';

function App() {
  return (
    <Router >
      <div className="App">

        <Nav/>
        <PageContainer/>

      </div>
    </Router>
  );
}

export default App;
