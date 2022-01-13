const { Client, version } = require('discord.js');

const { 

    token, 

     } = require('./config.json')

const bot = new Client();

bot.on("ready", async() => {

    console.log(`[ Client ] ${bot.user.tag} Is Now Online`);

    bot.user.setPresence({

        status: 'dnd',

        activity: {

            name: 'DADOS PARA SERVIDORES',

            type: 'STREAMING',

        }

    })

})

bot.login(token)



