import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import image from '../../dist/media/purpose-red.png';
import image2 from '../../dist/media/grid.png';

const Purpose = () => {
  const [email, setEmail] = useState('');

  const handleClick = (e) => {
    e.target.value = '';
  };

  const handleChange = (e) => {
    let newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handleEmail = () => {
    axios.post('/mailchimp', { email: email })
      .then(() => {
      })
      .catch((err) => {
        console.log('From handleEmail ', err);
      })
  };

  return (
    <div className="page-container" style={{
      backgroundImage: 'url(' + image2 + ')',
      backgroundSize: '70%',
      backgroundPosition: '100%',
      backgroundRepeat: 'repeat'
    }}>
      <div className="header">
        <div className="left-container">
          <h1 className="heading">Purpose Toolkit</h1>
        </div>
        <div className="right-container">
          <Link to="/">
            <button className="home-button">home</button>
          </Link>
        </div>
      </div>
      <div className="sub-head">
        <h3>A gift for you</h3>
      </div>
      <div className="body">
        <div className="right-container float-right">
          <img className="right-image" src={image} alt="Purpose Framework" />
        </div>
        <div className="left-container inner-text float-left">
          <p>Let’s kick off this relationship with a gift. The purpose toolkit includes:
          </p>
          <ul>
            <li>The purpose framework minibook with printables of framework</li>
            <li>The know yourself guide to help you fill out that framework</li>
            <li>The Roadmap: a simple planning tool</li>
            <li>A cool little to do list template</li>
          </ul>
          <p>BONUS: A basic budget tracker (because we all need it)</p>
          <p>When you sign up you’ll be subscribed to my email list, ideas for living better. Bits of wisdom sent directly to your inbox, whenever inspiration strikes (which is only a couple of times a year right now).</p>
          <p>This email is short and sweet but carries a punch. I promise not to annoy you all the time.</p>
          <form id="email-form">
            <input type="text" name="email" id="email-input" defaultValue="name@email.com" onClick={handleClick} onChange={handleChange}></input>
            <button className="button-form" type="button" id="email-button" onClick={handleEmail}>Sign up</button>
          </form>
        </div>
      </div>
    </div >
  )
};

export default Purpose;