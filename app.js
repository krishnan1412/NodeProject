const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Krishnan! Node.js is up and running. 🚀');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
