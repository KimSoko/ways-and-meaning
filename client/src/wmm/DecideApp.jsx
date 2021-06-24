import React, { useState, useEffect } from 'react';

const DecideApp = () => {
  return (
    <div className="two-col-container">
      <div className="left-container">
        <div className="two-col-container">
          <div className="left-container-nested">
            <h1>What Matters Most</h1>
          </div>
          <div className="inline">
            <button className="home-button">home</button>
          </div>
        </div>
        <h3>A decision making app</h3>
      </div>
    </div>
  )
};

export default DecideApp;