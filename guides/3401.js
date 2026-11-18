// Imperator's Sanctum
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	const combos = [
		[129, 108, 129, 131, 107, 128, 106], // front, right, back
		[129, 108, 128, 130, 105, 128, 106], // front, left, back
		[121, 128, 130, 105, 129, 131, 107, 128, 106], // left, right, back
		[121, 129, 131, 107, 128, 130, 105, 129, 108], // right, left, front
		[121, 128, 130, 105, 128, 106, 129, 131, 107], // left, back, right
		[121, 129, 131, 107, 128, 106, 129, 108], // right, back, front
		[128, 106, 128, 130, 105, 129, 131, 107], // back, left, right
		[128, 106, 129, 108, 129, 131, 107] // back, front, right
	];
	const directions = {
		130: ["Left", "Откид влево"], 131: ["Right", "Откид вправо"],
		106: ["Back", "Задний"], 108: ["Front", "Передний"]
	};
	const comboSkills = new Set(combos.flat());
	let candidates = [];
	let cursor = 0;
	let announced = [];
	let finishedSkill = null;
	let expectStart = false;
	let thirdboss_print_bait = true;

	function resetCombo() {
		candidates = [];
		cursor = 0;
		announced = [];
		finishedSkill = null;
		expectStart = false;
	}

	function comboSkill(id, ent) {
		let next = candidates.filter(chain => chain[cursor] === id);

		if (!next.length) {
			const fromStart = expectStart;

			resetCombo();

			next = fromStart ?
				combos.filter(chain => chain[0] === id) :
				combos.flatMap(chain => chain.flatMap((skill, index) => (skill === id ? [chain.slice(index)] : [])));
		}

		candidates = next;
		cursor++;
		expectStart = false;

		const notice = [];

		if (directions[id]) {
			if (announced[0] === id) announced.shift();
			else notice.push(id);
		}

		if (candidates.length) {
			const remaining = candidates.map(chain => chain.slice(cursor).filter(skill => directions[skill]));
			let length = 0;

			while (length < remaining[0].length && remaining.every(list => list[length] === remaining[0][length])) length++;

			const known = remaining[0].slice(0, length);

			notice.push(...known.slice(announced.length));

			announced = known;

			if (candidates.every(chain => cursor === chain.length)) {
				finishedSkill = id;
				expectStart = true;
			}
		}

		if (notice.length) {
			handlers.text({
				sub_type: "message",
				message: notice.map(skill => directions[skill][0]).join(" -> "),
				message_RU: notice.map(skill => directions[skill][1]).join(" -> ") },
			ent);
		} else if ((id === 128 || id === 129) && !announced.length) {
			handlers.text({
				sub_type: "message",
				message: id === 128 ? "Back/Left" : "Front/Right",
				message_RU: id === 128 ? "Задний/Откид влево" : "Передний/Откид вправо" },
			ent);
		}
	}

	dispatch.hook("S_ACTION_STAGE", 9, { order: 0, filter: { fake: false } }, event => {
		const mob = dispatch.require.library.entity.mobs[event.gameId.toString()];

		if (event.stage === 0 && event.skill.npc && mob && mob.huntingZoneId === 3401 && mob.templateId === 3000 &&
			!comboSkills.has(event.skill.id % 1000)) {
			resetCombo();
			expectStart = true;
		}
	});

	return {
		"ns-3401-3000": [{ type: "func", func: () => { resetCombo(); expectStart = true; thirdboss_print_bait = true; } }],
		"nd-3401-3000": [
			{ type: "func", func: resetCombo },
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//
		"s-3401-3000-121-0": [{ type: "func", func: comboSkill, args: [121] }],
		//
		"s-3401-3000-128-0": [{ type: "func", func: comboSkill, args: [128] }],
		"s-3401-3000-129-0": [{ type: "func", func: comboSkill, args: [129] }],
		"s-3401-3000-130-0": [{ type: "func", func: comboSkill, args: [130] }],
		"s-3401-3000-105-0": [ // 130 -> 105
			{ type: "func", func: comboSkill, args: [105] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-3401-3000-106-0": [
			{ type: "func", func: comboSkill, args: [106] },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 12, 270, 0, 2600] }
		],
		"s-3401-3000-131-0": [{ type: "func", func: comboSkill, args: [131] }],
		"s-3401-3000-107-0": [ // 131 -> 107
			{ type: "func", func: comboSkill, args: [107] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-3401-3000-108-0": [
			{ type: "func", func: comboSkill, args: [108] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 250, 12, 200, 0, 2600] }
		],
		"s-3401-3000-109-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний" }],
		//
		"s-3401-3000-110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_RU: "Рывок назад" }],
		"s-3401-3000-111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая" }],
		"s-3401-3000-114-0": [{ type: "text", sub_type: "message", message: "Pull", message_RU: "Притяжка" }], // 114 -> 111
		"s-3401-3000-115-0": [{ type: "text", sub_type: "message", message: "Circles (dodge)", message_RU: "Круги (эвейд)" }],
		"s-3401-3000-117-0": [{ type: "text", sub_type: "message", message: "Jump", message_RU: "Прыжок" }], // 503 -> 117
		"s-3401-3000-134-0": [ // qb 468052 -> 134
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_RU: "Ближний + АоЕ" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-3401-3000-134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-3401-3000-136-0": [{ type: "text", sub_type: "message", message: "Donut", message_RU: "Бублик" }], // 135 -> 136
		"s-3401-3000-202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели" }], // 503 -> 201 -> 202
		"s-3401-3000-205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_RU: "Бросок цели" }], // 503 -> 117 -> 203 -> 204 -> 205
		"s-3401-3000-206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_RU: "Копье (таргет)" }], // 206 -> 207
		"s-3401-3000-302-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт" }],
		"s-3401-3000-501-0": [{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка" }],
		"s-3401-3000-502-0": [
			{ type: "text", sub_type: "message", message: "AoE -> Cage", message_RU: "АоЕ -> Клетка" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-3401-3000-503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_RU: "Захват цели" }], // qb 468050 -> 503
		"s-3401-3000-504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_RU: "Призыв мобов" }],
		//
		"give_bait": [
			{ type: "event", check_func: () => thirdboss_print_bait, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_RU: "Дать байт", class_position: "heal" },
				{ type: "func", func: () => thirdboss_print_bait = false },
				{ type: "func", func: () => thirdboss_print_bait = true, delay: 6000 }
			] }
		],
		"give_bait_combo": [
			{ type: "event", check_func: ent => finishedSkill === ent.skill.id % 1000, args: [
				{ type: "text", sub_type: "message", message: "Give Bait", message_RU: "Дать байт", class_position: "heal" },
				{ type: "func", func: () => { resetCombo(); expectStart = true; } }
			] }
		],
		"e-3401-3000-101": "give_bait",
		"e-3401-3000-102": "give_bait",
		"e-3401-3000-105": "give_bait_combo", // left
		"e-3401-3000-106": "give_bait_combo", // back
		"e-3401-3000-107": "give_bait_combo", // right
		"e-3401-3000-108": "give_bait_combo", // front
		"e-3401-3000-111": "give_bait", // 360 attack
		"e-3401-3000-114": "give_bait", // pull
		"e-3401-3000-115": "give_bait", // circles
		"e-3401-3000-117": "give_bait", // jump
		"e-3401-3000-202": "give_bait", // target throw
		"e-3401-3000-205": "give_bait", // target throw
		"e-3401-3000-207": "give_bait", // pike
		"s-3401-3000-122-2": "give_bait", // core pattern 1
		"s-3401-3000-123-2": "give_bait", // core pattern 2
		"s-3401-3000-124-2": "give_bait", // core pattern 3
		"s-3401-3000-127-2": "give_bait", // core pattern 4
		"e-3401-3000-136": "give_bait", // donut
		"s-3401-3000-506-1": "give_bait" // dissipation
	};
};
