const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
let friends = require("./app/data/friends.js");
const app = express();
require("./routing/htmlRoutes")(app);



// Init Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());




app.listen(PORT, ()=> {
    console.log("Server is running on http://localhost:5000");
})