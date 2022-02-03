import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { config } from "dotenv";
config();

const commands = [{
    name: "ping",
    description: "Replies with Pong"
}];

const rest = new REST({ version: "9" }).setToken(process.env.AUTH_TOKEN);

export async function registerCommands()
{
    try {
        console.log("Adding slash commands...");
    
        const res = await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.TEST_SERVER
            ),
            { body: commands }
        )

        console.log({res});

        console.log("Added slash commands!");
        
    } catch (error) {
        console.error(error);
    }
}
