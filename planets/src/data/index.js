const planets = require("./planets.json");

module.exports = {
    list: async () => {
        return planets;
    },
    
    create: async()=>{
        throw Error("error in DB while creating planets");
    },
};