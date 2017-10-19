// eslint-space-in-parens
const bcrypt = require('bcrypt-as-promised');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

const router = express.Router();

// See all user information
router.get('/test-data', (req, res, next) => {
  return knex('datas').select('id', 'bond','equities','fx', 'fxoptions', 'swaps')
  .then((data) => {
    console.log('data=', data);
    return res.status(200).send(data);
  })
  .catch((err) => {
    next(err);
  });
});


module.exports = router;
