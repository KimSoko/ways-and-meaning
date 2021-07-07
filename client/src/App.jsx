
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Start from './pages/Start.jsx';
import Decide from './pages/Decide.jsx';
import Purpose from './pages/Purpose.jsx';
import Ideas from './pages/Ideas.jsx';
import Confidence from './ideas/Confidence.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';

const App = () => {
  const options = ['start', 'app', 'toolkit', 'ideas', 'about'];
  const [menuDisplay, setMenuDisplay] = useState('start');

  const handleMouseEnter = (e) => {
    let item = e.target.className;
    for (let i = 0; i < options.length; i++) {
      let currentOption = options[i];
      if (item.includes(currentOption)) {
        setMenuDisplay(currentOption);
      }
    }
  }

  const handleMouseLeave = () => {
    setMenuDisplay('start');
  }

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Start
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay} />
        </Route>
        <Route exact path='/app'>
          <Decide
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />
        </Route>
        <Route exact path='/purpose'>
          <Purpose
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />
        </Route>
        <Route exact path='/ideas'>
          <Ideas
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />
        </Route>
        <Route exact path='/ideas/confidence'>
          <Confidence />
        </Route>
        <Route exact path='/about'>
          <About
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />
        </Route>
        <Route component={Error} />
      </Switch>
    </div>
  )
};

export default App;