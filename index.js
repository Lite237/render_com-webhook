import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.token);
const app = express();

// Set the bot API endpoint
app.use(await bot.createWebhook({ domain: process.env.webhookDomain }));

bot.on(message("text"), (ctx) => ctx.reply("Hello"));

app.listen(3000, () => console.log("Listening on 3000", 3000));
