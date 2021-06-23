import React from 'react';
import AppBar from './nav/AppBar.jsx';
import DecideApp from './DecideApp.jsx';
import ToolkitBar from './nav/ToolkitBar.jsx';
import IdeasBar from './nav/IdeasBar.jsx';
import AboutBar from './nav/AboutBar.jsx';

const Purpose = () => {
  return (
    <div className="decide">
      <AppBar />
      <ToolkitBar />
      <DecideApp />
      <IdeasBar />
      <AboutBar />
    </div>
  )
};

export default Purpose;