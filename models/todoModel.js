var mongoose = require('mongoose'); // require mongoose for MongoDB

var Schema = mongoose.Schema; // create Schema object

// initialize a new instance of the Schema object
var todoSchema = new Schema( {
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

// create a new Todos model based on the todoSchema
var Todos = mongoose.model('Todos', todoSchema);

// export the Todos model from the module
module.exports = Todos;