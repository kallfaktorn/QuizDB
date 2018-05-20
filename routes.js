module.exports = function(app){

    // Session
    var sessions = require('./controllers/sessionEndpoint');
    app.post('/login', function(req, res) {
    });


    app.post('/api/token', sessions.createToken);


    // Users
    var users = require('./controllers/userEndpoint');
    app.get('/users', users.findAll);
    app.get('/users/:id', users.findById);
    app.post('/users', users.add);
    app.put('/users/:id', users.update);
    app.delete('/users/:id', users.delete);
}
