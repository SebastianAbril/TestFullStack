const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9090;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const arrayData = ["Exampe","Test"];

/**
 * CRUD
 * Create --> POST
 * Read --> GET
 * Update --> PUT
 * Delete --> DELETE
 */

 app.get('/api', (req, res) => {
    return res.send(arrayData);
  });
  
  app.post('/api', (req, res) => {
    const text = req.body.text;
    arrayData.push(text);
    res.send();
  });
  app.put('/api', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/api', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
  
  app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
  );


