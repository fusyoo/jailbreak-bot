import { Client, Intents } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
    intents: [ Intents.FLAGS.GUILDS ]
});

client.on("ready", () =>
{
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) =>
{
    if(interaction.isCommand() && interaction.commandName === "ping")
    {
        await interaction.reply(
            `Pong! <@${interaction.member.user.id}>`
        );
    }
});

client.login(process.env.AUTH_TOKEN);
