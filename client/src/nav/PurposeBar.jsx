/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PurposeBar = ({ menuDisplay, handleMenuClick, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMenuClick} className="nav-bar purpose-bar">
      <Link to="/purpose">
        <h4>PURPOSE TOOLKIT</h4>
        {menuDisplay === 'purpose' && (
          <div className="nav-bar-expanded purpose-bar">
            <p>A free toolkit to help you better know yourself and your purpose.</p>
            <ol>
              <li>The purpose framework minibook with printables of framework</li>
              <li>The know yourself guide to help you fill out that framework</li>
              <li>The Roadmap: a simple planning tool</li>
              <li>A cool little to do list template</li>
            </ol>
            <p>BONUS: A basic budget tracker (because we all need it)</p>
            <button className="purpose-bar-2 center">Get Yours!</button>
          </div>
        )}
      </Link>
    </div>
  )
};

export default PurposeBar;