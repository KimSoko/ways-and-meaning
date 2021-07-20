/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const Fear = () => {
  return (
    <div className="page-container">
      <div className="header">
        <div className="left-container">
          <h1>On Fear and Confidence</h1>
        </div>
        <div className="right-container">
          <Link to="/">
            <button className="home-button">home</button>
          </Link>
        </div>
      </div>

      <div className="sub-head">
        <h3>by Kim Soko Schaefer</h3>
      </div>
      <div className="body">
        <div className="inner-text">
          <p>There is one thing I know for sure about following any dream or doing anything remotely outside of your comfort zone. The difference between success and failure lies in your ability to overcome fear.</p>
          <p>Everybody fails. Those with the greatest success, often failed the most. They have to. It’s a necessary part of the process.</p>
          <p>So why does it breed so much fear in us? And more importantly, how the hell can we move on from it?</p>
          <p>I wanted to launch this project with an article that epitomized my journey to get here, to realize this dream of mine. And when I thought about what that story might be, I kept coming back to the biggest battle I’ve ever fought in my life: the war on fear.</p>
          <br />
          <h2>My war on fear</h2>
          <p>I was a fearless child. I also lived without challenge, without hardship, without the opportunity to experience failure. As a kid I was outgoing and cute. I made friends easily. I was smart, school was easy for me. Even college was a breeze.</p>
        </div>
      </div>
    </div>
  )
};

export default Fear;