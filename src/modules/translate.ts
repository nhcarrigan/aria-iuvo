/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import {
  MessageFlags,
  type MessageContextMenuCommandInteraction,
} from "discord.js";
import { supportedLocales } from "../config/locales.js";
import { i18n } from "../utils/i18n.js";
import { getLocale } from "./getLocale.js";

/**
 * Translates a message to the user's locale.
 * @param interaction -- The interaction payload from Discord.
 */
// eslint-disable-next-line max-statements, max-lines-per-function, complexity -- This is a complex function.
export const translate = async(
  interaction: MessageContextMenuCommandInteraction,
): Promise<void> => {
  await interaction.deferReply({ flags: [ MessageFlags.Ephemeral ] });
  const targetLocale = getLocale(interaction);

  const isEntitled = interaction.entitlements.find((entitlement) => {
    return entitlement.userId === interaction.user.id && entitlement.isActive();
  });

  if (!isEntitled && interaction.user.id !== "465650873650118659") {
    await interaction.editReply({
      content: i18n("subscription-required", targetLocale),
    });
    return;
  }

  if (!supportedLocales.includes(targetLocale)) {
    await interaction.editReply(i18n("unsupported-locale", targetLocale, {
      target: targetLocale,
    }));
    return;
  }

  const message = interaction.options.getMessage("message", true);
  if (message.content === "") {
    await interaction.editReply({
      content: i18n("no-message-content", targetLocale),
    });
    return;
  }
  const sourceLocaleRequestParameters = new URLSearchParams();
  sourceLocaleRequestParameters.append("q", message.content);
  sourceLocaleRequestParameters.append(
    "api_key",
    process.env.TRANSLATE_TOKEN ?? "",
  );
  const sourceLocaleRequest = await fetch(
    "https://trans.nhcarrigan.com/detect",
    {
      body:   sourceLocaleRequestParameters,
      method: "POST",
    },
  );
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- .json() doesn't accept a generic.
  const [ sourceLocale ] = (await sourceLocaleRequest.json()) as Array<{
    confidence: number;
    language:   string;
  }>;
  const translationRequestParameters = new URLSearchParams();
  translationRequestParameters.append("q", message.content);
  translationRequestParameters.append("source", sourceLocale?.language ?? "en");
  translationRequestParameters.append("target", targetLocale);
  translationRequestParameters.append(
    "api_key",
    process.env.TRANSLATE_TOKEN ?? "",
  );
  const translationRequest = await fetch(
    "https://trans.nhcarrigan.com/translate",
    { body: translationRequestParameters, method: "POST" },
  );
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- .json() doesn't accept a generic.
  const translation = (await translationRequest.json()) as {
    translatedText: string;
  };

  await interaction.editReply({
    content: i18n("translation", targetLocale, {
      confidence:  sourceLocale?.confidence,
      language:    sourceLocale?.language,
      lng:         targetLocale,
      translation: translation.translatedText,
    }),
  });
};
