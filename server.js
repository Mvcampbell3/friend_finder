const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

// Init Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res) => {
    res.send("All is well on the server");
})

app.listen(PORT, ()=> {
    console.log("Server is running on http://localhost:5000");
})