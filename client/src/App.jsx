import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Purpose from './Purpose.jsx';
import Ideas from './Ideas.jsx';
import Confidence from './ideas/Confidence.jsx';
import About from './About.jsx';
import Error from './Error.jsx';

const App = () => {
  const options = ['start', 'app', 'toolkit', 'ideas', 'about'];
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(options[index]);
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

  const handleDisplay = () => {
    let newIndex = index;
    if (newIndex === options.length - 1) {
      newIndex = 0;
    } else {
      newIndex++;
    }
    setIndex(newIndex);
    setMenuDisplay('start');
  }

  useEffect(() => {
    setDisplay(options[index])
  }, [index])

  return (
    <div>
      <Switch>
        <Route exact path='/' >
          <Start
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleDisplay={handleDisplay}
            menuDisplay={menuDisplay} />
        </Route>
        <Route exact path='/app' >
          <Decide
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleDisplay={handleDisplay}
            menuDisplay={menuDisplay} />
        </Route>
        <Route exact path='/purpose' component={Purpose} />
        <Route exact path='/ideas' component={Ideas} />
        <Route exact path='/ideas/confidence' component={Confidence} />
        <Route exact path='/about' component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  )
};

export default App;