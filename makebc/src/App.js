import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import MainPage from './components/mainpage/MainPage';
import About from './components/about/about';
import Projects from './components/projects/projects';
import UpcomingEvents from './components/upcomingevents/upcomingevents';
import Contact from './components/contact/contact';
import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      <Router>
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/upcomingevents'>
                    <UpcomingEvents />
                </Route>
                <Route path="/">
                  <MainPage/>
                </Route>
            </Switch>
        </Router>    
    </div>
  );
}

export default App;
