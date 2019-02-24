const followers = require("../app/data/followers")

module.exports = function(app) {
    app.get("/api/followers", (req, res) => {
        res.json(followers);
    })

    app.post("/api/followers", (req, res) => {
        let newFriend = req.body;
        followers.push(newFriend);
        res.send(followers)
    })
}