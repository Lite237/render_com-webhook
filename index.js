import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.token);
const app = express();

// Set the bot API endpoint
app.use(await bot.createWebhook({ domain: process.env.webhookDomain }));

app.get("/", (req, res) => {
    res.send("Bot started");
});

bot.start((ctx) => {
    ctx.reply(`Hello ${ctx.from.first_name}`, {
        reply_to_message_id: ctx.message.message_id,
    });
});

bot.on(message("text"), (ctx) => ctx.reply("Hello"));

app.listen(3000, () => console.log("Listening on port", 3000));
