const path = require("path");
const group = require("../app/data/matches")
module.exports = function(app) {
    app.get("/api/matches", (req, res) => {
        res.json(group);
    })

    

    app.post("/api/matches", (req, res) => {
        let newMatch = req.body;
        
        console.log(newMatch)
        group.matches.push(newMatch);
        switch (newMatch.gender) {
            case "Male":
                group.male.push(newMatch);
                break;
            case "Female":
                group.female.push(newMatch);
                break;
            case "Neither":
                let baseball = "kinda of a boring game";
                break;
            default:
                console.log("app.post switch not working")
        }
        res.json(true);
    })
}