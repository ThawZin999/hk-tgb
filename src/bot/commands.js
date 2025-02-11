import { getMainMenu, getInlineKeyboard } from "./menus.js";
import { Markup } from "telegraf";

export const setupCommands = (bot) => {
  bot.start(async (ctx) => {
    await ctx.reply(
      "မင်္ဂလာပါ။ Hikaru Bot မှ ကြိုဆိုပါတယ်။",
      getInlineKeyboard()
    );
    await ctx.reply("Main Menu", getMainMenu());
  });

  // books
  // Function to handle forwarding messages and replying with inline keyboard
  const handleBooks = async (ctx, messageIds) => {
    const groupId = -1002476040515; // Your channel's chat ID
    try {
      for (const messageId of messageIds) {
        await ctx.telegram.copyMessage(ctx.chat.id, groupId, messageId);
      }
      await ctx.reply(
        "အချို့စာအုပ်များကိုဂိုဒေါင်ရှင်းအထူးလျှော့ဈေးဖြင့်ပေးထားပါတယ်။\nစာအုပ်ဝယ်ယူရန်အတွက် ဝယ်ယူမည့်စာအုပ်၏ codeကိုမှတ်ပြီး Adminနှင့်တိုက်ရိုက်ဆက်သွယ်မှာယူနိုင်ပါတယ်ခင်ဗျာ👇",
        Markup.inlineKeyboard([
          Markup.button.url("Admin နှင့်ဆက်သွယ်မည်", "https://t.me/hikarujls"),
        ])
      );
    } catch (error) {
      console.error("Error forwarding message:", error);
      await ctx.reply("Sorry, I could not forward the message.");
    }
  };

  // books
  bot.hears("Hikaruမှ ဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ", (ctx) => {
    ctx.reply(
      "Choose the level:",
      Markup.keyboard([
        ["N5 Books", "N4 Books"],
        ["N3 Books", "N2 Books"],
        ["General Books", "Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  bot.hears("N5 Books", async (ctx) => {
    const messageIds = [44, 46, 48, 50, 52, 54, 110]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N4 Books", async (ctx) => {
    const messageIds = [56, 58, 60, 62, 64, 66, 98, 106, 108]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N3 Books", async (ctx) => {
    const messageIds = [68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N2 Books", async (ctx) => {
    const messageIds = [94, 96]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("General Books", async (ctx) => {
    const messageIds = [100, 102, 104]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });
  //books

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
        ["N5 1", "N5 2", "N5 3"],
        ["N5 4", "N5 5", "N5 6"],
        ["N5 7", "N5 8", "N5 9"],
        ["N5 10", "N5 11", "N5 12"],
        ["N5 13", "N5 14", "N5 15"],
        ["N5 16", "N5 17", "N5 18"],
        ["N5 19", "N5 20", "N5 21"],
        ["N5 22", "N5 23", "N5 24"],
        ["N5 25", "Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  const n5MessageIds = {
    "N5 1": 11,
    "N5 2": 25,
    "N5 3": 27,
    "N5 4": 29,
    "N5 5": 31,
    "N5 6": 33,
    "N5 7": 35,
    "N5 8": 37,
    "N5 9": 47,
    "N5 10": 49,
    "N5 11": 51,
    "N5 12": 53,
    "N5 13": 55,
    "N5 14": 57,
    "N5 15": 59,
    "N5 16": 61,
    "N5 17": 117,
    "N5 18": 118,
    "N5 19": 119,
    "N5 20": 120,
    "N5 21": 121,
    "N5 22": 122,
    "N5 23": 123,
    "N5 24": 124,
    "N5 25": 125,
  };

  Object.keys(n5MessageIds).forEach((key) => {
    bot.hears(key, async (ctx) => {
      const messageId = n5MessageIds[key];
      const groupId = -1002250750536; // Your group's chat ID
      try {
        // Corrected parameter order
        await ctx.telegram.copyMessage(ctx.chat.id, groupId, messageId);
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

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", getMainMenu());
  });
};
