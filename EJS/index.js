const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send("This is home");
    res.render("home.ejs");

});

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6 + 1 );
    res.render("rolldice.ejs", {diceVal: num});
    res.render("rolldice.ejs");
});

// app.get("/instagram/:username", (req, res) => {
//     let {username} = req.params;
//     let followers = ["rohit", "kohli", "jadeja", "rahul", "bumrah"];
//     res.render("instagram.ejs", {username, followers});
// });

app.get("/instagram/:username", (req, res) => {
    let {username} = req.params;
    let data = instaData[username];
    const instaData = require("./DataTransfer.json");
    console.log(data);
    
    res.render("instagram.ejs", { data });
});

app.listen(port, () => {
    console.log(`listening to port ${port}.`);
});