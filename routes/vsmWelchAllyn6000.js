var express = require('express')
var router = express.Router()
var VsmWelchAllyn6000 = require('../models/VsmWelchAllyn6000')

router.get('/', function(req, res, next) {
	VsmWelchAllyn6000.getAllRecords(function(err, rows) {
		if(err)
			res.json(err);
		else
			res.json(rows);
	});
});

router.get('/:id', function(req, res, next) {
	if(req.params.id) {
		VsmWelchAllyn6000.getVsmWelchAllyn6000ById(req.params.id, function(err, rows) {
			if(err)
				res.json(err);
			else
				res.json(rows)
		});
	} else {
		VsmWelchAllyn6000.getAllRecords(function(err, rows) {
			if(err)
				res.json(err);
			else
				res.json(rows);
		});
	}
});

router.post('/', function(req, res, next) {
	VsmWelchAllyn6000.addVsmWelchAllyn6000(req.body, function(err, count) {
		if(err)
			res.json(err);
		else
			res.json(req.body);
	});
});

router.delete('/:id', function(req, res, next) {
	VsmWelchAllyn6000.deleteVsmWelchAllyn6000(req.params.id, function(err, count) {
		if(err)
			res.json(err);
		else
			res.json(count);
	});
});

router.put('/:id', function(req, res, next) {
	VsmWelchAllyn6000.updateVsmWelchAllyn6000(req.params.id, req.body, function(err, rows) {
		if(err)
			res.json(err);
		else
			res.json(rows);
	});
});

module.exports = router;