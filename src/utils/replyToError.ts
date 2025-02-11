/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  type ChatInputCommandInteraction,
  type MessageContextMenuCommandInteraction,
} from "discord.js";
import { i18n } from "./i18n.js";

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
  const button = new ButtonBuilder().
    setLabel(i18n("button.support", locale)).
    setStyle(ButtonStyle.Link).
    setURL("https://chat.nhcarrigan.com");
  const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);
  if (interaction.deferred || interaction.replied) {
    await interaction.editReply({
      components: [ row ],
      content:    i18n("command-error", locale),
    });
    return;
  }
  await interaction.reply({
    components: [ row ],
    content:    i18n("command-error", locale),
  });
};
