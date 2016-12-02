let helperCreep = {
    fetchEnergy(creep) {
        if (creep.carry.energy == 0 && Game.spawns.Spawn1.energy >= 250) {
            if (creep.withdraw(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
};

module.exports = helperCreep;