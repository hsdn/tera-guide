// Catalepticon (Easy)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_count = 0;

	return {
		"ns-3400-1000": [{ type: "func", func: () => combo_count = 0 }],
		"nd-3400-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],

		"qb-3400-1000-32042000": [
			{ type: "text", sub_type: "message", message: "Arrows", message_RU: "Стрелки" },
			{ type: "func", func: () => combo_count = 0 }
		],
		"qb-3400-1000-32041000": [
			{ type: "text", sub_type: "message", message: "Lines -> Two pizzas -> Stun", message_RU: "Полосы-> Две пиццы -> Стан" }
		],

		"s-3400-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_RU: "Стан (АОЕ)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -50, 10, 380, 0, 2000] }
		],
		"s-3400-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Line Forward + Side Lines", message_RU: "Полоса вперед + полосы по бокам" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 1000 }
		],
		"s-3400-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Target + Wave", message_RU: "Таргет + волна" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -500, 10, 350, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 120, 500, 0, 2000], delay: 1500 },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 240, 500, 0, 2000], delay: 1500 },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 2500 }
		],
		"s-3400-1000-112-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_RU: "Волна вперед" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 290, 500, 0, 2000] }
		],
		"s-3400-1000-114-0": [{ type: "text", sub_type: "message", message: "Inner + Outer AOEs", message_RU: "Внутреннее + внешнее АОЕ" }],
		"s-3400-1000-115-0": [{ type: "text", sub_type: "message", message: "Thrust -> Sweep", message_RU: "Выпад -> Взмах" }],
		"s-3400-1000-116-0": [
			{ type: "text", sub_type: "message", message: "Line Forward", message_RU: "Полоса вперед" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] }
		],
		"s-3400-1000-119-0": [{ type: "text", sub_type: "message", message: "Two Strikes", message_RU: "Два удара" }],
		"s-3400-1000-120-0": [
			{ type: "text", sub_type: "message", message: "Two Strikes + Stun (AOE)", message_RU: "Два удара + стан (АОЕ)" },
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_RU: "Стан (АОЕ)", delay: 1500 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -100, 10, 700, 0, 2500], delay: 1500 }
		],
		"s-3400-1000-123-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Круговая" }],
		"s-3400-1000-125-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_RU: "Стан (танк)" }],
		"s-3400-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3400-1000-128-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3400-1000-148-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" },
			{ type: "spawn", func: "marker", args: [false, 150, 150, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 340, 150, 0, 2000, true, null], delay: 1500 }
		],
		"s-3400-1000-159-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_RU: "АОЕ" },
			{ type: "marker_remove_all", delay: 3000 }
		]
	};
};