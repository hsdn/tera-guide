// Fusion Laboratory
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3105-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"h-3105-1000-80": [{ type: "text", sub_type: "message", message: "80%", message_RU: "80%" }],
		// "h-3105-1000-50": [{ type: "text", sub_type: "message", message: "50%", message_RU: "50%" }],
		// "h-3105-1000-40": [{ type: "text", sub_type: "message", message: "40%", message_RU: "40%" }],
		"h-3105-1000-35": [{ type: "text", sub_type: "message", message: "35%", message_RU: "35%" }],

		"s-3105-1000-101-0": [{ type: "text", sub_type: "message", message: "Front Swing", message_RU: "Удар вперед" }],
		"s-3105-1000-102-0": [
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 300, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 300, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 300, 2000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 180, 300, 2000, 2000] },
			{ type: "text", sub_type: "message", message: "Disc Throw", message_RU: "Диск" }
		],
		"s-3105-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_RU: "Стан (АОЕ)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 250, 100, 3000] }
		],
		"s-3105-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Push (Tank)", message_RU: "Откид (танк)" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 0, 3000] }
		],
		"s-3105-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Front Laser", message_RU: "Передний лазер" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 1000, 4000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 1000, 4000] }
		],
		"s-3105-1000-106-0": [{ type: "text", sub_type: "message", message: "Blades Front", message_RU: "Лезвия вперед" }],
		"s-3105-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Blades Back", message_RU: "Лезвия назад" },
			{ type: "spawn", func: "vector", args: [553, 70, 10, 160, 350, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 290, 10, -160, 350, 0, 3000] }
		],
		"s-3105-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Shot", message_RU: "Выстрел" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 0, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 0, 500, 0, 3000] }
		],
		"s-3105-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Back Laser", message_RU: "Задний лазер" },
			{ type: "spawn", func: "vector", args: [553, 90, 60, 180, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 60, 180, 500, 0, 2000] }
		],
		"s-3105-1000-120-0": [{ type: "text", sub_type: "message", message: "Storm", message_RU: "Шторм" }],
		"s-3105-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Spin (Kaia) | Back Laser", message_RU: "Крутилка (кайа) | Задний лазер" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 12, 260, 100, 5000] }
		],
		"s-3105-1000-303-0": [{ type: "text", sub_type: "message", message: "Kick (Push)", message_RU: "Удар ногой (откид)" }],

		// Donuts combo <80%
		"qb-3105-1000-31051013": [{ type: "text", sub_type: "message", message: "Donuts: Out > In > Dodge", message_RU: "Бублики: От него > К нему > Эвейд" }],
		"qb-3105-1000-31051014": [{ type: "text", sub_type: "message", message: "Donuts: In > Out > Dodge", message_RU: "Бублики: К нему > От него > Эвейд" }],
		"s-3105-1000-115-0": [
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "text", sub_type: "message", delay: 5000, message: "Dodge", message_RU: "Эвейд" }
		],
		"s-3105-1000-116-0": [
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "text", sub_type: "message", delay: 5000, message: "Dodge", message_RU: "Эвейд" }
		],

		"qb-3105-1000-31051002": [{ type: "text", sub_type: "message", message: "Shield!", message_RU: "Щит!" }], // <50%
		"s-3105-1000-123-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_RU: "Щит не пробит" }],

		"qb-3105-1000-31051004": [{ type: "text", sub_type: "message", message: "Bait (Lasers)", message_RU: "Байт (лазеры)" }], // range check
		"qb-3105-1000-31051005": [{ type: "text", sub_type: "message", message: "Bait (Storm)", message_RU: "Байт (шторм)" }], // get stun
		"qb-3105-1000-31051006": [{ type: "text", sub_type: "message", message: "Bait (Blades)", message_RU: "Байт (лезвия)" }], // cast ress
		"qb-3105-1000-31051007": [{ type: "text", sub_type: "message", message: "Puddles", message_RU: "Лужи" }], // <40%

		// Core mech <35%
		"qb-3105-1000-31051010": [{ type: "text", sub_type: "message", message: "Lasers + Wave", message_RU: "Лазеры + волна" }],
		"s-3105-1000-304-0": [ // red
			{ type: "text", sub_type: "message", message: "Dodge!", message_RU: "Эвейд!", delay: 200 },
			// { type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/регресс", class_position: "priest", delay: 1000 },
			// { type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", class_position: "mystic", delay: 1000 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_RU: "Дать стан!", delay: 2000 }
		],
		"s-3105-1000-305-0": [ // blue
			{ type: "text", sub_type: "message", message: "Dodge!", message_RU: "Эвейд!", delay: 200 },
			{ type: "text", sub_type: "message", message: "Give Stun!", message_RU: "Дать стан!", delay: 2000 }
		],
		"s-3105-1000-121-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }], // red
		"s-3105-1000-122-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }], // blue

		"qb-3105-1000-31051011": [{ type: "text", sub_type: "message", message: "Lasers!", message_RU: "Лазеры!" }], // <80%

		"s-3105-1001-101-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 5000] }], // laser (basic)
		"s-3105-1002-101-0": "s-3105-1001-101-0",
		"s-3105-1003-101-0": "s-3105-1001-101-0",
		"s-3105-1004-101-0": "s-3105-1001-101-0",
		"s-3105-1005-101-0": "s-3105-1001-101-0",
		"s-3105-1006-101-0": "s-3105-1001-101-0",

		"s-3105-1001-102-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 5000] }], // laser (bait)
		"s-3105-1002-102-0": "s-3105-1001-102-0",
		"s-3105-1003-102-0": "s-3105-1001-102-0",
		"s-3105-1004-102-0": "s-3105-1001-102-0",
		"s-3105-1005-102-0": "s-3105-1001-102-0",
		"s-3105-1006-102-0": "s-3105-1001-102-0",

		"s-3105-1001-103-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 5000] }], // laser (core)
		"s-3105-1002-103-0": "s-3105-1001-103-0",
		"s-3105-1003-103-0": "s-3105-1001-103-0",
		"s-3105-1004-103-0": "s-3105-1001-103-0",
		"s-3105-1005-103-0": "s-3105-1001-103-0",
		"s-3105-1006-103-0": "s-3105-1001-103-0"
	};
};