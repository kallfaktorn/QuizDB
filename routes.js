module.exports = function(app){

    // Session
    var sessions = require('./controllers/sessionEndpoint');
    app.post('/login', function(req, res) {
    });


    app.post('/api/token', sessions.createToken);


    // Users
    var users = require('./controllers/userEndpoint');
    app.get('/api/users', users.findAll);
    app.get('/api/users/:id', users.findById);
    app.post('/api/users', users.add);
    app.put('/api/users/:id', users.update);
    app.delete('/api/users/:id', users.delete);
}
