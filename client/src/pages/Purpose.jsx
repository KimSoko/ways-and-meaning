import React from 'react';
import AppBar from '../nav/AppBar.jsx';
import DecideApp from '../wmm/DecideApp.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';

const Purpose = () => {
  return (
    <div className="page-container">
      <AppBar />
      <ToolkitBar />
      <div className="two-col-container">
        <div className="left-container">
          <h1>THE PURPOSE TOOLKIT</h1>
          <h3></h3>
          <div className="two-col-container">
            <div className="left-container"></div>
            <p>Let’s kick off this relationship with a gift, the purpose toolkit includes:
            </p>
            <ul>
              <li>The purpose framework minibook with printables of framework</li>
              <li>The know yourself guide to help you fill out that framework</li>
              <li>The Roadmap: a simple planning tool</li>
              <li>A cool little to do list template</li>
            </ul>
            <p>BONUS: A basic budget tracker (because we all need it)</p>
            <p>When you sign up you’ll be subscribed to my email list, ideas for living better. Bits of wisdom sent directly to your inbox, whenever inspiration strikes.</p>
            <p>This email is short and sweet but carries a punch. I promise not to annoy you all the time.</p>
          </div>
          <div className="right-container">
            {/* EMAIL SIGN UP FORM GOES HERE */}
          </div>
        </div>
      </div>
      <IdeasBar />
      <AboutBar />
    </div>
  )
};

export default Purpose;