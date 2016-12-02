let roleHarvester = require('role.harvester');
let roleBuilder   = require('role.builder');
let roleUpgrader  = require('role.upgrader');
let roleRepairer  = require('role.repairer');
let helper        = require('helper');

let roleDistribution = {
	harvester: 10,
	builder: 2,
	upgrader: 4,
	repairer: 1
};

module.exports.loop = function () {
	for (let name in Game.creeps) {
	    helper.assignRoles(Game.creeps[name])
	}

	helper.clearMemory();
    helper.preserveCreeps(roleDistribution);
}