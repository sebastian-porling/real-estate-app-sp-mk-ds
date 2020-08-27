const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const welcomeMessage = require("./modules/welcomeMessage.js");
const server = require("./modules/server.js");

/**
 * Shows welcome message and starts server with logger
 * @param port Port to start server on, 3000 default
 */
module.exports.main = (port = 3000) => {
    if (cluster.isMaster) {
        welcomeMessage.display(port);
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
    } else {
        try {
            server.start(port);
        } catch (error) {
            console.error("Couldn't start server, ", error);
        }
    }
    
};
