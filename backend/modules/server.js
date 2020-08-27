const express = require("express");
const { logger } = require("./logger.js");
const House = require('./house.js');
const app = express();

/* register logger */
app.use(logger);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

/**
 * Gets all the houses
 */
app.get("/api/houses", (req, res) => {
    res.status(200).json(House.getAll());
});

/**
 * Gets the house on the given id
 */
app.get("/api/house/:id", (req, res) => {
    res.status(200).json(House.get(req.params.id));
})

/**
 * Gets the agent on the given id
 */
app.get("/api/agent/:id", (req, res) => {
    res.status(200).json(House.getAgent(req.params.id));
});

/**
 * Handles request for all other URLS
 */
app.get("*", (req, res) => {
    res.status(404).json({error: 404, message: "This api doesn't support this url."});
});

/**
 * Starts the server at the given port
 * @param port 
 */
module.exports.start = (port) => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
};