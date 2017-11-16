const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzgwNzQ2OTIxMzU2Mjk2MTky.DO9FwQ.eUFX63NREeU7YtT1G_8WkqdMwXk');

bot.on('guildMemberAdd', member => {

    console.log('User' + mentions.user.username + 'joined the server!')
    console.log(member)

    member.guild.channels.get('380843437152534551').send('Welcome, ' + mentions.user.username + '**, please read the rules')
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('380843437152534551').send('**' + mentions.user.username + '** left...')

});
