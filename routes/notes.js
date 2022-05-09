const notes= require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');


//   GET Route for retrieving all the notes
  notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
      res.json(JSON.parse(data))
    );
  });


  // POST Route for new notes 
  notes.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit feedback`);
    let title = req.body.title
    let body = req.body.text

    if (title, body){
      const response = {
        status: 'success',
        title: title,
        body: body,
      };
      const storageObj = {
        title: title,
        body:body,
        id: uuidv4()
      }
      readAndAppend(storageObj, './db/db.json');
      res.json('Note added')
    }else{
      res.status(500).json('Error in posting review');
    }
  });
  module.exports = notes;