//load data
const notesData = require('../db/db.json');
const fs = require('fs');

//routing
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notesData))

    //api post requests
    app.post('/api/notes', (req, res) => {
        notesData.push(req.body);
        res.json(true);
    })
}