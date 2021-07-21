/* eslint-disable react/prop-types */
import React from 'react';

const TopicError = ({ setShowTopicError }) => {

  const handleClose = () => {
    setShowTopicError(false);
  }

  return (
    <div className="modal" onClick={handleClose}>
      <h2>You must choose a topic to continue</h2>
      <p>(click to close)</p>
    </div>
  );
};

export default TopicError;