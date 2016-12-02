let helperCreep = require('helper.creep');

let roleUpgrader = {
	run(creep) {
		helperCreep.fetchEnergy(creep);
        
        if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
	}
};

module.exports = roleUpgrader;