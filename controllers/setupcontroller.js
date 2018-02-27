var Todos = require('../models/todoModel'); //this module adds sample seed data to a new database

// what this module will export
// dummy data at a particular url endpoint to send to database

module.exports = function(app) {

    app.get('/api/setupTodos' , function(req, res) {
        // seed database; create an array with 3 sample records based on the model schema
        var starterTodos = [
            {
                username: 'test',
                todo: 'hook up database',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test2',
                todo: 'create objects',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test3',
                todo: 'code UI',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });

    });
}