import { getMainMenu, getInlineKeyboard } from "./menus.js";
import { Markup } from "telegraf";

export const setupCommands = (bot) => {
  bot.start((ctx) => {
    ctx.reply("Main Menu", getMainMenu());
    ctx.reply("မင်္ဂလာပါ။ Hikaru Bot မှ ကြိုဆိုပါတယ်။", getInlineKeyboard());
  });

  // Book handler
  bot.hears("Hikaruမှ ဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ", (ctx) => {
    ctx.reply(
      "Choose the level:",
      Markup.keyboard([
        ["N5 Books", "N4 Books"],
        ["N3 Books", "N2 Books"],
        ["Back"],
      ])
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

  //kotoba
  bot.hears("Kotobaများကျက်ရန်", (ctx) => {
    ctx.reply(
      "Level ရွေးချယ်ပါ",
      Markup.keyboard([
        ["N5 Kotoba", "N4 Kotoba"],
        ["N3 Kotoba", "N2 Kotoba"],
        ["N1 Kotoba", "Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  bot.hears("N5 Kotoba", (ctx) => {
    ctx.reply(
      "ဉပမာ-Unit 1 Kotobaကျက်ရန်အတွက်N5 1ကိုရွေးချယ်ပါ။ ",
      Markup.keyboard([
        ["N5 1", "N5 2"],
        ["N5 3", "N5 4"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  const n5MessageIds = {
    "N5 1": 3,
    "N5 2": 4,
    "N5 3": 6,
    "N5 4": 8,
  };

  Object.keys(n5MessageIds).forEach((key) => {
    bot.hears(key, async (ctx) => {
      const messageId = n5MessageIds[key];
      const channelId = -1002310710756; // Your channel's chat ID

      try {
        await ctx.telegram.forwardMessage(ctx.chat.id, channelId, messageId);
      } catch (error) {
        console.error("Error forwarding message:", error);
        await ctx.reply("Sorry, I could not forward the message.");
      }
    });
  });

  //kotoba

  //videos
  bot.hears("Video သင်ခန်းစာများလေ့လာရန်", (ctx) => {
    ctx.reply(
      "👇 ရွေးချယ်ပါ",
      Markup.inlineKeyboard([
        [
          Markup.button.url(
            "ဂျပန်စာအခြေခံသင်ခန်းစာများ(N5)",
            "https://youtube.com/playlist?list=PL52UIvGzlVBrMNAH3oUCA_zPi4bZaq8Jj&si=LnttWTuJ6VNo9Cth"
          ),
        ],
        [
          Markup.button.url(
            "N4 Reading",
            "https://youtube.com/playlist?list=PL52UIvGzlVBrNnCdGNItoaWimPs57D4RT&si=op_pncM2SteBHKFt"
          ),
        ],
        [
          Markup.button.url(
            "တိုခုတေး စားသောက်ဆိုင်",
            "https://youtube.com/playlist?list=PL52UIvGzlVBrzzVU8fhd_naMvGW1yObCP&si=ul48RC_uCSJpOdor"
          ),
        ],
        [
          Markup.button.url(
            "N2 Shinkanzen Goi(Part 2)",
            "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
          ),
        ],
      ])
    );
  });
  //videos

  bot.hears("N5 Books", async (ctx) => {
    const messageIds = [3, 4, 6, 8, 9, 10]; // List of message IDs to copy
    const channelId = -1002310710756; // Your channel's chat ID

    try {
      for (const messageId of messageIds) {
        await ctx.telegram.copyMessage(ctx.chat.id, channelId, messageId);
      }
    } catch (error) {
      console.error("Error forwarding message:", error);
      await ctx.reply("Sorry, I could not forward the message.");
    }
  });

  bot.hears("N4 Books", async (ctx) => {
    const messageIds = [16, 18, 20, 22, 26, 24]; // List of message IDs to copy
    const channelId = -1002310710756; // Your channel's chat ID

    try {
      for (const messageId of messageIds) {
        await ctx.telegram.copyMessage(ctx.chat.id, channelId, messageId);
      }
    } catch (error) {
      console.error("Error forwarding message:", error);
      await ctx.reply("Sorry, I could not forward the message.");
    }
  });

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", getMainMenu());
  });
};
