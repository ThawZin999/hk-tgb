require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

// Array of possible messages
const messages = [
  "Hello, this is message 1!",
  "Greetings from message 2!",
  "Here’s a random message for you: message 3!",
  "Message 4: Enjoy your day!",
  "Message 5: Stay awesome!",
];

// Define bot commands and menus
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
  );
});

bot.hears("Random Message", (ctx) => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  ctx.reply(randomMessage);
});

bot.hears("Menu 1", (ctx) => {
  ctx.reply(
    "You selected Menu 1! Here are your options:",
    Markup.keyboard([["Option 1.1", "Option 1.2"], ["Back to Main Menu"]])
      .resize()
      .oneTime(false)
  );
});

bot.hears("Join Our Group", (ctx) => {
  ctx.reply(
    "Click the button below to join our Telegram group:",
    Markup.inlineKeyboard([
      Markup.button.url("Join Group", "https://t.me/+zFqftnsFYnExOGU9"),
    ])
  );
});

bot.hears("Multiple Messages", async (ctx) => {
  try {
    const randomMessages = [
      "Message 1: Welcome to the bot!",
      "Message 2: Here’s something fun!",
      "Message 3: Let’s keep learning!",
    ];
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    await ctx.reply(randomMessages[randomIndex]);
  } catch (error) {
    console.error("Error sending message:", error);
    ctx.reply("Oops! Something went wrong.");
  }
});

bot.hears("Back to Main Menu", (ctx) => {
  ctx.reply(
    "Back to the main menu! Choose a category:",
    Markup.keyboard([
      ["Menu 1", "Menu 2"],
      ["Menu 3", "More Options"],
    ])
      .resize()
      .oneTime(false)
  );
});

// Set up webhook for Telegram
try {
  bot.telegram.setWebhook(`${process.env.VERCEL_URL}/webhook`);
} catch (error) {
  console.error("Error setting webhook:", error);
}

app.use(bot.webhookCallback("/webhook"));

app.get("/", (req, res) => {
  res.send("Welcome to the Telegram Bot Server!");
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//to check
