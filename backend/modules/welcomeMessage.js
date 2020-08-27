const figlet = require("figlet");

/**
 * Displays a welcome message
 */
module.exports.display = () => {
    try {
        console.log(figlet.textSync("vuetastic "));
        console.log(figlet.textSync("real estate"));
    } catch (error) {
        console.log("vuetastic real estate");
    }
};
