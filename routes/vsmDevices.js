var express = require('express')
var router = express.Router()
var VsmDevices = require('../models/VsmDevices')

router.get('/', function(req, res, next) {
	VsmDevices.getAllRecords(function(err, rows) {
		if(err)
			res.json(err);
		else
			res.json(rows);
	});
});

router.get('/:id', function(req, res, next) {
	if(req.params.id) {
		VsmDevices.getVsmDeviceById(req.params.id, function(err, rows) {
			if(err)
				res.json(err);
			else
				res.json(rows)
		});
	} else {
		VsmDevices.getAllRecords(function(err, rows) {
			if(err)
				res.json(err);
			else
				res.json(rows);
		});
	}
});

router.post('/', function(req, res, next) {
	VsmDevices.addVsmDevice(req.body, function(err, count) {
		if(err)
			res.json(err);
		else
			res.json(req.body);
	});
});

router.delete('/:id', function(req, res, next) {
	VsmDevices.deleteVsmDevice(req.params.id, function(err, count) {
		if(err)
			res.json(err);
		else
			res.json(count);
	});
});

router.put('/:id', function(req, res, next) {
	VsmDevices.updateVsmDevice(req.params.id, req.body, function(err, rows) {
		if(err)
			res.json(err);
		else
			res.json(rows);
	});
});

module.exports = router;