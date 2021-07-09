/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DecideResults = ({ handlePost, criteria, topic }) => {
  const sorted = criteria.slice().filter(obj => obj.value !== '').sort((a, b) => b.score - a.score);

  return (
    <div className="two-col-container bottom-container scroll">
      <div className="left-container no-top-margin">
        <div className="table-container">
          <table>
            <thead>
              <tr className="table-header">
                <th className="table-header short" id="header-rank">RANK</th>
                <th className="table-header" id="header-name">CRITERIA</th>
                <th className="table-header short" id="header-score">SCORE</th>
              </tr>
            </thead>
            <tbody className="top-border bottom-border">
              {sorted.map((item) => {
                if (sorted.indexOf(item) === 0) {
                  return (
                    <tr key={`${item.name}-${item.score}`}>
                      <td className="table-first-row left-border" id="row-score">1</td>
                      <td className="table-first-row" id="row-name">{item.value}</td>
                      <td className="table-first-row right-border" id="row-score">{item.score}</td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={`${item.name}-${item.score}`}>
                      <td className="table-row" id="row-score">{sorted.indexOf(item) + 1}</td>
                      <td className="table-row" id="row-name">{item.value}</td>
                      <td className="table-row right-border" id="row-score">{item.score}</td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="right-container no-top-margin">
        <div className="inner-text no-top-margin help-message-container">
          <h2 className="help-message">Wanna help more people?</h2>
          <p>I want to help everybody make better decisions in life,
            But in order to do that, I need your help.
            Click the button below and I'll store your data (no email) and analyze the results to improve decision making for everybody!</p>
        </div>
        <button className="form-next help-button" onClick={handlePost}>I wanna help</button>
      </div>
    </div>
  );
};

export default DecideResults;