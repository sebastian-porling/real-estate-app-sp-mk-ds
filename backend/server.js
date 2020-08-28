const express = require('express')
    , app = express()
    , path = require('path');

/* register logger and body parser */
app.use(require("./util/logger"));
app.use(express.json());

/* register routes and middleware */
app.use(require("./middlewares"));
app.use(require("./controllers"));

/**
 * Starts the server at the given port
 * @param port
 */
module.exports.start = (port) => {
    app.listen(port);
};
