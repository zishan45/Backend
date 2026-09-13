const express= require("express");
const app = express();
const ExpressEroor = require("./ExpressError");

const port = 3000;
app.listen(port, () => {
    console.log(`listening to middleware port ${port}`);
});

// middleware -> response sent here, then later part og app.get will not be sent to server or client
// to send next middleware we use next()

app.use((req, res, next) => {     // here we have not given route so it takes by default "/"
    console.log("Hii i am 1st middleware");
    next();
});

app.get("/", (req, res) => {
    res.send("This is a home page");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/admin", (req, res) => {
    throw new ExpressEroor(403, "Access to admin is forbidden");
});

app.use("/api", (req, res, next) => {
    let {token} = req.query;
    if (token === "apitoken"){
        res.send("Here is your data");
        next();
    }
    res.send("Access Denied, API Token doesn't match");
});

