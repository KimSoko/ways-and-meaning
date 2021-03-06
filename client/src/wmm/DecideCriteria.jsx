/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DecideCriteria = ({ handleSubmit, handleCriteria, topic }) => {

  const makeString = (string) => {
    if (string === 'job') {
      return 'selecting your next job';
    } else if (string === 'career') {
      return 'choosing a new career';
    } else if (string === 'live') {
      return 'deciding where to live';
    } else if (string === 'home') {
      return 'choosing a new home';
    } else if (string === 'relationships') {
      return 'understanding what qualities matter in a partner';
    } else if (string === 'wmm') {
      return 'clarifying what matters most in your life';
    } else if (string === 'other') {
      return 'deciding about your topic';
    } else {
      return `${topic}`;
    }
  }

  return (
    <div className="left-container criteria-750">
      <div className="wmm-form-container criteria">
        <form className="wmm-topic-form">
          <h4 className="wmm-form-title">{`2. What criteria are you considering when ${makeString(topic)}?`}</h4>
          <div className="wmm-topic-choices">
            <div id="criteria-div">
              <div>
                <div>
                  <label className="criteria-label" htmlFor="1" id="label-1">1.</label>
                  <input type="text" className="criteria-input" id="input-1" name="1" onChange={handleCriteria} />
                </div>
                <div>
                  <label className="criteria-label" htmlFor="2" id="label-2">2.</label>
                  <input type="text" className="criteria-input" id="input-2" name="2" onChange={handleCriteria} />
                </div>
                <div>
                  <label className="criteria-label" htmlFor="3" id="label-3">3.</label>
                  <input type="text" className="criteria-input" id="input-3" name="3" onChange={handleCriteria} />
                </div>
                <div>
                  <label className="criteria-label" htmlFor="4" id="label-4">4.</label>
                  <input type="text" className="criteria-input" id="input-4" name="4" onChange={handleCriteria} />
                </div>
              </div>
              <div>
                <div>
                  <label className="criteria-label" htmlFor="5" id="label-5">5.</label>
                  <input type="text" className="criteria-input" id="input-5" name="5" onChange={handleCriteria} />
                </div>
                <div>
                  <label className="criteria-label" htmlFor="6" id="label-6">6.</label>
                  <input type="text" className="criteria-input" id="input-6" name="6" onChange={handleCriteria} />
                </div>
                <div>
                  <label className="criteria-label" htmlFor="7" id="label-7">7.</label>
                  <input type="text" className="criteria-input" id="input-7" name="7" onChange={handleCriteria} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button className="form-next" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default DecideCriteria;