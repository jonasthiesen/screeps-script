let helperCreep = {
    fetchEnergy(creep) {
        if (creep.carry.energy == 0 && creep.room.energyAvailable >= 200 + creep.carryCapacity) {
            if (creep.withdraw(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
};

module.exports = helperCreep;