import { Bot } from "./src/bot";

async function main() {
  const bot = new Bot();
  await bot.run();
}

main();
