/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import {
  ApplicationCommandType,
  ApplicationIntegrationType,
  ContextMenuCommandBuilder,
  InteractionContextType,
  Locale,
} from "discord.js";

const command = new ContextMenuCommandBuilder().
  setContexts(
    InteractionContextType.BotDM,
    InteractionContextType.Guild,
    InteractionContextType.PrivateChannel,
  ).
  setIntegrationTypes(ApplicationIntegrationType.UserInstall).
  setType(ApplicationCommandType.Message).
  setName("Translate Message").
  setNameLocalizations({
    [Locale.Indonesian]:   "Terjemahkan Pesan",
    [Locale.EnglishGB]:    "Translate Message",
    [Locale.EnglishUS]:    "Translate Message",
    [Locale.Bulgarian]:    "Предаване на съобщение",
    [Locale.ChineseCN]:    "翻译信件",
    [Locale.ChineseTW]:    "翻譯訊息",
    [Locale.Czech]:        "Přeložit zprávu",
    [Locale.Danish]:       "Oversæt brev",
    [Locale.Dutch]:        "Bericht vertalen",
    [Locale.Finnish]:      "Käännä viesti",
    [Locale.French]:       "Traduire le message",
    [Locale.German]:       "Nachricht übersetzen",
    [Locale.Greek]:        "Μετάφραση μηνύματος",
    [Locale.Hindi]:        "संदेश अनुवाद",
    [Locale.Hungarian]:    "Üzenet fordítása",
    [Locale.Italian]:      "Traduci il messaggio",
    [Locale.Japanese]:     "メッセージの翻訳",
    [Locale.Korean]:       "자주 묻는 질문",
    [Locale.Lithuanian]:   "Tulkot ziņojumu",
    [Locale.Polish]:       "Przetłumacz wiadomość",
    [Locale.PortugueseBR]: "Traduzir mensagem",
    [Locale.Romanian]:     "Tradu mesajul",
    [Locale.Russian]:      "Перевод сообщения",
    [Locale.SpanishES]:    "Traducir mensaje",
    [Locale.SpanishLATAM]: "Traducir mensaje",
    [Locale.Swedish]:      "Översätt meddelande",
    [Locale.Thai]:         "แปลจดหมาย",
    [Locale.Turkish]:      "Mesajı Çevir",
    [Locale.Ukrainian]:    "Переклади",
  });

// eslint-disable-next-line no-console -- We don't need our logger here as this never runs in production.
console.log(JSON.stringify(command.toJSON()));
