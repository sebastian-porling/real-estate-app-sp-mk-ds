const express = require("express")
    , router = express.Router()
    , path = require('path');

router.use("/api", require("./api"));
router.use("/image", require("./image"));
router.use("/", express.static(path.join(__dirname, "../dist")));

/**
 * Handles request for all other URLS
 */
router.get("*", (req, res) => {
    res.status(404).json({ msg: "The page doesn't exist" });
});

module.exports = router;
