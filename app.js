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
app.get("/api/cats/:id", async (req, res) => {
    const id = req.params.id;
    const cat  = await db.findCat(id);
    console.log(id,cat) 
    if(cat){
        return res.json(cat);
    }
    else{
    res.status(404);
    return res.json({status: "not found"});
    }
    
})
app.get("/api/cats/:id/reviews", async (req, res) => {
    const id = req.params.id;
    const reviews  = await db.getReviews(id);
    console.log(id,reviews) 
    if(reviews){
        return res.json(reviews);
    }
    else{
    res.status(404);
    return res.json({status: "not found"});
    }
})
module.exports = app;
