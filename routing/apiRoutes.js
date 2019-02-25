const path = require("path");

module.exports = function(app) {
    app.get("/api/followers", (req, res) => {
        res.json(followers);
    })

    app.get("/api/dragonborn", (req,res) => {
        res.json(dragonborns);
    })

    app.post("/api/dragonborn", (req, res) => {
        let newDragBorn = req.body;
        dragonborns.push(newDragBorn)
        console.log(dragonborns)
        res.json(true);
    })
}