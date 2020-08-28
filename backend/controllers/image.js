const express = require("express")
    , router = express();

router.use("/", express.static("../images"));

router.get("*", (req, res) => {
    res.status(404).json({ msg: "That image doesn't exist" });
})

module.exports = router;
