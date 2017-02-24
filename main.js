let roleHarvester = require('role.harvester');
let roleBuilder   = require('role.builder');
let roleUpgrader  = require('role.upgrader');
let roleRepairer  = require('role.repairer');
let helper        = require('helper');

let roleDistribution = {
	repairer: 1,
	upgrader: 4,
	builder: 2,
	harvester: 4,
};

module.exports.loop = function () {
	for (let name in Game.creeps) {
	    helper.assignRoles(Game.creeps[name])
	}

	helper.clearMemory();
    helper.preserveCreeps(roleDistribution);
}
