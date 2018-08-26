var express = require('express');
var bodyParser = require('body-parser');

const constants = require('../constants/constants');
const charactersService = require('../services/character');

module.exports = function expressRest() {

    var router = express.Router();
    router.use(bodyParser.json());
    router.use(function (req, res, next) {
        next();
    });

    addRestMethods(router);
    return router;
};

function addRestMethods(router) {

    router.get('/marvel/characters', (req, res) => {
      charactersService.getAllCharacters().then(response => {
        res.send(response);
      })
      .catch(error => {
        console.log("error", error);
      });
    });

    router.get('/marvel/characters/mock', (req, res) => {
      charactersService.getAll().then(response => {
        res.send(response);
      })
      .catch(error => {
        console.log("error", error);
        res.json({error:error});
      });
    });

    router.get('/marvel/character/profile', (req, res) => {
      charactersService.getProfile().then(response => {
        res.send(response);
      })
      .catch(error => {
        console.log("error", error);
      });
    });

    return router;
}
