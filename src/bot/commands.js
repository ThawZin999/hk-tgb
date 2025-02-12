import { getMainMenu, getInlineKeyboard } from "./menus.js";
import { Markup } from "telegraf";
import { setupBookHandlers } from "./handlers/books.js";
import { setupKotobaHandlers } from "./handlers/kotoba.js";
import { setupVdclassesHandlers } from "./handlers/vdclasses.js";

export const setupCommands = (bot) => {
  bot.start((ctx) => {
    ctx.reply("Main Menu", getMainMenu());
    ctx.reply("မင်္ဂလာပါ။ Hikaru Bot မှ ကြိုဆိုပါတယ်။", getInlineKeyboard());
  });

  // Setup book handlers
  setupBookHandlers(bot);

  // Setup kotoba handlers
  setupKotobaHandlers(bot);

  // Setup class handlers
  setupVdclassesHandlers(bot);

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

  // Contact command
  bot.command("contact", (ctx) => {
    ctx.reply(
      "Contact Us:",
      Markup.inlineKeyboard([
        [
          Markup.button.url(
            "Facebook Page",
            "https://www.facebook.com/hikarujapaneseschool"
          ),
        ],
        [
          Markup.button.url(
            "YouTube Channel",
            "https://youtube.com/@hikarujls?si=Kh-rPwOAgCYUWWNQ"
          ),
        ],
        [Markup.button.url("Telegram", "https://t.me/hikarujls")],
      ])
    );
  });

  bot.hears("Back", (ctx) => {
    ctx.reply("Main Menu:", getMainMenu());
  });
};
