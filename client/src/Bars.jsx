import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import AppBar from './nav/AppBar.jsx';
import ToolkitBar from './nav/ToolkitBar.jsx';
import IdeasBar from './nav/IdeasBar.jsx';
import AboutBar from './nav/AboutBar.jsx';

const Bars = ({ display, setDisplay }) => {
  const handleHover = (e) => {
    console.log(e.target);
    setDisplay('app');
  }

  return (
    <nav className="main-menu">
      <AppBar onMounseEnter={handleHover} display={display} />
      <ToolkitBar display={display} />
      <IdeasBar display={display} />
      <AboutBar display={display} />
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