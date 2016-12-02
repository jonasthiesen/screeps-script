let helperCreep = require('helper.creep');

let roleBuilder = {
    run(creep) {
        helperCreep.fetchEnergy(creep);
            
        let constructions = creep.room.find(FIND_CONSTRUCTION_SITES);
        
        if (creep.build(constructions[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(constructions[0]);
        }
    }
};

module.exports = roleBuilder;