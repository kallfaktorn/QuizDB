let sessionDB = require('../db/sessionDB');

exports.createToken = function(req, res) {
  console.log('creating token here');
  sessionDB.createToken(req, res);
};
