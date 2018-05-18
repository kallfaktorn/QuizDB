let userDB = require('../db/userDB');

exports.findAll = function(req, res) {
  console.log('finding users here');
  userDB.findAll(res);
};
exports.findById = function() {
  console.log('finding user here');
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
