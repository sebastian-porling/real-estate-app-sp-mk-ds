const data = require('./data/house_data.json');
const file = require('jsonfile');
const shortid = require('shortid');
const FORMATING = { spaces: 4, EOL: "\r\n" };

function generateHouseIds() {
    const newData = [];
    for (const agent of data) {
        const newListings = [];
        for (const house of agent.listings) {
            newHouse = {id: shortid.generate(), ...house};
            newListings.push(newHouse);
        }
        agent.listings = newListings
        newData.push(agent);
    }
    file.writeFileSync('./data/house_data.json', newData, FORMATING);
}

generateHouseIds();
