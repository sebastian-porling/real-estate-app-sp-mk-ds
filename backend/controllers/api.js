const express = require("express")
    , router = express()
    , House = require("../modules/house");

/**
 * Gets all the houses
 */
router.get("/houses", async (req, res) => {
    const houses = await House.getAll();
    const status = houses.length > 0 ? 200 : 404;
    const data = houses.length > 0 ? houses : { msg: "Couldn't fetch houses" };
    res.status(status).json(data);
});

/**
 * Gets the house on the given id
 */
router.get("/house/:id", async (req, res) => {
    const house = await House.get(req.params.id);
    const status = house.id !== undefined ? 200 : 404;
    const data =
        house.id !== undefined ? house : { msg: "House doesn't exists" };
    res.status(status).json(data);
});

/**
 * Gets the agent on the given id
 */
router.get("/api/agent/:id", async (req, res) => {
    const agent = await House.getAgent(req.params.id);
    const status = agent !== undefined ? 200 : 404;
    const data = agent !== undefined ? agent : { msg: "Agent doesn't exsist" };
    res.status(status).json(data);
});

/**
 * Creates a house if it already doesn't exist and if agent exists
 */
router.post("/api/house", async (req, res) => {
    const house = await House.add(req.body);
    const status = house.id !== undefined ? 201 : 409;
    const data =
        house.id !== undefined ? house : { msg: "House already exists" };
    res.status(status).json(data);
});

/**
 * Handles request for all other URLS
 */
router.get("*", (req, res) => {
    res.status(404).json({ msg: "This api doesn't support this url" });
});

module.exports = router;
