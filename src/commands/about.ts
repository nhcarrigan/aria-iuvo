/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import {
  ApplicationIntegrationType,
  SlashCommandBuilder,
  InteractionContextType,
  Locale,
} from "discord.js";

const command = new SlashCommandBuilder().
  setContexts(
    InteractionContextType.BotDM,
    InteractionContextType.Guild,
    InteractionContextType.PrivateChannel,
  ).
  setIntegrationTypes(ApplicationIntegrationType.UserInstall).
  setName("about").
  setNameLocalizations({
    [Locale.Indonesian]:   "tentang",
    [Locale.EnglishGB]:    "about",
    [Locale.EnglishUS]:    "about",
    [Locale.Bulgarian]:    "за",
    [Locale.ChineseCN]:    "关于",
    [Locale.ChineseTW]:    "關於",
    [Locale.Czech]:        "o-aplikaci",
    [Locale.Danish]:       "om",
    [Locale.Dutch]:        "over",
    [Locale.Finnish]:      "tietoja",
    [Locale.French]:       "à-propos",
    [Locale.German]:       "über",
    [Locale.Greek]:        "σχετικά-με",
    [Locale.Hindi]:        "के-बारे-में",
    [Locale.Hungarian]:    "rólunk",
    [Locale.Italian]:      "informazioni",
    [Locale.Japanese]:     "約",
    [Locale.Korean]:       "약",
    [Locale.Lithuanian]:   "apie",
    [Locale.Polish]:       "o-nas",
    [Locale.PortugueseBR]: "sobre",
    [Locale.Romanian]:     "despre",
    [Locale.Russian]:      "о",
    [Locale.SpanishES]:    "acerca-de",
    [Locale.SpanishLATAM]: "acerca-de",
    [Locale.Swedish]:      "om",
    [Locale.Thai]:         "เกี่ยวกับ",
    [Locale.Turkish]:      "hakkında",
    [Locale.Ukrainian]:    "про",
  }).
  setDescription("Learn more about this bot!").
  setDescriptionLocalizations({
    [Locale.Indonesian]:   "Pelajari lebih lanjut tentang bot ini!",
    [Locale.EnglishGB]:    "Learn more about this bot!",
    [Locale.EnglishUS]:    "Learn more about this bot!",
    [Locale.Bulgarian]:    "Научете повече за този бот!",
    [Locale.ChineseCN]:    "了解有关此机器人的更多信息！",
    [Locale.ChineseTW]:    "了解有關此機器人的更多信息！",
    [Locale.Czech]:        "Dozvědět se více o tomto botovi!",
    [Locale.Danish]:       "Lær mere om denne bot!",
    [Locale.Dutch]:        "Leer meer over deze bot!",
    [Locale.Finnish]:      "Lisätietoja tästä botista!",
    [Locale.French]:       "En savoir plus sur ce bot!",
    [Locale.German]:       "Erfahren Sie mehr über diesen Bot!",
    [Locale.Greek]:        "Μάθετε περισσότερα για αυτό το bot!",
    [Locale.Hindi]:        "इस बॉट के बारे में और अधिक जानें!",
    [Locale.Hungarian]:    "Tudj meg többet erről a botról!",
    [Locale.Italian]:      "Scopri di più su questo bot!",
    [Locale.Japanese]:     "このボットについてもっと詳しく知る！",
    [Locale.Korean]:       "이 봇에 대해 더 알아보기!",
    [Locale.Lithuanian]:   "Sužinokite daugiau apie šį botą!",
    [Locale.Polish]:       "Dowiedz się więcej o tym bocie!",
    [Locale.PortugueseBR]: "Saiba mais sobre este bot!",
    [Locale.Romanian]:     "Aflați mai multe despre acest bot!",
    [Locale.Russian]:      "Узнайте больше об этом боте!",
    [Locale.SpanishES]:    "¡Obtén más información sobre este bot!",
    [Locale.SpanishLATAM]: "¡Obtén más información sobre este bot!",
    [Locale.Swedish]:      "Lär dig mer om denna bot!",
    [Locale.Thai]:         "เรียนรู้เพิ่มเติมเกี่ยวกับบอตนี้!",
    [Locale.Turkish]:      "Bu bot hakkında daha fazla bilgi edinin!",
    [Locale.Ukrainian]:    "Дізнайтеся більше про цього бота!",
  });

// eslint-disable-next-line no-console -- We don't need our logger here as this never runs in production.
console.log(JSON.stringify(command.toJSON()));
