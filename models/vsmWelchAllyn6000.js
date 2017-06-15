var db = require('../dbconnection');

var VsmWelchAllyn6000 = {
	getAllRecords : function(callback) {
		return db.query("SELECT * FROM patient_vsm", callback);
	},

	getVsmWelchAllyn6000ById : function(id, callback) {
		return db.query("SELECT * FROM patient_vsm WHERE id = ?", [ id ],
				callback);
	},

	addVsmWelchAllyn6000 : function(VsmWelchAllyn6000, callback) {
		return db.query(
			"INSERT INTO patient_vsm " + 
			"(reading, clinicianid, date, diastolic, height, hr, map, o2sat, pain, patientid, pulse, respiration, systolic, temperature, weight, bmi, iddevice) " + 
			"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
			[ VsmWelchAllyn6000.reading,
				VsmWelchAllyn6000.clinicianid,
				VsmWelchAllyn6000.date,
				VsmWelchAllyn6000.diastolic,
				VsmWelchAllyn6000.height, 
				VsmWelchAllyn6000.hr,
				VsmWelchAllyn6000.map, 
				VsmWelchAllyn6000.o2sat,
				VsmWelchAllyn6000.pain,
				VsmWelchAllyn6000.patientid,
				VsmWelchAllyn6000.pulse,
				VsmWelchAllyn6000.respiration,
				VsmWelchAllyn6000.systolic,
				VsmWelchAllyn6000.temperature,
				VsmWelchAllyn6000.weight,
				VsmWelchAllyn6000.bmi,
				VsmWelchAllyn6000.iddevice ], callback);
	},
	
	deleteVsmWelchAllyn6000 : function(id, callback) {
		return db.query("DELETE FROM patient_vsm WHERE id = ?", [ id ], callback);
	},
	
	updateVsmWelchAllyn6000 : function(id, VsmWelchAllyn6000, callback) {
		return db.query("UPDATE patient_vsm SET " +
				"reading = ?, " +
				"clinicianid = ?, " +
				"patientid = ? " + 
				"WHERE id = ?", 
				[ VsmWelchAllyn6000.reading, 
					VsmWelchAllyn6000.clinicianid, 
					VsmWelchAllyn6000.patientid,  
					id ], callback);
	}
};

module.exports = VsmWelchAllyn6000;