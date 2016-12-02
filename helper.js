let roleHarvester = require('role.harvester');
let roleBuilder   = require('role.builder');
let roleUpgrader  = require('role.upgrader');
let roleRepairer  = require('role.repairer');

let helper = {
	assignRoles(creep) {
	    switch (creep.memory.role) {
	        case 'harvester':
	        	roleHarvester.run(creep);
	            break;
	        case 'builder':
	            roleBuilder.run(creep);
	            break;
	        case 'upgrader':
	        	roleUpgrader.run(creep);
	        	break;
	        case 'repairer':
	            roleRepairer.run(creep);
	            break;
	    }
	},

	countCreepsByRole(role) {
	    return _(Memory.creeps).filter( { role: role } ).size();
	},

	clearMemory() {
		for (let i in Memory.creeps) {
	        if (! Game.creeps[i]) {
	            delete Memory.creeps[i];
	        }
	    }
	},

	perserveCreeps(obj) {
		for (let role in obj) {
			if (this.countCreepsByRole(role) < obj[role]) {
				Game.spawns.Spawn1.createCreep([WORK, MOVE, CARRY], null, { role: role });
			}
		}
	}
};

module.exports = helper;