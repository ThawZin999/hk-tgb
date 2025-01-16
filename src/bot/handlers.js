export const setupHandlers = (bot) => {
  bot.action("category_appetizers", (ctx) => {
    ctx.reply("Appetizers Menu:\n1. Samosa - $5\n2. Pani Puri - $7");
  });

  bot.action("category_main_courses", (ctx) => {
    ctx.reply("Main Courses Menu:\n1. Chicken Tikka - $12\n2. Biryani - $15");
  });

  bot.action("category_desserts", (ctx) => {
    ctx.reply("Desserts Menu:\n1. Gulab Jamun - $4\n2. Kulfi - $5");
  });
};
