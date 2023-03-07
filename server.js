/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const path = require('path');
// const postData = require('./client/src/db/queries.js');
const addContact = require('./client/src/helpers/mailchimp.js');

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3002;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const root = require('path').join(__dirname, 'client', 'dist')
app.use(express.static(root));
app.use(cors());

// ROUTES

app.get("*", (req, res) => {
  res.sendFile('index.html', { root });
})

app.post('/mailchimp', addContact)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('W+M is listening on port 3002');
  });
}ac