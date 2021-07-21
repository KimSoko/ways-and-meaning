/* eslint-disable react/prop-types */
import React from 'react';

const CriteriaError = ({ setShowCriteriaError }) => {

  const handleClose = () => {
    setShowCriteriaError(false);
  }

  return (
    <div className="modal" onClick={handleClose}>
      <h2>You must define at least 3 criteria to continue</h2>
      <p>(click to close)</p>
    </div>
  );
};

export default CriteriaError;