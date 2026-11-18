// Damned Citadel
// by zipulya

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-3041-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3041-2000-106-0": [{ type: "text", sub_type: "message", message: "Push (Tank)", message_RU: "Откид (танк)" }],
		"s-3041-2000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_RU: "Удар вперед (стан)" }],
		"s-3041-2000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_RU: "Откид назад" }],
		"s-3041-2000-114-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_RU: "Байт (таргет)" }],
		"s-3041-2000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 205, 410, null, 220, 0, 2000] }
		],
		"s-3041-2000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_RU: "Удар назад (стан)" },
			{ type: "spawn", func: "circle", args: [true, 553, 155, 410, null, 220, 0, 2000] }
		],
		"s-3041-2000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_RU: "Удар (таргет)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-3041-2000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-3041-2000-124-0": [{ type: "text", sub_type: "message", message: "AoE (Dodge)", message_RU: "АоЕ (эвейд)" }],
		"s-3041-2000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_RU: "Удар | Передний стан" }],
		"s-3041-2000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_RU: "Передний стан" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-3041-2000-127-0": [
			{ type: "text", sub_type: "message", message: "Back Hit", message_RU: "Удар назад" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 350, null, 380, 0, 2000] }
		],
		"s-3041-2000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_RU: "Кувырок | Удар назад" }],
		"s-3041-2000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_RU: "Удар назад (кровоток)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-3041-2000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_RU: "Передняя комба" }],
		"s-3041-2000-301-0": [
			{ type: "text", sub_type: "message", message: "Thorns (Target)", message_RU: "Шипы х5" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 2200 }
		],
		"s-3041-2000-303-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_RU: "Право сейв" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-3041-2000-306-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_RU: "Лево сейв" },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		],
		"s-3041-2000-309-0": [{ type: "text", sub_type: "message", message: "Debuff!!!", message_RU: "Дебафф!!!" }],
		"s-3041-2000-315-0": [
			{ type: "text", sub_type: "message", message: "Dodge | Out", message_RU: "Эвейд | От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 0, null, 400, 0, 6000] }
		],
		"s-3041-2000-411-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 3000] }]
	};
};