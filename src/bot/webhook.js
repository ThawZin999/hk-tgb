import { VERCEL_URL } from "../config.js";

export const setupWebhook = async (bot) => {
  try {
    if (VERCEL_URL) {
      await bot.telegram.setWebhook(`${VERCEL_URL}/webhook`);
      console.log("Webhook set successfully.");
    } else {
      console.error("VERCEL_URL is not defined.");
    }
  } catch (error) {
    console.error("Error setting webhook:", error);
  }
};
