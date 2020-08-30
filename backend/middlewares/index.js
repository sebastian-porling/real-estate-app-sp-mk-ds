/**
 * Sets the geader to allow origin
 * @param {Object} req HTTP Request
 * @param {Object} res HTTP Response
 * @param {Function} next Function for next route
 */
module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    //intercepts OPTIONS method
    if ("OPTIONS" === req.method) {
        res.send(200);
    } else {
        next();
    }
};
