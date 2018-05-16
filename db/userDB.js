const DB = require('./db');

exports.findAll = function(res) {
  let db = new DB();

  db.query( 'SELECT * FROM user' )
    .then( rows => {
      res.send(rows);
      db.close();
    } )
};
exports.findById = function() {};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};
