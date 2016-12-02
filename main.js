let roleHarvester = require('role.harvester');
let roleBuilder   = require('role.builder');
let roleUpgrader  = require('role.upgrader');
let roleRepairer  = require('role.repairer');
let helper        = require('helper');

let roleQuantities = {
	harvester: 6,
	builder: 2,
	upgrader: 1,
	repairer: 1
};

module.exports.loop = function () {
	for (let name in Game.creeps) {
	    helper.assignRoles(Game.creeps[name])
	}

	helper.clearMemory();
    helper.perserveCreeps(roleQuantities);
}