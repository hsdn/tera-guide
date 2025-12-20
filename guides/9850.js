// Withering Dreadspire
//
// made by TristanPW / Calvary / vathsq / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	// 1st challenge
	function sixth_regress() {
		handlers.text({ sub_type: "notification", message: "Plague/Regress", message_RU: "[c=#E904CA]!!!!![/c][c=#E904CA]!!!![/c][c=#39FF33]!!!![/c]!!!!!!![c=#F90531]!!!!!!!!!!![/c] Регресс[c=#39FF33]!![/c][c=#E904CA]!!!!![/c]!!!![c=#0517F9]!!!![/c]!!!!!!![c=#F90531]!!!!!!!!!!![/c]" });
		handlers.text({ sub_type: "warning", message: "Plague/Regress", message_RU: "Регресс!!" });
		handlers.text({ sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!" });
	}


	// 2nd challenge
	function seventh_spawn_tables(is_normal_world, ent) {
		const regularWorld = [
			// dps
			{ type: "spawn", func: "marker", args: [false, 180, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 210, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// tank
			{ type: "spawn", func: "marker", args: [false, -45, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 0, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// general safe spots
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 2.8, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 3.46, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.12, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.75, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.38, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.97, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 6.58, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.2, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.8, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 8.44, ownerName: "SAFE SPOT", message: "SAFE" }
		];

		const soulWorld = [
			// dps
			{ type: "spawn", func: "marker", args: [false, 210, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, 180, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// tank
			{ type: "spawn", func: "marker", args: [false, 0, 225, 0, 2000, true, ["Safe", "Spot"]] },
			{ type: "spawn", func: "marker", args: [false, -45, 225, 2000, 1500, true, ["Safe", "Spot"]] },
			// general safe spots
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 2.8, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 3.46, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.12, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 4.75, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.38, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 5.97, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 6.58, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.2, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 7.8, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 4000, distance: 525, offset: 8.44, ownerName: "SAFE SPOT", message: "SAFE" }
		];

		if (is_normal_world) {
			handlers.event(regularWorld);
		} else {
			handlers.event(soulWorld);
		}
	}

	let seventh_fifty = false;

	function seventh_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!seventh_fifty) {
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
				if (!seventh_fifty) {
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
				if (!seventh_fifty) {
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

	// 4th challenge
	let boss_enraged = false;
	let back_print = false;
	let back_time = 0;
	let end_back_time = 0;
	let is_one_back = false;
	let counter = 0;
	let counter1_date = null;
	let prev_back_attack = 0;
	let prev_date = 0;
	let attack_360 = false;

	function boss_backattack_event() {
		end_back_time = new Date() - back_time;

		if (!back_print) {
			back_print = true;
			is_one_back = end_back_time > 0 && end_back_time < 2000;

			if (is_one_back) {
				handlers.text({
					sub_type: "message",
					message: "360"
				});
			}
		}

		dispatch.setTimeout(() => back_print = false, 3500);
	}

	function boss_backattack_event_new(curr, ent) {
		const start = new Date();
		const tmp = prev_date;
		prev_date = start;

		const time_diff = start - tmp;
		const prev = prev_back_attack;

		prev_back_attack = curr;

		let back_combo_time_diff = 5000;
		if (counter1_date != null) {
			back_combo_time_diff = start - counter1_date;
		}

		if (prev === 1106 && curr === 1103 && time_diff < 1500) {
			handlers.text({
				sub_type: "message",
				message: "360"
			});
		} else if (prev === 1103 && curr === 1105 && time_diff < 1500) {
			counter = 1;
			counter1_date = new Date();
		} else if (prev === 1105 && curr === 1106 && counter === 1 && time_diff < 2000 && back_combo_time_diff < 2000) {
			counter = 2;
		} else if (prev === 1106 && curr === 1108 && counter === 2 && time_diff < 1500 && back_combo_time_diff < 2500) {
			attack_360 = true;
			handlers.text({
				sub_type: "message",
				message: "2x360"
			});
		} else {
			counter = 0;
			counter1_date = null;
		}
	}

	let first_fifty = false;
	let prev_attack = 0;
	let triple_swipe_remaining = 0;

	function first_swipe_event(skillid, ent) {
		let double = "";
		let double_ru = "";
		if ((first_fifty || attack_360) && triple_swipe_remaining === 0) {
			double = "(Double)";
			double_ru = "(Двойной)";
			if (attack_360) {
				attack_360 = false;
			}
		}

		if (triple_swipe_remaining > 0) {
			triple_swipe_remaining--;
		}

		// 1401 non-enraged
		const rightSafe = [
			{ type: "text", sub_type: "message", message: `Right ${double}`, message_RU: `Правый ${double_ru}` },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		];
		// 1402 non-enraged
		const leftSafe = [
			{ type: "text", sub_type: "message", message: `Left ${double}`, message_RU: `Левый ${double_ru} ` },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		];

		if (skillid === 1401) {
			if (boss_enraged) {
				handlers.event(leftSafe);
			} else {
				handlers.event(rightSafe);
			}
		} else if (!boss_enraged) {
			handlers.event(leftSafe);
		} else {
			handlers.event(rightSafe);
		}
	}

	let triples_timer = null;

	function first_triples_event() {
		if (triples_timer != null) {
			dispatch.clearTimeout(triples_timer);
		}

		triples_timer = dispatch.setTimeout(() => {
			handlers.text({
				sub_type: "notification",
				message: "Triples Soon!",
				message_RU: "Тройки Скоро!"
			});
		}, 55000);
	}

	let last_donut_msg = null;
	let last_donut_msg_ru = null;

	function first_fly_mech(skillid) {
		const safe_enraged_markers = [
			{ type: "spawn", func: "vector", args: [548, 0, 0, 0, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 60, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 120, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 180, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 240, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 300, 750, 0, 1500] }
		];
		const safe_unenraged_markers = [
			{ type: "spawn", func: "vector", args: [548, 0, 0, 30, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 90, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 150, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 210, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 270, 750, 0, 1500] },
			{ type: "spawn", func: "vector", args: [548, 0, 0, 330, 750, 0, 1500] }
		];

		if (!first_fifty) {
			if (prev_attack === 1113) {
				// Donuts
				handlers.event([
					{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики" },
					{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
				]);
			} else if (boss_enraged) {
				handlers.event(safe_enraged_markers);
				handlers.text({ sub_type: "notification", message: "Pizza + Enraged", message_RU: "Пицца + В раге" });
			} else {
				handlers.event(safe_unenraged_markers);
				handlers.text({ sub_type: "notification", message: "Pizza + Un enraged", message_RU: "Пицца + Без раги" });
			}
		} else {
			handlers.event([{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }]);

			if (boss_enraged) {
				handlers.event(safe_enraged_markers);
			} else {
				handlers.event(safe_unenraged_markers);
			}

			if ((skillid === 1308 || skillid === 1309) && last_donut_msg == null) {
				last_donut_msg = skillid === 1308 ? "last: IN" : "last: OUT";
				last_donut_msg_ru = skillid === 1308 ? "последний: К нему" : "последний: От него";
				handlers.event([{ type: "text", sub_type: "notification", message: last_donut_msg, message_RU: last_donut_msg_ru, delay: 1000 }]);
				dispatch.setTimeout(() => last_donut_msg = null, 7500);
			}
		}
		prev_attack = 0;
	}

	function reset_backevent() {
		back_print = false;
		back_time = 0;
		end_back_time = 0;
		is_one_back = false;
		counter = 0;
		counter1_date = null;
		prev_back_attack = 0;
		prev_date = 0;

		boss_enraged = false;
		triple_swipe_remaining = 0;
		attack_360 = false;
		first_fifty = false;
		prev_attack = 0;
	}

	// 5th challenge
	let next_debuff = 0;
	function debuff_event(send_msg, debuff, ent) {
		if (next_debuff === 0) {
			next_debuff = debuff;
		}

		if (send_msg) {
			const debuff_messages = {
				0: { message: "Debuff", message_RU: "Дебаф (бублик)" },
				2: { message: "Debuff 1, 2", message_RU: "Дебаф (бублик) 1, 2" },
				3: { message: "Debuff 1, 3", message_RU: "Дебаф (бублик) 1, 3" }
			};

			handlers.text({
				sub_type: "notification",
				message: debuff_messages[next_debuff].message,
				message_RU: debuff_messages[next_debuff].message_RU,
				speech: true
			});

			if (next_debuff !== 0) {
				next_debuff = next_debuff === 2 ? 3 : 2;
			}
		}
	}

	function debuff_removed() {
		if (next_debuff != 0) {
			handlers.text({
				sub_type: "notification",
				message: `next debuff: 1, ${next_debuff}`,
				message_RU: `Следующий Дебаф (бублик): 1, ${next_debuff}`,
				speech: false
			});
		}

		next_debuff = 0;
	}

	return {
		// 1st challenge
		"nd-850-6000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-850-6002": [{ type: "text", sub_type: "message", message: "Shard", message_RU: "Пилон" }],
		"qb-850-6000-434601": [{ type: "func", func: sixth_regress.bind(null) }],
		"s-850-6000-1101-0": [
			{ type: "text", sub_type: "message", message: "Blow from the ground", message_RU: "Удар из под земли" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1000 }
		],
		"s-850-6000-1103-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_RU: "Удар" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 425, 0, 3000] }
		],
		"s-850-6000-1104-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_RU: "Удар + взмах" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 0, 3000] }
		],
		"s-850-6000-1106-0": [
			{ type: "text", sub_type: "message", message: "Series + Impact", message_RU: "Серия + Удар" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 375, 2500, 2000] }
		],
		"s-850-6000-1107-0": [{ type: "text", sub_type: "message", message: "Boms", message_RU: "Бомба" }],
		"s-850-6000-1109-0": [
			{ type: "text", sub_type: "message", message: "1 strike", message_RU: "1 удар" },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 3000, distance: 350, offset: 2.6, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "item", id: 98260, sub_delay: 3000, distance: 350, offset: 2.6 }
		],
		"s-850-6000-1110-0": [
			{ type: "text", sub_type: "message", message: "2 strikes", message_RU: "2 удара" },
			{ type: "spawn", func: "semicircle", args: [-160, 105, 553, 0, 0, null, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -160, 550, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 105, 550, 0, 3000] },
			{ type: "spawn", sub_type: "build_object", id: 1, sub_delay: 3000, distance: 350, offset: 2.6, ownerName: "SAFE SPOT", message: "SAFE" },
			{ type: "spawn", sub_type: "item", id: 98260, sub_delay: 3000, distance: 350, offset: 2.6 }
		],
		"s-850-6000-1111-0": [{ type: "text", sub_type: "message", message: "Left kick", message_RU: "Удар левой" }],
		"s-850-6000-1112-0": [{ type: "text", sub_type: "message", message: "Right kick", message_RU: "Удар правой" }],
		"s-850-6000-1113-0": [{ type: "text", sub_type: "message", message: "Laser", message_RU: "Лазер" }],
		"s-850-6000-1113-1": [{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд" }],
		"s-850-6000-1133-0": [
			{ type: "text", sub_type: "message", message: "Strike", message_RU: "Удар" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-850-6000-1134-0": [
			{ type: "text", sub_type: "message", message: "Impact", message_RU: "Удар + взмах" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 225, 0, 475, 0, 3000] }
		],
		"s-850-6000-2101-0": "s-850-6000-1101-0",
		"s-850-6000-2103-0": "s-850-6000-1103-0",
		"s-850-6000-2104-0": "s-850-6000-1104-0",
		"s-850-6000-2106-0": "s-850-6000-1106-0",
		"s-850-6000-2107-0": "s-850-6000-1107-0",
		"s-850-6000-2109-0": "s-850-6000-1109-0",
		"s-850-6000-2110-0": "s-850-6000-1110-0",
		"s-850-6000-2111-0": "s-850-6000-1111-0",
		"s-850-6000-2112-0": "s-850-6000-1112-0",
		"s-850-6000-2113-0": "s-850-6000-1113-0",
		"s-850-6000-2113-1": "s-850-6000-1113-1",
		"s-850-6000-2133-0": "s-850-6000-1133-0",
		"s-850-6000-2134-0": "s-850-6000-1134-0",

		// 2nd challenge
		"nd-850-7000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-850-7000-99": [{ type: "func", func: () => seventh_fifty = false }],
		"h-850-7000-50": [{ type: "func", func: () => seventh_fifty = true }],
		"dm-0-0-90340703": [{ type: "func", func: seventh_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-90340704": [{ type: "func", func: seventh_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-90340705": [{ type: "func", func: seventh_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-850-7000-1105-0": [
			{ type: "text", sub_type: "message", message: "Discarding", message_RU: "Откид пятка" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, -95, 850, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 95, 850, 0, 3000] }
		],
		"s-850-7000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти" }],
		"s-850-7000-1110-0": [{ type: "text", sub_type: "message", message: "Claw", message_RU: "Когти" }],
		"s-850-7000-1129-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "К Боссу!" }],
		"s-850-7000-1130-0": [
			{ type: "text", sub_type: "message", message: "Shield Strike", message_RU: "Удар щитом" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 130, 0, 270, 0, 2500] }
		],
		"s-850-7000-1132-0": [
			{ type: "text", sub_type: "message", message: "AOE Shield", message_RU: "АОЕ щитом!" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 3000] }
		],
		"s-850-7000-1133-0": [
			{ type: "text", sub_type: "message", message: "AOE Shield", message_RU: "АОЕ щитом!" },
			{ type: "spawn", func: "semicircle", args: [-65, 65, 553, 0, 0, null, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, -65, 600, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 40, 65, 600, 0, 6000] }
		],
		"s-850-7000-1135-0": [{ type: "text", sub_type: "message", message: "IN", message_RU: "К Боссу!" }],
		"s-850-7000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 360, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 520, 0, 6000] }
		],
		"s-850-7000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_RU: "Регресс!!" }],
		"s-850-7000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_RU: "Слип!!" }],
		"s-850-7000-1701-0": [{ type: "text", sub_type: "message", message: "Back + front", message_RU: "Назад + Вперед" }],
		"s-850-7000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_RU: "Байт" }],
		"s-850-7000-1151-0": [{ type: "text", sub_type: "message", message: "Stun", message_RU: "Стан" }],
		"s-850-7000-1152-0": [
			{ type: "text", sub_type: "message", message: "Stun + Back", message_RU: "Стан + Откид назад" },
			{ type: "spawn", func: "semicircle", args: [110, 250, 553, 0, 0, null, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 70, -1000, 70, 1000, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 290, -1000, -70, 1000, 0, 6000] }
		],
		"s-850-7000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }],
		"s-850-7000-1140-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_RU: "Бублики!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 200, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 360, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 520, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 45, 0, 680, 0, 6000] }
		],
		"s-850-7000-1154-0": [
			{ type: "text", sub_type: "message", message: "OUT", message_RU: "От него => К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-1155-0": [
			{ type: "text", sub_type: "message", message: "IN", message_RU: "К нему => От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-1901-0": [ // normal world
			{ type: "text", sub_type: "notification", message: "Debuffs Closest", message_RU: "Дебафф (ближние)" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-850-7000-1902-0": [ // soul world
			{ type: "text", sub_type: "notification", message: "Debuffs Farthest", message_RU: "Дебафф (дальние)" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-850-7000-1903-0": [ // normal world
			{ type: "text", sub_type: "notification", message: "Gather + Cleanse", message_RU: "Бомбы (вместе!) + клинс" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-850-7000-1904-0": [ // soul world
			{ type: "text", sub_type: "notification", message: "Gather + No cleanse", message_RU: "Бомбы (вместе!) + БЕЗ клинса" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-850-7000-1905-0": [ // normal world
			{ type: "text", sub_type: "notification", message: "Spread", message_RU: "Круги (отдельно!)" },
			{ type: "func", func: seventh_spawn_tables, args: [true] }
		],
		"s-850-7000-1906-0": [ // soul world
			{ type: "text", sub_type: "notification", message: "Gather", message_RU: "Круги (вместе!)" },
			{ type: "func", func: seventh_spawn_tables, args: [false] }
		],
		"s-850-7000-1144-0": [
			{ type: "text", sub_type: "message", message: "OUT", message_RU: "От него" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-1145-0": [
			{ type: "text", sub_type: "message", message: "IN", message_RU: "К нему" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 10, 0, 250, 0, 3000] }
		],
		"s-850-7000-2105-0": "s-850-7000-1105-0",
		"s-850-7000-2136-0": "s-850-7000-1136-0",
		"s-850-7000-2110-0": "s-850-7000-1110-0",
		"s-850-7000-2129-0": "s-850-7000-1129-0",
		"s-850-7000-2130-0": "s-850-7000-1130-0",
		"s-850-7000-2132-0": "s-850-7000-1132-0",
		"s-850-7000-2133-0": "s-850-7000-1133-0",
		"s-850-7000-2135-0": "s-850-7000-1135-0",
		"s-850-7000-2401-0": "s-850-7000-1401-0",
		"s-850-7000-2402-0": "s-850-7000-1402-0",
		"s-850-7000-2701-0": "s-850-7000-1701-0",
		"s-850-7000-2113-0": "s-850-7000-1113-0",
		"s-850-7000-2151-0": "s-850-7000-1151-0",
		"s-850-7000-2152-0": "s-850-7000-1152-0",
		"s-850-7000-2138-0": "s-850-7000-1138-0",
		"s-850-7000-2140-0": "s-850-7000-1140-0",
		"s-850-7000-2154-0": "s-850-7000-1154-0",
		"s-850-7000-2155-0": "s-850-7000-1155-0",
		"s-850-7000-2240-0": "s-850-7000-1240-0",
		"s-850-7000-2142-0": "s-850-7000-1142-0",
		"s-850-7000-2143-0": "s-850-7000-1143-0",
		"s-850-7000-2901-0": "s-850-7000-1901-0",
		"s-850-7000-2902-0": "s-850-7000-1902-0",
		"s-850-7000-2903-0": "s-850-7000-1903-0",
		"s-850-7000-2904-0": "s-850-7000-1904-0",
		"s-850-7000-2905-0": "s-850-7000-1905-0",
		"s-850-7000-2144-0": "s-850-7000-1144-0",
		"s-850-7000-2145-0": "s-850-7000-1145-0",

		// 3rd challenge
		"nd-850-88516": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-850-88516-1103-0": [{ type: "text", sub_type: "message", message: "Front", message_RU: "Передний" }],
		"s-850-88516-1104-0": [{ type: "text", sub_type: "message", message: "Stun (AoE)", message_RU: "Стан (АОЕ)" }],
		"s-850-88516-1105-0": [
			{ type: "text", sub_type: "message", message: "Lasers", message_RU: "Лазеры" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 2700 }
		],
		"s-850-88516-1106-0": [
			{ type: "text", sub_type: "message", message: "Push", message_RU: "Откид" },
			{ type: "text", sub_type: "message", message: "Dodge", message_RU: "Эвейд", delay: 1400 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 0, 220, 0, 2000] }
		],
		"s-850-88516-1107-0": [{ type: "text", sub_type: "message", message: "Disc Left", message_RU: "Диск влево" }],
		"s-850-88516-1108-0": [{ type: "text", sub_type: "message", message: "Disc Right", message_RU: "Диск вправо" }],
		"s-850-88516-1109-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-850-88516-1301-0": [{ type: "text", sub_type: "message", message: "Target", message_RU: "Таргет" }],
		"s-850-88516-1303-0": [{ type: "text", sub_type: "message", message: "Back", message_RU: "Задний" }],
		"dm-0-0-9885238": [{ type: "text", sub_type: "message", message: "Clones", message_RU: "Клоны" }],
		"s-850-88516-2103-0": "s-850-88516-1103-0",
		"s-850-88516-2104-0": "s-850-88516-1104-0",
		"s-850-88516-2105-0": "s-850-88516-1105-0",
		"s-850-88516-2106-0": "s-850-88516-1106-0",
		"s-850-88516-2107-0": "s-850-88516-1107-0",
		"s-850-88516-2108-0": "s-850-88516-1108-0",
		"s-850-88516-2109-0": "s-850-88516-1109-0",

		// 4th challenge
		"ns-850-8504000": [{ type: "func", func: () => boss_enraged = false }],
		"nd-850-8504000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "func", func: reset_backevent }
		],
		"rb-850-8504000": [{ type: "func", func: () => boss_enraged = true }],
		"re-850-8504000": [{ type: "func", func: () => boss_enraged = false }],
		"h-850-8504000-49": [
			{ type: "text", sub_type: "message", message: "49%" },
			{ type: "func", func: () => first_fifty = true }
		],
		"s-850-8504000-1102-0": [{ type: "func", func: () => back_time = new Date() }],
		"s-850-8504000-1101-0": [{ type: "func", func: boss_backattack_event }],
		"s-850-8504000-1106-0": [{ type: "func", func: boss_backattack_event_new, args: [1106] }],
		"s-850-8504000-1105-0": [{ type: "func", func: boss_backattack_event_new, args: [1105] }],
		"s-850-8504000-1103-0": [{ type: "func", func: boss_backattack_event_new, args: [1103] }],
		"s-850-8504000-1108-0": [{ type: "func", func: boss_backattack_event_new, args: [1108] }],
		"s-850-8504000-1401-0": [{ type: "func", func: first_swipe_event, args: [1401] }],
		"s-850-8504000-1402-0": [{ type: "func", func: first_swipe_event, args: [1402] }],
		"s-850-8504000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Крутилка" }],
		"s-850-8504000-1304-0": [
			{ type: "func", func: first_fly_mech, args: [1304] },
			{ type: "text", sub_type: "message", message: "Donuts | Pizza", message_RU: "Бублики | Пицца", check_func: () => first_fifty }
		],
		"s-850-8504000-1308-0": [
			{ type: "func", func: first_fly_mech, args: [1308], check_func: () => first_fifty },
			{ type: "text", sub_type: "message", message: "Out", message_RU: "Наружу" },
			{ type: "spawn", func: "marker", args: [false, 75, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 165, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 255, 370, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 345, 370, 0, 1000, true, null] }
		], // out
		"s-850-8504000-1309-0": [
			{ type: "func", func: first_fly_mech, args: [1309], check_func: () => first_fifty },
			{ type: "text", sub_type: "message", message: "In", message_RU: "Внутрь" },
			{ type: "spawn", func: "marker", args: [false, 75, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 165, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 255, 100, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 345, 100, 0, 1000, true, null] }],
		"s-850-8504000-1310-0": [
			{ type: "spawn", func: "marker", args: [false, 30, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 150, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 210, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 330, 200, 0, 1000, true, null] }],
		"s-850-8504000-1311-0": [
			{ type: "spawn", func: "marker", args: [false, 0, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 120, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 180, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 240, 200, 0, 1000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 200, 0, 1000, true, null] }],
		"s-850-8504000-1313-0": [
			{ type: "text", sub_type: "message", message: "3" },
			{ type: "text", sub_type: "message", delay: 550, message: "2" },
			{ type: "text", sub_type: "message", delay: 1100, message: "1" },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge", message_RU: "Эвейд" }
		],
		"s-850-8504000-1111-0": [{ type: "func", func: () => prev_attack = 1111 }],
		"s-850-8504000-1113-0": [
			{ type: "text", sub_type: "message", message: "Front | AoEs", message_RU: "Передняя | AOE" },
			{ type: "spawn", func: "semicircle", args: [0, 60, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 55, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 45, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [300, 360, 553, 0, 0, 15, 60, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [305, 360, 553, 0, 0, 15, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [310, 360, 553, 0, 0, 10, 250, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [315, 360, 553, 0, 0, 10, 340, 0, 2000] },
			{ type: "func", func: () => prev_attack = 1113 }
		],
		"s-850-8504000-1114-0": [
			{ type: "text", sub_type: "message", message: "Bait on res", message_RU: "Байт на рес" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-850-8504000-1115-0": [{ type: "text", sub_type: "message", delay: 2500, message_RU: "Эвейд", message: "Dodge" }], // dodge circle
		"s-850-8504000-1117-0": [{ type: "text", sub_type: "message", delay: 4500, message_RU: "Эвейд", message: "Dodge" }], // dodge circles
		"s-850-8504000-2111-0": "s-850-8504000-1111-0",
		"s-850-8504000-2112-0": "s-850-8504000-1112-0",
		"s-850-8504000-2113-0": "s-850-8504000-1113-0",
		"s-850-8504000-2114-0": "s-850-8504000-1114-0",
		"s-850-8504000-2115-0": "s-850-8504000-1115-0",
		"s-850-8504000-2117-0": "s-850-8504000-1117-0",
		"s-850-8504000-2101-0": "s-850-8504000-1101-0",
		"s-850-8504000-2102-0": "s-850-8504000-1102-0",
		"s-850-8504000-2103-0": "s-850-8504000-1103-0",
		"s-850-8504000-2105-0": "s-850-8504000-1105-0",
		"s-850-8504000-2106-0": "s-850-8504000-1106-0",
		"s-850-8504000-2108-0": "s-850-8504000-1108-0",
		"qb-850-8504000-98103": [{ type: "text", sub_type: "message", message: "Lead circle to the stone", message_RU: "Отвести круг к пилону" }],
		"qb-850-8504000-98106": [{ type: "text", sub_type: "message", message: "Lead circles to the stone", message_RU: "Отвести круги к пилону" }],
		"dm-0-0-9981005": [
			{ type: "text", sub_type: "message", message: "Triples!", message_RU: "Тройки!" },
			{ type: "func", func: () => triple_swipe_remaining = 3 },
			{ type: "func", func: first_triples_event }
		],

		// 5th challenge
		"nd-850-10000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		die: [{ type: "func", func: debuff_removed }],
		"h-850-10000-99": [{ type: "func", func: () => next_debuff = 0 }],
		"s-850-10000-1103-0": [{ type: "text", sub_type: "message", message_RU: "Передняя атака", message: "Frontal Attack" }],
		"s-850-10000-1205-0": [{ type: "text", sub_type: "message", message_RU: "Телепорт", message: "Teleport" }],
		"s-850-10000-1102-0": [{ type: "text", sub_type: "message", message_RU: "К нему > От него", message: "In > Out" }],
		"s-850-10000-1113-0": [{ type: "text", sub_type: "message", message_RU: "Левая рука ", message: "Left Hand Attack" }],
		"s-850-10000-1105-0": [{ type: "text", sub_type: "message", message_RU: "Правая рука ", message: "Right Hand Attack" }],
		"s-850-10000-1112-0": [{ type: "func", func: debuff_event, args: [true, 0] }],
		"s-850-10000-1108-0": [{ type: "text", sub_type: "message", message_RU: "Атака (таргет)", message: "Target Attack" }],
		"s-850-10000-1114-0": [{ type: "text", sub_type: "message", message_RU: "Удар назад", message: "Back Attack" }],
		"s-850-10000-1115-0": [{ type: "text", sub_type: "message", message_RU: "Хвост", message: "Tail" }],
		"s-850-10000-1111-0": [{ type: "text", sub_type: "message", message_RU: "Хвост вперед", message: "Frontal Attack" }],
		"s-850-10000-1109-0": [{ type: "text", sub_type: "message", message_RU: "АоЕ (таргет)", message: "AoE Target" }],
		"s-850-10000-1104-0": [{ type: "text", sub_type: "message", message_RU: "Топот", message: "Stomp" }],
		"s-850-10000-1107-0": [{ type: "text", sub_type: "message", message_RU: "Лазер", message: "Laser Attack" },
			{ type: "spawn", func: "vector", args: [912, 360, 985, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 369, 995, 180, 950, 0, 2500] },
			{ type: "spawn", func: "vector", args: [912, 351, 995, 180, 950, 0, 2500] }
		],
		"s-850-10000-1106-0": [{ type: "text", sub_type: "message", message_RU: "Бомба (таргет)", message: "Target Bomb" }],
		"s-850-10000-1204-0": [{ type: "text", sub_type: "message", message_RU: "Большая АоЕ (бежать)", message: "Big AoE (Run)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 550, 0, 4000] }
		],
		"qb-850-10000-427050": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_RU: "Чума/Регресс", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_RU: "Регресс", class_position: "mystic" }
		],
		"s-850-10000-2205-0": "s-850-10000-1205-0",
		"s-850-10000-2102-0": "s-850-10000-1102-0",
		"s-850-10000-2113-0": "s-850-10000-1113-0",
		"s-850-10000-2105-0": "s-850-10000-1105-0",
		"s-850-10000-2112-0": "s-850-10000-1112-0",
		"s-850-10000-2115-0": "s-850-10000-1115-0",
		"s-850-10000-2111-0": "s-850-10000-1111-0",
		"s-850-10000-2109-0": "s-850-10000-1109-0",
		"s-850-10000-2107-0": "s-850-10000-1107-0",
		"s-850-10000-2106-0": "s-850-10000-1106-0",
		"s-850-10000-2204-0": "s-850-10000-1204-0",
		"s-850-10000-2103-0": "s-850-10000-1103-0",
		"s-850-10000-2114-0": "s-850-10000-1114-0",
		"s-850-10000-2108-0": "s-850-10000-1108-0",
		"s-850-10000-2104-0": "s-850-10000-1104-0",
		"am-850-10000-90341002": [{ type: "func", func: debuff_event, args: [false, 3] }], // hateful thought #2
		"am-850-10000-90341003": [{ type: "func", func: debuff_event, args: [false, 2] }], // desperate thought #3 90341006
		"am-850-10000-90341006": "am-850-10000-90341003",
		"am-850-10000-90341005": "am-850-10000-90341002"
	};
};
