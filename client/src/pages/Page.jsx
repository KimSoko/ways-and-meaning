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
import image from '../../dist/media/background.png';

const Page = ({ handleMouseEnter, handleMouseLeave, handleMenuClick, menuDisplay, pageDisplay }) => {

  return (
    <div className="app-container">
      {pageDisplay === 'start' && (
        <div className="page-container" style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: '100%',
          backgroundRepeat: 'no-repeat' }}>
          <Start />
        </div>
      )}
      {pageDisplay === 'error' && (
        <div className="page-container">
          <Error />
        </div>
      )}
      <AppBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'app' && (
        <div className="page-container">
          <DecideApp />
        </div>
      )}
      <PurposeBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'purpose' && (
        <div className="page-container">
          <Purpose />
        </div>
      )}
      <IdeasBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'ideas' && (
        <div className="page-container">
          <Ideas />
        </div>
      )}
      {pageDisplay === 'fear' && (
        <div className="page-container">
          <Fear />
        </div>
      )}
      <AboutBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleMenuClick={handleMenuClick}
        menuDisplay={menuDisplay} />
      {pageDisplay === 'about' && (
        <div className="page-container">
          <About />
        </div>
      )}
    </div>
  )
};

export default Page;