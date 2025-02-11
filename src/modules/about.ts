/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { execSync } from "node:child_process";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  type ChatInputCommandInteraction,
} from "discord.js";
import { i18n } from "../utils/i18n.js";
import { logger } from "../utils/logger.js";
import { replyToError } from "../utils/replyToError.js";
import { getLocale } from "./getLocale.js";

/**
 * Responds with information about the bot.
 * @param interaction -- The interaction payload from Discord.
 */
export const about
= async(interaction: ChatInputCommandInteraction): Promise<void> => {
  try {
    await interaction.deferReply({ flags: [ MessageFlags.Ephemeral ] });
    const targetLocale = getLocale(interaction);

    const version = process.env.npm_package_version ?? "Unknown";
    const commit = execSync("git rev-parse --short HEAD").toString().
      trim();

    const embed = new EmbedBuilder();
    embed.setTitle(i18n("embed.title", targetLocale));
    embed.setDescription(i18n("embed.description", targetLocale));
    embed.addFields(
      {
        name:  i18n("embed.version", targetLocale),
        value: version,
      },
      {
        name:  i18n("embed.commit", targetLocale),
        value: commit,
      },
    );

    const supportButton = new ButtonBuilder().
      setLabel(i18n("button.support", targetLocale)).
      setStyle(ButtonStyle.Link).
      setURL("https://chat.nhcarrigan.com");
    const sourceButton = new ButtonBuilder().
      setLabel(i18n("button.code", targetLocale)).
      setStyle(ButtonStyle.Link).
      setURL("https://git.nhcarrigan.com/nhcarrigan/aria-iuvo");
    const subscribeButton = new ButtonBuilder().
      setStyle(ButtonStyle.Premium).
      setSKUId("1338596712121499669");
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      supportButton,
      sourceButton,
      subscribeButton,
    );

    await interaction.editReply({
      components: [ row ],
      embeds:     [ embed ],
    });
  } catch (error) {
    const targetLocale = getLocale(interaction);
    await replyToError(interaction, targetLocale);
    if (error instanceof Error) {
      await logger.error("about command", error);
    }
  }
};
