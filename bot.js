const Discord = require("discord.js");
const self = new Discord.Client();

self.on("ready", () => {

  console.log("Sunt gata sa fiu online 24/7.\n[LOGGER] Sunt logat pe " + self.user.tag)
});

self.login(process.env.TOKEN);
