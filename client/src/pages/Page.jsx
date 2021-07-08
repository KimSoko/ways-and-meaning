/* eslint-disable react/prop-types */
import React from 'react';
import AppBar from '../nav/AppBar.jsx';
import PurposeBar from '../nav/PurposeBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';
import Start from './Start.jsx';
import Decide from './Decide.jsx';
import Purpose from './Purpose.jsx';
import Ideas from './Ideas.jsx';
import About from './About.jsx';
import Error from './Error.jsx';

const Page = ({ handleMouseEnter, handleMouseLeave, handleMenuClick, menuDisplay, pageDisplay }) => {

  return (
    <div className="page-container">
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
          <Decide />
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