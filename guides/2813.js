// Beach River Outpost
//
// made by Boguslaw, False
//feel free to improve :)

module.exports = (dispatch, handlers, guide, lang) => {

	const { player } = dispatch.require.library;
	
	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 428131012) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Orb on you fast!!!", message_RU: "Шар на тебе!" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Orb on ${member.name}`,
						message_RU: `Шар на ${member.name}`
					});
				}
			}
		}
	});

	return {
		"nd-2813-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-2813-1204": [{ type: "text", sub_type: "message", message: "Cross waves", message_RU: "Перекрёстные волны" }],
		"ns-2813-1201": "ns-2813-1204",
		"s-2813-1000-501-0": [
			{ type: "text", sub_type: "message", message: "Donuts Out-In", message_RU: "Бублики (От него)" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 5000] }
		],
		"s-2813-1000-502-0": [
			{ type: "text", sub_type: "message", message: "Donuts Out-In-Out", message_RU: "Бублики (От него - К нему)" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 8000] }
		],
		"s-2813-1000-503-0": [
			{ type: "text", sub_type: "message", message: "Donuts In-Out", message_RU: "Бублики (К нему)" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 5000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 5000] }
		],
		"s-2813-1000-504-0": [
			{ type: "text", sub_type: "message", message: "Donuts In-Out-In", message_RU: "Бублики (К нему - От него" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 200, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 400, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 600, 200, 8000] }
		],
		"s-2813-1000-505-0": [{ type: "text", sub_type: "message", message: "Push to win mechanic", message_RU: "Откид от шаров" }],
		"s-2813-1000-506-0": [{ type: "text", sub_type: "message", message: "Block", message_RU: "Блок", class_position: "tank" }],

		"s-2813-1000-510-0": [{ type: "text", sub_type: "message", message: "Take orb for shield", message_RU: "Взять сферу для щита" }],
		"s-2813-1000-511-0": [{ type: "text", sub_type: "message", message: "Front waves", message_RU: "Волны вперёд", class_position: "tank" }],
		"s-2813-1000-512-0": [{ type: "text", sub_type: "message", message: "Two wide waves front", message_RU: "Волны вперёд", class_position: "tank" }],
		"s-2813-1000-513-0": [{ type: "text", sub_type: "message", message: "Gather", message_RU: "Собраться" }],
		"s-2813-1000-515-0": [{ type: "text", sub_type: "message", message: "Spread", message_RU: "Разбежаться" }],
		"s-2813-1000-517-0": [{ type: "text", sub_type: "message", message: "Frost Sphere front", message_RU: "Ледяная сфера", class_position: "tank" }],
		"s-2813-1000-518-0": [{ type: "text", sub_type: "message", message: "Wave back", message_RU: "Волна назад" }],
		"s-2813-1000-519-0": [{ type: "text", sub_type: "message", message: "Big hit front", message_RU: "Сильный удар", class_position: "tank" }],
		"s-2813-1000-521-0": [{ type: "text", sub_type: "message", message: "Ice Pillar Front", message_RU: "Ледяной столб", class_position: "tank" }],
		"s-2813-1000-522-0": [{ type: "text", sub_type: "message", message: "Two waves back", message_RU: "Две волны назад", class_position: ["dps", "heal"] }],
		"s-2813-1000-706-0": [{ type: "text", sub_type: "message", message: "Dodge!", message_RU: "Эвейд!", class_position: "tank" }],
		"s-2813-1000-606-0": [{ type: "text", sub_type: "message", message: "Eye! 4 hits block - 5th Dodge", message_RU: "Глаз! 4 удара блок - 5й эвейд", class_position: "tank" }]
	};
};