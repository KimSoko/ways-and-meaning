/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './pages/Page.jsx';

const App = () => {
  const options = ['start', 'app', 'purpose', 'ideas', 'about'];
  const [menuDisplay, setMenuDisplay] = useState('start');
  const [pageDisplay, setPageDisplay] = useState('start');

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

  const handleMenuClick = (e) => {
    let item = e.target.className;
    for (let i = 0; i < options.length; i++) {
      let currentOption = options[i];
      if (item.includes(currentOption)) {
        setPageDisplay(currentOption);
      }
    }
  }

  const handleScroll = (e) => {
    if (document.documentElement.scrollTop > 1) {
      document.getElementsByClassName("heading")[0].style.fontSize = "40px";
      document.getElementsByClassName("header")[0].style.backgroundColor = "#FFFCF1";
    } else {
      document.getElementsByClassName("heading")[0].style.fontSize = "90px";
      document.getElementsByClassName("header")[0].style.backgroundColor = "transparent";
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay='start' />
        </Route>
        <Route exact path='/app'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay="app" />
        </Route>
        <Route exact path='/purpose'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay="purpose" />
        </Route>
        <Route exact path='/ideas'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay="ideas" />
        </Route>
        <Route exact path='/ideas/fear-and-confidence'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay="fear" />
        </Route>
        <Route exact path='/about'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay="about" />
        </Route>
        <Route exact path='/newsletter'>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay="purpose" />
        </Route>
        <Route path=''>
          <Page
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMenuClick={handleMenuClick}
            menuDisplay={menuDisplay}
            pageDisplay="error"
          />
        </Route>
      </Switch>
    </div>
  )
};

export default App;