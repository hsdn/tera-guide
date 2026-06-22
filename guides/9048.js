// Sanctum of the Fire God 2.0
//
// made by michengs / Emilia-s2 / HSDN / Vampic / NoobLevelUP

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
	let print_loading = true;
	let print_lasers = true;
	let is_enraged = false;
	let enrage_timer = null;

	dispatch.hook("S_NPC_STATUS", 2, event => {
		if (event.gameId === handlers.npcId) {
			if (enrage_timer) {
				clearTimeout(enrage_timer);
				enrage_timer = null;
			}

			if (event.enraged) {
				is_enraged = true;

				enrage_timer = setTimeout(() => {
					is_enraged = false;
				}, 34450);

			} else {
				is_enraged = false;
			}
		}
	});

	function waves_event() {
		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 400, 0, 6000] },
			{ type: "text", sub_type: "alert", delay: 60000, message: "Waves soon...", message_RU: "Скоро волны..." }
		]);
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 90442502) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Laser on you", message_RU: "Лазер на тебе" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Laser on ${member.name}`,
						message_RU: `Лазер на ${member.name}`
					});
				}
			}
		}
	});

	// เลเซอร์ 2 (1.0)
	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 90442503) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Laser on you", message_RU: "Лазер на тебе" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Laser on ${member.name}`,
						message_RU: `Лазер на ${member.name}`
					});
				}
			}
		}
	});

	let next_debuff = 0; //ดีบัฟ 2.0
	function debuff_event(send_msg, debuff, ent) {
		if (next_debuff === 0) {
			next_debuff = debuff;
		}

		if (send_msg) {
			const debuff_messages = {
				0: { message: "Debuff", message_RU: "Дебаф (бублик)" },
				1: { message: "Debuff 1", message_RU: "Дебаф (бублик) 1" },
				2: { message: "Debuff 2", message_RU: "Дебаф (бублик) 2" },
				3: { message: "Debuff 3", message_RU: "Дебаф (бублик) 3" }
			};

			handlers.text({
				sub_type: "notification",
				message: debuff_messages[next_debuff].message,
				message_RU: debuff_messages[next_debuff].message_RU,
				speech: true
			});

			if (next_debuff !== 0) {
				next_debuff++;
			}

			if (next_debuff > 3) {
				next_debuff = 1;
			}
		}
	}

	function debuff_removed() {
		if (next_debuff != 0) {
			handlers.text({
				sub_type: "notification",
				message: `next debuff: ${next_debuff}`,
				message_RU: `Следующий Дебаф (бублик): ${next_debuff}`,
				speech: false
			});
		}

		next_debuff = 0;
	}

	return {
		"nd-448-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-448-2000-10": [{ type: "text", sub_type: "notification", message: "10% Last Wrath [c=#00EAFF]Kaia Save[/c]" }],
		"ns-448-2000": [
			{ type: "spawn", func: "marker", args: [false, 0, -700, 100, 60000000, false, ["Throne", "Throne Direction"]] },
			{ type: "spawn", func: "point", args: [513, 0, 800, 100, 60000000] },
			{ type: "func", func: () => print_loading = true },
			{ type: "func", func: () => print_lasers = true }
		],
		// Not enraged
		"s-448-2000-1101-0": [
			{ type: "text", sub_type: "message", message: "4 Hit Combo", message_RU: "270 (сейф-зона)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 3000] }
		],
		"s-448-2000-1103-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_RU: "Удар вперед (эвейд)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-448-2000-1107-0": [{ type: "text", sub_type: "message", message: "4 Hit (3)", message_RU: "4" }],

		// บอสโกรธ (โดนัท)
		"s-448-2000-3202-0": [

			{
				type: "text",
				sub_type: "message",
				message: "IN > OUT",
				check_func: () => is_enraged === true
			},
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 300, 0, 4000], check_func: () => is_enraged === true },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 575, 0, 4000], check_func: () => is_enraged === true },

			//  ป้าย 4 ด้าน
			{ type: "spawn", func: "marker", args: [false, 0, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === true },
			{ type: "spawn", func: "marker", args: [false, 90, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === true },
			{ type: "spawn", func: "marker", args: [false, 180, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === true },
			{ type: "spawn", func: "marker", args: [false, 270, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === true },

			{
				type: "text",
				sub_type: "message",
				message: "OUT > IN",
				check_func: () => is_enraged === false
			},
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 300, 0, 4000], check_func: () => is_enraged === false },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 575, 0, 4000], check_func: () => is_enraged === false },

			// ป้าย 4 ด้าน
			{ type: "spawn", func: "marker", args: [false, 0, 200, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === false },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === false },
			{ type: "spawn", func: "marker", args: [false, 180, 200, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === false },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 4000, true, ["Safe", "ปลอดภัย"]], check_func: () => is_enraged === false }
		],

		// บอสไม่โกรธ (โดนัทปกติ)
		"s-448-2000-3102-0": [
			{ type: "text", sub_type: "message", message: "OUT > IN" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 300, 0, 4000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 575, 0, 4000] },

			// ป้าย 4 ด้าน
			{ type: "spawn", func: "marker", args: [false, 0, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]] },
			{ type: "spawn", func: "marker", args: [false, 90, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]] },
			{ type: "spawn", func: "marker", args: [false, 180, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]] },
			{ type: "spawn", func: "marker", args: [false, 270, 430, 0, 4000, true, ["Safe", "ปลอดภัย"]] }
		],

		"s-448-2000-3402-0": [{ type: "func", func: debuff_event, args: [true, 0] }], //new manaya mech
		"s-448-2000-3401-0": "s-448-2000-3402-0",

		"s-448-2000-1108-0": [
			{ type: "text", sub_type: "message", message: "Back Throw", message_RU: "Стан назад" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 300, 100, 3000] }
		],
		"s-448-2000-1111-0": [
			{ type: "text", sub_type: "message", message: "Back", message_RU: "Удар назад" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 1500, 2000] }
		],
		"s-448-2000-1112-0": [
			{ type: "text", sub_type: "message", message: "Perfect Defense (Fast)", message_RU: "Идеальный блок (быстро)" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Block", message_RU: "Блок" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-448-2000-1113-0": [{ type: "text", sub_type: "message", message: "Throw (Bait)", message_RU: "Молот (байт)" }],
		"s-448-2000-1114-0": [
			{ type: "text", sub_type: "message", message: "Front Slam", message_RU: "Удар назад" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-448-2000-1115-0": [{ type: "text", sub_type: "message", delay: 1100, message: "Dodge", message_RU: "Эвейд" }], // Knockup
		"s-448-2000-1116-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In)", message_RU: "Бублики (к нему)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 290, 100, 2000] }
		],
		"s-448-2000-1116-1": [
			{ type: "text", sub_type: "message", message: "Out > In", message_RU: "От него > К нему" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 290, 100, 4000] }
		],
		"s-448-2000-1117-0": [{ type: "text", sub_type: "message", message: "Jump (Bait)", message_RU: "Прыжок (байт)" }],
		"s-448-2000-1118-0": [{ type: "text", sub_type: "message", message: "Jump (Tank)", message_RU: "Прыжок (танк)" }],
		"s-448-2000-1118-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 400, 12, 300, 100, 2000] }],
		"s-448-2000-1119-0": [
			{ type: "text", sub_type: "message", message: "Left Swipe", message_RU: "Слева" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 100, 2000, true, null] }
		],

		"s-448-2000-1120-0": [
			{ type: "text", sub_type: "message", message: "Right Swipe", message_RU: "Справа" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 100, 2000, true, null] }
		],
		// 2.0
		"s-448-2000-3313-0": "s-448-2000-1119-0",
		"s-448-2000-3314-0": "s-448-2000-1120-0",
		"s-448-2000-3303-0": "s-448-2000-1119-0",
		"s-448-2000-3304-0": "s-448-2000-1120-0",

		"s-448-2000-3301-0": [ // 2.0
			{ type: "text", sub_type: "message", message: "Wrath (Double Swipe)"/*, message_RU: "Облепиха (кайа)"*/ },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],

		"s-448-2000-3302-0": "s-448-2000-3301-0",

		"s-448-2000-1121-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left)", message_RU: "Волны (левая)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-448-2000-1122-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 3nd fast", message_RU: "Волны (левая) 3-я быстрая" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-448-2000-1123-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 2nd fast", message_RU: "Волны (левая) 2-я быстрая" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-448-2000-1125-0": [
			{ type: "text", sub_type: "message", message: "Front | Right Scratch", message_RU: "Удар вперед | Правый черкаш" },
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge", message_RU: "Эвейд" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, 175, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, 175, 800, 0, 3500] }
		],
		"s-448-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Front | Left Scratch", message_RU: "Удар вперед | Левый черкаш" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_RU: "Эвейд" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }
		],
		"s-448-2000-1135-0": [
			{ type: "text", sub_type: "message", message: "Perfect Defense", message_RU: "Идеальный блок" },
			{ type: "text", sub_type: "message", delay: 800, message: "Block", message_RU: "Блок" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-448-2000-1137-0": [
			{ type: "text", sub_type: "message", message: "Hammer back", message_RU: "Удар назад" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-448-2000-1138-0": [{ type: "text", sub_type: "message", delay: 900, message: "Dodge", message_RU: "Эвейд" }], // Knockup (Bait)
		"s-448-2000-1139-0": [{ type: "text", sub_type: "notification", delay: 0, message: "Stun Boss", message_RU: "Эвейд!" }],
		"s-448-2000-1140-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right)", message_RU: "Волны (правая)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-448-2000-1141-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 3nd fast", message_RU: "Волны (правая) 3-я быстрая" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-448-2000-1142-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 2nd fast", message_RU: "Волны (правая) 2-я быстрая" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-448-2000-1307-0": [
			{ type: "text", sub_type: "message", message: "!", message_RU: "!" },
			{ type: "text", sub_type: "message", delay: 20000, message: "Last aerolite", message_RU: "Последний метеор" }
		],
		"s-448-2000-1308-0": [{ type: "text", sub_type: "message", message: "Stun (1)", message_RU: "Стан (1)" }],
		"s-448-2000-1309-0": [{ type: "text", sub_type: "message", message: "Stun (2)", message_RU: "Стан (2)" }],
		"s-448-2000-1310-0": [{ type: "text", sub_type: "message", message: "Stun (3)", message_RU: "Стан (3)" }],
		"s-448-2000-1311-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_RU: "Облепиха (кайа)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		"s-448-2000-1312-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_RU: "Облепиха (кайа)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],

		// Enraged
		"s-448-2000-2101-0": "s-448-2000-1101-0",
		"s-448-2000-2103-0": "s-448-2000-1103-0",
		"s-448-2000-2107-0": "s-448-2000-1107-0",
		"s-448-2000-2108-0": "s-448-2000-1108-0",
		"s-448-2000-2111-0": "s-448-2000-1111-0",
		"s-448-2000-2112-0": [
			{ type: "text", sub_type: "notification", delay: 1000, message: "Perfect Defense x2 (Slow)", message_RU: "Идеальный блок x2 (медленно)" },
			{ type: "text", sub_type: "notification", delay: 2400, message: "Block/Dodge", message_RU: "Блок/Эвейд" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-448-2000-2113-0": "s-448-2000-1113-0",
		"s-448-2000-2114-0": "s-448-2000-1114-0",
		"s-448-2000-2115-0": [{ type: "text", sub_type: "message", delay: 100, message: "Dodge", message_RU: "Эвейд" }], // Knockup
		"s-448-2000-2116-0": "s-448-2000-1116-0",
		"s-448-2000-2116-1": "s-448-2000-1116-1",
		"s-448-2000-2117-0": "s-448-2000-1117-0",
		"s-448-2000-2118-0": "s-448-2000-1118-0",
		"s-448-2000-2118-1": "s-448-2000-1118-1",
		"s-448-2000-2119-0": "s-448-2000-1119-0",
		"s-448-2000-2120-0": "s-448-2000-1120-0",
		"s-448-2000-2121-0": "s-448-2000-1121-0",
		"s-448-2000-2122-0": "s-448-2000-1122-0",
		"s-448-2000-2123-0": "s-448-2000-1123-0",
		"s-448-2000-2125-0": "s-448-2000-1125-0",
		"s-448-2000-2131-0": "s-448-2000-1131-0",
		"s-448-2000-2135-0": [
			{ type: "text", sub_type: "notification", message: "Perfect Defense x2", message_RU: "Идеальный блок x2" },
			{ type: "text", sub_type: "notification", delay: 800, message: "Block/Dodge", message_RU: "Блок/Эвейд" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-448-2000-2137-0": "s-448-2000-1137-0",
		"s-448-2000-2138-0": [{ type: "text", sub_type: "message", message: "Stun"/*, message_RU: "Эвейд"*/ }], // Knockup (Bait)
		"s-448-2000-2139-0": "s-448-2000-1139-0",
		"s-448-2000-2140-0": "s-448-2000-1140-0",
		"s-448-2000-2141-0": "s-448-2000-1141-0",
		"s-448-2000-2142-0": "s-448-2000-1142-0",
		//
		"s-448-2500-1201-0": [
			{ type: "event", check_func: () => print_loading, args: [
				{ type: "text", sub_type: "alert", message: "Loading lasers...", message_RU: "Зарядка лазеров..." },
				{ type: "func", func: () => print_loading = false }
			] }
		],
		"s-448-2500-1305-0": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 4000 }
			] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		],
		// New Laser
		"s-448-2502-1201-0": [
			{ type: "event", check_func: () => print_loading, args: [
				{ type: "text", sub_type: "alert", message: "Loading lasers...", message_RU: "Зарядка лазеров..." },
				{ type: "func", func: () => print_loading = false }
			] }
		],
		"s-448-2502-1305-0": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 4000 }
			] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		],

		"ab-448-2000-90442303": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс" }],
		"ab-448-2000-90442304": [
			{ type: "text", sub_type: "notification", message: "Stun", message_RU: "Стан!", speech: false },
			{ type: "text", sub_type: "notification", message: "Stun", message_RU: "Стан!" }
		],

		//new 2.0
		"ab-448-2000-4480009": [{ type: "text", sub_type: "notification", message: "[c=#D95FD2]Plague/Regress[/c]", message_RU: "Регресс" }],
		"ab-448-2000-4480003": [
			{ type: "text", sub_type: "notification", message: "[c=#1EE3DF]Break Shield[/c]" }
		],

		"die": [{ type: "func", func: debuff_removed }],
		"h-448-2000-99": [{ type: "func", func: () => next_debuff = 0 }],
		"am-448-2000-47702900": [{ type: "func", func: debuff_event, args: [false, 2] }], // 1
		"am-448-2000-47703000": [{ type: "func", func: debuff_event, args: [false, 3] }], // 2
		"am-448-2000-47703100": [{ type: "func", func: debuff_event, args: [false, 1] }] // 3
	};
};