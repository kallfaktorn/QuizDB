let userDB = require('../db/userDB');

exports.findAll = function(req, res) {
  userDB.findAll(res);
};
exports.findById = function() {};
exports.add = function() {};
exports.update = function() {};
exports.delete = function() {};
