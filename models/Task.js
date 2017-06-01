var db = require('../dbconnection');
var Task = {
    getAllTask : function(callback){
        return db.query("SELECT * FROM task", callback);
    },

    getTaskById : function(Id,callback){
        return db.query("SELECT * FROM task WHERE Id=?", [Id], callback);
    },

    addTask : function(Task, callback){
        return db.query("INSERT into task values (?,?,?)", [Task.Id, Task.Title, Task.Status], callback)
    },

    deleteTask : function(id, callback){
        return db.query("DELETE FROM task WHERE Id=?", [Id],callback)
    },

    updateTask : function( id, Task, callback){
        return db.query("UPDATE TASK set Title=?, Status=? WHERE Id=?",[Task.Title,Task.Status,Id], callback )
    }

};

module.exports = Task;