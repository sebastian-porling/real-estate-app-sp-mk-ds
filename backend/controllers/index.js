const express = require("express")
    , router = express.Router()
    , path = require('path');

/* register api, image and static pages */
router.use("/api", require("./api"));
router.use("/image", require("./image"));
router.use("/", express.static(path.join(__dirname, "../dist")));

/**
 * 404 for the pages that doesn't exist
 */
router.get("*", (req, res) => {
    /* TODO: change to static error html page */
    res.status(404).json({ msg: "The page doesn't exist" });
});

module.exports = router;
