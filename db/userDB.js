const DB = require('./db');

exports.findAll = function(res) {
  let db = new DB();

  db.query( 'SELECT * FROM user' )
    .then( rows => {
      res.send(rows);
      db.close();
    } )
};

exports.findByUserNameInternal = function(username, cb) {
  console.log('da nam');
  console.log(username);

  let db = new DB();
  var sql = "SELECT * FROM user WHERE username = ?";
  db.query(sql, [username]).then( result => {
    console.log('Successfully found user by id');
    cb(null, result[0])
  }, err => {
    console.log(err);
    cb(err, null)
  })
}

exports.findByIdInternal = function(id, cb) {
  console.log('da req');
  console.log(req.payload);

  let db = new DB();
  var sql = "SELECT FROM user WHERE ID = ?";
  db.query(sql, [id.toString()]).then( result => {
    console.log('Successfully found user by id');
    cb(null, result)
  }, err => {
    console.log(err);
    cb(err, null)
  })
}

exports.findById = function(req, res) {

};
exports.add = function(req, res) {
  let db = new DB();
  let user = req.body.data.attributes;
  var users = [
    [user.username, user.email, user.password]
  ];

  var sql = "INSERT INTO user (username, email, password) VALUES ?";
  db.query(sql, [users]).then( result => {
    console.log("1 record inserted");
    console.log (result)
    req.body.data.id = result.insertId.toString()
    res.send(req.body);
    db.close();
  }, err => {
    console.log(err);
    res.send(err);
  } )

    /*, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });*/

};
exports.update = function() {};
exports.delete = function() {};
