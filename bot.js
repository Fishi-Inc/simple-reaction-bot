const Discord = require('discord.js');
const config = require('./config.json');
const { EmbedBuilder } = require('discord.js');

const client = new Discord.Client();

// On Ready
client.once('ready', () => {
    console.log('Ready!');
});

var msgId = '';

// On Message
client.on('message', message => {
    if (message.startsWith("!"));
    const command = message.replace("!", "")
    const args = message.content.slice(config.prefix.length).split(/ +/);
    if (command.startsWith("rr")) {
        const exampleEmbed = new EmbedBuilder()
            .setTitle(args[1])
            .setDescription(args[2])
        const msg = message.channel.send(exampleEmbed)
        msg.react(args[3])
        msg.react(args[4])
        msgId = msg.id;
    }

});

//on reaction
client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.id === msgId) {
        reaction.message.guild.members.cache.get(user.id).roles.add('Team Morgenrot')
    }
})

client.login(config.token);
