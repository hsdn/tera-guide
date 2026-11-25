// Wonderholme / Замок Чудес (Phoenix)
//
// made by Vampic

// Phoenix huntingZoneId 443. Main bosses: 1003 (Jack), 1005 (Bandersnatch).
// Attack notices fire at stage 0, immediately. No targeting-time countdowns.

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const PUZZLE_TAG = "wonderholme-puzzle";
	const SAFE_TAG = "wonderholme-safe";
	const colors = [
		{ en: "Red", ru: "Красный", npcs: [44345, 44390] },
		{ en: "Yellow", ru: "Жёлтый", npcs: [44346, 44391] },
		{ en: "Green", ru: "Зелёный", npcs: [44347, 44392] },
		{ en: "Blue", ru: "Синий", npcs: [44348, 44393] }
	];
	const curseIds = new Map([
		[44300012, 0], [44300013, 1], [44300014, 2], [44300015, 3],
		[44300050, 0], [44300051, 1], [44300052, 2], [44300053, 3]
	]);
	const curses = new Map();
	const statues = new Map();
	let puzzleMode = null;
	let puzzleReady = false;
	let lastOrder = "";
	let markerTarget = null;

	function text(message, messageRu) {
		return { type: "text", sub_type: "message", message, message_RU: messageRu };
	}

	function clearPuzzleMarker() {
		handlers.despawn_all({ tag: PUZZLE_TAG });
		markerTarget = null;
	}

	function resetPuzzle(clearStatues = true) {
		curses.clear();
		if (clearStatues) statues.clear();
		puzzleMode = null;
		puzzleReady = false;
		lastOrder = "";
		clearPuzzleMarker();
	}

	function showPuzzle() {
		if (!curses.size) {
			clearPuzzleMarker();
			lastOrder = "";
			return;
		}

		// Numbers on the local player's debuffs are the order, not packet order.
		// Wait for the complete initial set; subsequent ENDs remove cleared colors.
		if (!puzzleReady && curses.size !== 4) return;
		const remaining = [...curses.entries()].sort((a, b) => a[1].stacks - b[1].stacks);
		const ranks = remaining.map(([, curse]) => curse.stacks);
		if (ranks.some(rank => !Number.isInteger(rank) || rank < 1 || rank > 4) || new Set(ranks).size !== ranks.length) {
			clearPuzzleMarker();
			return;
		}
		puzzleReady = true;

		const order = remaining.map(([color]) => color).join(",");
		if (order !== lastOrder) {
			handlers.text(text(
				remaining.map(([color]) => colors[color].en).join(" -> "),
				remaining.map(([color]) => colors[color].ru).join(" -> ")
			));
			lastOrder = order;
		}

		const color = remaining[0][0];
		const statue = statues.get(`${puzzleMode}-${color}`);
		if (!statue) {
			clearPuzzleMarker();
			return;
		}
		if (markerTarget === statue.gameId) return;
		clearPuzzleMarker();
		markerTarget = statue.gameId;
		handlers.spawn({
			tag: PUZZLE_TAG, func: "marker",
			args: [false, 0, 0, 0, 90000, "blue", lang.languageUC === "RU" ? ["СЮДА", colors[color].ru] : ["NEXT", colors[color].en]]
		}, statue);
	}

	function onCurse(event) {
		if (!dispatch.require.library.player.isMe(event.target) || !curseIds.has(event.id)) return;
		const mode = event.id >= 44300050 ? 2 : 1;
		if (puzzleMode !== null && mode !== puzzleMode) resetPuzzle(false);
		puzzleMode = mode;
		curses.set(curseIds.get(event.id), { id: event.id, stacks: Number(event.stacks) });
		showPuzzle();
	}

	// Same protocol versions as the installed tera-guide-core.
	const beginVersion = [92, 100].includes(dispatch._mod.majorPatchVersion) ? 4 : 5;
	dispatch.hook("S_ABNORMALITY_BEGIN", beginVersion, { filter: { fake: false } }, onCurse);
	dispatch.hook("S_ABNORMALITY_REFRESH", 2, { filter: { fake: false } }, onCurse);
	dispatch.hook("S_ABNORMALITY_END", 1, { filter: { fake: false } }, event => {
		if (!dispatch.require.library.player.isMe(event.target) || !curseIds.has(event.id)) return;
		const color = curseIds.get(event.id);
		if (curses.get(color)?.id !== event.id) return;
		curses.delete(color);
		showPuzzle();
	});

	function rememberStatue(color, mode, ent) {
		statues.set(`${mode}-${color}`, ent);
		if (puzzleReady) showPuzzle();
	}

	function forgetStatue(color, mode, ent) {
		const key = `${mode}-${color}`;
		if (statues.get(key)?.gameId !== ent.gameId) return;
		statues.delete(key);
		if (markerTarget === ent.gameId) clearPuzzleMarker();
	}

	const events = {};
	function skills(npc, ids, notices) {
		ids.forEach(id => events[`s-443-${npc}-${id}-0`] = notices);
	}
	function pair(npc, id, message, messageRu) {
		skills(npc, [id, id + 1000], [text(message, messageRu)]);
	}

	// One-Eyed Jack. Every warning below is immediate, including all jump variants.
	pair(1003, 1105, "Jump (dodge)", "Прыжок (эвейд)");
	pair(1003, 1109, "Jump (dodge)", "Прыжок (эвейд)");
	pair(1003, 1110, "Back jump (dodge)", "Прыжок назад (эвейд)");
	// pair(1003, 1107, "Rock smash", "Камень — отойти");
	// pair(1003, 1108, "Stomp + three hits", "Топот + три удара");
	pair(1003, 1111, "Earthquake (dodge)", "Землетрясение (эвейд)");
	pair(1003, 1113, "Earthquake + falling rocks", "Землетрясение + камни");
	[1112, 1114, 1116, 1118].forEach(id =>
		pair(1003, id, "Laser — move aside", "Луч — в сторону")
	);
	skills(1003, [1301, 1302], [text("Rolling stones", "Катящиеся шары")]);
	// skills(1003, [1303], [text("Fake laser", "Ложный луч")]);

	// Bandersnatch. Basic staff swings are intentionally silent.
	pair(1005, 1105, "Jump (dodge)", "Прыжок (эвейд)");
	// pair(1005, 1106, "Poison behind", "Яд сзади");
	pair(1005, 1108, "Poison rain", "Ядовитый дождь");
	pair(1005, 1110, "Tail spin (dodge)", "Хвост (эвейд)");
	pair(1005, 1111, "Poison shot — keep moving", "Ядовитый снаряд — двигайся");
	pair(1005, 1113, "Poison pools", "Ядовитые лужи");
	pair(1005, 1114, "Capture", "Захват");
	pair(1005, 1115, "Breath — move aside", "Дыхание — в сторону");
	pair(1005, 1116, "Moving breath — move aside", "Дыхание с движением — в сторону");
	[1118, 1119, 1120].forEach(id => pair(1005, id, "Poison pools", "Ядовитые лужи"));
	pair(1005, 1125, "Spit (dodge)", "Плевок (эвейд)");
	[1127, 1128].forEach(id => pair(1005, id, "Slam (dodge)", "Падение (эвейд)"));
	skills(1005, [1302], [text("Interrupt", "Сбить подготовку")]);
	skills(1005, [1129, 2129], [
		{ type: "func", func: resetPuzzle },
		text("Color puzzle — leave the center", "Цвета — из центра")
	]);

	// Four consecutive safe spots. Constants are precomputed from the XML:
	// main 9000/0.7=12857 ms; juniors 9000/0.65=13846,
	// 9000/0.57=15789, 9000/0.51=17647 ms. No live speed calculations.
	// Numbered markers show the route in advance; they do not trigger a late warning.
	function safeSpot(angle, distance, radius, duration, number) {
		return [
			{ type: "spawn", tag: SAFE_TAG, func: "circle", args: [false, 553, angle, distance, 12, radius, 0, duration] },
			{ type: "spawn", tag: SAFE_TAG, func: "marker", args: [false, angle, distance, 0, duration, "blue", [`SAFE ${number}`, `${number}`]] }
		];
	}
	const mainSpots = [
		[1121, 20, 1250], [1122, 120, 1500], [1123, 200, 1000], [1124, 315, 1500]
	];
	mainSpots.forEach(([id, angle, distance]) => skills(1005, [id, id + 1000], [
		{ type: "despawn_all", tag: SAFE_TAG },
		text("Caterpillars — safe spots", "Гусеницы — в сейфы"),
		...safeSpot(angle, distance, 275, 12850, 1)
	]));
	[
		[44379, 600, 156, 13840, 2], [44423, 600, 156, 13840, 2],
		[44421, 450, 126, 15780, 3], [44424, 450, 126, 15780, 3],
		[44422, 300, 90, 17640, 4], [44425, 300, 90, 17640, 4]
	].forEach(([npc, distance, radius, duration, number]) =>
		skills(npc, [1121], safeSpot(20, distance, radius, duration, number))
	);

	// Identify colorless puzzle statues by template, using their actual spawn location.
	colors.forEach((color, index) => color.npcs.forEach((npc, phase) => {
		events[`ns-443-${npc}`] = [{ type: "func", func: rememberStatue, args: [index, phase + 1] }];
		events[`nd-443-${npc}`] = [{ type: "func", func: forgetStatue, args: [index, phase + 1] }];
	}));
	[1003, 1005].forEach(npc => {
		events[`nd-443-${npc}`] = [
			{ type: "func", func: () => resetPuzzle() },
			{ type: "despawn_all", tag: SAFE_TAG }
		];
	});
	return events;
};
