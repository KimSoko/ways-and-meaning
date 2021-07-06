/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../nav/AppBar.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';
import image from '../../dist/media/Purpose_Framework.png';

const About = ({ handleMouseEnter, handleMouseLeave, handleDisplay, menuDisplay }) => {
  return (
    <div className="page-container">
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
      <div className="two-col-container">
        <div className="left-container">
          <div className="two-col-container">
            <div className="left-container-nested">
              <h1>About me</h1>
            </div>
            <div className="inline">
              <Link to="/">
                <button className="home-button">home</button>
              </Link>
            </div>
          </div>

          <h3>Hi, I'm Kim Soko Schaefer</h3>
          <div className="two-col-container">
            <div className="left-container-nested top-margin">
              <p>I created Ways + Meaning to collect and share wisdom about better living.</p>
              <p>I'm a strategy consultant, a software engineer, and am passionate about the science of enjoying life.</p>
              <p>This project is my third child. My first two are human, small, and require my time and attention so unfortunately this baby doesn’t get much love these days. If things are a bit weird or broken, just let me know.</p>
              <p>I'm big on values. It's the best way to immediately know someone. Mine include:</p>
              <ul>
                <li><strong>Curiosity:</strong> in pursuit of wisdom, an unrelenting drive to learn, to create, to explore, to seek out what’s different and uncover new truths that need to be shared</li>
                <li><strong>Connection:</strong> to spirit, between people, ideas, thoughts and feelings</li>
                <li><strong>Progress:</strong> a focus on continuous improvement everyday, no matter how small or how slow</li>
                <li><strong>Calm:</strong> bringing a sense of peace and tranquility to all</li>
              </ul>
              <p>You can reach me anytime at <a href="mailto:kim.s.schaefer@gmail.com" target="_blank" rel="noreferrer"> kim.s.schaefer@gmail.com</a></p>
              <p>The code for this site can be found on <a href="https://github.com/KimSoko/ways-and-meaning" target="_blank" rel="noreferrer">GitHub</a></p>
            </div>
            <div className="right-container">
              <img className="right-image" src={image} alt="Purpose Framework" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;