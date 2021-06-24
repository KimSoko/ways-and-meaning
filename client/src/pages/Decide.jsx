/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '../nav/AppBar.jsx';
import DecideApp from '../wmm/DecideApp.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';

const Decide = ({ handleDisplay, handleMouseEnter, handleMouseLeave, menuDisplay }) => {
  return (
    <div className="page-container">
      <AppBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleDisplay={handleDisplay}
        menuDisplay={menuDisplay} />
      <DecideApp />
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
    </div>
  )
};

export default Decide;