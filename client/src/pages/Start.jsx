/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '../nav/AppBar.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';
import image from '../../dist/media/woman_with_sphere.jpeg';

const Start = ({ handleDisplay, handleMouseEnter, handleMouseLeave, menuDisplay }) => {
  return (
    <div className="two-col-container" style={{
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'contain',
      backgroundPosition: '70% 100%',
      backgroundRepeat: 'no-repeat'}}>
      <div className="left-container">
        <h1>Ways + Meaning</h1>
        <h3>Tools for living better</h3>
        <div className="start-button-div">
          <button onClick={handleDisplay}>Click Me</button>
        </div>
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

export default Start;