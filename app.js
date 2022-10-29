const express = require('express')
const Database = require('./db')

const app = express()
const db = new Database()
app.db = db;

app.get('/', (req, res) => {
  res.send('Hello World!') 
})
app.get("/api/cats",(req, res) => {
    res.json([ { name: 'Tiri', age: 12,color: ['black', 'white'] } ]);
})
module.exports = app;
