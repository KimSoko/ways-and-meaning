
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Start from './pages/Start.jsx';
// import Decide from './pages/Decide.jsx';
// import Purpose from './pages/Purpose.jsx';
// import Ideas from './pages/Ideas.jsx';
// import Confidence from './ideas/Confidence.jsx';
// import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import Page from './pages/Page.jsx';

const App = () => {
  const options = ['start', 'app', 'purpose', 'ideas', 'about'];
  const [menuDisplay, setMenuDisplay] = useState('start');
  const [pageDisplay, setPageDisplay] = useState('start');

  const handleMouseEnter = (e) => {
    let item = e.target.className;
    console.log(item);
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

  const handleMenuClick = (e) => {
    let item = e.target.className;
    console.log('clicked on ', item);
    for (let i = 0; i < options.length; i++) {
      let currentOption = options[i];
      if (item.includes(currentOption)) {
        setPageDisplay(currentOption);
        setMenuDisplay('start');
      }
    }
  }

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay={pageDisplay} />
        </Route>
        <Route exact path='/app'>
        <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay={pageDisplay} />
        </Route>
        <Route exact path='/purpose'>
        <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay={pageDisplay} />
        </Route>
        <Route exact path='/ideas'>
        <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay={pageDisplay} />
        </Route>
        <Route exact path='/ideas/confidence'>
        <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay={pageDisplay} />
        </Route>
        <Route exact path='/about'>
        <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay={pageDisplay} />
        </Route>
        <Route path=''>
          <Error
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
          />
        </Route>
      </Switch>
    </div>
  )
};

export default App;