/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '../nav/AppBar.jsx';
import PurposeBar from '../nav/PurposeBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';
import Start from './Start.jsx';
import DecideApp from '../wmm/DecideApp.jsx';
import Purpose from './Purpose.jsx';
import Ideas from './Ideas.jsx';
import Fear from '../ideas/Fear.jsx';
import About from './About.jsx';
import Error from './Error.jsx';


const Page = ({ handleMouseEnter, handleMouseLeave, handleMenuClick, menuDisplay, pageDisplay }) => {

  return (
    <div className="app-container" >
      {pageDisplay === 'start' && (
        <Start />
      )}
      {pageDisplay === 'error' && (
        <Error />
      )}
      <AppBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'app' && (
        <DecideApp />
      )}
      <PurposeBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'purpose' && (
        <Purpose />
      )}
      <IdeasBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'ideas' && (
        <Ideas />
      )}
      {pageDisplay === 'fear' && (
        <Fear />
      )}
      <AboutBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'about' && (
        <About />
      )}
    </div>
  )
};

export default Page;