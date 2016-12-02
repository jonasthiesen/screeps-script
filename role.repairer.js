let helperCreep = require('helper.creep');

let roleRepairer = {
    run(creep) {
        helperCreep.fetchEnergy(creep);

    	let structures = creep.room.find(FIND_STRUCTURES, {
    		filter: (structure) => {
    		    return structure.hits < structure.hitsMax;
    		}
    	});

    	if (creep.repair(structures[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    		creep.moveTo(structures[0]);
    	}
    }
};

module.exports = roleRepairer;