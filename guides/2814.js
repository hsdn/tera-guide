// Abyssal Prison (Arborea Reborn)
//
// made by HSDN / Yuyuko / Owyn / Bogus

// Arborea changes by Bogus
// feel free to improve :)

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_colour_to_use = null;
	let thirdboss_counter = 0;
	let thirdboss_timer = null;

	function thirdboss_backattack_event() {
		dispatch.clearTimeout(thirdboss_timer);
		thirdboss_counter++;

		if (thirdboss_counter >= 2) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_RU: "Задний" });
		}

		thirdboss_timer = dispatch.setTimeout(() => thirdboss_counter = 0, 3000);
	}

	function thirdboss_cage_event(clockwise, ent) {
		const colour_order = clockwise ? ["red", "yellow", "blue"] : ["blue", "yellow", "red"];
		const colour_offsets = { "red": 0, "yellow": 120, "blue": 240 };

		const colour_messages = {
			"red": { message: "Red", message_RU: "Красный" },
			"yellow": { message: "Yellow", message_RU: "Желтый" },
			"blue": { message: "Blue", message_RU: "Синий" }
		};

		if (thirdboss_colour_to_use) {
			handlers.text({
				sub_type: "message",
				message: colour_messages[thirdboss_colour_to_use].message,
				message_RU: colour_messages[thirdboss_colour_to_use].message_RU
			});
		}

		for (let i = 0; i < 3; i++) {
			const current_colour = colour_order[(colour_order.indexOf(thirdboss_colour_to_use) + i) % 3];

			handlers.spawn({
				func: "marker",
				args: [false, colour_offsets[current_colour], 150, i * 2600, (i + 1) * 3000, true, null]
			}, ent);
		}
	}

	return {
		"nd-2814-1000-0": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		//debuff Glaze am-2814-1000-428141003 ???

		"s-2814-1000-3101-0": [{ type: "text", sub_type: "message", message: "Boss Swap RED", message_RU: "Смена цвета: КРАСНЫЙ" }],
		"s-2814-1000-3102-0": [{ type: "text", sub_type: "message", message: "Boss Swap BLUE", message_RU: "Смена цвета: СИНИЙ" }],
		"s-2814-1000-3103-0": [{ type: "text", sub_type: "message", message: "[DEBUFF] Closest player", message_RU: "[ДЕБАФ] Ближние" }],
		"s-2814-1000-3104-0": [{ type: "text", sub_type: "message", message: "[DEBUFF] Furthest player", message_RU: "[ДЕБАФ] Дальние" }],
		"s-2814-1000-3105-0": [{ type: "text", sub_type: "message", message: "Slow Jump", message_RU: "Медленный прыжок" }],
		"s-2814-1000-1201-0": [{ type: "text", sub_type: "message", message: "INCOMING SWIPE-DONUTS MECHANIC", message_RU: "СВАЙП-БУБЛИКИ" }],

		//FOR 35% BOSS
		"h-2814-1000-35": [{ type: "text", sub_type: "message", message: "REMEMBER DOUBLE SWIPE BEFORE DONUTS NOW", message_RU: "Помните: двойной свайп перед бубликами сейчас" }],
		"s-2814-1000-3113-0": [{ type: "text", sub_type: "message", message: "Right Swipe", message_RU: "Правый свайп" }],
		"s-2814-1000-3114-0": [{ type: "text", sub_type: "message", message: "Left Swipe", message_RU: "Левый свайп" }],

		"s-2814-1000-1104-0": [{ type: "func", func: thirdboss_backattack_event }],
		"s-2814-1000-1105-0": [{ type: "text", sub_type: "message", message: "Target Cage", message_RU: "Клетка (таргет)" }],
		"s-2814-1000-1119-0": [{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] }],
		"s-2814-1000-1107-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)" }],
		"s-2814-1000-1107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-2814-1000-1109-0": [
			{ type: "text", sub_type: "message", message: "Left safe", message_RU: "Лево" },
			{ type: "text", sub_type: "message", message: "Inward (player In > Out)", message_RU: "Внутрь (к нему > от него)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-2814-1000-1111-0": [
			{ type: "text", sub_type: "message", message: "Right safe", message_RU: "Право" },
			{ type: "text", sub_type: "message", message: "Outward (player Out > In)", message_RU: "Наружу (от него > к нему)", delay: 1000 },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 0, 1500, true, null] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 4000] }
		],
		"s-2814-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front | Back Stun", message_RU: "Передний | Задний" }],
		"s-2814-1000-1115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_RU: "Круговая" }],
		"s-2814-1000-1120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_RU: "Волна (медленно)" }],
		"s-2814-1000-1204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_RU: "Волна (быстро)" }],
		// "s-2814-1000-1202-0": [{ type: "text", sub_type: "message", message: "Spin or Front | Back Stun", message_RU: "Круговая или передний | Задний" }],
		"s-2814-1000-1206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_RU: "Шары" }],
		"s-2814-1000-1309-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-2814-1000-1310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_RU: "Лужи" }],
		"s-2814-1000-1311-0": "s-2814-1000-1310-0",
		"s-2814-1000-1312-0": "s-2814-1000-1310-0",
		"s-2814-1000-1313-0": "s-2814-1000-1310-0",
		"s-2814-1000-1314-0": "s-2814-1000-1310-0",
		"s-2814-1000-1315-0": [{ type: "text", sub_type: "message", message: "Pushback", message_RU: "Откид (кайа)" }],
		"s-2814-1000-1317-0": [{ type: "func", func: thirdboss_cage_event, args: [false], delay: 1000 }],
		"s-2814-1000-1318-0": [{ type: "func", func: thirdboss_cage_event, args: [true], delay: 1000 }],
		"s-2814-1000-1400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_RU: "Копии: волны" }],
		"s-2814-1000-1401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_RU: "Копии: круговые" }],
		"s-2814-1000-2104-0": "s-2814-1000-1104-0",
		"s-2814-1000-2105-0": "s-2814-1000-1105-0",
		"s-2814-1000-2119-0": "s-2814-1000-1119-0",
		"s-2814-1000-2107-0": "s-2814-1000-1107-0",
		"s-2814-1000-2107-1": "s-2814-1000-1107-1",
		"s-2814-1000-2109-0": "s-2814-1000-1109-0",
		"s-2814-1000-2111-0": "s-2814-1000-1111-0",
		"s-2814-1000-2113-0": "s-2814-1000-1113-0",
		"s-2814-1000-2115-0": "s-2814-1000-1115-0",
		"s-2814-1000-2120-0": "s-2814-1000-1120-0",
		"s-2814-1000-2204-0": "s-2814-1000-1204-0",
		"s-2814-1000-2202-0": "s-2814-1000-1202-0",
		"s-2814-1000-2206-0": "s-2814-1000-1206-0",

		"dm-0-0-9206007": [{ type: "text", sub_type: "message", message: "Iframe and Entrance clones", message_RU: "Эвейд и клоны входа" },
			{ type: "text", sub_type: "message", message: "1", message_RU: "Эвейд!", delay: 3000 },
			{ type: "text", sub_type: "message", message: "2", message_RU: "Эвейд!", delay: 2000 },
			{ type: "text", sub_type: "message", message: "3", message_RU: "Эвейд!", delay: 1000 },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41612, y: -98299, z: 217, w: 3.13 }, ownerName: "ENTRANCE", message: "i love guide" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41589, y: -98738, z: 217, w: 3.13 }, ownerName: "ENTRANCE", message: "i love guide" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41607, y: -97869, z: 217, w: 3.13 }, ownerName: "ENTRANCE", message: "i love guide" }
		],
		"dm-0-0-9206006": [{ type: "text", sub_type: "message", message: "Iframe and Throne clones", message_RU: "Эвейд и клоны трона" },
			{ type: "text", sub_type: "message", message: "1", message_RU: "Эвейд!", delay: 3000 },
			{ type: "text", sub_type: "message", message: "2", message_RU: "Эвейд!", delay: 2000 },
			{ type: "text", sub_type: "message", message: "3", message_RU: "Эвейд!", delay: 1000 },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41120, y: -98205, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41098, y: -98517, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41109, y: -97859, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 10000, pos: { x: 41106, y: -98808, z: 217, w: -0.18 }, ownerName: "THRONE", message: "i love guide" }

		],
		"s-2814-1000-1410-0": [{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка" }],
		"ae-0-0-9203037": [{ type: "func", func: () => thirdboss_colour_to_use = "red" }],
		"ae-0-0-9203038": [{ type: "func", func: () => thirdboss_colour_to_use = "yellow" }],
		"ae-0-0-9203039": [{ type: "func", func: () => thirdboss_colour_to_use = "blue" }]
	};
};