var express = require('express');
var router = express.Router();

var Intraorals = require('../models/intraOrals')

router.get('/', function(req, res, next) {
  Intraorals.getAllRecords(function(err,rows){
    if(err)
    res.json(err)
    else
    res.json(rows);
  })
});

module.exports = router;
