import { getMainMenu, getInlineKeyboard } from "./menus.js";
import { Markup } from "telegraf";
import { n5Kotoba1, n5Kotoba2 } from "./kotoba.js";

function escapeMarkdownV2(text) {
  return text.replace(/([_*[\]()~`>#+-={}.!])/g, "\\$1");
}

function removePipes(text) {
  return text.replace(/\|\|/g, "");
}

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
      "ဉပမာ-Unit 1 Kotobaကျက်ရန်အတွက်N5 1ကိုရွေးချယ်ပါ။ Quizဖြေရန်အတွက် N5 1 Quizကိုထပ်ခါထပ်ခါနှိပ်သွားပါ။",
      Markup.keyboard([
        ["N5 1", "N5 1 Quiz"],
        ["N5 2", "N5 2 Quiz"],
        ["N5 3", "N5 3 Quiz"],
        ["N5 4", "N5 4 Quiz"],
        ["N5 5", "N5 5 Quiz"],
        ["N5 6", "N5 6 Quiz"],
        ["N5 7", "N5 7 Quiz"],
        ["N5 8", "N5 8 Quiz"],
        ["N5 9", "N5 9 Quiz"],
        ["N5 10", "N5 10 Quiz"],
        ["N5 11", "N5 11 Quiz"],
        ["N5 12", "N5 12 Quiz"],
        ["N5 13", "N5 13 Quiz"],
        ["N5 14", "N5 14 Quiz"],
        ["N5 15", "N5 15 Quiz"],
        ["N5 16", "N5 16 Quiz"],
        ["N5 17", "N5 17 Quiz"],
        ["N5 18", "N5 18 Quiz"],
        ["N5 19", "N5 19 Quiz"],
        ["N5 20", "N5 20 Quiz"],
        ["N5 21", "N5 21 Quiz"],
        ["N5 22", "N5 22 Quiz"],
        ["N5 23", "N5 23 Quiz"],
        ["N5 24", "N5 24 Quiz"],
        ["N5 25", "N5 25 Quiz"],
        ["Back"],
      ])
    );
  });

  bot.hears("N5 1", (ctx) => {
    const message = n5Kotoba1.map(removePipes).join("\n");
    ctx.reply(message);
  });

  bot.hears("N5 1 Quiz", (ctx) => {
    const randomN5Kotoba =
      n5Kotoba1[Math.floor(Math.random() * n5Kotoba1.length)];
    const escapedMessage = escapeMarkdownV2(randomN5Kotoba);
    ctx.replyWithMarkdownV2(escapedMessage);
  });

  bot.hears("N5 2", (ctx) => {
    const message = n5Kotoba2.map(removePipes).join("\n");
    ctx.reply(message);
  });

  bot.hears("N5 2 Quiz", (ctx) => {
    const randomN5Kotoba =
      n5Kotoba2[Math.floor(Math.random() * n5Kotoba2.length)];
    const escapedMessage = escapeMarkdownV2(randomN5Kotoba);
    ctx.replyWithMarkdownV2(escapedMessage);
  });

  //Videos
  // bot.hears("Video သင်ခန်းစာများလေ့လာရန်", (ctx) => {
  //   ctx.reply(
  //     "Video Lessons",
  //     Markup.keyboard([
  //       ["တိုခုတေး စားသောက်ဆိုင်"],
  //       ["N2 Shinkanzen Goi(Part 2)"],
  //       ["ဂျပန်စာအခြေခံသင်ခန်းစာများ(N5)"],
  //       ["N4 Reading", "Back"],
  //     ])
  //       .resize()
  //       .oneTime(false)
  //   );
  // });

  // bot.hears("N2 Shinkanzen Goi(Part 2)", (ctx) => {
  //   ctx.reply(
  //     "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
  //   );
  // });
  // bot.hears("ဂျပန်စာအခြေခံသင်ခန်းစာများ(N5)", (ctx) => {
  //   ctx.reply(
  //     "https://youtube.com/playlist?list=PL52UIvGzlVBrMNAH3oUCA_zPi4bZaq8Jj&si=LnttWTuJ6VNo9Cth"
  //   );
  // });
  // bot.hears("တိုခုတေး စားသောက်ဆိုင်", (ctx) => {
  //   ctx.reply(
  //     "https://youtube.com/playlist?list=PL52UIvGzlVBrzzVU8fhd_naMvGW1yObCP&si=ul48RC_uCSJpOdor"
  //   );
  // });
  // bot.hears("N4 Reading", (ctx) => {
  //   ctx.reply(
  //     "https://youtube.com/playlist?list=PL52UIvGzlVBrIPgdHLnbjCfUgc3jnMvzj&si=K8SJZelhM9y6LbfW"
  //   );
  // });
  //Videos

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

  bot.on("message", (ctx) => {
    const messageId = ctx.message.chat.id; // Original message ID
    ctx.reply(`Original Message ID: ${messageId}`);
  });

  bot.action("Forward Message", async (ctx) => {
    const chatId = ctx.chat.id; // The user's chat ID
    const savedMessagesChatId = "5974036353"; // Your bot's ID (represents "Saved Messages")

    try {
      // Forward a message from your saved messages chat to the user
      await ctx.telegram.forwardMessage(chatId, savedMessagesChatId, "2471"); // Replace 2408 with the actual message ID
      await ctx.telegram.forwardMessage(chatId, savedMessagesChatId, "2473"); // Replace 2410 with the actual message ID

      ctx.reply("Messages have been forwarded!");
    } catch (error) {
      console.error("Error forwarding messages:", error);
      ctx.reply("Failed to forward messages. Please try again later.");
    }
  });

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", getMainMenu());
  });
};
