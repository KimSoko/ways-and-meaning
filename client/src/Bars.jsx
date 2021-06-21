import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Start from './Start.jsx';
import Ideas from './Ideas.jsx';
import About from './About.jsx';

const Bars = () => {
  return (
    <nav className="menu-main">
      <ul className="menu-list">
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
    </nav>
  )
};

export default Bars;