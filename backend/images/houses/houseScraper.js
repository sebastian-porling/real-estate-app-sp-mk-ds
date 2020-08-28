const { encode, decode } = require('node-base64-image');


const url = (index) => `https://thisrentaldoesnotexist.com/img-new/img${index}.jpg`;
const options = {
  string: true,
  headers: {
    "User-Agent": "my-app"
  }
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function generateImages() {
  for (let index = 1; index <386 ; ) {
    await sleep(3000);
    [1,2,3,4].map((i) => fetchAndWriteImage(url(i), index++))
  }
}

async function fetchAndWriteImage(url, index) {
    encode(url, options)
      .then(image => {
        console.log("Image ", index);
        decode(image, { fname: `house-image-${(index+"").padStart(4, "0")}`, ext: 'jpg' });
    });
}

generateImages();