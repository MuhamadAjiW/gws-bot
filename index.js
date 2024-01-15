import dotenv from 'dotenv';
import { bot } from './src/bot.js';
import { prepMessage } from './src/message.js';

dotenv.config()

bot.login(process.env.DISCORD_TOKEN);
prepMessage();

console.log("Bot started successfully");