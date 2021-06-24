/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const path = require('path');
const postData = require('./client/src/db/queries.js');
const addContact = require('./client/src/helpers/mailchimp.js');

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3002;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(cors());

// ROUTES
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
})
app.post('/data', postData)
app.post('/mailchimp', addContact)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('W+M is listening on port 3002');
  });
}