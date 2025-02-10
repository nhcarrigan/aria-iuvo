/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { mappedLocales } from "../config/locales.js";
import type { MessageContextMenuCommandInteraction } from "discord.js";

/**
 * Parses the locale from the interaction, using our mapped
 * values to match with LibreTranslate where necessary.
 * @param interaction -- The interaction payload from Discord.
 * @returns The locale string.
 */
export const getLocale = (
  interaction: MessageContextMenuCommandInteraction,
): string => {
  if (mappedLocales[interaction.locale] !== undefined) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- It's not undefined.
    return mappedLocales[interaction.locale] as string;
  }
  return interaction.locale;
};
