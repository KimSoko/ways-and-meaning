import React from 'react';
import ReactDOM from 'react-dom';

const Ideas = () => {
  return (
    <div className="ideas">
      <header className="header-3-col">
        <nav className="menu-main">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="https://www.waysandmeaning.com">Home</a>
            </li>
            <li className="menu-item">
              <a href="https://www.waysandmeaning/articles.com">Ideas</a>
            </li>
            <li className="menu-item">
              <a href="https://www.waysandmeaning.com/about">About</a>
            </li>
          </ul>
        </nav>
        <h1 id="header-title">WAYS + MEANING</h1>
        <div>
          <p id="header-sub">Ideas for better living</p>
        </div>
      </header>
      <main>
        <h1>This is the Ideas Page</h1>
      </main>
      <footer>

      </footer>
    </div>
  )
};

export default Ideas;