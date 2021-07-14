import React, { Suspense} from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

import LoadingSpinner from './UI/LoadingSpinner';
import css from './App.module.css';
import NotFound from './UI/NotFound';

const About = React.lazy( () => import('./components/about/about'));
const Workshops = React.lazy( () => import('./components/workshops/workshops'));
const CommunityEvents = React.lazy( () => import('./components/communityevents/communityevents'));
const Contact = React.lazy( () => import('./components/contact/contact'));
const Schedule = React.lazy( () => import('./components/schedule/schedule'));
const MainPage = React.lazy( () => import('./components/mainpage/MainPage'));

function App() {
  return (
    <div className={css.App}>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
