const Jimp = require("jimp");
const chalk = require("chalk");
const ora = require("ora");
const figlet = require("figlet");
const clear = require("clear");

const throbber = ora({ spinner: "arc" });
const url = (index) => `https://thisrentaldoesnotexist.com/img-new/img${index}.jpg`;

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
 * Generates 385 images of houses from 
 * thisrentaldoesnottexist.com
 */
async function generateImages() {
  clear();
  console.log(chalk.yellow(figlet.textSync("house-scraper"))+"\n");
  for (let index = 1; index < 386 ; ) {
    await sleep(3000);
    [1,2,3,4].map((i) => fetchAndWriteImage(url(i), index++))
  }
  throbber.success("Written all the house images!");
}

/**
 * Fetches one image and writes it
 * with the format 'house-image-####.jpg'
 * @param {*} url 
 * @param {*} index 
 */
async function fetchAndWriteImage(url, index) {
    const fileName = `house-image-${(index+"").padStart(4, "0")}.jpg`;
    const image = await Jimp.read(url);
    throbber.start("writing " + fileName);
    await image.writeAsync(fileName);
}

generateImages();