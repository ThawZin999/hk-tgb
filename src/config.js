import dotenv from "dotenv";

dotenv.config();

export const BOT_TOKEN = process.env.BOT_TOKEN;
export const VERCEL_URL = process.env.VERCEL_URL;
export const PORT = process.env.PORT || 4000;
