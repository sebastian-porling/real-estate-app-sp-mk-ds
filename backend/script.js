const file = require("jsonfile"),
    shortid = require("shortid"),
    data = require("./data/house_data.json"),
    FORMATING = { spaces: 4, EOL: "\r\n" },
    profileImage = (id) =>
        `/image/profile/agent-profile-${(id + "").padStart(3, "0")}.jpg`,
    houseImage = (id) =>
        `/image/houses/house-image-${(id + "").padStart(4, "0")}.jpg`;

/**
 *  Script that adds ids for houses,
 *  replaces images for houses and replaces image for agent
 */
function generateDataWithIdAndImages() {
    const newData = [];
    let a = 1,
        h = 1;
    for (const agent of data) {
        const newListings = [];
        for (const house of agent.listings) {
            newHouse = { id: shortid.generate(), ...house };
            for (let i = 0; i < newHouse.images.length; i++) {
                newHouse.images[i] = houseImage(h);
                h++;
            }
            newListings.push(newHouse);
        }
        agent.profile_image = profileImage(a);
        agent.listings = newListings;
        newData.push(agent);
        a++;
    }
    file.writeFileSync("./data/house_data.json", newData, FORMATING);
}

generateDataWithIdAndImages();
