/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { DiscordAnalytics } from "@nhcarrigan/discord-analytics";
import { Client, Events } from "discord.js";
import { about } from "./modules/about.js";
import { translate } from "./modules/translate.js";
import { instantiateServer } from "./server/serve.js";
import { logger } from "./utils/logger.js";

process.on("unhandledRejection", (error) => {
  if (error instanceof Error) {
    void logger.error("Unhandled Rejection", error);
    return;
  }
  void logger.error("unhandled rejection", new Error(String(error)));
});

process.on("uncaughtException", (error) => {
  if (error instanceof Error) {
    void logger.error("Uncaught Exception", error);
    return;
  }
  void logger.error("uncaught exception", new Error(String(error)));
});

const client = new Client({
  intents: [],
});

const analytics = new DiscordAnalytics(client, logger);

client.on(Events.InteractionCreate, (interaction) => {
  void analytics.logGatewayEvent(Events.InteractionCreate, { ...interaction });
  if (interaction.isMessageContextMenuCommand()) {
    void translate(interaction);
  }
  if (interaction.isChatInputCommand()) {
    void about(interaction);
  }
});

client.on(Events.EntitlementCreate, (entitlement) => {
  void logger.log("info", `User ${entitlement.userId} has subscribed!`);
});

client.on(Events.EntitlementDelete, (entitlement) => {
  void logger.log("info", `User ${entitlement.userId} has unsubscribed... :c`);
});

client.on(Events.ClientReady, () => {
  void logger.log("debug", "Bot is ready.");
  analytics.startCron();
});

instantiateServer();
await client.login(process.env.DISCORD_TOKEN);
