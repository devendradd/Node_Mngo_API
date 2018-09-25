module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    //create a new note

    app.post('/notes', notes.create);

    //retreive all notes
    app.get('/notes', notes.findAll);

    //retrive a note with note ID
    app.get('/notes/:noteId', notes.findOne);

    //update a note id with node ID
    app.put('notes/:noteId', notes.update);

    //delete a note with a note id
    app.delete('notes/:noteId', notes.delete);
}