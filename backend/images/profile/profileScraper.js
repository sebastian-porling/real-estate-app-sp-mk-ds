const { encode, decode } = require('node-base64-image');

const url = 'https://thispersondoesnotexist.com/image';
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

async function getImage() {
  for (let index = 1; index < 26; index++) {
    await sleep(5000);
    encode(url, options)
      .then(image => {
        console.log("Image ", index);
        decode(image, { fname: `agent-profile-${(index+"").padStart(3, "0")}`, ext: 'jpg' });
      });
  }
}

getImage();