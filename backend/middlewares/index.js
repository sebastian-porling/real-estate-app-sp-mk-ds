
/**
 * Sets the geader to allow origin
 * @param {Object} req HTTP Request
 * @param {Object} res HTTP Response
 * @param {Function} next Function for next route
 */
module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
};
