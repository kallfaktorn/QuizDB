let bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
let userDB = require('./userDB');
const config = require('../config/secret');

exports.createToken = function(req, res) {
  userDB.findByUserNameInternal(req.body.username, function(err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    const saltRounds = 12;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(user.password, salt);
    var passwordIsValid = bcrypt.compareSync(req.body.password, hash);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, access_token: token });
  })
};
