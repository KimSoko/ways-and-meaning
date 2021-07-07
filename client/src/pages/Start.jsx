/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '../nav/AppBar.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';
import image from '../../dist/media/background_3.png';

const Start = ({ handleMouseEnter, handleMouseLeave, menuDisplay }) => {
  return (
    <div className="two-col-container"  >
      <div className="outer-left-container" style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="left-container">
          <h1>Ways + Meaning</h1>
          <h3>Tools for living better</h3>
        </div>
      </div>
      <div className="menu-container">
        <nav className="main-menu">
          <AppBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay} />

          <ToolkitBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay} />

          <IdeasBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay} />

          <AboutBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            menuDisplay={menuDisplay} />
        </nav>
      </div>
    </div>
  )
};

export default Start;