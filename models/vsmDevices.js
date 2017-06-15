var db = require('../dbconnection');

var VsmDevices = {
		getAllRecords : function(callback) {
			return db.query("SELECT * FROM device_vsm", callback);
		},
		
		getVsmDeviceById : function(id, callback) {
			return db.query("SELECT * FROM device_vsm WHERE id = ?", [ id ],
					callback);
		},
		
		addVsmDevice : function(VsmDevices, callback) {
			return db.query(
				"INSERT INTO device_vsm VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				[VsmDevices.deviceid],
					[VsmDevices.date],
					[VsmDevices.firmware],
					[VsmDevices.heightdisplayunit],
					[VsmDevices.location], 
					[VsmDevices.modelname], 
					[VsmDevices.modelnumber], 
					[VsmDevices.nibpdisplayunit],
					[VsmDevices.serialnumber],
					[VsmDevices.tempdisplayunit],
					[VsmDevices.weightdisplayunit ], callback);
		},
		
		deleteVsmDevice : function(id, callback) {
			return db.query("DELETE FROM device_vsm WHERE id = ?", [ id ], callback);
		},
		
		updateVsmDevice : function(id, VsmDevices, callback) {
			return db.query("UPDATE device_vsm SET " +
					"deviceid = ?, " +
					"date = ?, " +
					"firmware = ?, " +
					"heightdisplayunit = ?, " +
					"location = ?, " +
					"modelname = ?, " +
					"modelnumber = ?, " +
					"nibpdisplayunit = ?, " +
					"serialnumber = ?, " +
					"tempdisplayunit = ?, " +
					"weightdisplayunit = ?, ", [ 
						VsmDevices.deviceid, 
						VsmDevices.date,
						VsmDevices.firmware,
						VsmDevices.heightdisplayunit,
						VsmDevices.location,
						VsmDevices.modelname, 
						VsmDevices.modelnumber, 
						VsmDevices.nibpdisplayunit, 
						VsmDevices.serialnumber, 
						VsmDevices.tempdisplayunit, 
						VsmDevices.weightdisplayunit
					], callback);
		}
};

module.exports = VsmDevices;