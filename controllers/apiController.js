var Todos = require('../models/todoModel'); // access the data model schema
var bodyParser = require('body-parser'); // to access req body data

module.exports = function(app) {

    app.use(bodyParser.json()); // middleware to parse JSON data from req body
    app.use(bodyParser.urlencoded( { extended: true })); // handle URL encoded data

    //find the corresponding db document for that user and send to the UI
    app.get('/api/todos/:uname', function(req, res) {
        
        Todos.find( { username: req.params.uname }, function(err, todos) {
            if (err) throw err;

            res.send(todos); // JSON data to be returned from query

        }); 
    });

    // find the corresponding db document by its ID; findById is a mongoose function
    app.get('/api/todo/:id', function(req, res) {

        Todos.findById( { _id: req.params.id }, function(err, todo) {
            if (err) throw err;

            res.send(todo);
        });
    });

    // post data to the database
    app.post('/api/todo', function(req, res) {
        //update a document if an id is given, otherwise create a new document
        if(req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if(err) throw err;
                res.send('Success');
            });
        } 
        else {
            var newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err) {
                if (err) throw err;
                res.send('Saved successfully');
            });
        }

    });
    // delete function, expecting only the id of the document to be deleted
    app.delete('/api/todo', function(req, res) {
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if(err) throw err;
            res.send('Delete success');
        });
    });

}