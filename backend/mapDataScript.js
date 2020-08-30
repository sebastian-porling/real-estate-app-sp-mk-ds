const jf = require("jsonfile"),
      shortid = require("shortid"),
      FILE = "./data/house_json",
      data = require(FILE),
      FORMATING = { spaces: 4, EOL: "\r\n" },
      profileImage = (id) =>
        `http://localhost:3000/image/profile/agent-profile-${(id + "").padStart(3, "0")}.jpg`,
      houseImage = (id) =>
        `http://localhost:3000/image/houses/house-image-${(id + "").padStart(4, "0")}.jpg`;

/**
 *  Script that adds ids for houses,
 *  replaces images for houses and replaces image for agent
 */
function mapDataWithIdAndImages() {
    const newData = [];
    let a = 1,
        h = 1;
    for (const agent of data) {
        const newListings = [];
        for (const house of agent.listings) {
            newHouse = { id: shortid.generate(), ...house };
            for (const image in newHouse.images) {
                    newHouse[image];
                    h++;
            }
            newListings.push(newHouse);
        }
        agent.profile_image = profileImage(a);
        agent.listings = newListings;
        newData.push(agent);
        a++;
    }
    jf.writeFileSync(FILE, newData, FORMATING);
}

mapDataWithIdAndImages();
