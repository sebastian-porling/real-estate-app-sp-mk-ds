const data = require("../data/house_data.json")
    , fw = require('../integration/fileWriter.js')
    , shortid = require('shortid');

/**
 * Returns all houses on the given page
 * @param {Integer} page a positive integer
 * @returns array of houses or empty array
 */
module.exports.getAll = async (page = 0) => {
    let k = 0;
    const houses = [],
          MIN_PAGE = page*10,
          MAX_PAGE = MIN_PAGE+9,
          tempData = JSON.parse(JSON.stringify(data));
    
    for (const agent of tempData) {
        if(k > MAX_PAGE) break;
        const newListings = []
            , agentListings = agent.listings;
        delete agent.listings;
        for (const house of agentListings) {
            if (k < MIN_PAGE){
                k++;
                continue;
            } else if (k > MAX_PAGE) break;
            newListings.push({...house, agent});
            k++;
        }
        houses.push(...newListings);
    }
    return houses;
}

/**
 * Finds the house on the given id.
 * @param {String} id 
 * @returns house or undefined
 */
module.exports.get = async (id) => {
    let house = {};
    const tempData = JSON.parse(JSON.stringify(data))
        , agent =   tempData.find(agent => house = agent.listings
                            .find(house => house.id === id));
    if(agent !== undefined) delete agent.listings;
    return {...house, agent};
}

/**
 * Finds the agent on the given id.
 * @param {Integer} id 
 * @returns agent or undefined
 */
module.exports.getAgent = async (id) => {
    return data.filter(agent => agent.id == id)[0];
}

/**
 * Creates a house if it already doesn't exist and if agent exists
 * @param {Object} house 
 * @returns the created house or undefined
 */
module.exports.add = async (house) => {
    const houses = await this.getAll();
    if(houses.find(h => h.address == house.address)) return;
    const agent = await this.getAgent(house.agent_id);
    if (agent === undefined) return;
    house.id = shortid.generate();
    delete house.agent_id;
    agent.listings.push(house);
    try {
        fw.writeJson("./data/house_data.json", data);
        return house;
    } catch (error) {
        // TODO - Handle error from file writer
        return;
    }
}
