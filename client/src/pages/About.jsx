/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../dist/media/Kim_1985.png';
import image2 from '../../dist/media/Kim_family.jpg';
import image3 from '../../dist/media/Kim_2019.jpg';

const About = () => {
  return (
    <div className="page-container">
      <div className="header" id="ideas-header">
        <div className="left-container">
          <h1 className="heading">About me</h1>
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
      <div className="body space-between">
        <div className="left-container inner-text">
          <p>I created Ways + Meaning to collect and share wisdom about life, and how to live it better.</p>
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
        <div className="right-container about-image-div">
          <div className="line">
            <div className="left-box"></div>
            <div className="right-box"></div>
          </div>
          <div className="circle">
            <img className="circle-image" src={image1} alt="Kim Soko Schaefer, c.1985" />
          </div>
          <div className="line">
            <div className="left-box"></div>
            <div className="right-box"></div>
          </div>
          <div className="circle">
            <img className="circle-image transparent" src={image2} alt="Kim Soko Schaefer, c.2019" />
          </div>
          <div className="line">
            <div className="left-box"></div>
            <div className="right-box"></div>
          </div>
          <div className="circle">
            <img className="circle-image transparent" src={image3} alt="Kim Soko Schaefer, c.2019" />
          </div>
          <div className="line">
            <div className="left-box" id="last-line"></div>
            <div className="right-box"></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;