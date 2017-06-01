var db = require('../dbconnection');

var IntraOrals = {
    getAllRecords : function(callback){
        return db.query("SELECT * FROM intraoral", callback);
    }
}


module.exports = IntraOrals;