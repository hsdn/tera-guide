// Hall of the Argon Queen (Hard)
//
// made icebrog

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let debuff_list = [];
	let type = -1;

	const mech_messages = {
		1: { message: "1 (White)", message_RU: "1 (Белый)" },
		2: { message: "2 (Green)", message_RU: "2 (Зеленый)" },
		3: { message: "3 (Red)", message_RU: "3 (Красный)" },
		4: { message: "4 (Blue)", message_RU: "4 (Синий)" }
	};

	function debuff_text() {
		if (debuff_list.length === 0) return;

		if (type == 0) debuff_list.push(debuff_list.shift()); // Normal
		else debuff_list.unshift(debuff_list.pop()); // Reverse

		handlers.event([
			{ type: "text", sub_type: "message", message: mech_messages[debuff_list[0]].message, message_RU: mech_messages[debuff_list[0]].message_RU, delay: 150 },
			{ type: "text", sub_type: "notification", message: mech_messages[debuff_list[0]].message, message_RU: mech_messages[debuff_list[0]].message_RU, speech: false, delay: 150 }
		]);
	}

	function debuff_event(id) {
		if (id == 1) debuff_list = [1, 2, 3, 4]; // Greedy Thoughts #White
		else if (id == 2) debuff_list = [2, 3, 4, 1]; // Hateful Thoughts #Green
		else if (id == 3) debuff_list = [3, 4, 1, 2]; // Desperate Thoughts #Red
		else if (id == 4) debuff_list = [4, 1, 2, 3]; // Dreadful Thoughts #Blue
	}

	return {
		"ns-3047-1000": [
			{ type: "func", func: () => debuff_list = [] }
		],
		"nd-3047-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3047-1000-40": [{ type: "text", sub_type: "message", message: "40%" }],
		"h-3047-1000-50": [{ type: "text", sub_type: "message", message: "50%" }],
		"h-3047-1000-80": [{ type: "text", sub_type: "message", message: "80%" }],
		// Donuts
		"s-3047-1000-3102-0": [{ type: "text", sub_type: "message", message: "In - Out", message_RU: "К нему - От него" }],
		"s-3047-1000-4102-0": "s-3047-1000-3102-0",
		// AoE
		"s-3047-1000-3122-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE) - Inward Waves", message_RU: "Рев (АоЕ) - Волны внутрь" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 9000] }
		],
		"s-3047-1002-1212-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 500 }],
		"s-3047-1000-3204-0": [
			{ type: "text", sub_type: "message", message: "Roar (AoE)", message_RU: "Рев (АоЕ)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 0, 5000] }
		],
		"s-3047-1000-4122-0": "s-3047-1000-3122-0",
		"s-3047-1000-4204-0": "s-3047-1000-3204-0",
		// Puddle
		"s-3047-1000-3116-0": [{ type: "text", sub_type: "message", message: "5 Puddles", message_RU: "5 луж" }],
		"s-3047-1000-4116-0": "s-3047-1000-3116-0",
		// Shield Phase
		"s-3047-1000-3303-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_RU: "Щит" },
			{ type: "text", sub_type: "message", message: "Shield soon...!", message_RU: "Скоро щит...", delay: 100000 }
		],
		// Stuns
		"s-3047-1000-3119-0": [{ type: "text", sub_type: "message", message: "Stun Frontal", message_RU: "Передний стан" }],
		"s-3047-1000-3104-0": [
			{ type: "text", sub_type: "message", message: "Jump (Stun)", message_RU: "Прыжок (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 200, 0, 1500] }
		],
		"s-3047-1000-3108-0": [{ type: "text", sub_type: "message", message: "Fly (Puddle)", message_RU: "Полет (лужа)" }],
		"s-3047-1000-3108-2": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 200, 0, 1250] }],
		"s-3047-1000-4119-0": "s-3047-1000-3119-0",
		"s-3047-1000-4104-0": "s-3047-1000-3104-0",
		"s-3047-1000-4108-0": "s-3047-1000-3108-0",
		"s-3047-1000-4108-2": "s-3047-1000-3108-2",
		// Attacks
		"s-3047-1000-3107-0": [{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер" }],
		"s-3047-1000-3109-0": [{ type: "text", sub_type: "message", message: "Stun (Puddle)", message_RU: "Стан (лужа)" }],
		"s-3047-1000-3115-0": [
			{ type: "text", sub_type: "message", message: "Tail Split", message_RU: "Хвост" },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 220, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -220, 350, 0, 3000] }
		],
		"s-3047-1000-3120-0": [{ type: "text", sub_type: "message", message: "Tail Pushback", message_RU: "Откид хвостом" }],
		"s-3047-1000-3205-0": [{ type: "text", sub_type: "message", message: "Dig Attack", message_RU: "Нижняя атака" }],
		"s-3047-1000-3205-1": [{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-3047-1000-4205-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 20, 185, 0, 1500] }],
		"s-3047-1000-4107-0": "s-3047-1000-3107-0",
		"s-3047-1000-4109-0": "s-3047-1000-3109-0",
		"s-3047-1000-4115-0": "s-3047-1000-3115-0",
		"s-3047-1000-4205-0": "s-3047-1000-3205-0",
		"s-3047-1000-4120-0": "s-3047-1000-3120-0",
		// Debuff Mechs
		"qb-3047-1000-30471001": [
			{ type: "func", func: () => type = 0 },
			{ type: "func", func: debuff_text },
			{ type: "text", sub_type: "message", message: "Debuff (Normal)", message_RU: "Дебаф (нормал)", delay: 100 }
		],
		"qb-3047-1000-30471002": [
			{ type: "func", func: () => type = 1 },
			{ type: "func", func: debuff_text },
			{ type: "text", sub_type: "message", message: "Debuff (Reverse)", message_RU: "Дебаф (реверс)", delay: 100 }
		],
		"am-3047-1000-30471008": [{ type: "func", func: debuff_event, args: [1] }],
		"am-3047-1000-30471009": [{ type: "func", func: debuff_event, args: [2] }],
		"am-3047-1000-30471010": [{ type: "func", func: debuff_event, args: [3] }],
		"am-3047-1000-30471011": [{ type: "func", func: debuff_event, args: [4] }],
		// Plague/Regress
		"ab-3047-1000-30470100-1": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 1", message_RU: "Регресс - стак 1" }],
		"ab-3047-1000-30470100-2": [{ type: "text", sub_type: "message", message: "Plague/Regress - Stack 2", message_RU: "Регресс - стак 2" }]
	};
};