/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DecideResults = ({ handlePost, criteria, topic }) => {
  const sorted = criteria.slice().filter(obj => obj.value !== '').sort((a, b) => b.score - a.score);

  return (
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
          <tbody>
            {sorted.map((item) => {
              if (sorted.indexOf(item) === 0) {
                return (
                  <tr key={`${item.name}-${item.score}`}>
                    <td className="table-first-row" id="row-score">1</td>
                    <td className="table-first-row" id="row-name">{item.value}</td>
                    <td className="table-first-row" id="row-score">{item.score}</td>
                  </tr>
                )
              } else {
                return (
                  <tr key={`${item.name}-${item.score}`}>
                    <td className="table-row" id="row-score">{sorted.indexOf(item) + 1}</td>
                    <td className="table-row" id="row-name">{item.value}</td>
                    <td className="table-row" id="row-score">{item.score}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
      <button className="form-next" onClick={handlePost}>Next</button>
    </div>
  );
};

export default DecideResults;