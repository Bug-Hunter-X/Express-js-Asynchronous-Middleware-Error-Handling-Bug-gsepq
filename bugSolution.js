const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    try {
      // Simulate potential error
      // const result = someFunctionThatMightThrowAnError();
      res.send('Hello from Express!');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 2000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});