const express = require('express');
var cors = require('cors');
var app = express();

app.use(cors({
  origin: '*'
}));

const port = 3600

app.get('/', (req, res) => {
  res.send(`Example app listening on port http://localhost:${port}`)
})


app.post('/register', (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})