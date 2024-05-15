#!/usr/bin/node

const request = require('request');

const api = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}/`;

request(api, (err, res, body) => {
  console.log(JSON.parse(body).title);
});
