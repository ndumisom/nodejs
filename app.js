var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
const charactersApi = require('./scripts/routes/character');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.all('*', function (req, res, next) {
  let apikey = req.body.apikey || req.query.apikey;
  if (apikey)
      next()
  else {
    res.send("please provide apikey");
  }
});

app.use('/api', charactersApi());

app.listen(3000, function () {
  console.log('Server running...');
});
