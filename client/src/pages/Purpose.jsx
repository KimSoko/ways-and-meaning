import React, { useState } from 'react';
import axios from 'axios';
import AppBar from '../nav/AppBar.jsx';
import DecideApp from '../wmm/DecideApp.jsx';
import ToolkitBar from '../nav/ToolkitBar.jsx';
import IdeasBar from '../nav/IdeasBar.jsx';
import AboutBar from '../nav/AboutBar.jsx';

const Purpose = ({ handleDisplay, handleMouseEnter, handleMouseLeave, menuDisplay }) => {
  const [email, setEmail] = useState('');

  const handleClick = (e) => {
    e.target.value = '';
  };

  const handleChange = (e) => {
    let newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleEmail = () => {
    // axios.post('/mailchimp', {email: email})
    // .then((response) => {
    //   console.log('From handleEmail ', response);
    // })
    // .catch((err) => {
    //   console.log('From handleEmail ', err);
    // })
  };

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
      <div className="two-col-container">
        <div className="left-container">
          <div className="two-col-container">
            <div className="left-container-nested">
              <h1>Purpose Toolkit</h1>
            </div>
            <div className="inline">
              <button className="home-button">home</button>
            </div>
          </div>

          <h3>A gift for you</h3>
          <div className="two-col-container">
            <div className="left-container-nested top-margin">
              <p>Let’s kick off this relationship right, the purpose toolkit includes:
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
              <form id="email-form">
                <input type="text" name="email" id="email-input" defaultValue="name@email.com" onClick={handleClick} onChange={handleChange}></input>
                <button className="button-form" type="button" id="email-button" onClick={handleEmail}>Sign up</button>
              </form>
            </div>
            <div className="right-container">

            </div>
          </div>
        </div>
      </div>
      <IdeasBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleDisplay={handleDisplay}
        menuDisplay={menuDisplay} />
      <AboutBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        handleDisplay={handleDisplay}
        menuDisplay={menuDisplay} />
    </div>
  )
};

export default Purpose;