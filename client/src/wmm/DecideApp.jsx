/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DecideTopic from './DecideTopic.jsx';
import DecideCriteria from './DecideCriteria.jsx';
import DecideChoices from './DecideChoices.jsx';
import DecideResults from './DecideResults.jsx';
import image from '../../dist/media/choices-2.png';
import helpers from '../helpers/wmm.js';

const DecideApp = () => {
  const [wmmDisplay, setWmmDisplay] = useState('topic');
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
    if (wmmDisplay === 'topic') {
      setWmmDisplay('criteria');
    } else if (wmmDisplay === 'criteria') {
      setWmmDisplay('decide');
    } else if (wmmDisplay === 'decide') {
      setWmmDisplay('results');
    } else if (wmmDisplay === 'results') {
      setWmmDisplay('topic');
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

  const handlePost = (e) => {
    let data = helpers.formatForDB(criteria);
    data.topic = topic;
    axios.post('/data', data)
      .then((response) => {
        console.log('POST to db successful ', response);
        handleNext();
      })
      .catch((err) => {
        throw err;
      })
  }

  return (
    <div className="two-col-container">
      <div className="outer-left-container" style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="left-container top-container">
          <div className="two-col-container no-wrap">
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
        {wmmDisplay === 'topic' && (
          <div className="left-container bottom-container no-top-margin scroll">
            <DecideTopic
              setTopic={setTopic}
              handleNext={handleNext} />
          </div>
        )}
        {wmmDisplay === 'criteria' && (
          <div className="left-container bottom-container no-top-margin scroll">
            <DecideCriteria
              topic={topic}
              handleCriteria={handleCriteria}
              handleSubmit={handleSubmit} />
          </div>
        )}
        {wmmDisplay === 'decide' && (
          <DecideChoices
            list={list}
            handleVote={handleVote}
            handleNext={handleNext} />
        )}
        {wmmDisplay === 'results' && (
          <DecideResults
            criteria={criteria}
            topic={topic}
            handlePost={handlePost}
          />
        )}
      </div>
    </div>
  )
};

export default DecideApp;