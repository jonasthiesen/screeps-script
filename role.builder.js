let roleBuilder = {
    run(creep) {
        if (creep.carry.energy == 0 && Game.spawns.Spawn1.energy >= 250) {
            if (creep.withdraw(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
            
        let constructions = creep.room.find(FIND_CONSTRUCTION_SITES);
        
        if (creep.build(constructions[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(constructions[0]);
        }
    }
};

module.exports = roleBuilder;