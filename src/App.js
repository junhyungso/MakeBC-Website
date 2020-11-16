import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import About from './components/about/about';
import Workshops from './components/workshops/workshops';
import css from './App.module.css';

import CommunityEvents from './components/communityevents/communityevents';
import Contact from './components/contact/contact';
import Schedule from './components/schedule/schedule';
import MainPage from './components/mainpage/MainPage';

function App() {
  return (
    <div className={css.App}>
      <Router>
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/workshops'>
                <Workshops />
            </Route>
            <Route path='/communityevents'>
                <CommunityEvents />
            </Route>
            <Route path='/schedule'>
                <Schedule />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
              <Route path="/">
                <MainPage />
              </Route> 
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
