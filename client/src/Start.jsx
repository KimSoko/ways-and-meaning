import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Ideas from './Ideas.jsx';
import About from './About.jsx';

const Start = () => {
  return (
    <div className="start">
      <header className="header-3-col">
        <nav className="menu-main">
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink activeClassName="menu-item-active" to="/">Start</NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="menu-item-active" to="/ideas">Ideas</NavLink>
            </li>
            <li className="menu-item">
              <NavLink activeClassName="menu-item-active" to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <div id="title-div">

          <h1 id="header-title">WAYS + MEANING</h1>
        </div>
        <div>
          <p id="header-sub">Ideas for better living</p>
        </div>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  )
};

export default Start;