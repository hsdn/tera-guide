// Aesir's End - NM (Guide)
//
// made by Mate

module.exports = (dispatch, handlers, guide, lang) => {

	// let print_stun = true;

	return {
		"nd-2803-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"s-2803-1000-1-0": [{ type: "text", sub_type: "message", message: "Double Base Slash", message_RU: "Двойной базовый удар" }],
		"s-2803-1000-2-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Вращение" }],
		"s-2803-1000-3-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Knock Up", message_RU: "Подбрасывание" }],
		"s-2803-1000-4-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Вращение" }],
		"s-2803-1000-5-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Stun", message_RU: "Оглушение" }],
		"s-2803-1000-6-0": [{ type: "text", sub_type: "message", message: "Double Spinning", message_RU: "Двойное вращение" }],
		"s-2803-1000-7-0": [
			{ type: "text", sub_type: "message", message: "Pull + KD", message_RU: "Притягивание + Сбивание", class_position: ["tank", "dps"] },
			{ type: "text", sub_type: "message", message: "Kaia", message_RU: "Щит", class_position: ["mystic", "priest"] }
		],
		"s-2803-1000-8-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Tank Buster", message_RU: "Удар по танку" }],
		"s-2803-1000-9-0": [{ type: "text", sub_type: "message", message: "DODGE", message_RU: "Уклонение" }],
		"s-2803-1000-10-0": [{ type: "text", sub_type: "message", message: "Spinning DODGE", message_RU: "Вращательное уклонение" }],
		//"s-2803-1000-111-0": [{ type: "text", sub_type: "message", message: "Roll Back", message_RU: "Откат" }],
		//"s-2803-1000-112-0": [{ type: "text", sub_type: "message", message: "Gungnir", message_RU: "Гунгнир" }],
		"s-2803-1000-113-0": [{ type: "text", sub_type: "message", message: "Overhead Slash", message_RU: "Удар сверху" }],
		"s-2803-1000-101-0": [{ type: "text", sub_type: "message", message: "SHEILD", message_RU: "Щит" }],
		"s-2803-1000-102-0": [{ type: "text", sub_type: "message", message: "PLAGUE/REGRESS", message_RU: "Чума/Регресс" }],
		//"s-2803-1000-303-0": [{ type: "text", sub_type: "message", message: "Wipe Calamity Strike - (Stage1)", message_RU: "Удар бедствия (Этап 1)" }],
		//"s-2803-1000-304-0": [{ type: "text", sub_type: "message", message: "Wipe Calamity Strike - (Stage2)", message_RU: "Удар бедствия (Этап 2)" }],
		"s-2803-1000-305-0": [{ type: "text", sub_type: "message", message: "RuneBurst", message_RU: "Взрыв рун" }]
		//"s-2803-1000-306-0": [{ type: "text", sub_type: "message", message: "Ragnarok", message_RU: "Рагнарёк" }],
		//"s-2803-1000-7-0": [{ type: "text", sub_type: "message", message: "Glaive Follow", message_RU: "Удар копьём" }],
		//"s-2803-1000-308-0": [{ type: "text", sub_type: "message", message: "Shinning Slash", message_RU: "Сияющий удар" }],
		//"s-2803-1000-309-0": [{ type: "text", sub_type: "message", message: "Shinning AOE", message_RU: "Сияющая зона" }],
		//"s-2803-1000-310-0": [{ type: "text", sub_type: "message", message: "Twilight 1", message_RU: "Сумерки 1" }],
		//"s-2803-1000-311-0": [{ type: "text", sub_type: "message", message: "Twilight 2", message_RU: "Сумерки 2" }],
		//"s-2803-1000-312-0": [{ type: "text", sub_type: "message", message: "Twilight 3", message_RU: "Сумерки 3" }],
		//"s-2803-1000-313-0": [{ type: "text", sub_type: "message", message: "Twilight 4", message_RU: "Сумерки 4" }],
		//"s-2803-1000-315-0": [{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" }],

		/*"s-2803-1000-315-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge!", message_RU: "Уклонение!" }
		],

		//"s-2803-1000-316-0": [{ type: "text", sub_type: "message", message: "Pizza - (Inverted)", message_RU: "Пицца (Обратная)" }],

		/*"s-2803-1000-316-0": [
			{ type: "text", sub_type: "message", message: "Pizza - (Inverted)", message_RU: "Пицца (Обратная)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge!", message_RU: "Уклонение!" }
		],

		//"s-2803-1000-401-0": [{ type: "text", sub_type: "message", message: "Valk-Wait", message_RU: "Валькирия - Ждать" }],
		//"s-2803-1000-501-0": [{ type: "text", sub_type: "message", message: "Last-Stand-Valk", message_RU: "Последний бой Валькирии" }],
		//"s-2803-1000-1-0": [{ type: "text", sub_type: "message", message: "Double Base Slash", message_RU: "Двойной базовый удар" }],
		//"s-2803-1000-2-0": [{ type: "text", sub_type: "message", message: "Spin & Slash", message_RU: "Вращение и удар" }],
		//"s-2803-1000-3-0": [{ type: "text", sub_type: "message", message: "Leaping Strike", message_RU: "Прыжковый удар" }],
		//"s-2803-1000-2104-0": [{ type: "text", sub_type: "message", message: "Spin", message_RU: "Вращение" }],
		//"s-2803-1000-2105-0": [{ type: "text", sub_type: "message", message: "BloodFlower", message_RU: "Кровавый цветок" }],
		//"s-2803-1000-2106-0": [{ type: "text", sub_type: "message", message: "Slash & Double Spinning Death", message_RU: "Удар и двойная смертельная спираль" }],
		//"s-2803-1000-2107-0": [{ type: "text", sub_type: "message", message: "DreamSlash", message_RU: "Мечтательный удар" }],
		//"s-2803-1000-2108-0": [{ type: "text", sub_type: "message", message: "Ground Bash", message_RU: "Удар по земле" }],
		//"s-2803-1000-2109-0": [{ type: "text", sub_type: "message", message: "Glaive Strike", message_RU: "Удар копьём" }],
		//"s-2803-1000-2110-0": [{ type: "text", sub_type: "message", message: "Spinning Death 3rd Hit", message_RU: "Третий удар смертельной спирали" }],
		//"s-2803-1000-2112-0": [{ type: "text", sub_type: "message", message: "Gungnir", message_RU: "Гунгнир" }],
		//"s-2803-1000-2113-0": [{ type: "text", sub_type: "message", message: "Overhead Slash", message_RU: "Удар сверху" }],
		//"s-2803-1000-3001-0": [{ type: "text", sub_type: "message", message: "DreamSlash", message_RU: "Мечтательный удар" }],
		//"s-2803-1000-3002-0": [{ type: "text", sub_type: "message", message: "RuneBurst", message_RU: "Взрыв рун" }],
		//"s-2803-1000-3003-0": [{ type: "text", sub_type: "message", message: "DreamSlash-Pizza", message_RU: "Мечтательный удар - Пицца" }],

		"s-2803-1000-315-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_RU: "Пицца" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "marker", args: [false, 80, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "marker", args: [false, 280, 300, 0, 3500, true, null] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 60, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 120, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 240, 450, 0, 3500] },
			{ type: "spawn", func: "vector", args: [912, 0, 50, 300, 450, 0, 3500] },
			{ type: "text", sub_type: "message", delay: 1700, message: "Dodge!", message_RU: "Уклонение!" }
		],

		//"am-3030-1000-99000580": [{ type: "text", sub_type: "message", message: "Hit Thorns", message_RU: "Шипы" }],

		"nd-3030-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-3030-2000-309-0": [
			{ type: "text", sub_type: "message", message: "AOE circles | Stun", message_RU: "АОЕ круги | Стан", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 4000 }
		],
		"s-3030-2000-105-0": [
			{ type: "text", sub_type: "message", message: "Laser Frontal (Stun)", message_RU: "Лазер (стан)", check_func: () => print_stun },
			{ type: "func", func: () => print_stun = false },
			{ type: "func", func: () => print_stun = true, delay: 15000 }
		],*/
	};
};