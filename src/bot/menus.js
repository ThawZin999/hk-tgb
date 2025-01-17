import { Markup } from "telegraf";

export const getMainMenu = () =>
  Markup.keyboard([
    ["Hikaruမှ ဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ"],
    ["Menu", "Random Message"],
    ["Fileများရယူရန်", "Multiple Messages"],
    ["Video သင်ခန်းစာများလေ့လာရန်"],
    ["Video Direct Link"],
  ])
    .resize()
    .oneTime(false);

export const getInlineKeyboard = () =>
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
  ]);
