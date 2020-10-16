const path = require("path");
const htmlRouter = require("express").Router();



// get route to put an exercise on the page
htmlRouter.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// get route to put exercise stats on a stats page
htmlRouter.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

// default get route to index page
htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


module.exports = htmlRouter;