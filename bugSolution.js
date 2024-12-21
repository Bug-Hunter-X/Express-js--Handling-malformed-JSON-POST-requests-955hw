const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Check if the request body is valid
  if (!user || !user.name) {
    return res.status(400).send({ error: 'Missing or invalid user data' });
  }
  console.log(user.name);
  res.send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));