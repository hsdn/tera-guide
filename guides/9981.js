﻿// Velik's Sanctuary (Hard)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" },
				{ type: "spawn", func: "marker", args: [false, one * 45 + 70, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "marker", args: [false, two * 45 + 70, 300, 8000, 5000, true, null] }
			]);
		}
	}

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_RU: "ДКБ"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_RU: "ДБК"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_RU: "КБД"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_RU: "КДБ"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_RU: "БДК"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_RU: "БКД"
					});
				}
				break;
		}
	}

	return {
		// 1 BOSS
		"nd-981-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-981-1000-1111-0": [{ type: "text", sub_type: "message", message: "Back 360", message_RU: "Задняя 360" }],
		"s-981-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-1000-1301-0": [{ type: "text", sub_type: "message", message: "AOE (Go to the safe)", message_RU: "АОЕ (отойти в сейф зону)" }],
		"s-981-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-981-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_RU: "Взлет" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-981-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу" }],
		"s-981-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь" }],
		"s-981-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_RU: "Передняя | AOE" }],
		"s-981-1000-2111-0": "s-981-1000-1111-0",
		"s-981-1000-2301-0": "s-981-1000-1301-0",
		"s-981-1000-2401-0": "s-981-1000-1401-0",
		"s-981-1000-2402-0": "s-981-1000-1402-0",
		"s-981-1000-2303-0": "s-981-1000-1303-0",
		"s-981-1000-2304-0": "s-981-1000-1304-0",
		"s-981-1000-2308-0": "s-981-1000-1308-0",
		"s-981-1000-2309-0": "s-981-1000-1309-0",
		"s-981-1000-2113-0": "s-981-1000-1113-0",
		"qb-981-1000-98103": [{ type: "text", sub_type: "message", message: "Lead circle to the stone", message_RU: "Отвести круг к пилону" }],
		"qb-981-1000-78107": [{ type: "text", sub_type: "message", message: "Lead circles to the stone", message_RU: "Отвести круги к пилону" }],

		// 2 BOSS
		"nd-981-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Cage Mechanic
		"s-981-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_RU: "Идентификация" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-981-2000-1138-0": [
			{ type: "event", delay: 7000, args: [
				// x6 normal + in circle
				{ type: "spawn", func: "marker", args: [false, 15, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 0, 3500, true, null] },
				// out circle + x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 3500, 2000, true, null] },
				// x4 normal
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-981-2000-1139-0": [
			{ type: "event", delay: 7000, args: [
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 1000, 2000, true, null] },
				// x6 normal + out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 3000, true, null] },
				// in circle + x4
				{ type: "spawn", func: "marker", args: [false, 75, 270, 6000, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 6000, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 6000, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 6000, 3500, true, null] }
			] }
		],
		"s-981-2000-1140-0": [
			{ type: "event", delay: 7000, args: [
				// in circle + x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 0, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 0, 3500, true, null] },
				// x6 normal + out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3500, 2000, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-981-2000-1141-0": [
			{ type: "event", delay: 7000, args: [
				// x6 normal
				{ type: "spawn", func: "marker", args: [false, 15, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 1000, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 1000, 2000, true, null] },
				// x6 reverse + out circle
				{ type: "spawn", func: "marker", args: [false, 45, 270, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 3000, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 3000, 3000, true, null] },
				// in circle + x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 6000, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 6000, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 6000, 3500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 6000, 3500, true, null] }
			] }
		],
		//
		"s-981-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-981-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний" }],
		"s-981-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_RU: "Круговая" }],
		"s-981-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Combo Attack (Dodge)", message_RU: "Задний" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-981-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 15, 175, 100, 2000] }
		],
		"s-981-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Откид влево" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Откид вправо" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-981-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_RU: "Байт (таргет)" }],
		"s-981-2000-1302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1600 }],
		"s-981-2000-2501-0": "s-981-2000-1501-0",
		"s-981-2000-2106-0": "s-981-2000-1106-0",
		"s-981-2000-2108-0": "s-981-2000-1108-0",
		"s-981-2000-2111-0": "s-981-2000-1111-0",
		"s-981-2000-2134-0": "s-981-2000-1134-0",
		"s-981-2000-2134-1": "s-981-2000-1134-1",
		"s-981-2000-2130-0": "s-981-2000-1130-0",
		"s-981-2000-2131-0": "s-981-2000-1131-0",
		"s-981-2000-2302-0": "s-981-2000-1302-0",
		"s-981-2000-2302-1": "s-981-2000-1302-1",
		"qb-981-2000-468036": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_RU: "Призыв мобов" }],
		// Pizza Mechanic
		"s-981-927-1301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-981-927-1312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-981-927-1313-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-981-927-1314-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-781-927-1315-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		//
		"qb-981-4000-9981046": [{ type: "text", sub_type: "notification", message: "First: (Debuffs) Closest", message_RU: "[ДКБ] Первая: дебафф (ближние)" }], // Thank you... for this release...
		"qb-981-4000-9981047": [{ type: "text", sub_type: "notification", message: "First: (Circles) Spread", message_RU: "[КБД] Первая: круги (отдельно)" }], // Beware the... red lightning...
		"qb-981-4000-9981048": [{ type: "text", sub_type: "notification", message: "First: (Bombs) Gather + Cleanse", message_RU: "[БДК] Первая: бомбы (вместе + клинс)" }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-981-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-981-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-981-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9981043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9981044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9981045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-981-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_RU: "Дебафф (ближние)" }],
		"s-981-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_RU: "Дебафф (дальние)" }],
		"s-981-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_RU: "Бомбы (вместе!) + клинс" }],
		"s-981-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_RU: "Бомбы (вместе!) + без клинса" }],
		"s-981-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_RU: "Круги (отдельно!)" }],
		"s-981-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_RU: "Круги (вместе!)" }],
		"s-981-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти" }],
		"s-981-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_RU: "Наружу" }],
		"s-981-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "Внутрь" }],
		"s-981-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-981-3000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!" }],
		"s-981-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_RU: "Слип!!" }],
		"s-981-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_RU: "Назад + Вперед" }],
		//
		"s-981-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт" }],
		"s-981-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention stun", message_RU: "Стан" }],
		"s-981-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_RU: "Стан + Откид назад" }],
		"s-981-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-981-3000-2113-0": "s-981-3000-1113-0",
		"s-981-3000-2151-0": "s-981-3000-1151-0",
		"s-981-3000-2152-0": "s-981-3000-1152-0",
		"s-981-3000-2138-0": "s-981-3000-1138-0"
	};
};