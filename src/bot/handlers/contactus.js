import { Markup } from "telegraf";

export const setupContactUsHandlers = (bot) => {
  bot.hears("ဆက်သွယ်ရန်", (ctx) => {
    ctx.reply(
      "Channels:",
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
            "https://youtube.com/@hikarujls"
          ),
        ],
        [Markup.button.url("Telegram", "https://t.me/hikarujls")],
      ])
    );
  });
};
