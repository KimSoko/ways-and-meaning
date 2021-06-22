import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import StartBox from './nav/StartBox.jsx';
import AppBar from './nav/AppBar.jsx';
import AppBox from './nav/AppBox.jsx';
import ToolkitBar from './nav/ToolkitBar.jsx';
// import TooklitBox from './nav/ToolkitBox.jsx';
import IdeasBar from './nav/IdeasBar.jsx';
// import IdeasBox from './nav/IdeasBox.jsx';
import AboutBar from './nav/AboutBar.jsx';
// import AboutBox from './nav/AboutBox.jsx';

const Bars = ({ display, setDisplay }) => {


  return (
    <nav className="main-menu">
      {display === 'start' && (
        <>
        <StartBox />
        <AppBar />
        <ToolkitBar />
        <IdeasBar />
        <AboutBar />
        </>
      )}
      {display === 'app' && (
        <>
        <AppBox />
        <ToolkitBar />
        <IdeasBar />
        <AboutBar />
        </>
      )}
      {display === 'toolkit' && (
        <>
        <AppBar />
        <ToolkitBox />
        <IdeasBar />
        <AboutBar />
        </>
      )}
      {display === 'ideas' && (
        <>
        <AppBar />
        <ToolkitBar />
        <IdeasBox />
        <AboutBar />
        </>
      )}
      {display === 'about' && (
        <>
        <AppBar />
        <ToolkitBar />
        <IdeasBar />
        <AboutBox />
        </>
      )}
    </nav>
  )
};

export default Bars;

/*
<ul className="all-bars">
        <li className="app-bar">
          <NavLink exact activeClassName="menu-item-active" to="/decide">WHAT MATTERS MOST APP</NavLink>
        </li>
        <li className="purpose-bar">
          <NavLink exact activeClassName="menu-item-active" to="/purpose">PURPOSE TOOLKIT</NavLink>
        </li>
        <li className="ideas-bar">
          <NavLink exact activeClassName="menu-item-active" to="/ideas">IDEAS</NavLink>
        </li>
        <li className="about-bar">
          <NavLink exact activeClassName="menu-item-active" to="/about">ABOUT</NavLink>
        </li>
      </ul>
      */