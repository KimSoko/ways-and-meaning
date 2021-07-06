/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../nav/AppBar.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';
import Card from './Card.jsx';
import image1 from '../../dist/media/confidence.jpg';

const Ideas = ({ handleMouseEnter, handleMouseLeave, handleDisplay, menuDisplay }) => {
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

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
      <div className="two-col-container">
        <div className="left-container">
          <div className="two-col-container">
            <div className="left-container-nested">
              <h1>Ideas</h1>
            </div>
            <div className="inline">
              <Link to="/">
                <button className="home-button">home</button>
              </Link>
            </div>
          </div>
          <div className="articles-div">
              <Card
                title="On Fear and Confidence"
                image={image1}
                blurb={<p>There is one thing I know for sure about doing anything. The difference between success and failure lies in your ability to overcome fear.
                This article is about fear, confidence and the relationship they share. Read it if you’re a human being.</p>}
                link={'/ideas/fear-and-confidence'} />
            <div className="articles-box" id="article-2"></div>
            <div className="articles-box" id="article-3"></div>
            <div className="articles-box" id="article-4"></div>
            <div className="articles-box" id="article-5"></div>
            <div className="articles-box" id="article-6"></div>
          </div>

        </div>
      </div>
      <AboutBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleDisplay={handleDisplay}
        menuDisplay={menuDisplay} />
    </div>
  )
};

export default Ideas;