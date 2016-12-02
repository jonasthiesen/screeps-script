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

	countCreepsBySource(source) {
		return _(Memory.creeps).filter( { souce: source } ).size();
	},

	clearMemory() {
		for (let i in Memory.creeps) {
	        if (! Game.creeps[i]) {
	            delete Memory.creeps[i];
	        }
	    }
	},

	preserveCreeps(obj) {
		for (let role in obj) {
			if (this.countCreepsByRole(role) < obj[role]) {
				if (role === 'harvester') {
					if (this.countCreepsBySource(0) <= 4) {
						this.createCreep([WORK, MOVE, CARRY], { role: role, source: 0 });
					} else {
						this.createCreep([WORK, MOVE, CARRY], { role: role, source: 1 });
					}
				} else {
					this.createCreep([WORK, MOVE, CARRY], { role: role });
				}
			}
		}
	},

	createCreep(body, memory) {
		Game.spawns.Spawn1.createCreep(body, null, memory);
	}
};

module.exports = helper;