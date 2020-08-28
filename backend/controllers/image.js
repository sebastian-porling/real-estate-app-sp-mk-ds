const express = require("express")
    , router = express();

/* register static images */
router.use("/", express.static("../images"));

/**
 * 404 for images that doesn't exist
 */
router.get("*", (req, res) => {
    res.status(404).json({ msg: "That image doesn't exist" });
})

module.exports = router;
