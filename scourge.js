const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('MzgwNzQ2OTIxMzU2Mjk2MTky.DO9FwQ.eUFX63NREeU7YtT1G_8WkqdMwXk');

bot.on('guildMemberAdd', member => {

    console.log('User' + member.user.username + 'joined the server!')
    console.log(member)

    member.guild.channels.get('373244635293941764').send('Welcome, **' + member.user.username + '**, please read the rules!')
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.get('373244635293941764').send('**' + member.user.username + '** left...')

});

bot.on("message", (message) => {
    if(message.content == "ayy") {
        message.channel.sendMessage("lmao :alien:");
    }
});    
