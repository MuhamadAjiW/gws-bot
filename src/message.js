import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { bot } from "./bot.js";

const btn = new ButtonBuilder()
                .setCustomId("TestButton")
                .setLabel("This is a test button")
                .setStyle(ButtonStyle.Primary);
const row = new ActionRowBuilder()
                .addComponents(btn);

export const prepMessage = () => {
    bot.on("messageCreate", async (message) => {
        if (!message?.author.bot){
            console.log(`Content: ${message.content}`);
            console.log(btn);

            message.channel.send({
                content: `You said: ${message.content}`,
                components: [row]
            });
        }
    })
    
    bot.on('interactionCreate', async interaction =>{
        if (interaction.customId === "TestButton"){
            await interaction.reply({
                content: "You clicked the button!",
                ephemeral: true
            })
        }
    })
}