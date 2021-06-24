const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.jsx';

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3002;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(cors());

app.get("/", (req, res, next) => {
  const appComp = ReactDOM.renderToString(
    <App />
  )
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RRv5</title>
        <script src="/bundle.js" defer></script>
        <link href="/styles.css" rel="stylesheet">
      </head>
      <body>
        <div id="app">${appComp}</div>
      </body>
    </html>
  `
)
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('W+M is listening on port 3002');
  });
}