const Jimp = require("jimp");
const chalk = require("chalk");
const ora = require("ora");
const figlet = require("figlet");
const clear = require("clear");

const throbber = ora({ spinner: "arc" });
const url = "https://thispersondoesnotexist.com/image";

/**
 * sets a time out for the given milliseconds
 * @param {Integer} ms milliseconds to sleep
 */
function sleep(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

/**
 * Generates 25 images from
 * this persondoesnotexist.com
 */
async function generateImages() {
    clear();
    console.log(chalk.magentaBright(figlet.textSync('profile-scraper'))+"\n");
    throbber.start("Starting...");
    for (let index = 1; index < 26; index++) {
        const fileName = `agent-profile-${(index + "").padStart(3, "0")}.jpg`;
        await sleep(5000);
        await fetchAndWriteImage(fileName)
    }
    throbber.success("Finished, all files written!")
}

/**
 * Fetches the image and writes it
 * with the hxw 300x300 and 
 * 80% of the original quality
 * @param {String} fileName name of the file to write
 */
async function fetchAndWriteImage(fileName) {
    throbber.start(`Writing ` + fileName);
    const image = await Jimp.read(url);
    await image.resize(300, Jimp.AUTO);
    await image.quality(80);
    await image.writeAsync(fileName);
}

generateImages();
