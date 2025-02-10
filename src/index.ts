/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { Client, Events } from "discord.js";
import { translate } from "./modules/translate.js";
import { instantiateServer } from "./server/serve.js";
import { logHandler } from "./utils/logHandler.js";

const client = new Client({
  intents: [],
});

client.on(Events.InteractionCreate, (interaction) => {
  if (interaction.isMessageContextMenuCommand()) {
    void translate(interaction);
  }
});

client.on(Events.ClientReady, () => {
  logHandler.info("Bot is ready.");
});

instantiateServer();
await client.login(process.env.DISCORD_TOKEN);
