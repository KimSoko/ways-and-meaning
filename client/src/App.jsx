import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Start from './Start.jsx';
import Ideas from './Ideas.jsx';
import Confidence from './ideas/Confidence.jsx';
import About from './About.jsx';

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path='/ideas' component={Ideas} />
        <Route exact path='/ideas/confidence' component={Confidence} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  )
};

export default App;