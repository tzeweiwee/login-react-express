const express = require('express');

const app = express();
const port = 5001;

app.get('/api/sample', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));