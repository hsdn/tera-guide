// Aesir's End - HM (Guide)
// V1.2
//
// made by MissMeowMeow (Amy)

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-2802-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-2802-1000-90": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_RU: "Скоро щит" }],
		"h-2802-1000-60": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_RU: "Скоро щит" }],
		"h-2802-1000-30": [{ type: "text", sub_type: "notification", message: "Shield Soon", message_RU: "Скоро щит" }],
		"h-2802-1000-8": [{ type: "text", sub_type: "notification", message: "D P S ! ? !", message_RU: "ДПС ! ? !" }],
		"s-2802-1000-103-0": [{ type: "text", sub_type: "message", message: "Knockdown", message_RU: "Опрокид", class_position: "tank" }],
		"s-2802-1000-105-0": [{ type: "text", sub_type: "message", message: "Multi-hit Stun", message_RU: "Многократный оглушающий удар", class_position: "tank" }],
		"s-2802-1000-106-0": [{ type: "text", sub_type: "message", message: "Double Spin", message_RU: "Двойное вращение" }],
		"s-2802-1000-107-0": [{ type: "text", sub_type: "message", message: "Tank Buster (Slow)", message_RU: "Удар в танка (медленный)", class_position: "tank" }],
		"s-2802-1000-108-0": [{ type: "text", sub_type: "message", message: "Tank Buster (Fast)", message_RU: "Удар в танка (быстрый)", class_position: "tank" }],
		"s-2802-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump - Dodge", message_RU: "Прыжок - Эвейд" }],
		"s-2802-1000-110-0": [{ type: "text", sub_type: "message", message: "Pull (Jump Soon)", message_RU: "Притягивание (скоро прыжок)" }],
		"s-2802-1000-111-0": [{ type: "text", sub_type: "message", message: "Res bait (Stun)", message_RU: "Приманка для воскрешения (оглушение)" }],
		"s-2802-1000-112-0": [{ type: "text", sub_type: "message", message: "AOE Soon", message_RU: "Скоро AOE" }],
		"s-2802-1000-113-0": [{ type: "text", sub_type: "message", message: "AOE Stun", message_RU: "AOE оглушение" }],
		"s-2802-1000-301-0": [
			{ type: "text", sub_type: "message", message: "Shield", message_RU: "Щит", class_position: ["dps", "tank"] },
			{ type: "text", sub_type: "message", message: "Shield - Plague", message_RU: "Щит - Чума", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Shield - Regress", message_RU: "Щит - Регресс", class_position: "mystic" }
		],
		"s-2802-1000-303-0": [{ type: "text", sub_type: "message", message: "You Suck!?", message_RU: "Ты отстой!?" }],
		"s-2802-1000-304-0": [{ type: "text", sub_type: "message", message: "You Suck!?", message_RU: "Ты отстой!?" }],
		"s-2802-1000-305-0": [{ type: "text", sub_type: "message", message: "Monkeys", message_RU: "Обезьяны" }],
		"s-2802-1000-306-0": [
			{ type: "text", sub_type: "message", message: "Donuts Go Out-In", message_RU: "Пончики наружу-внутрь" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 15, 300, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 5000] }
		],
		"s-2802-1000-307-0": [
			{ type: "text", sub_type: "message", message: "Range Bait (Double Jump)", message_RU: "Приманка дальнего боя (двойной прыжок)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 650, 0, 2500] }
		],
		"s-2802-1000-308-0": [{ type: "text", sub_type: "message", message: "AOE Soon", message_RU: "Скоро AOE" }],
		"s-2802-1000-309-0": [
			{ type: "text", sub_type: "message", message: "Turn (Dodge)", message_RU: "Поворот (эвейд)" },
			{ type: "spawn", func: "circle", delay: 700, args: [false, 553, 0, 0, null, 800, 0, 3500] }
		],
		"s-2802-1000-310-0": [{ type: "text", sub_type: "message", message: "Slow Stomp - Dodge", message_RU: "Медленное топтание - Эвейд" }],
		"s-2802-1000-313-0": [{ type: "text", sub_type: "message", message: "Wide Area - Dodge", message_RU: "Широкая зона - Эвейд" }]
	};
};