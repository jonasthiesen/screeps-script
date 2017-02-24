let helper = require('helper');

let roleDistribution = {
	repairer: 1,
	upgrader: 1,
	builder: 3,
	harvester: 10,
};

module.exports.loop = function () {
	for (let name in Game.creeps) {
	    helper.assignRoles(Game.creeps[name])
	}

	helper.clearMemory();
  helper.preserveCreeps(roleDistribution);
}
