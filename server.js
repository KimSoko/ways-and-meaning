const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3002;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(cors());

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('W+M is listening on port 3002');
  });
}