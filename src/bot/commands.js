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

  //Files
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
  //Files

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

  bot.hears("Random Message", (ctx) => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    ctx.reply(randomMessage);
  });

  //Videos
  bot.hears("Video သင်ခန်းစာများလေ့လာရန်", (ctx) => {
    ctx.reply(
      "Video Lessons",
      Markup.keyboard([
        ["တိုခုတေး စားသောက်ဆိုင်"],
        ["N2 Shinkanzen Goi(Part 2)"],
        ["ဂျပန်စာအခြေခံသင်ခန်းစာများ(N5)"],
        ["N4 Reading", "Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  bot.hears("N2 Shinkanzen Goi(Part 2)", (ctx) => {
    ctx.reply(
      "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
    );
  });
  bot.hears("ဂျပန်စာအခြေခံသင်ခန်းစာများ(N5)", (ctx) => {
    ctx.reply(
      "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
    );
  });
  bot.hears("တိုခုတေး စားသောက်ဆိုင်", (ctx) => {
    ctx.reply(
      "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
    );
  });
  bot.hears("N4 Reading", (ctx) => {
    ctx.reply(
      "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
    );
  });
  //Videos

  bot.hears("Video Direct Link", (ctx) => {
    ctx.reply(
      Markup.inlineKeyboard([
        Markup.button.url(
          "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
        ),
      ])
    );
  });

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", getMainMenu());
  });
};
