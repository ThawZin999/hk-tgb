import { Markup } from "telegraf";

const channelId = -1002310710756; // Your channel's chat ID

const handleBooks = async (ctx, messageIds) => {
  try {
    for (const messageId of messageIds) {
      await ctx.telegram.copyMessage(ctx.chat.id, channelId, messageId);
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

export const setupBookHandlers = (bot) => {
  bot.hears("Hikaruမှ ဝယ်ယူနိုင်သည့်ဂျပန်စာအုပ်များ", (ctx) => {
    ctx.reply(
      "Choose the level:",
      Markup.keyboard([
        ["N5 Books", "N4 Books"],
        ["N3 Books", "N2 Books"],
        ["General Books"],
        ["Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  bot.hears("N5 Books", async (ctx) => {
    const messageIds = [3, 4, 6, 8, 9, 10]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N4 Books", async (ctx) => {
    const messageIds = [16, 18, 20, 22, 26, 24]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N3 Books", async (ctx) => {
    const messageIds = [16, 18, 20, 22, 26, 24]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("N2 Books", async (ctx) => {
    const messageIds = [16, 18, 20, 22, 26, 24]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });

  bot.hears("General Books", async (ctx) => {
    const messageIds = [16, 18, 20, 22, 26, 24]; // List of message IDs to copy
    await handleBooks(ctx, messageIds);
  });
};
