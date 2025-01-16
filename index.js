import dotenv from "dotenv";
import { Telegraf, Markup } from "telegraf";
import express from "express";

dotenv.config();
const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Middleware for logging requests
app.use(express.json());

// Webhook route with logging
app.post("/webhook", (req, res) => {
  console.log("Received a webhook event");
  bot.webhookCallback("/webhook")(req, res);
});

const messages = [
  "Hello, this is message 1!",
  "Greetings from message 2!",
  "Here’s a random message for you: message 3!",
  "Message 4: Enjoy your day!",
  "Message 5: Stay awesome!",
];

const getMainMenu = () => {
  return Markup.keyboard([
    ["Hikaruမှဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ"],
    ["Menu", "Random Message"],
    ["Fileများရယူရန်", "Multiple Messages"],
    ["More Options"],
  ])
    .resize()
    .oneTime(false);
};

// Handlers
// Send a welcome message with an inline keyboard
bot.start((ctx) => {
  ctx.reply(
    "မင်္ဂလာပါ။ Hikaru Bot မှ ကြိုဆိုပါတယ်။",
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          "Admin နှင့်တိုက်ရိုက်စကားပြောမည်",
          "https://t.me/hikarujls"
        ),
      ],
      [
        Markup.button.url(
          "သင်တန်စုံစမ်းရန်",
          "https://m.me/hikarujapaneseschool"
        ),
      ],
    ])
  );

  // Send the main menu with a reply keyboard
  ctx.reply("Main Menu", {
    reply_markup: getMainMenu(),
  });
});

bot.command("menu", (ctx) => {
  ctx.reply("Choose a category:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Appetizers", callback_data: "category_appetizers" }],
        [{ text: "Main Courses", callback_data: "category_main_courses" }],
        [{ text: "Desserts", callback_data: "category_desserts" }],
      ],
    },
  });
});

// Command to display the menu
bot.hears("Menu", async (ctx) => {
  try {
    await ctx.reply("Choose a category:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Appetizers", callback_data: "category_appetizers" }],
          [{ text: "Main Courses", callback_data: "category_main_courses" }],
          [{ text: "Desserts", callback_data: "category_desserts" }],
        ],
      },
    });
  } catch (error) {
    console.error("Error handling 'Menu':", error);
    ctx.reply("Sorry, something went wrong.");
  }
});

// Action handlers for menu categories
bot.action("category_appetizers", (ctx) => {
  ctx.reply("Appetizers Menu:\n1. Samosa - $5\n2. Pani Puri - $7");
});

bot.action("category_main_courses", (ctx) => {
  ctx.reply("Main Courses Menu:\n1. Chicken Tikka - $12\n2. Biryani - $15");
});

bot.action("category_desserts", (ctx) => {
  ctx.reply("Desserts Menu:\n1. Gulab Jamun - $4\n2. Kulfi - $5");
});

// Menu 1 handler
bot.hears("Hikaruမှ ဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ", (ctx) => {
  ctx.reply(
    "You selected Menu 1! Here are your options:",
    Markup.keyboard([["Option 1.1", "Option 1.2"], ["Back to Main Menu"]])
      .resize()
      .oneTime(false)
  );
});

bot.hears("Random Message", (ctx) => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  ctx.reply(randomMessage);
});

bot.hears("Fileများရယူရန်", (ctx) => {
  ctx.reply(
    "Level ရွေးချယ်ပါ",
    Markup.keyboard([
      ["N5 Files", "N4 Files"],
      ["N3 Files", "N2 Files"],
      ["N1 Files", "Back"],
    ])
      .resize()
      .oneTime(false)
  );
});

bot.hears("N5 Files", (ctx) => {
  ctx.reply(
    "👇 နှိပ်ပါ",
    Markup.inlineKeyboard([
      Markup.button.url("N5 Fileများ", "https://t.me/hikaruN5files"),
    ])
  );
});

bot.hears("N4 Files", (ctx) => {
  ctx.reply(
    "👇 နှိပ်ပါ",
    Markup.inlineKeyboard([
      Markup.button.url("N4 Fileများ", "https://t.me/hikaruN4files"),
    ])
  );
});

bot.hears("N3 Files", (ctx) => {
  ctx.reply(
    "👇 နှိပ်ပါ",
    Markup.inlineKeyboard([
      Markup.button.url("N3 Fileများ", "https://t.me/hikaruN3files"),
    ])
  );
});

bot.hears("N2 Files", (ctx) => {
  ctx.reply(
    "👇 နှိပ်ပါ",
    Markup.inlineKeyboard([
      Markup.button.url("N2 Fileများ", "https://t.me/hikaruN2files"),
    ])
  );
});

bot.hears("N1 Files", (ctx) => {
  ctx.reply(
    "👇 နှိပ်ပါ",
    Markup.inlineKeyboard([
      Markup.button.url("N1 Fileများ", "https://t.me/hikaruN1files"),
    ])
  );
});

bot.hears("Back", (ctx) => {
  ctx.reply("Main Menu:", getMainMenu());
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
      if (!/^https?:\/\//.test(process.env.VERCEL_URL)) {
        console.error("VERCEL_URL must include 'https://' or 'http://'.");
        return;
      }
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
