require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const express = require("express");
const bot = new Telegraf(process.env.BOT_TOKEN);

// Array of possible messages
const messages = [
  "Hello, this is message 1!",
  "Greetings from message 2!",
  "Here’s a random message for you: message 3!",
  "Message 4: Enjoy your day!",
  "Message 5: Stay awesome!",
];

// Start command with the main menu
bot.start((ctx) => {
  ctx.reply(
    "Welcome to the Menu Bot! Choose a category:",
    Markup.keyboard([
      ["Menu 1", "Menu 2", "Random Message"], // Row 1 buttons
      ["Join Our Group", "Multiple Messages"], // Row 3 button for the group
      ["Menu 3", "More Options"], // Row 2 buttons
    ])
      .resize() // Adjust button size to fit neatly
      .oneTime(false) // Keep the menu visible
  );
});

// "Random Message" button handler
bot.hears("Random Message", (ctx) => {
  // Select a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  ctx.reply(randomMessage);
});

// Menu 1 handler
bot.hears("Menu 1", (ctx) => {
  ctx.reply(
    "You selected Menu 1! Here are your options:",
    Markup.keyboard([
      ["Option 1.1", "Option 1.2"], // Submenu for Menu 1
      ["Back to Main Menu"],
    ])
      .resize()
      .oneTime(false)
  );
});

// Menu 2 handler
bot.hears("Menu 2", (ctx) => {
  ctx.reply(
    "You selected Menu 2! Here are your options:",
    Markup.keyboard([
      ["Option 2.1", "Option 2.2"], // Submenu for Menu 2
      ["Back to Main Menu"],
    ])
      .resize()
      .oneTime(false)
  );
});

// Join Our Group handler
bot.hears("Join Our Group", (ctx) => {
  ctx.reply(
    "Click the button below to join our Telegram group:",
    Markup.inlineKeyboard([
      Markup.button.url("Join Group", "https://t.me/+zFqftnsFYnExOGU9"), // Inline button with URL
    ])
  );
});

// More Options handler
bot.hears("More Options", (ctx) => {
  ctx.reply(
    "Here are more options:",
    Markup.keyboard([
      ["Option 3.1", "Option 3.2"], // Submenu for More Options
      ["Back to Main Menu"],
    ])
      .resize()
      .oneTime(false)
  );
});

// "Multiple Messages" button handler
bot.hears("Multiple Messages", async (ctx) => {
  try {
    await ctx.reply("Message 1: Hello, this is the first message!");
    await ctx.reply("Message 2: Here’s some more information.");
    await ctx.reply("Message 3: Let me know if you have questions.");
    await ctx.reply("Message 4: Thank you for using our bot!");
  } catch (error) {
    console.error("Error sending multiple messages:", error);
    ctx.reply("Sorry, I could not send all the messages.");
  }
});

// Back to Main Menu
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

// Launch the bot
bot.launch();
console.log("Bot is running...");

const app = express();
app.use(bot.webhookCallback("/webhook")); // Set webhook endpoint

// Root route for `/`
app.get("/", (req, res) => {
  res.send("Welcome to the Telegram Bot Server!");
});

// Other custom routes (optional)
app.get("/status", (req, res) => {
  res.send("Bot is running and healthy!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

try {
  bot.telegram.setWebhook(`${process.env.VERCEL_URL}/webhook`);
} catch (error) {
  console.error("Error setting webhook:", error);
} // Set webhook URL
