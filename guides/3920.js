// Cursed Antaroth's Abyss (Asura)
//
// made by HSDN / Yuyuko / Owyn / icebrog

const util = require("util");

module.exports = (dispatch, handlers, guide, lang) => {
	let two_slash_time = 0;
	// let blue_sword = false;
	let stack_red = 0;
	let stack_blue = 0;
	let stack_yellow = 0;
	let buff_merciless = false;

	function two_slash_event() {
		const now_time = new Date();

		if ((now_time - two_slash_time) > 1800 && (now_time - two_slash_time) < 2250) {
			handlers.text({ sub_type: "message", message: "Back Stun", message_RU: "Задняя" });
		}

		two_slash_time = now_time;
	}

	function cage_colour_event() {
		const format = `%s: ${stack_red} | %s: ${stack_blue} | %s: ${stack_yellow}`;
		const format_cc = `  [c=#ff7777]%s: ${stack_red}[/c]    [c=#7777ff]%s: ${stack_blue}[/c]    [c=#ffff77]%s: ${stack_yellow}[/c]`;

		handlers.event([
			{
				type: "text",
				sub_type: "message",
				message: util.format(format, "Red", "Blue", "Yellow"),
				message_RU: util.format(format, "Красный", "Синий", "Желтый"),
				speech: false
			},
			{
				type: "text",
				sub_type: "notification",
				message: util.format(format_cc, "Red", "Blue", "Yellow"),
				message_RU: util.format(format_cc, "Красный", "Синий", "Желтый"),
				speech: false
			}
		]);
	}

	return {
		"nd-3920-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-3920-3000-64": [{ type: "text", sub_type: "message", message: "64%", message_RU: "64%" }],
		"h-3920-3000-40": [{ type: "text", sub_type: "message", message: "40%", message_RU: "40%" }],

		"ab-3920-3000-40004011": [{ type: "func", func: () => buff_merciless = true }], // resonance 31+ effect

		"s-3920-3000-105-0": [{ type: "text", sub_type: "message", message: "Target Cage", message_RU: "Клетка (таргет)" }],
		"s-3920-3000-107-0": [
			{ type: "text", sub_type: "message", message: "Random Jump", message_RU: "Прыжок (стан)" },
			{ type: "text", sub_type: "message", message: "Spin soon", message_RU: "Скоро круговая", check_func: () => buff_merciless, delay: 1000 }
		],
		"s-3920-3000-107-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 85, 12, 250, 0, 2000] }],
		"s-3920-3000-113-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Stun", message_RU: "Передний | Задний" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 325, 12, 325, 0, 2000] },
			{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 500, 2000] },
			{ type: "text", sub_type: "message", message: "Spin soon", message_RU: "Скоро круговая", check_func: () => buff_merciless, delay: 500 }
		],
		"s-3920-3000-115-0": [{ type: "text", sub_type: "message", message: "Spin Attack", message_RU: "Круговая" }],
		"s-3920-3000-131-0": [{ type: "text", sub_type: "message", message: "Front Knockup", message_RU: "Подкид вперед" }],
		"s-3920-3000-120-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_RU: "Волна (медленно)" }],
		"s-3920-3000-122-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Slow)", message_RU: "Волна (медленно)" }],
		"s-3920-3000-204-0": [{ type: "text", sub_type: "message", message: "Energy Beam (Fast)", message_RU: "Волна (быстро)" }],
		"s-3920-3000-309-0": [{ type: "text", sub_type: "message", message: "AoE", message_RU: "АоЕ" }],
		"s-3920-3000-310-0": [{ type: "text", sub_type: "message", message: "Puddles", message_RU: "Лужи" }],
		"s-3920-3000-311-0": "s-3920-3000-310-0",
		"s-3920-3000-312-0": "s-3920-3000-310-0",
		"s-3920-3000-313-0": "s-3920-3000-310-0",
		"s-3920-3000-314-0": "s-3920-3000-310-0",
		"s-3920-3000-315-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_RU: "Откид (кайа)" }],
		"s-3920-3000-400-0": [{ type: "text", sub_type: "message", message: "Clones: Beam", message_RU: "Копии: волны" }],
		"s-3920-3000-401-0": [{ type: "text", sub_type: "message", message: "Clones: Spin", message_RU: "Копии: круговые" }],

		// Back stun mech
		"s-3920-3000-104-0": [{ type: "func", func: two_slash_event }],
		"s-3920-3000-119-0": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, -325, 12, 325, 0, 2000] },
			{ type: "text", sub_type: "message", message: "Spin soon", message_RU: "Скоро круговая", check_func: () => buff_merciless, delay: 500 }
		],

		// Waves mech
		// "s-3920-3000-201-0": [{ type: "func", func: () => blue_sword = false }],
		// "s-3920-3000-207-0": [{ type: "func", func: () => blue_sword = true }],
		"s-3920-3000-109-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Лево" },
			{ type: "text", sub_type: "message", message: "Inward (In > Out)", message_RU: "Внутрь (к нему > от него)", delay: 1000 },
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
		"s-3920-3000-209-0": [
			{ type: "text", sub_type: "message", message: "Left", message_RU: "Лево" },
			{ type: "text", sub_type: "message", message: "Inward (In > In > Out)", message_RU: "Внутрь (к нему > к нему > от него)", delay: 1000 },
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
		"s-3920-3000-111-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Право" },
			{ type: "text", sub_type: "message", message: "Outward (Out > In)", message_RU: "Наружу (от него > к нему)", delay: 1000 },
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
		"s-3920-3000-211-0": [
			{ type: "text", sub_type: "message", message: "Right", message_RU: "Право" },
			{ type: "text", sub_type: "message", message: "Outward (Out > In > Out)", message_RU: "Наружу (от него > к нему > от него)", delay: 1000 },
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

		// Orbs mech
		"s-3920-3000-206-0": [{ type: "text", sub_type: "message", message: "Orbs", message_RU: "Шары" }],

		// Pushback mech
		"ab-3920-3000-31083063-1": [{ type: "text", sub_type: "notification", message: "Stack 1", message_RU: "Стак 1" }],
		"ab-3920-3000-31083063-2": [{ type: "text", sub_type: "notification", message: "Stack 2", message_RU: "Стак 2" }],
		"ab-3920-3000-31083063-3": [{ type: "text", sub_type: "notification", message: "Stack 3", message_RU: "Стак 3" }],
		"ab-3920-3000-31083064": [
			{ type: "text", sub_type: "notification", message: "Charged", message_RU: "Заряжен", speech: false },
			{ type: "text", sub_type: "alert", message: "Pushback soon", message_RU: "Скоро откид" }
		],

		// Cage mech
		"qb-3920-3000-31083002": [{ type: "text", sub_type: "message", message: "Cage", message_RU: "Клетка" }],
		"s-3920-3000-317-0": [
			{ type: "func", func: cage_colour_event, delay: 100 },
			{ type: "func", func: cage_colour_event, delay: 3750 },
			{ type: "func", func: cage_colour_event, delay: 7500 }
		],
		"s-3920-3000-318-0": "s-3920-3000-317-0",
		"ab-3920-3000-31083070-8": [{ type: "func", func: () => stack_red = 8 }],
		"ab-3920-3000-31083070-7": [{ type: "func", func: () => stack_red = 7 }],
		"ab-3920-3000-31083070-6": [{ type: "func", func: () => stack_red = 6 }],
		"ab-3920-3000-31083070-5": [{ type: "func", func: () => stack_red = 5 }],
		"ab-3920-3000-31083070-4": [{ type: "func", func: () => stack_red = 4 }],
		"ab-3920-3000-31083070-3": [{ type: "func", func: () => stack_red = 3 }],
		"ab-3920-3000-31083070-2": [{ type: "func", func: () => stack_red = 2 }],
		"ab-3920-3000-31083070-1": [{ type: "func", func: () => stack_red = 1 }],
		"ad-3920-3000-31083070": [{ type: "func", func: () => stack_red = 0 }],
		"ab-3920-3000-31083071-8": [{ type: "func", func: () => stack_yellow = 8 }],
		"ab-3920-3000-31083071-7": [{ type: "func", func: () => stack_yellow = 7 }],
		"ab-3920-3000-31083071-6": [{ type: "func", func: () => stack_yellow = 6 }],
		"ab-3920-3000-31083071-5": [{ type: "func", func: () => stack_yellow = 5 }],
		"ab-3920-3000-31083071-4": [{ type: "func", func: () => stack_yellow = 4 }],
		"ab-3920-3000-31083071-3": [{ type: "func", func: () => stack_yellow = 3 }],
		"ab-3920-3000-31083071-2": [{ type: "func", func: () => stack_yellow = 2 }],
		"ab-3920-3000-31083071-1": [{ type: "func", func: () => stack_yellow = 1 }],
		"ad-3920-3000-31083071": [{ type: "func", func: () => stack_yellow = 0 }],
		"ab-3920-3000-31083072-8": [{ type: "func", func: () => stack_blue = 8 }],
		"ab-3920-3000-31083072-7": [{ type: "func", func: () => stack_blue = 7 }],
		"ab-3920-3000-31083072-6": [{ type: "func", func: () => stack_blue = 6 }],
		"ab-3920-3000-31083072-5": [{ type: "func", func: () => stack_blue = 5 }],
		"ab-3920-3000-31083072-4": [{ type: "func", func: () => stack_blue = 4 }],
		"ab-3920-3000-31083072-3": [{ type: "func", func: () => stack_blue = 3 }],
		"ab-3920-3000-31083072-2": [{ type: "func", func: () => stack_blue = 2 }],
		"ab-3920-3000-31083072-1": [{ type: "func", func: () => stack_blue = 1 }],
		"ad-3920-3000-31083072": [{ type: "func", func: () => stack_blue = 0 }]
	};
};
