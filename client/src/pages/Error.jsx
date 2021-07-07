/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../nav/AppBar.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';
import image from '../../dist/media/whoops.jpg'

const Error = ({ handleMouseEnter, handleMouseLeave, menuDisplay }) => {
  return (
    <div className="two-col-container">
      <div className="left-container">
        <h1>Whoops, my bad.</h1>
        <h3>I messed up and sent you nowhere. Maybe you were trying to...</h3>
        <div className="with-img">
          <ul>
            <Link to='/ideas'><li>Read an article?</li></Link>
            <Link to='/purpose'><li>Sign up for my free purpose toolkit?</li></Link>
            <Link to='/app'><li>Get help with a major life decision?</li></Link>
            <Link to='/about'><li>Learn more about me?</li></Link>
            <li>Anything else? <a href="mailto:kim.s.schaefer@gmail.com" target="_blank" rel="noreferrer">Email me</a> and let me know what you need</li>
          </ul>
          <img className="error-img" src={image} />
        </div>
      </div>
      <div className="menu-container">
        <nav className="main-menu">
          <AppBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />

          <ToolkitBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />

          <IdeasBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />

          <AboutBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay}
          />
        </nav>
      </div>
    </div>

  )
};

export default Error;