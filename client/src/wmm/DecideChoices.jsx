/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';

const DecideChoices = ({ list, handleVote }) => {

  return (
    <div className="left-container no-top-margin bottom-container scroll">
      {list && (
        <div className="options-container">
          {list[0].display === 'A' && (
            <>
              <div key={`${list[0].name}-${list[0].value}`} id="left-div">
                <button className="option-button" id="option-A" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>
              <p className="or">or</p>
              <div key={`${list[1].name}-${list[1].value}`} id="right-div">
                <button className="option-button" id="option-B" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )}

          {list[0].display === 'B' && (
            <>
              <div key={`${list[0].name}-${list[0].value}`} id="left-div">
                <button className="option-button" id="option-C" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>
              <p className="or">or</p>
              <div key={`${list[1].name}-${list[1].value}`} id="right-div">
                <button className="option-button" id="option-D" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )}

          {list[0].display === 'C' && (
            <>
              <div key={`${list[0].name}-${list[0].value}`} id="left-div">
                <button className="option-button" id="option-E" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>
              <p className="or">or</p>
              <div key={`${list[1].name}-${list[1].value}`} id="right-div">
                <button className="option-button" id="option-F" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )}
        </div>
      )}
      <div className="instructions">
        <p>Click on the option that matters most to you. <strong>You must choose one.</strong> The app will continue to offer new options until all possible combinations have been considered. When you're done, your results will be displayed automatically.</p>
      </div>
    </div>
  )
};
export default DecideChoices;