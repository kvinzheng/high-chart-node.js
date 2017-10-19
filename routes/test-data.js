const express = require('express');
const knex = require('../knex');

const router = express.Router();

// See all user information
router.get('/test-data', (req, res, next) => {
  return knex('datas').select('id', 'bond','equities','fx', 'fxoptions', 'swaps')
  .then((data) => {
    return res.status(200).send(data);
  })
  .catch((err) => {
    next(err);
  });
});


module.exports = router;
