const Q = require('q');
const fs = require('fs');
var request = require('request');
const config = require('../config/config');
const constants = require('../constants/constants');

exports.getAllCharacters = function () {

  let defer = Q.defer();
  let url = config.CHARACTERS_URL+"?apikey="+config.API_KEY;

  request(url, function (error, response, body) {
    if (error) {
      console.log("response", response);
      defer.reject(response);
    }
    else {
      console.log("body", body);
      defer.resolve(body);
    }
  });
  return defer.promise;
}

exports.getAll = function () {
  let defer = Q.defer();
  fs.readFile('mock_data.json', (err, data) => {
      if (err) {
        defer.reject(err);
      }
      else {
      let characters = JSON.parse(data);
      defer.resolve(characters);
    }
  });
  return defer.promise;
}

exports.getProfile = function () {
  let defer = Q.defer();
  fs.readFile('mock_profile.json', (err, data) => {
      if (err) {
        defer.reject(err);
      }
      else {
      let profile = JSON.parse(data);
      defer.resolve(profile);
    }
  });
  return defer.promise;
}
