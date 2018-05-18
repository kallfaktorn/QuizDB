const DB = require('./db');

exports.findAll = function(res) {
  let db = new DB();

  db.query( 'SELECT * FROM user' )
    .then( rows => {
      res.send(rows);
      db.close();
    } )
};
exports.findById = function(req, res) {
  console.log('da req');
  console.log(req.payload);
};
exports.add = function(req, res) {
  console.log('da req');
  console.log(req.body);
  console.log(req.data);
  console.log(req.payload);
};
exports.update = function() {};
exports.delete = function() {};
