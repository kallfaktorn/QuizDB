let userDB = require('../db/userDB');

exports.findAll = function(req, res) {
  console.log('finding users here');
  userDB.findAll(res);
};
exports.findById = function(req, res) {
  console.log('finding user here');
  userDB.findAll(req, res);
};
exports.add = function(req, res) {
  console.log('adding user here');
  userDB.add(req, res);
};
exports.update = function() {
  console.log('updating user here');
};
exports.delete = function() {
    console.log('deleting user here');
};
