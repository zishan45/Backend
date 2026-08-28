const express= require("express");
const app = express();

// console.dir(app);

let port = 3000; //0r we can use 8080

app.listen(port, () => {
     console.log(`App is listening to port ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     res.send("this is a basic response");
// })

app.get("/", (req, res) => {
    res.send("You are on home page");
});

// app.get("/search", (req, res) => {
//     res.send({
//         search: "Dev",
//     });
// });

// app.get("/developer", (req, res) => {
//     res.send({
//         name: "Zishan",
//         age: 21,
//         role: "MERN Dev",
//     });
// });

// app.post("/", (res, req)=>{
//     res.send("You send a post request");
// });

app.get ("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`this is a homepage of @${username}.`);
});

app.get ("/search", (req, res) => {
    let {q} = req.query;

    if(!q){
        res.send("nothing searched");
    }
    res.send(`Search Result for query ${q}.`);
});