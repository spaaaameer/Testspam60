const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("575692614427475978")
setInterval(function() {
channel.send(`I need credit credit credit credit please`);
}, 30)
})

client.login(process.env.BOT_TOKEN);