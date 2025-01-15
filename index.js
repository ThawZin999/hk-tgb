import dotenv from "dotenv";
import { Telegraf, Markup } from "telegraf";
import express from "express";

dotenv.config();
const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Middleware for logging requests
app.use(express.json());

// Webhook route
app.post("/webhook", bot.webhookCallback("/webhook"));

const messages = [
  "Hello, this is message 1!",
  "Greetings from message 2!",
  "Here’s a random message for you: message 3!",
  "Message 4: Enjoy your day!",
  "Message 5: Stay awesome!",
];

// Handlers
bot.start((ctx) => {
  ctx.reply(
    "Welcome to the Menu Bot! Choose a category:",
    Markup.keyboard([
      ["Menu 1", "Menu 2", "Random Message"],
      ["Join Our Group", "Multiple Messages"],
      ["Menu 3", "More Options"],
    ])
      .resize()
      .oneTime(false)

    //to add menu command here
  );
});

bot.hears("Random Message", (ctx) => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  ctx.reply(randomMessage);
});

bot.hears("Join Our Group", (ctx) => {
  ctx.reply(
    "Click below to join our Telegram group:",
    Markup.inlineKeyboard([
      Markup.button.url("Join Group", "https://t.me/+zFqftnsFYnExOGU9"),
    ])
  );
});

bot.hears("Multiple Messages", async (ctx) => {
  try {
    await ctx.reply("Message 1: Hello, this is the first message!");
    await ctx.reply("Message 2: Here’s some more information.");
    await ctx.reply("Message 3: Let me know if you have questions.");
  } catch (error) {
    console.error("Error sending multiple messages:", error);
    ctx.reply("Sorry, I could not send all the messages.");
  }
});

// Webhook Setup
async function setWebhookWithRetry() {
  try {
    if (process.env.VERCEL_URL) {
      await bot.telegram.setWebhook(`${process.env.VERCEL_URL}/webhook`);
      console.log("Webhook set successfully.");
    } else {
      console.error("VERCEL_URL is not defined.");
    }
  } catch (error) {
    if (error.response?.parameters?.retry_after) {
      const retryAfter = error.response.parameters.retry_after;
      console.error(
        `Rate limit exceeded. Retrying after ${retryAfter} seconds...`
      );
      setTimeout(setWebhookWithRetry, retryAfter * 1000);
    } else {
      console.error("Error setting webhook:", error);
    }
  }
}

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await setWebhookWithRetry();
});

// Graceful Shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
