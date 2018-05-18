module.exports = function(app){

    
    // Session
    //var sessions = require('./controllers/sessionsEndpoint');
    app.post('/login', function(req, res) {
      console.log('login req')
      console.log(req)
    })

    // Users
    var users = require('./controllers/userEndpoint');
    app.get('/api/users', users.findAll);
    app.get('/api/users/:id', users.findById);
    app.post('/api/users', users.add);
    app.put('/api/users/:id', users.update);
    app.delete('/api/users/:id', users.delete);
}
