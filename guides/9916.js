// Sky Cruiser Endeavor (Hard)
//
// made by michengs / HSDN / Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter = 0;
	let timer2 = null;

	function boss_backcombo_event() {
		dispatch.clearTimeout(timer2);
		counter++;

		if (counter >= 2) {
			handlers.text({
				sub_type: "message",
				message_RU: "Задняя комба 2x360",
				message: "Back Combo 2x360"
			});
		}

		timer2 = dispatch.setTimeout(() => counter = 0, 3000);
	}

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 1500;

			handlers.text({
				sub_type: "message",
				message_RU: is_one_back ? "Задняя 360" : "!!!",
				message: is_one_back ? "Back 360" : "!!!"
			});
		}
		dispatch.setTimeout(() => back_print = false, 3500);
	}

	return {
		// Mini BOSS 1
		"qb-916-91660-916045": [{ type: "text", sub_type: "message", message_RU: "Случайный выстрел", message: "Random Shot" }],
		"s-916-91660-1304-0": [
			{ type: "spawn", func: "vector", args: [912, 370, 50, 8, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 350, 50, -8, 1900, 0, 3000] }
		],
		"s-916-91660-1304-1": [
			{ type: "spawn", func: "vector", args: [912, 370, 50, 8, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 1900, 0, 3000] },
			{ type: "spawn", func: "vector", args: [912, 350, 50, -8, 1900, 0, 3000] }
		],
		"s-916-91650-1102-0": [{ type: "text", sub_type: "message", message_RU: "Стан АоЕ", message: "AoE Stun" }],
		"s-916-91650-1104-0": [{ type: "text", sub_type: "message", message_RU: "Случайная цель (стан)", message: "Random Target (Stun)" },
			{ type: "spawn", func: "semicircle", args: [-33, 38, 912, 0, 0, 8, 550, 0, 3500] }, //1
			{ type: "spawn", func: "semicircle", args: [-30, 35, 912, 0, 0, 8, 500, 0, 3500] }, //1
			{ type: "spawn", func: "semicircle", args: [59, 116, 912, -22, 210, 8, 480, 0, 3500] }, //2
			{ type: "spawn", func: "semicircle", args: [65, 120, 912, -17, 210, 8, 410, 0, 3500] }, //2
			{ type: "spawn", func: "semicircle", args: [-110, -55, 912, 30, 200, 8, 500, 0, 3500] }, //3
			{ type: "spawn", func: "semicircle", args: [-110, -55, 912, 30, 200, 8, 450, 0, 3500] }//3
		],
		"s-916-91650-1105-0": [{ type: "text", sub_type: "message", message_RU: "Прыжок + Удар головой (таргет)", message: "Jump + Headbutt on Target" }],
		"s-916-91650-1106-0": [{ type: "text", sub_type: "message", message_RU: "Удар головой (таргет)", message: "Headbutt (Target)" }],
		"s-916-91650-2102-0": "s-916-91650-1102-0",
		"s-916-91650-2104-0": "s-916-91650-1104-0",
		"s-916-91650-2105-0": "s-916-91650-1105-0",
		"s-916-91650-2106-0": "s-916-91650-1106-0",

		// Mini BOSS 2
		"h-916-91606-100": [
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 57099, y: 129439, z: 2370, w: -1.004 }, ownerName: "LASER", message: "LASER" }, //1
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 57099, y: 129439, z: 2370, w: -1.004 } }, //1
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 58313, y: 129448, z: 2370, w: -2.06 }, ownerName: "LASER", message: "LASER" }, //2
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 58313, y: 129448, z: 2370, w: -2.06 } }, //2
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 58310, y: 127208, z: 2370, w: 2.00 }, ownerName: "LASER", message: "LASER" }, //3
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 58310, y: 127208, z: 2370, w: 2.00 } }, //3
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 99999999, pos: { x: 57064, y: 127210, z: 2370, w: 1.00 }, ownerName: "LASER", message: "LASER" }, //4
			{ type: "spawn", sub_type: "item", id: 110684, sub_delay: 99999999, pos: { x: 57064, y: 127210, z: 2370, w: 1.00 } }//4
		],
		"s-916-91606-1304-0": [{ type: "text", sub_type: "message", message_RU: "Случайный лазер", message: "Random Laser" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 57291, y: 129078, z: 2370, w: -1.00 }, ownerName: "LASER", message: "LASER" }, //1
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 58116, y: 129086, z: 2370, w: -2.06 }, ownerName: "LASER", message: "LASER" }, //2
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 58119, y: 127632, z: 2370, w: 2.00 }, ownerName: "LASER", message: "LASER" }, //3
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 5000, pos: { x: 57294, y: 127626, z: 2370, w: 1.00 }, ownerName: "LASER", message: "LASER" }//4
		],
		"s-916-91606-1102-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message: "Spin" }],
		"s-916-91606-1106-0": [{ type: "text", sub_type: "message", message_RU: "Передняя комба (таргет)", message: "Frontal Combo (Target)" }],
		"s-916-91606-1107-0": [{ type: "text", sub_type: "message", message_RU: "Несколько ударов (таргет)", message: "Many Hits (Target)" }],
		"s-916-91606-1302-0": [{ type: "text", sub_type: "message", message_RU: "Лазер (ЗАЩИТА)", message: "Laser (PROTECT)" },
			{ type: "spawn", func: "vector", args: [912, 360, 50, 0, 900, 0, 4000] }
		],
		"s-916-91606-1304-1": [{ type: "text", sub_type: "message", message_RU: "Эвейд", message: "Dodge", delay: 350 }],
		"s-916-91606-1305-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AoEs" }],
		"s-916-91606-2305-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AoEs" }],
		"s-916-91606-2102-0": "s-916-91606-1102-0",
		"s-916-91606-2106-0": "s-916-91606-1106-0",
		"s-916-91606-2107-0": "s-916-91606-1107-0",
		"qb-916-91606-916027": [{ type: "text", sub_type: "message", message_RU: "Таргет (откид)", message: "Target (Push)" }],
		"qb-916-91606-916007": [{ type: "text", sub_type: "message", message_RU: "ВМЕСТЕ", message: "GATHER" }],

		// Boss 3
		"nd-916-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-916-1000-94": [{ type: "text", sub_type: "message", message: "94%" }],
		"h-916-1000-49": [{ type: "text", sub_type: "message", message: "49%" }],
		"s-916-1000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-916-1000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-916-1000-1112-0": [{ type: "text", sub_type: "message", message_RU: "Рывок назад", message: "Back Move" }],
		"s-916-1000-1103-0": [{ type: "func", func: boss_backcombo_event }],
		"s-916-1000-1108-0": [{ type: "func", func: boss_backcombo_event }],
		"s-916-1000-1114-0": [
			{ type: "text", sub_type: "message", message_RU: "Таргет", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-916-1000-1115-0": [
			{ type: "text", sub_type: "message", message: "3" },
			{ type: "text", sub_type: "message", delay: 1000, message: "2" },
			{ type: "text", sub_type: "message", delay: 2000, message: "1" },
			{ type: "text", sub_type: "message", delay: 3200, message_RU: "Эвейд", message: "Dodge" }
		],
		"s-916-1000-1117-0": [{ type: "text", sub_type: "message", message_RU: "Удар вперед", message: "Front" }],
		"s-916-1000-1118-0": [
			{ type: "text", sub_type: "message", message_RU: "Передний разрез | Эвейд", message: "Frontal Cut | Dodge" },
			{ type: "spawn", func: "semicircle", args: [0, 60, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 55, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [300, 360, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [305, 360, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [310, 360, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [315, 360, 553, 0, 0, 10, 340, 0, 2000] }
		],
		"s-916-1000-1302-0": [
			{ type: "text", sub_type: "message", message_RU: "АоЕ", message: "AOE" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 500, 100, 6000] }
		],
		"s-916-1000-2101-0": "s-916-1000-1101-0",
		"s-916-1000-2102-0": "s-916-1000-1102-0",
		"s-916-1000-2103-0": "s-916-1000-1103-0",
		"s-916-1000-2108-0": "s-916-1000-1108-0",
		"s-916-1000-2112-0": "s-916-1000-1112-0",
		"s-916-1000-1303-0": [{ type: "text", sub_type: "message", message_RU: "Крутилка", message: "Spin Attack" }],
		"s-916-1000-1801-0": [{ type: "text", sub_type: "message", message_RU: "Стан", message: "Incoming Stun" }],
		"s-916-1000-1401-0": [{ type: "text", sub_type: "message", message_RU: "Правый", message: "Right" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		],
		"s-916-1000-1402-0": [{ type: "text", sub_type: "message", message_RU: "Левый", message: "Left" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 180, 1100, 100, 1500] },
			{ type: "spawn", func: "vector", args: [553, 358, 0, 0, 1100, 100, 1500] }
		],
		"s-916-1000-2114-0": "s-916-1000-1114-0",
		"s-916-1000-2115-0": "s-916-1000-1115-0",
		"s-916-1000-2117-0": "s-916-1000-1117-0",
		"s-916-1000-2118-0": "s-916-1000-1118-0",
		"s-916-1000-2401-0": "s-916-1000-1401-0",
		"s-916-1000-2402-0": "s-916-1000-1402-0"
	};
};