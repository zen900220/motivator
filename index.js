const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");

if (fs.existsSync("./.env")) {
  require("dotenv").config();
}

const generateResponse = require("./utils/generateResponse");
const isMedia = require("./utils/isMedia");
const keepAlive = require("./utils/server");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.channel.name !== "100-days-challenge") return;
  if (message.attachments.size <= 0 || !message.attachments.every(isMedia))
    return;

  message.reply(await generateResponse());
});

keepAlive();

client.login(process.env.TOKEN);
