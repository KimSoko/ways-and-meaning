/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DecideTopic from './DecideTopic.jsx';
import DecideCriteria from './DecideCriteria.jsx';
import DecideChoices from './DecideChoices.jsx';
import image from '../../dist/media/choices-2.png';
import helpers from '../helpers/wmm.js';

const DecideApp = () => {
  const [wmmDisplay, setWmmDisplay] = useState('start');
  const [topic, setTopic] = useState('');
  const [criteria, setCriteria] = useState(helpers.emptyCriteria);
  const [list, setList] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let copy = options.slice();
    let popped = copy.pop();
    setList(popped);
  }, [options])

  const handleNext = () => {
    if (wmmDisplay === 'start') {
      setWmmDisplay('topic');
    } else if (wmmDisplay === 'topic') {
      setWmmDisplay('criteria');
    } else if (wmmDisplay === 'criteria') {
      setWmmDisplay('decide');
    } else if (wmmDisplay === 'decide') {
      setWmmDisplay('results');
    } else if (wmmDisplay === 'results') {
      setWmmDisplay('start');
    }
  }

  const handleCriteria = (e) => {
    e.preventDefault();
    let oldCriteria = criteria.slice();
    let num = (e.target.name);
    for (let i = 0; i < oldCriteria.length; i++) {
      if (oldCriteria[i].name === num) {
        oldCriteria[i].value = e.target.value;
      }
    }
    setCriteria(oldCriteria);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newOptions = helpers.createOptions(criteria);
    setOptions(newOptions);
    setWmmDisplay('decide');
  };

  const handleVote = (e) => {
    let winner = e.target.name;
    let oldCriteria = criteria.slice();
    for (let i = 0; i < oldCriteria.length; i++) {
      if (oldCriteria[i].name === winner) {
        oldCriteria[i].score++;
      }
    }

    setCriteria(oldCriteria);
    let oldOptions = options.slice();
    oldOptions.pop();
    setOptions(oldOptions);
    if (oldOptions.length === 0) {
      setWmmDisplay('results');
    }
  }

  return (
    <div className="two-col-container">
      <div className="outer-left-container" style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="left-container">
          <div className="two-col-container">
            <div className="left-container-nested">
              <h1>What Matters Most</h1>
            </div>
            <div className="inline">
              <Link to="/">
                <button className="home-button">home</button>
              </Link>
            </div>
          </div>
          <h3>A decision making app</h3>
        </div>
        {wmmDisplay === 'start' && (
          <div className="two-col-container no-top-margin with-button">
            <div className="left-container no-top-margin">
              <div className="inner-text no-top-margin">
                <p>Making major life decisions is hard. This app should help make it a bit easier by helping you to prioritize what matters most.</p>
                <p>To get started...</p>
                <ol>
                  <li>Select a topic</li>
                  <li>Enter 3-7 criteria you’re considering when making the decision</li>
                  <li>For every combination of options, choose one thing that matters most</li>
                  <li>Review your results and use them to make smarter decisions</li>
                </ol>
                <button onClick={handleNext} className="form-next get-started">Get Started</button>
              </div>
            </div>
          </div>
        )}
        {wmmDisplay === 'topic' && (
          <div className="left-container no-top-margin">
            <DecideTopic
              setTopic={setTopic}
              handleNext={handleNext} />
          </div>
        )}
        {wmmDisplay === 'criteria' && (
          <div className="left-container no-top-margin">
            <DecideCriteria
              topic={topic}
              handleCriteria={handleCriteria}
              handleSubmit={handleSubmit} />
          </div>
        )}
        {wmmDisplay === 'decide' && (
          <div>
            <DecideChoices
              list={list}
              handleVote={handleVote}
              handleNext={handleNext} />
          </div>
        )}
        {wmmDisplay === 'results' && (
          <div></div>
        )}
      </div>
    </div>
  )
};

export default DecideApp;