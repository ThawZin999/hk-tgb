import { Markup } from "telegraf";

const groupId = -1002476040515; // Your group's chat ID

const handleClasses = async (ctx, messageIds) => {
  try {
    for (const messageId of messageIds) {
      await ctx.telegram.copyMessage(ctx.chat.id, groupId, messageId);
    }
    await ctx.reply(
      "သင်တန်းအပ်ရန် 📝👇",
      Markup.inlineKeyboard([
        Markup.button.url("Admin နှင့်ဆက်သွယ်မည်", "https://t.me/hikarujls"),
      ])
    );
  } catch (error) {
    console.error("Error forwarding message:", error);
    await ctx.reply("Sorry, I could not forward the message.");
  }
};

export const setupVdclassesHandlers = (bot) => {
  bot.hears("သင်တန်းများအကြောင်း", (ctx) => {
    ctx.reply(
      "Choose the level:",
      Markup.keyboard([
        ["Basic+N5 Class"],
        ["N4 Class", "N3 Class"],
        ["N2 Class", "N1 Class"],
        ["Back"],
      ])
        .resize()
        .oneTime(false)
    );
  });

  bot.hears("Basic+N5 Class", async (ctx) => {
    const messageIds = [116]; // List of message IDs to copy
    await handleClasses(ctx, messageIds);
  });

  bot.hears("N4 Class", async (ctx) => {
    const messageIds = [116]; // List of message IDs to copy
    await handleClasses(ctx, messageIds);
  });

  bot.hears("N3 Class", async (ctx) => {
    const messageIds = [116]; // List of message IDs to copy
    await handleClasses(ctx, messageIds);
  });

  bot.hears("N2 Class", async (ctx) => {
    const messageIds = [116]; // List of message IDs to copy
    await handleClasses(ctx, messageIds);
  });

  bot.hears("N1 Class", async (ctx) => {
    const messageIds = [116]; // List of message IDs to copy
    await handleClasses(ctx, messageIds);
  });
};
