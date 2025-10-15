import { Markup } from "telegraf";

export const getMainMenu = () =>
  Markup.keyboard([
    ["Fileများရယူရန်", "သင်ကြားပုံများ"],
    ["Video သင်ခန်းစာများလေ့လာရန်"],
  ])
    .resize()
    .oneTime(false);

export const getInlineKeyboard = () =>
  Markup.inlineKeyboard([
    [Markup.button.url("Admin နှင့်ဆက်သွယ်မည်", "https://t.me/hikarujls")],
  ]);
