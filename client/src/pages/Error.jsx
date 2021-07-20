/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../dist/media/error.png'

const Error = () => {
  return (
    <div className="two-col-container">
      <div className="outer-left-container" style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="left-container">
          <div className="two-col-container no-wrap">
            <div className="left-container-nested">
              <h1>Whoops, my bad.</h1>
            </div>
            <div className="inline">
              <Link to="/">
                <button className="home-button">home</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="left-container">
          <h3>I messed up and sent you nowhere.</h3>
          <div className="top-margin">
            <p>Maybe you were trying to...</p>
            <ul>
              <Link to='/ideas'><li>Read an article?</li></Link>
              <Link to='/purpose'><li>Sign up for my free purpose toolkit?</li></Link>
              <Link to='/app'><li>Get help with a major life decision?</li></Link>
              <Link to='/about'><li>Learn more about me?</li></Link>
              <li>Anything else? <a href="mailto:kim.s.schaefer@gmail.com" target="_blank" rel="noreferrer">Email me</a> and let me know what you need</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Error;