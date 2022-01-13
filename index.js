const { Client, version } = require('discord.js');

  const ping = new Date();

  ping.setHours(ping.getHours() - 3);

  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);

const { 

    token

} = require('./config.json')

const bot = new Client();

bot.on("ready", async() => {

    console.log(`[ Client ] ${bot.user.tag} Is Now Online`);

  bot.user.setPresence({

        status: 'idle',

        activity: {

            name: 'EQUIPE!',

            type: 'PLAYING',

        }

    })

})

bot.login(token)



