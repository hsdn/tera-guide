// Velik's Sanctuary (Hard)
//
// Server selector implementation

function requireNoCache(moduleFile) {
	delete require.cache[require.resolve(moduleFile)];
	return require(moduleFile);
}

function checkServerName(mod, serverName) {
	return mod.serverList[mod.serverId].name.includes(serverName) ||
		Object.values(mod.serverList).some(server => server.name.includes(serverName));
}

module.exports = (dispatch, handlers, guide, lang) => {
	let guideFile = "./9981_vanilla"; // Default

	if (checkServerName(dispatch._mod, "Asura")) {
		guideFile = "./9981_asura"; // Asura
	}

	return requireNoCache(guideFile)(dispatch, handlers, guide, lang);
};