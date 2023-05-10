const { SlashCommandBuilder } = require('discord.js');
const {botBan} = require("../ban/bot-ban");

// ****THIS VARIABLE IS NECESSARY IN EACH SLASH COMMAND FILE****
//Access all bot-banned users ID
const botBannedUsersId = botBan.botBannedUsersId;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	

	async execute(interaction) {
		// Reply for bot-banned users
		for(let bannedUser of botBannedUsersId) {
			if(interaction.user.id === bannedUser) {
				return await interaction.reply({content: `Beep Boop, you aren't allowed to use me!`, ephemeral: true});
			}
		}
		
		// Reply for everyone else
		await interaction.reply(`Pong!`);
	},
};