import React, { useState } from 'react';

const DecideTopic = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentSort, setCurrentSort] = useState('1. Select a topic');
  const [topic, setTopic] = useState('');

  const handleHover = () => {
    setShowOptions(true);
  };

  const handleLeave = () => {
    setShowOptions(false);
  };

  const handleTopic = (e) => {
    const option = e.target.innerHTML;
    setTopic(option);
    setShowOptions(false);
  }

  return (
    <div className="wmm-topic-container">
      <div className="wmm-dropdown-container">
        {!showOptions && (
          <div className="dropdown-hidden" onMouseOver={handleHover} onFocus={handleHover}>
            <div className="dropdown-caret">
              {currentSort}
              <i className="fa fa-caret-down" id="sortCaret" />
            </div>
          </div>
        )}
        {showOptions && (
          <div className="dropdown-visible">
            <div className="dropdown-caret">
              {currentSort}
              <i className="fa fa-caret-down" id="sortCaret" />
            </div>
            <div className="dropdown-content" onMouseOver={handleHover} onMouseLeave={handleLeave} onFocus={handleLeave}>
              <div className="dropdown-label" role="navigation" onClick={handleTopic} onKeyDown={handleTopic}>Choose a new job</div>
              <div className="dropdown-label" role="navigation" onClick={handleTopic} onKeyDown={handleTopic}>Pick a new career</div>
              <div className="dropdown-label" role="navigation" onClick={handleTopic} onKeyDown={handleTopic}>Decide where to live</div>
              <div className="dropdown-label" role="navigation" onClick={handleTopic} onKeyDown={handleTopic}>Decide which home to buy</div>
              <div className="dropdown-label" role="navigation" onClick={handleTopic} onKeyDown={handleTopic}>Determine whom to spend your life with</div>
              <div className="dropdown-label" role="navigation" onClick={handleTopic} onKeyDown={handleTopic}>Clarify what matters most in life</div>
              <div className="dropdown-label" role="navigation" onClick={handleTopic} onKeyDown={handleTopic}>Other</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecideTopic;
