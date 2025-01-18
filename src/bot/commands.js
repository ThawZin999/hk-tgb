import { getMainMenu, getInlineKeyboard } from "./menus.js";
import { Markup } from "telegraf";
import { n5Kotoba, n4Kotoba, n5KotobaQuiz } from "./kotoba.js";

function escapeMarkdownV2(text) {
  return text.replace(/([_*[\]()~`>#+-=|{}.!])/g, "\\$1");
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
      "Choose a category:",
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
      "Level ရွေးချယ်ပါ",
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
    );
  });

  bot.hears("N5 1", (ctx) => {
    ctx.reply(n5Kotoba.join("\n"));
    ctx.reply(
      "📝📝",
      Markup.keyboard(["N5 Quiz", "Back"]).resize().oneTime(false)
    );
  });

  bot.hears("N5 Quiz", (ctx) => {
    const randomN5Kotoba =
      n5KotobaQuiz[Math.floor(Math.random() * n5KotobaQuiz.length)];
    const escapedMessage = escapeMarkdownV2(randomN5Kotoba);
    ctx.replyWithMarkdownV2(escapedMessage);
  });

  bot.hears("N5 Quiz", (ctx) => {
    const test = "Hello ||World||";
    // const randomN5Kotoba = n5KotobaQuiz[Math.floor(Math.random() * n5KotobaQuiz.length)];
    // const escapedMessage = escapeMarkdownV2(Hello);
    ctx.replyWithMarkdownV2(test);
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

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", getMainMenu());
  });
};
