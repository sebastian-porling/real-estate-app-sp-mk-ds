const jsonfile = require("jsonfile"),
    path = require("path"),
    FORMATING = { spaces: 4, EOL: "\r\n" };

/**
 * Writes a json file with the given input
 * @param JSON To write
 * @throws error if we couldn't write the file
 */
module.exports.writeJson = async (FILE_NAME = "result.json", JSON) => {
    try {
        return jsonfile.writeFile(path.join(__dirname, FILE_NAME), JSON, FORMATING);
    } catch (error) {
        throw "Couldn't write the " + FILE_NAME;
    }
};
