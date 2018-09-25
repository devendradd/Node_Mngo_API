//Creating the database schema here
const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    title : String,
    content : String
},{
    timeStamp : true
});

module.exports = mongoose.model('Note', noteSchema);

// The Note model is very simple. It contains a title and a content field. I have also added a timestamps option to the schema.

// Mongoose uses this option to automatically add two new fields - createdAt and updatedAt to the schema.