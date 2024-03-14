'use strict';

const express = require('express');
// create Express app
// about Express itself: https://expressjs.com/
const app = express();

app.get(
  '/',
  async (_, res)=> {
    return res.status(200).json({
      status: 'success',
      message: 'Connected successfully!',
    });
  }
);

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});