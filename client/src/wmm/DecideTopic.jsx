/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DecideTopic = ({ handleNext, setTopic }) => {
   const handleTopic = (e) => {
    const option = e.target.id;
    console.log(option);
    setTopic(option);
  }

  return (
    <div className="wmm-topic-container">
      <div className="wmm-form-container">
        <form className="wmm-topic-form">
          <h4 className="wmm-form-title">1. What decision do you need help with today?</h4>
          <div className="wmm-topic-choices">
            <input className="radio-input" type="radio" onClick={handleTopic} id="job" name="topic" />
            <label className="form-content" htmlFor="job">Choose a new job</label><br />
            <input className="radio-input" type="radio" onClick={handleTopic} id="career" name="topic" />
            <label className="form-content" htmlFor="career">Pick a new career</label><br />
            <input className="radio-input" type="radio" onClick={handleTopic} id="live" name="topic" />
            <label className="form-content" htmlFor="live">Decide where to live</label><br />
            <input className="radio-input" type="radio" onClick={handleTopic} id="home" name="topic" />
            <label className="form-content" htmlFor="home">Decide which home to pick</label><br />
            <input className="radio-input" type="radio" onClick={handleTopic} id="relationships" name="topic" />
            <label className="form-content" htmlFor="relationships">Choose a partner</label><br />
            <input className="radio-input" type="radio" onClick={handleTopic} id="wmm" name="topic" />
            <label className="form-content" htmlFor="wmm">Clarify what matters most in life</label><br />
            <input className="radio-input" type="radio" onClick={handleTopic} id="other" name="topic" />
            <label className="form-content" htmlFor="other">Other</label><br />
          </div>
        </form>
      </div>
      <button className="form-next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default DecideTopic;
