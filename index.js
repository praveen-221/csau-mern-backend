const express = require('express');

const app = express();

const { posts } = require('./database/posts.js');

// MIDDLEWARES
app.use(express.json());

app.get('/posts/', (req,res) => {
    res.json({
        data : posts
    })
})

app.get('/posts/:id', (req,res) => {
    const id = req.params.id * 1;

   const post =  posts.filter((el) => el.id === id);

   res.json({
        data: post
   })
    
})

const PORT = 9000;

app.listen(PORT, (req,res) => {
    console.log("🎉 Server started!")
})











