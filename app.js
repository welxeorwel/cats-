const express = require('express')
const Database = require('./db')

const app = express()
const db = new Database()
app.db = db;

app.get('/', (req, res) => {
  res.send('Hello World!') 
})
app.get("/api/cats", async (req, res) => {
    const cats = await db.getCats();
    return res.json(cats);
})
module.exports = app;
