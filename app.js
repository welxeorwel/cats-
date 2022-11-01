const express = require('express')
const Database = require('./db')

const app = express()
app.use(express.json())
app.use(express.static('public'))

const db = new Database()
app.db = db;

// app.get('/', (req, res) => {
//   res.send('Hello World!') 
// })

app.get("/api/cats", async (req, res) => {
    const cats = await db.getCats();
    return res.json(cats);
})

app.post("/api/cats", async (req, res) => {
    const cat = req.body;
    await db.addCat(cat)
    return res.json({status: 'ok'});
   
})
app.get("/api/cats/tiri", async (req, res) => {
    const cats = await db.getCats();
    const cat  = cats[0]; 
    return res.json(cat);
})
app.get("/api/cats/onixia", async (req, res) => {
    const cats = await db.getCats();
    res.status(404);
    return res.json({status: "not found"});
})
module.exports = app;
