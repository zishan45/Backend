const express = require("express");
const app = express();
const port= 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");
const methodOverride = require('method-override');

app.use(express.urlencoded( {extended: true} ));
app.use(methodOverride('_method'));     

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

let posts = [
    {
        id: uuidv4(),
        username: "@Zishan",
        content: "Everything is possible, just work hard", 
    },

    {
        id: uuidv4(),
        username: "@uday",
        content: "you can earn money from any works", 
    },

    {
        id: uuidv4(),
        username: "@vishal",
        content: "If anything doesn't work then i can still do farming", 
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("show.ejs", {post});
});


app.post("/posts", (req, res) =>{
    // console.log(req.body);
    // res.send("App is working");
    let id = uuidv4();
    let {username, content} = req.body;
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
    // res.send("delete successful");
});

app.patch("/posts/:id", (req, res) =>{
    let {id} = req.params;
    // console.log(id);
    let newContent = req.body.content;
    console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // res.send("patch request accepted");
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs", {post});
});