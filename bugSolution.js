const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })); // Increased limit
app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('Success!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});