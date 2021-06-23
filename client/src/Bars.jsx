import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import AppBar from './nav/AppBar.jsx';
import ToolkitBar from './nav/ToolkitBar.jsx';
import IdeasBar from './nav/IdeasBar.jsx';
import AboutBar from './nav/AboutBar.jsx';

const Bars = ({ display, setDisplay, options }) => {
  const handleMouseEnter = (e) => {
    let item = e.target.className;
    for (let i = 0; i < options.length; i++) {
      let currentOption = options[i];
      if (item.includes(currentOption)) {
        setDisplay(currentOption);
      }
    }
  }

  const handleMouseLeave = () => {
    setDisplay('start');
  }

  return (
    <nav className="main-menu">
      <AppBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        display={display} />
      <ToolkitBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        display={display} />
      <IdeasBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        display={display} />
      <AboutBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        display={display} />
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