// Chaos Ice Throne
//
// made by icebrog / Vampic

const Vec3 = require("tera-vec3");

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	function cage_event() {
		const entity = {};
		entity.loc = new Vec3(4907, 164061, 4244);
		entity.loc.w = 1.2419491953919122;

		handlers.spawn({ func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 15000], tag: "pre-cage" }, entity);
	}

	return {
		// 1 BOSS
		"nd-3209-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3209-1000-1301-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 50, 12, 250, 0, 4500] }
		],
		"s-3209-1000-1305-0": [{ type: "text", sub_type: "message", message: "Puddles on lizards", message_RU: "Лужи на ящериц" }],
		"s-3209-1000-1306-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 50, 12, 250, 0, 4500] }
		],

		// 2 BOSS
		"nd-3209-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3209-2000-20": [{ type: "text", sub_type: "message", message: "20%" }],
		"h-3209-2000-50": [{ type: "text", sub_type: "message", message: "50%" }],
		//
		"s-3209-2000-1403-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_RU: "Удар назад", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 8, 350, 0, 2500], delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 8, 350, 0, 2500], delay: 2500 }
		],
		"s-3209-2000-2403-0": "s-3209-2000-1403-0",
		"s-3209-2000-1405-0": [
			{ type: "text", sub_type: "message", message: "Front Sweep | Back Slam", message_RU: "Передняя | Удар назад" },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 8, 350, 0, 2000], delay: 1500 },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 8, 350, 0, 2000], delay: 1500 }
		],
		"s-3209-2000-2405-0": "s-3209-2000-1405-0",
		"s-3209-2000-1406-0": [{ type: "text", sub_type: "message", message: "Back Stun", message_RU: "Стан назад", delay: 1000 }],
		"s-3209-2000-2406-0": "s-3209-2000-1406-0",
		"s-3209-2000-1409-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_RU: "Удар назад", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 12, 225, 0, 2000], delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 12, 225, 0, 2000], delay: 3000 }
		],
		"s-3209-2000-2409-0": "s-3209-2000-1409-0",
		"s-3209-2000-1410-0": [
			{ type: "text", sub_type: "message", message: "Back Stun", message_RU: "Стан назад" },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 12, 225, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 12, 225, 0, 1500] }
		],
		"s-3209-2000-2410-0": "s-3209-2000-1410-0",
		"s-3209-2000-1411-0": [
			{ type: "text", sub_type: "message", message: "Back Knockup!", message_RU: "Подкид назад" },
			{ type: "spawn", func: "vector", args: [553, 0, 75, 90, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 75, 270, 400, 0, 3500] }
		],
		"s-3209-2000-2411-0": "s-3209-2000-1411-0",
		// In - Out
		"s-3209-2000-1412-0": [
			{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 420, 0, 3000] }
		],
		"s-3209-2000-2412-0": "s-3209-2000-1412-0",
		"s-3209-2000-1416-0": [
			{ type: "text", sub_type: "message", message: "Out", message_RU: "От него" },
			{ type: "text", sub_type: "message", message: "In | Pizza", message_RU: "К нему | Пицца", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 440, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 420, 0, 6500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 7.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 30, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 52.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 75, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 97.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 120, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 142.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 165, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 187.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 210, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 232.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 255, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 277.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 300, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 322.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 345, 200, 0, 5500, false] }
		],
		"s-3209-2000-2416-0": "s-3209-2000-1416-0",
		"s-3209-2000-1417-0": [
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему" },
			{ type: "text", sub_type: "message", message: "Out | Pizza", message_RU: "От него | Пицца", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 440, 0, 6500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 420, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 7.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 30, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 52.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 75, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 97.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 120, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 142.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 165, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 187.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 210, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 232.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 255, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 277.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 300, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 322.5, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 345, 200, 0, 1500, false], delay: 5500 }
		],
		"s-3209-2000-2417-0": "s-3209-2000-1417-0",
		// Dig
		"s-3209-2000-1510-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 4500 }],
		"s-3209-2000-2510-0": "s-3209-2000-1510-0",
		"s-3209-2000-1511-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 400, 0, 2500] }],
		"s-3209-2000-2511-0": "s-3209-2000-1511-0",
		"s-3209-2000-1602-0": [
			{ type: "text", sub_type: "message", message: "Get Out", message_RU: "Наружу" },
			{ type: "func", func: cage_event }
		],
		"s-3209-2000-2602-0": "s-3209-2000-1602-0",
		"s-3209-2000-1604-0": [
			{ type: "despawn_all", tag: "pre-cage" },
			{ type: "text", sub_type: "message", message: "Cage (In)", message_RU: "Клетка (к нему)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 405, 0, 15000], tag: "cage" }
		],
		"s-3209-2000-2604-0": "s-3209-2000-1604-0",
		"s-3209-2000-1605-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца", delay: 2000 },
			{ type: "text", sub_type: "message", message: "Out-In", message_RU: "От него - К нему", delay: 5000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 407, 0, 10000] },
			{ type: "despawn_all", tag: "cage" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 22.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 45, 200, 0, 8000, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 67.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 750, false], delay: 8000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 112.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 135, 200, 0, 8000, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 157.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 180, 200, 0, 750, false], delay: 8000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 202.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 225, 200, 0, 8000, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 247.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 750, false], delay: 8000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 292.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 315, 200, 0, 8000, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 337.5, 407, 0, 10000] },
			{ type: "spawn", func: "marker", args: [false, 360, 200, 0, 750, false], delay: 8000 }
		],
		"s-3209-2000-2605-0": "s-3209-2000-1605-0",
		// Waves
		"s-3209-2000-1616-0": [{ type: "text", sub_type: "message", message: "Inward Wave (Gather)", message_RU: "Волна (вместе)" }],
		"s-3209-2000-2616-0": "s-3209-2000-1616-0",
		"ae-0-0-32092005": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд" }],
		"s-3209-2000-1617-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Waves", message_RU: "Передняя | Волны" },
			{ type: "text", sub_type: "message", message: "Back Waves", message_RU: "Волны", delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 270, -950, 165, 1000, 0, 12000] },
			{ type: "spawn", func: "vector", args: [553, 270, 950, -10, 1000, 0, 12000] },
			{ type: "spawn", func: "vector", args: [553, 270, -950, 10, 1000, 0, 12000] },
			{ type: "spawn", func: "vector", args: [553, 270, 950, -165, 1000, 0, 12000] }
		],
		"s-3209-2000-2617-0": "s-3209-2000-1617-0",
		//
		"qb-3209-2000-32092011": [{ type: "text", sub_type: "message", message: "Debuff", message_RU: "Дебаф" }],
		// Dakuryon
		"s-3209-2750-1301-0": [
			{ type: "text", sub_type: "message", message: "Dakuryon", message_RU: "Дурион" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 7500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 1000, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 7500] }
		],
		"s-3209-2750-2301-0": "s-3209-2750-1301-0",
		"s-3209-2752-1302-0": [
			{ type: "text", sub_type: "message", message: "Dakuryon", message_RU: "Дурион" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 7500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 1000, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 7500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 7500] }
		],
		"s-3209-2752-2302-0": "s-3209-2752-1302-0"
	};
};