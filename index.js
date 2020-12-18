const Discord = require("ourcord");
const config = require("./config.json");
const client = new Discord.Client(config.token, {
    status: "online"
});
require('events').EventEmitter.defaultMaxListeners = 15;

client.connect();

client.once("ready", () => {
    console.log("Bot is connected :D");
});

client.on('debug', debug => {
    console.log(`${debug}`);
});

client.on('message', message => {

    if (message.author.bot) return;
    if (message.webhookID) return;

    if (message.content === `${config.prefix}ping`) {
        message.channel.send('pong!');
    } else if (message.content === `your gay`) {
        message.channel.send('no u >:(');

    }

});