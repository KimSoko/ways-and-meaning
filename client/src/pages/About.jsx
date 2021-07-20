/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../dist/media/about.png';

const About = () => {
  return (
    <div className="page-container" style={{
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: '100%',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="header">
        <div className="left-container">
          <h1>About me</h1>
        </div>
        <div className="right-container">
          <Link to="/">
            <button className="home-button">home</button>
          </Link>
        </div>
      </div>
      <div className="sub-head">
        <h3>Hi, I'm Kim Soko Schaefer</h3>
      </div>
      <div className="body">
        <div className="inner-text">
          <p>I created Ways + Meaning to collect and share wisdom about better living.</p>
          <p>I'm a strategy consultant, a software engineer, and am passionate about the science of enjoying life.</p>
          {/* <p>This project is my third child. My first two are human, small, and require my time and attention so unfortunately this baby doesn’t get much love these days. If things are a bit weird or broken, just let me know.</p> */}
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
      </div>
    </div>
  )
};

export default About;