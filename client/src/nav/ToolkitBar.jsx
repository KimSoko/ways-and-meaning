import React from 'react';
import { Link } from 'react-router-dom';

const ToolkitBar = ({ menuDisplay, handleDisplay, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleDisplay} className="nav-bar toolkit-bar">
      <h4>PURPOSE TOOLKIT</h4>
      {menuDisplay === 'toolkit' && (
        <div className="nav-bar-expanded toolkit-bar">
          <p>A free toolkit to help you better know yourself and your purpose.</p>
          <ol>
            <li>The purpose framework minibook with printables of framework</li>
            <li>The know yourself guide to help you fill out that framework</li>
            <li>The Roadmap: a simple planning tool</li>
            <li>A cool little to do list template</li>
          </ol>
          <p>BONUS: A basic budget tracker (because we all need it)</p>
          <Link to="/purpose">
            <button className="toolkit-bar-2 center">Get Yours!</button>
          </Link>
        </div>
      )}
    </div>
  )
};

export default ToolkitBar;