# tera-guide

## Patch v92.04 and v100.02 (x64)

### :star: Available in TERA Toolbox for patch 92.04 and 100.02 (x64)
* Fully compatible with [TERA Toolbox for patch 92 and 100](https://github.com/tera-private-toolbox/tera-toolbox).   
  Automatic install from **Get More Mods** tab.

* Полностью совместимо с [TERA Toolbox для патчей 92 и 100](https://github.com/tera-private-toolbox/tera-toolbox).   
  Автоматическая установка через вкладку **Скачать модули**.

### :information_source: Manual installation
The tera-guide and [tera-guide-core](https://github.com/hsdn/tera-guide-core) are already compatible with this patch.   
For the guides to work you need a get compatible versions of **library** and **tera-guide-core**:
1. Download **library** from **[here](https://github.com/tera-private-toolbox/library/archive/refs/heads/master.zip)** and place it to you **mods** folder named as **"library"**.
2. Download **tera-guide-core** from **[here](https://github.com/hsdn/tera-guide-core/archive/refs/heads/master.zip)** and place it to you **mods** folder named as **"tera-guide-core"**,   
   not "tera-guide-core-master".

### :information_source: Ручная установка
Модули tera-guide и [tera-guide-core](https://github.com/hsdn/tera-guide-core) совместимы с данным патчем уже сейчас.   
Для работы гайдов вам потребуется установка совместимой версии **library** и **tera-guide-core**:
1. Скачайте **library** **[здесь](https://github.com/tera-private-toolbox/library/archive/refs/heads/master.zip)** и поместите в вашу папку **mods** как **"library"**.
2. Скачайте **tera-guide-core** **[здесь](https://github.com/hsdn/tera-guide-core/archive/refs/heads/master.zip)** и поместите в вашу папку **mods** как **"tera-guide-core"**,   
   а не "tera-guide-core-master".

---

## Description / Описание

The dungeon guide module with Text-to-speech notifications, display hints on screen and drawing zones of bosses attacks and mechanics. Available English and Russian languages (detects automatically).

Модуль подсказок по данжам с возможностью голосовых уведомлений, вывод подсказок в чат или на экран, а также отрисовка зон атак боссов и механик. Поддерживаются Русский и Английский языки (определяются автоматически).

#### Other translations and forks / Другие локализации и форки
* [**Chinese (简体中文)** by Minor-fun](https://github.com/Minor-fun/tera-guide)
* [**Spanish (Español)** by Loliconera](https://github.com/Loliconera/tera-guide-spanish)
* [**Spanish (Español)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues-Espanol)
* [**Portuguese (Português)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues-Espanol)

## Dependencies / Зависимости
* **library** - https://github.com/tera-private-toolbox/library
* **tera-guide-core** - https://github.com/hsdn/tera-guide-core

When using TeraToolbox, all dependencies will be installed automatically.   
При использовании TeraToolbox, все зависимости будут установлены автоматически.

## Commands / Команды
Toolbox(/8) | Command description | Описание команды
--- | --- | ---
**guide** | Module on/off | Вкл./выкл. модуля
**guide&nbsp;gui** | Show module GUI| Показать графический интерфейс
**guide&nbsp;voice**<br>(default: off) | Text-to-speech (TTS) notices on/off, speech rate is set by command **guide `1`~`10`** | Вкл./выкл. голосовых уведомлений (TTS), скорость чтения задается командой **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(default: off) | Send notices to chat channel "Notice" instead of on-screen messages on/off | Вкл./выкл. отправки уведомлений в канал чата "Важно" вместо показа экранных сообщений
**guide&nbsp;gNotice**<br>(default: off) | Send notices to party chat channel on/off | Вкл./выкл. отправки уведомлений в канал чата группы
**guide&nbsp;`auto`/`en`/`ru`**<br>(default: auto) | Set guide language | Выбор языка перевода
**guide&nbsp;`1`~`10`**<br>(default: 2) | Set TTS speech rate | Регулировка скорости чтения голосовых сообщений
**guide&nbsp;spawnObject**<br>(default: on) | Spawn marker objects on/off | Вкл./выкл. спавна маркировочных объектов
**guide&nbsp;stream**<br>(default: off) | Streamer Mode on/off (hide all notices and objects, TTS will played) | Вкл./выкл. режима стримера (скрывает все уведомления и маркеры, TTS будет проигрываться)
**guide&nbsp;dungeons** | List of all supported dungeons and its ids | Список всех поддерживаемых данжей и их id
**guide&nbsp;verbose&nbsp;`id`**<br>(default: on for all) | Send notices for specified by `id` dungeon on/off | Вкл./выкл. всех уведомлений для данжа, где `id` - идентификатор данжа
**guide&nbsp;spawnObject&nbsp;`id`**<br>(default: on for all) | Spawn marker objects for specified by `id` dungeon on/off | Вкл./выкл. спавна объектов для данжа, где `id` - идентификатор данжа
**guide&nbsp;help** | List of supported commands | Вывод поддерживаемых команд

## Supported dungeons / Поддерживаемые данжи

id | Dungeon name | Название данжа
--- | --- | ---
2800 | Dreadspire VALKYTEQ | Dreadspire VALKYTEQ
2802 | Aesir's End (Hard) (Arborea Reborn) | Aesir's End (Hard) (Arborea Reborn)
2803 | Aesir's End (Arborea Reborn) | Aesir's End (Arborea Reborn)
2804 | Phantom hideout (Arborea Reborn) | Phantom hideout (Arborea Reborn)
2809 | The Observatory (Arborea Reborn) | The Observatory (Arborea Reborn)
2811 | Sea of Honor (Arborea Reborn) | Sea of Honor (Arborea Reborn)
2813 | Beach River Outpost (Arborea Reborn) | Beach River Outpost (Arborea Reborn)
2814 | Abyssal Prison (Arborea Reborn) | Abyssal Prison (Arborea Reborn)
2816 | Kelsaik Hall (Arborea Reborn) | Kelsaik Hall (Arborea Reborn)
3023 | Akalath Quarantine | Секретное подземелье крепости Берарк
3026 | Corrupted Skynest | Логово Келсаика
3027 | Forbidden Arena [Hagufna] | [Бессмертный воин] Арена безумия
3030 | Commander's Residence | Старая резиденция
3032 | Akalath Quarantine (Guide) | [Тренировка] Секретное подземелье крепости Берарк
3034 | Rampaging RK-9 Kennel | Ангар RK-9 (сложно)
3036 | Sky Cruiser (Hard) | Небесный крейсер (сложно)
3037 | Bahaar's Sanctum (Guide) | [Тренировка] Святилище Бахаара
3101 | Gossamer Vault | Гнездо Паркин
3102 | Draakon Arena | Командный центр
3103 | Forbidden Arena [Undying Warlord] | [Этерния] Арена безумия
3104 | Catalepticon | Сонный паралич Лукмии
3105 | Fusion Laboratory | Лаборатория Слияния
3106 | Killing Grounds | Место казни
3107 | Corrupted RK-9 Kennel | Разрушенный Ангар РК-9
3111 | The Veil (Darkan) | The Veil (Darkan)
3123 | Akalath Quarantine (Hard) | Akalath Quarantine (Hard)
3126 | Corrupted Skynest (Hard) | Логово Бессмертного Келсаика
3201 | Gossamer Vault (Hard) | Гнездо сверкающей Паркин
3202 | Draakon Arena (Hard) | Командный центр (сложно)
3203 | Forbidden Arena [Nightmare Undying Warlord] | [Бессмертный] Арена безумия
3204 | Catalepticon (Hard) | Сонный паралич Лукмии (сложно)
3205 | Cursed Fusion Laboratory | Заколдованная лаборатория слияния
3206 | Crimson Killing Grounds | Окровавленное место казни
3920 | Cursed Antaroth's Abyss (Asura) | Искаженный Омут (Asura)
7011 | Shadow of the Gutrends (Guardian) | Живодеры и черная тень (хранитель)
7015 | Escape from Balder's Refuge (Guardian) | Операция "Спасти Убежище Балдера" (хранитель)
9027 | Manaya's Core (Hard) | Обитель Манайи (сложно)
9034 | Dreadspire | Жуткий шпиль страха
9044 | Bahaar's Sanctum | Святилище Бахаара
9048 | Sanctum of the Fire God (Agaia Online) | Sanctum of the Fire God (Agaia Online)
9050 | Rift's Edge (Hard) | Край Разлома (сложно)
9053 | Kezzel's Gorge | Ущелье Кеззела
9054 | Bathysmal Rise (Hard) | Глубинный Храм (сложно)
9056 | Timescape (Hard) | Хроноплоскость (сложно)
9057 | Akeron's Inferno (Hard) | Акероново пекло (сложно)
9066 | Demon's Wheel | Рулетка Демороса
9067 | Demokron Factory (Hard) | Лаборатория Берна (сложно)
9068 | Shadow Sanguinary (Hard) | Убежище Дуриона (сложно)
9070 | Manglemire | Замок Парадоксов
9710 | Broken Prison | Разрушенный алтарь Лакана
9716 | Sky Cruiser Endeavor | Крейсер "Стремление"
9720 | Antaroth's Abyss | Омут Антароса
9735 | RK-9 Kennel | Ангар RK-9
9739 | Red Refuge | Лагерь повстанцев
9750 | Rift's Edge | Край Разлома
9754 | Bathysmal Rise | Глубинный Храм
9756 | Timescape | Хроноплоскость
9757 | Akeron's Inferno | Акероново пекло
9759 | Forsaken Island (Hard) | Остров Мертвых (сложно)
9768 | Shadow Sanguinary | Убежище Дуриона
9770 | Ruinous Manor | Руины Абнукты
9780 | Velik's Hold (5-Person) | Вход в катакомбы Велики
9781 | Velik's Sanctuary | Святилище Велики
9782 | Grotto of Lost Souls | Мастерская Леандра
9783 | Dark Reach Citadel | Крепость Тенебриса
9794 | Thaumetal Refinery | Лаборатория Сайрекса
9850 | Withering Dreadspire (Agaia Online) | Withering Dreadspire (Agaia Online)
9916 | Sky Cruiser Endeavor (Hard) | Крейсер "Стремление" (Сложно)
9920 | Antaroth's Abyss (Hard) | Омут Бездушного Антароса
9935 | RK-9 Kennel (Hard) | Ангар совершенного RK-9
9939 | Red Refuge (Hard) | Секретный лагерь повстанцев
9970 | Ruinous Manor (Hard) | Руины Кошмарной Абнукты
9980 | Velik's Hold (Hard) | Вход в разрушенные катакомбы Велики
9981 | Velik's Sanctuary (Hard) | Разрушенное Святилище Велики
9985 | Sanctuary's Ruins (Hard) | Sanctuary's Ruins (Hard)
9982 | Grotto of Lost Souls (Hard) | Мастерская Леандра (сложно)
9983 | Dark Reach Citadel (Hard) | Крепость Темного Тенебриса
9994 | Thaumetal Refinery (Hard) | Лаборатория Альфа-сайрекса

## Notices settings / Настройка уведомлений

* On screen (on bottom side) and chat notices, if **lNotice** parameter is *on*.   
  Уведомления на экране (в нижней части), а также в чате, если параметр **lNotice** - *включен*.   
  ![](https://i.imgur.com/BPlK58M.png)

* When **gNotice** parameter is *on*, notices will also be sent to party chat channel.   
  Если параметр **gNotice** был *включен*, уведомления также будут отправляться в канал чата группы.   

* The message on top side of the screen, if **lNotice** parameter is *off* (by default).   
  Сообщение в верхней части экрана, если параметр **lNotice** - *выключен* (по-умолчанию).   
  ![](https://i.imgur.com/r2bb8Wc.png)   
  You can set the color for this type of notices using the commands or GUI (also change color in the Toolbox chat).   
  Возможен выбор цвета для этого вида уведомлений при помощи команд или графического интерфейса (также изменяется цвет в чате Toolbox).

* When Streamer Mode is *on* (**stream** parameter), all text notices ONLY sent to Toolbox(/8) chat channel, but TTS notices will be played.   
  Если *включен* режим стримера (парам. **stream**), все текстовые уведомления будут отправляться ТОЛЬКО в канал чата Toolbox(/8), однако голосовые уведомления будут проигрываться.

* To disable or enable TTS notifications, use the **guide voice** command.   
  Для отключения или включения голосовых уведомлений используется команда **guide voice**.

## Module GUI / Графический интерфейс

* When you enter the **guide gui** command, the module GUI is displayed, allowing you to change basic settings.   
  При вводе команды **guide gui** отображается графический интерфейс модуля, позволяющий осуществить основные настройки.   
  ![](https://i.imgur.com/72hDCvQ.png)

## More information / Дополнительная информация

* Developers wiki: https://github.com/hsdn/tera-guide-core/wiki
* For questions and suggestions, ask in our Discord: https://discord.gg/sJzRJhtwWX

## Credits
- **[Kasea](https://github.com/Kasea)** - Original developer of Tera-Guide module
- **[michengs](https://github.com/michengs)** - Author of base code for most guides and module core
- **[ZC](https://github.com/tera-mod)** - Provided coordinates for rendering attack areas and mechanics
- **[Kuroine](https://github.com/Kuroine)** - Author of base code for the DA guide
- **[Multarix](https://github.com/Multarix)** - Author of the RR guide and also making changes to the English translation
- **[Owyn](https://github.com/Owyn)** - Developer of great guides for RK-9, AA and GV, whose code was used
- **[Emilia](https://github.com/emilia-s2)** - Author of Portuguese translation and guardian guides
- **[Loliconera](https://github.com/Loliconera)** - Author of Spanish translation
- **[ITunk](https://github.com/GrafNikola)** - Author of initial Russian translation
