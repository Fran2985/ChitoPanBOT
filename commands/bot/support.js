const Discord = require('discord.js');

module.exports = {
    name: 'support',
    description: 'Support command',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle('Support:')
	    .setURL('https://discord.gg/MHfKz6aYpx')
        embed.addField("Discord Support:", "[>>LINK<<](https://discord.gg/MHfKz6aYpx)")
	    .setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/831975734070476861/850154574596800592/cpbpfp.jpg')
	    .setTimestamp();
        msg.channel.send(embed);
    }
};
