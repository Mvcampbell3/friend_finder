const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

// Init Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

app.listen(PORT, ()=> {
    console.log("Server is running on http://localhost:5000");
})