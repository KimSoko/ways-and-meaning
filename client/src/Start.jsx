import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from './nav/AppBar.jsx';
import ToolkitBar from './nav/ToolkitBar.jsx';
import IdeasBar from './nav/IdeasBar.jsx';
import AboutBar from './nav/AboutBar.jsx';

const Start = ({ handleDisplay, handleMouseEnter, handleMouseLeave, menuDisplay }) => {
  return (
    <div className="start-page-container">
      <div className="left-container">
        <h1>Ways + Meaning</h1>
        <h3>Tools for living better</h3>
        <div className="start-button-div">
          <button onClick={handleDisplay}>Click Me</button>
        </div>
      </div>
      <div className="menu-container">
      <nav className="main-menu">
      <Link to='/app'>
        <AppBar
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleDisplay={handleDisplay}
          menuDisplay={menuDisplay} />
      </Link>
      <Link to="/purpose">
        <ToolkitBar
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleDisplay={handleDisplay}
          menuDisplay={menuDisplay} />
      </Link>
      <Link to="/ideas">
        <IdeasBar
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleDisplay={handleDisplay}
          menuDisplay={menuDisplay} />
      </Link>
      <Link to='/about'>
        <AboutBar
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleDisplay={handleDisplay}
          menuDisplay={menuDisplay} />
      </Link>
    </nav>
      </div>
    </div>
  )
};

export default Start;