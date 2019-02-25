const path = require("path");

module.exports = function(app) {
    app.get("/api/matches", (req, res) => {
        res.json(followers);
    })

    

    app.post("/api/matches", (req, res) => {
        let newMatch = req.body;
        matches.push(newMatch)
        console.log(newMatch)
        res.json(true);
    })
}