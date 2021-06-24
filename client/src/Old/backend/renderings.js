// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import Decide from '../pages/Decide.jsx';
// import Purpose from '../pages/Purpose.jsx';
// import Ideas from '../pages/Ideas.jsx';
// import About from '../pages/About.jsx';

// const makeString = (component) => {
//   const markup = ReactDOMServer.renderToString(Decide);

//   return `
//   <!DOCTYPE html>
//   <html>
//     <head>
//       <title>SSR with RRv5</title>
//     </head>
//     <body>
//       <div id="app">${markup}</div>
//     </body>
//   </html>
// `
// };

// const getApp = (req, res) => {
//   res.send(makeString(Decide))
// };

// const getToolkit = () => {

// };

// const getIdeas = () => {

// };

// const getAbout = () => {

// };

// module.exports = { getApp, getToolkit, getIdeas, getAbout };

// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const Decide = require('../pages/Decide.jsx');
// const Purpose = require('../pages/Purpose.jsx');
// const Ideas = require('../pages/Ideas.jsx');
// const About = require('../pages/About.jsx');