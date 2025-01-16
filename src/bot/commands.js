import { getMainMenu, getInlineKeyboard } from "./menus.js";
import { Markup } from "telegraf";

const messages = [
  "Hello, this is message 1!",
  "Greetings from message 2!",
  "Here’s a random message for you: message 3!",
  "Message 4: Enjoy your day!",
  "Message 5: Stay awesome!",
];

export const setupCommands = (bot) => {
  bot.start((ctx) => {
    ctx.reply("မင်္ဂလာပါ။ Hikaru Bot မှ ကြိုဆိုပါတယ်။", getInlineKeyboard());
    ctx.reply("Main Menu", getMainMenu());
  });

  bot.hears("Menu", (ctx) => {
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

  // Menu 1 handler
  bot.hears("Hikaruမှ ဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ", (ctx) => {
    ctx.reply(
      "You selected Menu 1! Here are your options:",
      Markup.keyboard([["Option 1.1", "Option 1.2"], ["Back"]])
        .resize()
        .oneTime(false)
    );
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

  bot.hears("Random Message", (ctx) => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    ctx.reply(randomMessage);
  });

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", { reply_markup: getMainMenu() });
  });
};
