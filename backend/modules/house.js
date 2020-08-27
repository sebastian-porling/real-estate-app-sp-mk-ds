const data = require("../data/house_data.json");

/**
 * Returns all houses 
 */
module.exports.getAll= () => {
    const houses = [];
    const tempData = JSON.parse(JSON.stringify(data));
    for (const agent of tempData) {
        const newListings = [];
        const agentListings = agent.listings;
        delete agent.listings;
        for (const house of agentListings) {
            newHouse = {...house, agent};
            newListings.push(newHouse);
        }
        houses.push(...newListings);
    }
    return houses;
}

/**
 * Finds the house on the given id.
 * @param {String} id 
 */
module.exports.get = (id) => {
    let house = {};
    const tempData = JSON.parse(JSON.stringify(data));
    const agent = tempData.find(agent => house = agent.listings.find(house => house.id === id));
    if(agent !== undefined) {
        delete agent.listings;
    }
    return {...house, agent};
}

/**
 * Finds the agent on the given id.
 * @param {Integer} id 
 */
module.exports.getAgent = (id) => {
    return data.filter(agent => agent.id == id);
}
