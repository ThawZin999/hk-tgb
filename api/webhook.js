import { BOT_TOKEN, VERCEL_URL } from "../src/config.js";
import { Telegraf } from "telegraf";

const bot = new Telegraf(BOT_TOKEN);

export default async (req, res) => {
  if (req.method === "POST") {
    await bot.telegram.setWebhook(`${VERCEL_URL}/api/index`);
    res.status(200).send("Webhook set successfully.");
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
