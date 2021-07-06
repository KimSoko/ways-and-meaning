/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../nav/AppBar.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';

const Error = ({ handleDisplay, handleMouseEnter, handleMouseLeave, menuDisplay }) => {
  return (
    <div className="two-col-container">
      <div className="left-container">
        <h1>Whoops, my bad.</h1>
        <h3>I messed up and sent you nowhere. Maybe you were trying to...</h3>
        <ul>
          <Link to='/ideas'><li>Read an article?</li></Link>
          <li>Sign up for my free purpose toolkit?</li>
          <li>Get help with a major life decision?</li>
          <li>Learn more about me?</li>
          <li>No? Something else? Email me and let me know what you need</li>
        </ul>
      </div>
      <div className="menu-container">
        <nav className="main-menu">
          <AppBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleDisplay={handleDisplay}
            menuDisplay={menuDisplay} />

          <ToolkitBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleDisplay={handleDisplay}
            menuDisplay={menuDisplay} />

          <IdeasBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleDisplay={handleDisplay}
            menuDisplay={menuDisplay} />

          <AboutBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleDisplay={handleDisplay}
            menuDisplay={menuDisplay} />
        </nav>
      </div>
    </div>

  )
};

export default Error;