/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { i18n } from "./i18n.js";
import type {
  ChatInputCommandInteraction,
  MessageContextMenuCommandInteraction,
} from "discord.js";

/**
 * Responds to an interaction with a generic error message.
 * @param interaction -- The interaction payload from Discord.
 * @param locale -- The locale to respond in.
 */
export const replyToError = async(
  interaction:
    | ChatInputCommandInteraction
    | MessageContextMenuCommandInteraction,
  locale: string,
): Promise<void> => {
  if (interaction.deferred || interaction.replied) {
    await interaction.editReply(i18n("command-error", locale));
    return;
  }
  await interaction.reply(i18n("command-error", locale));
};
