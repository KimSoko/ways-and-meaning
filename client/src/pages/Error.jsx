/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../dist/media/error-2.png'

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
        <h1>Whoops, my bad.</h1>
        <h3>I messed up and sent you nowhere. Maybe you were trying to...</h3>
        <div className="with-img">
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