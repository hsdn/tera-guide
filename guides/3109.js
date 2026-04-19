// Ice Throne
//
// made by icebrog / Vampic

const Vec3 = require("tera-vec3");

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	function cage_event() {
		const entity = {};
		entity.loc = new Vec3(4842, 164045, 4244);
		entity.loc.w = 1.2419491953919122;

		handlers.spawn({ func: "circle", args: [false, 553, 0, 0, 8, 621, 0, 15000], tag: "pre-cage" }, entity);
	}

	const { player } = dispatch.require.library;
	let has_debuff_player = false;

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 32092053) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Icicles on you", message_RU: "Сосульки на тебе" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Icicles on ${member.name}`,
						message_RU: `Сосульки на ${member.name}`
					});
				} else {
					handlers.text({ sub_type: "message", message: "Icicles", message_RU: "Сосульки" });
				}
			}
		} else if (event.id === 32092004 && !has_debuff_player) {
			has_debuff_player = true;

			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Debuff on you", message_RU: "Дебаф на тебе" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Stay with ${member.name}`,
						message_RU: `Встать к ${member.name}`
					});
				} else {
					handlers.text({ sub_type: "message", message: "Inward Wave (Gather)", message_RU: "Волна (вместе)" });
				}
			}
		} else if (event.id === 32092005 && has_debuff_player) {
			has_debuff_player = false;
		}
	});

	dispatch.hook("S_ABNORMALITY_END", 1, event => {
		if (event.id === 32092004) {
			has_debuff_player = false;
		}
	});

	return {
		// 1 BOSS
		"nd-3109-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3109-1000-1112-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_RU: "Откид (кайа)" }],
		"s-3109-1000-2112-0": "s-3109-1000-1112-0",
		"s-3109-1000-1103-0": [{ type: "text", sub_type: "message", message: "Two pushback (Kaia)", message_RU: "Два откида (кайа)" }],
		"s-3109-1000-2103-0": "s-3109-1000-1103-0",
		"s-3109-1000-1301-0": [
			{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 50, 12, 250, 0, 4500] }
		],
		"s-3109-1000-1303-0": [{ type: "text", sub_type: "message", message: "Give stun!", message_RU: "Дать стан!" }],
		"s-3109-1000-1305-0": [{ type: "text", sub_type: "message", message: "Puddles on lizards", message_RU: "Лужи на ящериц" }],
		"s-3109-1000-1306-0": [
			{ type: "text", sub_type: "message", message: "In > Out", message_RU: "К нему > От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 50, 12, 250, 0, 4500] }
		],

		// 2 BOSS
		"nd-3109-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//
		"s-3109-2000-1403-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_RU: "Удар назад", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 8, 350, 0, 2500], delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 8, 350, 0, 2500], delay: 2500 }
		],
		"s-3109-2000-2403-0": "s-3109-2000-1403-0",
		"s-3109-2000-1404-0": [{ type: "text", sub_type: "message", message: "Front Stun", message_RU: "Стан вперёд", delay: 1000 }],
		"s-3109-2000-2404-0": "s-3109-2000-1404-0",
		"s-3109-2000-1405-0": [
			{ type: "text", sub_type: "message", message: "Back Slam", message_RU: "Удар назад", delay: 1500 },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 8, 350, 0, 1500], delay: 1500 },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 8, 350, 0, 1500], delay: 1500 }
		],
		"s-3109-2000-2405-0": "s-3109-2000-1405-0",
		"s-3109-2000-1406-0": [{ type: "text", sub_type: "message", message: "Back Stun", message_RU: "Стан назад", delay: 1000 }],
		"s-3109-2000-2406-0": "s-3109-2000-1406-0",
		"s-3109-2000-1409-0": [
			{ type: "text", sub_type: "message", message: "Front Knockup!", message_RU: "Подкид вперёд" },
			{ type: "spawn", func: "vector", args: [553, 0, -10, 90, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, -10, 270, 400, 0, 3500] },
			{ type: "text", sub_type: "message", message: "Back Slam", message_RU: "Удар назад", delay: 2000 },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 12, 225, 0, 3000], delay: 2000 },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 12, 225, 0, 3000], delay: 2000 }
		],
		"s-3109-2000-2409-0": "s-3109-2000-1409-0",
		"s-3109-2000-1410-0": [
			{ type: "text", sub_type: "message", message: "Back Stun", message_RU: "Стан назад" },
			{ type: "spawn", func: "circle", args: [false, 553, 157, 400, 12, 225, 0, 1500] },
			{ type: "spawn", func: "circle", args: [false, 553, 203, 400, 12, 225, 0, 1500] }
		],
		"s-3109-2000-2410-0": "s-3109-2000-1410-0",
		"s-3109-2000-1411-0": [
			{ type: "text", sub_type: "message", message: "Back Knockup!", message_RU: "Подкид назад" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 85, 550, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 550, 0, 3500] }
		],
		"s-3109-2000-2411-0": "s-3109-2000-1411-0",
		// In - Out
		"s-3109-2000-1412-0": [
			{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 420, 0, 3000] }
		],
		"s-3109-2000-2412-0": "s-3109-2000-1412-0",
		"s-3109-2000-1416-0": [
			{ type: "text", sub_type: "message", message: "Out", message_RU: "От него" },
			{ type: "text", sub_type: "message", message: "In | Pizza", message_RU: "К нему | Пицца", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 440, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 420, 0, 6500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 30, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 45, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 75, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 120, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 135, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 165, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 210, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 225, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 255, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 300, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 315, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 345, 200, 0, 5500, false] },
			{ type: "text", sub_type: "notification", message: "Soon Pizza", message_RU: "Скоро пицца", delay: 50000 }
		],
		"s-3109-2000-2416-0": "s-3109-2000-1416-0",
		"s-3109-2000-1417-0": [
			{ type: "text", sub_type: "message", message: "In", message_RU: "К нему" },
			{ type: "text", sub_type: "message", message: "Out | Pizza", message_RU: "От него | Пицца", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 440, 0, 6500] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 420, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 30, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 45, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 75, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 90, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 120, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 135, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 165, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 210, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 225, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 255, 200, 0, 1500, false], delay: 5500 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 300, 200, 0, 5500, false] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 315, 420, 0, 6500] },
			{ type: "spawn", func: "marker", args: [false, 345, 200, 0, 1500, false], delay: 5500 },
			{ type: "text", sub_type: "notification", message: "Soon Pizza", message_RU: "Скоро пицца", delay: 50000 }
		],
		"s-3109-2000-2417-0": "s-3109-2000-1417-0",
		// Dig
		"s-3109-2000-1510-0": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 4500 }],
		"s-3109-2000-2510-0": "s-3109-2000-1510-0",
		"s-3109-2000-1511-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 400, 0, 2500] }],
		"s-3109-2000-2511-0": "s-3109-2000-1511-0",
		"s-3109-2000-1601-0": [
			{ type: "text", sub_type: "message", message: "Icicles", message_RU: "Сосульки" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 1325, 0, 4300] }
		],
		"s-3109-2000-1602-0": [
			{ type: "text", sub_type: "message", message: "Get Out", message_RU: "Наружу" },
			{ type: "func", func: cage_event }
		],
		"s-3109-2000-2602-0": "s-3109-2000-1602-0",
		"s-3109-2000-1604-0": [
			{ type: "despawn_all", tag: "pre-cage" },
			{ type: "text", sub_type: "message", message: "Cage (In)", message_RU: "Клетка (к нему)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 405, 0, 15000], tag: "cage" }
		],
		"s-3109-2000-2604-0": "s-3109-2000-1604-0",
		"s-3109-2000-1605-0": [
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
		"s-3109-2000-2605-0": "s-3109-2000-1605-0",
		// Waves
		"ae-0-0-32092005": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд" }],
		"s-3109-2000-1617-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Waves", message_RU: "Передняя | Волны" },
			{ type: "text", sub_type: "message", message: "Back Waves", message_RU: "Волны", delay: 3000 },
			{ type: "spawn", func: "vector", args: [553, 270, -950, 165, 1000, 0, 12000] },
			{ type: "spawn", func: "vector", args: [553, 270, 950, -10, 1000, 0, 12000] },
			{ type: "spawn", func: "vector", args: [553, 270, -950, 10, 1000, 0, 12000] },
			{ type: "spawn", func: "vector", args: [553, 270, 950, -165, 1000, 0, 12000] }
		],
		"s-3109-2000-2617-0": "s-3109-2000-1617-0",
		//
		"qb-3109-2000-32092011": [
			{ type: "text", sub_type: "message", message: "Debuff", message_RU: "Дебаф" },
			{ type: "text", sub_type: "notification", message: "Soon digging", message_RU: "Скоро подкоп", delay: 80000 },
			{ type: "text", sub_type: "message", message: "Line up in order between the stones", message_RU: "Выстроится по порядку между камнями", delay: 87000 }
		]
	};
};