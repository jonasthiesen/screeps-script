let roleRepairer = {
    run(creep) {
        if (creep.carry.energy == 0 && Game.spawns.Spawn1.energy >= 250) {
            if (creep.withdraw(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        } else {
        	let structures = creep.room.find(FIND_STRUCTURES, {
        		filter: (structure) => {
        		    return structure.hits < structure.hitsMax;
        		}
        	});
    
        	if (creep.repair(structures[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        		creep.moveTo(structures[0]);
        	}
        }
    }
};

module.exports = roleRepairer;